import React, { Component } from 'react'
import './products.scss'
import axios from 'axios';


class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      error: null
    }
  }

  componentDidMount(){
    axios.get('./hotItems.json')
      .then(result => this.setState({
        data: result.data
      }))
      .catch(error => this.setState({ 
        error
      }))
  }

  render() {
    const { data, error } = this.state
    const itemList = !error ? (
      data.map( item => {
        return (
          <div key={item.id} className="item-unit">
            <div className="item-image">
              <div className="brand-items">{item.sold}</div>
            </div>
            <span className="item-detail">{item.name}</span>
            <span className="item-detail">{item.price}</span>
            <button className="buy-it">Buy It</button>
          </div>
        )
      })
    ) : (
      <p>Loading ...</p> 
    )

    return (
      <div className="products-main">
        <h1 className="products-header">-----Latest Products-----</h1>
        <hr className="style-eight"/>
        <div className="products-wrapper" id="go-to">
          { itemList }
        </div>
      </div>
    );
  }
}

export default Products
