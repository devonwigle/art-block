import { render } from "@testing-library/react";
import React from "react";
import "./InspoGroup.css";
import { PicsumImage } from "../../apiCalls/apiCalls";
//import xBrushStrokes from "../../xBrushStrokes.png"
import thickBrush from "../../thickBrush.png"

type InspoGroupProps = {
  image: PicsumImage;
  color: string;
  word: string;
  deleteSavedInspo: any;
  id: number;
};

const InspoGroup = ({ image, color, word, id, deleteSavedInspo}: InspoGroupProps) => {
  return (
    <div className="grouping">
      <div>
        <img className="small-img" src={image.download_url} />
        <p>{word}</p>
        <div className="group-color" style={{ background: color }}>
          <div className="group-hex-div">
            <p className="group-hexcode">{color}</p>
          </div>
        </div>
      </div>
      <button className='delete-button' onClick={() => deleteSavedInspo(id)}><img className="button-image" src={thickBrush}/></button>
    </div>
  );
};

export default InspoGroup;
