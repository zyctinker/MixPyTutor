<template>
  <div>
    <el-input
      type="textarea"
      :rows="2"
      placeholder="请输入反馈,多条反馈之间以;结尾"
      v-model="feedback">
    </el-input>
    <div id="blocklyDiv" style="height: 480px; width: 800px;"></div>
  </div>

</template>

<script>
    export default {
        name: "provide-feedback",
        data(){
          return{
            feedback: ''
          }
        },
        computed:{
          procedures: function () {
            return null;
          },
          labels: function () {
            return this.feedback.split(';');
          }
        }
    }
</script>

<style scoped>

</style>
