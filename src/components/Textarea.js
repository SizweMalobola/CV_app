import React from "react";

export default function Textarea({ label, cols, rows }) {
  let labelId = label.toLowerCase().split(" ");
  labelId = labelId.join("-");
  return (
    <div className="textarea-div">
      <label htmlFor={labelId}>{label} </label>
      <textarea rows={rows} cols={cols} required={true}></textarea>
    </div>
  );
}
