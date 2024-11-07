// src/blocks/penalize_multiple_cells.js
import * as Blockly from "blockly/core";

const penalizeMultipleCellsBlock = {
  type: "penalize_multiple_cells",
  message0: "Penalize multiple cells with penalty %1",
  args0: [
    {
      type: "input_value",
      name: "PENALTY",
      check: "Number",
    },
  ],
  output: "Number",
  colour: 230,
  tooltip: "Sets the penalty for selecting multiple cells.",
  helpUrl: "",
};

export default penalizeMultipleCellsBlock;
