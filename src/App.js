import React, { Component } from 'react'
import { HashRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home'
import Women from './pages/Women'
import Men from './pages/Men'
import About from './pages/About'
import Support from './pages/Support'
import Faq from './pages/Faq'

import Menu from '../src/components/Menu/Menu'
import Header from '../src/components/Header/Header'
import Footer from '../src/components/Footer/Footer'

class App extends Component {

  render() {
    return (
      <HashRouter>
        <div>
          <div>
            <div className="main-content">
            <div className="content">
              <Menu />
              <Header />
            </div>
            </div>
            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/women' component={Women} />
              <Route exact path='/men' component={Men} />
              <Route exact path='/about' component={About} />
              <Route exact path='/support' component={Support} />
              <Route exact path='/faq' component={Faq} />
              <Route exact component={Home} />
            </Switch>
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
