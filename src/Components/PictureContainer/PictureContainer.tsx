import { PicsumImage } from "../../apiCalls/apiCalls";
import ErrorContainer from "../ErrorContainer/ErrorContainer"
import "./PictureContainer.css";

type PictureContainerProps = {
  picture: PicsumImage | string;
  onPictureLockClick: React.ChangeEventHandler<HTMLInputElement>;
  error: boolean;
};

function isPicsumImage(value: PicsumImage | string): value is PicsumImage {
  return (value as PicsumImage).download_url !== undefined;
}

function renderPicture(picture: PicsumImage | string, error: boolean): JSX.Element {
  if (!error && isPicsumImage(picture)) {
    return <img src={picture.download_url} alt=''/>;
  } else {
    return <ErrorContainer />
  }
}

const PictureContainer = (props: PictureContainerProps) => {
  return( 
  <div>
    <div className="image-box">{renderPicture(props.picture, props.error)}</div>
      <label>
        <input onChange={props.onPictureLockClick} type="checkbox" name="picture-checkbox"></input>
    Lock this inspiration</label>
  </div> 
  )
};

export default PictureContainer;
