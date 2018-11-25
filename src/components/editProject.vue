<template>
  <div>
    <input-project-message />
    <select-block ref="selectblock"/>
    <provide-check-condition ref="providecheckcondition" />
    <provide-feedback />
    <el-button @click="submitInfo">确定</el-button>
  </div>
</template>
<script>
  import inputProjectMessage from '@/components/inputProjectMessage';
  import selectBlock from '@/components/selectBlock';
  import provideFeedback from '@/components/provideFeedback';
  import provideCheckCondition from '@/components/provideCheckCondition';
  let info;
  export default {
    name: 'edit-project',
    components: {
      inputProjectMessage,
      selectBlock,
      provideFeedback,
      provideCheckCondition
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
        this.$refs.providecheckcondition.getCodefromWorkspace();
        var data = {};
        data = Object.assign(data,this.$refs.selectblock._data,this.$refs.providecheckcondition._data);
        this.$store.commit('changeEditorState',data);
      }
    },
  };
</script>
<style scoped>

</style>
