import React from 'react'
import Component from '@/Component'
import styles from '../ad.scss'
import classs from 'classnames'

class Phone extends Component {
  render() {
    const {
      title,
      adImg,
      type
    } = this.props

    return (
      <div className={styles.phoneBox}>
        <div className={styles.background} >
          <i className={classs('icon icon-close')} />
          <span>{title}</span>
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
            {adImg.map((item, i) => (
              <img className={styles.adimg} src={item} alt="" key={i} />
            ))}
          </div>
          <div className={styles.taobao}>跳转{['淘宝', '京东', '拼多多', '亚马逊'][type]}</div>
        </div>
      </div>
    );
  }
}

export default Phone
