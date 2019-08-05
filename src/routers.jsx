import { Switch, Route, BrowserRouter } from 'react-router-dom'
import React, { Component }  from 'react'
import classs from 'classnames'
import Global from './Global'
import App from './App'

import Header from '@/pages/header'
import Menu from '@/pages/menu'

import Home from '@/pages/home'
import User from '@/pages/user'
import Ad from '@/pages/ad'
import Finance from '@/pages/finance'
import Data from '@/pages/data'

class Router extends Component {
  state = {
    toggle: true
  }

  componentWillMount() {
    Global.on('toggle.app', () => {
      this.setState({ toggle: !this.state.toggle })
    })
  }

  render() {
    const { toggle } = this.state

    return (<App>
      <BrowserRouter>
        <div className={classs(`app-${toggle ? 'max' : 'min'}-header`)}>
          <Header />
        </div>
        <div className={classs('app-meun', !toggle && 'app-min-menu')}>
          <Menu />
        </div>
        <div className="app-body">
          <Switch>
            <Route exact path="/data" component={Data} />
            <Route exact path="/finance" component={Finance} />
            <Route exact path="/ad" component={Ad} />
            <Route exact path="/user" component={User} />
            <Route exact path="/" component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    </App>)
  }
}

export default Router