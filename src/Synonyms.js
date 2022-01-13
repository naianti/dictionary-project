import React from "react";
import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <span>Similar: </span>

        {props.synonyms.map(function (synonym, index) {
          if (index < 10) {
            return (
              <span className="synonyms-text" key={index}>
                {synonym}
              </span>
            );
          } else return null;
        })}
      </div>
    );
  } else {
    return null;
  }
}
