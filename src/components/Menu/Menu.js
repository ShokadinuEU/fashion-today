import React from 'react'
import { Link } from 'react-router-dom'
import './menu.scss'
import Login from './Login';


const  Menu = () => {
    return (
      // top menu section
      <div className="main-menu">
        <div className="menu-top">
          <div className="menu-brand">
            <Link to='/home' className="menu-brand-link" > | Fashion Today | </Link>
          </div>
          <div className="shop-cart">
            <Login />
          </div>
        </div>
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

export default Menu
