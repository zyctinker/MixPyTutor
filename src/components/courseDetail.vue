<template>
  <el-container>
    <el-header>
      <headbar />
    </el-header>
    <el-container>
      <el-aside>
        <el-row class="tac">
          <el-col :span="24">
            <el-menu
              default-active="1"
              class="el-menu-vertical"
              @open="handleOpen"
              @close="handleClose">
              <el-submenu index="1">
                <template slot="title">
                  <span>课程管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="1-1">编辑任务</el-menu-item>
                  <el-menu-item index="1-2">批改作业</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
              <el-submenu index="1">
                <template slot="title">
                  <span>学生管理</span>
                </template>
                <el-menu-item-group>
                  <el-menu-item index="2-1">管理学生</el-menu-item>
                  <el-menu-item index="2-2">学生分组</el-menu-item>
                  <el-menu-item index="2-2">权限管理</el-menu-item>
                </el-menu-item-group>
              </el-submenu>
            </el-menu>
          </el-col>
        </el-row>
      </el-aside>
      <el-main>
        <div>MixGo入门</div>
        <div class="displayCard">
          <el-row :gutter="40">
            <el-col :span="6" v-for="(course,index) in courses" :key="index">
              <el-card>
                <router-link to="/editProject">
                  <img src="\static\media\image\Logo_Mixly.png" class="image">
                  <div style="padding: 14px;">
                    <span>{{course}}</span>
                    <div class="bottom clearfix">
                      <span>浏览任务</span><span>&nbsp;&nbsp;</span><span>批改作业</span>
                    </div>
                  </div>
                </router-link>
              </el-card>
            </el-col>
            <el-col :span="6">
              <el-card>
                <router-link to="/editProject">
                  <i class="el-icon-edit"></i>
                  <div style="padding: 14px;">
                    <span>新建课程</span>
                    <div class="bottom clearfix">
                    </div>
                  </div>
                </router-link>
              </el-card>
            </el-col>
          </el-row>
        </div>
      </el-main>
    </el-container>
  </el-container>

</template>

<script>
  import headbar from '@/components/headbar';
  import ElContainer from "element-ui/packages/container/src/main";
  import ElAside from "element-ui/packages/aside/src/main";
  export default {
  components: {
    ElAside,
    ElContainer,
    headbar,
  },
  name: 'HelloWorld',
  data () {
    return {
      courses:['Mixgo介绍','点亮板载灯','播放声音']
    }
  },
  methods:{
    handleOpen: function () {

    },
    handleClose:function () {

    },
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .time {
    font-size: 13px;
    color: #999;
  }

  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
    display: table;
    content: "";
  }

  .clearfix:after {
    clear: both
  }
</style>
