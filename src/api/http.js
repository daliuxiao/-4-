import axios from "axios";
import config from "../config";
import {Toast,Loading} from "vue-ydui/dist/lib.rem/dialog/index";
import router from "../router/index";

axios.defaults.baseURL=config.API_URL;
//请求前拦截
axios.interceptors.request.use(config=>{
  Loading.open("正在加载...");
  let token=localStorage.getItem("token");
  if(token){
    config.url+="?token="+token;
  }
  return config
},error => {
  return Promise.reject(error);
});
//请求返回后拦截
axios.interceptors.response.use(response=>{
  Loading.close();
  if(response.data.status==false){
    if(typeof response.data.code!="undefined"){
      if(response.data.code==401){
        router.push({path:"/login"});
      }
    }
  }
  return response;
},error => {
  return Promise.reject(error);
});

const http={
  /**
   * get请求
   */
  get:(url,params,fun)=>{
    axios.get(url,{params:params}).then(res=>{
      fun(res.data);
    }).catch(err=>{
      fun(null);
      Toast({
        mes: '网络请求异常',
        timeout: 1000,
        icon: 'error'
      });
    })
  },
  /**
   * post请求
   */
  post:(url,params,fun)=>{
    axios.post(url,params).then(res=>{
      fun(res.data);
    }).catch(err=>{
      fun(null);
      Toast({
        mes: '网络请求异常',
        timeout: 1000,
        icon: 'error'
      });
    });
  }
};

export default http
