// src/blocks/defense_strategies.js
import * as Blockly from "blockly/core";

const defenseStrategiesBlock = {
  type: "defense_strategies",
  message0: "Defense strategies with reward %1",
  args0: [
    {
      type: "input_value",
      name: "REWARD",
      check: "Number",
    },
  ],
  output: "Number",
  colour: 230,
  tooltip: "Defines the reward for defense strategies.",
  helpUrl: "",
};

export default defenseStrategiesBlock;
