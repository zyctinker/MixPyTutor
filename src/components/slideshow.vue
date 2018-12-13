<template>
  <el-carousel height="400px" width="225px">
    <el-carousel-item v-for="(slide,index) in slides" :key="index">
      <img :src="slide.src" />
    </el-carousel-item>
  </el-carousel>
</template>

<script>
    export default {
        name: "slideshow",
        data(){
          return{
            slides:[{src:'\\static\\media\\image\\DSC03259.JPG'}]
          }
        }
    }
</script>

<style scoped>
  .img{
    height: auto;
    max-width: 100%;
  }
</style>
