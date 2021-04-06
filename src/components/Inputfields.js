import React, { Component } from "react";

export default class Inputfields extends Component {
  makeId(string) {
    let newString = string.toLowerCase().split(" ");
    newString = newString.join("-");
    return newString;
  }
  render() {
    const { label, type } = this.props;
    return (
      <div className="inputfield-div">
        <label htmlFor={this.makeId(label)}>{label} </label>
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
}
