import React, { Component } from 'react'
import './products.css'
import data from '../../data/JSON/mendata.json'

class Product extends Component {

  render() {
    console.log(JSON.stringify(data));
    return (
    <div className="items">
      <pre>{JSON.stringify(data, null, 2) }</pre>
    </div>
    );
  }
}

export default Product

