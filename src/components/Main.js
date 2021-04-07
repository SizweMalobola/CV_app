import React, { useState } from "react";
import Buttons from "./Buttons";
import Inputfields from "./Inputfields";
import Sections from "./Sections";
import Textarea from "./Textarea";

export default function Main() {
  const [expandWork, setExpandWork] = useState(0);
  const [expandEducation, setExpandEducation] = useState(0);
  // setState handler functions
  const workHandler = (e) => {
    if (e.target.classList.contains("expand-button")) {
      setExpandWork((currentStateValue) => currentStateValue + 1);
    } else {
      setExpandWork((currentStateValue) => currentStateValue - 1);
    }
  };
  //
  const educationHandler = (e) => {
    if (e.target.classList.contains("expand-button")) {
      setExpandEducation((currentStateValue) => currentStateValue + 1);
    } else {
      setExpandEducation((currentStateValue) => currentStateValue - 1);
    }
  };
  // expand functionality
  const workChildren = [];
  const educationChildren = [];
  // work
  for (let i = 0; i < expandWork; i++) {
    workChildren.push(
      <div
        key={i + "w"}
        number={i + "w"}
        style={{ marginTop: "2rem" }}
        className="expanded-work"
      >
        <Inputfields label="Dates" type="date" />
        <Inputfields label="Positions" type="text" />
        <Inputfields label="Responsibilities" type="textarea" />
        <Inputfields label="Employer/ Address" type="text" />
        <Inputfields label="Type Of Business" type="text" />
      </div>
    );
  }
  // education
  for (let i = 0; i < expandEducation; i++) {
    educationChildren.push(
      <div
        key={i + "e"}
        number={i + "e"}
        style={{ marginTop: "2rem" }}
        className="expanded-education"
      >
        <Inputfields label="Dates" type="date" />
        <Inputfields label="Qualification Awarded" type="text" />
        <Inputfields label="Principal Studies" type="text" />
        <Inputfields label="Institution" type="text" />
      </div>
    );
  }

  return (
    <main>
      {/* personal section */}
      <Sections formID="personal-section" headerTitle="Personal Information">
        <Inputfields label="First Name/ Surname" type="text" />
        <Inputfields label="Address" type="text" />
        <Inputfields label="Tel" type="tel" />
        <Inputfields label="Email" type="email" />
        <Inputfields label="Nationality" type="text" />
        <Inputfields label="Date Of Birth" type="date" />
        <Inputfields label="Gender" type="text" />
        <Buttons formId="#personal-section" add={false} />
      </Sections>
      {/* work section */}
      <Sections formID="work-section" headerTitle="Work Experience">
        <Inputfields label="Dates" type="date" />
        <Inputfields label="Positions" type="text" />
        <Inputfields label="Responsibilities" type="text" />
        <Inputfields label="Employer/ Address" type="text" />
        <Inputfields label="Type Of Business" type="text" />
        {workChildren}
        <Buttons
          formId="#work-section"
          add={true}
          expandHandler={workHandler}
          collapseHandler={workHandler}
        />
      </Sections>
      {/* eduction section */}
      <Sections formID="education-section" headerTitle="Education and Training">
        <Inputfields label="Dates" type="date" />
        <Inputfields label="Qualification Awarded" type="text" />
        <Inputfields label="Principal Studies" type="text" />
        <Inputfields label="Institution" type="text" />
        {educationChildren}
        <Buttons
          formId="#education-section"
          add={true}
          expandHandler={educationHandler}
          collapseHandler={educationHandler}
        />
      </Sections>
      {/* skills section */}
      <Sections formID="skills-section" headerTitle="Skills and Competences">
        <Inputfields label="Language Spoken" type="text" />
        <Inputfields label="Other Language(s)" type="text" />
        {/* textarea */}
        <Textarea label="Social Skills" cols="50" rows="3" />
        <Textarea label="Organisational Skills" cols="50" rows="3" />
        <Textarea label="Computer Skills" cols="50" rows="3" />
        <Textarea label="Additional Information" cols="50" rows="3" />
        <Buttons formId="#skills-section" add={false} />
      </Sections>
    </main>
  );
}
