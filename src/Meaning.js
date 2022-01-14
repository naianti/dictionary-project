import React from "react";
import Examples from "./Examples";
import Synonyms from "./Synonyms";
import "./Meaning.css";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <span key={index}>
            <span>Definition:</span>{" "}
            <div className="meaning-text">{definition.definition}</div>
            <Examples examples={definition.example} />
            <br />
            <Synonyms synonyms={definition.synonyms} />
            <br />
          </span>
        );
      })}
    </div>
  );
}
