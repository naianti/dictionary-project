import React from "react";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      <div>
        {props.meaning.definitions.map(function (definition, index) {
          return (
            <p key={index}>
              {definition.definition}
              <br />
              <br />
              <em> {definition.example}</em>
            </p>
          );
        })}
      </div>
    </div>
  );
}
