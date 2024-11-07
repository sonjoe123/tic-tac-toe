import * as Blockly from "blockly";
Blockly.common.defineBlocksWithJsonArray([
  {
    type: "define_array",
    message0: "Array %1 at position %2",
    args0: [
      {
        type: "input_value",
        name: "PARAM",
      },
      {
        type: "input_value",
        name: "PARAM2",
      },
    ],
    output: null,
    inputsInline: true,
    colour: 245,
    tooltip: "Access an array element",
    helpUrl: "",
  },
]);
