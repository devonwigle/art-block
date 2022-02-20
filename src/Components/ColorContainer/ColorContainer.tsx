import React from 'react';
import randomColor from "randomcolor";
import './ColorContainer.css'
import CSS from 'csstype';

let colorStyles: CSS.Properties = {
  backgroundColor: `${randomColor({luminosity: 'random',count: 1})[0]}`,
  height: '200px',
  width: '300px'
}

function ColorContainer() {
  
  return (
    <div>
      <div className="color-box" style={colorStyles}> 
      </div>
      <p className="hexcode">{colorStyles.backgroundColor}</p>
    </div>
  )
}

export default ColorContainer