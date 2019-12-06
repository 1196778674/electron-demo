const state = () => ({
  // 默认主题
  theme: 'black',
  // 工具条默认显示
  isToolBarShow: true,
  // 全屏工具条默认显示
  fullIsToolBarShow: true,
  // 浏览器宽度
  screenWidth: 0,
  // 浏览器高度
  screenHeight: 0,
  // 默认语言
  locale: 'cn',
  // 把必须使用 js 的颜色变量定义在这里
  themeColor: {
    black: {
      tradeRed: '#f14b4f',
      tradeGreen: '#0ab480',
      orderBookRed: 'rgba(35,31,45,1)',
      orderBookGreen: 'rgba(23,38,48,1)',
      navBgColor: '#121a2d',
      lineColor: '#182137',
      listBgColor: '#0e1524'
    },
    white: {
      tradeRed: '#f14b4f',
      tradeGreen: '#0ab480',
      orderBookRed: '#FFF1F1',
      orderBookGreen: '#EBF8F2',
      navBgColor: '#ffffff',
      lineColor: '#f5f6fa',
      listBgColor: '#0e1524'
    }
  },
  // 提示框是否提示数据
  promptBoxShowInfo: {},
  // 计算器是否打开
  calculatorIsShow: false,
  // 新手引导
  guideOld: true,
  guideFull: true,
  // 所有弹框的 z-index 控制
  layerBoxZIndex: 10000,
  /************************* 上部为已知作用的变量  *********************************** */

  barHeight: 0,
  barWidth: 46,
  boxHeight: 0,
  boxWidth: 0,
  mainSite: {},
  isExpand: false,
  product: [],
  contract: [],
  clickData: {
    price: null,
    size: null,
    type: null
  },
  navActive: null, // 合约指南中导航栏样式
  // postOnly 默认0
  placePostOnly: {
    no: 0, // 不是
    yes: 1 // 是
  },
  // timeInforce 默认1
  placeTimeInForce: {
    GTC: 1,
    IOC: 2,
    FOK: 3,
    post_Only: 4
  },
  // ????
  bits: {
    price: 8,
    priceMax: 8,
    size: 3,
    deep: [8, 7, 6]
  },
  figure: {
    // 仓位
    front: {
      priceInteger: 9,
      valueFloat: 4, // 委托价值 小数点保留 4 位
      priceFloat: 2, // 开仓价格保留2位
      fairPriceFloat: 2, // 标记价格保留2位
      liquidationFloat: 1, // 强平价格 小数点保留 1 位
      marginFloat: 4, // 保证金
      realisedFloat: 4, // 未实现盈亏 小数点保留 4 位 (加上单位BTC 会有负号)
      unRealisedFloat: 4, // 已实现盈亏 小数点保留 4 位 (加上单位BTC 会有负号)
      closeInputFloat: 1, // 平仓输入框 小数点保留 1 位
      unRealisedRatioFloat: 2 // 回报率
    },
    // 持有合约
    contract: {
      size: 9, // 合约数量最大9位
      unRealisedRatioFloat: 2,
      priceFloat: 1, // 开仓价格保留1位
      liquidationFloat: 1 // 强平价格 小数点保留 1 位
    },
    // 提交委托
    entrust: {
      priceInteger: 9,
      priceFloat: 1, // 限价 最多1位小数，且只能为0或5,
      size: 7,
      sizeFloat: 0,
      costFloat: 4, // 成本4位
      valueFloat: 4, // 委托价值 小数点保留 4 位
      balanceFloat: 4 // 可用余额 小数点保留 4 位
    },
    BTC: {
      entrust: {
        priceInteger: 9,
        priceFloat: 1, // 限价 最多1位小数，且只能为0或5,
        size: 7, // 仓位小于100000000（一亿） 9位
        sizeFloat: 0,
        costFloat: 4, // 成本4位
        valueFloat: 4, // 委托价值 小数点保留 4 位
        balanceFloat: 4 // 可用余额 小数点保留 4 位
      },
      // 仓位
      front: {
        priceInteger: 9,
        valueFloat: 4, // 委托价值 小数点保留 4 位
        priceFloat: 2, // 开仓价格保留2位
        fairPriceFloat: 2, // 标记价格保留2位
        liquidationFloat: 1, // 强平价格 小数点保留 1 位
        marginFloat: 4, // 保证金
        realisedFloat: 4, // 未实现盈亏 小数点保留 4 位 (加上单位BTC 会有负号)
        unRealisedFloat: 4, // 已实现盈亏 小数点保留 4 位 (加上单位BTC 会有负号)
        closeInputFloat: 1, // 平仓输入框 小数点保留 1 位
        unRealisedRatioFloat: 2 // 回报率
      },
      // 持有合约
      contract: {
        size: 9, // 合约数量最大9位
        unRealisedRatioFloat: 2,
        priceFloat: 1, // 开仓价格保留1位
        liquidationFloat: 1 // 强平价格 小数点保留 1 位
      },
      // 深度
      entrustList: {
        priceFloat: 1, // 标记价格保留2位
        coinFloat: 8, // 切换为币时8位小数
        fairPriceFloat: 2, // 标记价格保留2位
        indexPriceFloat: 2 // 指数价格小数2位
      },
      // 实时成交
      historyList: {
        priceFloat: 1,
        sizeFloat: 4
      },
      // K线
      kline: {
        priceFloat: 1
      }
    },
    EOS: {
      // 下单处
      entrust: {
        priceInteger: 9, // 价格整数部分
        priceFloat: 2, // 价格小数部分
        size: 9, // 没有小数最大9位
        sizeFloat: 0,
        costFloat: 4, // 成本4位
        valueFloat: 4, // 委托价值4位
        balanceFloat: 4 // 可用余额4位
      },
      // 仓位
      front: {
        priceInteger: 9,
        priceFloat: 2, // 开仓价格保留2位
        valueFloat: 4, // 委托价值 小数点保留 4 位
        fairPriceFloat: 2, // 标记价格保留2位
        liquidationFloat: 4, // 强平价格 小数点保留 4 位
        marginFloat: 4, // 保证金
        realisedFloat: 4, // 未实现盈亏 小数点保留 4 位 (加上单位BTC 会有负号)
        unRealisedFloat: 4, // 已实现盈亏 小数点保留 4 位 (加上单位BTC 会有负号)
        closeInputFloat: 1, // 平仓输入框 小数点保留 1 位
        unRealisedRatioFloat: 2 // 回报率
      },
      // 深度
      entrustList: {
        priceFloat: 2, // 标记价格保留2位
        coinFloat: 4, // 切换为币时8位小数
        fairPriceFloat: 2, // 标记价格保留2位
        indexPriceFloat: 2 // 指数价格小数2位
      },
      // 实时成交
      historyList: {
        priceFloat: 2,
        sizeFloat: 4
      },
      // K线
      kline: {
        priceFloat: 2
      }
    },
    BCH: {
      entrustList: {
        priceFloat: 2 // 标记价格保留2位
      }
    },
    ETH: {
      entrustList: {
        priceFloat: 2 // 标记价格保留2位
      }
    },
    LTC: {
      entrustList: {
        priceFloat: 2 // 标记价格保留2位
      }
    },
    // 为币时
    coin: {
      coinFloat: 8
    },
    // K线
    kline: {}
  },
  // 下单类型 type
  placeType: {
    limitOrder: 1, // 限价单
    markOrder: 2 // 市价单
  },
  // 买入方向 side
  placeSide: {
    buy: 1,
    sell: 2
  },
  placeTimeInForceName: ['', '(IOC)', '(FOK)', '(PO)'],
  showCalculateFloat: false,
  orderRight: true,
  shortcut: {}
})

let mutations = {
  // 存储快捷方式
  SET_SHIRTCUT(state, data) {
    state.shortcut[data.type]  = data.data
  },
  // 全屏k线的下蛋区域位置
  SET_ORDER_RIGHT(state, data) {
    state.orderRight = data
  },
  // 设置工具条显示隐藏
  SET_IS_TOOLBSR_SHOW(state, data) {
    state.isToolBarShow = data
  },
  // 设置工具条显示隐藏
  SET_FULL_IS_TOOLBSR_SHOW(state, data) {
    state.fullIsToolBarShow = data
  },
  // 修改主题
  SET_THEME(state, data) {
    state.theme = data
  },
  // 修改浏览器宽度
  SET_SCREEN_WIDTH(state, data) {
    state.screenWidth = data
  },
  // 修改浏览器高度
  SET_SCREEN_HEIGHT(state, data) {
    state.screenHeight = data
  },
  // 设置默认语言
  SET_LOCALE(state, data) {
    state.locale = data
  },
  // 设置提示框提示数据
  SET_PROMPT_BOX_SHOW_INFO(state, name) {
    state.promptBoxShowInfo = {
      ...state.promptBoxShowInfo,
      [name]: true
    }
  },
  // 设置计算器是否显示
  SET_CALCULATOR_IS_SHOW(state, status) {
    state.calculatorIsShow = status
  },
  // 设置新手引导
  SET_GUIDE_FULL(state, status) {
    state.guideFull = status
  },
  // 设置新手引导
  SET_GUIDE(state, status) {
    state.guideOld = status
  },
  // 设置弹框的 z-index 值
  SET_LAYER_BOX_Z_INDEX(state, zIndex) {
    state.layerBoxZIndex = zIndex
  },
  /***************************   上部为已知作用的方法     ********************************* */
  SET_BARHEIGHT(state, data) {
    state.barHeight = data
  },
  SET_BARWIDTH(state, data) {
    state.barWidth = data
  },
  SET_BOXHEIGHT(state, data) {
    state.boxHeight = data
  },
  SET_BOXWIDTH(state, data) {
    state.boxWidth = data
  },
  SAVE_MAINSITE(state, data) {
    state.mainSite = data
  },

  SAVE_SCROLLLEFT(state, data) {
    state.scrollLeft = data
  },
  SAVE_SCROLLTOP(state, data) {
    state.scrollTop = data
  },

  SET_EXPAND(state, data) {
    state.isExpand = data
  },
  SET_NAV(state, data) {
    state.navActive = data
  }
}

let getters = {
  // 当前主题颜色
  currentThemeColor(state) {
    return state.themeColor[state.theme]
  }
}

export default {
  state,
  mutations,
  getters
}
