import React from "react";
import "./Examples.css";

export default function Synonyms(props) {
  if (props.examples) {
    return (
      <div className="Examples">
        <span>Example:</span>
        <span className="example-text"> {props.examples}</span>
      </div>
    );
  } else {
    return null;
  }
}
