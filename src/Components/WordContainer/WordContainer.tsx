import React from "react";

import "./WordContainer.css";

type WordContainerProps = {
  word: string;
};

const WordContainer = ({ word }: WordContainerProps) => {
  return (
    <div className="word-box">
      <p className="random-word">{word}</p>
      <input type="checkbox" name="word-checkbox"></input>
      <label>This inspires me</label>
    </div>
  );
};

export default WordContainer;
