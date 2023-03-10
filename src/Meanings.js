import React from "react";
import Synonyms from "./Synonyms";

export default function Meanings(props) {
  return (
    <div className="Meanings">
      <h5>{props.meaning.partOfSpeech}</h5>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            {definition.definition}
            <div className="example">
              {definition.example === undefined
                ? null
                : `eg. ${definition.example}`}
            </div>
            <div className="synonym">
              <Synonyms synonyms={definition.synonyms} />
            </div>
          </div>
        );
      })}
      <br />
    </div>
  );
}
