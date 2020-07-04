import instance from '../utils/request'
export function getSmsCodeApi(data){
    return instance({
        method: 'post',
        url: '/getSms/',
        data: data
      });
}
// 注册验证码

export function getRegisterCodeApi(data){
  return instance({
      method: 'post',
      url: '/getSms/',
      data: data
    });
}
// 注册验证码

export function getRegisterApi(data){
  return instance({
      method: 'post',
      url: '/register/',
      data: data
    });
}

export function getLoginApi(data){
  return instance({
      method: 'post',
      url: '/login/',
      data: data
    });
}