import React, { useState } from "react";
import PictureContainer from "../PictureContainer/PictureContainer";
import WordContainer from "../WordContainer/WordContainer";
import "./InspoContainer.css";
import { PicsumImage, Word } from "../../apiCalls/apiCalls";
import ColorContainer from "../ColorContainer/ColorContainer";
import { Link } from "react-router-dom";
import mark1 from "./mark1.png";
import Modal from "react-modal";

type InspoContainerProps = {
  picture: PicsumImage | string;
  color: string;
  word: string;
  onReinspire: React.MouseEventHandler<HTMLButtonElement>;
  onSave: React.MouseEventHandler<HTMLButtonElement>;
  onWordLockClick: React.ChangeEventHandler<HTMLInputElement>;
  onPictureLockClick: React.ChangeEventHandler<HTMLInputElement>;
  onColorLockClick: React.ChangeEventHandler<HTMLInputElement>;
};

const InspoContainer = (props: InspoContainerProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="Inspo-container">
      <button className="question-button" onClick={() => setModalOpen(true)}>
        <img className="mark-img" src={mark1} />
      </button>
      <Modal isOpen={modalOpen} onRequestClose={() => setModalOpen(false)}>
        <p>Instructions</p>
      </Modal>
      <div className="contents">
        <PictureContainer
          picture={props.picture}
          onPictureLockClick={props.onPictureLockClick}
        />
        <WordContainer
          word={props.word}
          onWordLockClick={props.onWordLockClick}
        />
        <ColorContainer
          color={props.color}
          onColorLockClick={props.onColorLockClick}
        />
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
