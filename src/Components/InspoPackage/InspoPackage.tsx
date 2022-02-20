import { render } from '@testing-library/react'
import React from 'react'
import './InspoPackage.css'

const InspoPackage = () => {
  return (
    <div>
      <div>
        <img className="small-img" src="https://picsum.photos/id/237/3500/2095"/>
        <p> word here</p>
        <div className="package-color">
          <p>hexcode here</p>
        </div>
      </div>
    </div>
  )
}

export default InspoPackage