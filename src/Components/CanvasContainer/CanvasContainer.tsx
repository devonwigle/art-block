import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { PicsumImage } from "../../apiCalls/apiCalls";
import { TwitterPicker } from 'react-color'
import SmallLogo from '../Logo/SmallLogo';
import ChosenGroup from "./ChosenGroup";
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

export type ChosenGroupContainer = {
  image: PicsumImage;
  color: string;
  word: string;
  id: number;
}

interface ChosenGroupProps {
  chosen: ChosenGroupContainer[];
}


class CanvasContainer extends Component<ChosenGroupProps, CanvasState> {
  constructor(props: ChosenGroupProps) {
    super(props)
    this.state = {
      strokeColor: this.props.chosen[0].color
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
        <div className='wrapper-canvas-tools'>
          <div className='canvas-inspiration'>
            <ChosenGroup image={this.props.chosen[0].image} color={this.props.chosen[0].color} word={this.props.chosen[0].word} id={this.props.chosen[0].id}/>
            <TwitterPicker onChangeComplete={ this.handleColorChange }/>
          </div>
          <ReactSketchCanvas
            style={styles}
            width="500"
            height="500"
            strokeColor={this.state.strokeColor}
          />
        </div>
      </div>
    )
  }
};

export default CanvasContainer