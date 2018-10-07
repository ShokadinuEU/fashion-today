import React, { Component } from 'react'
import './menu.scss'

class Menu extends Component {
  render() {
    return (
      // top menu section
      <div className="main-menu">
        <div className="brand"><a href="/home"className="link-home"> | Fashion Today | </a></div>
        <div className="shop-cart"><i className="fas fa-cart-arrow-down fa-2x"></i></div>
        <div className="menu">
          <ul>
            <li className="menu-link"><a href="/women">Women</a></li>
            <li className="menu-link"><a href="/men">Men</a></li>
            <li className="menu-link"><a href="/about">About</a></li>
            <li className="menu-link"><a href="/support">Support</a></li>
            <li className="menu-link"><a href="/faq">FAQ</a></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Menu;
