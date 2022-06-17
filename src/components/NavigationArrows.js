import React from "react";
import rightArrow from "../images/right-arrow.png";
import leftArrow from "../images/left-arrow.png";

const NavigationArrows = (props) => {
  let justifyContentVal = "";
  if (props.prevPage && props.nextPage) {
    justifyContentVal = "space-between";
  } else if (props.nextPage) {
    justifyContentVal = "flex-end";
  } else if (props.prevPage) {
    justifyContentVal = "flex-start";
  }

  const navArrowContainerStyles = {
    marginTop: "1.5rem",
    display: "flex",
    padding: "0 5%",
    justifyContent: justifyContentVal,
  };

  const navArrowImageStyles = {
    cursor: "pointer",
  };

  return (
    <div style={navArrowContainerStyles}>
      {props.prevPage && (
        <img
          src={leftArrow}
          style={navArrowImageStyles}
          alt="left arrow navigation"
          onClick={props.prevPage}
        ></img>
      )}
      {props.nextPage && (
        <img
          src={rightArrow}
          style={navArrowImageStyles}
          alt="right arrow navigation"
          onClick={props.nextPage}
        ></img>
      )}
    </div>
  );
};

export default NavigationArrows;
