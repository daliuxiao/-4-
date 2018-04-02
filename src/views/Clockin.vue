<!--打卡页面-->
<template>
  <div id="d1" class="yd-flexview">
    <!--头部-->
    <z4-header></z4-header>
    <!--打卡-->
  <div >
    <yd-cell-group>
      <yd-cell-item arrow>
        <span slot="left">时间：</span>
        <yd-datetime type="datetime" v-model="form.clock_in_at" slot="right"></yd-datetime>
      </yd-cell-item>
      <yd-cell-item arrow>
        <span slot="left">公里数：</span>
        <yd-input slot="right"  max="3" v-model="form.km" placeholder="请输入公里数(km)"></yd-input>
      </yd-cell-item>
      <yd-cell-item arrow>
        <span slot="left">用时：</span>
        <yd-datetime type="time" v-model="form.time" slot="right"></yd-datetime>
      </yd-cell-item>
      <yd-cell-item arrow>
        <span slot="left" style="margin-top: -50px">上传图片：</span>
        <span slot="left" style="margin-left: 50px">
          <div class="upload">
            <file-upload ref="upload" @input-file="inputFile" :post-action="postAction">
              <img :src="src" alt="">
            </file-upload>
          </div>
        </span>
      </yd-cell-item>
      <br>
      <div id="btn">
        <yd-button type="warning" style="width: 50%;" @click.native="add">提交</yd-button>
      </div>
    </yd-cell-group>
  </div>
    <!--打卡历史详情-->
    <clock-list></clock-list>
  </div>
</template>

<script type="text/babel">
  import Z4Header from "../components/Z4Header"
  import ClockList from "../components/ClockList"
  import FileUpload from "vue-upload-component"
  import config from "../config/index"
  import clock_in from "../api/clock_in"
  export default {
    data(){
      return {
        list:[],
        form:{
          clock_in_at:'',
          km:'',
          time:'',
          img:''
        },
        postAction:config.UPLOAD_URL,
        src:"/static/img/ifle.jpg",
      }
    },
    components: {
      Z4Header,FileUpload,ClockList
    },
    methods:{
    // 上传照片
      inputFile(newFile, oldFile) {
        //上传文件
        this.$refs.upload.active = true;
        //验证上传完成
        if (newFile && oldFile && !newFile.active && oldFile.active) {
          // 获得结果
          let data = newFile.response;
          console.log(data);
          if (data.status == "success") {
            this.src='http://123.57.75.120:9002/uploads'+data.result.path;
            this.form.img=data.result.path;
          }
        }
      },
      /**
       * 打卡提交
       */
      add(){
        clock_in.add(this.form);
      }
    },
    mounted(){
      this.form.clock_in_at ="";
      let date=new Date();
      let year=date.getFullYear()
      let month=date.getMonth()+1;
      if(month<10){
        month="0"+month;
      }
      let day=date.getDate();
      if(day<10){
        day="0"+day;
      }
      let h=date.getHours();
      if(h<10){
        h="0"+h;
      }
      let m=date.getMinutes();
      if(m<10){
        m="0"+m;
      }
      let mydate=year+"-"+month+"-"+day+" ";
      mydate+=h+":"+m;
      this.form.clock_in_at=mydate
    }
  }
</script>
<style scoped>
  #d1{
    background-color: #eef1f2;
  }
  #btn{
    text-align: center;
  }
  .upload{
    width:100px;
    heighe:100px;
    padding:5px 5px 5px 5px;
  }
  .upload img{
    width:100px;
    heighe:100px
  }
</style>
