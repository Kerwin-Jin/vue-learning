import Vue from 'vue'
import VueRouter from 'vue-router'
import Film from '../views/Film.vue'
import Cinema from '../views/Cinema.vue'
import Center from '../views/Center.vue'
import Nowplaying from '../views/Film/Nowplaying.vue'
import Comingsoon from '../views/Film/Comingsoon.vue'
import Detail from '../views/Detail.vue'
// import Login from '../views/Login.vue'  通过路由懒加载的方式进行引入，也就是需要的时候再引入，提高首屏优化体验

Vue.use(VueRouter)

const aaa = [
  {
    path: "/film",
    component: Film,
    children: [
      {
        path: "nowplaying",          //简写，因为已经知道是film的孩子了，所以不用写成/film/nowplaying
        component: Nowplaying
      },
      {
        path: "/film/comingsoon",     //全写，
        component: Comingsoon
      },
      {
        path: "",          //重定向路径， 当路径为http://localhost:8080/#/film/，重定向到/film/nowplaying
        redirect: "/film/nowplaying"
      }
    ]
  },

  // ------------------------------------------------
  {
    path: "/cinema",
    component: Cinema
  },
  // ------------------------------------------------

  {
    path: "/detail/:filmId",       //动态路由，因为传过来的影片id不确定，这里只是一个占位符
    component: Detail
    // name:kerwinDetail 
  },
  // ------------------------------------------------


  //通过query方式传递
  // {
  //   path:"/detail",       //动态路由，因为传过来的影片id不确定，这里只是一个占位符
  //   component:Detail
  // },
  // ------------------------------------------------

  {
    path: "/center",
    component: Center
  },
  // ------------------------------------------------
  {
    path: "/login",
    // 通过路由懒加载的方式进行引入，也就是需要的时候再引入，提高首屏优化体验，通过箭头函数动态加载
    component: () => import('../views/Login.vue')
  },

  // 路由重定向，通配符的优先级是最低的，不在乎他是该aaa数组的第几个元素，即使放在第一个，也是最后一个匹配
  {
    path: "*",
    redirect: "/film/nowplaying"
  }
]

const router = new VueRouter({

  // 路由模式，默认是hash，有history和hash两种选择，hash是带#号
  // mode: 'history',
  // base: process.env.BASE_URL,
  routes: aaa
})

//全局路由守卫
// router.beforeEach((to, from, next) => {

//   let auth = ['/center', '/oeder', '/money', '/card'];

//   if (auth.includes(to.fullPath)) {
//     console.log("验证token中...");
//     if (!localStorage.getItem("token")) {
//       console.log("无token!");
//       next("/login");       //next传参数表示到参数的页面，不传参数就是默认放行
//     } else {
//       next();
//     }
//   } else {
//     next();
//   }
// })


export default router
