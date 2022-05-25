import React from "react";

const Footer = () => {
  return (
    <footer
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.95)",
        padding: "2rem",
        color: "#757575",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-around",
        alignItems: "flex-start",
      }}
    >
      <div style={{ width: "60%", margin: "auto" }}>
        <p>Questions? Call 000-800-040-1843</p>
        <div className="footer">
          <div>
            <li>FAQ</li>
            <li>Investor Relations</li>
            <li>Privacy</li>
            <li>Speed Test</li>
          </div>
          <div>
            <li>Help Center</li>
            <li>Jobs</li>
            <li>Cookie Preferences</li>
            <li>Legal Notices</li>
          </div>
          <div>
            <li>Account</li>
            <li>Ways to watch</li>
            <li>Corporate Information</li>
            <li>Only on Netflix</li>
          </div>
          <div>
            <li>Media Center</li>
            <li>Terms of use</li>
            <li>Contact Us</li>
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
        <p>Netflix India</p>
      </div>
    </footer>
  );
};

export default Footer;
