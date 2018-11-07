<template>
  <div>
    <input-project-message />
    <select-block />
    <provide-feedback />
    <el-button>确定</el-button>
  </div>
</template>
<script>
  import inputProjectMessage from '@/components/inputProjectMessage';
  import selectBlock from '@/components/selectBlock';
  import provideFeedback from '@/components/provideFeedback';
  export default {
    name: 'edit-project',
    components: {
      inputProjectMessage,
      selectBlock,
      provideFeedback
    }
  };
</script>
<style scoped>

</style>
