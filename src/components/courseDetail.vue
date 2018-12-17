<template>
  <el-container>
    <el-header>
      <hearbar />
    </el-header>

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
                <span>开课时间</span>
                <time class="time">2018-09-01</time>
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

</template>

<script>
  import hearbar from '@/components/headbar';
  import slideshow from '@/components/slideshow';
  export default {
  components: {hearbar,slideshow},
  name: 'HelloWorld',
  data () {
    return {
      courses:['Mixgo介绍','点亮板载灯','播放声音']
    }
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
