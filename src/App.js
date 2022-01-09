import "./App.css";
import logo from "./logo.png";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header>
          <img src={logo} className="App-logo" alt="logo" />
          <h1>Choose words wisely!</h1>
        </header>
        <main>
          <h2>Improve your vocabulary and pronunciation</h2>
          <Dictionary />
        </main>
        <footer>Code by Nai Antillano</footer>
      </div>
    </div>
  );
}
