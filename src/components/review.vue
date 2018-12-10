<template>
  <div>
    <div>请输入反馈标签，以分号分割</div>
    <el-input
      type="textarea"
      autosize
      placeholder="请输入内容"
      v-model="textarea">
    </el-input>
    <div id="blocklyDiv3"></div>
    <el-checkbox-group  v-model="selectTags">
      <el-checkbox-button
        v-for="(tag,index) in tags"
        :label="tag"
        :key="index">
        {{tag}}
      </el-checkbox-button>
    </el-checkbox-group>
  </div>
</template>
<script>
  export default{
    name:'review',
      data(){
          return{
              workspace: null,
              textarea: '',
              selectTags:[],
          }
      },
      computed:{
        tags: function () {
          return this.textarea.split('；')
        },
        xmlText:function () {
          return this.$store.getters['blocksInEditor'];
        }
      },
      methods:{
          handleClick: function (tag) {
            console.log(args);
          }
      },
      mounted: function () {
        this.workspace = Blockly.inject('blocklyDiv3',
          {toolbox: '<xml></xml>'});
        if(this.xmlText){
          let xmlDom = Blockly.Xml.textToDom(this.xmlText);
          Blockly.Xml.domToWorkspace(xmlDom,this.workspace);
        }
        var blocklyArea = document.getElementById('app');
        var blocklyDiv = document.getElementById('blocklyDiv3');
        let self = this;
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
      beforeUpdate: function () {

      }
  }
</script>
<style scoped>

</style>
