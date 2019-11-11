let guide = {
  menu: [
    {
      name: '기본 사항',
      children: [
        {name: '개요(시작하기)', url: '/guide/overview', mark: 'overview'},
        {name: '자주 묻는 질문', url: '/guide/faq', mark: 'faq'},
        {name: '수수료', url: '/guide/fees', mark: 'fees'}
      ]
    },
    {
      name: '계약 가이드',
      children: [
        {name: '무기한 계약 가이드', url: '/guide/swapContractsGuide', mark: 'swapContractsGuide'},
        {name: '비트코인（BTC）가이드', url: '/guide/BTC', mark: 'BTC'},
        {name: 'BTCUSD', url: '/guide/BTCUSD/1', mark: 'BTCUSD'}
      ]
    },
    {
      name: '과거 내역',
      children: [
        {name: '현물 가격 지수', url: '/guide/.BBTC/1', mark: '.BBTC'},
        {name: '펀딩 내역', url: '/guide/fundingHistory/1', mark: 'fundingHistory'},
        {name: '보험 기금', url: '/guide/insuranceFund/1', mark: 'insuranceFund'},
      ]
    },
    {
      name: '마진 거래',
      children: [
        {name: '자동자산청산(ADL)', url: '/guide/autoDeleveraging', mark: 'autoDeleveraging'},
        {name: '거래 가이드', url: '/guide/exchangeGuide', mark: 'exchangeGuide'},
        {name: '공정가격 표시', url: '/guide/fairPriceMarking', mark: 'fairPriceMarking'},
        {name: '교차 마진', url: '/guide/isolatedMargin', mark: 'isolatedMargin'},
        {name: '청산 기능', url: '/guide/liquidation', mark: 'liquidation'},
        {name: '마진 용어', url: '/guide/marginTermReference', mark: 'marginTermReference'},
        {name: '주문 유형 FAQ', url: '/guide/orderTypeFAQ', mark: 'orderTypeFAQ'},
        {name: '손익 가이드', url: '/guide/pnlGuide', mark: 'pnlGuide'},
        // {name: '위험 한도', url: '/reference/risk', mark: 'risk'}
      ]
    },
    // {
    //   name: '계약',
    //   children: [
    //     {
    //       name: 'BTC(비트코인)',
    //       url: '/guide/BTC',
    //       mark: 'BTC',
    //       children: [
    //         {name: '비트코인（BTC）가이드', url: '/guide/BTC', mark: 'BTC'},
    //         {name: 'BTCUSD', url: '/guide/BTCUSD/1', mark: 'BTCUSD'}
    //       ]
    //     }
    //   ]
    // },
    // {
    //   name: '지수',
    //   children: [
    //     {
    //       name: '현물 가격 지수',
    //       url: '/guide/.BBTC/1',
    //       mark: 'bxbt',
    //       children: [
    //         {name: '현물 가격 지수', url: '/guide/.BBTC/1', mark: '.BBTC'},
    //       ]
    //     }
    //   ]
    // },

  ],
  history: {
    title: '펀딩 내역',
    text1: '이 목록에는 모든 계약에 대한 과거 펀딩 비율이 포함되어 있습니다.',
    text11: '데이터 없음',
    search: {
      placeholder: '아래 값을 클릭하여 필터링하세요',
      clear: '지우기',
      search: '검색'
    },
    list_info: {
      p1: '결과 보기 0 - 100',
      p2: '다음 페이지 >'
    },
    theadList: ['시간', '계약', '시간 구역', '자금율', '일일 자금율'],
    next: '다음 페이지',
    previous: '이전 페이지',
    hours: '시간',
  },
  insurance_fund: {
    title: '보험 기금',
    paragraph1: {
      p1: '58 Swap는 보험 기금을 사용하여 거래자 포지션의 <a href="/reference/autoDeleveraging" style="color: #597ab9">자동자산청산(ADL)</a>을 예방할 수 있습니다. 해당 펀드는 자동자산청산(ADL)이 발생하기 전에 불완전한 청산 주문을 강화하는 데 사용됩니다.',
      p2: '보험 기금은 <a href="/reference/liquidation" style="color: #597ab9">청산</a>으로부터 행해질 수 있었던 파산 가격보다 주문을 강화하는 데 사용됩니다.'
    },
    text1: '이 목록에는 모든 계약에 대한 과거 펀딩 비율이 포함되어 있습니다.',
    list_info: {
      p1: '결과 보기 0 - 100',
      p2: '다음 페이지 >'
    },
    theadList: ['날짜', '보험 기금 잔액']
  },
  xbt: {
    title: '비트코인(BTC) 가이드',
    paragraph1: {
      p1: '58 SWAP 계약 거래는 <a href="/reference/swapContractsGuide" style="color: #597ab9;">무기한 계약</a>이라는 혁신적인 새로운 유형의 계약을 통해 비트코인(BTC)을 거래할 수 있습니다. 이는 기초 현물시장을 반복하는 데 그 목적이 있으나 더욱 높은 레버리지 효과를 부여합니다. 이 상품은 만기일이 존재하지 않으며 다양한 메커니즘을 통해 거래를 위해 <a href="/reference/swapContractsGuide" style="color: #597ab9;">펀딩 비율</a>을 지속적을 추적합니다.',
      p2: '펀딩에 대한 비율 및 어떻게 계산이 이루어지는 지를 보시려면 BTCUSD 계약 세부정보 혹 무기한 계약 가이드의 펀딩 계산을 참고하여 주세요.'
    },
    paragraph2: {
      p1: '이 상품은 오랜 기간동안 포지션을 유지하기를 선호하고, 급격한 변동을 회피하고자 하는 거래자들에게 매우 적합하게 사용됩니다.',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9;">무기한 계약은 어떻게 시세를 매깁니까?</a>',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9;">마진 및 레버리지</a>',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9;">가격 지수</a>',
      p5: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9;">표시 및 결산</a>'
    },
    text1: '무기한 계약은 어떻게 시세를 매깁니까?',
    paragraph3: {
      p1: 'BTCUSD 계약의 기초 가격은 <a href="/guide/.BBTC/1" style="color: #597ab9;">58 Swap</a> 지수입니다. 이는 BitFinex、Bitstamp、Gdax、Huobi、Binance 거래소의 (BTC/USD) 가격 지수와 동일한 가중치가 적용된 수치입니다. 기초 및 스왑계약 모드 USD로 거래되며 마진 및 손익은 비트코인으로 계산됩니다.'
    },
    theadList: [' ', '계약 계산'],
    tbodyList: [
      ['거래승수', '1 USD'],
      ['BTC 계약 금액', '1 USD거래승수 / BTCUSD 가격'],
      ['USD 계약 금액', '1 USD'],
      ['손익 계산', '계약 수량 * 거래승수 * (1/진입 가격 - 1/거래 가격)']
    ],
    paragraph4: {
      p1: '비트코인 / USD 가격의 상승으로 수익을 내고자 하는 거래자들은 BTCUSD 무기한 계약을 매수할 것입니다. 반대로 가격이 하락할 것이라 생각하는 거래자들은 무기한 계약을 매도할 것입니다.'
    },
    text2: '마진 및 레버리지',
    paragraph5: {
      p1: '모든 마진은 비트코인 기반으로 게시되며 이는 거래자가 오직 비트코인만을 사용하여 해당 계약을 공매수 혹은 공매도 할 수 있음을 의미합니다. BTCUSD 무기한 계약은 2배、3배、5배、10배、20배、33배、50배、최대 100 배의 높은 레버리지 효과를 제공합니다.',
      p2: '예: 100개의 비트코인 가치가 있는 계약을 매수하시려면 1개 비트코인의 개시 마진이 필요합니다.'
    },
    text3: '가격 지수',
    paragraph6: {
      p1: '58 Swap <a href="/guide/.BBTC/1" style="color: #597ab9;">.BBTC</a> 지수가 현재 <a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD 무기한 계약</a>에 사용되고 있습니다. 구성 요소는 아래와 같습니다：'
    },
    theadList2: ['거래소', '가중치'],
    tbodyList2: [
      ['BitFinex', '20%'],
      ['Bitstamp', '20%'],
      ['Gdax', '20%'],
      ['Huobi', '20%'],
      ['Binance', '20%']
    ],
    paragraph7: {
      p1: '현재는 동일한 가중치가 적용되고 있으나 향후에는 충분한 사전 공지 이후 조정될 수 있습니다.'
    },
    text4: '표시 및 결산',
    paragraph8: {
      p1: 'BTCUSD 계약은 무기한이기 때문에 결산이 이루어지지 않습니다. <a href="/reference/marginTermReference" style="color: #597ab9;">미 실현 손익</a> 및 <a href="/reference/liquidation" style="color: #597ab9;">청산</a>에 대한 계산은 <a href="/reference/fairPriceMarking" style="color: #597ab9;">공정가격 표시</a> 시스템을 통해 이루어집니다.',
      p2: '참고：이 상품은 무기한 계약이므로 8시간마다 펀딩이 이루어집니다. 자세한 내용은 무기한 계약 가이드의 <a href="/reference/swapContractsGuide" style="color: #597ab9;">펀딩</a>을 참조해 주시고 현재 비율은 <a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD 계약 세부정보</a>의 펀딩 계산을 참조해 주시기 바랍니다.'
    },
    text5: 'BTCUSD 거래 예시 >',
    paragraph9: {
      p1: '거래자는 6000 USD로 BTCUSD의 100 BTC를 공매수합니다. 이는 100 BTC * 6000 USD = 600,000건의 계약이 됩니다. 몇 일후 계약의 가격은 7000 USD로 상승했습니다.',
      p2: '거래자의 수익︰ 600,000 * 1 * (1/6,000 - 1/7,000) = 14.286 BTC',
      p3: '만약, 가격이 5000 USD로 하락했다면 거래자의 손실은︰ 600,000 * 1 * (1/6,000-1/5,000) =-20 BTC가 되었을 것입니다. 계약의 역형 및 비선형적인 특성 상 손실이 더욱 크게 됩니다.',
      p4: '반대로 거래자가 공매도 포지션을 취했다면 가격이 상승했을 때의 손실보다 가격이 하락했을 때의 이익이 더욱 컸을 것입니다.'
    }
  },
  xbtusd: {
    title: 'BTCUSD: 계약 세부정보',
    text1: '설명',
    paragraph1: {
      p1: '<a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD</a>는 <a href="/guide/.BBTC/1" style="color: #597ab9;">.BBTC</a> 지수로 가격이 책정된 BTC/USD 무기한 계약입니다. 각 계약은 1 USD 만큼의 비트코인 가치가 있습니다.',
      p2: '펀딩은 모든 8시간에 의해 지불되거나 지급 받습니다. 매일 UTC+8 오전 8:00、 UTC+8 오후 4:00、 UTC+8 오후12:00 입니다.',
      p3: '<a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD</a>는 프리미엄 지수를 사용하여 펀딩 비율을 계산합니다. 기본 금리는 <a href="/guide/.BTCBON8H/1" style="color: #597ab9;">.BTCBON8H</a> 지수 및 .USDBON8H 지수에 해당하며 <a        href="/guide/.BTCUSDPI8H/1" style="color: #597ab9;">.BTCUSDPI8H</a> 지수에 표시됩니다. 이는 최종 <a href="/reference/swapContractsGuide" style="color: #597ab9;">펀딩 비율</a> 계산에 사용됩니다.',
      p4: '',
      p5: '만기: 이 계약은 무기한 계약으로써 만기 되지 않습니다.'
    },
    // text2: 'BTC 시리즈 가이드 보기',
    text2: '펀딩 계산',
    paragraph2: {
      p1: `펀딩 비율에 대한 자세한 정보는 <a href="/reference/swapContractsGuide" style="color: #597ab9;">계약 가이드</a>를 참조하여 주세요`
    },
    text3: '공식',
    paragraph3: {
      p1: '프리미엄 비율 P = A / B - 1',
      p2: 'P，프리미엄 비율；A，최후 3분 거래 평균값；B，최후 3분 평균 지수',
    },
    paragraph4: {
      p1: '펀딩 비율 F = Clamp( P * K, -0.03%, 0.03%)',
      p2: 'F，펀딩 비율；P，프리미엄 비율；K，파라미터 K=0.6'
    },
    paragraph5: {
      p1: '펀딩 비율는 사용자 간에 거래되는 비율을 의미합니다.',
      p2: '프리미엄 비율가 사용되어 계산되며 금리를 통해 최대 0.03%까지 조정됩니다.'
    },
    text4: '계약 세부정보',
    theadList2: ['기호', 'BTCUSD'],
    tbodyList2: [
      ['만기일', '무기한'],
      ['개시 마진', '1.00% + 진입 커미션 + 거래 커미션'],
      ['유지 마진', '0.50% + 거래 커미션 + 펀딩 비율'],
      ['기준금리 기호', '.BTCBON8H'],
      ['제시금리 기호', '.USDBON8H'],
      ['펀딩 프리미엄 기호', '.BTCUSDPI8H'],
      ['펀딩 간격', '모든 8시간'],
      ['자동자산청산 (ADL) 활성화', '예: 이 계약은 높은 투기성이며 자동자산청산 (ADL) 기능을 통해 손실을 관리합니다.'],
      ['표시 방법', 'FairPrice'],
      ['공정 기준 계산', '이 상품의 공정 베이시스는 펀딩 비율의 연간 계산에 의해 결정됩니다.'],
      ['위험 한도', '200 BTC'],
      ['위험 단계', '100 BTC'],
      ['계약 규모', '1 USD (계약 당 현재 0.00006086 BTC)'],
      ['결산', '본 계약은 무기한 계약으로써 결산되지 않습니다.'],
      ['커미션', '자세한 내용은 수수료 참조을 참조하십시오.'],
      ['최소 가격 인상', '0.5 USD'],
      ['최대 가격', '1,000,000'],
      ['최대 주문 수량', '10,000,000'],
      ['최소 계약 수량', '1'],
    ]
  },
  bxbt: {
    title: '현물 가격 지수',
    text1: '지수 정보',
    paragraph1: {
      p1: '58 Swap 지수는 현물 가격을 매 1분마다 추적합니다.가격 계산은 58 Swap 지수의 최종 가격에서 계산됩니다.지수 가격은 여러 페이지에서 현재 비트코인 가격으로 표시되어 있습니다.',
      p2: '58 Swap 지수는 BitFinex、Bitstamp、Gdax、Huobi、Binance 거래소의 (BTC/USD) 가격 지수와 동일한 가중치가 적용된 수치입니다.',
      p3: `이는 복합 상품이기 때문에 다양한 출처로부터 작성됩니다. 구성 요소에 대한 정보는 아래 "복합 지수 분석"을 참조하십시오. 만약 거래가 15분 동안 이루어지지 않을 경우 58 Swap 서비스는 거래가 재개 될 때까지 해당 구성요소를 지수에서 자동적으로 제거할 수 있습니다.`
    },
    paragraph2: {
      p1: `이 지수를 사용하는 상품들입니다.`,
      p2: `<a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD</a>。`
    },
    text2: '.BBTC 과거 지수값',
    text3: '지수값',
    theadList1: ['시간', '계약', '가격 지수'],
    tbodyList1: [],
    text4: '종합 지수 분류 체계',
    theadList2: ['시간', '참고', '가중치', '최신 가격'],
    tbodyList2: []
  }

}
export default guide
