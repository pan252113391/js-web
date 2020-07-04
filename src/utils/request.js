
// 请求拦截

import axios from 'axios'
import {getToken,getUserName} from './cookies'
let base_URL =  process.env.NODE_ENV === "production" ? "/api" : "/api"
var instance = axios.create({
    baseURL: base_URL,
    timeout: 10000,
  });


// 添加请求拦截器
instance.interceptors.request.use(function (config) {
    config.headers.Tokey= getToken();  
    config.headers.UserName= getUserName();  

    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  });

// 添加响应拦截器
instance.interceptors.response.use(function (response) {
    // 对响应数据做点什么
    if (response.data.resCode !== 0) {
      return Promise.reject(response)
    }
    return response;
  }, function (error) {
    // 对响应错误做点什么
    return Promise.reject(error);
  });

  export default instance;