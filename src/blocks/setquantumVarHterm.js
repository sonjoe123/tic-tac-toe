import * as Blockly from "blockly";

Blockly.common.defineBlocksWithJsonArray([
    // Set Block for quantumVarHterm
    {
      type: "setquantumVarHterm",
      message0: "set quantum H term %1",
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
      tooltip: "Set quantum H term",
      helpUrl: "",
    },
   
  ]);