<template>
  <div id="d1" class="yd-flexview">
    <z4-header></z4-header>
    <div class="c4-p3-form-box1">
      <img src="/static/img/icon02.jpg">
      <span>{{clock.year}}<br>{{clock.date}}</span>
    </div>
    <yd-grids-group :rows="3" style="margin-top: -3px;border-top: 0.5px solid lightslategray">
    <yd-grids-item>
      <span slot="text">{{clock.km}}km<span>
        <br>
        公里数</span></span>
    </yd-grids-item>
      <yd-grids-item>
        <span slot="text">{{clock.time}}<span>
          <br>总用时</span></span>
      </yd-grids-item>
      <yd-grids-item>
        <span slot="text">{{clock.pace}}<span>
          <br>平均配速</span></span>
      </yd-grids-item>
  </yd-grids-group>
    <yd-navbar style="height: 250px;">
      <router-link to="#" slot="left">
        <yd-navbar-back-icon></yd-navbar-back-icon>
      </router-link>
      <img slot="center" :src="clock.imgs[0]|img" class="i1">
      <router-link to="#" slot="right">
        <yd-navbar-next-icon></yd-navbar-next-icon>
      </router-link>
    </yd-navbar>
    <!--打卡历史详情-->
    <clock-list></clock-list>
  </div>
</template>

<script type="text/babel">
  import Z4Header from "../components/Z4Header"
  import ClockList from "../components/ClockList"
  import clock_in from "../api/clock_in"
  export default {
    data(){
      return{
        clock:{
          imgs:[
            '',
          ]
        }
      }
    },
    components:{
      Z4Header,ClockList
    },
    filters:{
      img(val){
        return "http://123.57.75.120:9002/uploads"+val;
      }
    },
    mounted(){
      let id=this.$route.params.id;
      clock_in.get(id,data=>{
        if(data.status==true){
          this.clock = data.result;
        }
        console.log(this.clock)
      });
    },
    watch:{
      '$route'(){
        this.$router.go(0);
      }
    }
  }
</script>
<style scoped>
  #d1{
    background-color: #eef1f2;
  }
  #d2 div{
    width: 100px;
    height: 100px;
    border: 1px solid;
    margin: auto;
  }
  .i1{
    width: 320px;
    height: 200px;
    margin-top: 200px
  }
  .c4-p3-form-box1 {
    color: #841d20;
    font-size: 20px;
    font-weight: bold;
    width: 100%;
    text-align: center;
    background-color: white;
  }

  .c4-p3-form-box1 img {
    display: inline-block;
    width: 25%;
    margin-right: 5%;
    margin-left: 5%;
    vertical-align: middle;
  }

  .c4-p3-form-box1 span {
    text-align: left;
    display: inline-block;
    width: 50%;
    font-size: 18px;
    vertical-align: middle
  }
</style>
