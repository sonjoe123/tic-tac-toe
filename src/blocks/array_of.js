import * as Blockly from "blockly";

Blockly.common.defineBlocksWithJsonArray([
  {
    type: "array_of",
    message0: "Creating an Array with: %1, Shape =  %2, variable type: %3 ",
    args0: [
      {
        type: "input_value",
        name: "PARAM",
      },
      {
        type: "input_value",
        name: "PARAM2",
      },
      {
        type: "field_dropdown",
        name: "MODE",
        options: [
          ["Binary", "Binary"],
          ["Spin", "Spin"],
        ],
      },
    ],
    previousStatement: null,
    inputsInline: true,
    output: null,

    nextStatement: null,
    colour: 245,
    tooltip: "",
    helpUrl: "",
  },
]);
