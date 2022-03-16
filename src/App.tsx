import { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.scss";
import Logo from "./Components/Logo/Logo";
import InspoContainer from "./Components/InspoContainer/InspoContainer";
import { getImage, fetchWord, PicsumImage } from "./apiCalls/apiCalls";
import randomColor from "randomcolor";
import LandingPage from "./Components/LandingPage/LandingPage";
import FavoritesContainer, {
  FavoritesInspoContainer,
} from "./Components/FavoritesContainer/FavoritesContainer";
import CanvasContainer from "./Components/CanvasContainer/CanvasContainer";

type AppState = {
  idNum: number;
  image: PicsumImage | string;
  color: string;
  word: string;
  favorites: FavoritesInspoContainer[];
  error: boolean;
  wordIsLocked: boolean;
  pictureIsLocked: boolean;
  colorIsLocked: boolean;
  wordAPIError: string;
  pictureLoading: boolean;
  wordLoading: boolean;
  isLoading: boolean;
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
      error: false,
      wordIsLocked: false,
      pictureIsLocked: false,
      colorIsLocked: false,
      wordAPIError: "",
      pictureLoading: true,
      wordLoading: true,
      isLoading: true,
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
    this.setState({ isLoading: true });
    setTimeout(() => {
      this.setState({ isLoading: false });
    }, 1000);
    if (!this.state.colorIsLocked) {
      this.setState({
        color: `${randomColor({ luminosity: "random", count: 1 })[0]}`,
      });
    }

    if (!this.state.pictureIsLocked) {
      this.setState({ error: false, pictureLoading: true });
      let randNum = Math.floor(Math.random() * 1084);
      getImage(randNum)
        .then((result: any) => {
          this.setState({ image: result, pictureLoading: false });
        })
        .catch((error: any) => {
          this.setState({ error: true, pictureLoading: false });
        });
    }

    if (!this.state.wordIsLocked) {
      this.setState({ error: false, wordLoading: true });
      fetchWord()
        .then((word) => {
          this.setState({
            word: word.word,
            wordAPIError: "",
            wordLoading: false,
          });
        })
        .catch((error: any) =>
          this.setState({ error: true, wordLoading: false })
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
          },
        ],
      });
    }
  }

  clearInputs = () => {
    this.setState({
      wordIsLocked: false,
      pictureIsLocked: false,
      colorIsLocked: false,
    });
  };

  deleteSavedInspo = (id: number) => {
    const newFavs = this.state.favorites.filter(
      (favorite) => favorite.id !== id
    );
    this.setState({ favorites: newFavs });
  };

  findChosen = (id: number): FavoritesInspoContainer[] => {
    const chosen = this.state.favorites.find((favorite) => favorite.id === id);
    if (chosen !== undefined) {
      return [
        {
          image: chosen.image,
          color: chosen.color,
          word: chosen.word,
          id: chosen.id,
        },
      ];
    }
    return [];
  };

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
                clearInputs={() => this.clearInputs()}
                savedFavorites={this.state.favorites}
                isLoading={
                  this.state.pictureLoading ||
                  this.state.wordLoading ||
                  this.state.isLoading
                }
              />
            </Route>
            <Route exact path="/favorites">
              <FavoritesContainer
                favorites={this.state.favorites}
                deleteSavedInspo={this.deleteSavedInspo}
              />
            </Route>
            <Route exact path="/canvas">
              <CanvasContainer chosen={[]} />
            </Route>
            <Route
              path="/canvas/:id"
              render={(props) => {
                const chosen = this.findChosen(parseInt(props.match.params.id));
                return <CanvasContainer chosen={chosen} />;
              }}
            />
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
