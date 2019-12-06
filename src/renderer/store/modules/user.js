import Utils from '@/utils/utils'

const state = () => ({
  userInfo: null,
  wallet: {},
  // 用户资产信息
  walletAsset: {}
})

let mutations = {
  // 设置用户资产信息
  SET_WALLETASSET(state, data) {
    state.walletAsset = data
  },
  SET_WALLET(state, data) {
    state.wallet = data
  },
  // 设置用户信息
  SET_USERINFO(state, userInfo) {
    state.userInfo = userInfo
  }
};
let getters = {
  // 占用保证金
  positionFrozen(state, getters, rootState) {
    if (!rootState.market.currentContract) return 0
    return (
      Utils.splitFormat(
        Utils.editE(state.walletAsset.positionFrozen),
        rootState.market.currentContract.contractParam && rootState.market.currentContract.contractParam.fundFloat
      ) || 0
    )
  },
  // 风险度
  risk(state) {
    return Utils.splitFormat(
      Utils.editE(Utils.mul(state.walletAsset.risk || 0, 100)),
      0
    )
  }
};

export default {
  state,
  mutations,
  getters
}
