import React from "react";
import ReactDOM from "react-dom";
import DropDownList from "./Components/DropDownList";

import "./styles.css";

const DropDown = () => {
  return (
    <div className="App">
      <h1>A Simple Custom DropDown In React</h1>
      <DropDownList />
    </div>
  );
};

const rootElement = document.getElementById("root");
ReactDOM.render(<DropDown />, rootElement);
