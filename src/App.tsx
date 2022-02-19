import React, {Component} from 'react';
import './App.css';
import Logo from "./Components/Logo/Logo"

class App extends Component {
  constructor(props: any) {
    super(props)
  }
  render() :  JSX.Element {
    return (
    <div className="App">
     <Logo />
    </div>
  );
}
}

export default App;
