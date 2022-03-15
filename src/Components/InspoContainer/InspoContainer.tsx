import React, { useState } from "react";
import PictureContainer from "../PictureContainer/PictureContainer";
import WordContainer from "../WordContainer/WordContainer";
import "./InspoContainer.scss";
import { PicsumImage } from "../../apiCalls/apiCalls";
import ColorContainer from "../ColorContainer/ColorContainer";
import { Link } from "react-router-dom";
import questionMark from "./questionMark.png";
import pencil from "../../pencil.png";
import Modal from "react-modal";
import { FavoritesInspoContainer } from "../FavoritesContainer/FavoritesContainer";

type InspoContainerProps = {
  picture: PicsumImage | string;
  color: string;
  word: string;
  error: boolean;
  savedFavorites: FavoritesInspoContainer[];
  onReinspire: React.MouseEventHandler<HTMLButtonElement>;
  onSave: React.MouseEventHandler<HTMLButtonElement>;
  onWordLockClick: React.ChangeEventHandler<HTMLInputElement>;
  onPictureLockClick: React.ChangeEventHandler<HTMLInputElement>;
  onColorLockClick: React.ChangeEventHandler<HTMLInputElement>;
  clearInputs: React.MouseEventHandler<HTMLButtonElement>;
};

const InspoContainer = (props: InspoContainerProps) => {
  const [modalOpen, setModalOpen] = useState(false);

  const alreadySaved = props.savedFavorites.some((savedFavorite) => {
    let imageSame = false;
    if (typeof props.picture !== "string") {
      imageSame =
        props.picture.download_url === savedFavorite.image.download_url;
    }
    return (
      props.color === savedFavorite.color &&
      props.word === savedFavorite.word &&
      imageSame
    );
  });

  return (
    <div className="inspo-container">
      <div className="misc-buttons">
        <Link to="/canvas">
          <div className="pencil-group">
            <button
              className="pencil-button"
              onClick={(event) => props.clearInputs(event)}
            >
              <img className="pencil-img" src={pencil} alt="pencil" />
              <p className="pencil-text">Sketch</p>
            </button>
          </div>
        </Link>
        <div className="questionMark-group">
          <button
            className="question-button"
            onClick={() => setModalOpen(true)}
          >
            <img className="mark-img" src={questionMark} alt="question mark" />
            <p className="questionMark-text">Information</p>
          </button>
        </div>
      </div>
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
          To see all your saved Inspirations, click the See my Inspiration
          button to head to the favorites page! We hope to bring you some
          inspiration for your next work of art!
        </p>
        <p className="modal-text">
          If you just want to sketch, click the pencil. If you want to see an
          inspiration while you sketch, checkout your saved inspirations and
          click the pencil under your inspiration.
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
          className="inspo-buttons save-button"
          disabled={alreadySaved}
          onClick={(event) => props.onSave(event)}
        >
          {!alreadySaved ? "Save Inspiration" : "Saved!"}
        </button>
        <button
          className="inspo-buttons reinspire-button"
          onClick={(event) => props.onReinspire(event)}
        >
          Reinspire
        </button>
        <Link to="/favorites">
          <button
            onClick={(event) => props.clearInputs(event)}
            className="inspo-buttons see-inspo-button"
          >
            See My Inspirations
          </button>
        </Link>
      </div>
    </div>
  );
};

export default InspoContainer;
