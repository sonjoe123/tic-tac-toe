import * as Blockly from "blockly";

Blockly.common.defineBlocksWithJsonArray([
  {
    type: "create_qubo_for_single_move",
    message0: "Finding the next Best move using Qubo: %1 %2 ",
    args0: [
      {
        type: "input_value",
        name: "PARAM",
      },
      {
        type: "input_statement",
        name: "BODY",
      },
    ],
    previousStatement: null,
    inputsInline: true,

    nextStatement: null,
    colour: 245,
    tooltip: "",
    helpUrl: "",
  },
]);
