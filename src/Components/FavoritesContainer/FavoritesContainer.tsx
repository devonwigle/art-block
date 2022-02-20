import React, {Component} from 'react';
import './FavoritesContainer.css';
import {Image} from '../../apiCalls/apiCalls'
import SmallLogo from "../../Components/Logo/SmallLogo";

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
        <SmallLogo />
        <p>hello</p>
        {/* <p>{this.props.word}</p> */}
      </div>
    )
  }
}

export default FavoritesContainer