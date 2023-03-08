import React from "react";

export default function Results(props) {
  if (props.result === null) {
    return <h6 className="card2">What word do you want to look up ?</h6>;
  } else {
    return (
      <div className="Results">
        <div className="phonetics card2">
          <h4>{props.result.word}</h4>
          <h6>
            <i className="fa-solid fa-volume-low"></i>
            {"  "}
            {props.result.phonetics[1].text}
          </h6>
        </div>
        <div className="glossary card2">
          <h4>{props.result.meanings[0].partOfSpeech}</h4>
          <h5>{props.result.meanings[0].definitions[0].definition}</h5>
        </div>
      </div>
    );
  }
}
