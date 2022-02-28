import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  ReactSketchCanvas,
  CanvasPath,
  ReactSketchCanvasRef,
} from "react-sketch-canvas";
import { PicsumImage } from "../../apiCalls/apiCalls";
import { TwitterPicker } from "react-color";
import SmallLogo from "../Logo/SmallLogo";
import ChosenGroup from "./ChosenGroup";
import "./CanvasContainer.scss";


const styles = {
  border: "0.0625rem solid #9c9c9c",
  borderRadius: "0.25rem",
  height: "90vh",
  width: "90vw",
  margin: "0 auto",
};

type CanvasState = {
  strokeColor: string;
};

export type ChosenGroupContainer = {
  image: PicsumImage;
  color: string;
  word: string;
  id: number;
};

interface ChosenGroupProps {
  chosen: ChosenGroupContainer[];
}

class CanvasContainer extends Component<ChosenGroupProps, CanvasState> {
  canvas: React.RefObject<ReactSketchCanvasRef>;
  constructor(props: ChosenGroupProps) {
    super(props);
    this.state = {
      strokeColor:
        this.props.chosen.length > 0 ? this.props.chosen[0].color : "black",
    };
    this.canvas = React.createRef();
  }

  getLocalStorageKey() {
    return this.props.chosen.length > 0
      ? `canvas${this.props.chosen[0].id}`
      : `noFavCanvas`;
  }

  componentDidMount() {
    const maybePaths = localStorage.getItem(this.getLocalStorageKey());
    if (maybePaths && this.canvas.current) {
      this.canvas.current.loadPaths(JSON.parse(maybePaths));
    }
  }

  handleColorChange = (event: any) => {
    this.setState({ strokeColor: event.hex });
  };

  maybeRenderGroup() {
    if (this.props.chosen.length > 0) {
      return (
        <ChosenGroup
          image={this.props.chosen[0].image}
          color={this.props.chosen[0].color}
          word={this.props.chosen[0].word}
          id={this.props.chosen[0].id}
        />
      );
    } else {
      return <></>;
    }
  }

  render() {
    return (
      <div className="canvas-container">
        <header className="canvas-header">
          <SmallLogo />
          <div className="nav-buttons">
            <Link to="/inspiration">
              <button className="get-more-inspo">Get More Inspirations</button>
            </Link>
            <Link to="/favorites">
              <button className="get-more-inspo">
                See Favorite Inspirations
              </button>
            </Link>
          </div>
        </header>
        <div className="header-div">
          <h1 className="announce-title">Sketch Your Thoughts</h1>
        </div>
        <div className="wrapper-canvas-tools">
          <div className="canvas-inspiration">
            {this.maybeRenderGroup()}
            <div className="color-picker">
              <TwitterPicker onChangeComplete={this.handleColorChange} />
            </div>
            <button
              className="clear-button"
              onClick={() => {
                this.canvas.current?.clearCanvas();
                localStorage.removeItem(this.getLocalStorageKey());
              }}
            >
              Clear Canvas
            </button>
          </div>
          <ReactSketchCanvas
            ref={this.canvas}
            style={styles}
            width="500"
            height="500"
            strokeColor={this.state.strokeColor}
            onStroke={(path, isEraser) => {
              const key = this.getLocalStorageKey();
              if (this.canvas.current) {
                this.canvas.current
                  .exportPaths()
                  .then((canvasPaths: CanvasPath[]) => {
                    localStorage.setItem(key, JSON.stringify(canvasPaths));
                  });
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default CanvasContainer;
