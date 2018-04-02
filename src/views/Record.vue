<template>
  <div class="yd-flexview">
    <yd-infinitescroll :callback="loadList" ref="infinitescrollDemo">
      <yd-list theme="1" slot="list">
    <!--头部-->
    <z4-header></z4-header>
    <div id="d1">
      <span id="d1-1">今日打卡记录</span>
      <span id="ss1">
        <input id="ip1" type="checkbox" v-model="is_striker" @change="setStriker">
        <span>只显示冲锋队</span>
      </span>
    </div>
    <div id="d2">
      <span id="s1">姓名</span>
      <span id="s2">昵称</span>
      <span id="s3">打卡时间</span>
    </div>
    <yd-cell-group>
      <yd-cell-item v-for="item in list">
        <span slot="left" id="s4">
          <img src="/static/img/xtb.jpg" alt="" v-show="item.is_striker==1">
          <b>{{item.name}}</b>
          <span id="s5" v-show="item.is_striker==1">冲锋队成员</span>
          <span id="s6">{{item.nickname}}</span>
        </span>
        <span slot="right">{{item.clock_in_at}}</span>
      </yd-cell-item>
    </yd-cell-group>
      </yd-list>
    </yd-infinitescroll>
  </div>
</template>
<script>
  import Z4Header from "../components/Z4Header"
  import clock_in from '../api/clock_in'
  export default {
    data() {
      return {
        list:[],
        is_striker:0,
        page: 1,
      }
    },
    components:{
      Z4Header
    },
    mounted(){
      this.get();
    },
    methods:{
      /**
       * 数据获取
       */
      get()
      {
        let p = {page: this.page, is_striker: this.is_striker == true ? 1 : 0};
        clock_in.gettoday(p, data => {
          if (data.length == 0) {
            this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.loadedDone');
          } else {
            for (let i = 0; i < data.length; i++) {
              this.list.push(data[i]);
            }
            this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.finishLoad');
          }
        });
      },
      /**
       * 滚动加载
       */
      loadList() {
        this.page += 1;
        this.get();
      },
      /**
       * 设置冲锋队
       */
      setStriker() {
        this.list = [];
        this.page = 1;
        this.$refs.infinitescrollDemo.$emit('ydui.infinitescroll.reInit');
        this.get();
      },
    }
  }
</script>
<style scoped>
  #d1{
    width: 100%;
    height: 35px;
    background-color: #912f2f;
    line-height: 35px;
  }
  #d1{
    font-size: 18px;
    background-image: url("../../static/img/ccbg.png");
    background-repeat: no-repeat;
    color: white;
    padding-left: 20px;
  }
  #d2{
    background-color: #bd3f38;
    clear: both;
    color: white;
    line-height: 35px;
    margin-top: 10px;
  }
  #s1{
    font-size: 5vw;
    float: left;
    margin-left: 40px
  }
  #s2{
    font-size: 5vw;
    margin-left: 110px
  }
  #s3{
    font-size: 5vw;
    float: right;
    margin-right: 20px
  }
  #s4{
    font-size:16px;
    margin-left: -10px
  }
  #s4 img{
    position: absolute;
  }
  #s4 b{
    margin-left: 30px;
  }
  #s5{
    font-size: 11px;
    background-color: chocolate;
    color: white;
    border-radius: 10px;
  }
  #s6{
    position: absolute;
    left: 200px;
   }
  #ss1{
    text-align: right;
    margin-left: 120px;
  }
  #ip1{
    width: 20px;
    height: 20px;
    margin-top: -3px;
  }
</style>
