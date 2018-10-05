import React, { Component } from 'react'
import './menu.scss'

class Menu extends Component {
  render() {
    return (
      // top menu section
      <div className="main-menu">
        <span className="brand"> | Fashion Today |</span>
        <ul>
          <li className="menu-link"><a href="/women">Women</a></li>
          <li className="menu-link"><a href="/men">Men</a></li>
          <li className="menu-link"><a href="/about">About</a></li>
          <li className="menu-link"><a href="/support">Support</a></li>
          <li className="menu-link"><a href="/qanda">Q&A</a></li>
        </ul>
        <span className="shop-cart"><i className="fas fa-cart-arrow-down fa-2x"></i></span>
      </div>
    )
  }
}

export default Menu;
