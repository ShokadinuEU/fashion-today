import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu/Menu';
import Header from './components/Header/Header';
import Products from './components/Products/Products';
import Brands from './components/Brands/Brands';
import Footer from './components/Footer/Footer';


class App extends Component {

  render() {
    return (
      <div className="App">
        <Menu />
        <Header />
        <Products />
        <Brands />
        <Footer />
      </div>
    );
  }
}

export default App;
