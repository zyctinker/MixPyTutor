<template>
    <div class="line">
      <el-menu
        :default-active="activeIndex2"
        class="headbar"
        mode="horizontal"
        @select="handleSelect"
        background-color="#545c64"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-menu-item index="1">首页</el-menu-item>
        <el-submenu index="2">
          <template slot="title">课程</template>
          <el-menu-item index="2-1"><a herf="./creatCourse">创建课程</a></el-menu-item>
          <el-menu-item index="2-2"><a herf="./myCourse">我的课程</a></el-menu-item>
        </el-submenu>
        <el-menu-item index="3">我的</el-menu-item>
        <el-menu-item class="right-align">
          <el-input
            placeholder="请输入课程名称"
            v-model="courseName">
            <i slot="suffix" class="el-input__icon el-icon-search" @click="searchCourse(courseName)"></i>
          </el-input>
        </el-menu-item>
      </el-menu>
    </div>
</template>

<script>
    import ElContainer from "element-ui/packages/container/src/main";

    export default {
      components: {ElContainer},
      name: "headbar",
      data(){
        return {
          courseName : '',
        }
      }
    }
</script>

<style scoped>
  .line{
    font-size: 24px;
  }
  .right-align{
    position: absolute;
    right: 0;
  }
</style>
