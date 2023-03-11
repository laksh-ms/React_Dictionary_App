import React from "react";
import Meanings from "./Meanings";
import Phonetics from "./Phonetics";

export default function Results(props) {
  if (props.result === null) {
    return null;
  } else {
    return (
      <div className="Results">
        <div className="phonetics card2">
          <h4>{props.result.word}</h4>
          {props.result.phonetics.map(function (phonetic, index) {
            return (
              <div key={index}>
                <Phonetics phonetic={phonetic} />
              </div>
            );
          })}
        </div>
        <div className="glossary card2">
          {props.result.meanings.map(function (meaning, index) {
            return (
              <div key={index}>
                <Meanings meaning={meaning} />{" "}
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
