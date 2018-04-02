
<template>
  <div class="yd-flexview">
    <z4-header></z4-header>
    <div id="box">
      <div class="tab-tit1">
        <a href="javascript:;" @click="week" :class="{'cur':msg===0}">周</a>
        <a href="javascript:;" @click="month" :class="{'cur':msg===1}" id="a1">月</a>
        <yd-checkbox v-model="checkbox1" id="c1">
          <span style="color: white">冲锋队成员</span>
        </yd-checkbox>
      </div>
      <div class="tab-con1">
        <div>
          <div class="tab-tit">
            <a href="javascript:;" @click="setType(0)" :class="{'cur':msg1===0}">
              <i class="icon iconfont icon-qiandao-kaoqindaqia"></i>
              <div>总公里数</div>
            </a>
            <a href="javascript:;" @click="setType(1)" :class="{'cur':msg1===1}">
              <i class="icon iconfont icon-qiandao-kaoqindaqia"></i>
              <div>打卡次数</div>
            </a>
            <a href="javascript:;" @click="setType(2)" :class="{'cur':msg1===2}">
              <i class="icon iconfont icon-qiandao-kaoqindaqia"></i>
              <div>平均配速</div>
            </a>
          </div>
          <div class="tab-con">
            <div>
              <div class="diva">
                <span class="s1">统计信息</span>
                <span class="s2" v-show="msg==0">总公里数/周</span>
                <span class="s2" v-show="msg==1">总公里数/月</span>
              </div>
              <!-- 报表-->
              <div id="container" style="height: 300px;width: 100%;padding-left: 20px">

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script type="text/babel">
  import Z4Header from "../components/Z4Header"
  import * as echarts from "echarts"
  import stat from "../api/stat"
  export default {
    components: {
      Z4Header
    },
    data() {
      return {
        msg: 0,
        msg1: 0,
        checkbox1: "true",
        result: {},
        dateType: 1,
        xAxisData: [],
        seriesData: [],
        danwei: 'km',
        axisLabel: {}
      }
    },
    methods: {
      //创建报表
      createChart() {
        let dom = document.getElementById("container");
        let myChart = echarts.init(dom);
        let option = {
          xAxis: {
            type: 'category',
            data: this.xAxisData,
          },
          yAxis: {
            type: 'value',
            axisLabel: {
              formatter: '{value} ' + this.danwei
            }
          },
          series: [{
            data: this.seriesData,
            type: 'line'
          }]
        };
        ;
        if (option && typeof option === "object") {
          myChart.setOption(option, true);

        }
      },
      /**
       * 获取数据
       */
      get() {
        if (this.dateType == 1) {
          stat.getWeek(data => {
            if (data.status == true) {
              this.result = data.result;
              this.xAxisData = this.result.date;
              if (this.msg1 == 0) {
                //公里数
                this.seriesData = this.result.km;
              } else if (this.msg1 == 1) {
                //打卡次数
                this.seriesData = this.result.cnt;
              } else if (this.msg1 == 2) {
                //平均配速
                this.seriesData = this.result.pace;
              }
              this.createChart();
            }
          })
        } else {
          stat.getMonth(data => {
            if (data.status == true) {
              this.result = data.result;
              this.xAxisData = this.result.date;
              if (this.msg1 == 0) {
                //公里数
                this.seriesData = this.result.km;
              } else if (this.msg1 == 1) {
                //打卡次数
                this.seriesData = this.result.cnt;
              } else if (this.msg1 == 2) {
                //平均配速
                this.seriesData = this.result.pace;
              }
              this.createChart();
            }
          })
        }
      },
      week() {
        this.msg = 0;
        this.dateType = 1;
        this.get();
      },
      month() {
        this.msg = 1;
        this.dateType = 2;
        this.get();
      },
      setType(val) {
        this.msg1 = val;
        if (this.msg1 == 0) {
          this.danwei = 'km';
        } else if (this.msg1 == 1) {
          this.danwei = '次';
        } else if (this.msg1 == 2) {
          this.danwei = 's/km';
        }
        this.get();
      },
    },
    mounted() {
      this.get();
    }
  }
</script>
<style scoped>
  .yd-flexview{
    background-color:rgb(238,241,242);
  }
 .tab-tit1{
   width: 100%;
   height: 40px;
   background-color: darkred;
   color:white;
 }
 .tab-tit1 a{
   display: inline-block;
   height:25px;
   line-height: 25px;
   width: 18%;
   text-align: center;
   background: #b85709;
   border-radius: 25px;
   margin-top: 7px;
   text-decoration:none;
   margin-left: 15px;
 }
 .tab-tit1 .cur{
   background: #e66834;
   color: #fff;
 }
 #a1{
    margin-left: -20px;
  }


 .tab-tit{
   width: 100%;
   background-color: white;
   margin-top: 10px;
 }
 .tab-tit a{
   display: inline-block;
   width: 33.3%;
   text-align: center;
   background: white;
   color: #333;
   text-decoration:none;
   margin-left: -3px;
 }
 .tab-tit a i{
   font-size: 50px;
 }
 .tab-tit a div{
   margin-top: -15px;
 }
 .tab-tit .cur{
   background:blueviolet;
   color: #fff;
 }
  .diva{
    width: 100%;
    height: 35px;
    background-color: #aa4822;
    line-height: 35px;
  }
  .diva span{
    font-size: 17px;
    color: white;
  }
  .s1{
    float: left;
    margin-left: 15px
  }
  .s2{
    float: right;
    margin-right: 25px
  }
  #c1{
    float: right;
    margin-top: 10px;
  }
</style>







