<template>
    <el-container>
      <el-header>
        <headbar></headbar>
      </el-header>
      <el-main>
        <h2>创建课程</h2>
        <el-row>
          <el-col :span="6">课程名称</el-col >
          <el-col :span="12">
            <el-input  v-model="courseName"></el-input>
          </el-col >
        </el-row>
        <el-row>
          <el-col :span="6">课程简介</el-col >
          <el-col :span="12">
            <el-input  v-model="courseIntro">></el-input>
          </el-col >
        </el-row>
        <el-row>
          <el-col :span="6">起止时间</el-col >
          <el-col :span="6">
            <el-date-picker
              class = 'date-picker-full-width'
              v-model="courseDate"
              type="daterange"
              unlink-panels
              range-separator="至"
              start-placeholder="开始日期"
              end-placeholder="结束日期">
            </el-date-picker>
          </el-col >
        </el-row>
        <el-row class="row-with-space">
          <el-button>确定</el-button>
        </el-row>
      </el-main>
    </el-container>
</template>

<script>
  import headbar from '@/components/headbar'
    export default {
        name: "creat-course",
        components:{ headbar },
        data(){
          return{
            courseName: '',
            courseIntro:'',
            startTime:'',
            endTime:'',
            courseDate:''
          }
        }
    }
</script>

<style scoped>
  .date-picker-full-width{
    width: 100%;
  }
  .row-with-space{
    margin-top: 40px;
  }
</style>
