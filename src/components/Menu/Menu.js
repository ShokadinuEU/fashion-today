import React, { Component } from 'react'
import './menu.css'

class Menu extends Component {
  render() {
    return (
      <div>
        <span>Fashion-Today</span>
        <ul>
          <li><a href="/women">Women</a></li>
          <li><a href="/men">Men</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/support">Support</a></li>
          <li><a href="/qanda">Q&A</a></li>
        </ul>
        <span>ShoppCart</span>
      </div>
    )
  }
}

export default Menu;
