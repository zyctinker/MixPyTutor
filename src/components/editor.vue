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
  </div>
</template>

<script>
    /*const toolbox = `<xml id="toolbox" style="display: none">
     <block type="controls_if"></block>
     <block type="controls_repeat_ext"></block>
     <block type="logic_compare"></block>
     <block type="math_number"></block>
     <block type="math_arithmetic"></block>
     <block type="text"></block>
     <block type="text_print"></block>
     </xml>`;*/
    export default {
        name: "editor",
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
          var toolbox = '<xml id="toolbox" style="display: none">';
          for (var each of this.checkedBlocks){
            toolbox += '<block type="'+ each +'"></block>';
          }
          toolbox += '</xml>';
          console.log(toolbox);
          let workspace = Blockly.inject('blocklyDiv',
            {toolbox: toolbox});
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
