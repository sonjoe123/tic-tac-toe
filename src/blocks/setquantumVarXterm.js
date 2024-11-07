import * as Blockly from "blockly";

Blockly.common.defineBlocksWithJsonArray([
  // Set Block for quantumVarXterm
  {
    type: "setquantumVarXterm",
    message0: "set quantum X term %1",
    args0: [
      {
        type: "input_value",
        name: "VALUE",
        check: "Number",
      },
    ],
    previousStatement: null,
    nextStatement: null,
    colour: 230,
    tooltip: "Set quantum X term",
    helpUrl: "",
  },
  
]);
