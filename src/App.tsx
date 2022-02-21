import React, { Component } from "react";
import { Route, Link, Switch, RouteComponentProps } from "react-router-dom";
import "./App.css";
import Logo from "./Components/Logo/Logo";
import InspoContainer from "./Components/InspoContainer/InspoContainer";
import getImage, { Image } from "./apiCalls/apiCalls";
import randomColor from "randomcolor";
import LandingPage from "./Components/LandingPage/LandingPage";
import FavoritesContainer, {
  FavoritesInspoContainer,
} from "./Components/FavoritesContainer/FavoritesContainer";

type AppState = {
  idNum: number;
  image: Image | null;
  color: string;
  word: string;
  favorites: FavoritesInspoContainer[];
};

class App extends Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      idNum: 0,
      image: null,
      color: "#FFF",
      word: "",
      favorites: [
        {
          image: {
            download_url:
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
            id: "5",
          },
          color: "#FFF",
          word: "poop",
        },
        {
          image: {
            download_url:
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
            id: "5",
          },
          color: "#FFF",
          word: "toop",
        },
        {
          image: {
            download_url:
              "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/dog-puppy-on-garden-royalty-free-image-1586966191.jpg?crop=1.00xw:0.669xh;0,0.190xh&resize=1200:*",
            id: "5",
          },
          color: "#A80000",
          word: "boop",
        },
      ],
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
        <Switch>
          <Route exact path="/">
            <LandingPage />
          </Route>
          <Route exact path="/inspiration">
            <Logo />
            <InspoContainer
              onClick={() => this.generateRandomState()}
              color={this.state.color}
              picture={this.state.image}
            />
          </Route>
          <FavoritesContainer favorites={this.state.favorites} />
          {/* <Route exact path="/favorites">
            <FavoritesContainer props={this.state}/>
          </Route> */}
        </Switch>
      </div>
    );
  }
}

export default App;
