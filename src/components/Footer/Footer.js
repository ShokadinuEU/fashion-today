import React, { Component } from 'react'
import './footer.scss'

class Footer extends Component {
  render() {
    return (
      <div>
        <div className="footer-main">
          <p className="footer-header">-----Shopping Today-----</p>
          <a href="https://github.com/ShokadinuEU" target="_blank" className="footer-brand">&copy;   ShokadinuEU   &copy;</a>
        </div>
      </div>
    )
  }
}
export default Footer;
