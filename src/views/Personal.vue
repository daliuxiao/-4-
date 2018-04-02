<template>
  <div class="yd-flexview">
    <!--头部-->
    <z4-header></z4-header>
    <div id="div1">
      <a href="/#/editor">
        <yd-icon name="compose" id="y1">
        </yd-icon>
      </a>
      <div style="clear: both;">
        <img :src="list.avatar|src" alt="">
        <h1>{{list.nickname}}</h1>
        <span>{{list.introduction}}</span>
        <div id="div1-1" v-show="list.is_striker=='是'">冲锋队队员</div>
      </div>
    </div>
    <div id="div2">
      <div class="d1">
        姓名：{{list.name}}
      </div>
      <div class="d1">
        电话：{{list.phone}}
      </div>
      <div class="d1">
        昵称：{{list.nickname}}
      </div>
      <div class="d1">
        月目标量（公里数）：{{list.km}}
      </div>
      <div class="d1">
        心情语录：
        <span style="font-size: 11px;">{{list.introduction}}</span>
      </div>
      <div class="d1">
        是否冲锋队队员：{{list.is_striker}}
      </div>
    </div>
  </div>
</template>
<script>
  import Z4Header from "../components/Z4Header"
  import home from "../api/home"
  export default {
    data(){
      return{
        list:{
          avatar:''
        },
      }
    },
    components: {
      Z4Header
    },
    filters:{
      src(val){
        return "http://123.57.75.120:9002/uploads"+val;
      }
    },
    mounted(){
      home.getInfo(data=>{
        this.list = data;
        if(this.list.is_striker==1){
          this.list.is_striker="是"
        }else {
          this.list.is_striker="否"
        }
      });
    }
  }
</script>
<style scoped>
  #div1{
    width: 100%;
    height: 250px;
    background-image: url("../../static/img/percenbg.jpg");
    text-align: center;
    font-size: 15px;
    color: white;
    line-height: 30px;
  }
  #div1 img{
    width: 100px;
    height: 100px;
    border-radius: 100px;
    border:2px solid white;
  }
  #div1-1{
    width: 100px;
    height: 20px;
    background-color: chocolate;
    border-radius: 20px;
    margin: auto;
    line-height: 20px;
  }
  .d1{
    width: 100%;
    height: 60px;
    background-color: white;
    border-bottom: 5px solid rgb(238,238,238);
    font-size: 20px;
    line-height: 60px;
    padding-left: 20px;
  }
  #y1{
    float:right;
    margin-right: 20px;
    margin-top: 10px
  }
</style>
