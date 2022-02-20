import React from "react";
import wordData from './wordData'
import './WordContainer.css'

function getRandomIndex(wordData: string[]) {
  return Math.floor(Math.random() * wordData.length);
};

function getWord() {
  return wordData[getRandomIndex(wordData)]
}

const WordContainer = () => {
  return (
    <div className="word-box">
      <p className="random-word">{getWord()}</p>
    </div>
  );
};

export default WordContainer;
