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
      <Modal
        className="Modal"
        isOpen={modalOpen}
        onRequestClose={() => setModalOpen(false)}
      >
        <h1>Instructions</h1>
        <p>
          Welcome to ArtBlock! On this page, you can find inspiration in three
          forms, an image, a descriptive word, or a color (hexcode provided).
        </p>
        <p>
          We'll create the first trio of inspiration for you. If you don't like
          anything, feel free to click the Reinspire button to get a new image,
          word, and color.
        </p>
        <p>
          Perhaps you like an image, but not the word and color. Feel free to
          select the checkbox under the image to "lock it" in place. When you
          click Respire, it will hold onto that image until you uncheck the box.
          You can lock any combination of the three.
        </p>
        <p>
          If you're happy with your trio of inspiration, go ahead and click the
          Save Inspiration button! You can save as many trios as you'd like.
        </p>
        <p>
          Finally, to see all your saved Inspirations, click the See my
          Inspiration button to head to the favorites page! We hope to bring you
          some inspiration for your next work of art!
        </p>
        <p>Click the ESC key or outside of this popup to leave this page.</p>
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
