import http from "./http";
import {Toast} from "vue-ydui/dist/lib.rem/dialog/index";
import  router from "../router/index"

/**
 * 个人信息api
 */
const Info={
  /**
   * 添加个人信息
   */
  add:(form)=>{
    http.post('/user/save',form,data=>{
      console.log(data);
      if(data.status==true){
        Toast({
          mes: data.msg,
          timeout: 2000,
          icon: 'success',
          callback: () => {
            router.push({path: '/personal'});
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
  }
};

export default Info
