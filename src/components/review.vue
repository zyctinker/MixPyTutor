<template>
  <el-container>
    <el-header>
      <headbar></headbar>
    </el-header>
    <el-main>
      <el-row>
        <el-col :span="6"><div>请输入反馈标签，以分号分割</div></el-col>
        <el-col :span="12"><el-input
          type="textarea"
          autosize
          placeholder="请输入内容"
          v-model="textarea"></el-input>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center" class="row-with-space">
        <el-col :span="8"><div id="blocklyDiv3"  style="height: 480px; width: 600px;"></div></el-col>
      </el-row>
      <el-row class="row-with-space">
        <el-checkbox-group  v-model="selectTags">
          <el-checkbox-button
            v-for="(tag,index) in tags"
            :label="tag"
            :key="index">
            {{tag}}
          </el-checkbox-button>
        </el-checkbox-group>
      </el-row>
      <el-row class="row-with-space">
        <el-button @click="submitReview">提交评语</el-button>
      </el-row>
      <el-row class="row-with-space">
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1"
          :pager-count="1"
          :prev-text="上一个"
          :next-text="下一个"
        >
        </el-pagination>
      </el-row>
    </el-main>
  </el-container>
</template>
<script>
  import ElContainer from "element-ui/packages/container/src/main";
  import headbar from "./headbar";

  export default{
    components: {
      headbar,
      ElContainer},
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
          },
        submitReview: function(){
          this.$store.commit('changeReviewState',{selectTags:this.selectTags});
        }
      },
      mounted: function () {
        this.workspace = Blockly.inject('blocklyDiv3',
          {toolbox: '<xml></xml>'});
      },
      beforeUpdate: function () {

      }
  }
</script>
<style scoped>
  .row-with-space{
    margin-top:10px;
  }
</style>
