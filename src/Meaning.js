import React from "react";
import Examples from "./Examples";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <span key={index}>
            <strong>definition:</strong> {definition.definition}
            <Examples examples={definition.example} />
            <br />
            <br />
            <Synonyms synonyms={definition.synonyms} />
          </span>
        );
      })}
    </div>
  );
}
