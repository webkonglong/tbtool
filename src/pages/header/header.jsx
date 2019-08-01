import React from 'react'
import Component from '@/Component'
import styles from './header.scss'

class Header extends Component {

  state = {
    toggle: false
  }
  
  toggle () {
    this.emit('toggle')
  }

  toggleLogout () {
    this.setState({ toggle: !this.state.toggle })
  }

  logout () {
    console.log('退出')
  }

  render () {
    return (
      <div className={styles.header}>
        <i onClick={this.toggle.bind(this)} className="icon icon-toggle" />
        <div className={styles.right}>
          <img onClick={this.toggleLogout.bind(this)} src="http://demo.cssmoban.com/cssthemes6/fish_29_quixlab/images/user/1.png" alt=""/>
        </div>
        {this.state.toggle && <div className={styles.logout} onClick={this.logout.bind(this)}>退出账号</div>}
      </div>
    )
  }
}

export default Header
