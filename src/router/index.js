import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/Index'
import login from '../views/Login'
import clockin from '../views/Clockin'
import detail from '../views/Detail'
import ranking from '../views/Ranking'
import register from '../views/Register'
import count from '../views/Count'
import personal from '../views/Personal'
import editor from '../views/Editor'
import record from '../views/Record'

Vue.use(Router)

const router=new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index
    },{
      path: '/login',
      name: 'login',
      component: login
    },{
      path: '/clockin',
      name: 'clockin',
      component: clockin
    }
    ,{
      path: '/detail/:id',
      name: 'detail',
      component: detail
    },{
      path: '/ranking',
      name: 'ranking',
      component: ranking
    },{
      path: '/register',
      name: 'register',
      component: register
    },{
      path: '/count',
      name: 'count',
      component: count
    },{
      path: '/personal',
      name: 'personal',
      component: personal
    },{
      path: '/editor',
      name: 'editor',
      component: editor
    },{
      path: '/record',
      name: 'record',
      component: record
    }
  ]
});

/**
 * 全局登陆认证
 */
router.beforeEach((to,from,next)=>{
  let token=localStorage.getItem("token");
  //不是登录页
  if(to.path!="/login"){
    //验证token是否存在
    if(token==null) {
      //不存在跳转登录页
      next({
        path: "/login"
      })
    }
    }else{
      if(token!=null){
        //是登录页，验证token是否存在，存在跳转登录页
        next({path:"/"})
      }
    }
  next()
  });

export default router
