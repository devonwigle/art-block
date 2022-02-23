import React from "react";
import "./WordContainer.css";

type WordContainerProps = {
  word: string;
  onWordLockClick: React.ChangeEventHandler<HTMLInputElement>;
};

const WordContainer = (props: WordContainerProps) => {
  return (
    <div className="word-box">
      <p className="random-word">{props.word}</p>
      <input onChange={props.onWordLockClick} type="checkbox" name="word-checkbox"></input>
      <label>This inspires me</label>
    </div>
  );
};

export default WordContainer;
