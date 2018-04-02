import http from "./http";
import {Toast} from "vue-ydui/dist/lib.rem/dialog/index";
import  router from "../router/index"

/**
 * 打卡api
 */
const clock_in={
  /**
   * 添加打卡
   */
  add:(form)=>{
    http.post('/clock-in/add',form,data=>{
        console.log(data);
      if(data.status==true){
        let id=data.result.id
        Toast({
          mes: data.msg,
          timeout: 2000,
          icon: 'success',
          callback: () => {
            router.push('/detail/'+id);
          }
        });
      }else{
        Toast({
          mes: data.msg,
          timeout: 2000,
          icon: 'error',
        });
      }
    })
  },
  /**
   * 获取打卡信息
   */
  getclockin:(fun)=>{
    http.get("/clock-in/month",{}, data=>{
      fun(data)
    })
  },
  /**
   * 获取信息
   */
  get:(id,fun)=>{
    http.get("/clock-in/"+id,{}, data=>{
      fun(data)
    })
  },
  /**
   * 今日打卡记录
   */
  gettoday:(params,fun)=>{
    http.get("/user/today",params, data=>{
      fun(data)
    })
  },
  /**
   * 获取打卡次数排行榜
   */
  getCountRanking:(params,fun)=>{
    http.get("/user/count/ranking", params, data=>{
      fun(data)
    })
  },
  /**
   * 获取总公里数排行榜
   */
  getKmRanking:(params,fun)=>{
    http.get("/user/km/ranking",params, data=>{
      fun(data)
    })
  },
  /**
   * 获取平均配速排行榜
   */
  getpaceRanking:(params,fun)=>{
    http.get("/user/pace/ranking",params,data=>{
      fun(data)
    })
  },
};

export default clock_in
