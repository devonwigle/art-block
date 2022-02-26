import React from 'react'
import { ReactSketchCanvas } from 'react-sketch-canvas';

const styles = {
  border: '0.0625rem solid #9c9c9c',
  borderRadius: '0.25rem',
};

const CanvasContainer = () => {
  return (
    <div className="canvas-container">
      <ReactSketchCanvas
        style={styles}
        width="600"
        height="900"
        strokeWidth={4}
        strokeColor="blue"
      />
    </div>
  );
};

export default CanvasContainer