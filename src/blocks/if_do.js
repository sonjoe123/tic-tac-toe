import * as Blockly from "blockly";

Blockly.common.defineBlocksWithJsonArray([
  {
    type: "if_do",
    message0: "if %1 %2 ",
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

    nextStatement: null,
    colour: 245,
    tooltip: "",
    helpUrl: "",
  },
]);
