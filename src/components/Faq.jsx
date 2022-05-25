import React from "react";

const Faq = () => {
  return (
    <div
      className="faqDiv"
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.95)",
        padding: "5rem",
        borderBottom: "8px solid #222",
      }}
    >
      <h1 className="faq" style={{ textAlign: "center" }}>
        Frequently Asked Questions
      </h1>
      <div className="faqDiv2">
        <div style={{ textAlign: "left" }}>What is Netflix?</div>
        <div>+</div>
      </div>
    </div>
  );
};

export default Faq;
