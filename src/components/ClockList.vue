<!--打卡历史详情-->
<template>
  <!--打卡历史-->
  <div>
  <div id="d3">&nbsp;&nbsp;&nbsp;打卡历史详情</div>
    <template v-for="item in list">
    <div>
      <span class="span1">{{item.month_name}}</span>
      <span class="span2">{{item.km}}</span>
      <span class="span3">{{item.time}}</span>
    </div>
      <ul>
        <li v-for="clock in item.clockList" @click="toView(clock.id)">
          <span class="span1">{{clock.clock_in_at}}</span>
          <span class="span2">{{clock.km}}</span>
          <span class="span3">{{clock.time}}</span>
          <hr style="color: #666666">
        </li>
      </ul>
    </template>
  </div>
</template>
<script>
  import clock_in from "../api/clock_in"
  export default {
    data() {
      return {
        list: [],
        clockList:[]
      }
    },
    mounted(){
      clock_in.getclockin(data=>{
        this.list = data;
      });
    },
    methods:{
      /**
       * 跳转详情
       */
      toView(id){
        console.log(id);
        this.$router.push('/detail/'+id);
      }
    }
  }
</script>
<style scoped>
  #d3{
    background-color:rgb(127,26,28);
    font-size: 4vw;
    text-align: left;
    color: white;
    line-height: 40px;
  }
  ul{
    background-color: white;
  }
  .span1{
    line-height: 40px;
    font-size: 15px;
    margin-left: 20px;
  }
  .span2{
    margin-left: 85px;
    font-size: 15px;
  }
  .span3 {
    margin-left: 100px;
    font-size: 15px;
  }
</style>
