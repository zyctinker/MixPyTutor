<template>
  <div>
      <div id="provided-blocks">
        <div>提供的块</div>
        <el-checkbox-group v-model="checkedBlocks" @change="handleCheckedBlocksChange">
          <el-checkbox v-for="block in blocks" :label="block" :key="block">{{block}}</el-checkbox>
        </el-checkbox-group>
      </div>
    <div id="d-blocks">
      <div>必须的块</div>
      <el-checkbox-group v-model="requiredBlocks" @change="handleCheckedBlocksChange">
        <el-checkbox v-for="block in checkedBlocks" :label="block" :key="block">{{block}}</el-checkbox>
      </el-checkbox-group>
    </div>
  </div>
</template>

<script>
    const blockOptions = ['controls_for', 'controls_if', 'actuator_led_bright','math_number','controls_delay','variables_get'];
    export default {
        name: "select-block",
        data() {
          return {
            checkAll: false,
            checkedBlocks: [],
            requiredBlocks: [],
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
