<template>
  <el-container>
    <el-header>
      <headbar></headbar>
    </el-header>
    <el-main>
      <h2>创建任务</h2>
      <input-project-message ref="inputprojectmessage"></input-project-message>
      <select-block ref="selectblock"/>
      <provide-check-condition ref="providecheckcondition" />
      <el-row>
        <el-button @click="submitInfo">确定</el-button>
      </el-row>
      <el-dialog title="提示" :visible.sync="dialogVisible">
        <el-row><div>任务生成成功，连接为localhost:8080/#/editor?id=1</div></el-row>
        <el-row><el-button type="primary" @click="dialogVisible = false">确定</el-button></el-row>
      </el-dialog>
    </el-main>
  </el-container>
</template>
<script>
  import headbar from '@/components/headbar';
  import inputProjectMessage from '@/components/inputProjectMessage';
  import selectBlock from '@/components/selectBlock';
  import provideCheckCondition from '@/components/provideCheckCondition';
  let info;
  export default {
    name: 'edit-project',
    components: {
      inputProjectMessage,
      selectBlock,
      provideCheckCondition,
      headbar,
    },
    data(){
      return{
        dialogVisible:false,
      }
    },
    created:function () {
    },
    methods:{
      submitInfo: function(){
        /**
         * submit information in this page to store
         * {@param} data JSON{name:value}
         */
        //let provide-check-condition renew checkcode in their data
        this.$refs.providecheckcondition.getCodeFromWorkspace();
        var data = {};
        data = Object.assign(data,this.$refs.selectblock._data,this.$refs.providecheckcondition._data,this.$refs.inputprojectmessage._data);
        this.$store.commit('changeEditorState',data);
        this.dialogVisible = true;
      }
    },
  };
</script>
<style scoped>

</style>
