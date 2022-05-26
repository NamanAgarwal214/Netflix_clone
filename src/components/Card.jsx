import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/image1.png";

const Card = ({ name }) => {
  return (
    <Fragment>
      <div>
        <img src={profileImg} alt={name} className="img" />
        <Link to="/home">
          <h4>{name}</h4>
        </Link>
      </div>
    </Fragment>
  );
};

export default Card;
