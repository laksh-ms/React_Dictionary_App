import React, { useState } from "react";
import axios from "axios";

export default function WordSearch() {
  const [word, setWord] = useState("");

  function handleResponse(response) {}

  function search(event) {
    event.preventDefault();
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleChange(event) {
    setWord(event.target.value);
  }

  return (
    <div className="WordSearch">
      <form onSubmit={search}>
        <input type="search" className="form-control" onChange={handleChange} />
      </form>
    </div>
  );
}
