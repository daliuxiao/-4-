<!--轮播图-->
<template>
  <yd-slider autoplay="3000">
      <template v-for="item in list">
        <yd-slider-item>
        <a href="javascript:;">
          <img :src="item.src|src">
        </a>
        </yd-slider-item>
      </template>
  </yd-slider>
</template>
<script>
  import home from "../api/home"
  export default {
    data(){
      return{
        list:[]
      }
    },
    filters:{
      src(val){
        return "http://123.57.75.120:9002/uploads"+val;
      }
    },
    mounted(){
      home.getslider(data=>{
        this.list = data;
      });
    }
  }
</script>
<style scoped>

</style>
