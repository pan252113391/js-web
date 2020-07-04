import cookies from 'vue-cookies'
export function setToken(data) {
    cookies.set('to_ken',data,'3d')
}
export function removeToken() {
    cookies.remove('to_ken')
}
export function getToken() {
   return cookies.get('to_ken')
}


export function setUserName(data) {
    cookies.set('UserName',data,'3d')
}
export function removeUserName() {
    cookies.remove('UserName')
}
export function getUserName() {
   return cookies.get('UserName')
}

