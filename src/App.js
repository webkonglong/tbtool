// @flow
import React from 'react'
import Component from '@/Component'
import classs from 'classnames'
import Global from './Global'

class App extends Component {
  state = {
    toggle: true
  }

  componentWillMount() {
    Global.on('toggle.app', () => {
      this.setState({ toggle: !this.state.toggle })
    })
  }
  
  render () {
    return <div className={classs('app-root', !this.state.toggle && 'app-root-left-min')}>
      {this.props.children}
    </div>
  }
}

export default App
