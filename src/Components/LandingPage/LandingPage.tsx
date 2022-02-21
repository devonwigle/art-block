import React from 'react'
import Logo from '../Logo/Logo'
import './LandingPage.css'

const LandingPage = () => {
  return(
    <div className="landing-page">
      <Logo />
      <div className="landing-paragraphs">
        <div className="main-div">
          <div className="cube-div">
            <div className="front"></div>
            <div className="back"></div>
            <div className="left"></div>
            <div className="right"></div>
            <div className="top"></div>
            <div className="bottom"></div>
            <div className="shadow"></div>
          </div>
        </div>
        <div className="para-box">  
          <p>Are you feeling the unending agony that is being blocked from pursuing your artistic passions?</p>
          <p>We have found the solution for you.  Click below to have inspiration brought forth from the internet.</p>
          <p>We will provide you a random color, image, and word(s) of inspiration.</p>
        </div>
      </div>
      <button className="landing-button">Be Inspired</button>
      
    </div>
  )
}

export default LandingPage