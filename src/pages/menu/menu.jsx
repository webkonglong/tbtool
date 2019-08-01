import React from 'react'
import Component from '@/Component'
import styles from './menu.scss'
import { NavLink } from 'react-router-dom'

class Menu extends Component {
  state = {
    toggle: true
  }

  componentWillMount() {
    this.on('toggle.app', () => {
      this.setState({ toggle: !this.state.toggle })
    })
	}
	 
  render () {
		const { toggle } = this.state
    return (
      <div className={styles.menu}>
        <div className={styles.logo}>
					{toggle ? 'TBtool' : 'T'}
        </div>
				{[{
					icon: 'icon icon-data',
					router: '/data',
					text: '数据分析'
				}, {
					icon: 'icon icon-ad',
					router: '/ad',
					text: '广告管理'
				}, {
					icon: 'icon icon-finance',
					router: '/finance',
					text: '财务管理'
				}, {
					icon: 'icon icon-user',
					router: '/user',
					text: '个人设置'
				}].map(item => (
					<NavLink
							key={item.router}
							to={item.router}
							className={styles.link}
							activeClassName={styles.active}
						>
							<i className={item.icon} />
							{toggle ? <span>{item.text}</span>: ''}
						</NavLink>
				))}
      </div>
    )
  }
}

export default Menu
