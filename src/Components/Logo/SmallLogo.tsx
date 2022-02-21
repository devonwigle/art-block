import React from "react";
import "./SmallLogo.css";
import { Link } from "react-router-dom";

const SmallLogo = () => {
  return (
    <Link to="/inspiration" style={{ textDecoration: "none" }}>
      <div className="small-logo-loca">
        <div>
          <p className="top-line-small">
            Art<span className="top-line-2-small">BLOCK</span>
          </p>
          <p className="bottom-line-small">
            Where Artists Come For Random Inspiration
          </p>
        </div>
      </div>
    </Link>
  );
};

export default SmallLogo;
