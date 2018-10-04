import React, { Component } from 'react'
// import dataMen from '../Products/data/mendata.json'
import './products.css'

class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount(){
    fetch('./mendata.json')
      .then(response => response.json())
      .then(data => this.setState({ data }))
  }

  render() {
    const { data } = this.state;
    return (
      <div className="products-main">
      <h1 className="products-header">-----Latest Products-----</h1>
      <div className="products-wrapper">
        {data.map(item =>
          <div key={item.id} className="item">
            <span className="item-detail">{item.image}</span>
            <span className="item-detail">{item.name}</span>
            <span className="item-detail">{item.price}</span>
            <span className="item-detail">{item.sold}</span>
            <button key={item.id} className="buy-it">Buy It</button>
          </div>
        )}
      </div>
      </div>
    );
  }
}
export default Products;
