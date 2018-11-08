<template>
  <div>
    <el-checkbox-group v-model="checkedBlocks" @change="handleCheckedBlocksChange">
      <el-checkbox v-for="block in blocks" :label="block" :key="block">{{block}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
    const blockOptions = ['for', 'if', 'print', 'range'];
    export default {
        name: "select-block",
        data() {
          return {
            checkAll: false,
            checkedBlocks: ['for', 'range'],
            blocks: blockOptions,
            isIndeterminate: true
          };
        },

        methods: {
          handleCheckedBlocksChange: function (value) {
            let checkedCount = value.length;
            console.log(value);
            this.$bus.$emit('renew', {checkedBlocks: value});
            console.log(this.$bus._data);
            //this.checkAll = checkedCount === this.cities.length;
            //this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
          },
        }
    }
</script>

<style scoped>

</style>
