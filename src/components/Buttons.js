import React, { useState } from "react";
import { FaCheck, FaEdit, FaPlus, FaTimes } from "react-icons/fa";

export default function Buttons({
  formId,
  add,
  expandHandler,
  collapseHandler,
}) {
  //
  const [text, setText] = useState(false);
  const [input, setInput] = useState(null);
  //
  const checkValid = (formEl) => {
    let form = document.querySelector(formEl);
    return form.checkValidity();
  };
  //
  const displayText = (formEl) => {
    let form = document.querySelector(formEl);
    let inputEls = form.querySelectorAll("input");
    //
    if (form.querySelector("textarea")) {
      let textareaEls = form.querySelectorAll("textarea");
      inputEls = [...inputEls, ...textareaEls];
    }

    setText((currentStateValue) => (currentStateValue = true));
    setInput((currentStateValue) => (currentStateValue = Array.from(inputEls)));
    inputEls.forEach((el) => {
      let replacement = document.createElement("span");
      replacement.classList.add("text-element");
      replacement.innerText = el.value;
      el.replaceWith(replacement);
    });
  };
  //
  const displayInput = () => {
    let textEls = document.querySelectorAll(".text-element");
    let savedInputs = input;
    setText((currentStateValue) => (currentStateValue = false));

    savedInputs.forEach((el, index) => {
      textEls[index].replaceWith(el);
    });
  };
  return (
    <div className="button-div">
      <button
        onClick={(e) => {
          if (checkValid(formId)) {
            e.preventDefault();
            displayText(formId);
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
          if (text) {
            let form = document.querySelector(formId);
            const subBtn = form.querySelector(".submit-button");
            displayInput();
            subBtn.removeAttribute("disabled");
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
              if (text === false) {
                expandHandler(e);
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
              if (text === false) {
                collapseHandler(e);
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
