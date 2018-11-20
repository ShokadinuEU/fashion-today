import React from 'react'
import Slider from './Slider'
import './header.scss'


const Header = () => {
  return (
    // header section, the big image and the text next to it
    <div className="main-header">
      <div className="header">
        <Slider />
        <div className="header-text">
          <h2>New Season Arrivals</h2>
          <h4>Check out the new trends</h4>
          <button className="header-button"><a href="#go-to" className="hot-items">Shop Now</a></button>
        </div>
      </div>
    </div>
  )
}

export default Header