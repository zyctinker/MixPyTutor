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
        data(){
          return workspace;
        },
        computed:{
            /*projectName: '',
            projectDescription: '',
            inputSet: '',
            outputSet: '',
            feedback: '',*/
            checkedBlocks:function () {
              return this.$store.getters['checkedBlocks'];
            },
        },
        mounted: function () {
          let pyengine;
          let py2block_editor;
          let toolbox = '<xml id="toolbox" style="display: none">';
          for (var each of this.checkedBlocks){
            toolbox += '<block type="'+ each +'"></block>';
          }
          toolbox += '</xml>';
          console.log(toolbox);
          let workspace = Blockly.inject('blocklyDiv',
            {toolbox: toolbox});
        },
        methods: {
          runJs: function () {
            var workspace = null;
          }
        }
    }
</script>

<style scoped>

</style>
