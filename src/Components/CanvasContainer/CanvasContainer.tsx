import React, { Component } from 'react'
import { ReactSketchCanvas } from 'react-sketch-canvas';
import { TwitterPicker } from 'react-color'

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
  


  handleColorChange = (evt: any) => {
    this.setState({strokeColor: evt.hex})
  }


  render() {
    return (
      <div className="canvas-container">
      <TwitterPicker onChangeComplete={ this.handleColorChange }/>
      <ReactSketchCanvas
        style={styles}
        width="500"
        height="500"
        strokeWidth={4}
        strokeColor={this.state.strokeColor}
      />
    </div>
    )
  }

};

export default CanvasContainer