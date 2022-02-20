import { Image } from "../../apiCalls/apiCalls";
import "./PictureContainer.css";

type PictureContainerProps = {
  picture: Image | null;
};

function renderPicture(picture: Image | null): JSX.Element {
  if (picture === null) {
    return <>"Loading..."</>;
  } else {
    return <img src={picture.download_url} />;
  }
}

const PictureContainer = (props: PictureContainerProps) => {
  return <div className="image-box">{renderPicture(props.picture)}</div>;
};

export default PictureContainer;
