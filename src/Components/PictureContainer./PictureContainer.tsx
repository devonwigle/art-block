import { Image } from "../../apiCalls/apiCalls";

type PictureContainerProps = {
  picture: Image;
};

const PictureContainer = (props: PictureContainerProps) => {
  return (
    <div className="image-box">
      <img src={props.picture.download_url} />
    </div>
  );
};

export default PictureContainer;
