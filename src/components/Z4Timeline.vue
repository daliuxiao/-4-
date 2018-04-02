<!--时间轴-->
<template>
  <yd-timeline>
    <yd-timeline-item id="y1" v-for="item in list" :key="item.id">
      <a href="javascript:;">{{item.at}}</a>
      <p>{{item.title}}</p>
    </yd-timeline-item>
  </yd-timeline>
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
      home.getTimeline(data=>{
        this.list = data;
      });
    }
  }
</script>
<style scoped>
  #y1{
    font-size: 3.7vw
  }
  #y1 a{
    margin-top: 10px;
  }
  #y1 p{
    margin-top: 20px;
    font-weight: 600
  }
</style>
