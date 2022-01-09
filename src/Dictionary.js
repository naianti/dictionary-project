import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");

  function handleResponse(response) {
    console.log(response.data[0]);
  }

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary align-items-center">
      <section>
        <form className="searcher" onSubmit={search}>
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
    </div>
  );
}
