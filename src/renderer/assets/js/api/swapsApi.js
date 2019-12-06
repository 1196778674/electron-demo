import {AxiosInit} from '../../config/axios/config'
import Cookie from '../../myConfig/cookie'
import apiConfig from '../../config/api.config'

let axios = AxiosInit({
  url: apiConfig.futureURL,
  contentType: 'application/x-www-form-urlencoded;charset=UTF-8'
});

// 判断是否登录
let checkToken = function() {
  return Cookie.getCookie('token')
};

// api
let swapsApi = {
  /*
   * 所有合约指数
   */
  getIndexPriceAll() {
    return axios.get('/guide/index/price/all')
  },
  /**
   * 获取合约ID
   * **/
  getPositionList(id) {
    return axios.get(`/position/list`, {
      params: {
        contractIds: id
      }
    })
  },
  /**
   * 获取合约ID
   * **/
  getContractList() {
    return axios.post('/contract/list')
  },
  /**
   * 获取带小数参数的合约列表
   * **/
  getContractAllList() {
    return axios.post('/contract/with/param/list')
  },
  /**
   * 获取合约小数参数列表
   * **/
  getContractParamList() {
    return axios.post('/contract/param/list')
  },
  /**
   * 获取合约Ticker
   * **/
  getTickerAll(cancelToken) {
    return axios.post(
      '/market/ticker/list',
      {},
      {
        cancelToken: cancelToken
      }
    )
  },
  getTicker(product) {
    return axios.post('/market/ticker', {
      product: product
    })
  },
  /**
   * 根据合约ID获取该合约的详情
   * **/
  getMarket(contractId) {
    return axios.post('/market/data/get', { contractId: contractId })
  },
  /**
   * 获取所有合约的market
   * **/
  getMarketAll(cancelToken) {
    return axios.post(
      '/market/data/get/all',
      {},
      {
        cancelToken: cancelToken
      }
    )
  },
  /**
   * 下单 /order/place
   * params
   * contractId 合约ID
   * type 下单类型 1：限价单 2：市价单
   * side 买入方向 1:buy 2:sell
   * price 价格  市价时可以为空
   * size 下单数量
   * amount 下单金额
   * close 是否为平仓单 0：开仓 1：平仓 默认：0
   * orderFrom 订单来源 0：网页 1：API 2： iOS 3：Android 默认0
   * clientOid 自定义字符串
   * **/
  orderPlace(obj) {
    return axios.post('/order/place', obj)
  },
  /**
   * 一键全平
   * **/
  closeAll() {
    return axios.post('/order/close/all')
  },
  /**
   * 计划委托-下单接口
   * **/
  planOrder({ contractId, type, side, price, size, triggerPrice }) {
    return axios.post('/order/place/planOrder', {
      contractId: contractId,
      type: type,
      side: side,
      price: price,
      size: size,
      triggerPrice: triggerPrice
    })
  },
  /**
   * 获取仓位
   * **/
  getFront(contractId, cancelToken) {
    return axios.post(
      '/position/front/get',
      {
        contractId: contractId
      },
      {
        cancelToken: cancelToken
      }
    )
  },
  /**
   * 订单列表
   * parmas
   * contractID
   * orderMode
   * side  1：buy 2: sell
   * beginDate
   * endDate
   * page
   * pageSize
   * **/
  getOrderList(obj) {
    return axios.post('/order/list', obj)
  },
  /**
   * 获取资金记录
   * **/
  getAssetLog(currencyId) {
    return axios.post('/wallet/asset/log', { currencyId: currencyId })
  },
  /**
   * 订单列表 -- 已完成
   * **/
  getOrderFill(obj) {
    return axios.post('/order/fill', obj)
  },
  /**
   * 订单列表 -- 计划委托单
   * **/
  getPlanOrderList({ contractId, pageSize, page }) {
    if (!checkToken()) return Promise.reject('请登录::getZcyPlanOrderList')
    return axios.post('/order/list/planOrder', {
      contractId: contractId,
      page: page,
      pageSize: pageSize
    })
  },
  /**
   * 成交历史
   * **/
  getTradeHistory(contractId, cancelToken) {
    return axios.post(
      '/market/trade_history',
      { contractId: contractId },
      {
        cancelToken: cancelToken
      }
    )
  },
  /**
   * 调节杠杆
   * contractId
   * newLeverage
   * newPositionType
   * **/
  changePositionLeverage({ contractId, newLeverage, newPositionType }) {
    return axios.post('/position/leverage/change', {
      contractId: contractId,
      newLeverage: newLeverage,
      newPositionType: newPositionType
    })
  },
  /**
   * 获取深度数据
   * **/
  getOrderBook(product, cancelToken) {
    return axios.post(
      '/market/order_book',
      {
        contractId: product
      },
      {
        cancelToken: cancelToken
      }
    )
  },
  /**
   * 获取K线数据
   * **/
  getBar(obj, cancelToken) {
    return axios.post(
      `market/bar`,
      {
        product: obj.product,
        type: obj.type,
        since: obj.since
      },
      {
        cancelToken: cancelToken
      }
    )
  },
  /**
   * 成交历史
   * **/
  getTrades(product, since) {
    return axios.post('/market/trade_history', {
      product: product,
      since: since
    })
  },
  /**
   * 查询用户钱包
   * **/
  getWallet(currencyId) {
    return axios.post('/wallet/get', {
      currencyId: currencyId
    })
  },
  /**
   * 查询用户资产信息
   * **/
  getWalletAsset(currencyId) {
    return axios.post('/wallet/asset/get', {
      currencyId: currencyId
    })
  },
  /**
   * 撤单（单独）
   * **/
  cancelOrder(contractId, orderId) {
    return axios.post('/order/cancel', {
      orderId: orderId,
      contractId: contractId
    })
  },
  /**
   * 撤单（批量）
   * **/
  cancelOrderAll(contractId) {
    return axios.post('/order/cancel/batch', {
      contractId: contractId
    })
  },
  /**
   * 计划委托--撤单（单独）
   * **/
  cancelPlanOrder(contractId, orderId) {
    return axios.post('/order/cancel/planOrder', {
      contractId: contractId,
      id: orderId
    })
  },
  /**
   * 调节保证金
   * **/
  changeMargin(contractId, addValue) {
    return axios.post('/position/margin/add', {
      contractId: contractId,
      addValue: addValue
    })
  },
  /**
   * 敏感操作提示（当前委托单可能触发其他平仓单的撤销机制，是否确认执行）
   * **/
  orderCloseIsChange({ contractId, type, side, price, size, close }) {
    return axios.post('/order/close/is/change', {
      contractId: contractId,
      type: type,
      side: side,
      price: price,
      size: size,
      close: close
    })
  },
  /**
   * -------------------合约指南部分--------------
   * **/
  /**
   * 互换补偿率列表
   * **/
  getFundingRateList({ contractId, page, pageSize }) {
    return axios.post('/guide/funding/rate/list', {
      contractId: contractId,
      page: page,
      pageSize: pageSize
    })
  },
  /**
   * 保险基金
   * **/
  getInsuranceFundList({ contractId, page, pageSize }) {
    return axios.post('/guide/insurance/fund/list', {
      contractId: contractId,
      page: page,
      pageSize: pageSize
    })
  },
  /**
   * 指数价格
   * **/
  getIndexPriceList(contractId, page, pageSize) {
    return axios.post('/guide/index/price/list', {
      contractId: contractId,
      page: page,
      pageSize: pageSize
    })
  },
  /**
   * 溢价指数
   * **/
  getPremiumIndexList(contractId, type, page, pageSize) {
    return axios.post('/guide/premium/index/list', {
      contractId: contractId,
      type: type,
      page: page,
      pageSize: pageSize
    })
  },
  /**
   * 货币利率
   * **/
  getCurrencyInterestRate(contractId) {
    return axios.post('/guide/currency/interest/rate', {
      contractId: contractId
    })
  },
  /* 止盈止损 */
  getPlanOrder(data) {
    return axios.post('/order/plan/getPlanOrder', data)
  },
  /* 取消止盈止损挂单 /order/plan/cancel*/
  planCancel(data) {
    return axios.post('/order/plan/cancel', data)
  },
  // 止盈止损
  lossClose: params => {
    return axios.post('/order/plan/close', params)
  },
  /************************************  预设止盈止损 + 计划委托  *****************************************************/
  /**
  * @content: 预设止盈止损(委托列表内) 接口地址: http://192.168.200.32/docs/API-FUTURE-WIKI/wikis/%E4%BA%A4%E6%98%93%E7%9B%B8%E5%85%B3%E6%8E%A5%E5%8F%A3--%E6%AD%A2%E7%9B%88%E6%AD%A2%E6%8D%9F%E8%AE%A1%E5%88%92%E5%A7%94%E6%89%98
   * @params orderId 挂单Id
   * @params targetProfitPrice 止盈价
   * @params stopLossPrice 止损价
   * @returns AxiosPromise
  */
  preStopClose: params => {
    return axios.post('/order/plan/pre', params)
  },
  /**
  * @content: 计划委托建仓单  下单 接口地址: http://192.168.200.32/docs/API-FUTURE-WIKI/wikis/%E4%BA%A4%E6%98%93%E7%9B%B8%E5%85%B3%E6%8E%A5%E5%8F%A3--%E6%AD%A2%E7%9B%88%E6%AD%A2%E6%8D%9F%E8%AE%A1%E5%88%92%E5%A7%94%E6%89%98#%E8%AE%A1%E5%88%92%E5%A7%94%E6%89%98%E5%BB%BA%E4%BB%93%E5%8D%95-%E4%B8%8B%E5%8D%95
  * @params 见地址
  * @returns AxiosPromise
  */
  entrustOpen: params => {
    return axios.post('/order/plan/open', params)
  },
  /**
  * @content: 计划委托列表  接口地址: http://192.168.200.32/docs/API-FUTURE-WIKI/wikis/%E4%BA%A4%E6%98%93%E7%9B%B8%E5%85%B3%E6%8E%A5%E5%8F%A3--%E6%AD%A2%E7%9B%88%E6%AD%A2%E6%8D%9F%E8%AE%A1%E5%88%92%E5%A7%94%E6%89%98#%E8%AE%A1%E5%88%92%E5%A7%94%E6%89%98-%E6%9F%A5%E8%AF%A2
  * @params <String> id   合约 id,多个用都好分割
  * @returns AxiosPromise
  */
  getEarningsList(id) {
    return axios.post('/order/plan/getOpenPlanOrder', {id})
  },
  /**
  * @content: 计划委托撤单  接口地址:  http://192.168.200.32/docs/API-FUTURE-WIKI/wikis/%E4%BA%A4%E6%98%93%E7%9B%B8%E5%85%B3%E6%8E%A5%E5%8F%A3--%E6%AD%A2%E7%9B%88%E6%AD%A2%E6%8D%9F%E8%AE%A1%E5%88%92%E5%A7%94%E6%89%98#%E6%92%A4%E5%8D%95-%E5%8D%95%E6%9D%A1
  * @params <String> id  计划委托挂单Id
   * @returns AxiosPromise
  */
  earningCancelOrder(id) {
    return axios.post('/order/plan/cancel', {planId: id})
  }
};
export default swapsApi
