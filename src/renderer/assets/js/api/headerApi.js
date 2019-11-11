import axios from '../../plugins/axiosConfig'

const ToolsApi = {
  // 获取服务器时间偏移量
  // getOffset() {
  //   return axios.get('/tools/time/zone/offset')
  // },
  // 获取用户信息
  getUserInfo() {
    return axios.post('/user/userinfo')
  },
  /**
   * 获取带小数参数的合约列表
   * **/
  getContractAllList() {
    return axios.post('/contract/with/param/list')
  },
}

export default ToolsApi
