// src/blocks/attack_strategies.js
import * as Blockly from "blockly/core";

const attackStrategiesBlock = {
  type: "attack_strategies",
  message0: "Attack strategies with reward %1",
  args0: [
    {
      type: "input_value",
      name: "REWARD",
      check: "Number",
    },
  ],
  output: "Number",
  colour: 230,
  tooltip: "Defines the reward for attack strategies.",
  helpUrl: "",
};

export default attackStrategiesBlock;
