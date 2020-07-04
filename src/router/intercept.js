// 路由拦截


import router from './index';
import store from '../store/index';
import {getToken} from '../utils/cookies';



router.beforeEach((to,from,next)=>{
    if (to.path == '/login') {
        next();
    }else{
        let token = getToken();
        if (!token) {
          next('/login')  
        }else{
            next();
        }
    }
})