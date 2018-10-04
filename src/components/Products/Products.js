import React, { Component } from 'react'
import './products.css'
import axios from 'axios';


class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      isLoading: false,
      error: null
    };
  }

  componentDidMount(){
    this.setState({ isLoading: true });
    axios.get('./mendata.json')
      .then(result => this.setState({
        data: result.data,
        isLoading: false 
      }))
      .catch(error => this.setState({ 
        error, 
        isLoading: false 
      }));
  }

  render() {
    const { data, isLoading, error } = this.state

    if (error) {
      return <p>{error.message}</p>;
    }

    if (isLoading) {
      return <p>Loading ...</p>
    }

    return (
      <div className="products-main">
      <h1 className="products-header">-----Latest Products-----</h1>
      <div className="products-wrapper">
        {data.map(item =>
          <div key={item.id} className="item">
            <div className="item-image">Image here</div>
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
