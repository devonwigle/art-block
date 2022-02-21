import React, { Component } from "react";
import { Route, Link, Switch, RouteComponentProps } from "react-router-dom";
import "./App.css";
import Logo from "./Components/Logo/Logo";
import InspoContainer from "./Components/InspoContainer/InspoContainer";
import getImage, { PicsumImage } from "./apiCalls/apiCalls";
import randomColor from "randomcolor";
import LandingPage from "./Components/LandingPage/LandingPage";
import FavoritesContainer, {
  FavoritesInspoContainer,
} from "./Components/FavoritesContainer/FavoritesContainer";
import wordData from "./wordData";

function getRandomIndex(wordData: string[]) {
  return Math.floor(Math.random() * wordData.length);
}

function getWord() {
  return wordData[getRandomIndex(wordData)];
}

type AppState = {
  idNum: number;
  image: PicsumImage | string;
  color: string;
  word: string;
  favorites: FavoritesInspoContainer[];
};

function isPicsumImage(value: PicsumImage | string): value is PicsumImage {
  return (value as PicsumImage).download_url !== undefined;
}

class App extends Component<any, AppState> {
  constructor(props: any) {
    super(props);
    this.state = {
      idNum: 0,
      image: "Loading...",
      color: "#FFF",
      word: "",
      favorites: [],
    };
  }

  componentDidMount() {
    this.generateRandomState();
  }

  generateRandomState() {
    let randNum = Math.floor(Math.random() * 1084);
    getImage(randNum)
      .then((result) => {
        this.setState({ image: result });
      })
      .catch((error) => {
        this.setState({ image: `Error loading image: ${error.toString()}` });
      });
    this.setState({
      color: `${randomColor({ luminosity: "random", count: 1 })[0]}`,
      word: getWord(),
    });
  }

  saveFavorite() {
    if (isPicsumImage(this.state.image)) {
      this.setState({
        favorites: [
          ...this.state.favorites,
          {
            image: this.state.image,
            color: this.state.color,
            word: this.state.word,
          },
        ],
      });
    }
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
              onSave={() => this.saveFavorite()}
              onReinspire={() => this.generateRandomState()}
              color={this.state.color}
              picture={this.state.image}
              word={this.state.word}
            />
          </Route>
          <Route exact path="/favorites">
            <FavoritesContainer favorites={this.state.favorites} />
          </Route>
        </Switch>
      </div>
    );
  }
}

export default App;
