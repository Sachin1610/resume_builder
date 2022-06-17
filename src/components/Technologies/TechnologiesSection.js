import React from "react";
import "../CommonFormStyles.css";

const TechnologiesSection = (props) => {
  return (
    <section>
      <div className="form-section">
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="Project Name"
            name="project"
            id={`project${props.id}`}
            value={
              props.technologiesData[props.id - 1] &&
              props.technologiesData[props.id - 1].project
            }
            onChange={(e) => props.onChange(e, props.id)}
            required
          />
          <label htmlFor={`project${props.id}`} className="form_label">
            Project Name
          </label>
        </div>
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="Technologies / Frameworks used"
            name="technology"
            id={`technology${props.id}`}
            value={
              props.technologiesData[props.id - 1] &&
              props.technologiesData[props.id - 1].technology
            }
            onChange={(e) => props.onChange(e, props.id)}
            required
          />
          <label htmlFor={`technology${props.id}`} className="form_label">
            Technologies / Frameworks used
          </label>
        </div>
      </div>

      <div className="form-section">
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="Demo Link (Optional)"
            name="demoLink"
            id={`demoLink${props.id}`}
            value={
              props.technologiesData[props.id - 1] &&
              props.technologiesData[props.id - 1].demoLink
            }
            onChange={(e) => props.onChange(e, props.id)}
          />
          <label htmlFor={`demoLink${props.id}`} className="form_label">
            Demo Link (Optional)
          </label>
        </div>
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="Repository Link (Optional)"
            name="repoLink"
            id={`repoLink${props.id}`}
            value={
              props.technologiesData[props.id - 1] &&
              props.technologiesData[props.id - 1].repoLink
            }
            onChange={(e) => props.onChange(e, props.id)}
          />
          <label htmlFor={`repoLink${props.id}`} className="form_label">
            Repository Link (Optional)
          </label>
        </div>
      </div>

      <textarea
        placeholder="Add more details about your project (optional)"
        rows={5}
        name="additionalDetails"
        value={
          props.technologiesData[props.id - 1] &&
          props.technologiesData[props.id - 1].additionalDetails
        }
        onChange={(e) => props.onChange(e, props.id)}
      ></textarea>
    </section>
  );
};

export default TechnologiesSection;
