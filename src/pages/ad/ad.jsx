import React from 'react'
import Component from '@/Component'
import styles from './ad.scss'
import data from './data.json'
import classs from 'classnames'
import Phone from './module/phone.jsx'

class Ad extends Component {
  state = {
    nav: 0,
    data: data.data,
    activeDate: null,
    adListIndex: 0,
    adListurl: data.data[0].pcDescContent.split('|'),
    title: '',
    "num": '', // 几个红吧
    "total": '', // 总共多少钱
    editAddImg: []
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

  change (name, e) {
    this.setState({ [name]: e.target.value })
  }

  changeFile (e) {
    e.preventDefault()
    const fReader = new FileReader()

    fReader.readAsDataURL(e.target.files[0])
    setTimeout(() => {
      this.state.editAddImg.push(fReader.result)
      this.setState({ editAddImg: this.state.editAddImg })
    }, 300)
  }

  render() {
    const { nav } = this.state
    return (
      <div className={styles.ad}>
        <div className={classs(styles.nav, "crad")}>
          <span 
            className={!this.state.nav ? styles.active : ''}
            onClick={this.link.bind(this, 0)}
          >广告列表</span>
          <span 
            className={this.state.nav ? styles.active : ''}
            onClick={this.link.bind(this, 1)}
          >添加广告</span>
        </div>
        <div className={classs(styles.body)}>
          <div className={classs(styles.left, "crad")}>
            {!nav ? this.state.data.map((item, i) => (
              <div 
                key={i} 
                className={i === this.state.adListIndex ? styles.adTitle : ''}
                onClick={this.clickAdtitle.bind(this, i)}
              >{item.title} <span className={styles.del}>删除</span> <span className={styles.pic}>{item.total}个红包 共{item.num}元</span></div>
            )) : <div className={styles.createAd}>
              <div className={styles.input}>
                <input 
                  type="text" 
                  placeholder="广告名称" 
                  onChange={this.change.bind(this, 'title')}
                  value={this.state.title}
                />
              </div>
              <div className={styles.inputs}>
                <input 
                  type="text" 
                  placeholder="红包个数" 
                  onChange={this.change.bind(this, 'num')}
                  value={this.state.num}
                />
                <input 
                  type="text" 
                  placeholder="红包总额度" 
                  onChange={this.change.bind(this, 'total')}
                  value={this.state.total}
                />
              </div>
              <div className={styles.file}>
                <input type="file" onChange={this.changeFile.bind(this)}  />
                <i className="icon icon-file" />
                <p>点击继续上传图片</p>
              </div>
              <div className={styles.btn}>确认</div>
            </div>}
          </div>
          <div className={classs(styles.right, "crad")}>
            <Phone 
              title={nav ? (this.state.title || '...') : this.state.data[this.state.adListIndex].title}
              adImg={nav ? this.state.editAddImg : this.state.adListurl}
              type={0}
              to="www.taobao.com"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Ad
