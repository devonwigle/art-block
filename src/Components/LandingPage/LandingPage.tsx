import React from 'react'
import Logo from '../Logo/Logo'
import './LandingPage.css'

const LandingPage = () => {
  return(
    <div>
      <Logo />
      <div className="landing-paragraphs">
        <p>Are you feeling the unending agony that is being blocked from pursuing your artistic passions?</p>
        <p>We have found the solution for you.  Click below to have inspiration brought forth from the internet.</p>
        <p>We will provide you a random color, image, and word(s) of inspiration.</p>
      </div>
      <button className="landing-button">Be Inspired</button>
    </div>
  )
}

export default LandingPage