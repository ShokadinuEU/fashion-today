import React, { Component } from 'react'
import Products from '../../components/Products/Products'
import Brands from '../../components/Brands/Brands'
import Header from '../../components/Header/Header'

export default class Home extends Component {
  render() {
    return (
    <div className="main-content">
        <Header />
        <Products />
        <Brands />
    </div>
    )
  }
}
