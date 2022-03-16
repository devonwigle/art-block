import "./Loader.scss";

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="spin"></div>
        <div className="bounce"></div>
        <p>Loading...</p>
      </div>
    </div>
  );
};

export default Loader;
