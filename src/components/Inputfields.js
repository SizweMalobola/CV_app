import React from "react";

export default function Inputfields({ label, type }) {
  function makeId(string) {
    let newString = string.toLowerCase().split(" ");
    newString = newString.join("-");
    return newString;
  }
  return (
    <div className="inputfield-div">
      <label htmlFor={makeId(label)}>{label} </label>
      <input
        type={type}
        required={true}
        onInput={(e) => {
          e.target.checkValidity();
        }}
      ></input>
    </div>
  );
}
