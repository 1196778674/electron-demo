import {AxiosInit} from '../../config/axios/config'
import apiConfig from '../../config/api.config'

let axios = AxiosInit({
  url: apiConfig.baseURL,
  contentType: 'application/x-www-form-urlencoded;charset=UTF-8'
})

let accountApi = {
  // 已实名用户绑定银行卡
  bindCart(bankId, bankCard) {
    return axios.post('/deposit/money/card/bind', {
      bankId: bankId,
      bankCard: bankCard
    })
  },
  // 用户银行卡详情
  getCartInfo(bankId) {
    return axios.post('/deposit/money/card/info', {
      bankId: bankId
    })
  },
  // 对公账号信息接口
  getOpneBank(bankId) {
    return axios.post('/tools/dict/open_bank/' + bankId)
  },
  // 删除绑定银行卡
  deleteCart(cardId) {
    return axios.post('/deposit/money/card/delete', {cardId: cardId})
  },
  // 法币充值----获取充值记录
  getRecordList(currency, curPage) {
    return axios.post('/deposit/money/record/list', {currency: currency, curPage: curPage})
  },
  // 数字充值----获取充值地址
  getCoinAddress(currency) {
    return axios.post('/deposit/coin/address/get', {currency: currency})
  },
  // 数字充值----获取充值记录
  getCoinRecordList(currency, curPage) {
    return axios.post('/deposit/coin/record/list', {currency: currency, curPage: curPage})
  },
  // 提现接口
  takeMoney(ticket, currency, cardId, amount) {
    return axios.post('/withdraw/money/request', {
      ticket: ticket,
      currency: currency,
      cardId: cardId,
      amount: amount
    })
  },
  // 查询提现记录
  takeMoneyRecords(currency, curPage) {
    return axios.post('/withdraw/money/records', {
      currency: currency,
      curPage: curPage
    })
  },
  // 提币接口
  takeCoin(currency, addressId, amount, fee, ticket) {
    return axios.post('/withdraw/coin/request', {
      ticket: ticket,
      currency: currency,
      addressId: addressId,
      // cardId: cardId,
      amount: amount,
      fee: fee
    })
  },
  // 提币邮件确认接口
  takeCoinConfirm(ticket) {
    return axios.post('/withdraw/coin/request/confirm', {
      ticket: ticket
    })
  },
  // 重发提币邮件确认
  takeCoinReConfirm(withdrawId) {
    return axios.post('/withdraw/coin/resend/email/confirm', {
      withdrawId: withdrawId
    })
  },
  // 查询提币记录
  takeCoinRecords(currency, curPage) {
    return axios.post('/withdraw/coin/records', {
      currency: currency,
      curPage: curPage
    })
  },
  // 提币撤回
  takeCoinCancel(withdrawId) {
    return axios.post('/withdraw/coin/cancel', {withdrawId})
  },
  // 获取账单接口
  getUserLedgers(curPage, currency, action) {
    return axios.post('/user/ledgers', {curPage, currency, action})
  },
  // 提现地址列表
  getCoinAddressList(currency) {
    return axios.post('/withdraw/coin/address/list', {currency})
  },
  // 添加提现地址
  getCoinAddAddress(currency, type, address, tag, trust, ticket) {
    return axios.post('/withdraw/coin/address/add', {ticket, currency, type, address, tag, trust})
  },
  // 删除提现地址
  getCoinDeleteAddress(currency, addressId) {
    return axios.post('/withdraw/coin/address/delete', {currency, addressId})
  },
  // 添加提现地址邮件确认
  getCoinConfirmAddress(ticket) {
    return axios.post('/withdraw/coin/address/add/confirm', {ticket})
  },
  // 添加提现地址邮件确认
  getCoinResendConfirmAddress(addressId) {
    return axios.post('/withdraw/coin/address/resend/email/confirm', {addressId})
  },
  // 主账户资产信息
  getAssetsMain() {
    return axios.post('/account/assets/main')
  },
  // 各账户资产明细信息
  getAssetsDetail() {
    return axios.post('/account/assets/detail')
  },
  // 获取用户融资融币账户资产接口
  getUserAssetsList() {
    return axios.post('/account/assets/lever')
  },
  // 转账请求
  transfer(data) {
    return axios.post('/account/transfer/request', data)
  },
  // 用户掉期账户可用余额和持仓状态
  swapsAvailable(currencyId) {
    return axios.post('/account/swaps/max/available', {currencyId: currencyId})
  },
  // Usdt账户最大可用余额
  usdtAvailable(currencyId) {
    return axios.post('/account/future/max/available', {currencyId: currencyId})
  },
  // 定期账户最大可用余额
  regularAvailable(currencyId) {
    return axios.post('/account/regularfuture/max/available', {currencyId: currencyId})
  },
  // 用户资产状况 （全部）
  getSitesAll(currency) {
    return axios.post('/account/assets/sites/all', {currency: currency})
  },
  /**
   * usdt-usd汇率
   * 获取 usdt-usd 汇率
   * http://192.168.200.54:8002/market/rate/usdt?currency=1
   * currency (0：人民币 1：美元 2：日元 3：韩国元 4：卢布)
   * **/
  getRateUsd(data) {
    return axios.get('market/rate/usdt?currency=' + data)
  }
}

export default accountApi
