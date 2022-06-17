import React from "react";
import "../CommonFormStyles.css";

const CertificationsSection = (props) => {
  return (
    <section>
      <div className="form-section">
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="Achievement / Certification"
            name="certificateTitle"
            id={`certificateTitle${props.id}`}
            value={
              props.certificationsData[props.id - 1] &&
              props.certificationsData[props.id - 1].certificateTitle
            }
            onChange={(e) => props.onChange(e, props.id)}
            required
          />
          <label htmlFor={`certificateTitle${props.id}`} className="form_label">
            Achievement / Certification
          </label>
        </div>
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="Certifying Organisation (Optional)"
            name="certifyingOrg"
            id={`certifyingOrg${props.id}`}
            value={
              props.certificationsData[props.id - 1] &&
              props.certificationsData[props.id - 1].certifyingOrg
            }
            onChange={(e) => props.onChange(e, props.id)}
          />
          <label htmlFor={`certifyingOrg${props.id}`} className="form_label">
            Certifying Organisation (Optional)
          </label>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
