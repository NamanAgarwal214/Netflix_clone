import React, { Fragment } from "react";
import titleImg from "../assets/title.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import Section2 from "./Section2";
import Section3 from "./Section3";
import Faq from "./Faq";
import Footer from "./Footer";

const Landing = () => {
  return (
    <Fragment>
      <div className="landing">
        <div className="navbar">
          <img src={titleImg} alt="Netflix" className="logo" />
          <div className="innerNav">
            <form action="">
              <select name="lang" id="lang" className="lang">
                <FontAwesomeIcon icon="fa-solid fa-globe" />
                <option value="English">English</option>
                <option value="हिन्दी">हिन्दी</option>
              </select>
            </form>
            <Link to="/login">
              <button className="btn">Sign In</button>
            </Link>
          </div>
        </div>
        <div className="container">
          <div className="content">
            <h1>Unlimited movies, TV shows and more.</h1>
            <h2>Watch anywhere. Cancel anytime</h2>
            <h3>
              Ready to watch? Enter your email to create or restart your
              membership.
            </h3>
            {/* <form action="" method="post"> */}
            <input
              type="email"
              className="input"
              placeholder="Email Address"
              name="email"
              id="email"
            />
            <button type="submit" className="btn">
              Get Started
            </button>
            {/* </form> */}
          </div>
        </div>
      </div>
      <Section2
        h1="Enjoy on your TV."
        h2="Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more."
      />
      <Section3
        h1="Download your shows to watch offline."
        h2="Save your favourites easily and always have something to watch."
      />
      <Section2
        h1="Watch everywhere."
        h2="Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV."
      />
      <Section3
        h1="Create profiles for children."
        h2="Send children on adventures with their favourite characters in a space made just for them—free with your membership."
      />
      <Faq />
      <Footer />
    </Fragment>
  );
};

export default Landing;
