import { PicsumImage } from "../../apiCalls/apiCalls";

export type ChosenGroupProps = {
  image: PicsumImage;
  color: string;
  word: string;
  id: number;
};

const ChosenGroup = ({ image, color, word, id }: ChosenGroupProps) => {
  return (
    <div className="grouping">
      <img className="small-img" src={image.download_url} alt="" />
      <p className="group-word">{word}</p>
      <div className="group-color" style={{ background: color }}>
        <div className="group-hex-div">
          <p className="group-hexcode">{color}</p>
        </div>
      </div>
    </div>
  );
};

export default ChosenGroup;
