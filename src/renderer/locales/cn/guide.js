let guide = {
  menu: [
    {
      name: '基本',
      children: [
        {name: '概览(从此开始)', url: '/guide/overview', mark: 'overview'},
        {name: '常见问题', url: '/guide/faq', mark: 'faq'},
        {name: '费用', url: '/guide/fees', mark: 'fees'}
      ]
    },
    {
      name: '合约指南',
      children: [
        {name: '永续合约指南', url: '/guide/swapContractsGuide', mark: 'swapContractsGuide'},
        {name: '比特币（BTC）指南', url: '/guide/BTC', mark: 'BTC'},
        {name: 'BTCUSD', url: '/guide/BTCUSD/1', mark: 'BTCUSD'}
      ]
    },
    {
      name: '历史资料',
      children: [
        {name: '现货价格指数', url: '/guide/.BBTC/1', mark: '.BBTC'},
        {name: '互换补偿率历史', url: '/guide/fundingHistory/1', mark: 'fundingHistory'},
        {name: '保险基金', url: '/guide/insuranceFund/1', mark: 'insuranceFund'},
      ]
    },
    {
      name: '保证金交易',
      children: [
        {name: '自动减仓', url: '/guide/autoDeleveraging', mark: 'autoDeleveraging'},
        {name: '交易所指南', url: '/guide/exchangeGuide', mark: 'exchangeGuide'},
        {name: '合理价格标记', url: '/guide/fairPriceMarking', mark: 'fairPriceMarking'},
        {name: '全仓', url: '/guide/isolatedMargin', mark: 'isolatedMargin'},
        {name: '强制平仓', url: '/guide/liquidation', mark: 'liquidation'},
        {name: '保证金术语参考', url: '/guide/marginTermReference', mark: 'marginTermReference'},
        {name: '委托种类常见问题', url: '/guide/orderTypeFAQ', mark: 'orderTypeFAQ'},
        {name: '利润/损失指南', url: '/guide/pnlGuide', mark: 'pnlGuide'},
        // {name: '风险限制', url: '/reference/risk', mark: 'risk'}
      ]
    },
    // {
    //   name: '合约',
    //   children: [
    //     {
    //       name: '以BTC比特币为例',
    //       url: '/guide/BTC',
    //       mark: 'BTC',
    //       children: [
    //         {name: '比特币（BTC）指南', url: '/guide/BTC', mark: 'BTC'},
    //         {name: 'BTCUSD', url: '/guide/BTCUSD/1', mark: 'BTCUSD'}
    //       ]
    //     }
    //   ]
    // },
    // {
    //   name: '指数',
    //   children: [
    //     {
    //       name: '现货价格指数',
    //       url: '/guide/.BBTC/1',
    //       mark: 'bxbt',
    //       children: [
    //         {name: '现货价格指数', url: '/guide/.BBTC/1', mark: '.BBTC'},
    //       ]
    //     }
    //   ]
    // },

  ],
  history: {
    title: '互换补偿率历史',
    text1: '这里列出了所有合约的历史互换补偿率',
    text11: '互换补偿率暂未收取',
    search: {
      placeholder: '点选下列数值筛选',
      clear: '清除',
      search: '搜寻'
    },
    list_info: {
      p1: '正在显示资料 0 - 100',
      p2: '下一页 >'
    },
    theadList: ['时间', '合约', '时间区间', '资金利率', '日化资金率'],
    next: '下一页',
    previous: '上一页',
    hours: '小时',
  },
  insurance_fund: {
    title: '保险基金',
    paragraph1: {
      p1: '58 Swap 使用保险基金来避免投资者的仓位被自动减仓。 该基金用来改进未被执行的强平委托的价格，以避免它们被<a href="/reference/autoDeleveraging" style="color: #597ab9">自动减仓</a>系统接管。',
      p2: '保险基金额的增长来自<a href="/reference/liquidation" style="color: #597ab9">强平</a>委托在市场上于优于破产价的价格成交。'
    },
    text1: '这里列出了所有合约的历史互换补偿率',
    list_info: {
      p1: '正在显示资料 0 - 100',
      p2: '下一页 >'
    },
    theadList: ['日期', '保险基金余额']
  },
  xbt: {
    title: '比特币(BTC) 指南',
    paragraph1: {
      p1: '58 SWAP合约交易是一种新型独特的<a href="/reference/swapContractsGuide" style="color: #597ab9;">永续合约</a>。该合约不会交割，通过<a href="/reference/swapContractsGuide" style="color: #597ab9;">资金费用</a>等机制锚定现货价格，合约的目标为容许高杠杆的情况下复制现货市场的市况。',
      p2: '若要查看当前资金费用计算，以确定当前的互换补偿率，请参阅 BTCUSD 合同明细或永续合约指南中的互换补偿率计算。'
    },
    paragraph2: {
      p1: '该产品适合喜欢长期持仓的投资者，而不希望仓位价值因为基差及溢价浮动影响的投资者。',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9;">永续合约如何报价？</a>',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9;">保证金和杠杆</a>',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9;">价格指数</a>',
      p5: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9;">标的价格和结算</a>'
    },
    text1: '永续合约如何报价？',
    paragraph3: {
      p1: 'BTCUSD 永续合约的标的价格为 <a href="/guide/.BBTC/1" style="color: #597ab9;">58 Swap</a> 指数。 它是使用 BitFinex、Bitstamp、Gdax、Huobi和Binance五家交易所比特币美元 (BTC/USD) 价格同样加权的指数。 标的价格和永续合约的价格都是美金报价。 所有的保证金和盈亏都以比特币计价。'
    },
    theadList: [' ', '合约计算'],
    tbodyList: [
      ['乘数', '1 USD'],
      ['合约的比特币价值', '1 USD乘数 / BTCUSD 价格'],
      ['合约的美金价值', '1 USD'],
      ['盈亏计算', '合约数量 * 乘数 * (1/开仓价格 - 1/平仓价格)']
    ],
    paragraph4: {
      p1: '希望通过比特币/美元价格上升而获利的投资者会做多 BTCUSD 永续合约；相反，相信价格会下跌的就会做空该合约。'
    },
    text2: '保证金和杠杆',
    paragraph5: {
      p1: '所有保证金以比特币计价，这意味着投资者仅需使用比特币就能买多或卖空该合约。BTCUSD 永续合约提供2倍、3倍、5倍、10倍、20倍、33倍、50倍、最高 100 倍杠杆。',
      p2: '例如，购买 100 比特币价值的合约，将需要 1 比特币的起始保证金。'
    },
    text3: '价格指数',
    paragraph6: {
      p1: '58 Swap <a href="/guide/.BBTC/1" style="color: #597ab9;">.BBTC</a> 指数 目前用于标记 <a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD 永续合约</a>。 指数成分如下：'
    },
    theadList2: ['交易所', '权重'],
    tbodyList2: [
      ['BitFinex', '20%'],
      ['Bitstamp', '20%'],
      ['Gdax', '20%'],
      ['Huobi', '20%'],
      ['Binance', '20%']
    ],
    paragraph7: {
      p1: '目前，各交易所的权重相同。我们有可能在将来调整权重。对于任何调整，我们会提前给予足够的通知。'
    },
    text4: '标的价格和结算',
    paragraph8: {
      p1: 'BTCUSD 是永续合约，并没有结算。 <a href="/reference/marginTermReference" style="color: #597ab9;">未实现盈亏</a>和<a href="/reference/liquidation" style="color: #597ab9;">强制平仓</a>的计算是根据<a href="/reference/fairPriceMarking" style="color: #597ab9;">合理价格标记</a>系统。',
      p2: '附注：因为此合约是永续合约，将会在每8小时收取或发出资金费用。 请参见掉期指南中<a href="/reference/swapContractsGuide" style="color: #597ab9;">资金费用</a>的信息，对于当前的费率，请参见 <a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD 合约明细</a>中互换补偿率计算部分 。'
    },
    text5: 'BTCUSD 交易示例 >',
    paragraph9: {
      p1: '投资者做多 100 BTC 等值的比特币，价格为 6,000 美元，他就做多了 100BTC * 6,000 USD = 600,000 张合约，几天后合约价格上升到 7000 美元。',
      p2: '投资者的利润将是︰ 600,000 * 1 * (1/6,000 - 1/7,000) = 14.286 BTC',
      p3: '如果价格实际上已经下降到 5,000 美元，投资者的损失将会是︰ 600,000 * 1 * (1/6,000-1/5,000) =-20 BTC。 由于合约的倒数和非线性性质，损失也较大。 ',
      p4: '相反，对于做空的投资者来说，以比特币计算的话，下跌的利润将会比同样幅度上升所导致的亏损较大。'
    }
  },
  xbtusd: {
    title: 'BTCUSD: 合约明细',
    text1: '说明',
    paragraph1: {
      p1: '<a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD</a> 是根据<a href="/guide/.BBTC/1" style="color: #597ab9;">.BBTC</a> 指数 定价的 BTC/USD 永续合约。每张合约价值 1 USD 的比特币。',
      p2: '平台采用溢价指数的方式计算，每 8 小时 支付一次资金费用，分别是每个自然日 UTC+8 上午8:00、UTC+8 下午4:00 和 UTC+8 下午12:00。',
      p3: '<a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD</a> 利用溢价指数计算互换补偿率。<a href="/guide/.BTCBON8H/1" style="color: #597ab9;">.BTCBON8H</a> 指数 以及.USDBON8H指数 是标的费率，<a        href="/guide/.BTCUSDPI8H/1" style="color: #597ab9;">.BTCUSDPI8H</a> 指数 是溢价率。它们在 <a href="/reference/swapContractsGuide" style="color: #597ab9;">计算最终的互换补偿率</a> 中被使用。',
      p4: '58 Swap 不会收取任何资金费用。',
      p5: '到期: 此合约为永续合约，不会到期'
    },
    // text2: '查看BTC系列指南',
    text2: '互换补偿率计算公式',
    paragraph2: {
      p1: `关于互换补偿率的更多信息参阅<a href="/reference/swapContractsGuide" style="color: #597ab9;">合约指南</a>。`
    },
    text3: '公式',
    paragraph3: {
      p1: '溢价指数 P = A / B - 1',
      p2: 'P，溢价指数；A，最后三分钟成交价均值；B，最后三分钟算数平均的指数',
    },
    paragraph4: {
      p1: '互换补偿率 F = Clamp( P * K, -0.03%, 0.03%)',
      p2: 'F，互换补偿率；P，溢价指数；K，参数值K=0.6'
    },
    paragraph5: {
      p1: '互换补偿率是用户间的互换补偿率。',
      p2: '使用指数偏离率来计算，并可受到利率调整至多0.03%'
    },
    text4: '完整的合约详情',
    theadList2: ['符号', 'BTCUSD'],
    tbodyList2: [
      ['到期日期', '永续'],
      ['起始保证金', '1.00% + 开仓佣金 + 平仓佣金'],
      ['维持保证金', '0.50% + 平仓佣金 + 互换补偿率'],
      ['基础货币利率符号', '.BTCBON8H'],
      ['计价货币利率符号', '.USDBON8H'],
      ['资金货币利率符号', '.BTCUSDPI8H'],
      ['资金费用收取间隔', '每8小时'],
      ['启用自动减仓', '是：该合约是 高度投机，并通过自动减仓来处理系统损失。'],
      ['标记方法', 'FairPrice'],
      ['合理基差计算公式', '此合约的合理基差取决于年化互换补偿率。'],
      ['风险限额', '200 BTC'],
      ['风险限额递增值', '100 BTC'],
      ['合约大小', '1 USD (目前每张合约价值 0.00006086 BTC)'],
      ['结算', '此合约为永续无结算合约。'],
      ['佣金', '更多详情请参阅 费率参考。'],
      ['最小化的价格变化', '0.5 USD'],
      ['最大委托价格', '1,000,000'],
      ['最大委托数量', '10,000,000'],
      ['最小合约数量', '1'],
    ]
  },
  bxbt: {
    title: '现货价格指数',
    text1: '指数明细',
    paragraph1: {
      p1: '58 Swap 指数跟踪现货价格，频率为每 分钟。价格计算使用 58 Swap 指数最后的价格。指数价格在许多页面的页顶显示为当前的比特币价格。',
      p2: '58 Swap 指数是使用 BitFinex、Bitstamp、Gdax、Huobi和Binance五家交易所比特币美元 (BTC/USD) 价格同样加权的指数。',
      p3: `该指数是综合指数，意味着价格取自多个交易所。有关成分交易所的信息，请参阅下面的“综合指数分解”。如果某交易所停止服务，并且超过 15 分钟没有发布任何交易，那么 58 Swap 会自动从指数中移除该交易所，直至其交易恢复。`
    },
    paragraph2: {
      p1: `使用该指数的产品`,
      p2: `<a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD</a>。`
    },
    text2: '.BBTC 指数历史价值',
    text3: '指数价值',
    theadList1: ['时间', '合约', '价格指数'],
    tbodyList1: [],
    text4: '指数成分分解',
    theadList2: ['时间', '参考', '权重', '最新价'],
    tbodyList2: []
  }

}
export default guide
