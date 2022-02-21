import React from "react";
import PictureContainer from "../PictureContainer/PictureContainer";
import WordContainer from "../WordContainer/WordContainer";
import "./InspoContainer.css";
import { PicsumImage } from "../../apiCalls/apiCalls";
import ColorContainer from "../ColorContainer/ColorContainer";
import { Link } from "react-router-dom";

type InspoContainerProps = {
  picture: PicsumImage | string;
  color: string;
  word: string;
  onReinspire: React.MouseEventHandler<HTMLButtonElement>;
  onSave: React.MouseEventHandler<HTMLButtonElement>;
};

const InspoContainer = (props: InspoContainerProps) => {
  return (
    <div className="Inspo-container">
      <div className="contents">
        <PictureContainer picture={props.picture} />
        <WordContainer word={props.word} />
        <ColorContainer color={props.color} />
      </div>
      <div className="buttons">
        <button onClick={(event) => props.onSave(event)}>
          Save Inspiration
        </button>
        <button onClick={(event) => props.onReinspire(event)}>Reinspire</button>
        <Link to="/favorites">
          <button>See My Inspirations</button>
        </Link>
      </div>
    </div>
  );
};

export default InspoContainer;
