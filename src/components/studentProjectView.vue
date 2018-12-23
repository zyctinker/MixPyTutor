<template>
    <el-container>
      <el-header>
        <headbar></headbar>
      </el-header>
      <el-container>
        <el-aside>
          <el-menu
            default-active="1-2"
            class="el-menu-vertical"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <span>任务列表</span>
              </template>
              <el-menu-item-group>
                <el-menu-item index="1-1">点亮LED</el-menu-item>
                <el-menu-item index="1-2">呼吸灯</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
          </el-menu>
        </el-aside>
        <el-main>
          <el-table
            :data="tableData"
            stripe
            :show-header="false"
            style="width: 100%">
            <el-table-column
              prop="item"
              label="事项"
              width="180">
            </el-table-column>
            <el-table-column
              prop="value"
              label="值"
              width="960">
              <template slot-scope="scope">
                <span @click="handleLastCellClick(scope.row)">{{scope.row.value}}</span>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>

    </el-container>
</template>

<script>
    import ElContainer from "element-ui/packages/container/src/main";
    import headbar from "./headbar";

    export default {
      components: {
        headbar,
        ElContainer},
      name: "student-project-view",
      computed:{
        tableData: function () {
          return [{
            "item":'任务名称',
            "value":'呼吸灯'
          },{
            "item":'提交状态',
            "value":'已提交'
          },{
              "item":'提交时间',
              "value":'2018-12-27 9:00:00'
          },{
            "item":'结果',
            "value":'错误'
          },
            {
              "item":'反馈',
              "value":'您有一条新反馈，点击查看'
            }
          ]
        }
      },
      methods:{
        handleLastCellClick: function (row) {
          console.log(row);
          if(row.item == '反馈'){
            this.$router.push('/feedback-editor');
          }
        }
      }
    }
</script>

<style scoped>

</style>
