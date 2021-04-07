import React from "react";

export default function Section(props) {
  return (
    <section>
      <h3 className="section-header">{props.headerTitle}</h3>
      <form id={props.formID}>{props.children}</form>
    </section>
  );
}
