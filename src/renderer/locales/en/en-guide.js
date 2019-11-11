let guide = {
    menu: [
      {
        name: 'Basics',
        children: [
          {name: 'Overview (Start Here)', url: '/guide/overview', mark: 'overview'},
          {name: 'FAQ', url: '/guide/faq', mark: 'faq'},
          {name: 'Fees', url: '/guide/fees', mark: 'fees'}
        ]
      },
      {
        name: 'Contract Guides',
        children: [
          {name: 'Perpetual Contracts Guide', url: '/guide/swapContractsGuide', mark: 'swapContractsGuide'},
          {name: 'Bitcoin (BTC) Guide', url: '/guide/BTC', mark: 'BTC'},
          {name: 'BTCUSD', url: '/guide/BTCUSD/1', mark: 'BTCUSD'}
        ]
      },
      {
        name: 'Historical Data',
        children: [
          {name: 'Spot Price Index', url: '/guide/.BBTC/1', mark: '.BBTC'},
          {name: 'Funding Rate History', url: '/guide/fundingHistory/1', mark: 'fundingHistory'},
          {name: 'Insurance Fund', url: '/guide/insuranceFund/1', mark: 'insuranceFund'},
        ]
      },
      {
        name: 'Margin Trading',
        children: [
          {name: 'Auto Deleveraging', url: '/guide/autoDeleveraging', mark: 'autoDeleveraging'},
          {name: 'Exchange Guide', url: '/guide/exchangeGuide', mark: 'exchangeGuide'},
          {name: 'Fair Price Marking', url: '/guide/fairPriceMarking', mark: 'fairPriceMarking'},
          {name: 'Cross Margin', url: '/guide/isolatedMargin', mark: 'isolatedMargin'},
          {name: 'Liquidation', url: '/guide/liquidation', mark: 'liquidation'},
          {name: 'Margin Term Reference', url: '/guide/marginTermReference', mark: 'marginTermReference'},
          {name: 'Order Types FAQ', url: '/guide/orderTypeFAQ', mark: 'orderTypeFAQ'},
          {name: 'PNL Guide', url: '/guide/pnlGuide', mark: 'pnlGuide'},
          // {name: '风险限制', url: '/reference/risk', mark: 'risk'}
        ]
      },
    ],
    history: {
      title: 'Funding History',
      text1: 'This list contains all historical funding rates for all symbols.',
      text11: 'Funding rate is not charged temporarily.',
      search: {
        placeholder: 'Click values below to filter',
        clear: 'Clear',
        search: 'Search'
      },
      list_info: {
        p1: 'Showing Results 0 - 100',
        p2: 'Next Page >'
      },
      theadList: ['Time', 'Symbol', 'Funding Interval', 'Funding Rate', 'Funding Rate Daily'],
      next: 'Next',
      previous: 'Prev',
      hours: 'Hours',
    },
    insurance_fund: {
      title: 'Insurance Fund',
      paragraph1: {
        p1: '58Swap uses an Insurance Fund to avoid Auto-Deleveraging in traders\' positions. The fund is used to aggress unfilled liquidation orders before they are taken over by the <a href="/reference/autoDeleveraging" style="color: #597ab9">auto-deleveraging</a> system.',
        p2: 'The Insurance Fund grows from <a href="/reference/liquidation" style="color: #597ab9">liquidations</a> that were able to be executed in the market at a price better than the bankruptcy price of that particular position.'
      },
      text1: 'This list contains all historical funding rates for all symbols.',
      list_info: {
        p1: 'Showing Results 0 - 100',
        p2: 'Next Page >'
      },
      theadList: ['Date', 'Insurance Fund Balance']
    },
    xbt: {
      title: 'Bitcoin Series (BTC) Guide',
      paragraph1: {
        p1: '58 Swap is a new, innovative type of contract called a <a href="/reference/swapContractsGuide" style="color: #597ab9;">Perpetual Contract</a>. This product does not have an expiry date and is able to anchor spot price through <a href="/guide/BTC" style="color: #597ab9;"> funding </a> through various mechanisms and other mechanisms to anchor spot price. The goal of the contract is to replicate the market conditions of the spot market in the case of high leverage.',
        p2: 'To view calculations of current funding, please see the Funding Calculations in the BTC Contract Specifications and more generally in the Perpetual Contracts Guide.'
      },
      paragraph2: {
        p1: 'The product suits traders who prefer to hold positions for a long time and do not want their positions to fluctuate in value due to large swings in basis.',
        p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9;">How is the BTCUSD Perpetual Contract Quoted?</a>',
        p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9;">Margin and Leverage</a>',
        p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9;">Price Index</a>',
        p5: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9;">Marking and Settlement</a>'
      },
      text1: 'How is the BTCUSD Perpetual Contract Quoted?',
      paragraph3: {
        p1: 'The BTCUSD contract\'s underlying price is the <a href="/guide/.BBTC/1" style="color: #597ab9;">58Swap Index</a>. It is an equally weighted index using the BitFinex, Bitstamp, Gdax, Huobi and Binance BTC/USD prices. Both the underlying and the swap contract are quoted in USD. Margin and PNL are denominated in Bitcoin.'
      },
      theadList: [' ', 'Contract Calculations'],
      tbodyList: [
        ['Multiplier', '1 USD'],
        ['BTCUSD Contract Value', '1 USD Multiplier / BTCUSD Price'],
        ['USD Contract Value', '1 USD'],
        ['PnL Calculation', 'Contracts*Multiplier*(1/Entry Price - 1/Exit Price)']
      ],
      paragraph4: {
        p1: 'Traders who want to profit from an increase in the Bitcoin / USD price, will buy the BTCUSD contract. Conversely, if they believe the price will go down they will sell the contract.'
      },
      text2: 'Margins and Leverage',
      paragraph5: {
        p1: 'All margin is posted in Bitcoin, which means traders can go long or short this contract using only Bitcoin. BTCUSD Swap offers 2x, 3x, 5x, 10x, 20x, 33x, 50x, and up to 100x leverage.',
        p2: 'For example, to buy 100 Bitcoin worth of contracts, you will only require 1 Bitcoin of Initial Margin.'
      },
      text3: 'Price Index',
      paragraph6: {
        p1: 'The XXX Index is currently being used for the <a href="/guide/.BBTC/1" style="color: #597ab9;">.BBTC</a> <a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD Perpetual Contract</a>. The constituents are as below:'
      },
      theadList2: ['Exhange', 'Weight'],
      tbodyList2: [
        ['BitFinex', '20%'],
        ['Bitstamp', '20%'],
        ['Gdax', '20%'],
        ['Huobi', '20%'],
        ['Binance', '20%']
      ],
      paragraph7: {
        p1: 'At this time, weightings are equal weighted. In the future, we may adjust this index. Any adjustments will be made with ample notification.'
      },
      text4: 'Marking and Settlement',
      paragraph8: {
        p1: 'As the BTCUSD contract is perpetual, there is no settlement. Marking for <a href="/reference/marginTermReference" style="color: #597ab9;">Unrealised PNL</a> and <a href="/reference/liquidation" style="color: #597ab9;">Liquidation</a> purposes are done according to the <a href="/reference/fairPriceMarking" style="color: #597ab9;">Fair Price Marking</a> system.',
        p2: 'Note also: since this product is a perpetual contract, funding occurs every XXX hours. Please see the <a href="/reference/swapContractsGuide" style="color: #597ab9;">Funding Section</a> in the Perpetual Contracts Guide for information, and for the current rates please see Funding Calculation in the <a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD Contract Specifications</a>.'
      },
      text5: 'BTCUSD Trade Example >',
      paragraph9: {
        p1: 'A trader goes long 100 BTC of BTC at a price of 6,000 USD. He is long 100 BTC * 6,000 USD = 600,000 contracts. A few days later the price of the contract increases to 7,000 USD.',
        p2: 'Profit will be︰ 600,000 * 1 * (1/6,000 - 1/7,000) = 14.286 BTC',
        p3: 'If the price had in fact dropped to 5,000 USD, the trader\'s loss would have been: 600,000 * 1 * (1/6,000 - 1/5,000) = -20 BTC. The loss is greater because of the inverse and non-linear nature of the contract.',
        p4: 'Conversely, if the trader was short then the trader\'s profit would be greater if the price moved down than the loss if it moved up.'
      }
    },
    xbtusd: {
      title: 'BTCUSD: Contract Specification',
      text1: 'Description',
      paragraph1: {
        p1: '<a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD</a> is a BTC/USD perpetual contract priced on the <a href="/guide/.BBTC/1" style="color: #597ab9;">.BBTC</a> Index. Each contract is worth 1 USD of Bitcoin.',
        p2: 'The platform uses premium index to calculate the funding fees every 8 hours, separately at UTC+8 8:00 am, UTC+8 4:00 pm and UTC+8 12:00 pm.',
        p3: `<a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD</a> uses a Premium Index to calculate funding rates. The underlying interest rates are quoted in the <a href="/guide/.BTCBON8H/1" style="color: #597ab9;">.BTCBON8H</a> Index and .USDBON8H Index.These are used to calculate the final funding rate.`,
      p4: '58Swap does not charge fees on funding payments.',
      p5: 'Expiry: This instrument is perpetual and does not expire.'
    },
   // text2: 'Check Series Guide',
    text2: 'Funding Calculation',
    paragraph2: {
      p1: `More information about the funding rate is available in the <a href="/reference/swapContractsGuide" style="color: #597ab9;">Perpetuals Guide</a>.`
  },
  text3:'Formula',
paragraph3: {
  p1: `Premium Index (P) = A / B - 1.`,
  p2: 'P: Premium Index; A: Average Execution Price of Last 3 Minutes; B: Average Price Index of Last 3 Minutes',
},
paragraph4: {
  p1: `Funding Rate (F) = Clamp( P * K, -0.03%, 0.03%)`,
  p2: 'F: Funding Rate; P: Premium Index; K: Parameter Value = 0.6',
},
paragraph5: {
  p1: `The Funding Rate is the rate between users.`,
    p2: `The Premium Rate is used to calculate it, adjusted by the Interest Rate by up to 0.03%.`
},
text4: 'Full Contract Details',
  theadList2: ['Ticker Root', 'BTCUSD'],
  tbodyList2: [
  ['Expiry Date', 'Perpetual'],
  ['Initial Margin', '1.00% + Entry Taker Fee + Exit Taker Fee'],
  ['Maint Margin', '0.50% + Exit Taker Fee + Funding Rate'],
  ['Interest Rate Symbol', '.BTCBON8H'],
  ['Interest Quote Symbol', '.USDBON8H'],
  ['Funding Premium Symbol', '.BTCUSDPI8H'],
  ['Funding Interval', 'every 8 hours'],
  ['Auto-Deleveraged Enabled', 'Yes: This contract is highly speculative and manages loss through auto-deleveraging.'],
  ['Mark Method', 'FairPrice'],
  ['Fair Basis Calculation', 'The fair basis on this instrument is determined by an annualized calculation of the funding rate.'],
  ['Risk Limit', '200 BTC'],
  ['Risk Step', '100 BTC'],
  ['Contract Size', '1 USD(Currently 0.00006086 BTC per contract)'],
  ['Settlement', 'This cotract is perpetual and does not settle.'],
  ['Commission', 'See the Fees Reference for more details.'],
  ['Minimum Price Increment', '0.5 USD'],
  ['Max Price', '1,000,000'],
  ['Max Order Quantity', '10,000,000'],
  ['Lot Size', '1'],
]
},
bxbt: {
  title: '.BBTC: Minutely Bitcoin Price Index',
    text1: '.BBTC Index Details',
    paragraph1: {
    p1: 'The 58Swap Index tracks the spot price every minute. The price is calculated from the last price at 58Swap Index. The index price is shown on many pages as the current Bitcoin price.',
      p2: '58 Swap uses the equally weighted index with BitFinex, Bitstamp, Gdax, Huobi and Binance BTC/USD prices.',
      p3: `This index is composite, which means the price is built from multiple sources. See the "Composite Index Breakdown" below for information on the constituents. If an exchange is to lose service and no trades are printed for over 15 minutes, 58Swap services may automatically remove that constituent from the index until trading resumes.`
  },
  paragraph2: {
    p1: `Instruments Using This Index`,
      p2: `<a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD</a>.`
  },
  text2: '.BBTC Index Historical Values',
    text3: 'Index Values',
    theadList1: ['Time', 'Symbol', 'Price Index'],
    tbodyList1: [],
    text4: 'Composite Index Breakdown',
    theadList2: ['Time', 'Reference', 'Weight', 'Last Price'],
    tbodyList2: []
},


}
export default guide
