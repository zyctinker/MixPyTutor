<template>
  <div>
    <div id="blocklyDiv" style="height: 480px; width: 600px;"></div>
  </div>
</template>

<script>
    const toolbox = `<xml id="toolbox" style="display: none">
      <block type="controls_if"></block>
      <block type="controls_repeat_ext"></block>
      <block type="logic_compare"></block>
      <block type="math_number"></block>
      <block type="math_arithmetic"></block>
      <block type="text"></block>
      <block type="text_print"></block>
      </xml>`;
    export default {
        name: "editor",
        data:()=>{
          return{
            projectName: '',
            projectDescription: '',
            inputSet: '',
            outputSet: '',
            feedback: '',
            checkedBlocks:[],
          }
        },
        mounted: function () {
          let workspace = Blockly.inject('blocklyDiv',
            {toolbox: toolbox});
          this.$bus.$on('renew',(data)=>{
            for (var each in data){
              this[each] = data[each];
            }
            console.log(this._data);
          });
        },
        methods: {

        }
    }
</script>

<style scoped>

</style>
