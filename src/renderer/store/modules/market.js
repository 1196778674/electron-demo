import Utils from '@/utils/utils'
// 导入 api
import SwapsApi from '@/api/swapsApi'
import _ from 'lodash'
import {reRepeatArr} from '@/utils/filter'

const state = () => ({
  // 合约列表(左侧菜单)
  contract: [],
  // 当前合约的信息
  currentContract: {},
  // market
  market: {},
  // K 线的状态
  KLineState: false,
  // K 线的类型
  kType: 2,
  // 默认 K 线分钟配置
  kTimeOptions: '5min',
  // k线时间存储
  kTimeStorage: '5',
  // socket 链接状态
  socketConnectState: false,
  // k线全部缓存数据
  kLineData: {},
  // 最后一条 K 线的时间
  kLastTime: {},
  // K 线右侧最新成交价,和大盘中最新成交价相同
  specialLastPrice: '',
  // K线是否初始化完成
  KLineIsInit: false,
  // K线是否初始化完成
  KLineIsInitFull: false,
  // 当前选中的指数价格---出现在操作区的 input 框中
  operatePrice: '',
  // 深度数据
  order: {},
  // orderbook 中买入的第一个数据,用于重新计算可开手数
  buyFirst: '',
  // orderbook 中卖出的最后一条数据,用于重新计算可开手数
  sellLast: '',
  // 未实现盈亏,
  unrealised: 0,
  // 实时成交价订单数组
  historyList: [],
  // 所有指数价格数组
  indexPrice: {},
  // socket 推送内容
  wsOrder: null,
  // ticker
  tickers: {},
  // 所有仓位列表
  allPositionsList: [],
  // 深度第一次连接 socket
  firstOrder: false,
  // 委托列表数据(为了委托列表小红点使用)
  currentList: [],
  // k线最新的时间
  timeLast: null,
  // 是否显示资产
  isShowAssets: true
})

let mutations = {
  // 设置是否显示资产
  SET_IS_SHOW_ASSETS(state, data) {
    state.isShowAssets = data
  },
  // 设置当前合约的信息
  SET_CURRENT_CONTRACT(state, data) {
    state.currentContract = {...data}
  },
  // 设置合约列表
  SET_CONTRACT(state, data) {
    state.contract = data
  },
  // 设置 K 线的状态
  SET_KLINESTATE(state, data) {
    state.KLineState = data
  },
  // 设置 K 线类型
  SET_KTYPE(state, data) {
    state.kType = data
  },
  // 设置 K 线时间 配置
  SET_KTIME_OPTIONS(state, data) {
    state.kTimeOptions = data
  },
  // 设置 k 线存储
  SET_KTIME_STORAGE(state, name) {
    state.kTimeStorage = name
  },
  // 设置最后一条 K 线的时间
  SET_KLASTTIME(state, data) {
    state.kLastTime[data.id + '_' + data.time] = data.data
  },
  SET_TIME(state, data) {
    state.timeLast = data
  },
  // 修改 socket 链接状态
  SET_SOCKET_CONNECT_STATE(state, data) {
    state.socketConnectState = data
  },
  // 存储k线数据
  SET_KLINEDATA(state, data) {
    let oldKLineData = state.kLineData[data.id + '_' + data.time] || []
    state.kLineData[data.id + '_' + data.time] = _.uniqBy(
      [].concat(oldKLineData, data.data),
      value => {
        return value.time
      }
    )
  },
  // 设置 K 线右侧高亮的值
  SET_SPECIALLASTPRICE(state, data) {
    state.specialLastPrice = data
  },
  // 设置 K 线初始化情况
  SET_K_LINE_IS_INIT(state, data) {
    state.KLineIsInit = data
  },
  // 设置 K 线初始化情况
  SET_K_LINE_IS_INIT_FULL(state, data) {
    state.KLineIsInitFull = data
  },
  // 设置当前选中的指数价格---出现在操作区的 input 框中
  SET_OPERATEPRICE(state, data) {
    state.operatePrice = data
  },
  // 设置 Tickers
  SET_TICKERS(state, data) {
    state.tickers[data.productId] = data
    state.tickers = Utils.deepCopy(state.tickers)
  },
  // 设置 Market
  SET_MARKET(state, data) {
    state.market = {
      ...state.market,
      [data.contractId]: data
    }
  },
  // 设置深度数据
  SET_ORDER(state, data) {
    // state.order[data.id] = data.data
    // state.order = Utils.deepCopy(state.order)
    state.order = {
      ...state.order,
      [data.id]: data.data
    }
  },
  // 设置 orderbook 中卖出的第一个数据
  SET_SELLLAST(state, data) {
    state.sellLast = data
  },
  // 设置 orderbook 中买入的第一个数据
  SET_BUYFIRST(state, data) {
    state.buyFirst = data
  },
  // 设置实时成交价
  SET_HISTORYLIST(state, data) {
    state.historyList = data.length? data : Array.from({length: 100}).map(item => ({
      price: 0,
      side: 0,
      size: 0,
      createdDate: 0
    }))
  },
  // 仓位计算未实现盈亏，供我的资产合约使用
  SET_UNREALISED(state, data) {
    state.unrealised = data
  },
  // 所有指数价格数组
  SET_INDEX_PRICE(state, data) {
    state.indexPrice = data
  },
  // 设置所有仓位列表
  SET_ALL_POSITIONS_LIST(state, list) {
    state.allPositionsList = list
  },
  // 设置深度第一次连接 socket
  SET_FIRSTORDER(state, data) {
    state.firstOrder = data
  },
  // 设置 socket 委托信息
  SET_WS_ORDER(state, data) {
    state.wsOrder = data || null
  },
  // 设置委托列表
  SET_CURRENT_LIST(state, data) {
    state.currentList = data
  }
}

let actions = {
  // 获取合约列表
  async getContractList({commit, state}) {
    try {
      let re = await SwapsApi.getContractAllList()
      let contractList = re.data.contractList || []
      contractList = _.uniqBy(contractList, 'id')
      contractList.forEach(item => {
        if (!item.contractParam) {
          item.contractParam = {}
        }
      })
      commit('SET_CONTRACT', contractList)
    } catch (error) {
      console.log(error)
      console.log('没有合约信息')
    }
  },
  // 合并深度，在永续合约的基础上做了一部分修改（断线重连确保数据准确性）
  saveOrder({commit, state}, payload) {
    commit('SET_ORDER', {
      id: payload.product,
      data: orderBookData(commit, state, payload.data, payload.product)
    })
  },
  // 获取委托列表
  async getCurrentList({commit, state}) {
    try {
      let re = await SwapsApi.getOrderList({
        status: '0,1',
        page: 1,
        pageSize: 200
      })
      let list = (re.data && re.data.orderList) || []
      commit('SET_CURRENT_LIST', list)
    } catch (error) {
      commit('SET_CURRENT_LIST', [])
      console.error(error)
    }
  }
}

function orderBookData(commit, state, data, id) {
  if (state.firstOrder) {
    commit('SET_FIRSTORDER', false)
    return data
  }
  let oldData = state.order[id]
  if (!oldData || !state.socketConnectState) return data
  let obj = {}
  obj['asks'] = formatOrderBook(oldData, data, 'asks')
  obj['bids'] = formatOrderBook(oldData, data, 'bids')
  return obj
}

/**
 * 在旧数据的基础上合并新数据
 * 逻辑:
 *  1.新数据如果在老数据中存在,数量使用新数据的
 *  2.新数据在老数据中没有的话,合并到老数据
 *  2.处理过的数据要从小到大排序
 *  3.处理过的数据不能有数量为 0
 *
 */
function formatOrderBook(oldData, data, type) {
  if (!data[type].length) return oldData[type]
  // 合并
  let newData = [...data[type], ...oldData[type]]
  // 去重
  let uniq = _.uniqBy(newData, item => Number(item[0]));
  // 去除数量为 0
  let filter = uniq.filter(item => Number(item[1]) !== 0);
  // 排序
  let sort = filter.sort((a, b) => Number(a[0]) - Number(b[0]));
  return sort
}

export default {
  state,
  mutations,
  actions
}
