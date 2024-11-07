import React from "react";
import BlocklyWorkspace from "./BlocklyWorkspace";
import TicTacToe from "./TicTacToe";
import "./LearningMain.css";

const LearningMain = () => {
  return (
    <div className="main">
      <div className="left-section">
        <BlocklyWorkspace />
      </div>
      <div className="right-section">
        <div className="top-right">
          <TicTacToe />
        </div>
        <div className="bottom-right">
          <h2>Generated Code:</h2>
          <pre id="generatedCode"></pre>
        </div>
      </div>
    </div>
  );
};

export default LearningMain;