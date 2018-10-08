import React, { Component } from 'react'
import './header.scss'


class Header extends Component {

  handleClick(arg){

  }
  render() {
    return (
      // header section, the big image and the text next to it
      <div className="main-header">
        <div className="header">
          <div className="header-text">
            <h1>New Season Arrivals</h1>
            <h4>Check out the new treds</h4>
            <button className="header-button"><a className="hot-items" href="#hot-items">Shop now</a></button>
          </div>
        </div>
        {/* <ChangeImg /> */}
      </div>
    )
  }
}

export default Header;
