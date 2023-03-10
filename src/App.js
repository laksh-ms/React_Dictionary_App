import logo from "./logo.jpeg";
import React from "react";
import "./App.css";
import WordSearch from "./WordSearch";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header card2">
          <img src={logo} className="App-logo img-fluid" alt="logo" />
          <h1>Dictionary</h1>
          <img src={logo} className="App-logo img-fluid" alt="logo" />
        </header>
        <main>
          <WordSearch defaultKeyword="meaning" />
        </main>
        <footer className="Footer card2">
          Coded by{" "}
          <a
            href="https://www.linkedin.com/in/lakshmi-m-satyananda-3b726930"
            target="_blank"
            rel="noreferrer"
          >
            Lakshmi M Satyananda <i className="fa-brands fa-linkedin"></i>
          </a>
          , Open-Sourced on{" "}
          <a
            href="https://github.com/laksh-ms"
            target="_blank"
            rel="noreferrer"
          >
            github <i className="fa-brands fa-github"></i>
          </a>{" "}
          and hosted on{" "}
          <a
            href="https://meek-madeleine-ad7b86.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Netlify
          </a>
          .
        </footer>
      </div>
    </div>
  );
}
