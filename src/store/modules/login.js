import { setToken,  getToken,setUserName,getUserName } from '../../utils/cookies'

import { getLoginApi } from "../../api/login";
const state = {
    token: getToken() || '',
    userName: getUserName() || ''
}
const getters = {
    TOKEN(state){
        return state.token;
    },
    USERNAME(state){
        return state.userName;
    }
}
const mutations = {
    SET_TOKEN(state, payload) {
        state.token = payload;
    },
    SET_USERNAME(state, payload) {
        state.userName = payload;
    }
}
const actions = {
    LOGIN({ commit }, requestData) {
        return new Promise((resolve, reject) => {
            getLoginApi(requestData).then(res => {
                console.log(res);
                commit('SET_TOKEN', res.data.data.token)
                setToken(res.data.data.token)
                commit('SET_USERNAME', res.data.data.username)
                setUserName(res.data.data.username)
                resolve(res)
            }).catch(err => {
                reject(err)
            })
        })
    }
}
export default {
    namespaced: true,
    state,
    getters,
    mutations,
    actions,
}