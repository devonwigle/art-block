import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { TwitterPicker } from 'react-color'
import SmallLogo from '../Logo/SmallLogo';
import InspoGroup from "../InspoGroup/InspoGroup";
import './CanvasContainer.css'

const styles = {
  border: '0.0625rem solid #9c9c9c',
  borderRadius: '0.25rem',
  height: '90vh',
  width: '90vw',
  margin: '0 auto'
};

type CanvasState = {
  strokeColor: string
}


class CanvasContainer extends Component<any, CanvasState> {
  constructor(props: any) {
    super(props)
    this.state = {
      strokeColor: "black"
    }
  }

  handleColorChange = (event: any) => {
    this.setState({strokeColor: event.hex})
  }


  render() {
    return (
      <div className="canvas-container">
        <header className='canvas-header'>
          <SmallLogo />
          <div className='nav-buttons'>
            <Link to="/inspiration">
              <button className="get-more-inspo">Get More Inspirations</button>
            </Link>
            <Link to="/favorites">
              <button className="get-more-inspo">See Favorite Inspirations</button>
            </Link>
          </div>
        </header>
        <h1 className='announce-title'>Sketch Your Thoughts</h1>
        <div className='canvas-inspiration'>
          {/* <InspoGroup key={id} image={image} color={color} word={word} id={id} /> */}
          <TwitterPicker onChangeComplete={ this.handleColorChange }/>
        </div>
        <ReactSketchCanvas
          style={styles}
          width="500"
          height="500"
          strokeColor={this.state.strokeColor}
        />
      </div>
    )
  }
};

export default CanvasContainer