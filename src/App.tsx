import React, { Component } from "react";
import "./App.css";
import Logo from "./Components/Logo/Logo";
import InspoContainer from "./Components/InspoContainer/InspoContainer";
import getImage, { Image } from "./apiCalls/apiCalls";

type AppState = { idNum: number; image: Image | null };

class App extends Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      idNum: 55,
      image: null,
    };
  }

  componentDidMount() {
    getImage(237).then((result) => this.setState({ image: result }));
  }

  renderInspoContainer() {
    if (this.state.image === null) {
      return "Potato";
    } else {
      return <InspoContainer picture={this.state.image} />;
    }
  }

  render(): JSX.Element {
    return (
      <div className="App">
        <Logo />
        {this.renderInspoContainer()}
      </div>
    );
  }
}

export default App;
