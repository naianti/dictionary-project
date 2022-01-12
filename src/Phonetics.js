import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  function playAudio(event) {
    event.preventDefault();
    const audio = new Audio(props.phonetics.audio);
    audio.play();
  }

  return (
    <div className="Phonetics">
      <a href="/" onClick={playAudio}>
        <i class="fa fa-volume-up"></i>
      </a>
      <span className="phonetics-text">/{props.phonetics.text}/</span>
    </div>
  );
}
