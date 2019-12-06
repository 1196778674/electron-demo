import axios from '../../config/axios/config'

let TradeApi = {
  // 下单接口
  place: (params) => {
    let obj = {stp: 1, orderFrom: 0}
    Object.assign(obj, params)
    return axios.post('/orders/place', obj)
  },
  // 撤单接口
  cancel (productId, orderIds) {
    return axios.post('/orders/cancel', { productId, orderIds })
  },
  // 撤单接口(全部)
  cancelBatch (productId) {
    return axios.post('/orders/cancelBatch', { productId })
  },
  // 获取订单列表
  getOrdersList (productId, pageSize, status, page, beginDate, endDate) {
    return axios.post('/orders/list', {productId, status, beginDate, endDate, page, pageSize})
  },
  // 判断是否想要交易密码
  isNeedPwd: () => {
    return axios.post('/orders/trade_pwd/need')
  }
};
export default TradeApi
