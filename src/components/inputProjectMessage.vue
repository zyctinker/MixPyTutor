<template>
  <div>
    <el-input v-model="projectName" placeholder="请输入任务标题"></el-input>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入任务描述"
      v-model="projectDescription">
    </el-input>
  </div>
</template>
<script>
    export default {
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

</style>
