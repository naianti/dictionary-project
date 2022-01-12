import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function Search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleSubmit(event) {
    event.preventDefault();
    Search();
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    Search();
  }

  if (loaded) {
    return (
      <div className="Dictionary align-items-center">
        <section>
          <form className="searcher" onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-6 col-md-4">
                <input
                  type="search"
                  className="form-control"
                  placeholder="Type any word  "
                  autoComplete="off"
                  autoFocus="on"
                  onChange={handleKeywordChange}
                />
              </div>

              <div className="col-6 col-md-2">
                <input type="submit" className="button" value="Go!" />
              </div>
            </div>
          </form>
        </section>

        <Results results={results} />
      </div>
    );
  } else {
    load();
    return "null";
  }
}
