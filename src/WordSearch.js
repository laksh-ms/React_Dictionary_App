import React, { useState } from "react";

export default function WordSearch() {
  const [word, setWord] = useState("");

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${word}`);
  }
  function handleChange(event) {
    setWord(event.target.value);
  }
  return (
    <div className="WordSearch">
      <form onSubmit={search}>
        <input type="search" onChange={handleChange} />
      </form>
    </div>
  );
}
