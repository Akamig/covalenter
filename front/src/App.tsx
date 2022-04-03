import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {

  return (
    <div className="App">
      <div className="Main">
        <div className="MessageWrapper">
          <div className="TopContent">
          <img src={logo} className="logo" alt="logo" />
          <span className="TopHeader">COVALENTER</span>
            </div>
          <div className="ScrollContent">
            <ol className="ScrollInner">
              <li>AB: Hi</li>
            </ol>
          </div>
          <form className="Input" action="">
            <div className="InputField">
              <input type="text" name="WhatsHappening" id="textput" />
            </div>
            <div className="Button Wrapper">
              <input type="button" value="" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
