let reference = {
  menu: [
    {
      name: 'Basics',
      children: [
        {name: 'Overview(Start Here)', url: '/reference/overview', mark: 'overview'},
        {name: 'FAQ', url: '/reference/faq', mark: 'faq'},
        {name: 'Fees', url: '/reference/fees', mark: 'fees'}
      ]
    },
    {
      name: 'Contract Guides',
      children: [
        {name: 'Perpetual Contracts Guide', url: '/reference/swapContractsGuide', mark: 'swapContractsGuide'}
      ]
    },
    {
      name: 'Margin Trading',
      children: [
        {name: 'Auto-Deleveraging', url: '/reference/autoDeleveraging', mark: 'autoDeleveraging'},
        {name: 'Exchange Guide', url: '/reference/exchangeGuide', mark: 'exchangeGuide'},
        {name: 'Fair Price Marking', url: '/reference/fairPriceMarking', mark: 'fairPriceMarking'},
        {name: 'Cross Margin', url: '/reference/isolatedMargin', mark: 'isolatedMargin'},
        {name: 'Liquidation', url: '/reference/liquidation', mark: 'liquidation'},
        {name: 'Margin Term Reference', url: '/reference/marginTermReference', mark: 'marginTermReference'},
        {name: 'Order Type FAQ', url: '/reference/orderTypeFAQ', mark: 'orderTypeFAQ'},
        {name: 'Profit/Loss Guide', url: '/reference/pnlGuide', mark: 'pnlGuide'},
        // {name: '风险限制', url: '/reference/risk', mark: 'risk'}
      ]
    }
  ],
  overview: {
    title: 'Trading on 58Swap',
    paragraph1: {
      p1: 'At first, our documentation section may seem daunting as derivatives trading has a lot of depth. While it’s easy to get started and make your first trades, there is much to learn.'
    },
    text1: 'Overview of 58Swap',
    paragraph2: {
      p1: '58Swap is a Peer-to-Peer Trading Platform that offers leveraged contracts that are bought and sold in Base Currency (For example, all BTCUSD contracts are bought and sold in BTC).',
      p2: 'All profit and loss on 58Swap is in Base Currency (For example, all profit and loss in BTCUSD contracts is in BTC). 58Swap does not handle fiat currency.',
      p3: '58Swap allows trading with a high amount of leverage.'
    },
    paragraph3: {
      p1: 'There are 5 main navigation Tabs of 58Swap:',
      p2: `<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/trade/1" style="color: #597ab9">Contract Trade</a>：The trading dashboard of 58Swap. Here you can select the instrument you wish to trade, select leverage, place and cancel orders, view position details in your asset information.`,
      p3: `<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9">Contract Guide</a>：This part includes Contract Guide and Beginner's Guide. Here you can also check the information related to the instruments such as the Funding History, minimum contract sizes, leverage offered, expiry, Funding, underlying reference Price Index data and a few other pages relevant for a trader. Here you can learn about Perpetual Contracts, how positions are Marked, when and how Liquidation occurs, 58Swap Fees, Support and other informative material to help you understand the Exchange.`,
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/information" style="color: #597ab9">Asset Information</a>: This tab displays all your account information such as current Bitcoin Available Margin Balances, Deposit and Withdrawal information, Trade History and Affiliate information.',
      p5: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/information" style="color: #597ab9">Contract Calculator</a>：This contract calculator can help you calculate your returns, required margin, closing price, liquidation price, etc.',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference" style="color: #597ab9">Winner Show</a>：This function provides traders with an interface to show orders. Traders share their trading orders and trading strategies here. You can also learn excellent trading strategies from them.'
    },
    paragraph4: {
      p1: 'Where To Start?',
      p2: 'The first step is to read through the References Tab and go through the terms and pages on the left. The Exchange Guide is also a good introduction to placing orders and PNL calculation.',
      p3: 'We recommend the following should be read through in detail',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/swapContractsGuide" style="color: #597ab9">Perpetual Contracts Guide</a>︰ BTCUSD is our most popular product and is a Perpetual Contract. We encourage all new users to read over the Perpetual Contracts Guide to understand key concepts such as the mechanics of Perpetual Contracts markets and funding.',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/autoDeleveraging" style="color: #597ab9">Auto Deleveraging</a>︰This page is important as it determines what happens to an opposite trader’s position if another trader’s position cannot be liquidated in the current market.',
      p7: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/fairPriceMarking" style="color: #597ab9">Fair Price Marking</a>︰This page explains how your positions are marked and is important for all users, especially if you are using leverage as this determines your liquidation prices.',
      p8: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/liquidation" style="color: #597ab9">Liquidation</a>︰This page explains how a position is liquidated and all traders should understand this page.',
      // p9: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/profit-loss#F1" style="color: #597ab9">风险限额</a>︰本页面描述了对于特定仓位大小，你可以使用的杠杆倍数.'
    },
    text2: 'Trading Overview',
    paragraph5: {
      p1: 'Trading on 58Swap may be a new experience for some users given the products offered and product types. To see the main differences between 58Swap and other competitors please <a href="" style="color: #597ab9">click here</a>.',
      p2: 'Traders should be aware of the <a href="/reference/marginTermReference" style="color: #597ab9">Margin Terminology</a> used on 58Swap.',
      p3: 'For the type of orders you can place on 58Swap please see our Order Type <a href="/reference/orderTypeFAQ" style="color: #597ab9">FAQ</a>.'
    },
    paragraph6: {
      p1: '58Swap Contracts',
      p2: '58Swap offers <a href="/reference/swapContractsGuide" style="color: #597ab9">Perpetual Contracts</a>.',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>As opposed to futures, perpetual contracts do not have an expiry date and thus do not have a settlement.',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>Perpetual Contracts have a <a href="/reference/swapContractsGuide" style="color: #597ab9">Funding Rate</a> that occurs every 8 hours.Users who hold a position over the funding timestamp either pay or receive funding.',
      p5: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>When a futures contract settles, all users who hold a position are settled at the contract\'s settlement price.',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>You can go long or short on these contracts by simply buying or selling them. You can sell even if you don\'t hold any contracts, making 58Swap a valuable tool for "naked" shorting purposes.',
    },
    paragraph7: {
      p1: 'Margin Trading',
      p2: '58Swap employs <a href="/reference/autoDeleveraging" style="color: #597ab9">Auto Deleveraging</a> which means that in some rare cases, if a liquidated order cannot be executed in the market even after adding the insurance fund, leveraged positions in profit may be reduced during certain time periods.',
      p3: '58Swap employs Auto Deleveraging, which means that in some rare cases, if a liquidated order cannot be executed in the market even after adding the insurance fund, leveraged positions in profit may be reduced during certain time periods.',
      p4: '- If you are a hedge user, you can choose 2x to 10x leverage with lower risk,',
      p5: ' - If you are a risk enthusiast, you can choose 10x to 100x leverage for higher returns.',
      p6: 'If you choose 100x leverage on some of its products, this means that you can buy as much as 100 Bitcoin of contracts with only 1 Bitcoin to back it. But be careful - with high leverage comes accelerated profit, but also the potential for <a href="/reference/liquidation" style="color: #597ab9"> accelerated loss </a>.'
    }
  },
  questions: {
    title: 'FAQ',
    text1: '58Swap Mercantile Exchange',
    paragraph1: {
      p1: 'Perpetual Contract',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>What is a Perpetual Contract?',
      p3: '<a href="/reference/swapContractsGuide" style="color: #597ab9">A Perpetual Contract</a> is a product similar to a traditional Futures Contract in how it trades, but does not have an expiry, so you can hold a position for as long as you like. Perpetual Contracts trade like spot, tracking the underlying Index Price closely. It achieves this via the <a href="/reference/swapContractsGuide" style="color: #597ab9">mechanics of a Funding</a> component.',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>What is the Mark Price?',
      p7: 'The Mark Price is the price at which the contract is marked for <a href="/reference/marginTermReference" style="color: #597ab9">Unrealised PNL</a>  and <a href="/reference/liquidation" style="color: #597ab9">Liquidation purposes</a>.',
      p8: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>How does 58Swap determine the price of a perpetual or futures contract?',
      p9: '58 COIN marks contracts according to the <a href="/reference/fairPriceMarking" style="color: #597ab9">Fair Price Marking Method</a>. This price determines your Unrealised PNL. Realised PNL will be determined according to your entry price and your exit or Settlement Price and any fees incurred.',
      p10: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>How is the Settlement Price calculated?',
      p11: 'The Settlement Price is the price at which a Futures contract settles. To avoid price manipulation, 58Swap employs an averaging over a period of time prior to settlement and this time frame may vary from instrument to instrument. Please reference each contracts\' specification that you wish to trade.',
      p12: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>How do I Buy or Sell a perpetual or futures contract?',
      p13: 'In the Trade tab, on the "Place Order" section you can specify the quantity, price and direction.',
      p14: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>What is a Bid and an Ask?',
      p15: 'A Bid is a standing order where the trader wishes to buy a contract at a specified price and quantity. An Ask is a standing order where the trader wishes to sell a contract at a specified price and quantity.',
      p16: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>Does 58Swap have any market makers?',
      p17: '58Swap has an anchor market maker who continuously quotes large sizes on contracts that 58Swap offers. No special privileges are given to any of the market makers.',
    },
    paragraph2: {
      p1: 'Leverage',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>Does 58Swap offer leverage?',
      p3: 'Yes, 58Swap offers leverage on all of its products.',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>How much leverage does 58Swap offer?',
      p5: 'The amount of leverage 58Swap offers varies from product to product.Leverage is determined by the <a href="/reference/marginTermReference" style="color: #597ab9">Initial Margin and Maintenance Margin levels</a>.These levels specify the minimum equity you must hold in your account to enter and maintain positions. Leverage is not a fixed multiplier but rather a minimum equity requirement. You can see the minimum Initial Margin and Maintenance Margin levels for all products here.',
      p6: '58Swap offers users various adjustable leverage multiples, from 2x to 100x on its <a href="/guide/BTCUSD/1" style="color: #597ab9">Perpetual Bitcoin / USD Perpetual Contract.</a>',
      p7: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>What is Initial Margin?',
      p8: '<a href="/reference/marginTermReference" style="color: #597ab9">Initial Margin</a> is the minimum amount of Bitcoin you must deposit to open a position.',
      p9: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>What is Maintenance Margin?',
      p10: '<a href="/reference/marginTermReference" style="color: #597ab9">Maintenance Margin</a> is the minimum amount of Bitcoin you must hold to keep a position open. If your margin balance on 58Swap drops below this level your position will be taken over by the Liquidation Engine and be <a href="/reference/liquidation" style="color: #597ab9">Liquidated</a>.',
    },
    paragraph3: {
      p1: 'Liquidation',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>Why did I get liquidated?',
      p3: 'When the Mark Price of a contract falls below your liquidation price for longs, or rises above your liquidation price for shorts, your Maintenance Margin level has been breached and the Liquidation Engine takes over your position. In your <a href="/information/tradeHistory" style="color: #597ab9">Trade History</a>, the price the liquidated position was closed at is the Bankruptcy Price (equivalent to where your Maintenance Margin is equal to 0).',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>How does the Liquidation Engine work?',
      p5: 'Upon liquidation, the Liquidation Engine attempts to close the position at the prevailing market price. If it is unable to do so then <a href="/reference/autoDeleveraging" style="color: #597ab9">Auto-Deleveraging</a> will occur.',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>Can I go bankrupt?',
      p7: 'No. We have a sophisticated margin and liquidation process that is designed to prevent any trader\'s margin balance on 58Swap from ever going below 0.',
      p8: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>Do you socialise losses?',
      p9: 'No. 58Swap employs an <a href="/reference/autoDeleveraging" style="color: #597ab9">Auto-Deleveraging System</a> that does not need to socialise losses.',
      p10: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>What is Auto-Deleveraging?',
      p11: '<a href="/reference/autoDeleveraging" style="color: #597ab9">Auto-Deleveraging</a> occurs when a liquidation remains unfilled in the market. Traders who hold opposing positions will be closed out according to leverage and profit priority.'
    },
    paragraph4: {
      p1: 'Fees',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>Is there a fee to deposit Bitcoin?',
      p3: 'No, 58Swap does not charge fees on deposits.',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>Is there a fee to withdraw Bitcoin?',
      p5: 'No, 58Swap does not charge fees on withdrawals. When withdrawing Bitcoin, the minimum Bitcoin Network fee is set dynamically based on blockchain load and can be viewed on the Withdrawal Page.',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>Are there fees to trade?',
      p7: 'Yes, 58Swap charges a trading fee on every completed trade. Please view the <a href="/reference/fees" style="color: #597ab9">Fees</a> page for more information.'
    },
    paragraph5: {
      p1: 'Deposits and Security',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>How do I deposit funds?',
      p3: 'Under the Account tab, click on Wallet and select the corresponding deposit link where you will be provided a multi-signature address to deposit Bitcoin. After 1 confirmation, funds will be credited to your account.',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span> Why does 58Swap use multi-signature addresses?',
      p5: 'This is one of many theft prevention methods that 58Swap employs to ensure customer funds are kept secured.',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span> If I have a problem, who do I contact?',
      p7: 'Please email support and a member of staff will contact you shortly.'
    }
  },
  fee: {
    title: 'Fees',
    text1: 'Perpetual Contracts Product',
    theadList: ['Series', 'Leverage', 'Maker Fee', 'Taker Fee'],
    // theadList: ['系列', '杠杆', '提供流动性费用', '提取流动性费用', '多仓互换补偿率', '空仓互换补偿率', '互换补偿率时间段'],
    tbodyList: [
      ['All Swap Contracts', 'All Leverage Multiples', '0.03%', '0.06%']
      // ['比特币', '100x', '-0.0250%', '0.0750%', '0.0100%', '-0.0100%', '每 8 hours ']
    ],
    tip1: 'A negative fee means that the trader will receive a rebate. Funding rates change based on market lending rates. See below for details.',
    paragraph1: {
      p1: 'Besides, there is Funding',
      p2: 'On our Perpetual Contracts, such as BTC, funding is exchanged between longs and shorts over discrete Funding Intervals. In your <a href="/information/tradeHistory" style="color: #597ab9">Trade History</a> a positive amount means you paid funding for that Funding Interval; a negative amount means you received funding. 58Swap does not charge any fees on funding paid or received.',
      p3: 'Please refer to the <a href="/reference/swapContractsGuide" style="color: #597ab9">Perpetual Contracts</a> Guide for more information on Funding.'
    }
  },
  introduce: {
    title: 'Perpetual Contracts Guide',
    text1: 'Overview',
    paragraph1: {
      p1: 'A Perpetual Contract is a derivative product that is similar to a traditional Futures Contract, but has a few differing specifications.',
      p2: 'There is no expiry or settlement.',
    },
    paragraph2: {
      p1: 'Perpetual Contracts mimic a margin-based spot market and hence trade close to the underlying reference Index Price.',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>This is in contrast to a Futures Contract which may trade at significantly different prices due to basis.',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>The primary mechanism to tether to spot price is<a href="/reference/swapContractsGuide" style="color: #597ab9">Funding</a>.'
    },
    text2: 'Mechanics of a Perpetual Contract Market',
    paragraph3: {
      p1: 'When trading perpetual contracts, a trader needs to be aware of several mechanics of the market. The key components a trader needs to be aware of are:',
      p2: '1.Position Marking: Perpetual Contracts are marked according to the Fair Price Marking method. The Mark Price determines Unrealised PNL and liquidation prices.',
      p3: '2.Initial and Maintenance Margin: These key margin levels determine how much leverage one can trade with and at what point liquidation occurs.',
      p4: '3.Funding: Periodic payments exchanged between the buyer and seller every 8 hours. If the rate is positive, then longs will pay and shorts will receive the rate, and vice versa if the rate is negative.You will only pay or receive funding if you hold a position at the Funding Timestamp.',
      p5: ' - For example, when the platform spot price is at a premium to the index price, compared with the market price, long positions will get more profits, while short positions will have more losses, and the long will supply the short with a certain amount of funding.',
      p6: ' - When the platform price is at a discount to the index price, compared with the market price, long positions will get less profits, while short positions will have less losses, and the short will supply the long with a certain amount of funding.',
      p7: '4. Funding rate payment time: UTC 16:00 (00:00 (GMT +8)), UTC 00:00 (08:00 (GMT +8)) and UTC 08:00 (16:00 (GMT +8)).',
    },
    paragraph4: {
      p1: 'Traders can observe the current funding rate for a contract on the bottom left hand side of the Trade tab under "Contract Details". Similarly one can view this rate in the individual "Contract Specifications". <a href="/guide/fundingHistory" style="color: #597ab9">Historical rates</a> are in the Funding History.',
    },
    text3: 'Funding',
    paragraph5: {
      p1: 'Funding occurs every 8 hours at 00:00 (GMT +8), 08:00 (GMT +8) and 16:00 (GMT +8). You will only pay or receive funding if you hold a position at one of these times. If you close your position prior to the funding exchange then you will not pay or receive funding.'
    },
    paragraph55: {
      p1: 'When the platform spot price is at a premium to the index price, compared with the index price, long positions will get more profits/less losses, while short positions will have more losses compared with market price, and the long will supply the short with a certain amount of funding; When the platform price is at a discount, compared with the index price, short positions will get more profits/less losses, while long positions will have more losses compared with market price, and the short will supply the long with a certain amount of funding.',
    },
    paragraph6: {
      p1: 'The funding you pay or receive is calculated as:',
      p2: 'Funding = Position Value * Funding Rate'
    },
    paragraph7: {
      p1: 'Your position value is irrespective of leverage. For example, if you hold 100 BTC contracts, funding is charged/received on the notional value of those contracts, and is not based on how much margin you have assigned to the position.',
      p2: 'When the Funding Rate is positive, longs pay shorts. When it is negative, shorts pay longs.'
    },
    paragraph8: {
      p1: 'Funding Rate Calculations',
      p2: 'The Funding Rate aims to keep the traded price of the perpetual contract in line with the underlying reference price. In this way, the contract mimics how margin-trading markets work as buyers and sellers of the contract exchange interest payments periodically.',
      p3: 'Premium / Discount',
      p4: 'The perpetual contract may trade at a significant premium or discount to the Mark Price. In those situations, a Premium Index will be used to raise or lower the Funding Rate to levels consistent with where the contract is trading. Each contract\'s Premium Index is available on the specific instrument\'s Contract Specifications page and is calculated as follows:',
      p5: 'Premium Index (P) = Average Execution Price of Last 3 Minutes/Average Price Index of Last 3 Minutes - 1',
      p6: 'Calculation of the Last Funding Rate',
      p7: 'Funding Rate (F) = clamp (Premium Index (P) * K, 0.03%, -0.03%)',
      p8: 'Therefore, Premium Index (P) * K is between +/-0.03%.',
      p9: 'The calculated funding rate will be applied to the trader\'s position value, and then the funding to be paid or charged at the time of payment will get.',
      p10: 'Funding',
      p26: '58Swap does not charge any fees on funding; it is exchanged directly peer-to-peer.'
    },
    text4: 'More Information',
    paragraph9: {
      p1: 'Further information and examples of funding calculations are available.',
    }
  },
    underweight: {
      title: 'Auto Deleveragingg',
      text1: 'Overview of Auto-Deleveraging (ADL)',
      paragraph1: {
        p1: 'When a trader\'s position is liquidated, the position is taken over by 58 Swap liquidation engine. If the liquidation cannot be filled by the time the mark price reaches the bankruptcy price, or the liquidated order cannot be traded even after adding the insurance fund, the ADL system automatically deleverages opposing traders\' positions by profit and leverage priority.',
        p2: 'The price at which a traders\' positions are closed out is the bankruptcy price of the initial liquidated order.'
      },
      text2: 'ADL Priority Deleveraging Ranking',
      paragraph2: {
        p1: 'At all times, your position in the queue is shown by an indicator. This indicator represents your priority in the queue in 20% increments:',
        p2: 'In the above example, all "lights" are lit, which would mean your position is in the top percentile. In the case of a liquidation that is not able to be caught in the market, you may be deleveraged.',
        p3: '<a href="/guide/insuranceFund" style="color: #597ab9">The Insurance Fund</a> is used to prevent ADL. If it is depleted for a given contract, ADL will occur.',
        p4: 'If you are deleveraged, you will be sent a notification. Open orders will be cancelled and you are free to re-enter.',
      },
      paragraph3: {
        p1: 'Priority Ranking Calculation',
        p2: 'Deleveraging priority is calculated by profit and leverage. More profitable and higher leveraged traders are deleveraged first.',
        p3: 'The ranking calculation is as follows:',
        p4: 'Ranking = PNL Percentage * Effective Leverage  (if PNL percentage > 0)',
        p5: '= PNL Percentage / Effective Leverage  (if PNL percentage < 0)',
        p6: 'where',
        p7: 'Effective Leverage = abs (Mark Value) / (Mark Value - Bankrupt Value)',
        p8: 'PNL percentage = (Mark Value - Avg Entry Value) / abs(Avg Entry Value)',
        p9: 'Mark Value = Position Value at Mark Price',
        p10: 'Bankrupt Value = Position Value at Bankruptcy Price',
        p11: 'Avg Entry Value = Position Value at Average Entry Price',
        p12: 'The system splits these positions by longs and shorts and ranks the positions from highest to lowest.'
      },
      text3: 'More Information',
      paragraph4: {
        p1: 'Further information and examples of the Auto-Deleveraging process are available.',
      }
    },
    exchange: {
      title: 'Exchange Guide',
      text1: 'Placing Orders',
      paragraph1: {
        p1: 'You may place buy and sell orders of various types in the Place Order tab of the Trading Dashboard.',
        p2: 'When a trader places a buy or sell order, before they are allowed to submit the order the system will check that they have enough Available Balance to reserve the Initial Margin. If the trader has an existing position in that instrument, it will also check that they have enough available balance to cover the change in Maintenance Margin and PNL, should the position be priced at the order price. If they have enough funds then they are allowed to place the order. Note: Net open orders that have not been filled or canceled will reduce the available balance by the initial margin of those net orders.',
      },
      text2: 'Margin and Profit & Loss (PNL)',
      paragraph2: {
        p1: 'Before you are able to trade you first must deposit Bitcoin to fund your margin account. All margin and PNL are denominated in Bitcoin on 58Swap. You should first review the terminology behind the Margin Terms.'
      },
      paragraph3: {
        p1: 'The following are important rules regarding Initial Margin (IM):',
        p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>For Buy orders the Initial Margin required = (IM * Contracts * Limit Bid Price * Multiplier). Commission is reserved using the limit bid price; however, the actual commission paid will be calculated based on the final execution price.',
        p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>For Sell orders the Initial Margin required = (IM * Contracts * Max (Limit Offer Price, Best Bid) * Multiplier). Commission is reserved using the limit offer price or the best bid for that contract, whichever is higher. The actual commission paid will be calculated based on the final execution price.',
        p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>Traders are not charged Initial Margin if their order will reduce their position size.',
        p5: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>If a trader has both Bids and Offers in the market, initial margin will only be charged on the Net amount of Bids (Bid orders - Sell orders). The Sell orders will still be charged initial margin unless they reduce the current position size. For example, if a trader bids 20 contracts for $100 and offers 15 contracts for $150, he will only be charged initial margin on his net bids of 5 contracts (20 - 15) and on his offers of 15 contracts.',
        p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>If a contract uses Fair Price Marking initial margin will be calculated differently. If a buy order is placed above the mark price, or if a sell order is placed below the mark price then the trader must fully fund the difference between the order price and the mark price. For example, if the mark price is $100 and the trader submits a bid order for 10 contracts at $110, then the initial margin required = (IM * 10 contracts * $110 * Multiplier) + (100% * 10 contracts * ($110 - $100) * Multiplier).',
      },
      paragraph4: {
        p1: 'Maintenance Margin (MM) calculated based on the Mark Price of that contract.',
        p2: 'For all positions the Maintenance Margin required = (MM * Contracts * Mark Price * Multiplier). The amount of commission applicable to close out all your positions will also be added onto your maintenance margin requirement. This is the minimum amount of margin you must maintain to avoid liquidation on your position.',
        p3: '58Swap reserves the right to change any margin policies. 58Swap will notify traders of any change via email announcements.',
      },
      text3: 'Funding and Settlement',
      paragraph5: {
        p1: 'Contracts on 58Swap are subject to <a href="/reference/swapContractsGuide" style="color: #597ab9">Funding</a>. Examples of Funding Calculations are found under each Contract Specification. <a href="/guide/fundingHistory" style="color: #597ab9">Funding History</a> is also available on all contracts.',
        p2: 'Only futures contracts settle, perpetual contracts do not settle. At the Settlement of a contract, the position will be closed at the Settlement Price.',
        p3: 'Once a contract has expired, the lifetime profit and loss of that contract will be added to the traders Bitcoin balance. This contract will no longer appear on the Positions section.',
        p4: 'All calculations done by 58Swap are final.'
      },
      text4: 'Market Disruption Event (MDE)',
      paragraph6: {
        p1: 'In the event that an exchange that contributes to the Index Price experiences an outage, 58Swap may declare an MDE and will inform traders how the settlement or expiry date of affected contracts will be altered.',
        p2: 'Traders will be notified via an email announcement and the declaration of an MDE will be predominently displayed on the trading dashboard.',
        p3: 'The declaration of a MDE is at the full discretion of 58Swap, and all decisions are final.',
      }
    },
    mark_reasonable_price: {
      title: 'Fair Price Marking',
      text1: 'Overview',
      paragraph1: {
        p1: '58Swap employs a unique system called Fair Price Marking to avoid unnecessary liquidations in its highly leveraged products. Without this system, unnecessary liquidations may occur if the market is being manipulated, is illiquid, or the Mark Price swings unnecessarily relative to its Index Price. The system is able to achieve this by setting the Mark Price of the contract to the Fair Price instead of the Last Price.'
      },
      paragraph2: {
        p1: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>For Perpetual Contracts, the Fair Price is equal to the underlying Index Price plus a decaying Funding basis rate.',
        p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>For Futures Contracts, the Fair Price is equal to the underlying Index Price plus an annualised Fair Value basis rate, known as the % Fair Basis.',
        p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/autoDeleveraging" style="color: #597ab9">ADL contracts</a>All  are subject to Fair Price Marking. Also note that Fair Price Marking only affects the Liquidation Price and Unrealised PNL, it does not affect Realised PNL.',
        p4: 'Note: This means that you may see a positive or negative Unrealised PNL immediately after an order executes. This happens when the Fair Price is slightly different from the Last Price. This is normal and does not mean you have lost money, but be sure to keep an eye on your Liquidation Price to avoid a premature liquidation.',
      },
      text2: 'Calculation of Fair Price for Perpetual Contracts',
      paragraph3: {
        p1: '58Swap employs a unique system called Fair Price Marking to avoid unnecessary liquidations in its highly leveraged products. Without this system, unnecessary liquidations may occur if the market is being manipulated, is illiquid, or the Mark Price swings unnecessarily relative to its Index Price. The system is able to achieve this by setting the Mark Price of the contract to the Fair Price instead of the Last Price.'
      },
      paragraph4: {
        p1: 'The Fair Price for a Perpetual Contract is calculated using only the Funding Basis rate:',
        p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>Funding Basis = Funding Rate * (Time Until Funding / Funding Interval)',
        p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>Fair Price = Index Price * (1 + Funding Basis)',
        p4: 'For further information on perpetual contract funding calculations and examples please see the Funding Section in the Perpetual Contracts Guide.',
      },
      paragraph5: {
        p1: 'Impact Bid and Ask Price',
        p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>Impact Bid Price = The average fill price to execute the Impact Margin Notional on the Bid side',
        p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>Impact Ask Price = The average fill price to execute the Impact Margin Notional on the Ask side',
        p4: 'The Impact Margin Notional is the notional available to trade with 0.1 BTC worth of margin (i.e. 0.1 BTC / Initial Margin) and is used to determine how deep in the order book to measure either the Impact Bid or Ask Price.',
      }
    },
    isolated_cross: {
      title: 'Cross Margin',
      text1: 'Overview',
      paragraph1: {
        p1: 'In the derivatives space, margin refers to the amount needed to enter into a leveraged position. Initial and Maintenance Margin</a> refer to the minimum initial amount needed to enter a position and the minimum amount needed to keep that position from getting liquidated. As various users have varying trading strategies, 58Swap has employed cross margin mechanism:'
      },
      paragraph2: {
        p1: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>Cross Margin: Margin is shared between open positions. When needed, a position will draw more margin from the total account balance to avoid liquidation.',
      },
      text2: 'Cross Margin',
      paragraph3: {
        p1: 'Cross Margin, also known as "Spread Margin" is a margin method that utilises the full amount of funds in the Available Balance to avoid liquidations. Any Realised PNL from other positions can aid in adding margin on a losing position.',
        p2: 'This margin method is useful for users who are hedging existing positions and also for arbitragers that do not wish to be exposed on one side of the trade in the event of a liquidation.',
      },
      paragraph4: {
        p1: 'Portfolio Margining',
        p2: '58Swap DOES NOT offer portfolio margining. Unrealised profit may not be used to offset any unrealised losses, or as margin to open new positions. This is especially important for those traders who intend to trade the spread between two derivative contracts that share the same underlying. You must realize your profit by closing a position in order for it to be used to offset losses on another contract.',
      },
      text3: 'Cross Margin vs Isolated Margin',
      paragraph5: {
        p1: 'In a volatile market, equity can lose quickly if isolates a highly leveraged position. However, note that although 58 Swap aims to minimise liquidations from happening, in volatile markets highly-leveraged are more likely to be liquidated. For example, a 50x position will be liquidated after a 2% move against you. Cross Margin can avoid losses if liquidation happens in volatile markets, and can resist the price fluctuation within a certain range, and defense the fluctuation risk while winning high earnings. Moreover, the position can be added and the operation is more flexible.',
      }
    },
    liquidation: {
      title: 'Liquidation',
      paragraph1: {
        p1: 'Most 58Swap contracts are highly leveraged. To keep these positions open, traders are required to hold a percentage of the value of the position on the exchange, known as the Maintenance Margin percentage. Minimum Maintenance Margin Requirements can be reviewed on the Risk Limits Page.',
        p2: 'If you cannot fulfill your maintenance requirement, you will be liquidated and your maintenance margin will be lost.',
        p3: 'You can review your liquidation price per position via the Open Positions Tab and adjust by adding additional margin via the Leverage Slider or via the Risk Limits tab.'
      },
      text1: 'Minimisation of Liquidations',
      paragraph2: {
        p1: '58Swap uses <a href="/reference/fairPriceMarking" style="color: #597ab9">Fair Price Marking</a> for the purpose of avoiding liquidation due to illiquid markets or manipulation.',
        p2: 'Risk Limits are also imposed that require higher margin levels for larger position sizes. This gives the 58Swap liquidation system more usable margin to effectively close large positions that would otherwise be difficult to safely close. If it is safe to do, larger positions are incrementally liquidated.',
        p3: 'In addition, if a liquidation happens（If a liquidation is triggered）, 58Swap will cancel any open orders on the current contract in an attempt to free up margin, which may avoid liquidation.',
        p4: 'Orders on other contracts will not be affected.'
      },
      text2: 'Liquidation Process',
      paragraph3: {
        p1: '58Swap employs a partial liquidation process involving automatic reduction of maintenance margin in an attempt to avoid a full liquidation of a trader’s position.'
      },
      paragraph4: {
        p1: 'Users on the Lowest Risk Limit tiers',
        p2: '1.58Swap cancels any open orders in the contract.',
        p3: '2.If this does not satisfy the maintenance margin requirement then the position will be liquidated by the liquidation engine at the bankruptcy price.'
      },
      paragraph5: {
        p1: 'Users on Higher Risk Limit tiers',
        p2: 'The liquidation system attempts to bring a user down to a lower Risk Limit, and thus lower margin requirements by:',
        p3: '1.Attempting to bring a user down to a Risk Limit associated with their open orders and current position.',
        p4: '2.Cancelling any open orders and then attempting to bring a user down to a Risk Limit associated with their current position.',
        p5: '3.Submitting a Fill Or Kill order of the difference between the current Risk Limit position size and the position size to satisfy the margin requirement to avoid liquidation.',
        p6: '4.If the position is still in liquidation then the entire position is taken over by the liquidation engine and a limit order to close the position is placed at the bankruptcy price.',
      },
      text3: 'System Gains and Losses',
      paragraph6: {
        p1: 'If 58Swap is able to liquidate the position at better than the bankruptcy price, the additional funds will be added to the <a href="/guide/insuranceFund" style="color: #597ab9">Insurance Fund</a>.',
        p2: 'If 58Swap is unable to liquidate the position at the bankruptcy price, 58Swap will spend the Insurance Funds on aggressing the position in the market in an attempt to close it. If this still does not close the liquidated order, this will then lead to an <a href="/reference/autoDeleveraging" style="color: #597ab9">Auto-Deleveraging</a> event.'
      },
      text4: 'More Information',
      paragraph7: {
        p1: 'Further information and examples of the Liquidation process are available.'
      }
    },
    margin: {
      title: 'Margin Term Reference',
      theadList: ['Term', 'Definition'],
      tbodyList: [
        ['Wallet Balance', 'Deposits - Withdrawals + Realised PNL'],
        ['Unrealised PNL', 'Current profit and loss from all open positions.'],
        ['Margin Balance', 'Your total equity held with the exchange. Margin Balance = Wallet Balance + Unrealised PNL.'],
        ['Position Margin', 'The minimum equity you must retain with the exchange to keep your positions. This is the entry value of all contracts you hold divided by the selected leverage, plus unrealised profit and loss.'],
        ['Order Margin', 'The minimum equity you must retain with the exchange to keep your open orders. This is the value of all open orders you have divided by the selected leverage.'],
        ['Available Balance', 'Your margin available for new positions. Available Balance = Margin Balance - Order Margin - Position Margin.']
      ]
    },
    entrust: {
      title: 'Order Types FAQ',
      paragraph1: {
        p1: '58Swap has implemented several different order types to assist with users\' unique trading and hedging strategies. This section outlines the various order types available with some examples. To see the fees charged for various order types, please <a href="/reference/fees" style="color: #597ab9">click here</a>.',
      },
      text1: 'Market Orders',
      paragraph2: {
        p1: 'A market order is an order to be executed immediately at current market prices. Traders use this order type when they have an urgent execution. Pay attention to the orderbook when selecting this order type, otherwise a large market order may "walk the book" and incur market-impact costs.',
        p2: 'User Inputs: Quantity'
      },
      text2: 'Limit Orders',
      paragraph3: {
        p1: 'Limit orders are used to specify a maximum or minimum price the trader is willing to buy or sell at. Traders use this order type to minimise their trading cost.',
        p2: 'At what price will the limit order be executed? After the user submitting a limit order, if the market depth satisfies the real-time transaction requirement, then it’ll be executed at the market price; if not satisfied, then the order will be placed in the market and be executed after the market price reaches the limit price.',
        p3: 'For example, if the market price is 13,000, and you set the buy price at 13,100, then the system will execute the order at 13,000 immediately rather than at 13,100. When the market price index of BTC contract is 13,000, if you want to buy at 12,900, you’ll need to set the limit price at 12,900, when the price falls below or equals to 12,900, the contract will be executed at 12,900 automatically.',
        p4: 'User inputs: amount, limit price '
      },
      paragraph4: {
        p1: 'Limit Order Example',
        p2: 'Quantity = 10 Contracts',
        p3: 'Limit Price = 100',
        p4: 'Direction = Buy',
        p5: 'A bid of 10 contracts will be placed in the market with a Limit Price of 100.',
      },
      text3: 'Trigger Order',
      paragraph5: {
        p1: 'Trigger order is a conditional order. It allows users to pre-set a price order and trigger condition for an instrument. When the market price reaches the trigger price, the order will be traded at the specified execution price. By using trigger order, traders can set an order to take a stop-profit/stop-loss on the holding position; or set an opening order when the price reaches the trigger price, so as to reduce their trading costs. ',
        p2: 'User input: Trigger Price, Execution Price, Amount'
      },
      paragraph6: {
        p1: 'Trigger Order Example',
        p2: 'Trigger Price = 100',
        p3: 'Execution Price = 99',
        p4: 'Amount = 10 CONTR',
        p5: 'Direction = Buy',
        p6: 'The purchase order for 10 contracts will be ordered when the market price reaches 100, and buy at the limit price of 99.'
      }
    },
    profit_loss: {
      title: 'Profit/Loss Guide',
      paragraph1: {
        p1: 'This guide is meant to explain the concepts of unrealised and realised profit and loss (PNL).'
      },
      text1: 'Example 1, Buying and Selling',
      paragraph2: {
        p1: 'John is long 1,000 BTC contracts with an average entry price of $1,000. The mark price of BTC is currently $1,250.',
        p2: 'John\'s unrealised PNL is based on the difference between his average entry price and the mark price.',
        p3: 'Unrealised Profit = ($1/$1,000 - $1/$1,250) * 1,000 = 0.20 BTC',
        p4: 'The last price of BTC is $1,500. However for the calculation of unrealised PNL, the mark price is used not the last price. To understand why, please read <a href="/reference/fairPriceMarking" style="color: #597ab9">Fair Price Marking</a>.'
      },
      paragraph3: {
        p1: 'John decides to sell 500 BTC contracts at $1,500 and realise some profit.',
        p2: 'John\'s realised PNL is based on the difference between his average entry price and the price at which he sells BTC.',
        p3: 'Realised Profit = ($1/1,000 - $1/$1,500) * 500 = 0.17 BTC',
        p4: 'Realised PNL is based on where you can actually buy or sell your position, which in most cases is not the mark price. If John had sold his 500 contracts at the mark price of $1,250, he would have a realised profit of 0.10 BTC.'
      },
      text2: 'Example 2, Funding Fees',
      paragraph4: {
        p1: '58Swap has a type of derivative contract called a Perpetual Contract. Buyers and sellers of perpetual contacts pay and receive funding fees periodically throughout the trading day. To learn more, please read the <a href="/reference/swapContractsGuide" style="color: #597ab9">Perpetual Contracts Guide</a>.',
        p2: 'John is trading BTC, which is a perpetual contract. Every 8 hours, there is a funding fee. The funding fee is currently 1%, and is paid from buyers to sellers.',
        p3: 'John is currently long 100 BTC worth of BTC. The position has no realised PNL. It is funding time and John must pay 1 BTC because he is long BTC. After the funding fee has been paid, John\'s realised PNL is now -1 BTC.',
        p4: 'If John had been short 100 BTC worth of BTC instead, he would have received 1 BTC. His realised profit would then be 1 BTC instead of -1 BTC.',
      },
      text3: 'Example 3, Trading Fees',
      paragraph5: {
        p1: 'All trading fees are accounted for through realised pnl.',
        p2: 'John bought BTC. The market has not moved. His unrealised PNL is 0, but his realised PNL is negative. John\'s realised PNL is negative because he paid a taker fee when he bought BTC.',
        p3: 'If John had placed a passive limit order, he would be classified as a maker once the order was executed. As a maker, John would have been paid a rebate on the trade. In that situation, his unrealised PNL would be 0 and realised PNL positive.',
      },
      text4: 'Example 4, Realised PNL Accounting',
      paragraph6: {
        p1: 'Realised PNL is displayed in different locations on the 58Swap trading dashboard depending on whether you are merely reducing the size of an existing position, or closing it entirely.',
        p2: 'If you have an open position with a realised profit of 10 BTC, this amount will show on the Open Positions tab.',
        p3: 'If you completely close the same position and you realise a profit of 10 BTC, this 10 BTC will be shown on the Closed Positions tab.',
        p4: 'If you then create a new position on the same contract, realised PNL will be reset to 0 BTC on the Open Positions tab. Realised PNL resulting from a partial closure of this new position will be displayed on the Open Positions tab.',
        p5: 'If you then completely close this new position, any realised PNL will be added to that symbol on the Closed Positions tab.'
      },
    },
    risk: {
      title: 'Risk Limits',
      text1: 'Overview',
      paragraph1: {
        p1: '58Swap imposes risk limits on all trading accounts to minimise the occurrence of large liquidations on margined contracts.',
        p2: 'As users amass larger positions, they pose a risk to others on the exchange who may experience a deleveraging event if the position cannot be fully liquidated. The Step model helps avoid this by increasing margin requirements for large positions.'
      },
      text2: 'Dynamic Risk Limits',
      paragraph2: {
        p1: 'Each instrument has a Base Risk Limit and Step. These numbers combined with the base Maintenance and Initial Margin requirements are used to calculate your full margin requirement at each position size.',
        p2: 'As the position size increases, the maintenance and initial margin requirements will increase. Users must authorize a higher or lower risk limit on the Positions panel. Margin requirements will automatically increase and decrease as your risk limit changes.'
      },
      text3: 'Instrument Risk Limits',
      theadList: ['Symbol', 'Base Risk Limit', 'Step', 'Base Maintenance Margin', 'Base Initial Margin'],
      tbodyList: [
        ['BTCUSD', '200 BTC', '100 BTC', '0.50%', '1.00%']
      ],
      text4: 'Formulas',
      theadList2: ['Term', 'BTCUSD Example (1 Step)', 'Formula'],
      tbodyList2: [
        ['New Maintenance Margin %', 'Base MM % + ( Steps * Base MM % )/ 0.50% + ( 1 * 0.50% ) = 1.00%'],
        ['New Initial Margin (IM) %', 'Base IM % + ( Steps * Base MM % )/ 1.00% + ( 1 * 0.50% ) = 1.50%'],
        ['Maintenance Margin', 'New MM * Gross BTC Position Value/ 1.00% * 300 BTC = 3 BTC'],
      ],
      text5: 'More Information',
      paragraph3: {
        p1: 'Further information is available on:',
        p2: 'How to Adjust Risk Limits',
        p3: 'Trade Examples',
      }
    }
  }
export default reference
