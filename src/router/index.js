import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: 'Home',
    hidden:false,
    meta: {
      name: '重定向'
    }
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
    hidden:false,
    meta: {
      name: '登录'
    }
  },
  {
    path: "/home",
    name: "Home",
    component: () => import("../views/Home.vue"),
    hidden:true,
    icon:'el-icon-platform-eleme',
    meta: {
      name: '控制台'
    }
  },
  {
    path: "/info",
    name: "Info",
    component: () => import("../views/Home.vue"),
    hidden:true,
    icon:'el-icon-s-order',
    meta: {
      name: '信息列表'
    },
    children: [
      {
        path: "/infolist",
        name: "Infolist",
        component: () => import("../views/info/infolist.vue"),
        meta: {
          name: '详细内容'
        }
      },
    ],
    
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/Home.vue"),
    hidden:true,
    icon:'el-icon-s-check',
    meta: {
      name: '用户信息'
    },
    children: [
      {
        path: "/userList",
        name: "UserList",
        component: () => import("../views/user/userList.vue"),
        meta: {
          name: '个人信息'
        }
      },
    ],
  },
];

const router = new VueRouter({
  mode: "hash",
  base: process.env.BASE_URL,
  routes
});

export default router;
