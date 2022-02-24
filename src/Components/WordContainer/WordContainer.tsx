import React from "react";
import {Word} from "../../apiCalls/apiCalls"
import "./WordContainer.css";

type WordContainerProps = {
  word: Word | string;
  onWordLockClick: React.ChangeEventHandler<HTMLInputElement>;
};

const WordContainer = (props: WordContainerProps) => {
  return (
    <div className="word-box">
      <p className="random-word">{props.word}</p>
      <label>
        <input onChange={props.onWordLockClick} type="checkbox" name="word-checkbox"></input>
      Lock this inspiration</label>
    </div>
  );
};

export default WordContainer;
