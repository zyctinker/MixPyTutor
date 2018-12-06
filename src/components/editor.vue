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
    <div id="report-result">{{this.result}}</div>
    <el-button @click="runJs">运行</el-button>
    <el-button>停止</el-button>
  </div>
</template>

<script>
    export default {
        name: "editor",
        data: function(){
          return {
            workspace : null,
            result: '',
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
              return this.$store.getters['checkCode'];
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
        methods: {
        /**
         * eval the code in Blockly workspace
         */
        runJs: function () {
            //get code from Blockly workspace
            let code = Blockly.JavaScript.workspaceToCode(this.workspace);
            //eval code
            eval(code+this.checkCode);
            //report result
            this.result = VMchecker.flag?'正确':'错误';
            let xmlDom = Blockly.Xml.workspaceToDom(this.workspace);
            let xmlText = Blockly.Xml.domToPrettyText(xmlDom)
            let commitData = {
              blocksInEditor: xmlText,
            }
            this.$store.commit('changeEditorState',commitData);
          }
        }
    }
</script>

<style scoped>

</style>
