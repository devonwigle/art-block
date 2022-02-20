import React, {Component} from 'react';
import './FavoritesContainer.css';
import {Image} from './apiCalls/apiCalls'

type FavoritesContainerProps = {
  image: Image | null;
  color: string;
  word: string
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
      <p>{this.props.word}</p>
    )
  }
}

export default FavoritesContainer