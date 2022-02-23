import React, { Component } from "react";
import "./FavoritesContainer.css";
import { PicsumImage } from "../../apiCalls/apiCalls";
import SmallLogo from "../../Components/Logo/SmallLogo";
import InspoPackage from "../InspoPackage/InspoPackage";
import { Link } from "react-router-dom";

export type FavoritesInspoContainer = {
  image: PicsumImage;
  color: string;
  word: string;
  id: number;
};
interface FavoritesContainerProps {
  favorites: FavoritesInspoContainer[];
  deleteSavedInspo: any;
}

class FavoritesContainer extends Component<FavoritesContainerProps> {
  constructor(props: FavoritesContainerProps) {
    super(props);
  }
  render() {
    return (
      <div>
        <div className="fav-header">
          <SmallLogo />
          <Link to="/inspiration">
            <button className="get-more-inspo">Get More Inspirations</button>
          </Link>
        </div>
        <h1 className="announce-title">Your Favorite Inspirations</h1>
        <div className="package-div">
          {this.props.favorites.map(({ image, color, word, id }) => (
            <InspoPackage deleteSavedInspo={this.props.deleteSavedInspo} key={Date.now()} image={image} color={color} word={word} id={id} />
          ))}
        </div>
      </div>
    );
  }
}

export default FavoritesContainer;
