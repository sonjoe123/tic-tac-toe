import * as Blockly from "blockly/core";

function createCustomVariable(workspace, variableName) {
  if (variableName) {
    const existing = workspace.getVariable(variableName);
    if (existing) {
      console.warn(`Variable "${variableName}" already exists.`);
      return null;
    }
    return workspace.createVariable(variableName);
  }
  return null;
}

Blockly.JavaScript['create_variable'] = function(block) {
  const variableName = block.getFieldValue('VAR_NAME');
  createCustomVariable(block.workspace, variableName);
  return '';
};

Blockly.JavaScript['get_variable'] = function(block) {
  const variableName = Blockly.JavaScript.nameDB_.getName(
    block.getFieldValue('VAR'),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  return [variableName, Blockly.JavaScript.ORDER_ATOMIC];
};

Blockly.JavaScript['set_variable'] = function(block) {
  const variableName = Blockly.JavaScript.nameDB_.getName(
    block.getFieldValue('VAR'),
    Blockly.VARIABLE_CATEGORY_NAME
  );
  const value = Blockly.JavaScript.valueToCode(block, 'VALUE', Blockly.JavaScript.ORDER_ASSIGNMENT) || '0';
  return variableName + ' = ' + value + ';\n';
};