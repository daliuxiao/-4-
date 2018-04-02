
<template>
  <div class="yd-flexview">
    <!--头部-->
    <z4-header></z4-header>
    <div id="d1">个人信息修改</div>
    <form>
      <yd-cell-item>
        <span slot="left" style="margin-left: -10px">上传头像：</span>
        <span slot="left">
          <div class="upload">
            <file-upload ref="upload" @input-file="inputFile" :post-action="postAction">
              <img :src="src" alt="">
            </file-upload>
          </div>
        </span>
      </yd-cell-item>
        <div>
          姓名：<input type="text" placeholder="刘晓" v-model="list.name">
        </div>
      <div>
        电话：<input type="text" placeholder="15639706560" v-model="list.phone">
      </div>
      <div>
        昵称：<input type="text" placeholder="茶小乖" v-model="list.nickname">
      </div>
      <div>
        月目标量（公里数）：<input type="text" placeholder="6公里" style="width: 48%;" v-model="list.km">
      </div>
      <div>
        心情语录：<textarea placeholder="生命在于运动，只要每一次尽力的演示，都值得鼓励与喝彩。" v-model="list.introduction"></textarea>
      </div>
      <yd-radio-group v-model="list.is_striker" style="line-height: 20px;margin-top: 20px;margin-left: -80px">
        是否冲锋队队员：
        <yd-radio val="1">是</yd-radio>
        <yd-radio val="0">否</yd-radio>
      </yd-radio-group>
      <yd-button type="danger" style="width: 50%;" @click.native="add">保存</yd-button>
    </form>
  </div>
</template>
<script>
  import Z4Header from "../components/Z4Header"
  import person from "../api/person"
  import home from "../api/home"
  import config from "../config/index"
  import FileUpload from "vue-upload-component"
  export default {
    data() {
      return {
        list:{
          avatar:''
        },
        postAction:config.UPLOAD_URL,
        src:"/static/img/ifle.jpg",
      }
    },
    components: {
      Z4Header,FileUpload
    },
    methods:{
      add(){
        person.add(this.list);
      },
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
            this.list.avatar=data.result.path;
          }
        }
      },
    },
    mounted(){
      home.getInfo(data=>{
        this.list = data;
      });
    }
  }
</script>
<style scoped>
  #d1{
    width: 100%;
    height: 30px;
    background-color: lightgray;
    color: brown;
    line-height: 30px;
    font-size: 15px;
    font-weight: 600;
    padding-left: 20px;
  }
  input{
    width: 80%;
    height: 30px;
    border:1px solid lightgray;
  }
  form{
    width: 80%;
    margin: auto;
    line-height: 50px;
    font-size: 15px;
    font-weight: 600;
    text-align: center;
  }
  textarea{
   width: 70%;
    font-size: 12px;
    height: 100px;
    text-align: left;
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
