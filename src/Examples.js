import React from "react";

export default function Synonyms(props) {
  if (props.examples) {
    return (
      <div>
        <strong>Example:</strong>
        <em>{props.examples}</em>
      </div>
    );
  } else {
    return null;
  }
}
