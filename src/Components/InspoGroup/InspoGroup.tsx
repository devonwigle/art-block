import { render } from "@testing-library/react";
import React from "react";
import { Link } from "react-router-dom";
import "./InspoGroup.scss";
import { PicsumImage } from "../../apiCalls/apiCalls";
import pencil from "../../pencil.png";
import thickBrush from "./thickBrush.png";

type InspoGroupProps = {
  image: PicsumImage;
  color: string;
  word: string;
  deleteSavedInspo: any;
  id: number;
};

const InspoGroup = ({
  image,
  color,
  word,
  id,
  deleteSavedInspo,
}: InspoGroupProps) => {
  return (
    <div className="grouping">
      <div>
        <img className="small-img" src={image.download_url} alt="" />
        <p className="group-word">{word}</p>
        <div className="group-color" style={{ background: color }}>
          <div className="group-hex-div">
            <p className="group-hexcode">{color}</p>
          </div>
        </div>
      </div>
      <button className="delete-button" onClick={() => deleteSavedInspo(id)}>
        <img className="button-image" src={thickBrush} />
      </button>
      <Link to={`/canvas/${id}`}>
        <button className="draw-button">
          <img className="button-image" src={pencil} />
        </button>
      </Link>
    </div>
  );
};

export default InspoGroup;
