import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import titleImg from "../assets/title.png";
import Card from "./Card";

// whos watching
const WhosWatching = () => {
  return (
    <Fragment>
      <div style={{ backgroundColor: "black" }}>
        <div className="navbar">
          <Link to="/">
            <img src={titleImg} alt="Netflix" className="logo" />
          </Link>
        </div>
        <div className="cardDisp">
          <div>
            <h1>Who's Watching</h1>
          </div>
          <div className="card">
            <div>
              <Card name="naman" />
            </div>
            <div>
              <Card name="naman" />
            </div>
            <div>
              <Card name="naman" />
            </div>
            <div>
              <Card name="naman" />
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default WhosWatching;
