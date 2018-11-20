import React from 'react'
import ScrollButton from './ScrollButton'
import './home.scss'


const HomeButton = () => {
    return(
    <div className="long">
      <ScrollButton scrollStepInPx="500" delayInMs="16"/>
    </div>
    )
}

export default HomeButton;