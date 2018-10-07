import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './pages/Home';
import Women from './pages/Women';
import Men from './pages/Men';
import About from './pages/About';
import Support from './pages/Support';
import Faq from './pages/Faq';


class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="main-content">
          <Switch className="content-inside">
            <Route path="/" component={Home} exact />
            <Route path="/women" component={Women} />
            <Route path="/men" component={Men} />
            <Route path="/about" component={About} />
            <Route path="/support" component={Support} />
            <Route path="/faq" component={Faq} />
            <Route component={Home} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
