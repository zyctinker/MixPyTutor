<template>
  <div>
    <el-row class="row-with-space">
      <el-col :span="2">课程名称</el-col >
      <el-col :span="12">
        <el-input  v-model="projectName"></el-input>
      </el-col>
    </el-row>
    <el-row class="row-with-space">
      <el-col :span="2">任务描述</el-col>
      <el-col :span="12">
        <el-input
          type="textarea"
          placeholder="请输入任务描述"
          v-model="projectDescription">
        </el-input>
      </el-col>
    </el-row>
    <el-row  type="flex" justify="start" class="row-with-space">
      <el-col :span="2">
        <span>上传课件</span>
      </el-col>
      <el-col :span="6">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将pdf课件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传pdf文件，且不超过500kb</div>
        </el-upload>
      </el-col>
    </el-row>
    <el-row type="flex" justify="start" class="row-with-space">
      <el-col :span="2">
        <span>上传视频</span>
      </el-col>
      <el-col :span="6">
        <el-upload
          class="upload-demo"
          drag
          action="https://jsonplaceholder.typicode.com/posts/"
          multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
          <div class="el-upload__tip" slot="tip">只能上传视频文件，且不超过50mb</div>
        </el-upload>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  import ElContainer from "../../node_modules/element-ui/packages/container/src/main";
  import ElRow from "element-ui/packages/row/src/row";
    export default {
      components: {
        ElRow,
        ElContainer},
      name: "input-project-message",
        data(){
          return{
            projectName: '',
            projectDescription: ''
          }
        }
    }
</script>

<style scoped>
  el-input{
    width:100%;
  }
  .row-with-space{
    margin-top: 10px;
  }
</style>
