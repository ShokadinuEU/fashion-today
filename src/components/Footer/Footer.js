import React, { Component } from 'react'
import './footer.scss'

class Footer extends Component {
  render() {
    return (
      // footer with link to github creator profile
      <div className="main-footer">
        {/* <div className="footer-main">
          <p className="footer-header">-----Shopping Today-----</p>
          <a href="https://github.com/ShokadinuEU" target="_blank" className="footer-brand">&copy;   ShokadinuEU   &copy;</a>
        </div> */}
        <div className="our-store">
          <h4>Our Store</h4>
          <span className="address">141 South Grand Avenue</span>
          <span className="address-two">Los Angeles, CA 90015</span>
          <span className="phone">(231) 748-2411</span>
          <p>62 George Road E48NF, London, Essex</p>
        </div>
        <div className="blog-posts">
          <h4>Blog Posts</h4>
          <h5 className="complains">Lorem ipsum dolor sit amet.</h5>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
          <h5 className="complains">Lorem ipsum dolor sit amet.</h5>
          <span>Lorem ipsum dolor sit amet consectetur adipisicing elit.</span>
        </div>
        <div className="support">
          <h4>Support</h4>
          <span>Terms & Conditions</span>
          <span>FAQ</span>
          <span>Payments</span>
          <span>Refounds</span>
          <span>Track Order</span>
          <span>Services</span>
        </div>
      </div>
    )
  }
}
export default Footer;
