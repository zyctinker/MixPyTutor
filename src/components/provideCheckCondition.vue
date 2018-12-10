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
        let toolbox = '<xml id="toolbox" style="display: none">'+
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
          '<block type="check_getTime"></block>\n'+
          '<block type="variables_get"></block>\n'+
          '<block type="math_arithmetic"></block>\n'+
          '</xml>';
        this.workspace = Blockly.inject('blocklyDiv2',
          {toolbox: toolbox});
        var self = this;
        var blocklyArea = document.getElementById('app');
        var blocklyDiv = document.getElementById('blocklyDiv2');
        var onresize = function(e) {
          // Compute the absolute coordinates and dimensions of blocklyArea.
          var element = blocklyArea;
          var x = 0;
          var y = 0;
          do {
            x += element.offsetLeft;
            y += element.offsetTop;
            element = element.offsetParent;
          } while (element);
          // Position blocklyDiv over blocklyArea.
          blocklyDiv.style.left = x + 'px';
          blocklyDiv.style.top = y + 'px';
          blocklyDiv.style.width = blocklyArea.offsetWidth + 'px';
          blocklyDiv.style.height = blocklyArea.offsetHeight + 'px';
          Blockly.svgResize(self.workspace);
        };
        window.addEventListener('resize', onresize, false);
        onresize();
        Blockly.svgResize(this.workspace);
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
