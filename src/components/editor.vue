<template>
  <div>
    <div id="blocklyDiv" style="height: 480px; width: 600px;"></div>
    <div id="side_code_top" wrap="off" style="height:49%;">
      <div id="output_img"  wrap="off" readonly style="position: relative;height:100%;background:#f9f9f9;outline: none;overflow:auto"></div>
    </div>
    <div id="side_code_mid"></div>
    <div id="side_code_bottom" style="height:49%;position:relative">
      <div style="top: 0px; left: 0px; right: 0px; bottom: 0px; position: absolute;">
        <pre id="side_code" class="content"  readonly></pre>
      </div>
      <input src='media/ban.png' type='image' id="reset_output" onclick="clearOutput();"></input>
    </div>
    <el-button @click="runJs">运行</el-button>
    <el-button>停止</el-button>
  </div>
</template>

<script>
    export default {
        name: "editor",
        data: function(){
          return {
            workspace : null
          };
        },
        computed:{
            /*projectName: '',
            projectDescription: '',
            inputSet: '',
            outputSet: '',
            feedback: '',*/
            checkedBlocks:function () {
              return this.$store.getters['checkedBlocks'].slice();
            },
            checkCode:function () {
              return this.$store.getters['checkedCode'];
            },
        },
        mounted: function () {
          console.log(this.checkedBlocks)
          let toolbox = '<xml id="toolbox" style="display: none">';
          for (var each of this.checkedBlocks){
            toolbox += '<block type="'+ each +'"></block>';
          }
          toolbox += '</xml>';
          console.log(toolbox);
          this.workspace = Blockly.inject('blocklyDiv',
            {toolbox: toolbox});
        },
        updated: function () {
          console.log('updated!');
          this.workspace = null;
          this.workspace = Blockly.inject('blocklyDiv',
            {toolbox: toolbox});
          console.log(workspace);
          delete(doucument.getElementsByClassName('blocklyWidgetDiv')[0]);
          delete(doucument.getElementsByClassName('blocklyTooltipDiv')[0]);
        },
        methods: {
        /**
         * eval the code in Blockly workspace
         */
        runJs: function () {
            window.VMchecker.getCheckCode = this.checkcode;
            let code = Blockly.JavaScript.workspaceToCode(this.workspace);
            console.log(code);
            eval(code);
          }
        }
    }
</script>

<style scoped>

</style>
