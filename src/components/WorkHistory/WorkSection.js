import React, { useState, useEffect } from "react";
import "../CommonFormStyles.css";
import { EditorState, ContentState } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

const WorkSection = (props) => {
  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const toolbarOptions = [
    "inline",
    "blockType",
    "fontSize",
    "fontFamily",
    "list",
    "colorPicker",
    "link",
    "embedded",
    "emoji",
  ];

  useEffect(() => {
    if (editorState.getCurrentContent().getPlainText("\u0001") !== "") {
      props.handleEditorChange(
        undefined,
        props.id,
        "jobDescription",
        editorState.getCurrentContent().getPlainText("\u0001")
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editorState]);

  useEffect(() => {
    if (
      props.workData[props.id - 1] &&
      props.workData[props.id - 1].jobDescription !== ""
    ) {
      setEditorState(
        EditorState.createWithContent(
          ContentState.createFromText(
            props.workData[props.id - 1].jobDescription
          )
        )
      );
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <section>
      <div className="form-section">
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="Job Title"
            name="jobTitle"
            id={`jobTitle${props.id}`}
            value={
              props.workData[props.id - 1] &&
              props.workData[props.id - 1].jobTitle
            }
            onChange={(e) => props.onChange(e, props.id)}
            required
          />
          <label htmlFor={`jobTitle${props.id}`} className="form_label">
            Job Title
          </label>
        </div>
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="Employer"
            name="employer"
            id={`employer${props.id}`}
            value={
              props.workData[props.id - 1] &&
              props.workData[props.id - 1].employer
            }
            onChange={(e) => props.onChange(e, props.id)}
            required
          />
          <label htmlFor={`employer${props.id}`} className="form_label">
            Employer
          </label>
        </div>
      </div>

      <div className="form-section">
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="City"
            name="city"
            id={`city${props.id}`}
            value={
              props.workData[props.id - 1] && props.workData[props.id - 1].city
            }
            onChange={(e) => props.onChange(e, props.id)}
            required
          />
          <label htmlFor={`city${props.id}`} className="form_label">
            City
          </label>
        </div>
        <div className="form_group field">
          <input
            className="form_field"
            placeholder="Country"
            name="country"
            id={`country${props.id}`}
            value={
              props.workData[props.id - 1] &&
              props.workData[props.id - 1].country
            }
            onChange={(e) => props.onChange(e, props.id)}
            required
          />
          <label htmlFor={`country${props.id}`} className="form_label">
            Country
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
              props.workData[props.id - 1] &&
              props.workData[props.id - 1].startDate
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
              props.workData[props.id - 1] &&
              props.workData[props.id - 1].endDate
            }
            onChange={(e) => props.onChange(e, props.id)}
            required
          />
          <label htmlFor={`endDate${props.id}`} className="form_label">
            End Date
          </label>
        </div>
      </div>

      <Editor
        editorState={editorState}
        toolbarClassName="editor-toolbar"
        wrapperClassName="editor-wrapper"
        placeholder="Enter the job description..."
        editorClassName="editor"
        onEditorStateChange={setEditorState}
        toolbar={{ options: toolbarOptions }}
      />
    </section>
  );
};

export default WorkSection;
