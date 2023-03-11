import React from "react";

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
        <audio controls>
          <source src={props.phonetic.audio} type="audio/mpeg" />
        </audio>
        {"  "}
        {props.phonetic.text}
      </div>
    );
  }
}
