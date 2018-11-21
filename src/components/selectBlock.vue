<template>
  <div>
    <el-checkbox-group v-model="checkedBlocks" @change="handleCheckedBlocksChange">
      <el-checkbox v-for="block in blocks" :label="block" :key="block">{{block}}</el-checkbox>
    </el-checkbox-group>
  </div>
</template>

<script>
    const blockOptions = ['controls_for', 'controls_if', 'actuator_led_bright'];
    export default {
        name: "select-block",
        data() {
          return {
            checkAll: false,
            checkedBlocks: [],
            blocks: blockOptions,
            isIndeterminate: true
          };
        },

        methods: {
          handleCheckedBlocksChange: function (value) {
            let checkedCount = value.length;
            //this.checkAll = checkedCount === this.cities.length;
            //this.isIndeterminate = checkedCount > 0 && checkedCount < this.cities.length;
          },
        }
    }
</script>

<style scoped>

</style>
