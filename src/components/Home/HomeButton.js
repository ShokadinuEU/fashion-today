import React from 'react'
import ScrollButton from './ScrollButton'
import './home.scss'


class HomeButton extends React.Component {
  constructor() {
    super();
    this.state = {
      colors: []
    }
  }

  render () {
    return <div className="long">
              <ScrollButton scrollStepInPx="500" delayInMs="16.66"/>
           </div>
  }
}

export default HomeButton;