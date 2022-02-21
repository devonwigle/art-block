import React, { Component } from "react";
import "./FavoritesContainer.css";
import { Image } from "../../apiCalls/apiCalls";
import SmallLogo from "../../Components/Logo/SmallLogo";
import InspoPackage from "../InspoPackage/InspoPackage";

export type FavoritesInspoContainer = {
  image: Image;
  color: string;
  word: string;
};
interface FavoritesContainerProps {
  favorites: FavoritesInspoContainer[];
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
          <button className="get-more-inspo">Get More Inspirations</button>
        </div>
        <h1 className="announce-title">Your Favorite Inspirations</h1>
        <div className="package-div">
          {this.props.favorites.map(({ image, color, word }) => (
            <InspoPackage image={image} color={color} word={word} />
          ))}
        </div>
        {/* <p>{this.props.word}</p> */}
      </div>
    );
  }
}

export default FavoritesContainer;
