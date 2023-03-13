import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "./WordSearch.css";
export default function WordSearch(props) {
  const [word, setWord] = useState(props.defaultKeyword);
  const [data, setData] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setData(response.data[0]);
    console.log(response.data[0]);
  }

  function search() {
    setLoaded(true);
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
  if (loaded) {
    return (
      <div className="WordSearch">
        <div className="card2">
          <h5>What word do you want to look up ?</h5>
          <form onSubmit={searchWord}>
            <input
              type="search"
              className="form-control"
              onChange={handleChange}
              placeholder="Search for a word... "
              autoFocus={true}
              defaultValue={props.defaultKeyword}
            />
          </form>
          <div className="hint">suggested words: dawn, twilight, glossary</div>
        </div>
        <Results result={data} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
