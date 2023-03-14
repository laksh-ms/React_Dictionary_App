import React from "react";
import "./Photos.css";

export default function Photos(props) {
  if (props.pictures) {
    return (
      <div className="Photos card2">
        <div className="row">
          {props.pictures.map(function (picture, index) {
            return (
              <div className="col-4" key={index}>
                <a href={picture.src.original} target="_blank" rel="noreferrer">
                  <img
                    src={picture.src.landscape}
                    alt={picture.alt}
                    className="img-fluid"
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return null;
  }
}
