import React, { Component } from 'react'
import './men_content.scss'
import Header from '../../components/Header/Header'
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
        <Header />
        <h1 className="products-header">-----Latest Products-----</h1>
        <hr className="style-eight"/>
        <div className="products-wrapper">
          {data.map(item =>
            <div key={item.id} className="men">
              <div className="men-image"></div>
              <span className="men-detail">{item.name}</span>
              <span className="men-detail">{item.price}</span>
              <button className="buy-it">Buy It</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default MenContent;
