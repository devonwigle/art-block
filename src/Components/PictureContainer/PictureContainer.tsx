import { PicsumImage } from "../../apiCalls/apiCalls";
import ErrorContainer from "../ErrorContainer/ErrorContainer";
import "./PictureContainer.scss";

type PictureContainerProps = {
  picture: PicsumImage | string;
  onPictureLockClick: React.ChangeEventHandler<HTMLInputElement>;
  error: boolean;
  onLoad: () => void;
};

function isPicsumImage(value: PicsumImage | string): value is PicsumImage {
  return (value as PicsumImage).download_url !== undefined;
}

function renderPicture(
  picture: PicsumImage | string,
  error: boolean,
  onLoad: () => void
): JSX.Element {
  if (!error && isPicsumImage(picture)) {
    return <img src={picture.download_url} alt="" onLoad={onLoad} />;
  } else {
    return <ErrorContainer />;
  }
}

const PictureContainer = (props: PictureContainerProps) => {
  return (
    <div>
      <div className="image-box">
        {renderPicture(props.picture, props.error, props.onLoad)}
      </div>
      <label>
        <input
          onChange={props.onPictureLockClick}
          type="checkbox"
          name="picture-checkbox"
        ></input>
        Lock this inspiration
      </label>
    </div>
  );
};

export default PictureContainer;
