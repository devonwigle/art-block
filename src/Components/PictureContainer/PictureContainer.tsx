import { PicsumImage } from "../../apiCalls/apiCalls";
import "./PictureContainer.css";

type PictureContainerProps = {
  picture: PicsumImage | string;
  onPictureLockClick: React.ChangeEventHandler<HTMLInputElement>;
};

function isPicsumImage(value: PicsumImage | string): value is PicsumImage {
  return (value as PicsumImage).download_url !== undefined;
}

function renderPicture(picture: PicsumImage | string): JSX.Element {
  if (isPicsumImage(picture)) {
    return <img src={picture.download_url} alt=''/>;
  } else {
    return <>{picture}</>;
  }
}

const PictureContainer = (props: PictureContainerProps) => {
  return( 
  <div>
    <div className="image-box">{renderPicture(props.picture)}</div>
      <label>
        <input onChange={props.onPictureLockClick} type="checkbox" name="picture-checkbox"></input>
    Lock this inspiration</label>
  </div> 
  )
};

export default PictureContainer;
