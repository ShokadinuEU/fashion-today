import React, { Component } from 'react'
import {Carousel} from 'react-bootstrap'


class Slider extends Component {

        // ==========Contol Carousel=========
  // constructor(props, context) {
  //   super(props, context);

  //   this.handleSelect = this.handleSelect.bind(this);

  //   this.state = {
  //     index: 0,
  //     direction: null
  //   };
  // }

  // handleSelect(selectedIndex, e) {
  //   alert(`selected=${selectedIndex}, direction=${e.direction}`);
  //   this.setState({
  //     index: selectedIndex,
  //     direction: e.direction
  //   });
  // }

  // render() {
  //   const { index, direction } = this.state;
        // ==========Contol Carousel=========

    
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img width={"auto"} height={"35vh"} alt="900x500" src="./slideImg/img1.jpeg" />
        </Carousel.Item>
        <Carousel.Item>
          <img width={"auto"} height={"35vh"} alt="900x500" src="./slideImg/img2.jpeg" />
        </Carousel.Item>
        <Carousel.Item>
          <img width={"auto"} height={"35vh"} alt="900x500" src="./slideImg/img3.jpeg" />
        </Carousel.Item>
        <Carousel.Item>
          <img width={"auto"} height={"35vh"} alt="900x500" src="./slideImg/img4.jpeg" />
        </Carousel.Item>
        <Carousel.Item>
          <img width={"auto"} height={"35vh"} alt="900x500" src="./slideImg/img5.jpeg" />
        </Carousel.Item>
      </Carousel>
    );
  }
}

export default Slider;