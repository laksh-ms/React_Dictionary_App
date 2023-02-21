import logo from "./logo.jpeg";
import React from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo img-fluid" alt="logo" />

        {"    "}
        <strong>Dictionary</strong>
      </header>
    </div>
  );
}

export default App;
