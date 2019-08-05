import React from 'react'
import Component from '@/Component'
import classs from 'classnames'
import styles from './finance.scss'

class Finance extends Component {
  nav = ['充值', '历史充值', '历史消费', '历史退款']

  recharge = ["管理员账号与2019-08-05 19:00:01充值100cny", "管理员账号与2019-08-05 19:00:01充值100cny"]

  consume = ["子账户xxxxxxx与2019-08-05 19:00:01添加广告xx共消费10000万", "子账户xxxxxxx与2019-08-05 19:00:01添加广告xxx共消费10000万"]

  refund = ["xxxxxx广告已失效，退款剩余红包余额100cny", "xxxxxx广告已失效，退款剩余红包余额10cny"]

  state = {
    navIndex: 0
  }

  changeNav (navIndex) {
    this.setState({ navIndex })
  }

  render() {
    const { navIndex } = this.state
    return (
      <div className={styles.finance}>
        <div className={classs(styles.nav, 'crad')}>
          {this.nav.map((item, index) => (
            <span 
              key={item}
              className={index === this.state.navIndex ? styles.active : ''}
              onClick={this.changeNav.bind(this, index)}
            >{item}</span>
          ))}
        </div>
        <div className={classs(styles.body, 'crad')}>
          {!!navIndex ? [null, this.recharge, this.consume, this.refund][navIndex].map((item, i) => (
            <div key={i} className={styles.item}>{item}</div>
          )) : 'chongzhi'}
        </div>
      </div>
    );
  }
}

export default Finance
