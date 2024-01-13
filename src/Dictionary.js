import React, { useState } from "react";
import axios from "axios";
import "./Dictionary.css";
import Results from "./Results";
import Photos from "./Photos";

export default function Dictionary() {
  let [keyword, setKeyword] = useState("");
  let [results, setResults] = useState(null);
  let [photos, setPhotos] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }

  function handleImageResponse(response) {
    setPhotos(response.data.photos);
  }

  function search(event) {
    event.preventDefault();
    let apiKey = "e52093t32d4f473a570bb10aoa2ca4e0";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyword}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    const imageApiKey = "e52093t32d4f473a570bb10aoa2ca4e0";
    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyword}&key=${imageApiKey}`;
    axios.get(imageApiUrl).then(handleImageResponse);
  }

  function handleKeywordChange(event) {
    setKeyword(event.target.value);
  }

  return (
    <div className="Dictionary">
      <section>
        <h1>⌨️ Start discovering 📖</h1>
        <form onSubmit={search}>
          <input
            type="serach"
            placeholder="Type your word here 🔍"
            onChange={handleKeywordChange}
          />
        </form>
        <div className="hint">
          Suggested words: flight, moon, power, jogging, weather...
        </div>
      </section>

      <Results results={results} />
      <Photos photos={photos} />
    </div>
  );
}
