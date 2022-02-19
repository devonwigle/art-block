import React from "react";
import wordData from './wordData'

function getRandomIndex(wordData: string[]) {
  return Math.floor(Math.random() * wordData.length);
};

function getWord() {
  return wordData[getRandomIndex(wordData)]
}

const WordContainer = () => {
  return (
    <div className="word-box">
      <p>{getWord()}</p>
    </div>
  );
};

export default WordContainer;
