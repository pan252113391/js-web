import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import './router/intercept'
import store from "./store";

// ElementUI引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
// 样式重置
import './style/reset.scss';


import FormMaking from 'form-making'
import 'form-making/dist/FormMaking.css'

Vue.use(FormMaking)

//解决动态路由跳转时报错 
//或者报错Uncaught (in promise) undefined
//或者报错element-ui.common.js?5c96:3354 Error: Avoided redundant navigation to current location: "/infolist".

import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return routerPush.call(this, location).catch(error=> error)
}

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
