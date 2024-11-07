import * as Blockly from "blockly";

Blockly.common.defineBlocksWithJsonArray([
  {
    type: "compare",
    message0: "%1 %2 %3",
    args0: [
      {
        type: "input_value",
        name: "LEFT",
      },
      {
        type: "field_dropdown",
        name: "OP",
        options: [
          ["==", "=="],
          ["!=", "!="],
          [">", ">"],
          [">=", ">="],
          ["<", "<"],
          ["<=", "<="],
        ],
      },
      {
        type: "input_value",
        name: "RIGHT",
      },
    ],
    inputsInline: true,
    output: "Boolean",
    colour: 230,
    tooltip: "",
    helpUrl: "",
  },
]);
