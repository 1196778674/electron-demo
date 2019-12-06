import guide from './jp/jp-guide.js'
import handbook from './jp/jp-handbook.js'
import direct from './jp/direct.js'
import reference from './jp/jp-reference.js'
import entrust from './jp/jp-entrust.js'
import wallet from './jp/jp-wallet.js'
import regular from './jp/regular'

let JA = {
  full: {
    trade: '取引',
    moreStopLossProfit: 'ロング利食い・ストップ',
    lessStopLossProfit: 'ショート利食い・ストップ',
    moreAvePrice: 'ロングポジション平均値',
    moreLoss: 'ロングストップ',
    moreProfit: 'ロング利食い',
    lessAvePrice: 'ショートポジション平均値',
    lessLoss: 'ショートストップ',
    lessProfit: 'ショート利食い',
    loss: '損失',
    profit: '利益',
    positions: 'ポジション',
    delete: 'キャンセル',
    deleteMoreStopLoss: 'ロング注文へのストップ設定をキャンセルしますか？',
    deleteMoreStopProfit: 'ロング注文への利食い設定をキャンセルしますか？',
    deleteLessStopLoss: 'ショート注文へのストップ設定をキャンセルしますか？',
    deleteLessStopProfit: 'ショート注文への利食い設定をキャンセルしますか？',
    guideDrag: '取引ダッシュボードを任意に移動できますよ',
    guideOrderRight: 'クリックすることで、取引操作区を左側又は右側へと移動できますよ',
    guideSelectCurrency: 'クリックすることで、相場リストの第二入口が見えますよ',
    guideTab: 'ここをクリック又は“Tab”で契約リスクを開け/閉めますよ',
    guideTrade: ' “スペ—スキ—”又は“取引”をクリックすることで、取引ダッシュボードを開け/閉めますよ',
    smallGuideKline1: 'ローソクチャットをダブルクリックすることで、専門家取引画面に入れ/退出できますよ',
    smallGuideKline2: 'ロング/ショート価格ラインを上下に移動することで、簡単に利食い・ストップを設定できますよ'
  },
  common: {
    success: '操作成功！',
    noData: 'データがありません',
    more: 'もっと見る',
    tip: '注意'
  },
  header: {
    power: 'Bitハッシュ',
    index: 'ホーム',
    deposit: '入金',
    withdraw: '出金',
    // notice: '公告',
    login: '新規登録',
    register: 'ログイン',
    asset: '資産',
    user: 'ユーザー',
    logout: 'ログアウト',
    trade: '仮想通貨契約',
    usdtTrade: 'USTD契約',
    regularContract: '3番限契約',
    guide: '契約ガイド',
    reference: '参考情報',
    information: '資産情報',
    newPlayer: '初心者ガイド',
    userShow: 'レビューシェア',
    changeOldVersion: '旧版へ',
    userSafe: 'アカウント安全性',
    devTool: '開発者ツール',
    invite: '招待',
    userAuth: '身分認証',
    safeExit: 'ログアウト',
    lastLogin: '前回のログイン地域',
    marketableAssets: '純資産変換（{current}）',
    tradeHistory: '取引履歴'
  },
  footer: {
    products: 'プロダクト',
    about_us: '基本情報',
    about_us_1: '会社概要',
    about_us_2: 'チームについて',
    about_us_3: '連絡先',
    about_us_4: '公式公告',
    service_support: 'サポート',
    service_support_1: 'API ',
    service_support_2: 'お問合せ',
    service_support_3: 'デジタル資産について',
    service_support_4: '仮想通貨上場・説明',
    service_support_5: 'SMARTチェン',
    official_community: 'ソーシャル',
    official_community_1: 'Telegram',
    official_community_2: 'Wechat',
    official_community_3: 'QQグループ',
    downLoad: 'ダウンロード',
    downLoad_1: 'iOS App',
    downLoad_2: 'Android App',
    downLoad_3: 'Google Play',
    follow: 'フォローしてね',
    global: '58COIN GLOBAL'
  },
  //  未登录
  noSign: {
    sign_in: 'ログイン',
    sign_up: '新規登録',
    no_sign: 'まだログインしていません\n',
    please: '',
    deal: 'してから取引してください'
  },
  // 発注
  trade: {
    titleName: '発注',
    placeOrderDefault: '枚',
    placeOrderBTC: 'ビットコイン',
    unitChange: 'スイッチ',
    limit: '指値',
    orderType: 'タイプ',
    market: '成行',
    entrustPlan: '注文プラン',
    price: '価格',
    triggerPrice: 'トリガ価格',
    executePrice: '成立価格',
    quantity: 'ポジション',
    buy: '購入',
    long: 'ロング',
    input: '入力してください',
    sell: '売却',
    short: 'ショート',
    cost: '必要証拠金',
    layerCost: '保有ポジション証拠金',
    orderValue: '注文価額',
    availableBalance: '利用可能残高',
    // ポップアップに届くメッセージ
    markPrice: 'マーク価格',
    positionAfter: '約定後ポジションサイズ',
    title: 'ご注文を確認してください',
    transfer: '振込',
    buyIn: '購入',
    doMore: 'ロング',
    sellOut: '売却',
    doNull: 'ショート',
    openPosition: '参入',
    closePosition: '決済',
    error300016: 'リクェストが頻繁すぎて、$ 秒後もう一度試してください',
    leverage: 'レバレッジ', // 0528
    latestDeal: '最新出来値',
    timeDeal: 'リアルタイム出来値',
    depth: 'インパクト組合せ',
    latestPrice: '最新価格',
    gains: '上昇幅',
    // sizeMaxError: '注文過多',
    sizeMaxError: '利用可能資金不足',
    sizeMinError: '注文量はトレード単位の下限を超えています'
  },
  tradePrompt: {
    price: '正しい価格を記入下さい',
    size: '正しいポジションを記入下さい',
    triggerPrice: '正しいトリガー価格を記入下さい',
    doPrice: '正しい執行価格を記入下さい'
  },
  transform: {
    from: 'ここから',
    turnOutAccount: '振出元アカウント',
    transferTo: 'ここへ',
    transferAccount: '振出数量',
    swapAccount: 'USTDアカウント',
    inputAccount: '振出数量',
    maxTransform: '最大振出可能',
    allTransform: '全部振出',
    transform: '振出',
    internalTransfer: '内部振込は手数料を取らない',
    tips: '注意：未決済契約持つ状態で出金すると',
    strongLevel: '清算値が計算し直されます。',
    tipsContent:
      '振り出す金額が多い場合、オーバーレバレッジするリスクも大きくなります。\n' +
      '          損失を出ないよう、アカウントで相場変動に対応できる証拠金を事前に置いてください。\n' +
      '          未決済契約がある場合、残高の{percentage}まで振り出すことができるが、ない場合全部振り出すことができます。',
    same: '振出すアカウントと着金アカウントが違わなければなりません',
    transferUsdtTip:
      '注意：未決済注文がある状態で出金すれば、リスク率が計算し直される。出金金額が多過ぎる場合オーバーレバレッジの可能がも増えるため、損失しないように、アカウントに相場変動に対応できる証拠金を残してください。未決済注文がない場合全部出金できるが、ある場合本金の{percentage}まで出金可能となって、粗利は利用可能だが出金できない。',
    transferRegularTip:
      '提示：未決済注文がある場合、振出したらリスク率が計算し直されるし、金額が大き過ぎるなら、オーバーレバレッジを発生する可能性もある。資金を守るよう、アカウントに充分の証拠金を残してください。未決済注文が保有する場合、本金の{percentage}が振り出せるが、未実現損益が利用できるけど振り出せない。保有しない場合全部振り出せる。決済金額が本金に入ったら、実現損益も全部振り出せる。'
  },
  // レバレッジ調整
  leverage: {
    title: '保有ポジション',
    contract: '契約',
    ROE: 'ROE',
    all: 'クロス ',
    leverage: 'レバレッジ',
    fundingRatio: '資金調達料金',
    cross: 'クロースレバレッジ', // 0515
    crossTimes: 'クロース{times}X', // 0515
    tip1: 'ロング = (1 - 参入価格/マーク価格) * レバレッジ',
    tip2: 'ショート = (参入価格/マーク価格 - 1) * レバレッジ',
    low: 'ロー', // 0515
    high: 'ハイ', // 0515
    risk: 'リスク' // 0515
  },
  // 参考情報
  referenceInfo: {
    title: '参考情報',
    more: 'もっと見る',
    exchange: '取引所ガイド',
    contract: '契約ガイド',
    markPrice: '公正価格(マーク価格)',
    earnLoss: '利益/損失ガイド',
    fee: '手数料',
    questions: 'FAQ'
  },
  // マーケット情報
  productInfo: {
    markPrice: 'マーク価格',
    lastPrice: '直近価格',
    increase: '上げ幅',
    price: '建玉残高',
    feeRatio: '調達率',
    size: '24小时取引数量',
    sizeBTC: '24小时取引数量',
    highPrice: '最高価格',
    lowPrice: '最低価格',
    fundingRate: '調達率',
    prompt: '資金調達率が±0.03%以内の場合、交換調達が発生しません。'
  },
  // 委托
  createdEntrust: {
    submitOrder: '注文提出',
    limit: '指値',
    market: '成行',
    price: '価格',
    positions: 'ポジション',
    lot: '枚',
    leverageInfo:
      'レバレッジ：現在多種類のレバレッジ倍数を提供する。倍数が上がると共にリスクが上がるため、慎んでご利用ください。',
    limitInfo:
      '成行：制限された金額とその以上の金額でないと約定できない。必ず詳しい金額を書いてください。',
    buyable: '参入可能',
    salable: '売却可能',
    openlong: '参入ロング',
    closelong: '決済ロング',
    openshort: '参入ショート',
    closeshort: '決済ショート',
    // 确认委托弹出框
    A_confirmOrder: '確定注文',
    A_buy: '購入参入',
    A_contract: '契約',
    A_leverage: 'レバレッジ　',
    A_direction: '方向',
    A_market: '成行',
    A_type: '注文タイプ',
    A_price: '注文価格',
    A_Amount: '注文数量',
    A_margin: '必要証拠金',
    A_riskLevel: '現在リスク率',
    A_ror: '収益率',
    A_sell: '売却参入',
    A_limit: '指値',
    A_buy_title:
      '<span style="color:{color};">{num}</span>枚の{name}契約を購入する',
    A_sell_title:
      '<span style="color:{color};">{num}</span>枚の{name}契約を売約する',
    A_buy_flat: ' 購入決済',
    A_sell_flat: '売却決済',
    marketInfo:
      '成行：当時の市場価格で即時約定する指令である。ユーザーが具体的な価格を決める必要がなく、当時市場で最適な価格で執行され約定する要求を出してだけで十分。比較的にリスクが大き。',
    positiveNum: '正数を入力してください',
    positiveInteger: '正整数を入力してください',
    importPrice: '価格を入力してください',
    contractHand: '契約枚数を入力してください',
    noLeveling: '決済可能ポジションがない',
    limitNum: '最大注文枚数を超えている',
    positions_tips:
      'ポジション価値総額*MM/現有資産（ユーザーのアカウント内のリスク率＝100%になる場合、すオーバーレバレッジを始めるため、リスク率をぜひご注意ください。）',
    hand:
      '取引単位（手）：取引規模とも呼ばれる。取引所に各手の契約が代表する原資産とする物の数量のことである。eg: 1{hand}{name} = {value}{tableName}',
    explosion:
      '当価格で市場に注文を展示すると清算される可能性があります。展示する注文があるかを確認してから、もっと合理な価格でしてください。',
    explosionConfirm: '提出する',
    explosionProof: 'オーバーレバレッジ防せ開始',
    positionValue: 'ポジション価額'
  },

  // 币种列表，最新成交列表
  tradeList: {
    latestPrice: '最新価格',
    gains: '上昇幅',
    latestDeal: '最新約定価',
    timeDeal: 'タイムリー約定価'
  },
  // 用户资产信息  我的合约资产
  asset: {
    fundLeverage: '資金レバレッジ',
    fundUtilizationRate: '資金使用率',
    contractAsset: '契約資産',
    currentAssets: '資産',
    availableAssets: '利用可能',
    margin: '必要証拠金',
    frozenDeposit: '凍結証拠金',
    unRelease: '未実現損益',
    alreadyRealized: '当日実現済',
    commissionFee: '当日手数料',
    riskDegree: 'リスク率',
    riskDegreeInfo:
      'リスク率が100％に達した場合、オーバーレバレッジが開始するため、リスク率を是非ご注意ください。',
    transform: 'チャージ',
    transfer: '振込'
  },
  // 列表
  transactionList: {
    maintain: "維持証拠金率",
    elpTips1: '推定清算価格：',
    elpTips2: '推定清算価格イコール実際の清算価格ではない, ご参考まで。',
    elpTips3:
      '多種類銘柄の保有ポジションは、全ての銘柄の清算価格を同時に達する場合のみ、システムがが実際に清算する。この状態で、単独の銘柄を清算することができない。',
    strongParity: '推定清算価格',
    returnPrice: 'トリガー価格での収益',
    lossPirce: 'トリガー価格での損失',
    returnPrice1: '執行価格での収益',
    lossPirce1: '執行価格での損失',
    emptyBill: 'ショート注文',
    moreBill: 'ロング注文',
    profitDeficit: '利食い/ストップ',
    profitLoss: '損益',
    triggerPrice: 'トリガー価格',
    mode: '方式',
    executionPrice: '執行価格',
    number: '数量',
    stopProfit: '利食い',
    stopLoss: 'ストップ',
    triggerOrder: '予備注文',
    newOrder: '未トリガー',
    SuccTrigger: 'トリガー成功',
    canceled: '手作業取消し',
    triggerFailed: 'トリガー失敗',
    liquidationCancel: '取り消し',
    Expired: "清算取消し",
    cancel: "決済取消し",
    reorder: '再展示',
    all: '全部',
    chongzhi: 'リセット',
    queding: '確定',
    zdjc: 'ADL',
    qpwt: '清算注文',
    positions: 'ポジション',
    currentEntrustment: '注文',
    excuted: '約定済',
    records: '取り消し履歴',
    closeAll: '1-Click全部決済',
    batchCancel: '複数キャンセル',
    prompt:
      '1-Click全部決済は成行注文（使用可能ポジションがある場合のみ）しか支持しません。リスクが大きため、慎んでご利用ください。',
    currency: '銘柄',
    openLeve: '参入決済',
    commissionPrice: '注文価格',
    commissionAmount: '注文数',
    retractable: 'キャンセル可能',
    dealDone: '約定済',
    status: '状態',
    time: '時間',
    operate: '操作',
    type: 'タイプ',
    reamaining: '取消し数',
    excutedPrice: '約定価格',
    excutedAmount: '約定数量',
    fee: '手数料',
    totalPosition: 'クロス',
    available: '利用可能',
    avgPrice: '未決済平均価格',
    actualLeverage: '実際レバ',
    pnl: '損益',
    occupationMargin: '必要証拠金',
    unrealisedPNL: '未実現損益',
    profitability: '損益率',
    closePosition: '決済',
    total: '総計',
    expand: '開く',
    collapse: '閉める',
    noPosition: 'ポジションがありません',
    noData: 'データがありません',
    more: 'ロング',
    less: 'ショート',
    buy: '購入',
    Sell: '売却',
    // S_***  列表中用到的状态
    S_openPosition: '参入',
    S_closePosition: '決済',
    S_Unfilled: '未約定',
    S_PartialDeal: '一部約定',
    S_DealDone: '約定済',
    S_Revoked: '已撤销',
    S_failure: '失敗',
    S_LimitPrice: '指値',
    S_MarketPrice: '成行',
    // A_**** 弹出框中用到的
    A_Confirm: '確認',
    A_Cancel: 'キャンセル',
    A_One_Title: '当注文をキャンセルしますか？',
    A_One_Info: '*を執行する際、当注文をキャンセルします',
    A_All_FullFlat_Title: '全部決済しますか？',
    A_All_FullFlat_Info:
      'ポジションが全部指値で市場に表示し決済します。損益は市場に大き影響を与えるため、リスクをご了承する上に使用してください。',
    A_All_Cancel_Title: 'ワンボタンで全部の注文をキャンセルしますか？',
    A_All_Cancel_Info: '*を執行する際、全ての注文をキャンセルします',
    A_Close: '決済',
    A_LimitPrice: '指値',
    A_MarketPrice: '成行',
    A_Price: '価格',
    A_Amount: '決済数量',
    A_Hand: '手'
  },
  // 取引
  tradeDetailList: {
    position: 'ポジション',
    current: '注文',
    already: '約定',
    record: '取消し履歴',
    planOrder: '注文プラン',
    currencyPlan: 'プラン',
    historyPlan: '過去のプラン',
    information: '資産情報',
    contract: '契約',
    contractTip: '契約コード',
    positionQty: 'サイズ',
    orderValue: '値',
    positionOrderValue: 'ポジション価格',
    positionOrderValueTip: '契約での価額',
    entryPrice: '参入価格',
    entryPriceTip: '平均購入/売却価格',
    markPrice: 'マーク価格',
    markPriceTip:
      'これは最新のマーク価格であり、損益と証拠金の計算に使われています。マーケット操縦のため少し偏差が出る可能性があるが決済には差し支えません。',
    liquidationPrice: '決済価格',
    liquidationPriceTip: 'ロングやショートの場合、ポジションは清算されます。',
    margin: '証拠金',
    ratio: 'ROE %',
    ratioTip1: 'ロング = (1 -　参入価格/マーク価格) * レバレッジ',
    ratioTip2: 'ショート = (参入価格/マーク価格　- 1) * レバレッジ',
    realised: '実現損益',
    unrealised: '未実現損益',
    unrealisedTip1: '未実現損益(ロング) = サイズ * （1/参入価格- 1/マーク価格)',
    unrealisedTip2:
      '未実現損益(ショート) = サイズ * （1/マーク価格 - 1/参入価格)',
    more: '(ロング)',
    less: '(ショート)',
    piece: '手',
    operate: '操作',
    revocation: '戻る',
    size: 'サイズ',
    price: '価格',
    completeDeal: '約定',
    surplus: '残量',
    value: '注文価額',
    dealPrice: '約定',
    entrustPrice: '注文価格',
    executePrice: '成立価格',
    triggerPrice: 'トリガ価格',
    type: 'タイプ',
    status: 'ステータス',
    date: '時間',
    dealSize: '約定サイズ',
    closed: 'ポジションを決済',
    closedMark: '(決済)', // 0528
    market: '成行',
    limit: '指値',
    batchRevocation: '全部取消す',
    noPosition: 'ポジションがありません',
    changeMargin: '証拠金調整',
    closePosition: 'ポジションを手仕舞う',
    textPosition: '保有ポジションが注文しています',
    error300016: 'リクェストが頻繁すぎて、{time}秒後やり直してください',
    revocationSuccess: 'キャンセルした注文の履歴！',
    // 資産情報
    walletBalance: '残高',
    walletBalanceTip: '残高 = 利用可能残高 + 凍結証拠金 + ポジション証拠金',
    marginBalance: '証拠金残高',
    usefulBalance: '利用可能残高',
    usefulBalanceTip: '参入用証拠金',
    userEquity: 'ユーザー権益',
    userEquityTip: '無期限契約中の全権益 ',
    positionMargin: 'ポジション必要証拠金',
    positionMarginTip: '参入時の必要証拠金',
    noData: 'データがありません',
    // 0515
    closedLimit: '指値決済',
    closedMarket: '成行決済'
  },
  // information-list デプス
  entrustList: {
    lastPrice: '直近',
    size: 'サイズ',
    BTC: '数量',
    price: '値',
    amount: '総量',
    indexPrice: 'インデックス',
    fairPrice: 'マーク価格',
    deep: 'インパクト組合せ',
    bit: '桁'
  },
  // history-list 約定履歴
  historyList: {
    title: 'ライブ取引',
    size: 'サイズ',
    price: '価格',
    date: '時間'
  },
  // ポップアップボタン
  layerButton: {
    cancel: '戻る',
    confirm: '確認'
  },
  // 注文（取引）ポップアップ
  layerTrade: {
    all: 'クロース 100X',
    leverage: 'レバレッジ',
    title: 'ご注文を確認してください',
    limit: '指値',
    market: '成行',
    buy: '購入',
    sell: '売却',
    cross: 'クロース',
    textType1Coin: '＄{price} で{name} {size} 手{side}',
    textType1: '＄{price}で{name}{size}件を{side}',
    textType2Coin: '{type}で{name}{size}手を{side}',
    textType2: '{type}で{name}{size}件を{side}'
  },
  // 決済ポップアップ
  layerClosed: {
    limit: '指値',
    market: '成行',
    buy: '購入',
    sell: '売却',
    textType1Coin: '＄{price} で{name} {size} 手{side}',
    textType1: '＄{price}で{name}{size}件を{side}',
    textType2Coin: '{type}で{name}{size}手を{side}',
    textType2: '{type}で{name}{size}件を{side}',
    text3: '作動時、ポジションを決済します',
    text4: '*執行する際、全部の注文がキャンセルとなります',
    text5: '*執行する際、当注文がキャンセルされます'
  },
  layerMargin: {
    add: '証拠金追加',
    reduce: '証拠金減少',
    position: 'ポジション',
    usefulMargin: '利用可能証拠金'
  },
  // 決済ポップアップ 0515
  layerPositionClosed: {
    placeHolderPrice: '価格',
    placeHolderSize: 'サイズ',
    all: '全部',
    surplus: '決済可能なポジション残数',
    closed: '決済済みのポジション',
    tip1:
      '今のご注文は他のポジションを決済する注文の取り消し規則に違反する可能性があります。意図したとおりであれば、この操作を確認してください。' // 0528
  },
  //収益計算機
  calculate: {
    title: '収益計算機',
    profitCal: '収益計算',
    goalPriceCal: '目標価格計算',
    liquidationCal: '清算価格計算',
    contract: '契約',
    type: '参入タイプ',
    leverage: 'レバレッジ',
    unit: '単位',
    openPrice: '参入価格',
    closePrice: '決済価格',
    amount: '参入数量',
    balance: '契約残高',
    goalProfit: '目標収益',
    useProfit: '予想収益で',
    useProfitRate: '予想収益率で',
    calculate: '計算開始',
    result: '計算結果',
    margin: '保証金',
    profit: '収益',
    profitRate: '収益率',
    goalClosePrice: '目標決済価格(USDT)',
    liquidationPrice: '清算価格(USDT)',
    more: 'ロング',
    less: 'ショート',
    piece: '手',
    tips:
      '注：実際の取引に手数料があるため、計算結果は取引結果と完全一致しない可能性もある。',
    warningTips1:
      '合理範囲を超えました。多数注文の場合、予想収益は参入数量より低くなければなりません',
    warningTips2:
      '合理範囲を超えました。多数注文の場合、予想収益はレバレッジ倍数以下にしなければなりません',
    positionROR: 'ポジション収益率',
    principalROR: '本金収益率'
  },
  // 右侧工具栏
  toolbar: {
    ewm: '体験しよう',
    ztqh: 'テーマ切替',
    userCenter: '個人',
    announcement: '公告',
    jsq: '計算機',
    yhfk: 'アドバイス',
    lxkf: 'カスタマー',
    hyzn: '契約ガイド',
    ewCode: ' QRコード'
  },
  // 公告弹窗
  layerAnnouncement: {
    title: '公告'
  },
  panel: {
    text: '無期限'
  },
  // ポップアップ 0515
  emerge: {
    prompt: '注意',
    limit: '指値',
    market: '成行',
    buy: '購入',
    sell: '売却',
    leverage: 'レバレッジ',
    margin: '証拠金',
    adjustLeverage: 'レバレッジ調整',
    adjustMargin: '証拠金調整',
    entrustSend: 'ご注文提出',
    entrustSuccess: '注文成功',
    entrustPart: '一部約定',
    entrustAll: '約定',
    entrustFailed: '注文失敗',
    marketEntrustPart: '指値一部約定',
    revocationSuccess: '取り消し完了',
    revocationBachSuccess: 'まとめキャンセル成功',
    revocationFailed: '取り消し失敗',
    text1: ' {type}{price}で{size}手{side}'
  },
  // trade index 0515
  index: {
    usdt_title: 'リニア契約',
    titlePart: '-最先端の仮想通貨商品取引プラットフォーム',
    titleAll: 'SWAP-最先端の仮想通貨商品取引プラットフォーム',
    spot: 'スポット',
    cloudy: 'ハッシュ',
    otc: 'OTC',
    swap: '百倍無期限契約取引',
    spot_trading: 'スポット取引',
    futures: '先物取引',
    mine_pool: 'マイニングプール',
    sign_in: 'ログイン',
    sign_up: '新規登録',
    logout: 'ログアウト',
    user: 'ユーザーＩＤ',
    'product-title1': '担保融資',
    'product-title2': '無期限契約',
    'product-title3': 'レバレッジ',
    'product-title4': 'スポット',
    'product-title5': ' OTC',
    product_title1_c_1: '仮想通貨ストックを活性化させる',
    product_title1_c_2: '高額抵当率',
    product_title1_c_3: '低額金利',
    product_title1_c_4: '何回も借入可能',
    product_title1_c_5: '資金使用に無制限',
    product_title1_c_6: '資金繰り困難を解決',
    product_title2_c_1: '最も人間性ある契約',
    product_title2_c_2: '定時レバ超えなし',
    product_title2_c_3: '損失均等割りなし',
    product_title2_c_4: '決済日なし',
    product_title2_c_5: '保有コストなし',
    product_title2_c_6: '絶好なグルーピングと流動性',
    product_title3_c_1: '最高の3倍レバレッジ',
    product_title3_c_2: '業界最低の金利',
    product_title3_c_3: '本金にレバをかける',
    product_title3_c_4: '収益を大幅に伸ばせる',
    product_title3_c_5: 'ロング・ショート両方支持',
    product_title4_c_1: '仮想通貨交換可能',
    product_title4_c_2: '低額手数料',
    product_title4_c_3: '数百の取引ペア',
    product_title4_c_4: '価値ある銘柄を収集',
    product_title4_c_5: '素早く取引をマッチング',
    product_title5_c_1: ' OTCで仮想通貨を取る可能',
    product_title5_c_2: '取引手数料なし',
    product_title5_c_3: 'プラットフォーム担保',
    product_title5_c_4: '公告費なし',
    product_title5_c_5: '売買両方の利益を守る',
    btn: '詳細を見る',
    service_title: '58COIN ワンステップな仮想通貨サービスプラットフォーム',
    service_title1: '革新な製品',
    service_title1_content1: '無期限契約を創始',
    service_title1_content2: '担保融資を創始',
    service_title2: '資金強大',
    service_title2_content1: '世界top10なマイニングプール',
    service_title2_content2: '一万以上のBTCを保有',
    service_title3: 'トップ技術保証',
    service_title3_content1: ' BAT、OKEx等からのチームメンバー',
    service_title3_content2: '多層暗号化、究極な安全保護、超高効率',
    service_title4: '24ｈ専有CS',
    service_title4_content1: '百万ユーザー　迅速に応答',
    service_title4_content2: '多種な外国語サービス　世界中に繋がる',
    down_load_title: 'いつどこでも手軽いに操作',
    down_load_content1: 'リアルタイムマッチング · 瞬時に着金',
    down_load_content2: '契約をレバで抵当· 簡単に体験できる',
    products: 'プロダクト',
    about_us: '基本情報',
    about_us_1: '会社概要',
    about_us_2: 'チームについて',
    about_us_3: 'メール連絡先',
    about_us_4: '公式公告',
    service_support: 'サポート',
    service_support_1: 'API',
    service_support_2: 'お問合せ',
    service_support_3: '仮想通貨紹介',
    service_support_4: '新銘柄登録申請及び説明',
    official_community: 'ソーシャル',
    official_community_1: 'Telegram',
    official_community_3: 'QQグループ',
    official_community_4: 'Wechatグループ',
    official_community_5: 'API交流グループ',
    follow: 'フォローしてね',
    weChat: '読み取ってWechatグループに参加',
    api: '読み取ってAPIグループに参加',
    fee: 'HOT ! ! !',
    hot: 'HOT',
    returnTop: 'トップへ',
    see_more: 'もっと見る',
    downLoad: 'ダウンロード',
    addSuccess: 'お気に入り追加成功'
  },
  // ステータス
  depositStates: {
    WAIT: '入金を待つ',
    WAIT_CONFIRM: '入金を待つ',
    SUCCESSED: '入金完了',
    FAILED: ' 入金失敗'
  },
  source: {
    PC: 'ホームページ',
    API: 'API',
    IOS: 'IOS',
    Android: 'Android'
  },
  // 注文ステータス
  orderStatusList: {
    // name1: '全部',
    name2: '未約定',
    name3: '注文失敗',
    name4: '約定',
    name5: '取り消し'
  },
  //注文ステータス—注文プラン
  planOrderStatusList: {
    name1: 'ノー・トリガ',
    name2: 'トリガ済み',
    name3: 'キャンセル'
  },
  //タイプ
  orderTypeList: {
    limit: '指値',
    market: '成行',
    plan: '予備'
  },
  // オーバーレバレッジタイプ
  orderLiquidationList: {
    liquidation: '清算注文',
    ADL: '自動レバレッジ'
  },
  confirm: {
    cancel: 'キャンセル',
    determine: '確認'
  },
  filter: {
    onPage: '前へ',
    nextPage: '後へ',
    select: '取引選択',
    status: 'ステータス',
    noData: 'データがありません',
    undo: '取り消し',
    buy: '購入',
    sell: '売却',
    marketPrice: '成行',
    withdrawal: '取り消し',
    withdrawalAll: '全部取り消し',
    viewHistoryWithdrawal: '注文履歴チェック',
    determineWithdrawal: 'ご注文を取り消しますか？',
    cancelAll: '全注文をキャンセルしますか？',
    wattNotCompletedListOne: '注文時間',
    wattNotCompletedListTwo: 'タイプ',
    wattNotCompletedListThree: '価格',
    wattNotCompletedListFour: '平均成立価格',
    wattNotCompletedListFive: 'サイズ',
    wattNotCompletedListSix: '約定数量',
    wattNotCompletedListSeven: '注文でき元',
    wattNotCompletedListEight: 'ステータス',
    wattNotCompletedListNine: '操作',
    wattNotCompletedListTen: '一部約定',
    wattNotCompletedListEleven: 'ペア',
    type: 'タイプ',
    remainAmount: '残量',
    volume: '約定数量',
    entrustHistory: '注文履歴',
    entrust: '未決済注文'
  },
  errorCode: {
    601: 'このアカウントではこの銘柄が利用できません',
    602: '出金アカウント残高不足',
    603: '振込元と振込先は一致しないでください',
    604: '振込金額は0以上にしてください',
    605: '本日の送金回数が上限になりました',
    606: '手仕舞ってないポジションがあるため、振込元できません',
    607: 'レバレッジは銘柄ペアを指定する必要があります',
    608: 'このインターフェイス・ユニットからはこのページを訪問できません',
    611: '処理待ちの振込が１件あるため、現在振込可能の残高が足りません',
    612: '銘柄タイプが間違っている',
    9999: 'システムエラー',
    0: '操作成功',
    100000: '契約が見つかりません',
    200000: 'マーケット情報が見つかりません',
    300000: '発注方向が間違っています',
    300001: '発注タイプが間違っています',
    300002: '価格が0にイコールまたは以下に設定します',
    300003: '注文量はトレード単位の下限を超えています',
    300004: 'ステータスが間違っています',
    300005: '時間タイプが間違っています',
    300006: 'ORDER_FROM エラー',
    300007: 'Order 注文サイズは必ず10000000を超えないでください',
    300008: '価格の上限は100000です',
    300009: 'ポジションを決済する数量はポジションサイズを超えないでください', // 0515
    300010: '決済価格が清算価格をトリガしました',
    300011: '計算中、取引一時停止',
    300012: '注文が見つかりません',
    300013: '発注価格が間違っています',
    300014: '注文サイズが間違っています',
    300015: '取引時間外',
    400000: '保有ポジションがありません',
    400001: 'ポジションタイプが見つかりません',
    400002: 'この操作がポジションの清算価格をトリガします',
    400003: '証拠金が増減する最小ステップは0.0001',
    400004: 'クロスの時にポジション証拠金を変更する必要はありません。',
    400005: 'ポジション証拠金が不足になる時、証拠金を減らすことが出来ません。',
    400008: 'ポジションや注文のある場合、レバレッジを調整できません', // 0515
    500000: 'ログイン失敗',
    500001: 'ログインにタイムオーバー',
    500002: 'ユーザーはログインしてません',
    500003: '当アカウントがロックされています。カスタマーサポートにご連絡ください。',
    500004: '利用可能な残高が足りません',
    500005: 'ユーザーＩＤが発注ＩＤではありません',
    600000: 'カレンシーが見つかりません',
    700000: 'パスワードの誤り回数が上限を超えています',
    700001: 'パスワードがロックされました',
    700002: '認証失敗、パスワードが間違っています',
    800000: 'ラインタイプエラー',
    100: '振込成功',
    101: '振込失敗',
    300: '注文',
    301: '注文操作を撤廃',
    302: '一つ注文をキャンセルする',
    303: '複数注文をキャンセルする',
    304: '参入約定',
    305: '決済約定',
    306: '一つ注文をキャンセル成功',
    307: '複数注文をキャンセル成功',
    400: 'オーバーレバレッジ',
    401: 'オーバーレバレッジ約定',
    500: '自動レバレッジ',
    600: '金利スワップを取る',
    700: '資金交換',
    10100000: '契約がありません',
    10100001: '市場メッセージがありません',
    10200000: 'ログインしていない',
    10200001: '利用可能残高が足りない',
    10200002: 'ログインユーザーと注文ユーザーが一致しない',
    10200003: '取引パスワードがロックされた',
    10200006: 'アカウントがありません',
    10200007: '当アカウントがロックされています。カスタマーサポートにご連絡ください。',
    10200008: 'ユーザーがロックされている。',
    10300000: '最大注文手数を超えている',
    10300001: '価格変動がインデックス価格の±50%以内でなければならない',
    10300002: '最大オーダー数量を超えている',
    10300003: '決済注文数がポジション数より少なくなければならない',
    10300004: '注文状態エラー',
    10300005: '時間タイプエラー',
    10300006: 'ORDER_FROMエラー',
    10300007: '注文がありません',
    10300008: 'キャンセル失敗、キャンセル可能注文数が0',
    10300009: '資金交換中、取引一時停止',
    10300011: '注文数量がポジション保有数より高い。決済できるポジション数が足りない',
    10300012: '注文が一部約定していない。決済できるポジション数が足りない',
    10300013: '決済可能ロングポジションがない',
    10300014: '決済可能ショートポジションがない',
    10400000: '未決済契約がない',
    10400002: '当操作がポジション清算を引き起こす',
    10500001: 'データが既にありました',
    10500002: 'データベースにデータ追加失敗',
    10900006: 'サーバーが忙しい',
    900000: 'パラメータが足りない',
    900001: 'パラメータフォーマットまたはタイプエラー',
    999999: 'システム異常',
    10900002: '操作が頻繁過ぎます',
    10900007: 'サービスが連続できません。後ほどお試し下さい！',
    614: '決済/受渡し中、振込を一時停止中',
    10300010: '取引一時停止',
    151: '異常操作のため、アカウントがロックされました。カスタマーにご連絡し解除してください。',
    11300003: '委託数量がポジション数を超えた。決済可能ポジションが足りない',
    11400003: '一部注文が約定していない。決済可能注文が足りない',
    11400004: '決済可能ロングポジションがない\n',
    11400005: '決済可能ショートポジションがない'
  },
  // 推送错误码
  wsErrorCode: {
    100: '振込成功',
    101: '振込失敗',
    151: '当アカウントがロックされています。カスタマーサポートにご連絡ください。',
    300: '注文',
    301: '注文操作を撤廃',
    302: '一つ注文をキャンセルする',
    303: '複数注文をキャンセルする',
    304: '参入約定',
    305: '決済約定',
    306: '一つ注文をキャンセル成功',
    307: '複数注文をキャンセル成功',
    400: 'オーバーレバレッジ',
    401: 'オーバーレバレッジ約定',
    500: '自動レバレッジ',
    600: '金利スワップを取る',
    700: '資金交換',
    10100000: '契約がありません',
    10100001: '市場メッセージがありません',
    10200000: 'ログインしていない',
    10200001: '利用可能残高が足りない',
    10200002: 'ログインユーザーと注文ユーザーが一致しない',
    10200003: '取引パスワードがロックされた',
    10200006: 'アカウントがありません',
    10200007: '当アカウントがロックされています。カスタマーサポートにご連絡ください。',
    10200008: 'ユーザーがロックされている。',
    10300000: '最大注文手数を超えている',
    10300001: '価格変動がインデックス価格の±50%以内でなければならない',
    10300002: '最大オーダー数量を超えている',
    10300003: '決済注文数がポジション数より少なくなければならない',
    10300004: '注文状態エラー',
    10300005: '時間タイプエラー',
    10300006: 'ORDER_FROMエラー',
    10300007: '注文がありません',
    10300008: 'キャンセル失敗、キャンセル可能注文数が0',
    10300009: '資金交換中、取引一時停止',
    10300011: '注文数量がポジション保有数より高い。決済できるポジション数が足りない',
    10300012: '注文が一部約定していない。決済できるポジション数が足りない',
    10300013: '決済可能ロングポジションがない',
    10300014: '決済可能ショートポジションがない',
    10400000: '未決済契約がない',
    10400002: '当操作がポジション清算を引き起こす',
    10500001: 'データが既にありました',
    10500002: 'データベースにデータ追加失敗',
    900000: 'パラメータが足りない',
    900001: 'パラメータフォーマットまたはタイプエラー',
    999999: 'システム異常',
    614: '決済/受渡し中、振込を一時停止中',
    10300010: '取引一時停止'
  },
  productList: {
    name1: 'ノーマル',
    text1: '指値',
    name2: 'IOC',
    text2: '指値(IOC)',
    name3: 'FOK',
    text3: '指値(FOK)',
    name4: 'Post-only',
    text4: '指値(Po)'
  },
  errorMessage: {
    error1: ' 0以上の数字を入力してください',
    error2: '最大',
    error3: '桁までの数字を入力してください',
    error4: '最大購入可能数量',
    error5: '最大売却可能数量',
    error6: '利息を入力してください',
    error7: '入力できる最小限は',
    error8: '正しい数量を入力してください',
    error9: ' 2~30日から選んでください',
    error10: '6桁のファンドパスワードを入力してください',
    error11: '入力できる最大限は',
    error12: '入力できる最大価格は',
    error13: '価格はストップ高以上になる場合はご注文できません、',
    error14: '価格はストップ安以下になる場合はご注文できません、',
    turnOutAccount: '振込元をお選びください',
    accountAddressDifferent: '振込元と振込先は一致しないようにしてください',
    turnIntoAccount: '振込先をお選びください',
    transferAmount: '正しい金額を入力してください',
    amount1: '振込金額は必ず0以上にしてください',
    amount2: '振込金額は最大利用可能な金額を超えないようにしてください'
  },
  // 0608
  kLineType: {
    buttonName: '分時',
    min: '分',
    hours: '時間',
    day: '日',
    week: '週'
  },
  tradeHistory: {
    all: '全部',
    text: '取引を選ぶ',
    selectContract: '契約名称',
    selectSite: 'サイト調べ',
    contract: '契約',
    size: '契約数量(手)',
    dealSize: '約定数量',
    residue: '残り',
    dealPrice: '約定価格',
    dealValue: '約定価格',
    type: 'タイプ',
    entrustTime: '注文時間',
    side: 'ロング/ショート',
    closeType: '参入/決済',
    more: 'ロング',
    less: 'ショート',
    open: '参入',
    close: '決済',
    entrustPrice: '注文価格',
    entrustSize: '注文数量',
    status: '状態',
    present: '現有',
    in: '入金',
    out: '出金',
    date: '日期'
  },
  // 契約ガイド
  guide: guide,
  handbook: handbook,
  // 合约新手指导
  direct: direct,
  // 参考情報
  reference: reference,
  // 注文
  entrust: entrust,
  // 残高
  wallet: wallet,
  // 交割合约
  regular: regular,
  // 注文詳細
  orderDetail: {
    title: '注文履歴',
    status1: '約定',
    status2: '注文履歴',
    done: '約定記録',
    cancel: '取消し記録',
    asset: '資金記録'
  },
  // 合约赢家秀
  show: {
    text1: '勝った！儲かったら見せなきゃ！シェアしよう',
    text2: 'シェアしよ',
    spread: '開ける>',
    backTop: 'トップへ',
    getMore: 'もっと見る'
  },
  // 3.0改版新增翻译 --- 找不到分类了,只能放这里
  version3: {
    or: '又',
    black: '夜',
    white: '昼',
    newPrice: '直近価格',
    historyPrice: 'タイムリー約定価',
    marketPrice: '相場最適価格で購入',
    marketPriceSell: '相場最適価格で売却する',
    closeOpen: '決済可能',
    buy: 'ロング参入',
    sell: 'ショート参入',
    closeBuy: 'ロング決済\n',
    closeSell: 'ショート決済',
    to: 'へ',
    all: '全部',
    inputValidation: '注文数量を上限以下にしてください',
    start: 'いかなる位置をクリックし取引を開始する',
    know: '了解',
    moreAssets: 'マウスを上へ移動し、もっと見る',
    moreData: 'マウスを下へ移動し、もっと見る, 「全部決済」もできる！',
    change: 'ここをクリックして「夜/昼」を切替',
    openToolBar: 'ここをクリックして「小道具」を選べるよ！',
    submit: '提出',
    undo: '委託注文をキャンセルしますか？',
    undoTitle: '執行際、当委託注文がキャンセルされる',
    closeAll: '全部決済を確定する',
    closeAllInfo: `全ポジションを<span style="color:{color}
    ">成行価格</span>で決済注文として委託したら、あなたの利益は相場デプスに影響される。リスクをご了承の上に使用してください。`,
    undoAll:
      '委託注文を<span style="color:{color}">全部キャンセル</span>しますか？',
    part: '一部の委託注文が未約定',
    inadequate: '決済可能ポジション数が足りない',
    tip: '次回提示しない',
    backtop: 'トップへ',
    announcement: 'USDT契約取引広告',
    order300:
      '{type}{price}{sideType}<span style="color:{color}">{size}</span>手で {contractName}',
    order340:
      '{type}{price}{sideType},で<span style="color:{color}">{size}</span>手を約定する',
    noLogin:
      '<a href="{login}">登録</a> 又は  <a href="{registered}">ログイン</a> をしてから、ポジションをご確認ください',
    more: 'もっと',
    //  返回旧版
    toold: '旧版へ',
    // 计算器提示
    calculatorTip: '当価格があくまでもご参考まで、リアルはリスク率を準にしてください。',

    // 默认执行价
    defaultExecutionPrice: '執行価格が成行価格だと暗黙する',
    // 预设止盈止损
    preset: '利食い/ 損切りを事前に設定する',
    // 温馨提示
    prompt : 'ご注意',
    // 温馨提示内容
    promptContent  :`<p style="text-align:left;">TP/SL事前設定の注文は、リアルに存在する利食い・損切り注文ではなくて、注文がリアルに約定してから、初めてトリガー成功になれます。<br>相場の変動が激しいため、TP/SL事前設定の注文は必ず有効になれるとは限りません。<br>注文が約定してから、実際の約定数量を全部利食い・損切り注文にしたことと見なします。<br>委託注文を取り消したら、TP/SL事前設定の注文も同時に失効します。</p>`,
    // 下单价格
    orderPrice: '注文価格',
    // 支持单侧填写，请至少填写一个选项
    oneSelect: '片方入力を支持する。最低1つを入力してください',
    // 止盈触发价≥
    stopTrigger: '利食いトリガー価格',
    // 止损触发价
    lossTrigger: '損切りトリガー価格',
    stopTrigger2: "利喰いのトリガー値",
    lossTrigger2: "損切りのトリガー値",
    stopExecute2: "利喰いの執行値",
    lossExecute2: "損切りの執行値",
    marketExecute: "成行で執行する",
    // 预估收益
    earnings: '推定収益',
    // 预设止盈
    stop: '利食いを事前に設定する',
    // 预设止损
    loss: '損切りを事前に設定する',
    // 计划委托
    entrust: 'トリガー注文',
    // 计划
    plan: 'トリガー',
    // 多单开仓
    buyOpen: 'ロング参入',
    // 空单卡开仓
    sellOpen: 'ショート参入',
    entrustNumber: 'トリガー数量',
    // 多单开仓
    openBuyTitle: `{type}<span style="color:{color}"> {price} </span>で<span style="color:{color}">{number}</span> 手のロングを参入しますか`,
    // 多单平仓
    closeBuyTitle: `{type}<span style="color:{color}"> {price} </span>で<span style="color:{color}">{number}</span>　手のロングを売却しますか`,
    // 空单开仓
    openSellTitle: `{type}<span style="color:{color}"> {price} </span>で<span style="color:{color}">{number}</span> 手のショートを参入しますか`,
    // 空单平仓
    closeSellTitle: `{type}<span style="color:{color}"> {price} </span>で<span style="color:{color}">{number}</span>手のショートを決済しますか`,
    // 计划委托多单
    entrustBuyTitle: `<span style="color:{color}"> {price} </span>で<span style="color:{color}">{number}</span> 手の{name}契約のロングを購入しますか`,
    // 计划委托空单
    entrustSellTitle: `<span style="color:{color}"> {price} </span>で<span style="color:{color}">{number}</span>手の{name}契約のショートを売却しますか`,
    // 新委托单
    entrustStatus1: '新注文',
    // 触发成功
    entrustStatus2: 'トリガー成功',
    // 已撤单
    entrustStatus3: '取消し済',
    // 触发失败
    entrustStatus4: 'トリガー失敗',
    // 爆仓撤单
    entrustStatus5: '清算での取消し注文',
  },
  //usdt 中所有用到的提示说明
  usdtTips: {
    //计划委托
    planEntrust: `トリガー注文がトリガーしない限り、ポジションと証拠金を凍結しません。<br>トリガー注文は、価格やポジション、証拠金等の原因でトリガー失敗する可能性があります。<br>トリガー成功した指値注文は相場変動で約定できない可能性があります。以上、ご了承ください。`,
    // 总仓/可用
    totalPosition: `利用可能とは、当面委託できるポジションのことである。<br>クロスポジションとは同じ銘柄の同じ方向（ロング又はショート）の全ポジションのことである。普通のポジションは利用可能と委託の二つに分かれて、委託注文（未決済注文）がない場合、利用可能ポジション数がクロスポジション数と一致する。`,
    // 实际杠杆
    actualLever: `多数回にポジションを参入し、且つ多倍数のレバレッジを使用したら、リアルの使用によって、レバレッジを計算されて表示される。<br>実際レバレッジ＝（ポジション価値1+…+ポジション価値N）/（ポジション価値1/レバレッジ1+…+ポジション価値N/レバレッジN）`,
    // 持仓均价
    positionAverage: `<span style="color:{color}">同じ方向のポジションを多数回に参入する場合、加重平均で計算されるポジション平均価格で,</span>決済際の利益が計算される。<br>ポジション参入価格平均＝総ポジション価額/総参入ポジション数【各銘柄契約を分けて計算する】`,
    // 未实现盈亏
    profitAndLoss: `未実現損益（ロング）＝（インデックス価格-ポジション平均価格）*手数*乗数<br>未実現損益（ショート）＝（ポジション平均価格-インデックス価格）*手数*乗数`,
    // 强平价预估
    strongParity: `推定清算価格はがリアルの清算価格ではなく、あくまでもご参考用の物である。多種類の銘柄ポジションは全ての銘柄の清算価格をトリガーしない限り、リアルの清算をトリガーできない。多種類の銘柄ポジションを保有する状態で、一つの銘柄に清算を行うことはシステムができない。`,
    // 一件全平
    closeAll: `成り行き価格で注文をオファーする時だけ、全部決済が実行できる。実行する際に、全ての利用可能ポジションが成り行き価格で注文を委託するため、大きリスクを発生する可能性がある。それでも利用する方は、<span style="color:{color}">”確認”をクリックしてください</span>。`,
    // 市价
    markekPrice: `当時の相場価格で即時に約定する指令である。成り行き約定の場合、具体的価格を定めるのでなく、当時の相場最適価格で取引し約定するのため、大きリスクを発生する可能性がある。それでも利用する方は、<span style="color:{color}">”確認”をクリックしてください</span>。`,
    // 限价
    price: `必ず定めた価格やそれ以上の価格でしか約定できない。指値指令を出す際に、具体的価格を定めなければならない。悪意の委託注文を防ぐために、指値価格の変動範囲はインデックス価格±50%以内でなければならない。`,
    // 触发价格
    triggerPrice: `トリガー価格とは価格をトリガーする条件にする物である。執行や委託に使わない。`,
    // 执行价格
    executivePrice: `執行価格は相場にオファーするリアル価格のことである。成り行き価格の場合、成行価格でオファーする。指値価格の場合、悪意の委託注文を防ぐために、指値価格の変動範囲はインデックス価格±50%以内となる。仮想通貨価格の変動がとても激しいので、ストップ（損切り）が成り行き価格で執行するのを推薦する。`,
    // 风险度
    risk: `<span style="color:{color}">ポジションのリスクを測る指標である。リスク率が100％に達する場合、オーバーレバレッジが開始する。</span><br>リスク＝（ポジション価値総額*維持証拠金率0.5%）/（当面資産-凍結する証拠金）`,
    // 当前资产
    currentAssets: `全資産である。利用可能資産（損益含め）、必要証拠金と凍結証拠金を含める。`,
    // 可用资产
    availableCapital: `新ポジション参入に使える資産（損益を含め）。`,
    // 占用保证金
    cashDeposit: `ポジションを保有するために必要な証拠金（ロング・ショートの多い方だけを取る）である。`,
    // 冻结保证金
    frozenDeposit: `委託注文のまま未決済注文を保有するために必要な証拠金である。`,
    // 资金使用率
    utilizationRate: `資金利用率＝（必要証拠金＋凍結証拠金）/当面の資産`,
    // 资金杠杆
    leverage: `全資産と全ポジションで計算してきたレバレッジである。<br>資金レバレッジ＝純ポジション価値総額/当面の資産*100%`,
    // 开多
    openMore: `相場が上昇すれば利益をもらえる。`,
    // 开空
    openTheEmpty: `相場が下落すれば利益をもらえる。`,
    // 限价提示标题
    priceTitle: 'リスク提示',
    // 限价提示说明
    priceTipInfo: '利食い/損切りをトリガーしたら、<span style="color:{color}">設定した方式と価格</span>で相場に委託する。約定価格が相場デプスに影響される。トリガー条件に達したら、<span style="color:{color}">即時トリガーする</span>。リスクをご了承の上にご利用ください。使用前に、まず<a href="{href}" target="__blank">利用ガイド</a>をご覧下さい。',
    // 设置时间
    setTime: "時間設定",
    // 触发时间
    triggeringTime: 'トリガー時間',
    // 盈利率
    rate: 'ロング収益率：(インデックス価格 - ポジション参入価格) / ポジション参入価格*レバレッジ * 100%\n<br/>ショート収益率：(ポジション参入価格-インデックス価格) / ポジション参入価格*レバレッジ * 100%',
    //杠杆提示
    leverageTip: 'レバレッジ変更成功',
    // 仓位价值
    positionValue: 'ポジション価値＝注文価格*手数*乗数'
  }
};

export default JA
