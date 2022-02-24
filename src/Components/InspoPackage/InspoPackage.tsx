import { render } from "@testing-library/react";
import React from "react";
import "./InspoPackage.css";
import { PicsumImage } from "../../apiCalls/apiCalls";

type InspoPackageProps = {
  image: PicsumImage;
  color: string;
  word: string;
  deleteSavedInspo: any;
  id: number;
};

const InspoPackage = ({ image, color, word, id, deleteSavedInspo}: InspoPackageProps) => {
  return (
    <div>
      <button onClick={() => deleteSavedInspo(id)}>x</button>
      <div>
        <img className="small-img" src={image.download_url} />
        <p>{word}</p>
        <div className="package-color" style={{ background: color }}>
          <p>{color}</p>
        </div>
      </div>
    </div>
  );
};

export default InspoPackage;
