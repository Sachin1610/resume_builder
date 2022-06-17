import React from "react";
import "./Homepage.css";
import cvImg from "../images/cv.png";

const Homepage = (props) => {
  return (
    <div className="homepage-container">
      <div className="text-content">
        <div className="text-main-container">
          <h1>ResFast Resume Builder</h1>
          <p>
            Don't want to go through the dreary process of building your resume
            from scratch? We've got you covered.
          </p>
          <p>
            Resume building has never been easier, just follow our step by step
            procedure and simply enter your details, while we take care of the
            formatting, layout and generate a resume that you can be proud of!
          </p>
          <button id="create-resume-btn" onClick={props.nextPage}>
            Create your resume
          </button>
        </div>
      </div>
      <div className="graphics">
        <img src={cvImg} alt="resume design"></img>
      </div>
    </div>
  );
};

export default Homepage;
