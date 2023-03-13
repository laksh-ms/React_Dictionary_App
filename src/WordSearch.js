import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./WordSearch.css";
export default function WordSearch() {
  const [word, setWord] = useState("meaning");
  const [data, setData] = useState(null);

  function handleResponse(response) {
    setData(response.data[0]);
    console.log(response.data[0]);
  }

  function search() {
    //let apiKey = `fbeaac015a5ft5a23o73a13144db6643`;
    //let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function searchWord(event) {
    event.preventDefault();
    search();
  }

  function handleChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="WordSearch">
      <div className="card2">
        <h4>What word do you want to look up ?</h4>
        <form onSubmit={searchWord}>
          <input
            type="search"
            className="form-control"
            onChange={handleChange}
            placeholder="Search for a word... "
            autoFocus={true}
          />
        </form>
        <div className="hint">suggested words: dawn, twilight, glossary</div>
      </div>
      <Results result={data} />
    </div>
  );
}
