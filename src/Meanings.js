import React from "react";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <p key={index}>
            {definition.definition}
            <br />
            <em>eg. {definition.example}</em>
          </p>
        );
      })}
    </div>
  );
}
