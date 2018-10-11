import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './men_content.scss'
import axios from 'axios';


class MenContent extends Component {
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
    axios.get('./men.json')
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
        <h1 className="products-header" id="hot-items">-----Latest Products-----</h1>
        <hr className="style-eight"/>
        <div className="products-wrapper" id="go-to-men">
          {data.map(item =>
            <div key={item.id} className="men">
              <div className="men-image"></div>
              <span className="men-detail">{item.name}</span>
              <span className="men-detail">{item.price}</span>
              <button className="buy-it">Buy It</button>
            </div>
          )}
        </div>
        <div className="home-main"><Link to='/home'><i class="fas fa-home fa-2x home-button"></i></Link></div>
      </div>
    );
  }
}
export default MenContent;
