import React, { Component } from 'react'
import './women_content.scss'
import Header from '../../components/Header/Header'
import axios from 'axios';


class WomenContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      search: '',
      isLoading: false,
      error: null
    };
  }
  
  componentDidMount(){
    this.setState({ isLoading: true });
    axios.get('./women.json')
      .then(result => this.setState({
        data: result.data,
        isLoading: false 
      }))
      .catch(error => this.setState({ 
        error, 
        isLoading: false 
      }));
  }

  hanndleSearch = e => {
    this.setState({
      search: e.target.value
    })
  }

  render() {
    const { isLoading, error } = this.state
    let filterItems = this.state.data.filter(
      item => {
        return item.brand.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1;
      }
      )

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
        <div className="filter-items-main">
          <input type="text" placeholder="Look for a brand..." className="filter-items" 
          value={this.state.search} 
          onChange={this.hanndleSearch} />
        </div>
        <div className="products-wrapper">
          {filterItems.map(item =>
            <div key={item.id} className="women">
              <div className="women-image">
                <div className="brand-items">{item.brand}</div>
              </div>
              <span className="women-detail">{item.name}</span>
              <span className="women-detail">{item.price}</span>
              <button className="buy-it">Buy It</button>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default WomenContent;
