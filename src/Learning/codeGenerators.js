/**
 * @license
 * Copyright 2023 Google LLC
 * SPDX-License-Identifier: Apache-2.0
 */
import * as Blockly from "blockly/core";

import { pythonGenerator, Order } from "blockly/python";

// Export all the code generators for our custom blocks,
// but don't register them with Blockly yet.
// This file has no side effects!
export const forBlock = Object.create(null);

forBlock["winning_combinations"] = function (block, generator) {
  const code = `WINNING_COMBINATIONS = [
    (0, 1, 2), (3, 4, 5), (6, 7, 8),  # Rows
    (0, 3, 6), (1, 4, 7), (2, 5, 8),  # Columns
    (0, 4, 8), (2, 4, 6)  # Diagonals
]`;
  return [code, Order.NONE];
};

forBlock["board"] = function (block, generator) {
  const code = "board";

  return [code, Order.NONE];
};

forBlock["board_not_empty"] = function (block, generator) {
  const code = " ' ' not in board";

  return [code, Order.NONE];
};

forBlock["check_game_status"] = function (block, generator) {
  const param = generator.valueToCode(block, "PARAM", Order.NONE) || "Fill in";
  const body = generator.statementToCode(block, "BODY");

  // Ensure the body is properly indented
  const indentedBody = generator.prefixLines(body, generator.INDENT);

  const code = `def check_game_status(${param}):\n ${body}`;
  return code;
};
forBlock["board_array"] = function (block, generator) {
  const index =
    generator.valueToCode(block, "INDEX", Order.ATOMIC) || "Fill in";
  const code = `board[${index}] `;
  return [code, Order.MEMBER];
};
forBlock["if_do"] = function (block, generator) {
  const param = generator.valueToCode(block, "PARAM", Order.NONE) || "True";
  const body = generator.statementToCode(block, "BODY");

  const code = `if ${param}:`;
  return code;
};

forBlock["compare"] = function (block, generator) {
  const left = generator.valueToCode(block, "LEFT", Order.RELATIONAL) || "0";
  const right = generator.valueToCode(block, "RIGHT", Order.RELATIONAL) || "0";
  const operator = block.getFieldValue("OP") || "==";

  const code = `${left} ${operator} ${right}`;
  return [code, Order.RELATIONAL];
};
forBlock["return"] = function (block, generator) {
  const param = generator.valueToCode(block, "PARAM", Order.NONE) || "True";

  const code = `return ${param} \n`;
  return code;
};
forBlock["create_qubo_for_single_move"] = function (block, generator) {
  const param = generator.valueToCode(block, "PARAM", Order.NONE) || "Fill in";
  const body = generator.statementToCode(block, "BODY");

  // Ensure the body is properly indented
  const indentedBody = generator.prefixLines(body, generator.INDENT);

  const code = `def create_qubo_for_single_move(${param}):\n${indentedBody}`;
  return code;
};

forBlock["array_of"] = function (block, generator) {
  // Retrieve the values from the block's fields
  const param1 = generator.valueToCode(block, "PARAM", Order.NONE) || "Fill in";
  const param2 =
    generator.valueToCode(block, "PARAM2", Order.NONE) || "Fill in";
  const mode = block.getFieldValue("MODE");

  // Generate the code based on the retrieved values
  const code = `create_array(${param1}, shape=${param2}, variable_type="${mode}")`;

  return [code, Order.NONE];
};

forBlock["define_array"] = function (block, generator) {
  // Get the array name (first parameter)
  const arrayName =
    generator.valueToCode(block, "PARAM", Order.ATOMIC) || "array";

  // Get the index (second parameter)
  const index = generator.valueToCode(block, "PARAM2", Order.ATOMIC) || "0";

  // Generate the array access code
  const code = `${arrayName}[${index}]`;

  // Return the code and its order of operations
  return [code, Order.MEMBER];
};
forBlock["range_of"] = function (block, generator) {
  // Get the array name (first parameter)

  // Get the index (second parameter)
  const index = generator.valueToCode(block, "INDEX", Order.ATOMIC) || "0";

  // Generate the array access code
  const code = `range of [${index}]`;

  // Return the code and its order of operations
  return [code, Order.MEMBER];
};
forBlock["function_definition"] = function (block, generator) {
  // Get function name
  const functionName = block.getFieldValue("FUNCTION_NAME");

  // Get parameters
  const params = [];
  for (let i = 0; block.getField("PARAM" + i); i++) {
    params.push(block.getFieldValue("PARAM" + i));
  }
  const paramString = params.join(", ");

  // Get function body
  const bodyCode = generator.statementToCode(block, "BODY");
  const indentedBody = generator.prefixLines(bodyCode, generator.INDENT);

  // Get return value
  let returnCode = "";
  if (block.getInput("RETURN")) {
    const returnValue = generator.valueToCode(block, "RETURN", Order.NONE) || "None";
    returnCode = generator.INDENT + `return ${returnValue}\n`;
  }

  // Construct the function definition
  const code = `def ${functionName}(${paramString}):\n${indentedBody}${returnCode}`;

  // In Python, functions are not normally wrapped, so we return the code and Order.NONE
  return code;
};

forBlock["full_code"] = function (block, generator) {
  const code = `
# Define winning combinations
WINNING_COMBINATIONS = [
    (0, 1, 2), (3, 4, 5), (6, 7, 8),  # Rows
    (0, 3, 6), (1, 4, 7), (2, 5, 8),  # Columns
    (0, 4, 8), (2, 4, 6)  # Diagonals
]


def create_qubo_for_single_move(board):
    from pyqubo import Array, Constraint
    from dwave.system import DWaveSampler, EmbeddingComposite

    # Define binary variables
    x = Array.create('x', shape=9, vartype='BINARY')

    # Hamiltonian terms
    H = 0

    # Penalties and rewards
    basic_move_reward = 1
    follow_winning_combo_reward = 3
    winning_move_reward = 14
    block_opponent_reward = 8

    # Encourage selecting an empty cell (basic move)
    for i in range(9):
        if board[i] == ' ':
            H -= basic_move_reward * x[i]

    # Penalize selecting multiple cells
    for i in range(9):
        if board[i] == ' ':
            for j in range(i + 1, 9):
                if board[j] == ' ':
                    H += 100 * x[i] * x[j]  # High penalty to ensure only one move is made

    # Attack strategies
    for combo in WINNING_COMBINATIONS:
        empty_cells = [i for i in combo if board[i] == ' ']
        o_cells = [i for i in combo if board[i] == 'O']
        
        # Level 1: Follow a winning combination
        if len(empty_cells) == 2 and len(o_cells) == 1:
            for cell in empty_cells:
                H -= follow_winning_combo_reward * x[cell]
        
        # Level 2: Go for the winning move
        elif len(empty_cells) == 1 and len(o_cells) == 2:
            H -= winning_move_reward * x[empty_cells[0]]

    # Defense strategy
    for combo in WINNING_COMBINATIONS:
        empty_cells = [i for i in combo if board[i] == ' ']
        x_cells = [i for i in combo if board[i] == 'X']
        
        # Block opponent's winning move
        if len(empty_cells) == 1 and len(x_cells) == 2:
            H -= block_opponent_reward * x[empty_cells[0]]

    model = H.compile()
    qubo, offset = model.to_qubo()

    return qubo
`;
  return code;
};
