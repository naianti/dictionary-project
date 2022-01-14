import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Giphy from "./Giphy";

import "./Dictionary.css";

export default function Dictionary(props) {
  let [keyword, setKeyword] = useState(props.defaultKeyword);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [giphy, setGiphy] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }

  function handleGiphyResponse(response) {
    setGiphy(response.data);
  }

  function Search() {
    const apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    const apiKey = "8FFnP3N1iok2KpfxFSUmiGTTMFsZlmep";
    const giphyUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=8&offset=0&rating=g&lang=en`;

    axios.get(giphyUrl).then(handleGiphyResponse);
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
      <div className="Dictionary">
        <section>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-8 col-md-6">
                <input
                  type="search"
                  className="form-control"
                  defaultValue={props.defaultKeyword}
                  placeholder="Type any word  "
                  autoComplete="off"
                  autoFocus="on"
                  onChange={handleKeywordChange}
                />
              </div>

              <div className="col-4 col-md-2">
                <input type="submit" className="button" value="Go!" />
              </div>
            </div>
          </form>

          <div className="hint">
            Try: Hygge, Lullaby, Felicity, Hygge, Ineffable...
          </div>
        </section>

        <Results results={results} />

        <Giphy giphy={giphy} />
      </div>
    );
  } else {
    load();
    return "null";
  }
}
