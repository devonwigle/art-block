import React, { Component } from "react";
import { Route, Link, Switch, RouteComponentProps } from "react-router-dom";
import "./App.css";
import Logo from "./Components/Logo/Logo";
import InspoContainer from "./Components/InspoContainer/InspoContainer";
import { getImage, fetchWord, PicsumImage, Word } from "./apiCalls/apiCalls";
import randomColor from "randomcolor";
import LandingPage from "./Components/LandingPage/LandingPage";
import FavoritesContainer, {
  FavoritesInspoContainer,
} from "./Components/FavoritesContainer/FavoritesContainer";
import CanvasContainer from "./Components/CanvasContainer/CanvasContainer"
import wordData from "./wordData";

function getRandomIndex(wordData: string[]) {
  return Math.floor(Math.random() * wordData.length);
}

type AppState = {
  idNum: number;
  image: PicsumImage | string;
  color: string;
  word: string;
  favorites: FavoritesInspoContainer[];
  chosen: FavoritesInspoContainer,
  error: boolean;
  wordIsLocked: boolean;
  pictureIsLocked: boolean;
  colorIsLocked: boolean;
  wordAPIError: string;
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
      chosen: {
        image: {id: '', download_url: ''},
        color: '',
        word: '', 
        id: 0
      },
      error: false,
      wordIsLocked: false,
      pictureIsLocked: false,
      colorIsLocked: false,
      wordAPIError: "",
    };
  }

  componentDidMount() {
    this.generateRandomState();
    const maybeFavorites = localStorage.getItem("favorites");
    if (maybeFavorites === null) {
      return;
    }
    this.setState({ favorites: JSON.parse(maybeFavorites) });
  }

  componentDidUpdate() {
    localStorage.setItem("favorites", JSON.stringify(this.state.favorites));
  }

  generateRandomState() {
    if (!this.state.colorIsLocked) {
      this.setState({
        color: `${randomColor({ luminosity: "random", count: 1 })[0]}`,
      });
    }

    if (!this.state.pictureIsLocked) {
      this.setState({error: false})
      let randNum = Math.floor(Math.random() * 1084);
      getImage(randNum)
        .then((result: any) => {
          this.setState({ image: result });
        })
        .catch((error: any) => {
          this.setState({error: true})
        });
    }

    if (!this.state.wordIsLocked) {
      this.setState({ error: false })
      fetchWord()
        .then((word) => {
          this.setState({ word: word.word, wordAPIError: "" });
          console.log(this.state);
        })
        .catch((error: any) =>
          this.setState({ error: true })
        );
    }
  }

  saveFavorite() {
    if (isPicsumImage(this.state.image) && this.state.wordAPIError === "") {
      this.setState({
        favorites: [
          ...this.state.favorites,
          {
            image: this.state.image,
            color: this.state.color,
            word: this.state.word,
            id: Date.now(),
            // chosen: this.state.chosen,
          },
        ],
      });
    }
    this.clearInputs()
  }

  clearInputs = () => {
    this.setState({ wordIsLocked: false, pictureIsLocked: false, colorIsLocked: false });
  }

  deleteSavedInspo = (id: number) => {
    const newFavs = this.state.favorites.filter(
      (favorite) => favorite.id !== id
    );
    console.log(newFavs);
    this.setState({ favorites: newFavs });
  };

  goToDraw = (id: number) => {
    const chosen = this.state.favorites.find((favorite) => favorite.id === id)
      if(chosen !== undefined) {
        this.setState({chosen: chosen})
    }
  }

  onWordLockClick() {
    this.setState({ wordIsLocked: !this.state.wordIsLocked });
  }

  onPictureLockClick() {
    this.setState({ pictureIsLocked: !this.state.pictureIsLocked });
  }

  onColorLockClick() {
    this.setState({ colorIsLocked: !this.state.colorIsLocked });
  }

  render(): JSX.Element {
    return (
      <div className="App">
        <div className="flex-all">
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
                error={this.state.error}
                onWordLockClick={() => this.onWordLockClick()}
                onPictureLockClick={() => this.onPictureLockClick()}
                onColorLockClick={() => this.onColorLockClick()}
              />
            </Route>
            <Route exact path="/favorites">
              <FavoritesContainer favorites={this.state.favorites} goToDraw={this.goToDraw} deleteSavedInspo={this.deleteSavedInspo} />
            </Route>
            <Route exact path="/canvas">
              <CanvasContainer />
            </Route>
          </Switch>
        </div>  
      </div>
    );
  }
}

export default App;
