import {Toast} from 'vue-ydui/dist/lib.rem/dialog';
import  router from "../router/index"
import axios from "axios"
import config from "../config/index"
import  http from "./http"

axios.defaults.baseURL=config.API_URL
const user= {
  /**
   * 登录
   */

  login: (params) => {
    http.post('/login', params, data => {
      if (data == null) {
        return;
      }
      if (data.status == true) {
        localStorage.setItem('token',data.data.token);
        Toast({
          mes: data.msg,
          timeout: 2000,
          icon: 'success',
          callback: () => {
            router.push({path: '/'});
          }
        });
      } else {
        Toast({
          mes: data.msg,
          timeout: 2000,
          icon: 'error'
        });
      }
    });
  },
  /**
   * 注册
   */
  register: (params) => {
    http.post('/register', params, data => {
      if (data == null) {
        return;
      }
      if (data.status == true) {
        Toast({
          mes: data.msg,
          timeout: 2000,
          icon: 'success',
          callback: () => {
            router.push({path: '/login'});
          }
        });
      } else {
        Toast({
          mes: data.msg,
          timeout: 2000,
          icon: 'error'
        });
      }
    });
  }
}

export default user
