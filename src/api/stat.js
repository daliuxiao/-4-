import http from "./http";

export default {
  /**
   * 按周获取报表
   */
  getWeek:(fun)=>{
    http.get("/stat/week",{},data=>{
      fun(data);
    })
  },
  /**
   * 按月获取报表
   */
  getMonth:(fun)=>{
  http.get("/stat/month",{},data=>{
    fun(data);
  })
}
}
