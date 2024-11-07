import * as Blockly from "blockly";

Blockly.common.defineBlocksWithJsonArray([
  {
    type: "board_array",
    message0: "board[ %1 ]",
    args0: [
      {
        type: "input_value",
        name: "INDEX",
      },
    ],
    inputsInline: true,
    output: null,
    colour: 245,
    tooltip: "",
    helpUrl: "",
  },
]);
