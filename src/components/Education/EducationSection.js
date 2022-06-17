import React from "react";
import "../CommonFormStyles.css";

const EducationSection = (props) => {
  return (
    <section>
      <div className="form-section">
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="School/College Name"
            name="schoolName"
            id={`schoolName${props.id}`}
            value={
              props.educationData[props.id - 1] &&
              props.educationData[props.id - 1].schoolName
            }
            onChange={(e) => props.onChange(e, props.id)}
            required
          />
          <label htmlFor={`schoolName${props.id}`} className="form_label">
            School/College Name
          </label>
        </div>
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="School/College Location"
            name="schoolLocation"
            id={`schoolLocation${props.id}`}
            value={
              props.educationData[props.id - 1] &&
              props.educationData[props.id - 1].schoolLocation
            }
            onChange={(e) => props.onChange(e, props.id)}
            required
          />
          <label htmlFor={`schoolLocation${props.id}`} className="form_label">
            School/College Location
          </label>
        </div>
      </div>

      <div className="form-section">
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="Degree"
            name="degree"
            id={`degree${props.id}`}
            value={
              props.educationData[props.id - 1] &&
              props.educationData[props.id - 1].degree
            }
            onChange={(e) => props.onChange(e, props.id)}
            required
          />
          <label htmlFor={`degree${props.id}`} className="form_label">
            Degree
          </label>
        </div>
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="Field Of Study"
            name="fieldOfStudy"
            id={`fieldOfStudy${props.id}`}
            value={
              props.educationData[props.id - 1] &&
              props.educationData[props.id - 1].fieldOfStudy
            }
            onChange={(e) => props.onChange(e, props.id)}
            required
          />
          <label htmlFor={`fieldOfStudy${props.id}`} className="form_label">
            Field Of Study
          </label>
        </div>
      </div>

      <div className="form-section">
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="Start Date"
            name="startDate"
            id={`startDate${props.id}`}
            value={
              props.educationData[props.id - 1] &&
              props.educationData[props.id - 1].startDate
            }
            onChange={(e) => props.onChange(e, props.id)}
            required
          />
          <label htmlFor={`startDate${props.id}`} className="form_label">
            Start Date
          </label>
        </div>
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="End Date"
            name="endDate"
            id={`endDate${props.id}`}
            value={
              props.educationData[props.id - 1] &&
              props.educationData[props.id - 1].endDate
            }
            onChange={(e) => props.onChange(e, props.id)}
          />
          <label htmlFor={`endDate${props.id}`} className="form_label">
            End Date
          </label>
        </div>
      </div>
      <textarea
        placeholder="Add a description (optional)"
        rows={6}
        name="eduDescription"
        value={
          props.educationData[props.id - 1] &&
          props.educationData[props.id - 1].eduDescription
        }
        onChange={(e) => props.onChange(e, props.id)}
      ></textarea>
    </section>
  );
};

export default EducationSection;
