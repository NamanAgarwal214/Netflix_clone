import React from "react";
import tv from "../assets/tv.png";
import tvVideo from "../assets/vid.m4v";

const Section2 = (props) => {
  return (
    <div className="sect">
      <div className="text">
        <h1>{props.h1}</h1>
        <h2>{props.h2}</h2>
      </div>
      <div className="disp">
        <img src={tv} alt="disp" />
        <div className="video">
          <video className="vid" autoPlay playsInline muted loop>
            <source src={tvVideo} type="video/mp4" />
          </video>
        </div>
      </div>
    </div>
  );
};

export default Section2;
