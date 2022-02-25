import "./ColorContainer.css";
import CSS from "csstype";

type ColorContainerProps = {
  color: string;
  onColorLockClick: React.ChangeEventHandler<HTMLInputElement>;
};

function ColorContainer(props: ColorContainerProps) {
  const colorStyles: CSS.Properties = {
    backgroundColor: props.color,
    height: "400px",
    width: "600px",
  };
  return (
    <div>
      <div className="color-box" style={colorStyles}>
        <p className="hexcode">{colorStyles.backgroundColor}</p>
      </div>
      <label>
        <input
          onChange={props.onColorLockClick}
          type="checkbox"
          name="color-checkbox"
        ></input>
        Lock this inspiration
      </label>
    </div>
  );
}

export default ColorContainer;
