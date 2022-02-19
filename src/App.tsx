import React, { Component } from "react";
import "./App.css";
import Logo from "./Components/Logo/Logo";
import InspoContainer from "./Components/InspoContainer/InspoContainer";
import PictureContainer from "./Components/PictureContainer./PictureContainer";
import WordContainer from "./Components/WordContainer/WordContainer";

class App extends Component {
  constructor(props: any) {
    super(props);
  }
  render(): JSX.Element {
    return (
      <div className="App">
        <Logo />
        <InspoContainer />
      </div>
    );
  }
}

export default App;
