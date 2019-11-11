let guide = {
  menu: [
    {
      name: '基本',
      children: [
        {name: '概要(ここから始める)', url: '/guide/overview', mark: 'overview'},
        {name: 'FAQ', url: '/guide/faq', mark: 'faq'},
        {name: '手数料', url: '/guide/fees', mark: 'fees'}
      ]
    },
    {
      name: '契約ガイド',
      children: [
        {name: '無期限契約ガイド', url: '/guide/swapContractsGuide', mark: 'swapContractsGuide'},
        {name: 'ビットコイン（BTC）ガイド', url: '/guide/BTC', mark: 'BTC'},
        {name: 'BTCUSD', url: '/guide/BTCUSD/1', mark: 'BTCUSD'}
      ]
    },
    {
      name: '履歴資料',
      children: [
        {name: '現物価格インデックス', url: '/guide/.BBTC/1', mark: '.BBTC'},
        {name: '資金調達料金履歴', url: '/guide/fundingHistory/1', mark: 'fundingHistory'},
        {name: '保険基金', url: '/guide/insuranceFund/1', mark: 'insuranceFund'},
      ]
    },
    {
      name: '保証金取引',
      children: [
        {name: '自動レバレッジ', url: '/guide/autoDeleveraging', mark: 'autoDeleveraging'},
        {name: '取引所ガイド', url: '/guide/exchangeGuide', mark: 'exchangeGuide'},
        {name: '公正価格マーク', url: '/guide/fairPriceMarking', mark: 'fairPriceMarking'},
        {name: 'クロスマージン', url: '/guide/isolatedMargin', mark: 'isolatedMargin'},
        {name: '清算', url: '/guide/liquidation', mark: 'liquidation'},
        {name: '保証金専門用語参考', url: '/guide/marginTermReference', mark: 'marginTermReference'},
        {name: '注文種類よくあるFAQ', url: '/guide/orderTypeFAQ', mark: 'orderTypeFAQ'},
        {name: '利益/損失ガイド', url: '/guide/pnlGuide', mark: 'pnlGuide'},
        // {name: 'リスク制限', url: '/reference/risk', mark: 'risk'}
      ]
    },
    // {
    //   name: '契約',
    //   children: [
    //     {
    //       name: 'BTCビットコインで例示する',
    //       url: '/guide/BTC',
    //       mark: 'BTC',
    //       children: [
    //         {name: 'ビットコイン（BTC）ガイド', url: '/guide/BTC', mark: 'BTC'},
    //         {name: 'BTCUSD', url: '/guide/BTCUSD/1', mark: 'BTCUSD'}
    //       ]
    //     }
    //   ]
    // },
    // {
    //   name: 'インデックス',
    //   children: [
    //     {
    //       name: '現物価格インデックス',
    //       url: '/guide/.BBTC/1',
    //       mark: 'bxbt',
    //       children: [
    //         {name: '現物価格インデックス', url: '/guide/.BBTC/1', mark: '.BBTC'},
    //       ]
    //     }
    //   ]
    // },

  ],
  history: {
    title: '資金調達履歴表',
    text1: 'このリストには、すべてのシンボル分の過去の資金調達率が網羅されています。',
    text11: '資金調達料金はまだ引き取られていません',
    search: {
      placeholder: '以下の値をクリックするとフィルタリング',
      clear: 'クリア',
      search: '検索'
    },
    list_info: {
      p1: '結果を表示 0 - 100',
      p2: '後へ >'
    },
    theadList: ['時間', '記号', '頻度', '資金金利レート', '毎日資金レート'],
    next: '後へ',
    previous: '前へ',
    hours: '時間',
  },
  insurance_fund: {
    title: '保険基金',
    paragraph1: {
      p1: '58 Swapでは、保険基金を使用して、取引ポジションの レバレッジの自動解消 を防いでいます。この基金は、<a href="/reference/autoDeleveraging" style="color: #597ab9">レバレッジ自動解消</a>システムに引き継がれる前に、未約定の清算 注文を取りまとめます。',
      p2: '保険基金は、特定のポジションの破産価格より有利な価格で<a href="/reference/liquidation" style="color: #597ab9">清算</a>注文が市場で執行可能な場合、清算によって増大します。'
    },
    text1: '保険基金の現在残高および過去の残高は、下記で見ることができます。',
    list_info: {
      p1: '結果を表示 0 - 100',
      p2: '後へ >'
    },
    theadList: ['日付', '保険基金残高']
  },
  xbt: {
    title: 'ビットコインシリーズ（BTC）ガイド',
    paragraph1: {
      p1: '58 SWAP契約は革新的で新たな<a href="/reference/swapContractsGuide" style="color: #597ab9;">無期限契約です</a>。この契約は満期日がなく、通过<a href="/reference/swapContractsGuide" style="color: #597ab9;"> 資金費用</a>などのシステムで現物価格を参考します。この契約は、原資産スポット市場とほぼ同じですが、レバレッジが強化されています。',
      p2: '現在の資金費用計算で現在の資金調達料金を確認すれば、BTUSD 契約明細或は無期限契約ガイドの資金調達料金をご覧ください。'
    },
    paragraph2: {
      p1: 'この商品は、長期的なポジション保有を好み、ベーシスの大幅な変動によりポジションの価値が変動するのを嫌うトレーダーに適しています。',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9;">永续合约如何报价？</a>',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9;">証拠金とレバレッジ</a>',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9;">価格インデックス</a>',
      p5: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9;">マーキングと決済</a>'
    },
    text1: '無期限契約はどのようにクォートされますか？？',
    paragraph3: {
      p1: 'BTCUSD 無期限契約の原資産価格は<a href="/guide/.BBTC/1" style="color: #597ab9;">58 Swap</a> インデックス。このインデックスは、 BitFinex、Bitstamp、Gdax、HuobiとBinance五つ取引所に加重しています。 原資産と無期限契約はいずれも米ドル建てでクォートされます。 証拠金と損益額はビットコイン建てで表示されます。'
    },
    theadList: [' ', '契約の計算'],
    tbodyList: [
      ['乗数', '1 USD'],
      ['BTC 契約価額', '1 USD乗数 / BTCUSD 価格'],
      ['米ドル契約価額', '1 USD'],
      ['損益計算', '契約数 * 乗数 * (1/参入価格 - 1/出口価格)']
    ],
    paragraph4: {
      p1: 'Bitcoin / USD 価格の上昇を予想する場合は、BTCUSD 契約を買い、逆に下落を予想する場合は、この契約を売ります。'
    },
    text2: '証拠金とレバレッジ',
    paragraph5: {
      p1: '証拠金はすべてビットコイン建てで預託されます。つまり、ビットコインのみを使ってこの契約をロング/ショートすることが可能です。BTCUSD 無期限契約は2倍、3倍、5倍、10倍、20倍、33倍、50倍、最高 100 倍のレバレッジを提供します。',
      p2: '例えば、100 ビットコイン相当の契約を購入する場合は、1 ビットコインの 当初証拠金 のみが必要です。'
    },
    text3: '価格インデックス',
    paragraph6: {
      p1: '58 Swap. <a href="/guide/.BBTC/1" style="color: #597ab9;">BBTCインデックス </a>は現在、<a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD無期限契約</a>と BTCU17 先物契約 に使用されています。'
    },
    theadList2: ['取引所', '加重'],
    tbodyList2: [
      ['BitFinex', '20%'],
      ['Bitstamp', '20%'],
      ['Gdax', '20%'],
      ['Huobi', '20%'],
      ['Binance', '20%']
    ],
    paragraph7: {
      p1: '現時点では均等に加重されていますが、将来このインデックスは調整される可能性があり、その際は十分な余裕をもって通知いたします。'
    },
    text4: 'マーキングと決済',
    paragraph8: {
      p1: 'BTCUSD 契約には満期がないため、決済はありません。<a href="/reference/marginTermReference" style="color: #597ab9;">未実現損益</a>と<a href="/reference/liquidation" style="color: #597ab9;">清算</a>用のマーキングは、<a href="/reference/fairPriceMarking" style="color: #597ab9;">公正価格マーキング</a>方式に従って行われます。',
      p2: 'ただし、無期限契約商品であるため、8 時間ごとに資金調達も発生します。詳細は、無期限契約ガイドの<a href="/reference/swapContractsGuide" style="color: #597ab9;">資金調達セクション</a>をご覧ください。また、現在のレートについては、<a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD 契約明細</a>の資金調達計算をご覧ください。'
    },
    text5: 'BTCUSD 取引の例 >',
    paragraph9: {
      p1: 'BTCUSD を 100 BTC、価格 600 USD で購入します。ロングポジションのサイズは、100 BTC * 6000 USD = 600,000 枚となります。数日後、この契約の価格は 7000 USD に上昇します。',
      p2: 'この取引の利益は次の式で計算されます：600,000 * 1 * (1/6000 - 1/7000) = 14.286 BTC',
      p3: '価格が 5000 USD に下落していたならば、損失額は次のように計算されます： 600,000 * 1 * (1/6000 - 1/5000) = -20 BTC. 損失額の方が大きいのは、この契約が インバースで非リニア という性質を備えるためです。',
      p4: '対照的に、ショートの場合は、下落時の利益の方が上昇時の損失より大きくなります。'
    }
  },
  xbtusd: {
    title: 'BTCUSD: 契約明細',
    text1: '説明',
    paragraph1: {
      p1: '<a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD</a>は . <a href="/guide/.BBTC/1" style="color: #597ab9;">.BBTCインデックス</a>で価格が形成される BTC/USD 無期限契約です。各契約はビットコインに対する1 USD 価値があります。',
      p2: 'BTCUSDは、プレミアムインデックスを使って資金調達率を計算します。原資産の金利は、インデックス および .USDBON8H インデックス 建てで提示され、プレミアムレートは、.BTCUSDPI8Hインデックス 建てで提示されます。',
      p3: 'これらは最終資金調達率を計算するために使用されます。',
      p4: '58 Swapでは資金の支出に料金はかかりません。',
      p5: '満了: これは満期のない無期限商品です。'
    },
//text2: 'BTCシリーズガイドを表示',
    text2: '資金調達の計算',
    paragraph2: {
      p1: `資金調達率の詳細については、<a href="/reference/swapContractsGuide" style="color: #597ab9;">無期限ガイド</a>を参照してください。`
    },
    text3: '公式',
    paragraph3: {
      p1: 'プレミアムインデックス P = A / B - 1',
      p2: 'P，プレミアムインデックス；A，最後3分の平均約定価格；B，最後3分の平均算数インデックス',
    },
    paragraph4: {
      p1:  '資金調達料金 F = Clamp( P * K, -0.03%, 0.03%)',
      p2: 'F，資金調達料金；P，プレミアムインデックス；K，パラメータ値K=0.6'
    },
    paragraph5: {
      p1: '資金調達料金はユーザー同士の間のです。',
      p2: 'インデックス乖離率で計算し、金利が最大0.03％あげることはできます'
    },
    text4: '完全な契約詳細',
    theadList2: ['ティッカールート', 'BTCUSD'],
    tbodyList2: [
      ['満期日', '無期限'],
      ['当初証拠金', '1.00% + 参入テイカー料金 + 出口テイカー料金'],
      ['維持証拠金', '0.50% + 出口テイカー料金 + 資金調達率'],
      ['金利ベース記号', '.BTCBON8H'],
      ['金利クォート記号', '.USDBON8H'],
      ['資金調達プレミアム記号', '.BTCUSDPI8H'],
      ['資金調達の頻度', '每8小时'],
      ['自動デレバレッジが有効', '：当契約は きわめて投機的 であり、レバレッジの自動解消を通じて損失を管理します。'],
      ['マーク方法', 'FairPrice'],
      ['公正ベーシスの計算', 'この商品の公正ベーシスは資金調達率（年率）を計算して決められます。'],
      ['リスク制限', '200 BTC'],
      ['リスクステップ', '100 BTC'],
      ['契約サイズ', '1 USD (現在、契約当たり 0.00006086 BTC)'],
      ['決済', 'この契約は無期限で、決済されません。'],
      ['手数料', '詳しくは手数料の参照をご覧ください。'],
      ['価格の最小増加単位', '0.5 USD'],
      ['最高値', '1,000,000'],
      ['最大注文高（枚数）', '10,000,000'],
      ['ロットサイズ', '1'],
    ]
  },
  bxbt: {
    title: '現物価格インデックス',
    text1: 'インデックス詳細',
    paragraph1: {
      p1: '58 Swapインデックスは現物価格に跡を継ぎ、頻度は毎分で、58 Swapインデックス最後の価格で計算します。いろんな画面ではインデックス価格はビットコイン価格として表示されます。',
      p2: '58 SwapインデックスはBitFinex、Bitstamp、Gdax、HuobiとBinance五つ取引所のビットコイン/ドル(BTC/USD)価格に加重しています。',
      p3: `これは複数のソースから価格が構成される総合インデックスです。構成要素に関する情報については、以下の「総合インデックスの内訳」をご覧ください。取引所がサービスを提供できなくなり、価格非提示時間が15分を超える場合、58 Swap のサービスは、取引が再開されるまで、その構成要素をインデックスから自動的に削除します。`
    },
    paragraph2: {
      p1: `このインデックスを使用する商品`,
      p2: `<a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD</a>。`
    },
    text2: '.BBTCインデックスの過去の値',
    text3: 'インデックス値',
    theadList1: ['時間', '記号', '価格インデックス'],
    tbodyList1: [],
    text4: '総合インデックスの内訳',
    theadList2: ['時間', '参考', '加重', '最新価格'],
    tbodyList2: []
  }

}
export default guide

