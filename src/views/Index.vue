<!--首页-->
<template>
  <div id="d1" class="yd-flexview">
    <!--头部-->
    <z4-header></z4-header>
    <!--轮播图-->
    <z4-slider></z4-slider>
    <!--导航-->
    <z4-app></z4-app>
    <!--时间轴-->
    <z4-timeline></z4-timeline>
    <!--新闻-->
    <z4-news></z4-news>
  </div>
</template>
<script type="text/babel">
  import Z4Header from "../components/Z4Header"
  import Z4Slider from "../components/Z4Slider"
  import Z4App from "../components/Z4App"
  import Z4Timeline from "../components/Z4Timeline"
  import Z4News from "../components/Z4News"
  export default {
    components:{
      Z4Header,Z4Slider,Z4App,Z4Timeline,Z4News
    }
  }
</script>
<style scoped>

</style>
