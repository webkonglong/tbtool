import React from 'react'
import Component from '@/Component'
import styles from './data.scss'
import classs from 'classnames'

class Data extends Component {
  state = {
    data: [{
      time: '00',
      open: 100,
      link: 21
    }, {
      time: '02',
      open: 10,
      link: 2
    }, {
      time: '04',
      open: 332,
      link: 92
    }, {
      time: '06',
      open: 198,
      link: 98
    }, {
      time: '08',
      open: 9,
      link: 1
    }, {
      time: '10',
      open: 167,
      link: 34
    }, {
      time: '12',
      open: 100,
      link: 21
    }, {
      time: '14',
      open: 652,
      link: 259
    }, {
      time: '16',
      open: 998,
      link: 16
    }, {
      time: '18',
      open: 349,
      link: 199
    }, {
      time: '20',
      open: 20,
      link: 20
    }, {
      time: '22',
      open: 138,
      link: 98
    }],
    cycle: 0,
  }

  chart = null

  changeCycle (index) {
    this.setState({ cycle: index })
    console.log(`请求${index}数据`)
  }

  componentDidMount() {
    this.changeCycle(0)

    const dv = new window.DataSet.View().source(this.state.data)
    dv.transform({
      type: 'fold',
      fields: ['open', 'link'],
      key: 'type',
      value: 'value'
    })

    this.chart = new window.G2.Chart({
      container: 'mountNode',
      forceFit: true,
      height: window.innerHeight - 80 - 120
    })

    this.chart.source(dv, {
      value: {
        alias: 'The Share Price in Dollars',
        formatter: function formatter(val) {
          return val;
        }
      },
      time: {
        range: [0, 1]
      }
    });

    this.chart.tooltip({
      crosshairs: true
    });
    this.chart.area().position('time*value').color('type').shape('smooth');
    this.chart.line().position('time*value').color('type').size(2).shape('smooth');
    this.chart.render();
  }

  render() {
    return (
      <div className={classs(styles.data, 'crad')}>
        <div className={styles.cycle}>
          {['日', '周', '月'].map((item, index) => <span 
            className={index === this.state.cycle ? styles.active : ''} 
            key={item} 
            onClick={this.changeCycle.bind(this, index)}
          >{item}</span>)}
        </div>
        <div id="mountNode" className={styles.mountNode}></div>
      </div>
    );
  }
}

export default Data
