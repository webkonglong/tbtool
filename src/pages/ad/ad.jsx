import React from 'react'
import Component from '@/Component'
import styles from './ad.scss'
import data from './data.json'
import classs from 'classnames'

class Ad extends Component {
  state = {
    nav: 0,
    data: data.data,
    activeDate: null,
    adListIndex: 0,
    adListurl: data.data[0].pcDescContent.split('|')
  }
  
  link (nav) {
    this.setState({ nav })
  }

  clickAdtitle (adListIndex) {
    this.setState({
      adListIndex,
      adListurl: this.state.data[adListIndex].pcDescContent.split('|')
    })
  }

  render() {
    return (
      <div className={styles.ad}>
        <div className={classs(styles.nav, "crad")}>
          <span 
            className={!this.state.nav && styles.active}
            onClick={this.link.bind(this, 0)}
          >广告列表</span>
          <span 
            className={this.state.nav && styles.active}
            onClick={this.link.bind(this, 1)}
          >添加广告</span>
        </div>
        <div className={classs(styles.body)}>
          <div className={classs(styles.left, "crad")}>
            {this.state.data.map((item, i) => (
              <div 
                key={i} 
                className={i === this.state.adListIndex ? styles.adTitle : ''}
                onClick={this.clickAdtitle.bind(this, i)}
              >{item.title} <span className={styles.del}>删除</span> <span className={styles.pic}>{item.total}个红包 共{item.num}元</span></div>
            ))}
          </div>
          <div className={classs(styles.right, "crad")}>
            <div className={styles.phoneBox}>
              <div className={styles.background} >
                <i className={classs('icon icon-close')} />
                <span>{this.state.data[this.state.adListIndex].title}</span>
                <i className={classs('icon icon-more')} />
              </div>
              <img className={styles.phone} src="/phone.png" alt=""/>
              <div className={styles.phoneState}>
                <i className="icon icon-signal" />
                <i className="icon icon-wifi" />
                <i className="icon icon-qoe" />
              </div>
              <i className={classs("icon icon-red", styles.red)} />
              <div className={styles.phoneBody}>
                <div className={styles.bodyRoll}>
                  {this.state.adListurl.map((item, i) => (
                    <img className={styles.adimg} src={item} alt="" key={i} />
                  ))}
                </div>
                <div className={styles.taobao}>跳转淘宝</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Ad
