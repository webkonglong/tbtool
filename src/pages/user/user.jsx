import React from 'react'
import Component from '@/Component'
import styles from './user.scss'
import classs from 'classnames'

import Log from './module/log.jsx'
import SetPassword from './module/set_password.jsx'
import Account from './module/account.jsx'

class User extends Component {
  state = {
		phone: '',
		email: '',
		index: 2
	}
	
	change (name, e) {
		this.setState({ [name]: e.target.value })
	}

	changeNav (index) {
		if (index < 3) {
			this.setState({ index })
		} else {
			console.log('退出')
		}
	}

  render() {
    return (
      <div className={styles.user}>
        <div className={classs(styles.card, styles.userinfo)}>
            <div className={styles.title}>
                <img src="http://demo.cssmoban.com/cssthemes6/fish_29_quixlab/images/avatar/11.png" alt=""/>
                <div>
									<p>用户名</p>
									<span>管理员</span>
                </div>
            </div>
						{[{
							text: '操作日志',
							claxx: styles.log
						}, {
							text: '修改密码',
							claxx: styles.password
						}, {
							text: '子账户管理',
							claxx: styles.account
						}, {
							text: '退出登录',
							claxx: styles.logout
						}].map((item, i) => (
							<div 
								className={classs(styles.btn, item.claxx)}
								key={i}
								onClick={this.changeNav.bind(this, i)}
							>
								{item.text}
							</div>
						))}
						<div className={styles.userContact}>
							<div className={styles.input}>
								<span>手机</span>
								<input 
									type="text" 
									value={this.state.phone}
									placeholder="点击设置"
									onChange={this.change.bind(this, 'phone')}
								/>
							</div>
							<div className={styles.input}>
								<span>邮箱</span>
								<input
									type="text" 
									value={this.state.email}
									placeholder="点击设置"
									onChange={this.change.bind(this, 'email')}
								/>
							</div>
						</div>
        </div>
        <div 
					className={classs(this.state.index !== 2 && styles.card, styles.info)}
				>
					{[<Log />, <SetPassword />, <Account />][this.state.index]}
        </div>
      </div>
    );
  }
}

export default User
