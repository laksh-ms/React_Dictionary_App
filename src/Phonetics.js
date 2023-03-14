import React from "react";
import "./Phonetics.css";

export default function Phonetics(props) {
  let myAudio = new Audio(props.phonetic.audio);
  function playAudio() {
    myAudio.play();
  }
  /*<audio controls={true}>
          <source src={props.phonetic.audio} />
        </audio>*/
  if (
    props.phonetic.text === undefined ||
    props.phonetic.audio === undefined ||
    props.phonetic.audio === ""
  ) {
    return null;
  } else {
    return (
      <div className="Phonetics">
        <button onClick={playAudio} type="button">
          <i className="fa-solid fa-volume-low"></i>
        </button>
        {props.phonetic.text}
      </div>
    );
  }
}
