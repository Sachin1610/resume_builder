import React from "react";
import NavigationArrows from "../NavigationArrows";
import EducationSection from "./EducationSection";
import "../CommonFormStyles.css";
import "./EducationMain.css";

const EducationMain = (props) => {
  const educationSectionElements = props.educationData.map((object) => {
    return (
      <EducationSection
        key={object.id}
        id={object.id}
        educationData={props.educationData}
        onChange={props.onChange}
      />
    );
  });

  const addSection = () => {
    const lastSectionId =
      props.educationData[props.educationData.length - 1].id;
    props.handleAddSection(lastSectionId + 1);
  };

  const deleteLastSection = () => {
    const lastSectionId =
      props.educationData[props.educationData.length - 1].id;
    if (lastSectionId === 1) {
      return;
    }
    props.handleRemoveLastSection(lastSectionId);
  };

  return (
    <div className="common-section education-section">
      <div className="common-container">
        <div className="form-container">
          <h2>Education Details</h2>
          <form>{educationSectionElements}</form>
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

export default EducationMain;
