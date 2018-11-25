/**
 * blocks for check in editProject page
 * @author zyc
 * @date 2018-11-25
 */
'use strict';

goog.provide('Blockly.Blocks.actuator');
goog.require('Blockly.Blocks');

Blockly.Blocks.check.HUE = 100

Blockly.Blocks.check_assert = {
  init: function() {
    this.setColour(Blockly.Blocks.check.HUE);
    this.appendValueInput("PIN", Number)
      .appendField(Blockly.MIXLY_CHECKASSERT)
      .appendField(Blockly.MIXLY_PIN + " #")
      .setCheck(Number);
    this.appendValueInput("VALUE", Number)
      .setCheck(Number)
      .setAlign(Blockly.ALIGN_RIGHT)
      .appendField(Blockly.MIXLY_VALUE);
    this.setPreviousStatement(true, null);
    this.setNextStatement(true, null);
    this.setInputsInline(true);
    this.setTooltip(Blockly.MIXLY_TOOLTIP_BLOCKGROUP_SERVO_MOVE);
  }
};
