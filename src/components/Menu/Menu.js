import React, { Component } from 'react'
import './menu.scss'

class Menu extends Component {
  render() {
    return (
      // top menu section
      <div className="main-menu">
        <div className="brand"> | Fashion Today |</div>
        <div className="shop-cart"><i className="fas fa-cart-arrow-down fa-2x"></i></div>
        <div className="menu">
          <ul>
            <li className="menu-link"><a href="/">Women</a></li>
            <li className="menu-link"><a href="/">Men</a></li>
            <li className="menu-link"><a href="/">About</a></li>
            <li className="menu-link"><a href="/">Support</a></li>
            <li className="menu-link"><a href="/">FAQ</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Menu;
