<template>
  <div class="yd-flexview">
  <!--头部-->
  <z4-header></z4-header>
  <!--form表单-->
    <yd-cell-group>
      <yd-cell-item>
        <span slot="left">手机号：</span>
        <yd-input slot="right" required v-model="form.phone" max="11" placeholder="请输入手机号"></yd-input>
      </yd-cell-item>
      <yd-cell-item>
        <span slot="left">密码：</span>
        <yd-input slot="right" type="password" v-model="form.password" placeholder="请输入密码"></yd-input>
      </yd-cell-item>
    </yd-cell-group>
    <div class="but">
      <yd-button size="large" type="danger" @click.native="register">注册</yd-button>
      <yd-button size="large" type="primary" @click.native="login">登录</yd-button>
    </div>
  </div>
</template>
<script>
  import Z4Header from "../components/Z4Header"
  import user from "../api/us"
  export default {
    data() {
      return {
        form: {
          phone: "",
          password: ""
        }
      }
    },
    methods: {
      // 跳转注册
      register() {
        //路由跳转push
        this.$router.push({path: 'register'})
      },
      //登录
      login() {
        user.login(this.form)
      }
    },
      components: {
        Z4Header
      }
  }
</script>
<style scoped>
.but{
  padding: 0px 20px 0px 20px;
}
</style>
