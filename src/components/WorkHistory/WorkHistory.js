import React from "react";
import WorkSection from "./WorkSection";
import NavigationArrows from "../NavigationArrows";
import "../CommonFormStyles.css";

const WorkHistory = (props) => {
  const workSectionElements = props.workData.map((object) => (
    <WorkSection
      className="work-section"
      key={object.id}
      id={object.id}
      workData={props.workData}
      onChange={props.onChange}
      handleEditorChange={props.handleEditorChange}
    />
  ));

  const addSection = () => {
    const lastSectionId = props.workData[props.workData.length - 1].id;
    props.handleAddSection(lastSectionId + 1);
  };

  const deleteLastSection = () => {
    const lastSectionId = props.workData[props.workData.length - 1].id;
    if (lastSectionId === 1) {
      return;
    }
    props.handleRemoveLastSection(lastSectionId);
  };

  const workHistoryContainerStyles = {
    display: "flex",
    flexDirection: "column",
  };

  return (
    <div className="common-section">
      <div className="common-container" style={workHistoryContainerStyles}>
        <div className="form-container">
          <h2>Work History</h2>
          <form>{workSectionElements}</form>
        </div>
        <div className="add-and-delete-buttons">
          <button type="add-new-section" onClick={addSection}>
            Add a new section
          </button>
          <button type="add-new-section" onClick={deleteLastSection}>
            Delete the last section
          </button>
        </div>
        <NavigationArrows nextPage={props.nextPage} prevPage={props.prevPage} />
      </div>
    </div>
  );
};

export default WorkHistory;
