/**
 * generators for check in editProject page
 * @author zyc
 * @date 2018-11-25
 */

Blockly.JavaScript.check_assert = function () {
  let pin = Blockly.JavaScript.valueToCode(this,'PIN', Blockly.JavaScript.ORDER_ATOMIC);
  let value = Blockly.JavaScript.valueToCode(this,'VALUE', Blockly.JavaScript.ORDER_ATOMIC);
  let code = 'VMchecker.assert('+ pin +',' + value + ');\n';
  return code;
};
