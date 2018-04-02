/**
 * home接口
 */
import  http from "../api/http"
const home={
  /**
   * 获取幻灯
   */
  getslider:(fun)=>{
    http.get("/swiper",{},data=>{
     fun(data)
    })
  },
  /**
   * 获取时间轴
   */
  getTimeline:(fun)=>{
    http.get("/zipper",{},data=>{
      fun(data)
    })
  },
  /**
   * 获取新闻
   */
  getNews:(fun)=>{
    http.get("/article",{},data=>{
      fun(data)
    })
  },
  /**
   * 获取个人信息
   */
  getInfo:(fun)=>{
    http.get("/user",{},data=>{
      fun(data)
    })
  },
};

export default home
