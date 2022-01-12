import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  console.log(props);
  function playAudio(event) {
    event.preventDefault();
    const audio = new Audio(props.phonetics[0].audio);
    audio.play();
  }

  return (
    <div className="Phonetics">
      <a href="/" onClick={playAudio}>
        <i className="fa fa-volume-up"></i>
      </a>
      <span className="phonetics-text">/{props.phonetics[0].text}/</span>
    </div>
  );
}
