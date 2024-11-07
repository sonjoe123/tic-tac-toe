import * as Blockly from "blockly";

// Define the main function block
Blockly.common.defineBlocksWithJsonArray([
  {
    type: "function_definition",
    message0: "Create new function %1",
    args0: [
      {
        type: "field_input",
        name: "FUNCTION_NAME",
        text: "myFunctionName",
      },
    ],
    message1: "with : %1",
    args1: [
      {
        type: "input_dummy",
        name: "PARAMS",
      },
    ],
    message2: "Do %1",
    args2: [
      {
        type: "input_statement",
        name: "BODY",
      },
    ],
    message3: "Return %1",
    args3: [
      {
        type: "input_value",
        name: "RETURN",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    inputsInline: true,
    colour: 230,
    tooltip: "Define a custom function with parameters and return value",
    helpUrl: "",
    mutator: "function_parameters_mutator",
  },
]);

// Define the mutator blocks
Blockly.defineBlocksWithJsonArray([
  {
    type: "function_parameters_mutator",
    message0: "function %1",
    args0: [
      {
        type: "field_input",
        name: "FUNCTION_NAME",
        text: "myFunctionName",
      },
    ],
    message1: "with parameters %1",
    args1: [
      {
        type: "input_statement",
        name: "PARAMS",
      },
    ],
    message2: "return value %1",
    args2: [
      {
        type: "input_value",
        name: "RETURN",
      },
    ],
    colour: 230,
    tooltip: "",
    enableContextMenu: false,
  },
  {
    type: "function_parameters_mutator_param",
    message0: "parameter %1",
    args0: [
      {
        type: "field_input",
        name: "PARAM_NAME",
        text: "param",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "",
    enableContextMenu: false,
  },
  {
    type: "function_parameters_mutator_return",
    message0: "return value",
    args0: [],
    output:null,
    colour: 230,
    tooltip: "Add a return value",
    enableContextMenu: false,
  },
]);

// Configure the mutator
Blockly.Extensions.registerMutator(
  "function_parameters_mutator",
  {
    mutationToDom() {
      const container = Blockly.utils.xml.createElement("mutation");
      container.setAttribute("parameters", this.paramCount_);
      container.setAttribute("has_return", this.hasReturn_);
      return container;
    },

    domToMutation(xmlElement) {
      this.paramCount_ = parseInt(xmlElement.getAttribute("parameters"), 10) || 0;
      this.hasReturn_ = xmlElement.getAttribute("has_return") === "true";
      this.updateShape_();
    },

    decompose(workspace) {
      const containerBlock = workspace.newBlock("function_parameters_mutator");
      containerBlock.setFieldValue(this.getFieldValue("FUNCTION_NAME"), "FUNCTION_NAME");
      containerBlock.initSvg();

      let connection = containerBlock.getInput("PARAMS").connection;
      for (let i = 0; i < this.paramCount_; i++) {
        const paramBlock = workspace.newBlock("function_parameters_mutator_param");
        paramBlock.setFieldValue(this.getFieldValue("PARAM" + i), "PARAM_NAME");
        paramBlock.initSvg();
        connection.connect(paramBlock.previousConnection);
        connection = paramBlock.nextConnection;
      }

      if (this.hasReturn_) {
        const returnBlock = workspace.newBlock("function_parameters_mutator_return");
        returnBlock.initSvg();
        containerBlock.getInput("RETURN").connection.connect(returnBlock.previousConnection);
      }

      return containerBlock;
    },

    compose(containerBlock) {
      let paramBlock = containerBlock.getInputTargetBlock("PARAMS");
      const paramNames = [];
      while (paramBlock && !paramBlock.isInsertionMarker()) {
        paramNames.push(paramBlock.getFieldValue("PARAM_NAME"));
        paramBlock = paramBlock.nextConnection &&
            paramBlock.nextConnection.targetBlock();
      }

      this.paramCount_ = paramNames.length;
      this.updateShape_();

      for (let i = 0; i < this.paramCount_; i++) {
        this.setFieldValue(paramNames[i], "PARAM" + i);
      }

      this.hasReturn_ = !!containerBlock.getInputTargetBlock("RETURN");
      this.updateShape_();
    },

    updateShape_() {
      // Remove existing parameter inputs
      for (let i = 0; this.getInput("PARAM" + i); i++) {
        this.removeInput("PARAM" + i);
      }

      // Add new parameter inputs
      for (let i = 0; i < this.paramCount_; i++) {
        this.appendValueInput("PARAM" + i)
          .setCheck("String")
          .appendField("parameter")
          .appendField(new Blockly.FieldTextInput("param"), "PARAM" + i);
      }

      // Add return input if specified
      if (this.hasReturn_ && !this.getInput("RETURN")) {
        this.appendValueInput("RETURN")
          .setCheck("String")
          .appendField("Return");
      } else if (!this.hasReturn_ && this.getInput("RETURN")) {
        this.removeInput("RETURN");
      }
    },

    paramCount_: 0,
    hasReturn_: false,
  },
  function() {
    this.paramCount_ = 0;
    this.hasReturn_ = false;
  },
  ["function_parameters_mutator_param", "function_parameters_mutator_return"]
);
