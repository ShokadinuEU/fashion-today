import React, { Component } from 'react'
// import ChangeImg from './Slider'
import './header.scss'


class Header extends Component {
  render() {
    return (
      // header section, the big image and the text next to it
      <div className="main-header">
        <div className="header">
          <div className="header-text">
            <h1>New Season Arrivals</h1>
            <h4>Check out the new treds</h4>
            <button className="header-button">Shop now</button>
          </div>
        </div>
        {/* <ChangeImg /> */}
      </div>
    )
  }
}

export default Header;
