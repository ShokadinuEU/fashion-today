import React, { Component } from 'react'
import Products from '../components/Products/Products'
import Brands from '../components/Brands/Brands'

export default class Home extends Component {
  render() {
    return (
    <div className="main-content">
        <Products />
        <Brands />
    </div>
    )
  }
}
