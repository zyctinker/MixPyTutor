/**
 * blocks for check in editProject page
 * @author zyc
 * @date 2018-11-25
 */
'use strict';

goog.provide('Blockly.Blocks.check');
goog.require('Blockly.Blocks');

Blockly.Blocks.check.HUE = 100;

Blockly.Blocks.check_assert = {
  init: function() {
    this.setColour(Blockly.Blocks.check.HUE);
    this.appendValueInput("PIN", Number)
      .appendField(Blockly.MIXLY_CHECKASSERT);
    this.appendDummyInput()
      .appendField(Blockly.MIXLY_ISEQUAL);
    this.appendValueInput("VALUE", Number);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip();
  }
};
Blockly.Blocks.check_getTime = {
  init: function() {
    this.setColour(Blockly.Blocks.check.HUE);
    this.appendDummyInput()
    .appendField(Blockly.MIXLY_RUNTIME);
    this.setOutput(true);
    this.setInputsInline(true);
  }
};
