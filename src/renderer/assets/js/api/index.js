import ToolsApi from './toolsApi'
import UsersApi from './userApi'
import TradeApi from './tradeApi'
import SwapsApi from './swapsApi'
import AccountApi from './swapsApi'

export default {
  install (Vue) {
    Vue.prototype.toolsApi = ToolsApi
    Vue.prototype.tradeApi = TradeApi
    Vue.prototype.usersApi = UsersApi
    Vue.prototype.swapsApi = SwapsApi
    Vue.prototype.accountApi = AccountApi
  }
}
