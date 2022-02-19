import React from "react";
import PictureContainer from "../PictureContainer/PictureContainer";
import WordContainer from "../WordContainer/WordContainer";
import "./InspoContainer.css";
import { Image } from "../../apiCalls/apiCalls";

type InspoContainerProps = {
  picture: Image;
};

const InspoContainer = (props: InspoContainerProps) => {
  return (
    <div className="Inspo-container">
      Container!
      <p>HEXCODE!</p>
      <div className="contents">
        <PictureContainer picture={props.picture} />
        <WordContainer />
      </div>
      <div className="buttons">
        <button>REINSPIRE</button>
        <button>See My Inspirations</button>
      </div>
    </div>
  );
};

export default InspoContainer;
