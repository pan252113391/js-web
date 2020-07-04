import instance from '../utils/request'
export function getUserApi(data){
    return instance({
        method: 'post',
        url: '/user/getList/',
        data: data
      });
  }