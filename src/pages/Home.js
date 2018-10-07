import React, { Component } from 'react'
import Menu from '../components/Menu/Menu'
import Header from '../components/Header/Header'
import Products from '../components/Products/Products'
import Brands from '../components/Brands/Brands'
import Footer from '../components/Footer/Footer'

export default class Layout extends Component {
  render() {
    return (
      <div className="main-content">
      <div className="content">
        <Menu />
        <Header />
        <Products />
        <Brands />
      </div>
      <div className="main-footer">
        <Footer />
      </div>
    </div>
    )
  }
}
