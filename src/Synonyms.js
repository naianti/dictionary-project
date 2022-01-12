import React from "react";

export default function Synonyms(props) {
  if (props.synonyms && props.synonyms.length > 0) {
    return (
      <div className="Synonyms">
        <strong>Similar</strong>
        {props.synonyms.map(function (synonym, index) {
          if (index < 10) {
            return <button key={index}>{synonym}</button>;
          } else return null;
        })}
      </div>
    );
  } else {
    return null;
  }
}
