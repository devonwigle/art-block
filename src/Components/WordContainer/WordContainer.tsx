import React from "react";
import "./WordContainer.css";

type WordContainerProps = {
  word: string;
  onWordLockClicked: React.ChangeEventHandler<HTMLInputElement>;
};

const WordContainer = (props: WordContainerProps) => {
  return (
    <div className="word-box">
      <p className="random-word">{props.word}</p>
      <input onChange={props.onWordLockClicked} type="checkbox" name="word-checkbox"></input>
      <label>This inspires me</label>
    </div>
  );
};

export default WordContainer;
