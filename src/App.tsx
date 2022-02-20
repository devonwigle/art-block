import React, { Component } from "react";
import "./App.css";
import Logo from "./Components/Logo/Logo";
import InspoContainer from "./Components/InspoContainer/InspoContainer";
import getImage, { Image } from "./apiCalls/apiCalls";
import randomColor from "randomcolor";

type AppState = { idNum: number; image: Image | null; color: string };

class App extends Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      idNum: 0,
      image: null,
      color: "#FFF",
    };
  }

  componentDidMount() {
    this.generateRandomState();
  }

  generateRandomState() {
    let randNum = Math.floor(Math.random() * 1084);
    getImage(randNum).then((result) => this.setState({ image: result }));
    this.setState({
      color: `${randomColor({ luminosity: "random", count: 1 })[0]}`,
    });
  }

  render(): JSX.Element {
    return (
      <div className="App">
        <Logo />
        <InspoContainer
          onClick={() => this.generateRandomState()}
          color={this.state.color}
          picture={this.state.image}
        />
      </div>
    );
  }
}

export default App;
