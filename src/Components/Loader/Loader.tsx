import "../Loader.scss";

const Loader = () => {
  return (
    <div className="container">
      <div className="cube">
        <div className="sides">
          <div className="top"></div>
          <div className="right"></div>
          <div className="bottom"></div>
          <div className="left"></div>
          <div className="front"></div>
          <div className="back"></div>
        </div>
      </div>
      <div className="text">BUNDLING DEPENDENCIES</div>
    </div>
  );
};

export default Loader;
