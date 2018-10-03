import React, { Component } from 'react'
import Product from './Product'
import './products.css'

class Products extends Component {
  render() {
    return (
      <div className="products-main">
        <h1 className="products-header">-----Latest Products-----</h1>
        <div className="products-items">
          <p>here the items will go from Json file!</p>
          <Product />
        </div>
      </div>
    )
  }
}

export default Products;
