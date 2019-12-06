import guide from './cn/guide.js'
import handbook from './cn/handbook.js'
import direct from './cn/direct.js'
import reference from './cn/reference.js'
import entrust from './cn/entrust.js'
import wallet from './cn/wallet.js'
import regular from './cn/regular'

let ZH = {
  // 全屏
  full: {
    trade: '交易',
    moreStopLossProfit: '多单止盈止损',
    lessStopLossProfit: '空单止盈止损',
    moreAvePrice: '多单持仓均价',
    moreLoss: '多损',
    moreProfit: '多盈',
    lessAvePrice: '空单持仓均价',
    lessLoss: '空损',
    lessProfit: '空盈',
    loss: '亏损',
    profit: '盈利',
    positions: '仓位',
    delete: '删除',
    deleteMoreStopLoss: '确定删除当前多单止损设置吗？',
    deleteMoreStopProfit: '确定删除当前多单止盈设置吗？',
    deleteLessStopLoss: '确定删除当前空单止损设置吗？',
    deleteLessStopProfit: '确定删除当前空单止盈设置吗？',
    guideDrag: '交易面板可以随意拖动哦',
    guideOrderRight: '点击箭头图标按钮交易操作面板可置左或置右哦',
    guideSelectCurrency: '点击下拉菜单弹出行情列表第二入口哦',
    guideTab: '点击此按钮或“Tab”键可收起/展开合约列表哦',
    guideTrade: '点击“空格”键或交易按钮可收起/展开交易面板哦',
    smallGuideKline1: '双击K线区域可进入/退出专业版交易哦',
    smallGuideKline2: '上下拖动多/空单持仓线可快速止盈止损哦'
  },
  common: {
    success: "操作成功！",
    noData: "暂无数据",
    more: "查看更多",
    tip: "提示"
  },
  header: {
    power: "比特算力",
    index: "首页",
    deposit: "充值",
    withdraw: "提现",
    // notice: '公告',
    login: "登录",
    register: "注册",
    asset: "资产",
    user: "账户",
    logout: "退出",
    trade: "币本位合约",
    usdtTrade: "USDT合约",
    regularContract: "季度合约",
    guide: "合约指南",
    reference: "参考信息",
    information: "资产信息",
    newPlayer: "新手指南",
    userShow: "合约赢家秀",
    changeOldVersion: "切换旧版",
    userSafe: "账户安全",
    devTool: "开发者工具",
    invite: "我的邀请",
    userAuth: "身份认证",
    safeExit: "安全退出",
    lastLogin: "上次登录地点",
    marketableAssets: "净资产折合（{current}）",
    tradeHistory: "交易历史"
  },
  footer: {
    products: "系列产品",
    about_us: "关于我们",
    about_us_1: "公司介绍",
    about_us_2: "团队介绍",
    about_us_3: "联系我们",
    about_us_4: "官方公告",
    service_support: "服务支持",
    service_support_1: "API 文档",
    service_support_2: "帮助中心",
    service_support_3: "数字资产介绍",
    service_support_4: "上币申请及说明",
    service_support_5: "SMARTChain",
    official_community: "官方社群",
    official_community_1: "Telegram",
    official_community_2: "Wechat",
    official_community_3: "QQ群",
    downLoad: "相关下载",
    downLoad_1: "iOS App",
    downLoad_2: "Android App",
    downLoad_3: "Google Play",
    follow: "关注我们",
    global: "58COIN GLOBAL"
  },
  //  未登录
  noSign: {
    sign_in: "登录",
    sign_up: "注册",
    no_sign: "您还未登录账户",
    please: "请",
    deal: "再进行交易吧"
  },
  // 提交委托
  trade: {
    titleName: "提交委托",
    placeOrderDefault: "手",
    placeOrderBTC: "比特币",
    unitChange: "单位切换",
    orderType: "订单类型",
    limit: "限价",
    market: "市价",
    entrustPlan: "计划委托",
    price: "价格",
    triggerPrice: "触发价格",
    executePrice: "执行价格",
    quantity: "仓位",
    buy: "买入",
    long: "做多",
    input: "请输入",
    sell: "卖出",
    short: "做空",
    cost: "占用保证金",
    layerCost: "持仓保证金",
    orderValue: "委托价值",
    availableBalance: "可用余额",
    // 传给弹窗的信息
    markPrice: "标记价格",
    positionAfter: "成交后仓位大小",
    title: "确认您的委托",
    transfer: "资金划转",
    buyIn: "买入",
    doMore: "做多",
    sellOut: "卖出",
    doNull: "做空",
    openPosition: "开仓",
    closePosition: "平仓",
    error300016: "操作过于频繁，请于 $ 秒后重试",
    leverage: "杠杆", // 0528
    latestDeal: "最新成交价",
    timeDeal: "实时成交价",
    depth: "合并深度",
    latestPrice: "最新价",
    gains: "涨幅",
    // sizeMaxError: '下单量过大',
    sizeMaxError: "可用资金不足",
    sizeMinError: "下单量小于最小交易单位"
  },
  tradePrompt: {
    price: "请输入正确价格",
    size: "请输入正确仓位",
    triggerPrice: "请输入正确触发价格",
    doPrice: "请输入正确执行价格"
  },
  transform: {
    from: "从",
    turnOutAccount: "选择转出账户",
    transferTo: "转账至",
    transferAccount: "转账数量",
    swapAccount: "USDT合约账户",
    inputAccount: "输入转账数量",
    maxTransform: "最多转账",
    allTransform: "全部转账",
    transform: "转账",
    internalTransfer: "内部转账不收手续费",
    tips: "提示：在持仓状态下转出后",
    strongLevel: "您的强平线将会重新计算。",
    tipsContent:
      "转出金额过多将会增大您的爆仓风险。\n" +
      "          为了避免不必要的损失,请您在账户中预留足够的保证金以应对行情波动。\n" +
      "          有持仓状态下可以转出余额的{percentage},无持仓状态下可以全部转出。",
    same: "转出账户和转入账户不能相同",
    transferUsdtTip:
      "提示：在持仓状态下转出后，您的风险度将会重新计算。转出金额过多将会增大您的爆仓风险。为了避免不必要的损失请您在账户中预留足够的保证金以应对行情波动。有持仓状态下可以转出本金的{percentage}，浮盈可用但不可转出。无持仓状态下可以全部转出。",
    transferRegularTip:
      "提示：在持仓状态下转出后，您的风险度将会重新计算。转出金额过多将会增大您的爆仓风险。为了避免不必要的损失请您在账户中预留足够的保证金以应对行情波动。有持仓状态下可以转出本金的{percentage}，浮盈可用但不可转出。无持仓状态下可以全部转出。已实现盈亏在结算计入本金后可以全部转出。"
  },
  // 调节杠杆
  leverage: {
    title: "持有仓位",
    contract: "合约",
    ROE: "回报率",
    all: "全仓 ",
    leverage: "杠杆",
    fundingRatio: "互换补偿率",
    cross: "全仓杠杆", // 0515
    crossTimes: "全仓{times}X", // 0515
    tip1: "多仓 = (1 - 开仓价格/标记价格) * 杠杆",
    tip2: "空仓 = (开仓价格/标记价格 - 1) * 杠杆",
    low: "低", // 0515
    high: "高", // 0515
    risk: "仓位风险" // 0515
  },
  // 参考信息
  referenceInfo: {
    title: "参考信息",
    more: "更多资料",
    exchange: "交易所指南",
    contract: "合约指南",
    markPrice: "合理价格(标记价格)",
    earnLoss: "利润/损失指南",
    fee: "费用",
    questions: "常见问题"
  },
  // 行情信息
  productInfo: {
    markPrice: "标记价格",
    lastPrice: "最新成交价",
    increase: "涨幅",
    price: "未平仓合约价值",
    feeRatio: "互换补偿率",
    size: "24h成交量",
    sizeBTC: "24h成交量({type})",
    highPrice: "最高价",
    lowPrice: "最低价",
    fundingRate: "互换率",
    prompt: "互换补偿率在±0.03%范围内，不进行互换。"
  },
  // 委托
  createdEntrust: {
    submitOrder: "提交委托",
    limit: "限价",
    market: "市价",
    price: "价格",
    positions: "仓位",
    lot: "手",
    leverageInfo: "杠杆：目前提供多倍杠杆。高倍杠杆将增加风险，请谨慎使用。",
    limitInfo:
      "限价：执行时必须按照限定价格或更好的价格成交的指令。下达限价指令时，您必须指明具体的价位。",
    buyable: "可开",
    salable: "可卖",
    openlong: "开多",
    closelong: "空平",
    openshort: "开空",
    closeshort: "多平",
    // 确认委托弹出框
    A_confirmOrder: "确定委托",
    A_buy: "买入开仓",
    A_contract: "合约",
    A_leverage: "杠杆",
    A_direction: "方向",
    A_market: "市价",
    A_type: "委托方式",
    A_price: "委托价格",
    A_Amount: "委托数量",
    A_margin: "占用保证金",
    A_riskLevel: "当前风险度",
    A_ror: "收益率",
    A_sell: "卖出开仓",
    A_limit: "限价",
    A_buy_flat: "买入平仓",
    A_sell_flat: "卖出平仓",
    A_buy_title: '买入<span style="color:{color};">{num}</span>手{name}合约',
    A_sell_title: '卖出<span style="color:{color};">{num}</span>手{name}合约',
    marketInfo:
      "市价：按当时市场价格即刻成交的指令。您在下达这种指令时无需指明具体的价位，而是要求以当时市场上可执行的最好价格达成交易。可能会产生较大的风险。",
    positiveNum: "请输入正数",
    positiveInteger: "请输入正整数",
    importPrice: "请输入价格",
    contractHand: "请输入合约手数",
    noLeveling: "没有可平仓位",
    limitNum: "下单手数超过限制数量",
    positions_tips:
      "仓位价值之和*MM/当前资产（风险率100%时，将进入爆仓流程，请注意您的风险率水平。）",
    explosion:
      "以该价格向市场委托可能导致强平，请先检查您是否有挂单，并以更合理的价格进行委托。",
    hand:
      "交易单位（手）：也称为合约规模，是指在交易所交易的每手合约代表的标的物的数量。eg: 1{hand}{name} = {value}{tableName}",
    explosionConfirm: "继续委托",
    explosionProof: "防爆仓开启",
    positionValue: "仓位价值"
  },

  // 币种列表，最新成交列表
  tradeList: {
    latestPrice: "最新价",
    gains: "涨幅",
    latestDeal: "最新成交价",
    timeDeal: "实时成交价"
  },
  // 用户资产信息  我的合约资产
  asset: {
    fundLeverage: "资金杠杆",
    fundUtilizationRate: "资金使用率",
    contractAsset: "我的合约资产",
    currentAssets: "当前资产",
    availableAssets: "可用资产",
    margin: "占用保证金",
    frozenDeposit: "冻结保证金",
    unRelease: "未实现盈亏",
    alreadyRealized: "当日已实现",
    commissionFee: "当日手续费",
    riskDegree: "风险度",
    riskDegreeInfo: "风险率100%时，将进入爆仓流程，请注意您的风险率水平。",
    transform: "资金转入",
    transfer: "转账"
  },
  // 列表
  transactionList: {
    maintain: "维持保证金率",
    elpTips1: "预估强平价：",
    elpTips2: "预估价格不代表真实强平价格，仅作参考。",
    elpTips3:
      "多币种持仓需同时满足所有币种强平价格才能真正触发强平。系统不会对多持仓状态下的单独币种进行强平。",
    strongParity: "预估强平价",
    returnPrice: "按触发价格将收益",
    lossPirce: "按触发价格将亏损",
    returnPrice1: "按执行价格将收益",
    lossPirce1: "按执行价格将亏损",
    emptyBill: "空单",
    moreBill: "多单",
    profitDeficit: "止盈止损",
    profitLoss: "盈损",
    triggerPrice: "触发价格",
    mode: "方式",
    executionPrice: "执行价格",
    number: "数量",
    stopProfit: "止盈",
    stopLoss: "止损",
    triggerOrder: "计划委托",
    newOrder: "未触发",
    SuccTrigger: "触发成功",
    canceled: "手动取消",
    triggerFailed: "触发失败",
    Expired: "爆仓取消",
    cancel: "平仓取消",
    liquidationCancel: "取消",
    reorder: "重挂",
    all: "全部",
    chongzhi: "重置",
    queding: "确定",
    zdjc: "自动减仓",
    qpwt: "强平委托",
    positions: "仓位",
    currentEntrustment: "当前委托",
    excuted: "已成交",
    records: "撤销记录",
    closeAll: "一键平仓",
    batchCancel: "批量撤单",
    prompt:
      "一键全平仅支持市价报单方式（针对可用持仓），可能会产生较大的风险，请谨慎使用。",
    currency: "币种",
    openLeve: "开平",
    commissionPrice: "委托价格",
    commissionAmount: "委托量",
    retractable: "可撤",
    dealDone: "已成交",
    status: "状态",
    time: "时间",
    operate: "操作",
    type: "类型",
    reamaining: "撤销量",
    excutedPrice: "成交价格",
    excutedAmount: "成交数量",
    fee: "手续费",
    totalPosition: "总仓",
    available: "可用",
    avgPrice: "持仓均价",
    actualLeverage: "实际杠杆",
    pnl: "盈亏",
    occupationMargin: "占用保证金",
    unrealisedPNL: "未实现盈亏",
    profitability: "盈利率",
    closePosition: "平仓",
    total: "总计",
    expand: "展开",
    collapse: "收起",
    noPosition: "暂无仓位",
    noData: "暂无数据",
    more: "多",
    less: "空",
    buy: "买",
    Sell: "卖",
    // S_***  列表中用到的状态
    S_openPosition: "开",
    S_closePosition: "平",
    S_Unfilled: "未成交",
    S_PartialDeal: "部分成交",
    S_DealDone: "已成交",
    S_Revoked: "已撤销",
    S_failure: "失败",
    S_LimitPrice: "限价",
    S_MarketPrice: "市价",
    // A_**** 弹出框中用到的
    A_Confirm: "确认",
    A_Cancel: "取消",
    A_One_Title: "确定撤销此委托单吗？",
    A_One_Info: "执行时，将撤销该委托单",
    A_All_FullFlat_Title: "确认全平？",
    A_All_FullFlat_Info:
      "您的全部仓位将以市价方式向市场报单平仓，您的盈亏将受到市场深度的影响，请在悉知风险的情况下使用。",
    A_All_Cancel_Title: "确定一键撤销全部委托单么？",
    A_All_Cancel_Info: "执行时，将撤销全部委托单",
    A_Close: "平仓",
    A_LimitPrice: "限价",
    A_MarketPrice: "市价",
    A_Price: "价格",
    A_Amount: "平仓数量",
    A_Hand: "手"
  },
  // 订单详情
  tradeDetailList: {
    qrqp: "确认全平？",
    qpinfo:
      "您的全部仓位将以市价方式向市场报单平仓，您的盈亏将受到市场深度的影响，请在悉知风险的情况下使用。",
    qcinfo: "执行时，将撤销全部委托单",
    cancelAll: "确定一键撤销全部委托单么？",
    cdtitle: "确定撤销此委托单吗？",
    cdinfo: "执行时，将撤销该委托单",
    // USDT/合约
    currency: "币种",
    totalwarehouse: "总仓",
    available: "可用",
    equalStockPrice: "持仓均价",
    realLever: "实际杠杆",
    occupancyBond: "占用保证金",
    unrealizedPL: "未实现盈亏",
    profitRate: "盈利率",
    operate: "操作",
    closePosition: "平仓",
    total: "总计",
    openMore: "展开",
    closeMore: "收起",
    // 当前委托
    kaiping: "开平",
    entrustPrice: "委托价格",
    entrustment: "委托量",
    residualQuantity: "剩余量",
    revocable: "可撤",
    already: "已成交",
    status: "状态",
    date: "时间",
    // 已成交
    type: "类型",
    dealSize: "成交数量",
    dealPrice: "成交价格",
    dealFee: "手续费",
    // USDT end
    position: "仓位",
    current: "当前委托",
    record: "撤销记录",
    planOrder: "计划委托",
    currencyPlan: "当前计划",
    historyPlan: "历史计划",
    information: "资产信息",
    contract: "合约",
    contractTip: "此仓位的合约代码",
    positionQty: "目前仓位数",
    orderValue: "价值",
    positionOrderValue: "仓位价值",
    positionOrderValueTip: "您在此合约的价值",
    entryPrice: "开仓价格",
    entryPriceTip: "平均买入/卖出价格",
    markPrice: "标记价格",
    markPriceTip:
      "这是合约的最新的标记价格，此价格用于计算盈亏和保证金，并有可能与合约最新成交价格有偏差以避免市场操作，这不会影响结算",
    liquidationPrice: "强平价格",
    liquidationPriceTip:
      "如果该合约的标记价格低于该价格(多仓)或高于该价格(空仓),您将会被强制平仓",
    margin: "保证金",
    ratio: "回报率%",
    ratioTip1: "多仓 = (1 - 开仓价格/标记价格) * 杠杆",
    ratioTip2: "空仓 = (开仓价格/标记价格 - 1) * 杠杆",
    realised: "已实现盈亏",
    unrealised: "未实现盈亏",
    unrealisedTip1: "未实现盈亏(多) = 仓位数量 * （1/开仓价格 - 1/标记价格)",
    unrealisedTip2: "未实现盈亏(空) = 仓位数量 * （1/标记价格 - 1/开仓价格)",
    more: "多",
    less: "空",
    piece: "手",
    revocation: "撤销",
    size: "数量",
    price: "价格",
    completeDeal: "已成交",
    surplus: "剩余",
    value: "委托价值",
    executePrice: "执行价格",
    triggerPrice: "触发价格",

    closed: "平仓",
    closedMark: "(平仓)", // 0528
    market: "市价",
    limit: "限价",
    batchRevocation: "批量撤单",
    noPosition: "暂无仓位",
    changeMargin: "调节保证金",
    // closePosition: '平仓操作',
    textPosition: "所持仓位正在委托平仓",
    error300016: "操作过于频繁，请于{time}秒后重试",
    revocationSuccess: "已撤销订单！",
    // 资产信息
    walletBalance: "钱包余额",
    walletBalanceTip: "钱包余额 = 可用余额 + 冻结保证金 + 仓位保证金",
    marginBalance: "保证金余额",
    usefulBalance: "可用余额",
    usefulBalanceTip: "您可以用于开仓的保证金", // 0601
    userEquity: "用户权益",
    userEquityTip: "您在当前永续合约的总权益",
    positionMargin: "仓位占用保证金", // 0601
    positionMarginTip: "仓位开仓时占用的保证金",
    noData: "无资产信息",
    // 0515
    closedLimit: "限价平仓",
    closedMarket: "市价平仓",
    none: "暂无"
  },
  // information-list 深度
  entrustList: {
    lastPrice: "最新成交价",
    size: "数量",
    BTC: "数量",
    price: "价格",
    amount: "总量",
    indexPrice: "指数价格",
    fairPrice: "标记价格",
    deep: "合并深度",
    bit: "位"
  },
  // history-list 历史成交
  historyList: {
    title: "实时成交",
    size: "数量",
    price: "价格",
    date: "时间"
  },
  // 弹窗按钮
  layerButton: {
    cancel: "取消",
    confirm: "确认"
  },
  // 委托(交易)弹窗
  layerTrade: {
    all: "全仓 100X",
    leverage: "杠杆",
    title: "确认您的委托",
    limit: "限价",
    market: "市价",
    buy: "买入",
    sell: "卖出",
    cross: "全仓",
    // textType1Coin: '{side}在{price}价格{size}个{name}',
    // textType1: '{side}在{price}价格{size}手{name}合约',
    // textType2Coin: '以{type}{side}{size}个{name}',
    // textType2: '以{type}{side}{size}手{name}合约',
    textType1Coin: "{side}{size}个{name}",
    textType1: "{side}{size}手{name}合约",
    textType2Coin: "{side}{size}个{name}",
    textType2: "{side}{size}手{name}合约"
  },
  // 平仓弹窗
  layerClosed: {
    limit: "限价",
    market: "市价",
    buy: "买入",
    sell: "卖出",
    textType1Coin: "确定{side}以 {price} {type} {size} 手{name}吗？",
    textType1: "确定{side}以{price}{type}{size}手{name}合约吗？",
    textType2Coin: "以{type}{side}{size}手{name}吗？",
    textType2: "以{type}{side}{size}手{{name}合约吗？",
    text3: "执行时，将平掉您的仓位",
    text4: "执行时，将撤销全部委托单",
    text5: "执行时，将撤销该委托单"
    // textType1Coin: '{side}{size}个{name}',
    // textType1: '{side}{size}手{name}合约',
    // textType2Coin: '{side}{size}个{name}',
    // textType2: '{side}{size}手{name}合约',
    // text3: '执行时，将平掉您的仓位'
  },
  layerMargin: {
    add: "增加保证金",
    reduce: "减少保证金",
    position: "您的当前仓位",
    usefulMargin: "可用保证金"
  },
  // 平仓弹窗 0515
  layerPositionClosed: {
    placeHolderPrice: "请输入价格",
    placeHolderSize: "请输入数量",
    all: "全部",
    surplus: "剩余可平仓位",
    closed: "执行平仓",
    tip1: "当前委托单可能触发其他平仓单的撤销机制，是否确认执行?" // 0528
  },
  // 收益计算器
  calculate: {
    title: "收益计算器",
    profitCal: "收益计算",
    goalPriceCal: "目标价计算",
    liquidationCal: "强平价计算",
    contract: "合约",
    type: "开仓类型",
    leverage: "杠杆",
    unit: "单位",
    openPrice: "开仓价格",
    closePrice: "平仓价格",
    amount: "开仓数量",
    balance: "合约余额",
    goalProfit: "目标收益",
    useProfit: "按预期收益",
    useProfitRate: "按预期收益率",
    calculate: "开始计算",
    result: "计算结果",
    margin: "保证金",
    profit: "收益",
    profitRate: "收益率",
    goalClosePrice: "目标平仓价格(USDT)",
    liquidationPrice: "强制平仓价格(USDT)",
    more: "多",
    less: "空",
    piece: "手",
    tips: "注：实际交易中因存在手续费，可能导致计算结果与交易结果不完全一致。",
    warningTips1: "超过合理范畴，多单情况下，预期收益需小于开仓数量",
    warningTips2: "超过合理范畴，多单情况下，预期收益率不能超过杠杆倍数",
    positionROR: "仓位收益率",
    principalROR: "本金收益率"
  },
  // 右侧工具栏
  toolbar: {
    ewm: "扫码下载APP体验吧",
    ztqh: "主题切换",
    userCenter: "个人账户",
    announcement: "公告",
    jsq: "计算器",
    yhfk: "用户反馈",
    lxkf: "联系客服",
    hyzn: "合约指南",
    ewCode: "二维码"
  },
  // 公告弹窗
  layerAnnouncement: {
    title: "公告"
  },
  panel: {
    text: "永续"
  },
  // 推送弹窗 0515
  emerge: {
    prompt: "提示",
    limit: "限价",
    market: "市价",
    buy: "买入",
    sell: "卖出",
    leverage: "杠杆",
    margin: "保险金",
    adjustLeverage: "调节杠杆",
    adjustMargin: "调节保险金",
    entrustSend: "委托已提交",
    entrustSuccess: "委托成功",
    entrustPart: "委托部分成交",
    entrustAll: "委托全部成交",
    entrustFailed: "委托提交失败",
    marketEntrustPart: "市价部分成交",
    revocationSuccess: "撤单成功",
    revocationBachSuccess: "批量撤单成功",
    revocationFailed: "撤单失败",
    text1: "以{type}{price}{side}{size}"
  },
  // trade index 0515
  index: {
    usdt_title: "线性合约",
    titlePart: "-全球数字货币交易平台领跑者",
    titleAll: "SWAP-全球数字货币交易平台领跑者",
    spot: "币币",
    cloudy: "云算力",
    otc: "C2C",
    swap: "互换合约",
    spot_trading: "现货交易",
    futures: "期货交易",
    mine_pool: "矿池",
    sign_in: "登录",
    sign_up: "注册",
    logout: "退出",
    user: "账户",
    "product-title1": "抵押贷款",
    "product-title2": "永续合约",
    "product-title3": "融资融币",
    "product-title4": "币币交易",
    "product-title5": "法币OTC",
    product_title1_c_1: "盘活存量数字资产",
    product_title1_c_2: "抵押率高",
    product_title1_c_3: "利率低",
    product_title1_c_4: "可重复借贷",
    product_title1_c_5: "资金用途无限制",
    product_title1_c_6: "解决资金周转难题",
    product_title2_c_1: "最人性化的合约设计",
    product_title2_c_2: "没有定点爆仓",
    product_title2_c_3: "没有摊平亏损",
    product_title2_c_4: "没有交割日期",
    product_title2_c_5: "没有持仓成本",
    product_title2_c_6: "极佳的深度与流动性",
    product_title3_c_1: "最高三倍杠杆",
    product_title3_c_2: "利率行业最低",
    product_title3_c_3: "给本金加杠杆",
    product_title3_c_4: "给收益大空间",
    product_title3_c_5: "支持多空双向",
    product_title4_c_1: "支持数字资产交换",
    product_title4_c_2: "手续费低",
    product_title4_c_3: "数百个交易对",
    product_title4_c_4: "网罗价值币种",
    product_title4_c_5: "高效撮合交易",
    product_title5_c_1: "支持法币获取数字资产",
    product_title5_c_2: "零交易手续费",
    product_title5_c_3: "平台担保",
    product_title5_c_4: "零广告费",
    product_title5_c_5: "保证买卖双方利益",
    btn: "查看详情",
    service_title: "58COIN  一站式数字资产服务平台",
    service_title1: "产研创新一流",
    service_title1_content1: "首创永续合约",
    service_title1_content2: "首创抵押贷款",
    service_title2: "资金实力雄厚",
    service_title2_content1: "矿池全球前十",
    service_title2_content2: "坐拥上万BTC",
    service_title3: "顶尖技术保障",
    service_title3_content1: "核心成员来自BAT、OKEx等",
    service_title3_content2: "多层加密，高度安全，超高效率",
    service_title4: "24h专线客服",
    service_title4_content1: "百万用户 快速响应",
    service_title4_content2: "多语言服务 沟通无国界",
    down_load_title: "随时随地 流畅交易",
    down_load_content1: "实时撮合交易 · 秒速充提到账",
    down_load_content2: "合约杠杆抵押 · 指尖随心体验",
    products: "系列产品",
    about_us: "关于我们",
    about_us_1: "公司介绍",
    about_us_2: "团队介绍",
    about_us_3: "联系我们",
    about_us_4: "官方公告",
    service_support: "服务支持",
    service_support_1: "API",
    service_support_2: "帮助中心",
    service_support_3: "数字资产介绍",
    service_support_4: "上币申请及说明",
    official_community: "官方社群",
    official_community_1: "Telegram",
    official_community_3: "QQ群",
    official_community_4: "微信群",
    official_community_5: "API交流群",
    follow: "关注我们",
    weChat: "扫码加入微信群",
    api: "扫码加入API交流群",
    fee: "HOT ! ! !",
    hot: "HOT",
    returnTop: "返回顶部",
    see_more: "查看更多",
    downLoad: "相关下载",
    addSuccess: "添加自选成功"
  },
  // 充值状态
  depositStates: {
    WAIT: "等待入账",
    WAIT_CONFIRM: "等待入账",
    SUCCESSED: "充值成功",
    FAILED: " 充值失败"
  },
  source: {
    PC: "网页",
    API: "API",
    IOS: "IOS",
    Android: "Android"
  },
  // 订单状态
  orderStatusList: {
    // name1: '全部',
    name2: "未成交",
    name3: "下单失败",
    name4: "完全成交",
    name5: "已撤销"
  },
  // 订单状态--计划委托
  planOrderStatusList: {
    name1: "未触发",
    name2: "已触发",
    name3: "取消"
  },
  // 订单类型
  orderTypeList: {
    limit: "限价",
    market: "市价",
    plan: "计划"
  },
  // 爆仓类型
  orderLiquidationList: {
    liquidation: "强平委托",
    ADL: "自动减仓"
  },
  confirm: {
    cancel: "取消",
    determine: "确定"
  },
  filter: {
    onPage: "上一页",
    nextPage: "下一页",
    select: "选择交易",
    status: "成交状态",
    noData: "暂无数据",
    undo: "撤销",
    buy: "买入",
    sell: "卖出",
    marketPrice: "市价",
    withdrawal: "撤单",
    withdrawalAll: "撤销全部订单",
    viewHistoryWithdrawal: "查看历史委托",
    determineWithdrawal: "确定撤销此委托单吗？",
    cancelAll: "确定一键撤销全部委托单么？",
    wattNotCompletedListOne: "委托时间",
    wattNotCompletedListTwo: "类型",
    wattNotCompletedListThree: "委托价格",
    wattNotCompletedListFour: "平均成交价",
    wattNotCompletedListFive: "委托数量",
    wattNotCompletedListSix: "成交数量",
    wattNotCompletedListSeven: "委托来源",
    wattNotCompletedListEight: "状态",
    wattNotCompletedListNine: "操作",
    wattNotCompletedListTen: "部分成交",
    wattNotCompletedListEleven: "交易对",
    type: "订单类型",
    remainAmount: "剩余量",
    volume: "成交量",
    entrustHistory: "历史委托",
    entrust: "未成交委托"
  },
  errorCode: {
    601: "该账户不支持的币种",
    602: "转出账户余额不足",
    603: "转入转出账户不能为同一个",
    604: "转账金额不能小于0",
    605: "当日转账次数超限",
    606: "您有未平仓仓位，暂不能转出",
    607: "杠杆账户需要指定币种对",
    608: "此接口不支持该站点",
    611: "已有一笔转账待处理，当前可转余额不足",
    612: "币种类型错误",
    9999: "系统异常",
    0: "操作成功",
    100000: "合约不存在",
    200000: "市场消息不存在",
    300000: "下单方向错误",
    300001: "下单类型错误",
    300002: "价格小于或者等于0",
    300003: "下单量小于最小交易单位",
    300004: "订单状态错误",
    300005: "时间类型错误",
    300006: "ORDER_FROM 错误",
    300007: "Order 订单数量必须小于10000000",
    300008: "价格最高不能超过100000",
    300009: "平仓单数量不能超过仓位数量", // 0515
    300010: "平仓价格触发强平价格",
    300011: "清算中，暂停交易",
    300012: "订单不存在",
    300013: "下单价格不合理",
    300014: "订单数量不合理",
    300015: "未到指定放开时间，暂时不能进行交易",
    400000: "没有持仓",
    400001: "仓位类型不存在",
    400002: "该操作会触发仓位的强平价格",
    400003: "保证金增加或减少时，最小单位为0.0001",
    400004: "全仓时无需改变仓位保证金",
    400005: "仓位保证金不足，无法减少保证金",
    400008: "持仓、有挂单时，不能调节杠杆", // 0515
    500000: "登录失败",
    500001: "用户登录超时",
    500002: "用户未登录",
    500003: "当前账户被锁定，建议联系客服",
    500004: "用户可用余额不足",
    500005: "登录用户不是订单用户",
    600000: "币种不存在",
    700000: "登录密码错误次数过多",
    700001: "交易密码锁定",
    700002: "交易密码验证失败，交易密码错误",
    800000: "k线类型错误",
    100: "划转成功操作",
    101: "划转失败操作",
    300: "下单",
    301: "下单回滚",
    302: "撤销单个订单",
    303: "撤销多个订单",
    304: "开仓成交",
    305: "平仓成交",
    306: "单个订单撤销成功",
    307: "多个订单撤销成功",
    400: "爆仓",
    401: "爆仓成交",
    500: "自动减仓",
    600: "收取隔夜费",
    700: "资金互换",
    10100000: "合约不存在",
    10100001: "市场消息不存在",
    10200000: "用户未登录",
    10200001: "用户可用余额不足",
    10200002: "登录用户不是订单用户",
    10200003: "交易密码锁定",
    10200006: "余额不足",
    10200007: "您的账户存在异常，建议联系客服",
    10200008: "您的账户存在异常，建议联系客服",
    10300000: "下单数量超出限制",
    10300001: "价格浮动不能超过指数价格的正负50%",
    10300002: "挂单失败",
    10300003: "平仓数量超过当前仓位数量",
    10300004: "订单状态错误",
    10300005: "时间类型错误",
    10300006: "ORDER_FROM 错误",
    10300007: "订单不存在",
    10300008: "撤单失败，当前无可撤订单",
    10300009: "资金互换中，暂停交易",
    10300010: "暂停交易",
    10300011: "可用平仓数量不足",
    10300012: "可用平仓数量不足",
    10300013: "没有多仓位可平",
    10300014: "没有空仓位可平",
    10400000: "没有持仓",
    10400002: "该操作会触发仓位的强平",
    10500001: "数据已经存在",
    10500002: "写入数据库数据失败",
    10900006: "服务器繁忙",
    900000: "缺少参数",
    900001: "参数格式或类型错误",
    999999: "系统异常",
    10900002: "操作频繁，请稍后再试",
    10900007: "服务开小差儿，请稍后再试！",
    614: "结算/交割中，暂停转账",
    11300003: "委托数量大于持仓数量，可用平仓数量不足",
    11400003: "部分委托未成交，可用平仓数量不足",
    11400004: "无多单仓位可平",
    11400005: "无空单仓位可平",
    151: "操作异常，账号临时锁定，请联系客服解冻"
  },
  // 推送错误码
  wsErrorCode: {
    100: "划转成功操作",
    101: "划转失败操作",
    151: "操作异常，账号临时锁定，请联系客服解锁",
    300: "下单",
    301: "下单回滚",
    302: "撤销单个订单",
    303: "撤销多个订单",
    304: "开仓成交",
    305: "平仓成交",
    306: "单个订单撤销成功",
    307: "多个订单撤销成功",
    400: "爆仓",
    401: "爆仓成交",
    500: "自动减仓",
    600: "收取隔夜费",
    700: "资金互换",
    10100000: "暂无合约信息",
    10100001: "无法获取市场消息",
    10200000: "您暂未登录",
    10200001: "余额不足",
    10200002: "登录用户不是订单用户",
    10200003: "交易密码锁定",
    10200006: "账户不存在",
    10200007: "当前账户被锁定，建议联系客服",
    10200008: "用户锁定",
    10300000: "下单手数超过限制数量",
    10300001: "价格浮动不能超过指数价格的正负50%",
    10300002: "挂单数量超过限制数量",
    10300003: "平仓单数量不能超过仓位数量",
    10300004: "订单状态错误",
    10300005: "时间类型错误",
    10300006: "ORDER_FROM 错误",
    10300007: "订单不存在",
    10300008: "撤单失败，订单可撤销数量为0",
    10300009: "资金互换中，暂停交易",
    10400000: "暂无持仓",
    10400002: "该操作会触发仓位的强平",
    10500001: "数据已经存在",
    10500002: "写入数据库数据失败",
    900000: "缺少参数",
    900001: "参数格式或类型错误",
    999999: "系统异常",
    614: "结算/交割中，暂停转账",
    10300010: "系统维护中"
  },
  productList: {
    name1: "普通",
    text1: "限价",
    name2: "IOC",
    text2: "限价(IOC)",
    name3: "FOK",
    text3: "限价(FOK)",
    name4: "Post-only",
    text4: "限价(Po)"
  },
  errorMessage: {
    error1: "请输入大于0数字",
    error2: "请输入最多包含",
    error3: "位小数的数字",
    error4: "最大可买数量",
    error5: "最大可卖数量",
    error6: "请输入正确的利率",
    error7: "输入的最小数量为",
    error8: "请输入正确的数量",
    error9: "请输入2~30天",
    error10: "请输入6位数字资金密码",
    error11: "输入的最大数量为",
    error12: "输入的最大价格为",
    error13: "不能超过涨停价下单，",
    error14: "不能超过跌停价下单，",
    turnOutAccount: "请选择转出账户",
    accountAddressDifferent: "转出账户和转入账户不能相同",
    turnIntoAccount: "请选择转入账户",
    transferAmount: "请填写正确的转账金额",
    amount1: "转账金额必须大于0",
    amount2: "转账金额不得超过最大可用金额"
  },
  // 0608
  kLineType: {
    buttonName: "分时",
    min: "分钟",
    hours: "小时",
    day: "天",
    week: "周"
  },
  tradeHistory: {
    all: "全部",
    text: "请选择交易",
    selectContract: "合约名称",
    selectSite: "查询站点",
    contract: "交易合约",
    size: "合约数量(手)",
    dealSize: "成交数量",
    residue: "剩余数量",
    dealPrice: "成交价格",
    dealValue: "成交价值",
    type: "类型",
    entrustTime: "下单时间",
    side: "多空",
    closeType: "开平",
    more: "多",
    less: "空",
    open: "开",
    close: "平",
    entrustPrice: "委托价格",
    entrustSize: "委托数量",
    status: "状态",
    present: "当前",
    in: "入金",
    out: "出金",
    date: "时间"
  },
  // 合约指南
  guide: guide,
  // 新合约指南
  handbook: handbook,
  // 合约新手指导
  direct: direct,
  // 参考信息
  reference: reference,
  // 委托订单
  entrust: entrust,
  // 余额
  wallet: wallet,
  // 交割合约
  regular: regular,
  // 订单详情
  orderDetail: {
    title: "委托历史",
    status1: "完全委托",
    status2: "委托历史",
    done: "成交记录",
    cancel: "撤销记录",
    asset: "资金记录"
  },
  // 合约赢家秀
  show: {
    text1: "赚了！就要高调晒单！一起PK晒单吧",
    text2: "一起PK晒单吧",
    spread: "展开更多>",
    backTop: `顶部`,
    getMore: "加载更多"
  },
  // 3.0改版新增翻译 --- 找不到分类了,只能放这里
  version3: {
    or: "或",
    black: "黑色",
    white: "白色",
    newPrice: "最新成交价",
    historyPrice: "实时成交价",
    marketPrice: "以市场最优价格买入",
    marketPriceSell: "以市场最优价格卖出",
    closeOpen: "可平",
    buy: "买入开多(看涨)",
    sell: "卖出开空(看跌)",
    closeBuy: "买入平空(看涨)",
    closeSell: "卖出平多(看跌)",
    to: "到",
    all: "全部",
    inputValidation: "下单数量超出限制，请修改后下单",
    start: "点击任意位置即可开启交易",
    know: "知道了",
    moreAssets: "鼠标移上时即可显示更多 [资产数据]",
    moreData: "鼠标向下滑动可查看更多数据, 还可以 [一键平仓] 哦！",
    change: "点击这里可以切换 [黑白版]",
    openToolBar: "点击这里可以打开 [小工具] 哦!",
    submit: "提交",
    undo: "确定撤销委托单？",
    undoTitle: "执行时将撤销该委托单",
    closeAll: "确定一键平仓",
    closeAllInfo: `您的全部仓位将以<span style="color:{color}
    ">市价方式</span>向市场报单平仓，您的盈亏将受到市场深度的影响，请在悉知风险的情况下使用。`,
    undoAll: '确定<span style="color:{color}">全部撤销</span>委托单吗？',
    part: "部分委托未成交",
    inadequate: "可用平仓数量不足",
    tip: "下次不提示",
    backtop: "返回顶部",
    announcement: "USDT合约交易公告",
    order300:
      '以{type}{price}{sideType}<span style="color:{color}">{size}</span>手 {contractName}',
    order340:
      '以{type}{price}{sideType},成交<span style="color:{color}">{size}</span>手',
    noLogin:
      '请 <a href="{login}">登录</a> 或 <a href="{registered}">注册</a> 后查看仓位',
    more: "更多",
    //  返回旧版
    toold: "返回旧版",
    // 计算器提示
    calculatorTip: "该价格仅供用户参考，实际还请以风险度为准。",

    // 默认执行价
    defaultExecutionPrice: "默认执行价为市价",
    // 预设止盈止损
    preset: "预设止盈止损",
    // 温馨提示
    prompt: "温馨提示",
    // 温馨提示内容
    promptContent: `<p style="text-align:left;">预设止盈止损并非实际存在的止盈止损单，需委托成交后才可发起。<br> 因行情变动剧烈，预设单不保证预设一定生效。<br>下单委托成交后，默认将按照您的实际成交数量全部挂止盈止损单。<br>如您撤销挂单委托，预设止盈止损单将同时失效。</p>`,
    // 下单价格
    orderPrice: "下单价格",
    // 支持单侧填写，请至少填写一个选项
    oneSelect: "支持单侧填写，请至少填写一个选项",
    // 止盈触发价≥
    stopTrigger: "止盈触发价",
    // 止损触发价
    lossTrigger: "止损触发价",
    stopTrigger2: "止盈触发价",
    lossTrigger2: "止损触发价",
    stopExecute2: "止盈执行价",
    lossExecute2: "止损执行价",
    marketExecute: "以市价执行",
    // 预估收益
    earnings: "预估收益",
    // 预设止盈
    stop: "预设止盈",
    // 预设止损
    loss: "预设止损",
    // 计划委托
    entrust: "计划委托",
    // 计划
    plan: "计划",
    // 多单开仓
    buyOpen: "多单开仓",
    // 空单卡开仓
    sellOpen: "空单开仓",
    entrustNumber: "计划执行数量",
    // 多单开仓
    openBuyTitle: `确定以{type}<span style="color:{color}"> {price} </span>买入多单，开仓 <span style="color:{color}">{number}</span> 手`,
    // 多单平仓
    closeBuyTitle: `确定以{type}<span style="color:{color}"> {price} </span>卖出多单，平仓 <span style="color:{color}">{number}</span> 手`,
    // 空单开仓
    openSellTitle: `确定以{type}<span style="color:{color}"> {price} </span>买入空单(卖出多单)，开仓 <span style="color:{color}">{number}</span> 手`,
    // 空单平仓
    closeSellTitle: `确定以{type}<span style="color:{color}"> {price} </span>卖出空单(买入多单)，平仓 <span style="color:{color}">{number}</span> 手`,
    // 计划委托多单
    entrustBuyTitle: `<span style="color:{color}"> {price} </span>买入多单 开仓 <span style="color:{color}">{number}</span> 手 {name}合约`,
    // 计划委托空单
    entrustSellTitle: `<span style="color:{color}"> {price} </span>卖出空单 开仓 <span style="color:{color}">{number}</span> 手 {name}合约`,
    // 未触发
    entrustStatus1: "未触发",
    // 触发成功
    entrustStatus2: "触发成功",
    // 已取消
    entrustStatus3: "已取消",
    // 触发失败
    entrustStatus4: "触发失败",
    // 爆仓撤单
    entrustStatus5: "爆仓撤单"
  },
  //usdt 中所有用到的提示说明
  usdtTips: {
    //计划委托
    planEntrust: `计划委托，在成功触发之前，不会冻结仓位和保证金。<br>计划委托不一定成功触发，可能会因价格、仓位、保证金等问题而失败。<br>触发成功后限价单因市场等问题也并不一定成交。以上，请知悉。`,
    // 总仓/可用
    totalPosition: `可用是您当前可用于委托的持仓。<br>总仓是您当前同一币种同一方向的全部持仓，可分为可用和委托两部分，在没有委托单（未成交订单）的情况下，一般可用数量等于总仓数量。`,
    // 实际杠杆
    actualLever: `多次开仓且使用不同倍数杠杆后，杠杠将按照实际使用的计算并显示。<br>实际杠杆 =（仓位价值1+…+仓位价值N）/（仓位价值1/杠杆1+…+仓位价值N/杠杆N）`,
    // 持仓均价
    positionAverage: `<span style="color:{color}">多次同一方向开仓后，使用加权平均计算出来的平均持仓价,</span>平仓时的盈亏也按照持仓均价进行计算。<br>持仓均价=总仓位价值/总开仓数量【各币种合约分开计算】`,
    // 未实现盈亏
    profitAndLoss: `未实现盈亏（多仓）=（指数价格-持仓均价）*手数*乘数<br>未实现盈亏（空仓）=（持仓均价-指数价格）*手数*乘数`,
    // 强平价预估
    strongParity: `预估价格不代表真实强平价格，仅作参考。多币种持仓需同时满足所有币种强平价格才能真正触发强平。系统不会对多持仓状态下的单一币种进行强平。`,
    // 一件全平
    closeAll: `一键全平仅支持市价报单方式，届时将所有可用仓位向市场发起市价委托。可能会产生较大的风险，如仍要使用，<span style="color:{color}">请点击“确认”</span>。`,
    // 市价
    markekPrice: `按当时市场价格即刻成交的指令。您在下达这种指令时无需指明具体的价位，而是要求以当时市场上可执行的最好价格达成交易。可能会产生较大的风险，如仍要使用，<span style="color:{color}">请点击“确认”</span>。`,
    // 限价
    price: `执行时必须按照限定价格或更好的价格成交的指令。下达限价指令时，您必须指明具体的价位。为防止恶意挂单，限价的幅度不可超过指数价格的±50%。`,
    // 触发价格
    triggerPrice: `触发价格是以价格作为触发条件，并不用于执行或委托。`,
    // 执行价格
    executivePrice: `执行价格您真实向市场发起的委托价格，如果选择市价，则以市价的方式向市场发起委托。限价时，为防止恶意挂单，限价的幅度控制在指数价格的50%，如您委托价格过度，可能导致委托失败。因数字货币波动较大，建议止损使用市价执行。`,
    // 风险度
    risk: `<span style="color:{color}">用来衡量仓位风险的指标，当风险度达到100%时，将进入爆仓流程。</span><br>风险度=（仓位价值之和*维持保证金率0.5%）/（当前资产-冻结保证金）`,
    // 当前资产
    currentAssets: `您的全部资产，包括可用（含盈亏）、占用和冻结的部分。`,
    // 可用资产
    availableCapital: `可用于开新仓的资产，已含浮盈。`,
    // 占用保证金
    cashDeposit: `持有仓位占用的保证金（双向持仓时收取较多一侧）`,
    // 冻结保证金
    frozenDeposit: `委托状态没有成交的订单所需要的保证金。`,
    // 资金使用率
    utilizationRate: `资金使用率=（占用保证金+冻结保证金）/当前资产`,
    // 资金杠杆
    leverage: `按照您全部资产与全部仓位计算的杠杆。<br>资金杠杆=净头寸仓位价值和/当前资产*100%`,
    // 开多
    openMore: `行情上涨将获得盈利。`,
    // 开空
    openTheEmpty: `行情下跌将获得盈利。`,
    // 限价提示标题
    priceTitle: "风险提示",
    // 限价提示说明
    priceTipInfo:
      '止盈止损触发后将按照<span style="color:{color}">按照设定的方式和价格</span>向市场进行委托，成交价格受市场深度影响。满足触发条件时将<span style="color:{color}">立刻触发</span>，请在知晓风险的情况下使用。使用前建议阅读<a href="{href}" target="__blank">使用指南</a>。',
    // 设置时间
    setTime: "设置时间",
    // 触发时间
    triggeringTime: "触发时间",
    // 盈利率
    rate:
      "多仓收益率:  (指数价格 - 持仓价格) / 持仓价格 * 杠杆 * 100%<br/>空仓收益率:  (持仓价格 - 指数价格) / 持仓价格 * 杠杆 * 100%",
    //杠杆提示
    leverageTip: "杠杆修改成功",
    // 仓位价值
    positionValue: "仓位价值=下单价格*手数*乘数"
  }
};

export default ZH
