const state = () => ({
  domain: null,
  tab: true,
  keyOrder: true,
})

const mutations = {
  SET_DOMAIN(state, domain) {
    state.domain = domain
  },
  SET_TAB_STATUS(state, data) {
    state.tab = data
  },
  SET_KEY_ORDER(state, data) {
    state.keyOrder = data
  },
}

const actions = {
  // nuxtServerInit({commit}, {req}) {
  //   commit('SET_DOMAIN', req.headers.host)
  // }
}
export default {
  state,
  mutations,
  actions
}