import React from "react";
import PictureContainer from "../PictureContainer./PictureContainer";
import WordContainer from "../WordContainer/WordContainer";
import "./InspoContainer.css";

const InspoContainer = () => {
  return (
    <div className="Inspo-container">
      Container!
      <p>HEXCODE!</p>
      <div className="contents">
        <PictureContainer />
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
