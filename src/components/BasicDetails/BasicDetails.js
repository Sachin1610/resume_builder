import React from "react";
import "../CommonFormStyles.css";
import "../NavigationArrows";
import NavigationArrows from "../NavigationArrows";

const BasicDetails = (props) => {
  return (
    <div className="common-section">
      <div className="common-container">
        <div className="form-container">
          <h2>Let's start with some basic details about you...</h2>
          <form>
            <div className="form-section">
              <div className="form_group field">
                <input
                  className="form_field"
                  placeholder="First Name"
                  name="firstName"
                  id="firstName"
                  value={props.basicData.firstName}
                  onChange={(e) => props.onChange(e)}
                  required
                />
                <label htmlFor="firstName" className="form_label">
                  First Name
                </label>
              </div>
              <div className="form_group field">
                <input
                  className="form_field"
                  placeholder="Last Name"
                  name="lastName"
                  id="lastName"
                  value={props.basicData.lastName}
                  onChange={(e) => props.onChange(e)}
                  required
                />
                <label htmlFor="lastName" className="form_label">
                  Last Name
                </label>
              </div>
            </div>

            <div className="form-section three-in-a-row">
              <div className="form_group field">
                <input
                  className="form_field"
                  placeholder="Profession"
                  name="profession"
                  id="profession"
                  value={props.basicData.profession}
                  onChange={(e) => props.onChange(e)}
                  required
                />
                <label htmlFor="profession" className="form_label">
                  Profession
                </label>
              </div>
              <div className="form_group field">
                <input
                  className="form_field"
                  placeholder="City"
                  name="city"
                  id="city"
                  value={props.basicData.city}
                  onChange={(e) => props.onChange(e)}
                  required
                />
                <label htmlFor="city" className="form_label">
                  City
                </label>
              </div>
              <div className="form_group field">
                <input
                  className="form_field"
                  placeholder="Country"
                  name="country"
                  id="country"
                  value={props.basicData.country}
                  onChange={(e) => props.onChange(e)}
                  required
                />
                <label htmlFor="country" className="form_label">
                  Country
                </label>
              </div>
            </div>

            <div className="form-section">
              <div className="form_group field">
                <input
                  className="form_field"
                  placeholder="Pincode/Zip"
                  name="pincode"
                  id="pincode"
                  value={props.basicData.pincode}
                  onChange={(e) => props.onChange(e)}
                  required
                />
                <label htmlFor="pincode" className="form_label">
                  Pincode/Zip
                </label>
              </div>
              <div className="form_group field">
                <input
                  className="form_field"
                  placeholder="Phone No."
                  name="phone"
                  id="phone"
                  value={props.basicData.phone}
                  onChange={(e) => props.onChange(e)}
                  required
                />
                <label htmlFor="phone" className="form_label">
                  Phone No.
                </label>
              </div>
            </div>

            <div className="form-section">
              <div className="form_group field">
                <input
                  className="form_field"
                  placeholder="Email"
                  name="email"
                  id="email"
                  value={props.basicData.email}
                  onChange={(e) => props.onChange(e)}
                  required
                />
                <label htmlFor="email" className="form_label">
                  Email
                </label>
              </div>
              <div className="form_group field">
                <input
                  className="form_field"
                  placeholder="Github (Optional)"
                  name="github"
                  id="github"
                  value={props.basicData.github}
                  onChange={(e) => props.onChange(e)}
                />
                <label htmlFor="github" className="form_label">
                  Github (Optional)
                </label>
              </div>
            </div>

            <div className="form-section">
              <div className="form_group field">
                <input
                  className="form_field"
                  placeholder="LinkedIn (Optional)"
                  name="linkedin"
                  id="linkedin"
                  value={props.basicData.linkedin}
                  onChange={(e) => props.onChange(e)}
                />
                <label htmlFor="linkedin" className="form_label">
                  LinkedIn (Optional)
                </label>
              </div>
              <div className="form_group field">
                <input
                  className="form_field"
                  placeholder="Twitter (Optional)"
                  name="twitter"
                  id="twitter"
                  value={props.basicData.twitter}
                  onChange={(e) => props.onChange(e)}
                />
                <label htmlFor="twitter" className="form_label">
                  Twitter (Optional)
                </label>
              </div>
            </div>
          </form>
        </div>
        <NavigationArrows nextPage={props.nextPage} />
      </div>
    </div>
  );
};

export default BasicDetails;
