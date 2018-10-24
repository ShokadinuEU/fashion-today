import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/home/Home'
import Women from './pages/women/Women'
import Men from './pages/men/Men'
import Kids from './pages/kids/Kids'
import Support from './pages/support/Support'
import Faq from './pages/faq/Faq'

import Menu from '../src/components/Menu/Menu'
import Footer from '../src/components/Footer/Footer'
import HomeButton from './components/Home/HomeButton'

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <div className="main-content content">
            <div className="content">
              <Menu />
            </div>
            </div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/women' component={Women} />
              <Route exact path='/men' component={Men} />
              <Route exact path='/kids' component={Kids} />
              <Route exact path='/support' component={Support} />
              <Route exact path='/faq' component={Faq} />
              <Route exact component={Home} />
            </Switch>
            <HomeButton />
            <div className="main-footer">
              <Footer />
            </div>
          </div>
        </div>
      </HashRouter>
    )
  }
}

export default App
