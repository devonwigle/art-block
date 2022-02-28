import React, { useState } from "react";
import PictureContainer from "../PictureContainer/PictureContainer";
import WordContainer from "../WordContainer/WordContainer";
import "./InspoContainer.scss";
import { PicsumImage, Word } from "../../apiCalls/apiCalls";
import ColorContainer from "../ColorContainer/ColorContainer";
import { Link } from "react-router-dom";
import questionMark from "./questionMark.png";
import pencil from "../../pencil.png";
import Modal from "react-modal";


type InspoContainerProps = {
  picture: PicsumImage | string;
  color: string;
  word: string;
  error: boolean;
  onReinspire: React.MouseEventHandler<HTMLButtonElement>;
  onSave: React.MouseEventHandler<HTMLButtonElement>;
  onWordLockClick: React.ChangeEventHandler<HTMLInputElement>;
  onPictureLockClick: React.ChangeEventHandler<HTMLInputElement>;
  onColorLockClick: React.ChangeEventHandler<HTMLInputElement>;
  clearInputs: React.MouseEventHandler<HTMLButtonElement>;
};

const InspoContainer = (props: InspoContainerProps) => {
  const [modalOpen, setModalOpen] = useState(false);
  return (
    <div className="inspo-container">
      <Link to="/canvas">
        <img className="pencil-img" src={pencil} alt="pencil" />
      </Link>
      <button className="question-button" onClick={() => setModalOpen(true)}>
        <img className="mark-img" src={questionMark} alt="question mark" />
      </button>
      <Modal
        className="Modal"
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <h1>Instructions</h1>
        <p className="modal-text">
          Welcome to ArtBlock! On this page, you can find inspiration in three
          forms: an image, a descriptive word, or a color (hexcode provided).
        </p>
        <p className="modal-text">
          We'll create the first trio of inspiration for you. If you don't like
          anything, feel free to click the Reinspire button to get a new image,
          word, and color.
        </p>
        <p className="modal-text">
          Perhaps you like an image, but not the word and color. Feel free to
          select the checkbox under the image to "lock it" in place. When you
          click Respire, it will hold onto that image until you uncheck the box.
          You can lock any combination of the three.
        </p>
        <p className="modal-text">
          If you're happy with your trio of inspiration, go ahead and click the
          Save Inspiration button! You can save as many trios as you'd like. You
          will unfortunately not be able to save if our app is unable to pull an
          image.
        </p>
        <p className="modal-text">
          Finally, to see all your saved Inspirations, click the See my
          Inspiration button to head to the favorites page! We hope to bring you
          some inspiration for your next work of art!
        </p>
        <p className="modal-text">
          Click the ESC key or outside of this popup to leave this page.
        </p>
      </Modal>
      <div className="contents">
        <PictureContainer
          picture={props.picture}
          error={props.error}
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
        <button
          className="inspo-buttons"
          onClick={(event) => props.onSave(event)}
        >
          Save Inspiration
        </button>
        <button
          className="inspo-buttons"
          onClick={(event) => props.onReinspire(event)}
        >
          Reinspire
        </button>
        <Link to="/favorites">
          <button onClick={(event) => props.clearInputs(event)} className="inspo-buttons">See My Inspirations</button>
        </Link>
      </div>
    </div>
  );
};

export default InspoContainer;
