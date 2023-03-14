import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import "./WordSearch.css";

export default function WordSearch(props) {
  const [word, setWord] = useState(props.defaultKeyword);
  const [data, setData] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setData(response.data[0]);
  }

  function handlePhotosResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    setLoaded(true);
    //let apiKey = `fbeaac015a5ft5a23o73a13144db6643`;
    //let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
    axios.get(apiUrl).then(handleDictionaryResponse);
    //search for photos
    /*let pexelsApiKey =
      "f9EZUHHBoTf4TAgMXrLCg9kxvIv0YC6icEwHcf1yWyojrcWgj4PZqDYK";
    let pexelsApiUrl = `https://api.pexels.com/v1/search?query=${word}&per_page=1`;
    let headers = { Authorization: `Bearer ${pexelsApiKey}` };
    axios.get(pexelsApiUrl, { headers: headers }).then(handlePhotosResponse);*/
    let sheCodesApiKey = "bd79ao40tde3dec118ca46bc3e6dd55f";
    let sheCodesApiUrl = `https://api.shecodes.io/images/v1/search?query=${word}&key=${sheCodesApiKey} `;
    axios.get(sheCodesApiUrl).then(handlePhotosResponse);
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
        <Photos pictures={photos} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
