import React, { Component } from 'react';
import Modal from 'react-modal';
import './login.scss'

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    padding               : "0",
    width                 : "58%",
    maxWidth              : "550px",
    borderRadius          : "10px",
    transform             : 'translate(-50%, -50%)'
  },
  overlay: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)'
  }
}

Modal.setAppElement('#root')

class Login extends Component {
  constructor() {
    super()
    this.state = {
      modalIsOpen: false
    }
  }

  openModal = () => {
    this.setState({modalIsOpen: true})
  }

  closeModal = () => {
    this.setState({modalIsOpen: false})
  }

  render() {
    return (
      <div>
        <div className="shop-cart-icon" onClick={this.openModal}></div>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Login Modal"
        >
          <div className="login-main">
            <div className="login-wrapper">
              <h2 className="login-header">Login</h2>
              <div className="login-body">
                <form className="login-form">
                  <input type="text" placeholder="Username"/><br />
                  <input type="password" placeholder="Password"/><br />
                  <button className="login-button">Login</button>
                </form>
                <p className="login-forgot">Forgot your&nbsp;
                  <a href="https://shokadinueu.github.io/development-website/">username</a>&nbsp;or&nbsp;
                  <a href="https://shokadinueu.github.io/development-website/">password</a> 
                </p>
                <hr/>
                <div className="other-login-method">
                  <p>Login with your LinkedIn account details</p>
                  <img className="website-brand" src="./data/images/logo/navbar/brand-logo.png" alt="site-brand"/>
                </div>
                <div className="new-user">
                  <p>New to ShokadinuEU Studio?</p>
                  <button>Sign Up</button>
                </div>
                <div className="facebook-login">
                  <p>Signed in with facebook before? </p>&nbsp;
                  <a href="https://shokadinueu.github.io/development-website/">Login with Facebook</a>
                </div>
              </div>
            </div>
          </div>
        </Modal>
      </div>
    );
  }
}

export default Login