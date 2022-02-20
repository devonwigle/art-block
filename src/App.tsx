import React, { Component } from "react";
import "./App.css";
import Logo from "./Components/Logo/Logo";
import InspoContainer from "./Components/InspoContainer/InspoContainer";
import getImage, { Image } from "./apiCalls/apiCalls";


type AppState = { idNum: number; image: Image | null; color: string };

class App extends Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      idNum: 0,
      image: null,
      color: '',
    };
  }

  componentDidMount() {
    this.generateRandomState()
  }

  generateRandomState() {
    let randNum = Math.floor(Math.random() * 1084);
    getImage(randNum).then((result) => this.setState({ image: result }));
  }


  renderInspoContainer() {
    if (this.state.image === null) {
      return '';
    } else {
      return <InspoContainer onClick={() => this.generateRandomState()} picture={this.state.image} />;
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
