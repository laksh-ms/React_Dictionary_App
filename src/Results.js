import React from "react";
import Meanings from "./Meanings";

export default function Results(props) {
  if (props.result === null) {
    return <h6 className="card2">What word do you want to look up ?</h6>;
  } else {
    return (
      <div className="Results">
        <div className="phonetics card2">
          <h4>{props.result.word}</h4>
          {props.result.phonetics.map(function (phonetic, index) {
            if (
              phonetic.text === undefined ||
              phonetic.audio === undefined ||
              phonetic.audio === ""
            ) {
              return null;
            } else {
              return (
                <p key={index}>
                  <i className="fa-solid fa-volume-low"></i>
                  {"  "}
                  {phonetic.text}
                </p>
              );
            }
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
