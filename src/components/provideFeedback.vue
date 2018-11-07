<template>
  <div>
    <el-input
    type="textarea"
    :rows="2"
    placeholder="请输入测试集"
    v-model="inputSet">
  </el-input>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入测试结果"
      v-model="outputSet">
    </el-input>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入反馈"
      v-model="feedback">
    </el-input>
  </div>

</template>

<script>
    export default {
        name: "provide-feedback",
        data(){
          return{
            inputSet: '',
            outputSet: '',
            feedback: ''
          }
        }
    }
</script>

<style scoped>

</style>
