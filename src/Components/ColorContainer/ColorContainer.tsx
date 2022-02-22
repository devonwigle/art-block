import "./ColorContainer.css";
import CSS from "csstype";

type ColorContainerProps = {
  color: string;
};

function ColorContainer(props: ColorContainerProps) {
  const colorStyles: CSS.Properties = {
    backgroundColor: props.color,
    height: "200px",
    width: "300px",
  };
  return (
    <div>
      <div className="color-box" style={colorStyles}></div>
      <p className="hexcode">{colorStyles.backgroundColor}</p>
      <input type="checkbox" name="picture-checkbox"></input>
      <label>This inspires me</label>
    </div>
  );
}

export default ColorContainer;
