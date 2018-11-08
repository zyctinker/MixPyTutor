<template>
  <div>
    <input-project-message />
    <select-block />
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

    methods:{
      submitInfo: ()=>{
        /**
         * emit renewed information to bus
         * {@param} data JSON{name:value}
         */
        this.$bus.$emit('renew',data);
      }
    }
  };
</script>
<style scoped>

</style>
