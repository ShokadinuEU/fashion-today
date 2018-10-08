import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'

class Menu extends Component {
  render() {
    return (
      // top menu section
      <div className="main-menu">
        <div className="brand"><Link to='/' className="brand"> | Fashion Today | </Link></div>
        <div className="shop-cart"><i className="fas fa-cart-arrow-down fa-2x"></i></div>
        <div className="menu">
          <ul>
            <li className="menu-link"><Link to='/women'>Women</Link></li>
            <li className="menu-link"><Link to='/men'>Men</Link></li>
            <li className="menu-link"><Link to='/kids'>Kids</Link></li>
            <li className="menu-link"><Link to='/support'>Support</Link></li>
            <li className="menu-link"><Link to='/faq'>FAQ</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Menu;
