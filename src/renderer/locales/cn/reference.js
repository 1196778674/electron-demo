let reference = {
  menu: [
    {
      name: '基本',
      children: [
        {name: '概览(从此开始)', url: '/reference/overview', mark: 'overview'},
        {name: '常见问题', url: '/reference/faq', mark: 'faq'},
        {name: '费用', url: '/reference/fees', mark: 'fees'}
      ]
    },
    {
      name: '合约指南',
      children: [
        {name: '永续合约指南', url: '/reference/swapContractsGuide', mark: 'swapContractsGuide'}
      ]
    },
    {
      name: '保证金交易',
      children: [
        {name: '自动减仓', url: '/reference/autoDeleveraging', mark: 'autoDeleveraging'},
        {name: '交易所指南', url: '/reference/exchangeGuide', mark: 'exchangeGuide'},
        {name: '合理价格标记', url: '/reference/fairPriceMarking', mark: 'fairPriceMarking'},
        {name: '全仓', url: '/reference/isolatedMargin', mark: 'isolatedMargin'},
        {name: '强制平仓', url: '/reference/liquidation', mark: 'liquidation'},
        {name: '保证金术语参考', url: '/reference/marginTermReference', mark: 'marginTermReference'},
        {name: '委托种类常见问题', url: '/reference/orderTypeFAQ', mark: 'orderTypeFAQ'},
        {name: '利润/损失指南', url: '/reference/pnlGuide', mark: 'pnlGuide'},
        // {name: '风险限制', url: '/reference/risk', mark: 'risk'}
      ]
    }
  ],
  overview: {
    title: '在 58 Swap 交易',
    paragraph1: {
      p1: '首先，我们的文档部分可能令人望而生畏，因为衍生品的交易有很大的深度。尽管它的入门及第一次交易很容易，但是还有很多需要学习。'
    },
    text1: '58 Swap 概述',
    paragraph2: {
      p1: '58 Swap 是一个个人对个人交易平台，它提供杠杆交易，所有产品使用基础货币进行买卖（如BTCUSD合约中，即用BTC进行买卖）。',
      p2: '58 Swap 所有的盈利和亏损都以基础货币计算（如BTCUSD合约中，即用BTC计算盈利和亏损）。 58 Swap 不接受法定货币（政府发行的货币）。',
      p3: '58 Swap 允许使用高杠杆交易。'
    },
    paragraph3: {
      p1: '58 Swap 有 5 个主导航选项卡：',
      p2: `<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/trade/1" style="color: #597ab9">合约交易</a>：58 Swap 的交易面板 在这里你可以选择你希望交易的产品，选择杠杆，提交或取消委托，在资产信息中查看你的仓位信息。`,
      p3: `<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9">合约指南</a>：这里包含合约指南和新手指南，在这里可以查看产品的资金费用历史、最低合约大小、杠杆、到期时间、资金费用、标的参考价格指数数据以及其它几个与交易相关的页面，同时还可以了解永续合约、仓位如何标记、强平何时及如何发生、58 Swap 的费率、客户支持和其他资料，以此更好地理解交易所。`,
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/information" style="color: #597ab9">资产信息</a>︰此选项卡显示所有你的帐户信息，如当前比特币和可用保证金余额，存款、提现信息、 交易历史和推荐计划信息。',
      p5: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/information" style="color: #597ab9">合约计算器</a>︰合约计算器可以辅助您计算您的收益、所需保证金、平仓价格、爆仓价格等。',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference" style="color: #597ab9">赢家秀</a>︰该功能为交易员提供一个展示晒单的界面。在这里，大家分享交易单和交易策略，您也可以通过他人的交易单学习优秀的交易策略。',
    },
    paragraph4: {
      p1: '从何处开始？',
      p2: '第一步是通读 参考信息 选项卡 ，查看位于左侧的页码和条款。 交易所指南 也是一个很好的入门读物，帮助你了解如何提交委托、计算盈亏。',
      p3: '我们推荐以下资料应详细阅读',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/swapContractsGuide" style="color: #597ab9">永续合约指南</a>︰ BTCUSD 是我们最受欢迎的产品，它是永续合约。 我们鼓励所有的新用户阅读永续合约指南，来理解关于永续合约市场和资金费用的关键概念。',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/autoDeleveraging" style="color: #597ab9">自动减仓机制</a>︰此页非常重要，因为它描述了当某个交易员的强平仓位无法被市场消化时，其对手方向的仓位将会发生什么。',
      p7: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/fairPriceMarking" style="color: #597ab9">合理价格标记</a>︰此页说明用户的仓位如何被标记。对于使用杠杆的用户而言，这会决定你的强平价格。',
      p8: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/liquidation" style="color: #597ab9">强制平仓</a>︰本页解释强制平仓是如何进行的，所有的交易员应该理解此页。',
      // p9: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/profit-loss#F1" style="color: #597ab9">风险限额</a>︰本页面描述了对于特定仓位大小，你可以使用的杠杆倍数。'
    },
    text2: '交易概述',
    paragraph5: {
      p1: '对于我们提供的产品和产品类型，在 58 Swap 的交易可能是一个崭新的体验。 <a href="" style="color: #597ab9">点击</a>这里查看 58 Swap 与其它竞争对手的主要差异。',
      p2: '交易者应该知道 58 Swap 上使用的<a href="/reference/marginTermReference" style="color: #597ab9">保证金术语</a>。',
      p3: '参见我们的<a href="/reference/orderTypeFAQ" style="color: #597ab9">委托种类常见问题</a>，来了解你可以在 58 Swap 使用的委托类型。'
    },
    paragraph6 : {
      p1: '58 Swap的合约',
      p2: '58 Swap 提供 <a href="/reference/swapContractsGuide" style="color: #597ab9">永续合约</a>。',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>与期货合约不同，永续合约没有到期日期，因此不会发生结算。',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>永续合约每 8 小时会产生<a href="/reference/swapContractsGuide" style="color: #597ab9">互换补偿率</a>。在资金费用时间点，尚未平仓的用户将会支付或收取资金费用。',
      p5: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>当期货合约结算时，所有用户的仓位会根据合约的结算价进行结算。',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>你可以通过简单的买卖来买多或卖空这些合约。即使你不持有任何合约，你仍然可以卖空，因此 58 Swap 成为一个可以“裸”卖空的有用工具。',
    },
    paragraph7 : {
      p1: '保证金交易',
      p2: '58 Swap 采用<a href="/reference/autoDeleveraging" style="color: #597ab9">自动减仓机制</a>。这意味着，在某些罕见的情况下，如果强平仓位无法在市场中被平仓，而此时如果保险基金注入后仍不能弥补时，而此时如果保险基金注入后仍不能弥补时，杠杆头寸的利润可能被减少。',
      p3: '58 Swap 采用自动减仓机制。这意味着，在某些罕见的情况下，如果强平仓位无法在市场中被平仓，而此时如果保险基金注入后仍不能弥补时，而此时如果保险基金注入后仍不能弥补时，杠杆头寸的利润可能被减少。',
      p4: ' - 如果您是套保客户，您可以选择2-10倍风险较低的杠杆率；',
      p5: ' - 如果您是风险爱好者，您可以选择10-100倍杠杆，以谋取更高收益。',
      p6: '如果您选择100倍杠杆，这意味着你可以购买价值多达 100 比特币的合约而仅用 1 比特币来支持它。 但要小心 - 高杠杆可以加 速盈利，但也可能会<a href="/reference/liquidation" style="color: #597ab9">加速损失</a>。'
    }
  },
  questions: {
    title: '常见问题',
    text1: '58 Swap 商品交易所',
    paragraph1: {
      p1: '永续合约',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>永续合约是什么？',
      p3: '<a href="/reference/swapContractsGuide" style="color: #597ab9">永续合约</a>是一种交易起来很像传统期货合约的衍生品，但它不会到期，所以只要你喜欢，你可以随便持有多久。 永续合约类似于现货交易，密切跟踪标的价格指数。 它通过<a href="/reference/swapContractsGuide" style="color: #597ab9">资金费用机制</a>来保证其价格紧跟标的价格。 ',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>标记价格是什么？',
      p7: '标记价格是合约用来计算<a href="/reference/marginTermReference" style="color: #597ab9">未实现盈亏</a>和<a href="/reference/liquidation" style="color: #597ab9">强制平仓</a>的。',
      p8: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>如何决定永续合约或期货合约的价格？',
      p9: '58 Swap使用<a href="/reference/fairPriceMarking" style="color: #597ab9">合理价格标记方法</a>来标记合约。 此价格决定了你的未实现盈亏。 已实现盈亏由你的开仓价格和平仓价格或结算价格以及其它费用决定。 ',
      p10: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>结算价格如何计算？',
      p11: '结算价格是期货合约交割时使用的价格。 为了避免价格操纵，58 Swap 使用交割前某个时间段的平均价格。此时间段对于不同的合约可能有所不同。 请参考你想交易的合约明细。',
      p12: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>如何买卖永续合约或期货合约？',
      p13: '在 “交易” 选项卡中，在 “提交委托” 部分，你可以指定数量、价格和买或卖。',
      p14: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>什么是竞买和竞卖？',
      p15: '竞买委托是交易员在指定价格和数量的买入委托。 竞卖委托是交易员在指定价格和数量的卖出委托。',
      p16: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>58 Swap 上有做市商么？',
      p17: '在 58 Swap 上，有一些主要的做市商持续地进行报价。所有的做市商都没有任何特权。',
    },
    paragraph2: {
      p1: '杠杆',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>58 Swap 提供交易杠杆么？',
      p3: '是的，58 Swap 提供对其所有产品都提供杠杆。',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>58 Swap 提供多少倍杠杆?',
      p5: '58 Swap 提供的杠杆因产品而不同。 杠杆是由 <a href="/reference/marginTermReference" style="color: #597ab9">起始保证金和维持保证金</a> 水平决定的。 它们决定了你开仓和保持仓位所需的最小资金。 杠杆并非一个固定的倍数，而是一个最小保证金要求。 你可以在此查看所有产品的最小起始保证金及维持保证金水平。',
      p6: '58Swap 提供多种杠杆选择，从2倍到100倍多档可选。。<a href="/guide/BTCUSD/1" style="color: #597ab9">例如 比特币 / 美元永续合约。</a>',
      p7: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>起始保证金是什么？',
      p8: '<a href="/reference/marginTermReference" style="color: #597ab9">起始保证金</a>是开仓所需的最低比特币金额。',
      p9: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>维持保证金是什么？',
      p10: '<a href="/reference/marginTermReference" style="color: #597ab9">维持保证金</a>你保持现有仓位所需的最低比特币金额。 如果你在此仓位的保证金余额低于维持保证金水平，你的仓位会被<a href="/reference/liquidation" style="color: #597ab9">强制平仓</a>。',
    },
    paragraph3: {
      p1: '强制平仓',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>我为什么被强制平仓？',
      p3: '当标记价格跌破多仓的强平价格，或冲破空仓的强平价格时，你的维持保证金比例将不再满足要求，因此强平引擎将接管你的仓位。 在你的<a href="/information/tradeHistory" style="color: #597ab9">贸易历史</a>中，强平仓位在破产价格（相当于你的维持保证金为 0）被平仓。',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>强平引擎是如何工作的？',
      p5: '强制平仓时，强平引擎将首先试图按现行市场价格平仓。如果这样做失败，则会发生<a href="/reference/autoDeleveraging" style="color: #597ab9">自动减仓</a>。',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>我会破产么？',
      p7: '不会。我们使用一个设计完善的保证金和强平机制，它们确保每位交易员的保证金余额均不会低于0。',
      p8: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>58 Swap 分摊损失么？',
      p9: '不会，58 Swap 使用<a href="/reference/autoDeleveraging" style="color: #597ab9">自动减仓系统</a>，因而不需要 “社会化损失”。',
      p10: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>什么是自动减仓机制？',
      p11: '<a href="/reference/autoDeleveraging" style="color: #597ab9">自动减仓</a>发生在强平委托无法在市场上成交时。 持有对立仓位的交易员将根据其杠杆及利润的优先顺序被平仓。'
    },
    paragraph4: {
      p1: '费用',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>存比特币需要费用吗？',
      p3: '不需要，58 Swap 不对存款收取任何费用。',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>提现比特币需要费用么？',
      p5: '不需要，58 Swap 不对提款收取任何费用。 当提取比特币时，比特币的最低网络费用将根据目前区块链的拥挤程度动态设置，可以在 提款页面 上查看。',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>有交易费吗？',
      p7: '有，58 Swap 对每笔完成的交易收取交易费。请查看<a href="/reference/fees" style="color: #597ab9">费用</a>页的详细信息。'
    },
    paragraph5: {
      p1: '存款和安全',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>我如何存款？',
      p3: '在 “账户” 选项卡下，点击钱包，选择相应币种充值链接，然后你会得到一个多重签名的比特币存款地址。 在一个网络确认后，资金将存入你的帐户。',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>为什么 58 Swap 使用多重签名地址？',
      p5: '这是 58 Swap 为保障用户资金安全所采取的盗窃预防方法之一。  ',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>如果我有问题，我该联系谁？',
      p7: '请发送电邮，之后一名工作人员会很快与你联系。'
    }
  },
  fee: {
    title: '费用',
    text1: '永续合约产品',
    theadList: ['系列', '杠杆', '提供流动性费用', '提取流动性费用'],
    // theadList: ['系列', '杠杆', '提供流动性费用', '提取流动性费用', '多仓互换补偿率', '空仓互换补偿率', '互换补偿率时间段'],
    tbodyList: [
      ['所有永续合约', '所有倍数', '0.03%', '0.06%']
      // ['比特币', '100x', '-0.0250%', '0.0750%', '0.0100%', '-0.0100%', '每 8 hours ']
    ],
    tip1: '负数费用是指交易者会收到的反佣。资金利率变化基于市场的贷款利率。有关详细信息，请参阅以下内容。',
    paragraph1: {
      p1: '除此之外，还有资金费用',
      p2: '我们的永续合约，如 BTCUSD，其资金费用每隔一段时间在多仓和空仓的持有者之间进行交换。 在你的<a href="/information/tradeHistory" style="color: #597ab9">交易历史</a>中，正数金额意味着你在此时段支付资金；负数金额意味着你收取资金。 58 Swap 不支付或收取任何资金费用。',
      p3: '请参阅<a href="/reference/swapContractsGuide" style="color: #597ab9">永续合约</a>指南 中关于资金费用的详细信息。'
    }
  },
  introduce: {
    title: '永续合约指南',
    text1: '概述',
    paragraph1: {
      p1: '永续合约是一种衍生品。它从交易的角度类似于传统的期货合约，但有一些不同之处。',
      p2: '它不会到期也不会结算。 ',
    },
    paragraph2: {
      p1: '永续合约类似于一个保证金交易的现货市场，因此它在接近于标的参考指数价格之处交易。',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>这与期货合约不同，期货合约可能由于基差而在显著不同的价格交易。 ',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>锚定现货价格的主要机制是<a href="/reference/swapContractsGuide" style="color: #597ab9">资金费用</a>。 '
    },
    text2: '永续合约市场的机制',
    paragraph3: {
      p1: '交易永续合约时，交易员必须要了解永续合约市场的一些机制。以下是一些需要注意的部分：',
      p2: '1.仓位标记：永续合约使用<a href="/reference/fairPriceMarking" style="color: #597ab9">合理价格标记方法</a>。 标记价格决定了 <a href="/reference/marginTermReference" style="color: #597ab9">未实现盈亏</a> 以及强平价格。',
      p3: '2.这些关键的保证金水平决定了你可以使用多大的杠杆，以及在什么价格会发生 <a href="/reference/liquidation" style="color: #597ab9">强制平仓</a>。',
      p4: '3.资金费用：买方和卖方之间交换每隔 8 小时定期交换的费用。 如果费率为正，多仓将付出并且空仓将获得资金费用，如果费率为负，则相反。 - 请注意，你只有在互换补偿率缴付时持有仓位，你才需要付出或收取资金费用。',
      p5: '例：- 当平台现货价格相对指数价格发生溢价时，多头相比市场价格得到的收益多，而空头相比市场价格损失的多，多头将一定的资金费用补给空头；',
      p6: ' - 当平台价格相对指数价格发生折价时，多头相比市场价格得到的收益少，而空头相比市场价格损失的少，空头将按照一定的资金费用补给多头。',
      p7: '4.互换补偿率缴付时间：UTC 16:00（北京时间 00:00）、UTC 00:00（北京时间 08:00）和 UTC 08:00（北京时间 16:00）。'
    },
    paragraph4: {
      p1: '交易者可以在交易选项页左下角的 “合约明细” 下观察合约的当前互换补偿率。 类似的，也可以在每个单独的 “合约明细” 页观察此费率。 历史费率可参见<a href="/guide/fundingHistory" style="color: #597ab9">互换补偿率历史</a>。',
    },
    text3: '资金费用',
    paragraph5: {
      p1: '资金费用每 8 小时发生一次，分别在 00:00 UTC、08:00 UTC 和 16:00 UTC。 只有你在这些时间点持有仓位，你才需要收取或支付资金费用。如果你在收费时间之前平仓，那么你就不需要收取或支付资金费用。'
    },
    paragraph55: {
      p1: '当平台现货价格相对指数价格发生溢价时，多头相比指数价格得到的收益多/损失少，而空头相比市场价格损失的多，多头将一定的资金费用补给空头；当发生折价时，空头相比指数价格得到的收益多/损失少，而多头相比市场价格损失的多，空头将一定的资金费用补给多头。'
    },
    paragraph6: {
      p1: '你支付或收到的资金计算如下︰',
      p2: '资金费用 = 仓位价值 * 互换补偿率'
    },
    paragraph7: {
      p1: '你的仓位价值与所用的杠杆无关。 例如，如果你持有 100 张 BTCUSD 合约，资金费用的收受是基于这些合约的名义价值，而不是基于分配至该仓位的保证金额度。',
      p2: '当互换补偿率是正数时，多仓支付空仓。当它为负时，空仓支付多仓。'
    },
    paragraph8: {
      p1: '互换补偿率的计算',
      p2: '互换补偿率旨在确保永续合约的交易价格紧跟标的参考价格。 在这种方式下，永续合约类似于保证金交易的现货市场，买家和卖家定期交换互换补偿率。',
      p3: '溢价／折价',
      p4: '有时，永续合约的价格相较于标记价格会有明显的溢价或折价。 在这种情况下，溢价指数将用于提高或降低互换补偿率，使其符合目前永续合约交易的水平。 每种永续合约的溢价指数可参阅相关合约的明细页面，它的计算如下：',
      p5: '溢价指数 (P) = 最后三分钟成交价均值 / 最后三分钟算数平均的指数 - 1',
      p6: '最终互换补偿率的计算',
      p7: '互换补偿率 (F) = clamp(溢价指数 (P) * K, 0.03%, -0.03%)',
      p8: '因此，溢价指数 (P) * K 是在 +/-0.03% 之间。',
      p9: '该计算而得的互换补偿率将会应用至交易员的仓位价值上，然后得到在缴费时间需要支付或收取的资金费用。',
      p10: '资金费用',
      p26: '58 Swap 不收取任何资金费用；资金费用完全在用户之间交换。'
    },
    text4: '更多信息',
    paragraph9: {
      p1: '查看关于互换补偿率计算的<a href="" style="color: #597ab9">更多信息和示例</a>。',
    }
  },
  underweight: {
    title: '自动减仓',
    text1: '自动减仓系统 (ADL) 概述',
    paragraph1: {
      p1: '当投资者被强制平仓时，他们的剩余仓位将被 58 Swap 的强平系统接管。 如果强平仓位未能够在市场平仓，并且当标记价格达到破产价格，且合约的保险基金注入仍不能完成交易时，自动减仓系统将会对持有反方向仓位的投资者进行减仓。减仓的先后顺序将根据杠杆和盈利比率决定。',
      p2: '自动减仓将根据强平仓位的破产价格进行平仓。'
    },
    text2: '自动减仓的排序系统',
    paragraph2: {
      p1: '在任何时候，你在自动减仓队列中的位置将由一个指示器显示。此指示器代表你被自动减仓的优先顺序，以每 20% 递增：',
      p2: '在上面的示例中，所有的"灯"亮起，这意味着你现在的位置是在顶部。若此时有强平仓位且无法在市场中平仓，你有可能会被自动减仓。',
      p3: '<a href="/guide/insuranceFund" style="color: #597ab9">保险基金</a> 用来防止自动减仓。如果某个合约的保险基金已经耗尽，那么将会发生自动减仓。',
      p4: '如果你被自动减仓，你将立刻得到通知。未成交的委托将继续有效，同时你可以随时开新的仓位。',
    },
    paragraph3: {
      p1: '排序计算公式',
      p2: '自动减仓的排序根据盈利和杠杆计算。盈利更多以及更高杠杆的交易员会被首先减仓。',
      p3: '排序计算如下︰',
      p4: '排序 = 盈利百分比 * 有效杠杆  (如果盈利)',
      p5: '= 盈利百分比 / 有效杠杆  (如果亏损)',
      p6: '其中',
      p7: '有效杠杆 = abs(标记价值) / (标记价值 - 破产价值)',
      p8: '盈利百分比 = (标记价值 - 平均开仓价值) / abs(平均开仓价值)',
      p9: '标记价值 = 位于标记价格时的仓位价值',
      p10: '破产价值 = 位于破产价格时的仓位价值',
      p11: '平均开仓价值 = 位于平均开仓价格时的仓位价值',
      p12: '系统将多空双方分开由高之低排序。'
    },
    text3: '更多信息',
    paragraph4: {
      p1: '查看关于自动减仓过程的<a href="" style="color: #597ab9">更多信息和示例</a>。',
    }
  },
  exchange: {
    title: '交易所指南',
    text1: '提交委托',
    paragraph1: {
      p1: '你可以在 “交易” 面板的 “提交委托” 位置提交<a href="/reference/orderTypeFAQ" style="color: #597ab9">各种类型</a>的买入或卖出委托。',
      p2: '当一个交易员提交买或卖委托时，在此委托被允许提交前，系统会检查其<a href="/reference/marginTermReference" style="color: #597ab9">可用余额</a>是否足以用作<a href="/reference/marginTermReference" style="color: #597ab9">起始保证金</a>。 如果此交易员在此产品中已有仓位，系统同时也会检查：若价格位于委托价格时，可用余额是否足以弥补<a href="/reference/marginTermReference" style="color: #597ab9">维持保证金</a>以及盈亏的变化。 如果他们有足够的资金，那么委托将被允许提交。 注：未被执行或取消的委托净值将使可用余额变小，变小的量相当于委托净值需要的起始保证金。',
    },
    text2: '保证金和盈亏',
    paragraph2: {
      p1: '在你能够交易前，你必须存放比特币至你的保证金账户。 在 58 Swap，所有的保证金和盈亏都以比特币计价。 你应该首先查看并熟悉保证金条款中的术语。'
    },
    paragraph3: {
      p1: '关于起始保证金 (IM) 的重要规则如下：',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>买入委托所需的起始保证金额 = (IM * 合约数量 * 乘数 / 买入限价)。 根据买入限价计算的交易佣金将被预先保留；然而实际的佣金将在委托被执行时支\n' +
      '付，并根据实际成交价格计算。',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>卖出委托所需的起始保证金额 = (IM * 合约数量 *  Max (乘数 / 卖出限价, 乘数 / 最佳竞买价) )。 根据卖出限价和最佳竞买价的高者计算的交易佣金将被预先保\n' +
      '留。 实际的佣金将在委托被执行时支付，并根据实际成交价格计算。',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>如果交易员的委托不会增加他们的仓位，那么这些委托将不需要起始保证金。',
      p5: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>如果某交易员同时在市场中拥有买和卖委托，那么只有竞买净值（买委托 - 卖委托）需要起始保证金。 另外，除非能够减少当前仓位，卖委托也需要\n' +
      '起始保证金。 例如，某交易员同时竞买 100 美元的 20 张合约以及竞卖 150 美元的 15 张合约，该交易员需要 5 张净买合约 (20 - 15) 以及 15 张卖合\n' +
      '约的起始保证金。',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>如果合约使用<a href="/reference/fairPriceMarking" style="color: #597ab9">公平价格标记</a>，那么起始保证金的计算方法将有所不同。 如果某买委托的价格在标记价格以上，或某卖委托的价格在标记价格以下，那么\n' +
      '交易员必须有足够的资金完全弥补委托价格与标价格之差。 例如，如果标记价格是 100 美元，某交易员提交了 10 张合约位于 110 美元的买委托，那么\n' +
      '所需的起始保证金额 = (IM * 10 张合约 * 乘数 / $100) + (100% * 10 张合约 * (乘数/$110 - 乘数/$100) )。',
    },
    paragraph4: {
      p1: '维持保证金 (MM) 是基于合约的标记价格计算的。',
      p2: '对于所有的仓位，其所需的维持保证金额 = (MM * 合约数量 * 乘数 / 开仓价格) 平仓所需要的佣金也将加入到你的维持保证金要求中。 这是保持仓位所\n' +
      '需的最小保证金额，若低于此金额，你的仓位会被<a href="/reference/liquidation" style="color: #597ab9">强制平仓</a>。',
      p3: '58 Swap 保留更改任何保证金政策的权力。任何改动将通过电邮告知用户。',
    },
    text3: '资金费用和结算',
    paragraph5: {
      p1: '58 Swap 的合约会产生<a href="/reference/swapContractsGuide" style="color: #597ab9">资金费用</a>。 关于资金费用的计算示例，请参见各合约的明细。 也可查询所有合约的<a href="/guide/fundingHistory" style="color: #597ab9">资金费用历史</a>。',
      p2: '只有期货合约会发生结算。永续合约是的，并不结算。某合约结算时，所有仓位将根据结算价格平仓。',
      p3: '一旦合约到期，此合约总的盈亏将被加入到交易员的比特币余额中。此合约将不再出现在 “仓位” 列表。',
      p4: '58 Swap 的所有计算都是最终决定。'
    },
    text4: '市场中断事件 (MDE)',
    paragraph6: {
      p1: '当价格指数所包括的交易所停止运行时，58 Swap 可能会宣布市场中断事件，并通知用户受影响之合约的结算或到期日期将作如何改变。',
      p2: '交易员将通过电子邮件得到公告通知，同时，市场中断事件的宣布将会出现在交易面板上。',
      p3: '58 Swap  将会充分斟酌并决定关于市场中断事件的宣布，所有的决定将是最终决定。',
    }
  },
  mark_reasonable_price: {
    title: '合理价格标记',
    text1: '概述',
    paragraph1: {
      p1: '58 Swap 采用独特设计的合理价格标记系统，以避免在高杠杆产品上发生不必要的强制平仓。 如果没有这个系统，那么标记价格可能会由于市场被操纵或是缺乏流动性而与价格指数发生不必要的偏差，从而导致不必要的强制平仓。 此系统将标记价格设置为合理价格而非最新交易价格，由此避免不必要的强平。'
    },
    paragraph2: {
      p1: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>对于永续合约，其合理价格等于标的指数价格加上随时间递减的资金费用基差。',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>对于期货合约，其合理价格等于标的指数价格加上年化的合理基差，又称之为合理基差率。',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>所有的<a href="/reference/autoDeleveraging" style="color: #597ab9">自动减仓</a>合约都使用合理价格标记方法。 此外请注意，此方法只影响强平价格以及未实现盈亏，它并不影响已实现盈亏。',
      p4: '注意：这意味着当你的委托执行后，你可能立即会看到正的或负的未实现盈亏。 发生这种情况的原因是合理价格与成交价格的略微偏差。 这是正常现象，并不意味着你损失了资金，但一定要留意你的强平价格，避免过早地被强制平仓。',
    },
    text2: '计算永续合约的合理价格',
    paragraph3: {
      p1: '58 Swap 采用独特设计的合理价格标记系统，以避免在高杠杆产品上发生不必要的强制平仓。 如果没有这个系统，那么标记价格可能会由于市场被操纵或是缺乏流动性而与价格指数发生不必要的偏差，从而导致不必要的强制平仓。 此系统将标记价格设置为合理价格而非最新交易价格，由此避免不必要的强平。'
    },
    paragraph4: {
      p1: '永续合约的合理价格使用资金费用基差率计算：',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>资金费用基差率 = 互换补偿率 *  (至下一个缴付资金费用的时间 / 资金费用时间间隔)',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>合理价格          = 指数价格 * (1 + 资金费用基差率)',
      p4: '更多关于永续合约资金费用的计算和示例，请参阅永续合约指南中的<a href="/reference/SwapContractsGuide" style="color: #597ab9">资金费用部分</a>。',
    },
    paragraph5: {
      p1: '深度加权买卖价格',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>深度加权买价   = 在竞买方成交 “保证金影响额” 的平均价格',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>深度加权卖价   = 在竞卖方成交 “保证金影响额” 的平均价格',
      p4: '保证金影响额是指利用 0.1 BTC 的保证金可以交易的金额（也即：0.1 BTC / 起始保证金比例），它被用来决定计算加权买／卖价的深度。',
    }
  },
  isolated_cross: {
    title: '全仓',
    text1: '概述',
    paragraph1: {
      p1: '在衍生品领域，保证金是指买卖杠杆头寸所需的金额。 起始和维持保证金分别指开仓所需的最低保证金额度以及保持这一仓位所需的最低保证金额度。 由于不同用户拥有不同的交易策略，58Swap 采用全仓保证金机制︰'
    },
    paragraph2: {
      p1: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>全仓保证金：所有未平仓位共享保证金。当需要时，某仓位将从保证金总余额中抽取部分额度以避免强制平仓。'
    },
    text2: '全仓保证金',
    paragraph3: {
      p1: '全仓保证金，也被称为 “跨期保证金”，是指利用所有的可用余额来避免强制平仓。 任何其他仓位已实现盈利都可以帮助在亏损仓位上增加保证金。',
      p2: '这种方法对于套保已有仓位的投资者很有用，并且也适用于套利者，他们不想由于强平而将一侧仓位暴露于风险中。'
    },
    paragraph4: {
      p1: '投资组合保证金',
      p2: '58 Swap 不提供投资组合保证金。 未实现利润不得用于抵销未实现的亏损，或作为开设新仓位的保证金。 这对那些打算在两个相同标的的衍生工具合约之间进行价差交易的交易者尤其重要。 你必须通过平仓才能实现利润，以便用来抵消另一份合约的亏损。',
    },
    text3: '全仓与逐仓对比',
    paragraph5: {
      p1: '在动荡的市场中，一个高杠杆化的仓位如果逐仓操作可能很快失去保证金。 然而，请注意，虽然 58Swap 的目标是尽量减少强平事件的发生，在动荡的市场中高度杠杆化更有可能被强平。 例如，一个 50 倍杠杆的仓位将在市场反向移动 2% 时被强平。全仓操作，即可避免动荡市场造成的爆仓损失，在一定范围内抵御价格波动，抵御波动风险的同时赢取高收益。而且可以追加仓位，操作更灵活。'
    }
  },
  liquidation: {
    title: '强制平仓',
    paragraph1: {
      p1: '大多数 58 Swap 的合约都提供高杠杆。 为保持仓位，投资者必须持有仓位价值一定比例的保证金，也称之为维持保证金。 最小的维持保证金要求可以参见风险限额页。',
      p2: '如果你无法满足保证金要求，你将被强制平仓，并将损失你的维持保证金。',
      p3: '你可以通过 “持有仓位” 选项页来查看每个仓位的强平价格，并且通过增加额外保证金、调整杠杆滑块、或通过风险限额选项来调整强平价格。'
    },
    text1: '尽可能减少强平事件',
    paragraph2: {
      p1: '58 Swap 使用<a href="/reference/fairPriceMarking" style="color: #597ab9">合理价格标记</a>方法来避免由于缺乏流动性或市场操纵而引起的强制平仓。',
      p2: '风险限额也要求更大的仓位需要更高的保证金水平。 这样，58 Swap 的强平引擎可以使用更多的保证金来有效的大量平仓，否则这些仓位很难安全的被平仓。 在安全的情况下，大仓位会被逐步强平。',
      p3: '此外，在强平事件过程中，58 Swap 将取消此合约的所有未成交委托，这样可以释放保证金并有可能避免强平。',
      p4: '注：其他合约的委托不受影响。'
    },
    text2: '强平过程',
    paragraph3: {
      p1: '58 Swap 使用部分强平方法，此方法会自动尝试减少维持保证金要求而避免全部仓位被强平。'
    },
    paragraph4: {
      p1: '使用最低风险限额的用户',
      p2: '1.58 Swap 取消此合约的所有未成交委托。',
      p3: '2.如果此时还未能满足维持保证金要求，此仓位被强平引擎于破产价格接管。'
    },
    paragraph5: {
      p1: '使用高风险限额的用户',
      p2: '强平引擎将会用以下方法尝试降低用户的风险限额，从而降低保证金要求：',
      p3: '1.尝试维持目前的委托和仓位不变，而降低用户的风险限额。',
      p4: '2.取消未成交委托，但保留现有仓位，而降低用户的风险限额。',
      p5: '3.提交 FillOrKill（全数执行或立刻取消）委托，此委托的价值等于目前的仓位价值和符合目前保证金要求的风险限额值之差，从而避免进一步被强平。',
      p6: '4.如果仓位仍然处于强平状态，那么全部仓位将被强平引擎以破产价格接管。',
    },
    text3: '系统收益和损失',
    paragraph6: {
      p1: '如果 58 Swap 可以在比破产价格更好的价格平仓，那么额外的资金将被加入<a href="/guide/insuranceFund" style="color: #597ab9">保险基金</a>。',
      p2: '如果 58 Swap 无法在破产价格平仓，那么 58 Swap 将花费保险基金并试图在市场中平仓。 如果仍然无法清理强平委托，这将导致<a href="/reference/autoDeleveraging" style="color: #597ab9">自动减仓</a>事件。'
    },
    text4: '更多信息',
    paragraph7: {
      p1: '查看关于强平过程的更多信息和示例。'
    }
  },
  margin: {
    title: '保证金术语参考',
    theadList: ['术语', '定义'],
    tbodyList: [
      ['钱包余额', '存款 - 提款 + 已实现盈亏'],
      ['未实现盈亏', '未平仓位目前的盈亏。'],
      ['保证金余额', '您在交易所的总权益。保证金余额 = 钱包余额 + 未实现盈亏。'],
      ['仓位保证金', '保留你手持仓位所需的最低保证金要求。此数值为你持有的每种合约的开仓价值乘以其所需的维持保证金比率之和，并加上任何未实现的盈亏。'],
      ['委托保证金', '你的委托所需要的最小保证金额。此数值为你的每个委托价值乘以其所需的起始保证金比例之和。'],
      ['可用余额', '你可以用于开仓的保证金。可用余额 = 保证金余额 - 委托保证金 - 仓位保证金。']
    ]
  },
  entrust: {
    title: '委托种类常见问题',
    paragraph1: {
      p1: '58 Swap 实施了多种不同的委托类型来帮助用户实现其独特的交易以及套保策略。 本节概述了各种委托类型及其示例。 点击<a href="/reference/fees" style="color: #597ab9">这里</a>查看各种委托类型的佣金费率。',
    },
    text1: '市价委托',
    paragraph2: {
      p1: '市价委托将在当前市场中立刻成交。 当交易者想要紧急成交委托，会选择这种类型。 选择此类型时请注意委托列表，否则一个巨大的市价委托可能 “击穿列表”，造成市场冲击成本。',
      p2: '用户输入：数量'
    },
    text2: '限价委托',
    paragraph3: {
      p1: '限价委托用来指定交易者想要买／卖的最高／最低价格， 交易者使用这种类型来减少他们的交易成本。',
      p2: '限价委托后将以什么价格成交？用户在限价委托后，如果市场深度满足实时成交，将以市场价格成交；如果不满足时，将在市场挂单，当市场价格达到设定的限定单价格后以限价单价格成交。',
      p3: '例如，如果市价在13000你设定13100限价买入，系统会以市价13000立刻成交，而不是到价格涨到限定的13100才成交；当BTC合约市价指数为13000，如果你想要在更便宜的12900买入，即需设定12900限价买入，当价格跌到小于等于12900时将自动以12900的价格成交。',
      p4: '用户输入：数量、限价'
    },
    paragraph4: {
      p1: '限价委托示例',
      p2: '数量 = 10 张合约',
      p3: '限价 = 100',
      p4: '方向 = 买',
      p5: '10 张合约的买委托将被提交至市场，限价是 100 美元。',
    },
    text3: '计划委托',
    paragraph5: {
      p1: '计划委托是一种条件订单，当价格波动达到指定触发价格后以指定执行价格委托限价单。 交易者使用这种类型可以通过设定委托单，对已持有仓位进行止盈止损；也可以设定在指定价格触发后以指定执行价格进行开仓，来减少他们的交易成本。',
      p2: '用户输入：触发价格、执行价格、数量'
    },
    paragraph6: {
      p1: '计划委托示例',
      p2: '触发价格 = 100',
      p3: '执行价格 = 99',
      p4: '数量 = 10 张合约',
      p5: '方向 = 买',
      p6: '10张合约的买委托将在市场价格达到100时以99的价格进行委托，下一个99的限价单'
    }
  },
  profit_loss: {
    title: '利润/损失指南',
    paragraph1: {
      p1: '本指南是为了解释未实现和已实现盈亏 (PNL) 的概念。'
    },
    text1: '示例 1：买入和卖出',
    paragraph2: {
      p1: 'John 目前有 1,000 张 BTCUSD 合约，平均开仓价格是 $1,000。目前 BTCUSD 的标记价格是 $1,250。',
      p2: 'John 的未实现盈亏是基于平均开仓价格和标记价格的差值。',
      p3: '未实现盈利 = ($1/$1,000 - $1/$1,250) * 1,000 = 0.20 BTC',
      p4: 'BTCUSD 的最新成交价格是 $1500。 但是，计算未实现盈亏是使用标记价格不是最新成交价格。 要理解原因，请阅读<a href="/reference/fairPriceMarking" style="color: #597ab9">合理价格标记</a>。'
    },
    paragraph3: {
      p1: 'John 决定在 $1,500 卖出 500 张 BTCUSD 合约来实现一些利润。',
      p2: 'John 的已实现盈亏是基于平均开仓价格和卖出 BTCUSD 的价格的差值。',
      p3: '已实现盈利 = ($1/1,000 - $1/$1,500) * 500 = 0.17 BTC',
      p4: '已实现盈亏基于实际买卖的价格，这通常不等于标记价格。 如果 John 在 $1,250 卖出 500 张合约，他会有 0.10 BTC 的已实现利润。'
    },
    text2: '示例 2：资金费用',
    paragraph4: {
      p1: '58 Swap 有一种称之为掉期的衍生品合约。 永续合约的买家和卖家会每天定期支付或收取资金费用。 若要了解更多关于<a href="/reference/swapContractsGuide" style="color: #597ab9">永续合约</a>的信息，请阅读合约指南。',
      p2: 'John 正在交易 BTCUSD，这是一种永续合约。每 8 小时会产生资金费用。目前的互换补偿率是 1%，并且由买家付给卖家。',
      p3: 'John 目前拥有价值 100 BTC 的 BTCUSD 多仓。 此合约没有已实现盈亏。 在资金费用缴付时间，John 必须为他的 BTCUSD 多仓支付 1 BTC 的资金费用。在资金费用缴付后，John 的已实现利润是 -1 BTC。',
      p4: '如果 John 拥有价值 100 BTC 的 BTCUSD 空仓，那么他会收到 1 BTC 的资金费用。他的已实现利润将会是 1 BTC 而不是 -1 BTC。',
    },
    text3: '示例 3：交易费用',
    paragraph5: {
      p1: '所有的交易费用是通过已实现盈亏核算。',
      p2: 'John 买入 BTCUSD 合约。目前市场价格未发生变动。他的未实现盈亏是 0，但是他的已实现盈亏是负数。这是因为当他买入 BTCUSD 时，他作为流动性提取者而付出交易费。',
      p3: '如果 John 提交了被动限价委托，那么在委托成交后，他将被当作流动性提供者。 作为提供者，John 可以收到返佣。 在这种情况下，他的未实现盈亏是 0，已实现盈亏是正数。',
    },
    text4: '示例 4：已实现盈亏核算',
    paragraph6: {
      p1: '已实现盈亏显示在 58 Swap 交易面板的不同位置，它取决于你仅仅是减少仓位还是完全平仓。',
      p2: '如果你持有一个仓位，该仓位有 10 BTC 的已实现盈利，那么该数值将显示在“持有仓位”选项卡下。',
      p3: '如果你已经完全平仓，并获得 10 BTC 的盈利，那么该 10 BTC 将显示在“已平仓仓位”选项卡下。',
      p4: '如果你在同一合约创建了新的仓位，“持有仓位”选项卡下的“已实现盈亏”将被归零。 对该新仓位的减仓而获得的已实现盈亏将显示在“持有仓位”选项卡下。',
      p5: '如果你将该新仓位完全平仓，那么任何已实现的盈亏会被加入“已平仓仓位”选项卡下。'
    },
  },
  risk: {
    title: '风险限制',
    text1: '概述',
    paragraph1: {
      p1: '58 Swap 对于所有的交易账户使用风险限额，这样可以减少巨大强制平仓发生的可能性。',
      p2: '如果一些用户拥有巨大头寸，他们将给其他用户带来风险，如果他们的仓位被强平，其他用户可能会经历自动减仓事件。 风险限额递增模式将帮助避免这种情况的发生，它会提高巨大头寸的保证金要求。'
    },
    text2: '动态风险限额',
    paragraph2: {
      p1: '每种合约拥有基础风险限额和递增额。 这些数字，结合了基础维持和起始保证金要求，被用于计算每个仓位完整的保证金要求。',
      p2: '随着仓位的增加，维持保证金和起始保证金要求也会提高。 用户必须通过仓位面板来提高或降低风险限额。 保证金要求将随着风险限额的改变而提高或降低。'
    },
    text3: '合约的风险限额',
    theadList: ['符号', '基本风险限额', '风险限额递增额度', '基本维持保证金', '基本起始保证金'],
    tbodyList: [
      ['BTCUSD', '200 BTC', '100 BTC', '0.50%', '1.00%']
    ],
    text4: '公式',
    theadList2: ['术语', 'BTCUSD 示例（限额递增一次）', '公式'],
    tbodyList2: [
      ['新的维持保证金 (MM) %', '基础 MM % + ( 递增次数 * 基础 MM % )', '0.50% + ( 1 * 0.50% ) = 1.00%'],
      ['新的起始保证金 (IM) %', '基础 IM % + ( 递增次数 * 基础 MM % )', '1.00% + ( 1 * 0.50% ) = 1.50%'],
      ['维持保证金额', '新 MM % * 仓位的总 BTC 值', '1.00% * 300 BTC = 3 BTC'],
    ],
    text5: '更多信息',
    paragraph3: {
      p1: '查看更多信息：',
      p2: '如何调整风险限额',
      p3: '交易示例',
    }
  }
}
export default reference
