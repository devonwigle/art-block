import React, {Component} from 'react';
import './FavoritesContainer.css';
import {Image} from '../../apiCalls/apiCalls'
import SmallLogo from "../../Components/Logo/SmallLogo";
import InspoPackage from '../InspoPackage/InspoPackage';

type FavoritesInspoContainer = {
  image: Image | null;
  color: string;
  word: string
}
interface FavoritesContainerProps {
  favorites: FavoritesInspoContainer,
}

class FavoritesContainer extends Component {
  constructor(props: FavoritesContainerProps) {
    super(props)
    this.state = {
      inspiration: []
    }
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
          <InspoPackage />
          <InspoPackage />
          <InspoPackage />
          <InspoPackage />
          <InspoPackage />
          <InspoPackage />
          <InspoPackage />
          <InspoPackage />
          <InspoPackage />
          <InspoPackage />
        </div>
        {/* <p>{this.props.word}</p> */}
      </div>
    )
  }
}

export default FavoritesContainer