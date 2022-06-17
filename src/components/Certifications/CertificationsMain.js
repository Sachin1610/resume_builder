import React from "react";
import NavigationArrows from "../NavigationArrows";
import CertificationsSection from "./CertificationsSection";
import "../CommonFormStyles.css";
import "./CertificationsMain.css";

const CertificationsMain = (props) => {
  const certificationsSectionElements = props.certificationsData.map(
    (object) => {
      return (
        <CertificationsSection
          key={object.id}
          id={object.id}
          certificationsData={props.certificationsData}
          onChange={props.onChange}
        />
      );
    }
  );

  const addSection = () => {
    const lastSectionId =
      props.certificationsData[props.certificationsData.length - 1].id;
    props.handleAddSection(lastSectionId + 1);
  };

  const deleteLastSection = () => {
    const lastSectionId =
      props.certificationsData[props.certificationsData.length - 1].id;
    if (lastSectionId === 1) {
      return;
    }
    props.handleRemoveLastSection(lastSectionId);
  };

  return (
    <div className="common-section certification-section">
      <div className="common-container certifications-common-container">
        <div className="form-container">
          <h2>Achievements {"&"} Certifications</h2>
          <form>{certificationsSectionElements}</form>
        </div>
        <div className="add-and-delete-buttons">
          <button type="add-new-section" onClick={addSection}>
            Add a new section
          </button>
          <button type="add-new-section" onClick={deleteLastSection}>
            Delete the last section
          </button>
        </div>
        <button id="generate-resume" onClick={props.incrementCurrentSection}>
          Generate Resume!
        </button>
        <NavigationArrows prevPage={props.prevPage} />
      </div>
    </div>
  );
};

export default CertificationsMain;
