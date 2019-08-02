import React from 'react'
import Component from '@/Component'
import styles from './account.scss'
import classs from 'classnames'

class Account extends Component {
  state = {
		accounts: [{
      name: '1',
      password: '123123123'
    }, {
      name: '2',
      password: '123123123'
    },{
      name: '3',
      password: '123123123'
    },{
      name: '4',
      password: '123123123'
    },{
      name: '5',
      password: '123123123'
    }],
    name: '',
    password: ''
  }
  
  
  componentWillMount() {
    this.setState({
      name: this.state.accounts[this.state.accounts.length - 1].name + 1
    })
  }

  change (e) {
    this.setState({ password: e.target.value })
  }

  addAccount () {
    console.log(this.state.password)
  }
  
  render() {
    return (
      <div className={styles.account}>
        <div className={classs(styles.top, styles.crad)}>
          {this.state.accounts.map(item => (
            <div key={item.name}>
              <span>用户名: 子账户{item.name}</span>
              <span>账号: amzamzamz-{item.name}</span>
              <span>密码: {item.password}</span>
              <span className={styles.del}>删除</span>
            </div>
          ))}
        </div>
        <div className={classs(styles.bottom, styles.crad)}>
          <div className={styles.body}>
            <p>最多设置5个子账户</p>
            <div className={styles.input}>用户名: 子账户{this.state.name}</div>
            <div className={styles.input}>账号: amzamzamz-{this.state.name}</div>
            <div className={styles.input}>
              <input 
                type="password"
                value={this.state.password} 
                onChange={this.change.bind(this)}
                placeholder="点击设置子账户密码"
              />
            </div>
            <div className={styles.btn} onClick={this.addAccount.bind(this)}>确认添加子账户</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Account
