import React from 'react'
import {Carousel} from 'react-bootstrap'
import './header.scss'

const Slider = () => {
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
  )
}

export default Slider