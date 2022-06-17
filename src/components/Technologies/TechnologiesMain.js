import React from "react";
import NavigationArrows from "../NavigationArrows";
import TechnologiesSection from "./TechnologiesSection";
import "../CommonFormStyles.css";
import "./TechnologiesMain.css";

const TechnologiesMain = (props) => {
  const technologiesSectionElements = props.technologiesData.map((object) => {
    return (
      <TechnologiesSection
        key={object.id}
        id={object.id}
        technologiesData={props.technologiesData}
        onChange={props.onChange}
      />
    );
  });

  const addSection = () => {
    const lastSectionId =
      props.technologiesData[props.technologiesData.length - 1].id;
    props.handleAddSection(lastSectionId + 1);
  };

  const deleteLastSection = () => {
    const lastSectionId =
      props.technologiesData[props.technologiesData.length - 1].id;
    if (lastSectionId === 1) {
      return;
    }
    props.handleRemoveLastSection(lastSectionId);
  };

  return (
    <div className="common-section technologies-section">
      <div className="common-container">
        <div className="form-container">
          <h2>Technologies, Frameworks {"&"} Projects</h2>
          <form>{technologiesSectionElements}</form>
        </div>
        <div className="add-and-delete-buttons">
          <button type="add-new-section" onClick={addSection}>
            Add a new section
          </button>
          <button type="add-new-section" onClick={deleteLastSection}>
            Delete the last section
          </button>
        </div>
        <NavigationArrows
          nextPage={props.nextPage}
          prevPage={props.prevPage}
        ></NavigationArrows>
      </div>
    </div>
  );
};

export default TechnologiesMain;
