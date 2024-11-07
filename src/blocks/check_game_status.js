import * as Blockly from "blockly";

Blockly.common.defineBlocksWithJsonArray([
  {
    type: "check_game_status",
    message0: "Check Game status: %1 %2 ",
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
