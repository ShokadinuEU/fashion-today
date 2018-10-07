import React, { Component } from 'react'
import Menu from '../components/Menu/Menu'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'

export default class Layout extends Component {
  render() {
    return (
      <div className="main-content">
        <div className="content">
          <Menu />
          <Header />
        </div>
        <div className="main-footer">
          <Footer />
        </div>
      </div>
    )
  }
}
