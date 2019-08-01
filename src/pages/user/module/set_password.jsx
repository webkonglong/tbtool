import React from 'react'
import Component from '@/Component'
import styles from './set_password.scss'

class SetPassword extends Component {
  state = {
		repeatPassword: '',
		password: ''
	}

	sub () {
		const { password, repeatPassword } = this.state

		if (password === repeatPassword && password.length > 5) {
			console.log('ok')
		}
	}

	change (name, e) {
		this.setState({ [name]: e.target.value })
	}

  render() {
    return (
      <div className={styles.password}>
        <div className={styles.body}>
					<div className={styles.input}>
						<input 
							type="password" 
							value={this.state.password} 
							onChange={this.change.bind(this, 'password')}
							placeholder="新密码"
						/>
					</div>
					<div className={styles.input}>
						<input 
							type="password" 
							value={this.state.repeatPassword} 
							onChange={this.change.bind(this, 'repeatPassword')}
							placeholder="重复新密码"
						/>
					</div>
					<div className={styles.btn} onClick={this.sub.bind(this)}>确认</div>
				</div>
      </div>
    );
  }
}

export default SetPassword
