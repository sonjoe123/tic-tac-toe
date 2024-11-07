// src/blocks/basic_move_reward.js
import * as Blockly from "blockly/core";

const basicMoveRewardBlock = {
  type: "basic_move_reward",
  message0: "Basic move reward %1",
  args0: [
    {
      type: "input_value",
      name: "VALUE",
      check: "Number",
    },
  ],
  output: "Number",
  colour: 230,
  tooltip: "Sets the reward for making a basic move.",
  helpUrl: "",
};

export default basicMoveRewardBlock;
