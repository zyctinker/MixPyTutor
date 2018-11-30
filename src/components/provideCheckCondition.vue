<template>
  <div id="blocklyDiv2" style="height: 480px; width: 1000px;"></div>
</template>

<script>
    export default {
        name: "provide-check-condition",
      data() {
        return {
          workspace: null,
          checkCode: '',
        };
      },
      mounted: function () {
        const toolbox = '<xml id="toolbox" style="display: none">'+
          '<block type="controls_if"></block>\n' +
          '<block type="logic_compare"></block>\n'+
          '<block type="controls_whileUntil"></block>\n'+
          '<block type="controls_for">\n' +
          '        <value name="FROM">\n' +
          '          <shadow type="math_number">\n' +
          '            <field name="NUM">1</field>\n' +
          '          </shadow>\n' +
          '        </value>\n' +
          '        <value name="TO">\n' +
          '          <shadow type="math_number">\n' +
          '            <field name="NUM">10</field>\n' +
          '          </shadow>\n' +
          '        </value>\n' +
          '        <value name="BY">\n' +
          '          <shadow type="math_number">\n' +
          '            <field name="NUM">1</field>\n' +
          '          </shadow>\n' +
          '        </value>\n' +
          '</block>'+
          '<block type="math_number">\n' +
          '         <field name="NUM">123</field>\n' +
          '</block>\n'+
          ' <block type="math_modulo">\n' +
          '        <value name="DIVIDEND">\n' +
          '          <shadow type="math_number">\n' +
          '            <field name="NUM">64</field>\n' +
          '          </shadow>\n' +
          '        </value>\n' +
          '        <value name="DIVISOR">\n' +
          '          <shadow type="math_number">\n' +
          '            <field name="NUM">10</field>\n' +
          '          </shadow>\n' +
          '        </value>\n' +
          '      </block>'+
          '<block type="actuator_get_led_bright"></block>\n'+
          '<block type="check_assert"></block>\n'+
          '<block type="check_getTime"></block>\n'
          '</xml>';
        this.workspace = Blockly.inject('blocklyDiv2',
          {toolbox: toolbox});
      },
      methods:{
        getCodeFromWorkspace: function(){
          this.checkCode = Blockly.JavaScript.workspaceToCode(this.workspace);
        },

      },
    }
</script>

<style scoped>

</style>
