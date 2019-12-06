import guide from './en/en-guide.js'
import handbook from './en/en-handbook.js'
import direct from './en/direct.js'
import reference from './en/en-reference.js'
import entrust from './en/en-entrust.js'
import wallet from './en/en-wallet.js'
import regular from './en/regular'

let EN = {
  full: {
    trade: 'Trade',
    moreStopLossProfit: 'Sell Limit/Stop',
    lessStopLossProfit: 'Short Limit/Stop',
    moreAvePrice: 'Avg. Price (Long)',
    moreLoss: 'Sell Stop',
    moreProfit: 'Sell Limit',
    lessAvePrice: 'Avg. Price (Short)',
    lessLoss: 'Buy Stop',
    lessProfit: 'Buy Limit',
    loss: 'Loss',
    profit: 'Profit',
    positions: 'Positions',
    delete: 'Delete',
    deleteMoreStopLoss: 'Are you sure to delete the sell stop settings?',
    deleteMoreStopProfit: 'Are you sure to delete the sell limit settings?',
    deleteLessStopLoss: 'Are you sure to delete the buy stop settings?',
    deleteLessStopProfit: 'Are you sure to delete the buy limit settings?',
    guideDrag: 'You can drag the trading panel at will',
    guideOrderRight: 'Click the arrow icon to move the trading panel to left or right',
    guideSelectCurrency: 'Click the drop-down menu to pop up the second entry page of the market list ',
    guideTab: 'Click this button or “Tab” button to collapse/expand of the contract list',
    guideTrade: 'Click the "Space" button or “Trade” button to collapse/expand the trading panel',
    smallGuideKline1: 'Double-click the K-line area to enter/exit the professional version of the transaction',
    smallGuideKline2: 'Drag the long/short price line up and down to quickly set take-profit and stop-loss'
  },
  common: {
    success: "Successful operation",
    noData: "No data available",
    more: "more",
    tip: "Tips"
  },
  header: {
    power: "BitHash",
    index: "Home",
    deposit: "Deposit",
    withdraw: "Withdrawal",
    // notice: 'Announcement',
    login: "Sign In",
    register: "Sign Up",
    asset: "Asset",
    user: "User",
    logout: "Sign Out",
    trade: "Digital Contract",
    usdtTrade: "USDT Contract",
    regularContract: "Delivery Contract",
    guide: "Guide",
    reference: "Reference Info",
    information: "Asset Info",
    newPlayer: "Tutorial",
    userShow: "Show",
    changeOldVersion: "Old Version",
    userSafe: "Account Security",
    devTool: "Developer Tools",
    invite: "My Invitation",
    userAuth: "ID Verification",
    safeExit: "Secure logout",
    lastLogin: "Last login location",
    marketableAssets: "Net Estimated Value（{current}）",
    tradeHistory: "History"
  },
  footer: {
    products: "Asset Info",
    about_us: "About Us",
    about_us_1: "Company Profile",
    about_us_2: "Our Team",
    about_us_3: "Contact Us",
    about_us_4: "Official Announcement",
    service_support: "Support",
    service_support_1: "API Doc",
    service_support_2: "Help",
    service_support_3: "Digital Asset Intro",
    service_support_4: "Token Listing Application and Description",
    service_support_5: "SMARTChain",
    official_community: "Official Community",
    official_community_1: "Telegram",
    official_community_2: "Wechat",
    official_community_3: "QQ Group",
    downLoad: "Related Download",
    downLoad_1: "iOS App",
    downLoad_2: "Android App",
    downLoad_3: "Google Play",
    follow: "Follow Us",
    global: "58COIN GLOBAL"
  },
  //  未登录
  noSign: {
    sign_in: "Sign In",
    sign_up: "Sign Up",
    no_sign: "You are not logged in\n",
    please: "Please",
    deal: "first!"
  },
  // 提交委托
  trade: {
    titleName: "Submit Order",
    placeOrderDefault: "Contracts",
    placeOrderBTC: "BTC(Bitcoin)",
    unitChange: "Unit",
    orderType: "Type",
    limit: "Limit Price",
    market: "Market Price",
    entrustPlan: "Trigger Order",
    price: "Price",
    triggerPrice: "Trigger Price",
    executePrice: "Execution Price",
    quantity: "Position",
    buy: "Buy",
    long: "Long",
    input: "Please enter",
    sell: "Sell",
    short: "Short",
    cost: "Margin",
    layerCost: "Position Margin",
    orderValue: "Order Price",
    availableBalance: "Available Balance",
    // 传给弹窗的信息
    markPrice: 'Mark Price',
    positionAfter: 'Position size after execution',
    title: 'Confirm your orde',
    transfer: 'Funds Transfer',
    buyIn: 'Buy',
    doMore: 'Long',
    sellOut: 'Sell',
    doNull: 'Short',
    openPosition: 'Open',
    closePosition: 'Close',
    error300016: 'Too many operations, please try again $ seconds later!',
    leverage: 'Leverage', // 0528
    latestDeal: 'Last Price',
    timeDeal: 'Real-time Price',
    depth: 'Merge Depth',
    latestPrice: 'Last Price',
    gains: 'Change',
    // sizeMaxError: 'Amount of the order is too large',
    sizeMaxError: 'Insufficient available assets',
    sizeMinError: 'The placing quantity is less than the minimum trading unit'
  },
  tradePrompt: {
    price: 'Please enter valid price',
    size: 'Please enter valid position',
    triggerPrice: 'Please enter valid trigger price',
    doPrice: 'Please enter valid execution price'
  },
  transform: {
    from: 'From',
    turnOutAccount: 'Select transfer-out account',
    transferTo: 'To',
    transferAccount: 'Amount',
    swapAccount: 'USDT Account',
    inputAccount: 'Enter transfer amount',
    maxTransform: 'Max',
    allTransform: 'All',
    transform: 'Transfer',
    internalTransfer: 'Free Internal Transfer',
    tips: 'After transferring out assets under holding position,',
    strongLevel: 'your liquidation line will be recalculated',
    tipsContent:
      'Excessive transfer amount will increase the risk of liquidation.\n' +
      'In order to avoid unnecessary losses, please reserve enough margin in your account to deal with market fluctuations.\n' +
      'Under holding position, you can transfer out {percentage} of the balance, besides, you can transfer out all the balance under no position.',
    same: 'Transfer-out account and transfer-in account cannot be the same',
    transferUsdtTip:
      'Reminder: The risk level will be recalculated if you transfer out assets under the holding position.  Excessive transfer amount will increase the risk of liquidation. In order to avoid unnecessary losses, please reserve enough margin in your account to deal with market fluctuations. Under the holding position, {percentage} of the principal can be transferred out, and the unrealized profit is available but cannot be transferred out. All the principal can be transferred out under no position.',
    transferRegularTip:
      'Reminder: The risk level will be recalculated if you transfer out assets under the holding position. Excessive transfer amount will increase the risk of liquidation. In order to avoid unnecessary losses, please reserve enough margin in your account to deal with market fluctuations. Under the holding position, {percentage} of the principal can be transferred out, and the unrealized profit is available but cannot be transferred out. All the principal can be transferred out under no position. After settlement and being included in the principal, the realized profit and loss can be transferred out.'
  },
  // 调节杠杆
  leverage: {
    title: 'Position',
    contract: 'Contracts',
    ROE: 'ROE',
    all: 'Cross ',
    leverage: 'Leverage',
    fundingRatio: 'Funding Rate',
    cross: 'Cross Leverage', // 0515
    crossTimes: 'Cross{times}X', // 0515
    tip1: 'Long = (1 - Open Price/Mark Price) * Leverage',
    tip2: 'Short = (Open Price/Mark Price - 1) * Leverage',
    low: 'low', // 0515
    high: 'high', // 0515
    risk: 'Position Risk' // 0515
  },
  // 参考信息
  referenceInfo: {
    title: 'References',
    more: 'More Information',
    exchange: 'Exchange Guide',
    contract: 'Contract Guides',
    markPrice: 'Fair Price/Mark Price',
    earnLoss: 'Profit/Loss Guide',
    fee: 'Fees',
    questions: 'FAQ'
  },
  // 行情信息
  productInfo: {
    markPrice: 'Mark Price',
    lastPrice: 'Last Price',
    increase: 'Change',
    price: 'Open Interest Value',
    feeRatio: 'Funding Rate',
    size: '24H Vol',
    sizeBTC: '24H Vol',
    highPrice: 'High',
    lowPrice: 'Low',
    fundingRate: 'Rate',
    prompt:
      'If the funding rate is within ±0.03%, there will be no payment exchange between the longs and the shorts.'
  },
  // 委托
  createdEntrust: {
    submitOrder: 'Submit Order',
    limit: 'Limit',
    market: 'Market',
    price: 'Price',
    positions: 'Positions',
    lot: 'Lot',
    leverageInfo:
      'Leverage: Currently multiple leverages are available. High leverage involves high risk, please be cautious.\n',
    limitInfo:
      'Limit Price: An order that must be executed at a limited price or at a better price, which means you must specify the specific price when submitting a limit order.',
    buyable: 'Buyable',
    salable: 'Salable',
    openlong: 'Open Long',
    closelong: 'Close Long',
    openshort: 'Open Short',
    closeshort: 'Close Short',
    // 确认委托弹出框
    A_confirmOrder: 'Confirm Order',
    A_buy: 'Buy to Open',
    A_contract: 'CONTR',
    A_leverage: 'Leverage',
    A_direction: 'Direction',
    A_market: 'Market Order',
    A_type: 'Type',
    A_price: 'Price',
    A_Amount: 'Amount',
    A_margin: 'Margin',
    A_riskLevel: 'Risk Level',
    A_ror: 'ROR',
    A_sell: 'Sell to Open',
    A_limit: 'Limit Order',
    A_buy_title:
      'Buy <span style="color:{color};">{num}</span> Lot {name} Contract(s)',
    A_sell_title:
      'Sell <span style="color:{color};">{num}</span> Lot {name} Contract(s)',
    A_buy_flat: 'Buy to Close',
    A_sell_flat: 'Sell to Close',
    marketInfo:
      'Market price: A market order is an order to buy or sell at the best available price and is normally executed on an immediate basis. It does not need to specify the price and the order is executed at the market price. Substantial risks may involve in such transaction.',
    positiveNum: 'Please enter a positive number',
    positiveInteger: 'Please enter a positive integer',
    importPrice: 'Please enter the price',
    contractHand: 'Please enter the lot',
    noLeveling: 'No open positions',
    limitNum: 'Exceed the maximum number of contracts',
    positions_tips:
      'Sum of Position Value * MM / Current Assets (When the Risk Level = 100%, your account will enter the liquidation process. Please pay attention to the risk level.)',
    hand:
      'Contract Size (Contract): The contract size refers to the amount of the underlying asset covered by each contract traded on the exchange.e.g.: 1 {hand} {name} = {value}{tableName}',
    explosion:
      'This price may result in liquidation, please check whether you have an order or not, if yes, please set a reasonable order price.',
    explosionConfirm: 'Continue',
    explosionProof: 'Start anti-liquidation',
    positionValue: 'Position Value'
  },

  // 币种列表，最新成交列表
  tradeList: {
    latestPrice: 'Last Price',
    gains: 'Change',
    latestDeal: 'Last Price',
    timeDeal: 'Real-time Price'
  },
  // 用户资产信息  我的合约资产
  asset: {
    fundLeverage: 'Fund Leverage',
    fundUtilizationRate: 'Fund Utilization Rate',
    contractAsset: 'My Assets',
    currentAssets: 'Assets',
    availableAssets: 'Available Assets',
    margin: 'Margin',
    frozenDeposit: 'Frozen Margin',
    unRelease: 'Unrealized PNL',
    alreadyRealized: 'Realized on the Day ',
    commissionFee: 'Fee on the Day',
    riskDegree: 'Risk Level',
    riskDegreeInfo:
      'When the risk level = 100%, your account will enter the liquidation process. Please pay attention to the risk level.',
    transform: 'Transfer-in',
    transfer: 'Transfer'
  },
  // 列表
  transactionList: {
    elpTips1: 'ELP (Estimated Liquidation Price)：',
    elpTips2:
      'This estimated price does not mean the real liquidation price. It is only for reference.',
    elpTips3:
      'For multi-currency positions, only the liquidation prices for all currencies are met simultaneously can the liquidation be triggered. The system will not liquidate single currency positions under multi-currency positions.',
    strongParity: 'ELP',
    returnPrice: 'Return (by trigger price)',
    lossPirce: 'Loss (by trigger price)',
    returnPrice1: 'Return (by execution price)',
    lossPirce1: 'Loss (by execution price)',
    emptyBill: 'Short',
    moreBill: 'Long',
    profitDeficit: 'Stop P/L',
    profitLoss: 'P/L',
    triggerPrice: 'Trigger Price',
    mode: 'Type',
    executionPrice: 'Execution Price',
    number: 'Amount',
    stopProfit: 'Stop Profit',
    stopLoss: 'Stop Loss',
    triggerOrder: 'Trigger Order',
    newOrder: 'Untriggered',
    SuccTrigger: 'Triggered',
    canceled: 'Canceled',
    triggerFailed: 'Successful trigger, order failed',
    liquidationCancel: 'Cancel',
    Expired: "Expired",
    reorder: 'Reorder',
    all: 'All',
    chongzhi: 'Reset',
    queding: 'Confirm',
    zdjc: 'ADL',
    qpwt: 'liquidated order',
    positions: 'Positions',
    currentEntrustment: 'Orders',
    excuted: 'Executed',
    records: 'Records',
    closeAll: 'Close All',
    batchCancel: 'Batch Cancel',
    prompt:
      'This action only supports market order (for available positions), which may involve great risk, please be aware! ',
    currency: 'Currency',
    openLeve: 'Open/Close',
    commissionPrice: 'Price',
    commissionAmount: 'Amount',
    retractable: 'Cancelable',
    dealDone: 'Executed',
    status: 'Status',
    time: 'Time',
    operate: 'Action',
    type: 'Type',
    reamaining: 'Remaining',
    excutedPrice: 'Price',
    excutedAmount: 'Amount',
    fee: 'Fees',
    totalPosition: 'Positions',
    available: 'Available',
    avgPrice: 'Avg. Holding Price',
    actualLeverage: 'Act. Leverage',
    pnl: 'PNL',
    occupationMargin: 'Margin',
    unrealisedPNL: 'Unrealised PNL',
    profitability: 'P/E Ratio',
    closePosition: 'Close',
    total: 'Total',
    expand: 'More',
    collapse: 'Collapse',
    noPosition: 'No position',
    noData: 'No data',
    more: 'Long',
    less: 'Short',
    buy: 'Buy',
    Sell: 'Sell',
    // S_***  列表中用到的状态
    S_openPosition: 'Open',
    S_closePosition: 'Close',
    S_Unfilled: 'Unexecuted',
    S_PartialDeal: 'Partial Execution',
    S_DealDone: 'Executed',
    S_Revoked: 'Canceled',
    S_failure: 'Failed',
    S_LimitPrice: 'Limit',
    S_MarketPrice: 'Market',
    // A_**** 弹出框中用到的
    A_Confirm: 'Confirm',
    A_Cancel: 'Cancel',
    A_One_Title: 'Are you sure to cancel the order?',
    A_One_Info: 'If you confirm, this order will be canceled',
    A_All_FullFlat_Title: 'Are you cure to close all positions?',
    A_All_FullFlat_Info:
      'All your positions will be closed at the market price, and your profit and loss will be affected by the market depth. Please conduct your own research when making a decision.',
    A_All_Cancel_Title: 'Are you sure cancel all orders?',
    A_All_Cancel_Info: 'If you confirm, all orders will be canceled',
    A_Close: 'Close',
    A_LimitPrice: 'Limit',
    A_MarketPrice: 'Market',
    A_Price: 'Price',
    A_Amount: 'Amount',
    A_Hand: 'Lot'
  },
  // 订单详情
  tradeDetailList: {
    position: 'Positions',
    current: 'Orders',
    already: 'Executed',
    record: 'Records',
    planOrder: 'Trigger Order',
    currencyPlan: 'Trigger',
    historyPlan: 'Trigger History',
    information: 'Asset Information',
    contract: 'Contracts',
    contractTip: 'Contract Code',
    positionQty: 'Current Positions',
    orderValue: 'Value',
    positionOrderValue: 'Position Value',
    positionOrderValueTip: 'Your Contract Value',
    entryPrice: 'Open Price',
    entryPriceTip: 'Average Buy/Sell Price',
    markPrice: 'Mark Price',
    markPriceTip:
      'This is the last mark parice, which is used to calculate PNL and margin. To avoid market operations, it may deviate from last execution price, and this does not affect the calculation',
    liquidationPrice: 'Liquidation Price',
    liquidationPriceTip:
      'Liquidation occurs when the mark price is lower than  (long) or higher than  (short)',
    margin: 'Margin',
    ratio: 'ROE',
    ratioTip1: 'Long = (1 - Open Price/Mark Price) * Leverage',
    ratioTip2: 'Short = (Open Price/Mark Price - 1) * Leverage',
    realised: 'Realized PNL',
    unrealised: 'Unrealized PNL',
    unrealisedTip1:
      'Unrealized PNL (long) = Positions * (1/Open Price - 1/Mark Price)',
    unrealisedTip2:
      'Unrealized PNL (short) = Positions * (1/Mark Price - 1/Open Price)',
    more: '(Long)',
    less: '(Short)',
    piece: 'CONTR',
    operate: 'Operation',
    revocation: 'Cancel',
    size: 'Quantity',
    price: 'Price',
    completeDeal: 'Executed',
    surplus: 'Remaining',
    value: 'Order Value',
    dealPrice: 'Price',
    entrustPrice: 'Price',
    executePrice: 'Execution Price',
    triggerPrice: 'Trigger Price',
    type: 'Type',
    status: 'Status',
    date: 'Time',
    dealSize: 'Executed',
    closed: 'Exit',
    closedMark: '(Exit)', // 0528
    market: 'Market Price',
    limit: 'Limit Price',
    batchRevocation: 'Cancel All',
    noPosition: 'No position available',
    changeMargin: 'Adjust Margin',
    closePosition: 'Close Position',
    textPosition: 'The positions are being ordered to close',
    error300016: 'Too many operations, please try again {time} seconds later!',
    revocationSuccess: 'Cancelled Orders',
    // 资产信息
    walletBalance: 'Wallet Balance',
    walletBalanceTip:
      'Wallet Balance = Available Balance + Frozen Margin + Position Margin',
    marginBalance: 'Margin Balance',
    usefulBalance: 'Available Balance',
    usefulBalanceTip: 'Available Open Margin',
    userEquity: 'User Equity',
    userEquityTip: 'Total Swap Equity',
    positionMargin: 'Position Margin',
    positionMarginTip: 'Open Position Margin',
    noData: 'No asset information',
    // 0515
    closedLimit: 'Limit Close', // 0515
    closedMarket: 'Market Close', // 0515
    none: 'None'
  },
  // information-list 深度
  entrustList: {
    lastPrice: 'Last Price',
    size: 'Amount',
    BTC: 'Amount',
    price: 'Price',
    amount: 'Total',
    indexPrice: 'Index Price',
    fairPrice: 'Mark Price',
    deep: 'Group',
    bit: 'Dec'
  },
  // history-list 历史成交
  historyList: {
    title: 'Real-time Transaction',
    size: 'Amount',
    price: 'Price',
    date: 'Time'
  },
  // 弹窗按钮
  layerButton: {
    cancel: 'Cancel',
    confirm: 'Confirm'
  },
  // 委托(交易)弹窗
  layerTrade: {
    all: 'Cross 100X',
    leverage: 'Leverage',
    title: 'Confirm your order',
    limit: 'Limit Price',
    market: 'Market Price',
    buy: 'Buy',
    sell: 'Sell',
    cross: 'Cross',
    textType1Coin: '{side} {size} {name} at {price}',
    textType1: '{side} {size} {name} Contracts at {price}',
    textType2Coin: '{side} {size} {name} at {type}',
    textType2: '{side} {size} {name} Contracts at {type}'
  },
  // 平仓弹窗
  layerClosed: {
    limit: 'Limit Price',
    market: 'Market Price',
    buy: 'Buy',
    sell: 'Sell',
    textType1Coin: '{side} {size} {name} at {price}',
    textType1: '{side} {size} {name} Contracts at {price}',
    textType2Coin: '{side} {size} {name} at {type}',
    textType2: '{side} {size} {name} Contracts at {type}',
    text3: 'All your positions will be closed in execution',
    text4: '*If you confirm, all orders will be canceled',
    text5: '*If you confirm, all orders will be canceled'
  },
  layerMargin: {
    add: 'Increase Margin',
    reduce: 'Decrease Margin',
    position: 'Current Positions',
    usefulMargin: 'Available Margin'
  },
  // 平仓弹窗 0515
  layerPositionClosed: {
    placeHolderPrice: 'price',
    placeHolderSize: 'quantity',
    all: 'All',
    surplus: 'Remaining',
    closed: 'Close',
    tip1:
      'Current order may trigger the cancellation mechanism of other closing orders, are you sure to execute?' // 0528
  },
  // 收益计算器
  calculate: {
    title: 'Return Calculator',
    profitCal: 'Return',
    goalPriceCal: 'Target Price',
    liquidationCal: 'Liqdt Price',
    contract: 'Contract',
    type: 'Type',
    leverage: 'Leverage',
    unit: 'Unit',
    openPrice: 'Opening Price',
    closePrice: 'Closing Price',
    amount: 'Positions',
    balance: 'Contract Balance',
    goalProfit: 'Target Return',
    useProfit: 'Expected Return',
    useProfitRate: 'Expected ROR',
    calculate: 'Calculate',
    result: 'Calculation Result',
    margin: 'Margin',
    profit: 'Earnings',
    profitRate: 'Earnings Ratio',
    goalClosePrice: 'Target Closing Price (USDT)',
    liquidationPrice: 'Liquidation Price (USDT)',
    more: 'Long',
    less: 'Short',
    piece: 'CONTR',
    tips:
      'Note: Due to the existence of fees in the actual transactions, the calculation result may differ from the transaction result.',
    warningTips1:
      'Exceed reasonable range, when holding bullish positions, expected earnings must be less than open positions.',
    warningTips2:
      'Exceed reasonable range, when holding bullish positions, expected earnings rate cannot exceed leverage multiples.',
    positionROR: 'Position ROR',
    principalROR: 'Principal ROR'
  },

  // 右侧工具栏
  toolbar: {
    ewm: 'Download App',
    ztqh: 'Switch',
    userCenter: 'Account',
    announcement: 'Announcement',
    jsq: 'Calculator',
    yhfk: 'Feedback',
    lxkf: 'Contact Support',
    hyzn: 'Contract Guide',
    ewCode: 'QR Code'
  },
  // 公告弹窗
  layerAnnouncement: {
    title: 'Announcement'
  },
  panel: {
    text: 'Perpetual'
  },
  // 推送弹窗 0515
  emerge: {
    prompt: 'Tips',
    limit: 'Limit Price',
    market: 'Market Price',
    buy: 'Buy',
    sell: 'Sell',
    leverage: 'Leverage',
    margin: 'Margin',
    adjustLeverage: 'Adjust Leverage',
    adjustMargin: 'Adjust Margin',
    entrustSend: 'Order has been submitted',
    entrustSuccess: 'Successful order',
    entrustPart: 'Order has been partially executed',
    entrustAll: 'Order has been completely executed',
    entrustFailed: 'Order submission failed',
    marketEntrustPart: 'Market order has been partially executed',
    revocationSuccess: 'Successfully cancelled',
    revocationBachSuccess: 'Successful batch cancellation',
    revocationFailed: 'Cancellation failed',
    text1: '{side} {size} {name} Contracts at {type}'
  },
  // trade index 0515
  index: {
    usdt_title: 'Linear Contract',
    titlePart: '-Global Leading Digital Currency Trading Platform',
    titleAll: 'SWAP-Global Leading Digital Currency Trading Platform',
    spot: 'Currency',
    cloudy: 'Cloud computational power',
    otc: 'C2C',
    swap: 'Swaps',
    spot_trading: 'Spot Trading',
    futures: 'Futures trading',
    mine_pool: 'Pool',
    sign_in: 'Sign In',
    sign_up: 'Sign Up',
    logout: 'Sign Out',
    user: 'Account',
    'product-title1': 'Mortgage Loan',
    'product-title2': 'Swap',
    'product-title3': 'Margin',
    'product-title4': 'Spot',
    'product-title5': 'OTC',
    product_title1_c_1: 'Revitalize Idle Digital Assets',
    product_title1_c_2: 'High Mortgage Rate',
    product_title1_c_3: 'Low Interest Rate',
    product_title1_c_4: 'Repeatable Loan',
    product_title1_c_5: 'Unlimited Use of Funds',
    product_title1_c_6: 'Solve the Problem of Funds Turnover',
    product_title2_c_1: 'Most User-friendly Contract Design',
    product_title2_c_2: 'No Market Price Liquidation',
    product_title2_c_3: 'No Socializing Losses',
    product_title2_c_4: 'No Delivery Date',
    product_title2_c_5: 'No Holding Cost',
    product_title2_c_6: 'Excellent Depth and Liquidity',
    product_title3_c_1: 'Max 3x Leverage',
    product_title3_c_2: 'Lowest Interest Rate',
    product_title3_c_3: 'Add Leverage to Principal',
    product_title3_c_4: 'Offer Big Profit Possibilities',
    product_title3_c_5: 'Support Long, Short, Buy and Sell',
    product_title4_c_1: 'Support Digital Currency Exchange',
    product_title4_c_2: 'Low Fees',
    product_title4_c_3: 'Hundreds of Trading Pairs',
    product_title4_c_4: 'Various Valuable Currencies',
    product_title4_c_5: 'Efficient Matching Transaction',
    product_title5_c_1: 'Support Fiat Currency in Exchange for Digital Assets',
    product_title5_c_2: 'Zero Trading Fee',
    product_title5_c_3: 'Platform Guarantee',
    product_title5_c_4: 'Zero Post Fee',
    product_title5_c_5: 'Guarantee the Interests of Buyers and Sellers',
    btn: 'See Details',
    service_title: '58COIN – One-stop Digital Asset Service Platform',
    service_title1: 'First-Rate R&D',
    service_title1_content1: 'First Swap Initiator',
    service_title1_content2: 'New Mortgage Loan',
    service_title2: 'Strong Financial Strength',
    service_title2_content1: 'Top 10 Mining Pool',
    service_title2_content2: 'Tens of Thousands of BTC',
    service_title3: 'Top Technical Support',
    service_title3_content1: 'Core Members from BAT, OKEx, etc. ',
    service_title3_content2:
      'Multi-Layer Encryption, High Security, High Efficiency',
    service_title33_content1: 'Multi-Layer Encryption,',
    service_title33_content2: 'High Security, High Efficiency',
    service_title4: '24h Customer Service',
    service_title4_content1: 'Millions of Users, Quick Response',
    service_title4_content2:
      'Multilingual Service, Communication Without Borders',
    service_title44_content1: 'Multilingual Service,',
    service_title44_content2: 'Communication Without Borders',
    down_load_title: 'Smooth Trading at Anytime, Anywhere',
    down_load_content1:
      'Real-time Matching Transaction, Quick Deposit&Withdrawal Arrival',
    down_load_content2: 'Contract, Leverage, Mortgage, Experience As You Like',
    products: 'Product',
    about_us: 'About Us',
    about_us_1: 'Introduction',
    about_us_2: 'Team',
    about_us_3: 'Contact Us',
    about_us_4: 'Announcement',
    service_support: 'Support',
    service_support_1: 'API',
    service_support_2: 'Help',
    service_support_3: 'Digital Asset Intro',
    service_support_4: 'Currency Apply',
    official_community: 'Community',
    official_community_1: 'Telegram',
    official_community_3: 'QQ Group',
    official_community_4: 'Wechat',
    official_community_5: 'API Group',
    follow: 'About Us',
    weChat: 'Scan QR Code to join WeChat Group',
    api: 'Scan to join API group',
    fee: 'HOT ! ! !',
    hot: 'HOT',
    returnTop: 'Top',
    see_more: 'See Details',
    downLoad: 'Download',
    addSuccess: 'Add optional successfully'
  },
  // 充值状态
  depositStates: {
    WAIT: 'Waiting for transfer-in',
    WAIT_CONFIRM: 'Waiting for transfer-in',
    SUCCESSED: 'Successful',
    FAILED: ' Failed'
  },
  source: {
    PC: 'Web',
    API: 'API',
    IOS: 'IOS',
    Android: 'Android'
  },
  // 订单状态
  orderStatusList: {
    // name1: 'All',
    name2: 'Pending',
    name3: 'Failed to place',
    name4: 'Completely executed',
    name5: 'Canceled'
  },
  // 订单状态--计划委托
  planOrderStatusList: {
    name1: 'Untriggered',
    name2: 'Triggered',
    name3: 'Canceled'
  },
  // 订单类型
  orderTypeList: {
    limit: 'Limit Price',
    market: 'Market Price',
    plan: 'Trigger'
  },
  // 爆仓类型
  orderLiquidationList: {
    liquidation: 'Liquidation Order',
    ADL: 'Auto-Deleveraging'
  },
  confirm: {
    cancel: 'Cancel',
    determine: 'Confirm'
  },
  filter: {
    onPage: 'Previous',
    nextPage: 'Next',
    select: 'Select trade',
    status: 'Execution Status',
    noData: 'No data available',
    undo: 'Cancel',
    buy: 'Buy',
    sell: 'Sell',
    marketPrice: 'Market Price',
    withdrawal: 'Cancel Order',
    withdrawalAll: 'Cancel all order',
    viewHistoryWithdrawal: 'Check historical orders',
    determineWithdrawal: 'Are you sure you want to cancel this order?',
    cancelAll: 'Are you sure to cancel all the orders?',
    wattNotCompletedListOne: 'Time',
    wattNotCompletedListTwo: 'Type',
    wattNotCompletedListThree: 'Price',
    wattNotCompletedListFour: 'Average Execution Price',
    wattNotCompletedListFive: 'Order Quantity',
    wattNotCompletedListSix: 'Execution Quantity',
    wattNotCompletedListSeven: 'Order Source',
    wattNotCompletedListEight: 'Status',
    wattNotCompletedListNine: 'Operation',
    wattNotCompletedListTen: 'Partial Execution',
    wattNotCompletedListEleven: 'Trading Pair',
    type: 'Order Type',
    remainAmount: 'Remaining Amoun',
    volume: 'Execution Volume',
    entrustHistory: 'Historical Order',
    entrust: 'Unexecuted order'
  },
  errorCode: {
    601: ' This coin is not supported by the account.',
    602: ' Transfer-out account balance is not enough.',
    603: ' Transfer-in and transfer-out account cannot be the same.',
    604: ' Transfer amount must be greater than 0.',
    605: ' Number of transfer exceeds the limit within today.',
    606: ' You have unclosed positions, and temporarily cannot transfer out.',
    607: 'Margin account needs to designate currency pair.',
    608: ' Sorry, the port does not support this site.',
    611: 'There is a pending transfer, available transfer balance is not enough',
    612: 'Coin type error',
    9999: 'System is abnormal',
    0: 'Successful',
    100000: 'Contract does not exist!',
    200000: 'Market information does not exist',
    300000: 'Direction error',
    300001: 'Type error',
    300002: 'The price is lower than or equal to 0',
    300003: 'The placing quantity is less than the minimum trading unit',
    300004: 'Order status error',
    300005: 'Time or type error',
    300006: 'ORDER_FROM Error',
    300007: 'The order quantity must be smaller than 10000000',
    300008: 'The maximum price can not exceed 100000',
    300009: 'Closing orders cannot exceed positions', // 0515
    300010: 'Close price triggers liquidation price',
    300011: 'In liquidation, trade is suspended!',
    300012: 'The order does not exist',
    300013: 'The placing price is not fair',
    300014: 'Order quantity is not fair',
    300015: 'Trade is unavailable before designated opening time',
    400000: 'No holding position',
    400001: 'The position type does not exist',
    400002: 'This operation will trigger liquidation price',
    400003: 'For adding or reducing the margin, the minimum unit is 0.0001',
    400004: 'Margin needs not to be changed in cross position',
    400005: 'Insufficient margin can not be reduced',
    400008: 'You cannot adjust leverage as there is position or order', // 0515
    500000: 'Login failed',
    500001: 'User login timed out',
    500002: 'User has not logged in',
    500003: 'The current account is locked out, please contact the customer service',
    500004: "User's available balance is not enough",
    500005: 'Login user and order user are not identical',
    600000: 'The currency does not exist',
    700000: 'Too many login password errors',
    700001: 'Trading password locked',
    700002: 'Trading password verification failed/Trading password error',
    800000: 'kLine type error',
    100: 'Successful transfer',
    101: 'Transfer failed',
    300: 'Submit order',
    301: 'Cancel submission',
    302: 'Cancel an order',
    303: 'Cancel multiple orders',
    304: 'Opening execution',
    305: 'Closing execution',
    306: 'Order canceled successfully',
    307: 'Orders canceled successfully',
    400: 'Liquidation',
    401: 'Liquidation execution',
    500: 'Auto Deleveraging',
    600: 'Charge overnight fee',
    700: 'Funding exchange',
    10100000: 'Contract does not exist',
    10100001: 'Market news does not exist',
    10200000: 'You are not logged in',
    10200001: 'Insufficient available balance',
    10200002: 'Login user is not the order user ',
    10200003: 'Transaction password locked',
    10200006: 'Account does not exist',
    10200007: 'The current account is locked out, please contact the customer service',
    10200008: 'User blocked',
    10300000: 'Exceed the maximum number of contracts',
    10300001: 'Price fluctuations cannot exceed ±50% of the index price',
    10300002: 'Order numbers exceed the limit',
    10300003: 'Closing orders cannot exceed positions',
    10300004: 'Order status error',
    10300005: 'Time type error',
    10300006: 'ORDER_FROM error',
    10300007: 'Order does not exist',
    10300008: 'Cancellation failed, there is no cancelable order',
    10300009: 'Funding exchanging, transaction suspends',
    10300011: 'The order amount is greater than the number of open positions, closable positions are insufficient',
    10300012: 'As part of the order has not been executed yet, closable positions are insufficient',
    10300013: 'There is no closable long positions',
    10300014: 'There is no closable short positions',
    10400000: 'No position',
    10400002: 'This action will trigger liquidation',
    10500001: 'Data already exists',
    10500002: 'Failed to write to database',
    10900006: 'Server busy',
    900000: 'Missing parameters',
    900001: 'Parameter format or type error',
    999999: 'System error',
    10900002: 'Too frequent operations',
    10900007: 'Something went wrong, please try again later!',
    614: 'In settlement/delivery, transfer services  suspended',
    10300010: 'Transactions suspended',
    151: 'Abnormal operation, the account is temporarily locked down, please contact the customer service to unlock',
    11300003: 'The number of orders exceeds the number of open positions, and available closing positions are insufficient.',
    11400003: 'Part of the order has not been executed, the available closing positions are insufficient',
    11400004: 'No long positions to close',
    11400005: 'No short positions to close'
  },
  // 推送错误码
  wsErrorCode: {
    100: 'Successful transfer',
    101: 'Transfer failed',
    151: 'The current account is locked out, please contact the customer service',
    300: 'Submit order',
    301: 'Cancel submission',
    302: 'Cancel an order',
    303: 'Cancel multiple orders',
    304: 'Opening execution',
    305: 'Closing execution',
    306: 'Order canceled successfully',
    307: 'Orders canceled successfully',
    400: 'Liquidation',
    401: 'Liquidation execution',
    500: 'Auto Deleveraging',
    600: 'Charge overnight fee',
    700: 'Funding exchange',
    10100000: 'Contract does not exist',
    10100001: 'Market news does not exist',
    10200000: 'You are not logged in',
    10200001: 'Insufficient available balance',
    10200002: 'Login user is not the order user ',
    10200003: 'Transaction password locked',
    10200006: 'Account does not exist',
    10200007: 'The current account is locked out, please contact the customer service',
    10200008: 'User blocked',
    10300000: 'Exceed the maximum number of contracts',
    10300001: 'Price fluctuations cannot exceed ±50% of the index price',
    10300002: 'Order numbers exceed the limit',
    10300003: 'Closing orders cannot exceed positions',
    10300004: 'Order status error',
    10300005: 'Time type error',
    10300006: 'ORDER_FROM error',
    10300007: 'Order does not exist',
    10300008: 'Cancellation failed, there is no cancelable order',
    10300009: 'Funding exchanging, transaction suspends',
    10300011: 'The order amount is greater than the number of open positions, closable positions are insufficient',
    10300012: 'As part of the order has not been executed yet, closable positions are insufficient',
    10300013: 'There is no closable long positions',
    10300014: 'There is no closable short positions',
    10400000: 'No position',
    10400002: 'This action will trigger liquidation',
    10500001: 'Data already exists',
    10500002: 'Failed to write to database',
    900000: 'Missing parameters',
    900001: 'Parameter format or type error',
    999999: 'System error',
    614: 'In settlement/delivery, transfer services  suspended',
    10300010: 'Transactions suspended'
  },
  productList: {
    name1: 'Ordinary',
    text1: 'Limit Price',
    name2: 'IOC',
    text2: 'Limit Price(IOC)',
    name3: 'FOK',
    text3: 'Limit Price(FOK)',
    name4: 'Post-only',
    text4: 'Limit Price(Po)'
  },
  errorMessage: {
    error1: 'Please enter a number greater than 0!',
    error2: 'Please enter a number up to two decimal places!',
    error3: 'Number with X decimal places',
    error4: 'Maximum buyable quantity',
    error5: 'Maximum salable quantity',
    error6: 'Please enter the correct interest rate',
    error7: 'Minimum number you can input is',
    error8: 'Please enter the correct quantity',
    error9: 'Please enter 2~30 days',
    error10: 'Please enter 6 digits capital password!',
    error11: 'Maximum number you can input is',
    error12: 'The maximum price you can enter is',
    error13: 'Order price cannot exceed limit price, ',
    error14: 'Order price cannot exceed stop price,',
    turnOutAccount: 'Please select transfer-out account',
    accountAddressDifferent:
      'Transfer-in account and transfer-out account cannot be the same.',
    turnIntoAccount: 'Please select transfer-in account',
    transferAmount: 'Please enter the correct transfer amount.',
    amount1: 'Transfer amount must be greater than 0.',
    amount2: 'Transfer amount cannot exceed maximum available amount.'
  },
  kLineType: {
    buttonName: 'Line',
    min: 'min',
    hours: 'hour',
    day: 'day',
    week: 'week'
  },
  tradeHistory: {
    all: 'All',
    text: 'Filter',
    selectContract: 'Contract',
    selectSite: 'Site',
    contract: 'Contract',
    size: 'Amount(CONTR)',
    dealSize: 'Executed',
    residue: 'Remaining',
    dealPrice: 'Execution Price',
    dealValue: 'Execution Price',
    type: 'Type',
    entrustTime: 'Time',
    side: 'Long/Short',
    closeType: 'Open/Close',
    more: 'Long',
    less: 'Short',
    open: 'Open',
    close: 'Close',
    entrustPrice: 'Price',
    entrustSize: 'Amount',
    status: 'Status',
    present: 'Balance',
    in: 'Transfer In',
    out: 'Transfer Out',
    date: 'Date'
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
    title: 'Order History',
    status1: 'Completely Executed',
    status2: 'Order History',
    done: 'Execution Records',
    cancel: 'Cancellation Records',
    asset: 'Funds Records'
  },
  // 合约赢家秀
  show: {
    text1: 'Be an Eye-catching Winner! Show Your Profit Orders!',
    text2: 'Show orders together!',
    spread: 'More>',
    backTop: 'Top',
    getMore: 'Load More'
  },
  version3: {
    or: 'or',
    black: 'Night',
    white: 'Day',
    newPrice: 'Last Price',
    historyPrice: 'Real-Time Price',
    marketPrice: 'Buy at the best market price',
    marketPriceSell: 'Sell at the best market price',
    closeOpen: 'Available',
    buy: 'Open Long',
    sell: 'Open Short',
    closeBuy: 'Close Short',
    closeSell: 'Close Long',
    to: 'to',
    all: 'All',
    inputValidation:
      'The number of orders has exceeded the limit, please modify',
    start: 'Click anywhere to start a trade',
    know: 'Got it',
    moreAssets: 'Swipe up to display asset data',
    moreData: 'Swipe down to see more data, You can also “Close All”!',
    change: 'Click to switch day/night mode',
    openToolBar: 'Click to open widgets',
    submit: 'Submit',
    undo: 'Are you sure to cancel the order?',
    undoTitle: 'The order will be canceled upon execution',
    closeAll: 'Are you sure to close all positions?',
    closeAllInfo: `Please be noticed that all your positions will be closed at the <span style="color:{color}
    ">market price</span> ,and your profit and loss are subject to the depth of the market.`,
    undoAll:
      'Are you sure to<span style="color:{color}">cancel all</span>orders?',
    part: 'The partial order has not been executed',
    inadequate: 'Insufficient number of available positions',
    tip: 'Don’t prompt me next time',
    backtop: 'Top',
    announcement: 'USDT Contract Announcement',
    order300:
      '{sideType} <span style="color:{color}">{size}</span> lots {contractName} at {type} {price}',
    order340:
      '{sideType} at {type} {price},<span style="color:{color}">{size}</span> lots executed',
    noLogin:
      'Please view the position after <a href="{login}">login</a> or <a href="{registered}">registration</a>',
    more: 'More',
    //  返回旧版
    toold: 'Old Version',
    // 计算器提示
    calculatorTip: 'This price is for reference only, and the actual risk level shall prevail.',


    // 默认执行价
    defaultExecutionPrice: 'The default execution price is the market price',
    // 预设止盈止损
    preset: 'Preset take-profit and stop-loss',
    // 温馨提示
    prompt: 'Reminder',
    // 温馨提示内容
    promptContent: `<p style="text-align:left;"> The preset take-profit and stop-loss is not the actual TP/SL order, and can only be set after the order is successfully executed. <br> Due to the drastic changes in the market, the preset order may not take effect.<br> After the order is executed, all the execution amount will be placed in the take-profit and stop-loss order by default.<br>If you cancel the order, the preset take-profit and stop-loss order will be invalid at the same time.</p>`,
    // 下单价格
    orderPrice: 'Order Price',
    // 支持单侧填写，请至少填写一个选项
    oneSelect: 'Single TP or SL trigger setting is permitted, please fill in at least one.',
    // 止盈触发价≥
    stopTrigger: 'TP Trigger Price',
    // 止损触发价
    lossTrigger: 'SL Trigger Price',
    stopTrigger2: "TP Trigger Price",
    lossTrigger2: "SL Trigger Price",
    stopExecute2: "TP Execution Price",
    lossExecute2: "SL Execution Price",
    // 预估收益
    earnings: 'Estimated Return',
    // 预设止盈
    stop: 'Preset TP',
    // 预设止损
    loss: 'Preset SL',
    // 计划委托
    entrust: 'Trigger Order',
    // 计划
    plan: 'Trigger',
    // 多单开仓
    buyOpen: 'Open Long',
    // 空单卡开仓
    sellOpen: 'Open Short',
    entrustNumber: 'Execution Quantity',
    // 多单开仓
    openBuyTitle: `Are you sure to buy long positions at {type}<span style="color:{color}"> {price} </span>, to open <span style="color:{color}">{number}</span> lots`,
    // 多单平仓
    closeBuyTitle: `Are you sure to sell long positions at {type}<span style="color:{color}"> {price} </span>, to close <span style="color:{color}">{number}</span> lots`,
    // 空单开仓
    openSellTitle: `Are you sure to buy short positions (sell long positions) at {type}<span style="color:{color}"> {price} </span>, to open <span style="color:{color}">{number}</span> lots`,
    // 空单平仓
    closeSellTitle: `Are you sure to sell short positions (buy long positions) at {type}<span style="color:{color}"> {price} </span>, to close <span style="color:{color}">{number}</span> lots`,
    // 计划委托多单
    entrustBuyTitle: `Buy long positions at <span style="color:{color}"> {price} </span>, open <span style="color:{color}">{number}</span> lots {name} contract`,
    // 计划委托空单
    entrustSellTitle: `Sell short positions at <span style="color:{color}"> {price} </span>, open <span style="color:{color}">{number}</span> lots {name} contract`,
    // 新委托单
    entrustStatus1: ' New Order',
    // 触发成功
    entrustStatus2: 'Successful',
    // 已撤单
    entrustStatus3: 'Canceled',
    // 触发失败
    entrustStatus4: 'Failed',
    // 爆仓撤单
    entrustStatus5: 'Be canceled',

  },
  //usdt 中所有用到的提示说明
  usdtTips: {
    //计划委托
    planEntrust: `Before the successful triggering of the trigger order, positions and the margin will not be frozen.<br>The trigger order may not be executed and may fail due to problems such as price, position, and margin.<br>After successful triggering, the limit order may not be executed due to market or other problems. Please be aware of the above terms.`,
    // 总仓/可用
    totalPosition: `Available Positions are the positions that are available for orders.<br>All positions are the total positions in the same direction of the single currency and can be divided into two parts: available positions and orders. In the absence of order (unfilled order), the available positions equal to the total position amount.`,
    // 实际杠杆
    actualLever: `After opening multiple positions and using different leverage multipliers, the leverage will be calculated and displayed according to the actual use:<br>Actual leverage = (Position Value 1 + ... + Position Value N) / (Position Value 1 / Leverage 1 + ... + Position Value N / Leverage N)`,
    // 持仓均价
    positionAverage: `<span style="color:{color}"> It is the average position price calculated by weighted average after opening positions in the same direction multiple times. </span>The profit and loss at the time of closing are also calculated according to the average holding price.<br>Avg. Holding Price = Total Position Value/Total Number of Open Positions [separate calculation against each currency contract]`,
    // 未实现盈亏
    profitAndLoss: `Unrealized PNL (longs) = (Index Price - Average Holding Price) * Lots * Multiplier<br>Unrealized PNL (Shorts) = (Average Holding Price - Index Price) * Lots * Multiplier`,
    // 强平价预估
    strongParity: ` It is not the real liquidation price and is for reference only. When holding multi-currency positions, only the liquidation prices for all positions are reached can truly trigger the liquidation, and the system will not liquidate a single currency under the multi-currency positions. `,
    // 一件全平
    closeAll: `“Close All” is to close all positions with one-click. Currently, only market closing orders are supported, and great risks may involve in such operation. If to use, <span style="color:{color}"> please click on “Confirm”</span>.`,
    // 市价
    markekPrice: `A request to execute a buy or sell transaction at the best available price in the current market. It is widely considered the fastest and most reliable way to enter or exit a trade and provides the most likely method of getting in or out of a trade quickly. It may involve great risks, if to use, <span style="color:{color}">please click on “Confirm”</span>.`,
    // 限价
    price: `An order placed to execute a buy or sell transaction at a specified limit price or better. When placing a limit order, you must indicate the specific price. To prevent malicious pending orders, the limit price cannot exceed ±50% of the index price.`,
    // 触发价格
    triggerPrice: `Price is used as the triggering condition, and it is not used for execution or in the order.`,
    // 执行价格
    executivePrice: `It is the actual order price. If to choose the market price, then a market order will be placed. If to select the limit price, to prevent malicious pending orders, the price cannot exceed ±50% of the index price. If exceeded, the order may fail. Since the fluctuation of the digital currency is substantial, it is recommended to stop loss using the market price. `,
    // 风险度
    risk: `<span style="color:{color}">It is the indicator used to measure the position risk. When the risk reaches 100%, a liquidation process will be started.</span><br>Risk Level = (Sum of Position Value * 0.5% of Maintenance Margin) / (Current Assets - Frozen Margin)`,
    // 当前资产
    currentAssets: ` All of your assets, including available (profit and loss are included), occupied and frozen parts.`,
    // 可用资产
    availableCapital: ` Assets that can be used to open new positions, including the unrealized profit.`,
    // 占用保证金
    cashDeposit: `Margin for holding positions (When holding two-direction positions, the margin will be collected from the side with larger position values)`,
    // 冻结保证金
    frozenDeposit: `The margin required for the unexecuted order.`,
    // 资金使用率
    utilizationRate: `Capital Utilization Rate = (Margin + Frozen Margin) / Current Assets`,
    // 资金杠杆
    leverage: `A leverage calculated based on your entire assets and all positions.<br>Capital Leverage = Net Total Position Value / Current Assets * 100%`,
    // 开多
    openMore: `Make profits when the market moves in an upward trend.`,
    // 开空
    openTheEmpty: `Make profits when the market moves in a downward trend.`,
    // 限价提示标题
    priceTitle: 'Risk Warning',
    // 限价提示说明
    priceTipInfo: 'After take-profit (TP) and stop-loss (SL) triggered, the order will be placed at the <span style="color:{color}">market price</span>, and the execution price is subject to the influence of market depth. Besides, the TP/SL will be <span style="color:{color}">triggered immediately</span> once the conditions are met. Users should be cautious of the risk and read the <a href="{href}" target="__blank">User Guide</a> before use.',
    // 设置时间
    setTime: "Setup Time",
    // 触发时间
    triggeringTime: 'Trigger Time',
    // 盈利率
    rate: 'RoR (Longs): (Index Price - Opening Price)/Opening Price * Leverage * 100%\n<br/>RoR (Longs): (Index Price - Opening Price)/Opening Price * Leverage * 100%\n',
    //杠杆提示
    leverageTip: 'Successfully modified the leverage',
    // 仓位价值
    positionValue: 'Position Value = Order Price * Lot Number * Multiplier'
  }
};

export default EN
