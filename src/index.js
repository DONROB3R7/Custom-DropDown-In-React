import React from "react";
import ReactDOM from "react-dom";

import "./styles.css";

const DropDown = () => {
  return (
    <div className="App">
      <h1>A Simple Custom DropDown In React</h1>
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<DropDown />, rootElement);
