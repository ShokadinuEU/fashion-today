import React, { Component } from 'react'
// import Product from './Product'
import axios from "axios";
// import dataMen from '../Products/data/mendata.json'
import './products.css'

class Products extends Component {
  state = {
    users: [],
    isLoading: true,
    errors: null
  };

  componentDidMount() {
    axios
      .get("https://randomuser.me/api/?results=5")
      .then(response =>
        response.data.results.map(user => ({
          name: `${user.name.first} ${user.name.last}`,
          username: `${user.login.username}`,
          email: `${user.email}`,
          image: `${user.picture.thumbnail}`
        }))
      )
      .then(users => {
        this.setState({
          users,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  render() {
    const { isLoading, users } = this.state;
    return (
      <div>
        <h2>Random User</h2>
        <div>
          {!isLoading ? (
            users.map(user => {
              const { username, name, email, image } = user;
              return (
                <div key={username}>
                  <p>{name}</p>
                  <div>
                    <img src={image} alt={name} />
                  </div>
                  <p>{email}</p>
                  <hr />
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
  }
}
export default Products;
