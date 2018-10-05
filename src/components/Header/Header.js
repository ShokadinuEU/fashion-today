import React, { Component } from 'react'
import './header.scss'

class Header extends Component {
  render() {
    return (
      <div className="main-header">
        <div className="header">
        </div>
        <div className="header-text">
          <h1>New Season Arrivals</h1>
          <h4>Check out the new treds</h4>
          <button className="header-button">Shop now</button>
        </div>
      </div>
    )
  }
}

export default Header;
