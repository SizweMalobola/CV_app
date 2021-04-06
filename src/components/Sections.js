import React, { Component } from "react";
import Buttons from "./Buttons";
import Inputfields from "./Inputfields";
import Textarea from "./Textarea";

export default class Sections extends Component {
  constructor(props) {
    super(props);

    this.state = {
      expandWork: 0,
      expandEducation: 0,
    };
    // work expantion
    this.setExpandW = this.setExpandW.bind(this);
    this.setCollapseW = this.setCollapseW.bind(this);
    // education expantion
    this.setExpandE = this.setExpandE.bind(this);
    this.setCollapseE = this.setCollapseE.bind(this);
  }
  // function when called changes state
  setExpandW() {
    this.setState({
      expandWork: this.state.expandWork + 1,
    });
  }
  setExpandE() {
    this.setState({
      expandEducation: this.state.expandEducation + 1,
    });
  }
  setCollapseW() {
    if (this.state.expandWork !== 0) {
      console.log("not !== 0");
      this.setState({
        expandWork: this.state.expandWork - 1,
      });
    }
  }
  setCollapseE() {
    if (this.state.expandEducation !== 0) {
      console.log("not !== 0");
      this.setState({
        expandEducation: this.state.expandEducation - 1,
      });
    }
  }
  render() {
    // expand work functionality
    const workChildren = [];
    const educationChildren = [];
    // work
    for (let i = 0; i < this.state.expandWork; i++) {
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
    for (let i = 0; i < this.state.expandEducation; i++) {
      educationChildren.push(
        <div
          key={i + "e"}
          number={i + "e"}
          style={{ marginTop: "2rem" }}
          className="expanded-education"
        >
          <Inputfields label="Dates" type="date" />
          <Inputfields label="Qualification Awarded" type="text" />
          <Inputfields label="Pricipal Studies" type="text" />
          <Inputfields label="Institution" type="text" />
        </div>
      );
    }
    return (
      <>
        <section>
          <h3 className="section-header">Personal Information</h3>
          <form id="personal-section">
            <Inputfields label="First Name/ Surname" type="text" />
            <Inputfields label="Address" type="text" />
            <Inputfields label="Tel" type="tel" />
            <Inputfields label="Email" type="email" />
            <Inputfields label="Nationality" type="text" />
            <Inputfields label="Date Of Birth" type="date" />
            <Inputfields label="Gender" type="text" />
            <Buttons formId="#personal-section" add={false} />
          </form>
        </section>
        <section>
          <h3 className="section-header">Work Experience</h3>
          <form id="work-section">
            <Inputfields label="Dates" type="date" />
            <Inputfields label="Positions" type="text" />
            <Inputfields label="Responsibilities" type="text" />
            <Inputfields label="Employer/ Address" type="text" />
            <Inputfields label="Type Of Business" type="text" />
            {workChildren}
            <Buttons
              formId="#work-section"
              add={true}
              expandHandler={this.setExpandW}
              collapseHandler={this.setCollapseW}
            />
          </form>
        </section>
        <section>
          <h3 className="section-header">Education and Training</h3>
          <form id="education-section">
            <Inputfields label="Dates" type="date" />
            <Inputfields label="Qualification Awarded" type="text" />
            <Inputfields label="Pricipal Studies" type="text" />
            <Inputfields label="Institution" type="text" />
            {educationChildren}
            <Buttons
              formId="#education-section"
              add={true}
              expandHandler={this.setExpandE}
              collapseHandler={this.setCollapseE}
            />
          </form>
        </section>
        <section>
          <h3 className="section-header">Skills and Competences</h3>
          <form id="skills-section">
            <Inputfields label="Language Spoken" type="text" />
            <Inputfields label="Other Language(s)" type="text" />
            {/* textarea */}
            <Textarea label="Social Skills" cols="50" rows="3" />
            <Textarea label="Organisational Skills" cols="50" rows="3" />
            <Textarea label="Computer Skills" cols="50" rows="3" />
            <Textarea label="Additional Information" cols="50" rows="3" />
            <Buttons formId="#education-section" add={false} />
          </form>
        </section>
      </>
    );
  }
}
/* create state expandwork that will have a value of a number, initial will be 0.
 This state will dictate how many times the user will expand the work section of the form.
  When expand button is clicked, the value of expandwork(state) will incriment by one,
   which will run the function workexpanded() that takes the value of the expandwork state as an arguement,
    which will loop for expandwork state number of times.*/
