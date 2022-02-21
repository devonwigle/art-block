import { PicsumImage } from "../../apiCalls/apiCalls";
import "./PictureContainer.css";

type PictureContainerProps = {
  picture: PicsumImage | string;
};

function isPicsumImage(value: PicsumImage | string): value is PicsumImage {
  return (value as PicsumImage).download_url !== undefined;
}

function renderPicture(picture: PicsumImage | string): JSX.Element {
  if (isPicsumImage(picture)) {
    return <img src={picture.download_url} />;
  } else {
    return <>{picture}</>;
  }
}

const PictureContainer = (props: PictureContainerProps) => {
  return <div className="image-box">{renderPicture(props.picture)}</div>;
};

export default PictureContainer;
