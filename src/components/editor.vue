<template>
  <div>
    <div id="blocklyDiv" style="height: 480px; width: 600px;"></div>
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
        beforeCreate: function () {
          //通过bus接收editProject传递的信息
          this.$bus.$on('renew',(data)=>{
            for (var each in data){
              console.log(each);
              //对数组和对象进行深拷贝
              if(Array.isArray(each))
                this[each] = data[each].slice(0);
              else if(each instanceof Object)
                this[each] = Object.assign(data[each]);
              else
                this[each] = data[each];
              console.log(this[each]);
            }
          });
        },
        mounted: function () {
          let toolbox = '<xml id="toolbox" style="display: none">';
          console.log(this);
          for (var each of this._data['checkedBlocks']){
            toolbox += '<block type="'+ each+'"></block>';
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
