<template>
    <el-container>
      <el-header>
        <hearbar />
      </el-header>
      <el-container>
        <el-aside width="200px">
          <el-menu
            default-active="1-4-1"
            class="el-menu-vertical"
            @open="handleOpen"
            @close="handleClose">
            <el-submenu index="1">
              <template slot="title">
                <span>任务</span>
              </template>
              <el-submenu index="1-4">
                <el-menu-item index="1-4-1">查看任务</el-menu-item>
                <el-menu-item index="1-4-1">添加任务</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-menu-item index="2">
              <template slot="title">
                <span>成员</span>
              </template>
              <el-submenu index="2-1">
                <el-menu-item index="2-1-1">查看成员</el-menu-item>
                <el-menu-item index="2-1-2">添加成员</el-menu-item>
                <el-menu-item index="2-1-3">管理权限</el-menu-item>

              </el-submenu>
            </el-menu-item>
            <el-menu-item index="3" disabled>
              <span slot="title">作业</span>
            </el-menu-item>
          </el-menu>
        </el-aside>
        <el-container>
          <el-main></el-main>
        </el-container>
      </el-container>
    </el-container>
</template>

<script>
    import headbar from '@/components/headbar';
    export default {
        name: "edit-course",
        components: {hearbar},
        methods: {
          handleOpen: function () {

          },
          handleClose: function () {

          },
        }

    }
</script>

<style scoped>

</style>
