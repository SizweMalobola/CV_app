import React, { Component } from "react";
import { FaCheck, FaEdit, FaPlus, FaTimes } from "react-icons/fa";

export default class Buttons extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: false,
      inputs: null,
    };
  }

  checkValid(formEl) {
    let form = document.querySelector(formEl);
    return form.checkValidity();
  }
  displayText(formEl) {
    let form = document.querySelector(formEl);
    let inputEls = form.querySelectorAll("input");
    console.log(Array.from(inputEls));
    this.setState({
      text: true,
      inputs: Array.from(inputEls),
    });
    inputEls.forEach((el) => {
      let replacement = document.createElement("span");
      replacement.classList.add("text-element");
      replacement.innerText = el.value;
      el.replaceWith(replacement);
    });
  }
  displayInput() {
    let textEls = document.querySelectorAll(".text-element");
    let savedInputs = this.state.inputs;
    this.setState({
      text: false,
    });
    savedInputs.forEach((el, index) => {
      textEls[index].replaceWith(el);
    });
  }
  render() {
    const { formId, add, expandHandler, collapseHandler } = this.props;
    return (
      <div className="button-div">
        <button
          onClick={(e) => {
            if (this.checkValid(formId)) {
              e.preventDefault();
              this.displayText(formId);
              //   disabling buttons so it doesn't erase inputs
              e.target.setAttribute("disabled", true);
            }
          }}
          className="submit-button"
          type="submit"
        >
          Submit <FaCheck />
        </button>
        <button
          className="edit-button"
          onClick={(e) => {
            e.preventDefault();
            if (this.state.text) {
              this.displayInput();
              e.target.previousSibling.removeAttribute("disabled");
            }
          }}
        >
          Edit <FaEdit />
        </button>
        {/* conditionally rendered buttons  */}
        {add && (
          <>
            <button
              className="expand-button"
              onClick={(e) => {
                //   this must only run when you can still fill in inputfield
                e.preventDefault();
                if (this.state.text === false) {
                  console.log("clicked on expand");
                  expandHandler();
                }
              }}
            >
              Expand <FaPlus />
            </button>
            <button
              className="collapse-button"
              onClick={(e) => {
                //   this must only run when you can still fill in inputfield
                e.preventDefault();
                if (this.state.text === false) {
                  console.log("clicked on collapse");
                  collapseHandler();
                }
              }}
            >
              Collapse <FaTimes />
            </button>
          </>
        )}
      </div>
    );
  }
}
