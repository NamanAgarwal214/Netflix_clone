import React, { Fragment, useState } from "react";
import titleImg from "../assets/title.png";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// import { app } from "../firebase";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const Register = () => {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");

  const submitHandler = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, pass)
      .then((response) => {
        // navigate("/home");
        sessionStorage.setItem(
          "Auth Token",
          response._tokenResponse.refreshToken
        );
      })
      .catch((error) => {
        if (error.code === "auth/email-already-in-use") {
          toast.error("Email Already in Use");
        }
      });
  };

  return (
    <Fragment>
      {/* <ToastContainer> */}
      <div className="login-landing">
        <div className="navbar">
          <Link to="/">
            <img src={titleImg} alt="Netflix" className="logo" />
          </Link>
        </div>
        <div className="login">
          <h1 style={{ fontSize: "32px", marginBottom: "1rem" }}>Sign Up</h1>
          <form className="login-form" onSubmit={submitHandler}>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email Address or Phone Number"
              className="email"
            />
            <input
              type="password"
              name="pass"
              id="pass"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
              placeholder="Password"
              className="pass"
            />
            <button type="submit" className="sub">
              Sign Up
            </button>
            {/* <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                width: "100%",
              }}
            >
              <div>
                <input
                  type="checkbox"
                  name="check"
                  id="chk"
                  className="check"
                />
                <label htmlFor="chk" style={{ color: "#8c8c8c" }}>
                  Remember Me
                </label>
              </div>
              <div>
                <p style={{ color: "#8c8c8c" }}>Need Help?</p>
              </div>
            </div> */}
          </form>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-start",
              margin: "4rem 0 2rem",
            }}
          >
            <div style={{ color: "#8c8c8c" }}>
              New to Netflix?
              <a
                href="/"
                style={{ color: "white", textDecoration: "underline" }}
              >
                Sign Up now
              </a>
            </div>
            <div>
              <p style={{ color: "#8c8c8c" }}>
                <span>
                  This page is protected by Google reCAPTCHA to ensure you're
                  not a bot.
                </span>
              </p>
            </div>
          </div>
        </div>
        <footer
          style={{
            background:
              "linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6))",
            padding: "2rem",
            color: "#757575",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "flex-start",
            marginTop: "5rem",
          }}
        >
          <div style={{ width: "60%", margin: "auto" }}>
            <p>Questions? Call 000-800-040-1843</p>
            <div className="footer">
              <div>
                <li>FAQ</li>
                <li>Cookie Preferences</li>
              </div>
              <div>
                <li>Help Center</li>
                <li>Corporate Information</li>
              </div>
              <div>
                <li>Terms of use</li>
              </div>
              <div>
                <li>Privacy</li>
              </div>
            </div>
            <form action="">
              <select
                name="lang"
                id="lang"
                className="lang"
                style={{ border: "1px solid white" }}
              >
                <option value="English">English</option>
                <option value="हिन्दी">हिन्दी</option>
              </select>
            </form>
          </div>
        </footer>
      </div>
      {/* </ToastContainer> */}
    </Fragment>
  );
};

export default Register;
