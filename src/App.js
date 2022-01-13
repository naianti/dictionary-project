import React from "react";
import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Words are powerful...!</h1>
        </header>
        <main>
          <h2>Improve your vocabulary and pronunciation</h2>

          <h3>Here! What word are you looking for?</h3>
          <Dictionary defaultKeyword="Abracadabra" />
        </main>
        <footer>Code by Nai Antillano</footer>
      </div>
    </div>
  );
}
