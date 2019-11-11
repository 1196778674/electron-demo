import axios from '../../assets/plugins/axiosConfig'
import HeaderApi from '../../assets/js/api/headerApi';
const state = {
  token: null,
  userInfo: {}
}

const mutations = {
  SET_COOKIE(state, obj) {
    state.token = obj.token
  },
  SAVE_USERINFO(state, info) {
    state.userInfo = info
  },
}

const actions = {
  // 获取用户信息
  getUserInfo({ commit }) {
    return HeaderApi.getUserInfo()
      .then(res => {
        commit('SAVE_USERINFO', {
          data: res.data.info
        })
      })
      .catch((e) => {
        commit('SET_COOKIE', {
          token: null
        })
        delete axios.defaults.headers['ACCESS_TOKEN']
      })
  },
}

export default {
  state,
  mutations,
  actions
}
