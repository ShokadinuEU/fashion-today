import React, { Component } from 'react'
import './home.scss'


class ScrollButton extends Component {
  constructor() {
    super()
    this.state = {
      intervalId: 0
    }
  }

  scrollStep = () => {
    if (window.pageYOffset === 0) {
        clearInterval(this.state.intervalId);
    }
    window.scroll(0, window.pageYOffset - this.props.scrollStepInPx);
  }
 
  scrollToTop = () => {
    let intervalId = setInterval( this.scrollStep, this.props.delayInMs )
    this.setState({ intervalId })
  }
  
  render () {
    return (
      <button title='Back to top' 
              className='scroll' 
              onClick={ () => { this.scrollToTop() }}>
        <span className='arrow-up glyphicon glyphicon-chevron-up'></span>
      </button>)
  }
} 

export default ScrollButton