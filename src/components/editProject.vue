<template>
  <div>
    <input-project-message />
    <select-block ref="selectblock"/>
    <provide-feedback />
    <el-button @click="submitInfo">确定</el-button>
  </div>
</template>
<script>
  import inputProjectMessage from '@/components/inputProjectMessage';
  import selectBlock from '@/components/selectBlock';
  import provideFeedback from '@/components/provideFeedback';
  let info;
  export default {
    name: 'edit-project',
    components: {
      inputProjectMessage,
      selectBlock,
      provideFeedback
    },
    created:function () {
    },
    methods:{
      submitInfo: function(){
        /**
         * submit information in this page to store
         * {@param} data JSON{name:value}
         */
        var data = {};
        data = Object.assign(data,this.$refs.selectblock._data);
        console.log(data);
        this.$store.commit('changeEditorState',data);
      }
    },
  };
</script>
<style scoped>

</style>
