import React, { useEffect, useRef } from "react";
import * as Blockly from "blockly";
import { pythonGenerator } from "blockly/python";
import { forBlock } from "./codeGenerators";
import "./BlocklyWorkspace.css";
import { toolbox } from "./toolBoxConfig";
import axios from "axios";

const BlocklyWorkspace = () => {
  const workspaceRef = useRef(null);

  useEffect(() => {
    if (workspaceRef.current) {
      return;
    }

    const workspace = Blockly.inject("blocklyDiv", {
      toolbox: toolbox,
      scrollbars: true,
      horizontalLayout: false,
      toolboxPosition: "start",
    });

    workspaceRef.current = workspace;

    Object.keys(forBlock).forEach((blockType) => {
      pythonGenerator.forBlock[blockType] = forBlock[blockType];
    });

    const generateCode = () => {
      try {
        const code = pythonGenerator.workspaceToCode(workspace);
        document.getElementById('generatedCode').textContent = code;
      } catch (error) {
        console.error("Code generation error:", error);
        document.getElementById('generatedCode').textContent = "Error generating code. Check console for details.";
      }
    };

    generateCode();
    workspace.addChangeListener(generateCode);

   

    return () => {
      if (workspaceRef.current) {
        workspaceRef.current.dispose();
        workspaceRef.current = null;
      }
    };
  }, []);

  const sendCodeToBackend = async () => {
    try {
      const code = document.getElementById('generatedCode').textContent;
      const response = await axios.post("http://localhost:5000/receive_code", {
        code: code,
      });
      const { result, error } = response.data;
      if (error) {
        alert("Error sending code to backend:\n" + error);
      } else {
        alert("Code sent successfully to backend. Result:\n" + result);
      }
    } catch (error) {
      console.error("Error sending code to backend:", error);
      alert("Failed to send code to backend.");
    }
  };

  const saveWorkspaceState = async () => {
    if (!workspaceRef.current) return;

    const state = Blockly.serialization.workspaces.save(workspaceRef.current);
    try {
      await axios.post("http://localhost:5000/save_workspace", { state });
      alert("Workspace state saved successfully!");
    } catch (error) {
      console.error("Error saving workspace state:", error);
      alert("Failed to save workspace state.");
    }
  };

  const loadWorkspaceState = async () => {
    if (!workspaceRef.current) return;

    try {
      const response = await axios.get("http://localhost:5000/load_workspace");
      const { state } = response.data;
      Blockly.serialization.workspaces.load(state, workspaceRef.current);
      alert("Workspace state loaded successfully!");
    } catch (error) {
      console.error("Error loading workspace state:", error);
      alert("Failed to load workspace state.");
    }
  };

  return (
    <div className="blockly-editor">
      <div id="blocklyDiv" className="blockly-workspace"></div>
      <div className="button-container">
        <button onClick={sendCodeToBackend} className="send-button">
          Send to Backend
        </button>
        <button onClick={saveWorkspaceState} className="save-button">
          Save Workspace State
        </button>
        <button onClick={loadWorkspaceState} className="load-button">
          Load Workspace State
        </button>
      </div>
    </div>
  );
};

export default BlocklyWorkspace;
