<template>
  <el-container>
    <el-header>
      <headbar></headbar>
      <h2>{{ProjectName}}</h2>
    </el-header>
    <el-container>
      <el-aside width="300px">
        <div>
          <img height="240" width="300" src="\static\media\image\microbit.jpg" alt='123' class="image"/>
          <div class="row-with-space">
            <div id="report-result">{{this.result}}</div>
            <el-button @click="runJs">模拟运行</el-button>
            <el-button @click="runJs">上传运行</el-button>
            <el-button>停止</el-button>
          </div>
        </div>
      </el-aside>
      <el-main>
        <div>
          <div id="blocklyDiv" height="auto" width="auto"></div>
        </div>
        <el-dialog title="任务简介" :visible.sync="dialogVisible">
            <el-row><div>这是任务简介</div></el-row>
            <el-row> <iframe frameborder="0" src="https://v.qq.com/txp/iframe/player.html?vid=j0714ooncb2" allowFullScreen="true" height="320" width="480"></iframe></el-row>
            <el-row><el-button type="primary" @click="dialogVisible = false">确定</el-button></el-row>
        </el-dialog>
      </el-main>
    </el-container>
  </el-container>


</template>

<script>
  import headbar from '@/components/headbar.vue'
  import ElContainer from "../../node_modules/element-ui/packages/container/src/main";
  import ElHeader from "../../node_modules/element-ui/packages/header/src/main";
    export default {
      components: {
        ElHeader,
        ElContainer,
        headbar,
      },
      name: "editor",
        data() {
          return {
            workspace : null,
            result: '',
            ProjectName:'任务一',
            dialogVisible: false,
          }
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
          this.workspace = Blockly.inject('blocklyDiv',
            {toolbox: toolbox});
          var blocklyArea = document.getElementById('app');
          var blocklyDiv = document.getElementById('blocklyDiv');
          var self = this;
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
          this.dialogVisible = true;
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
  .row-with-space{
    margin-top: 40px;
  }
</style>
