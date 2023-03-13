import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  if (
    props.phonetic.text === undefined ||
    props.phonetic.audio === undefined ||
    props.phonetic.audio === ""
  ) {
    return null;
  } else {
    return (
      <div>
        <audio controls={true}>
          <source src={props.phonetic.audio} />
        </audio>
        {"  "}
        {props.phonetic.text}
      </div>
    );
  }
}
