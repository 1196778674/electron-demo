let reference = {
  menu: [
    {
      name: '기본 사항',
      children: [
        {name: '개요(시작하기)', url: '/reference/overview', mark: 'overview'},
        {name: '자주 묻는 질문', url: '/reference/faq', mark: 'faq'},
        {name: '수수료', url: '/reference/fees', mark: 'fees'}
      ]
    },
    {
      name: '계약 가이드',
      children: [
        {name: '무기한 계약 가이드', url: '/reference/swapContractsGuide', mark: 'swapContractsGuide'}
      ]
    },
    {
      name: '마진 거래',
      children: [
        {name: '자동자산청산(ADL)', url: '/reference/autoDeleveraging', mark: 'autoDeleveraging'},
        {name: '거래 가이드', url: '/reference/exchangeGuide', mark: 'exchangeGuide'},
        {name: '공정가격 표시', url: '/reference/fairPriceMarking', mark: 'fairPriceMarking'},
        {name: '교차 마진', url: '/reference/isolatedMargin', mark: 'isolatedMargin'},
        {name: '청산 기능', url: '/reference/liquidation', mark: 'liquidation'},
        {name: '마진 용어', url: '/reference/marginTermReference', mark: 'marginTermReference'},
        {name: '주문 유형 FAQ', url: '/reference/orderTypeFAQ', mark: 'orderTypeFAQ'},
        {name: '손익 가이드', url: '/reference/pnlGuide', mark: 'pnlGuide'},
        // {name: '위험 한도', url: '/reference/risk', mark: 'risk'}
      ]
    }
  ],
  overview: {
    title: '58 Swap에서 거래하기',
    paragraph1: {
      p1: '파생상품 거래는 거래자들로 하여금 넓고 깊은 부분에 대한 이해를 요구하기 때문에 거래 시작과 첫 거래 진행은 쉬운 반면 이에 대해 알고계셔야 할 사항은 굉장히 많습니다.'
    },
    text1: '58 Swap 소개 및 개요',
    paragraph2: {
      p1: '58 Swap는 비트코인을 활용한 다양한 파생상품 레버리지 계약의 매매 정보를 제공하는 P2P 방식의 거래 플랫폼입니다. 모든 상품은 기본 화폐 기준으로 매매를 진행합니다.（예: BTCUSD 계약의 경우 BTC로 매매 진행）.',
      p2: '58 Swap에서의 모든 손익은 기본 화폐를 기준으로 계산합니다. （예: BTCUSD 계약의 경우 BTC로 손익 계산）. 58 Swap에서는 실물 화폐를 취급하지 않습니다.（정부에서 발행한 화폐）',
      p3: '58 Swap에서의 거래는 높은 레버리지 기반의 계약을 허용하고 있습니다.'
    },
    paragraph3: {
      p1: '58 Swap에는 5가지의 기본 탐색 탭이 있습니다.',
      p2: `<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/trade/1" style="color: #597ab9">계약 거래</a>：58 Swap의 거래 대시보드입니다. 여기에서 거래하고자 하는 상품 및 레버리지를 선택하고 해당 상품에 대한 주문을 신청 및 취소할 수 있습니다. 또한 자산 정보에서 포지션에 대한 정보를 확인 할수 있습니다.`,
      p3: `<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9">계약 가이드</a>：이 탭에는 계약 가이드 및 신규 가이드를 포함하고 있습니다. 또한 이 탬에서 모든 제품의 펀딩 내역, 최소 계약 규모, 레버리지, 만기일, 펀딩, 기본적인 참고 가격 지수 데이터 및 이 외 거래와 관련된 몇 가지 다른 페이지 등 거래 전반의 중요한 정보를 포함하고 있습니다. 동시에 무기한 계약 및 포지션이 어떻게 표시되고 언제 어떻게 청산이 이루어 지는지에 대한 정보를 습득하실 수 있으며 58 Swap의 수수료 지원 사항 및 거래 전반에 대한 이해도를 돕는 다른 유용한 정보들을 확인할 수 있습니다.`,
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference" style="color: #597ab9">자산 정보</a>︰이 탭에서는 계정의 모든 정보를 확인할 수 있습니다. 예: 현재 비트코인, 사용 가능 마진, 잔액, 입출금 정보, 거래 내역, 추천 계획 정보 등' ,
      p5: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/information" style="color: #597ab9">계약 계산기</a>︰거래자의 수익, 필요한 마진, 거래 가격, 청산 가격 등을 계산하는데 도움이 될 수 있습니다.',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference" style="color: #597ab9">계약서 공유</a>︰이 탭에서는 거래자의 주문서를 공유할 수 있습니다. 본인 주문서 및 거래 전략을 공유할 수 있으며 또한 다른 거래자의 주문서를 참고할 수 있습니다.',
    },
    paragraph4: {
      p1: '어디서부터 시작해야 하나요?',
      p2: '첫 번째 단계로는 참고 정보 탭의 내용을 잘 읽어보시고 왼쪽에 있는 용어와 페이지를 살펴보시기 바랍니다. 거래 가이드 탭 역시 주문 및 손익 계산식에 대한 이해를 돕는 데 매우 유용합니다.',
      p3: '다음 사항들을 자세히 읽어보기를 권장 드립니다:',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/swapContractsGuide" style="color: #597ab9">무기한 계약 거래 가이드</a>︰ BTCUSD는 영구적인 계약으로써 58 Swap에서 가장 인기 있는 상품입니다. 모든 신규 사용자가 무기한 계약 시장, 주요 컨셉 및 메커니즘 등 무기한 계약 가이드의 주요 사항들을 반드시 이해하고 거래를 진행하실 것을 권장 드립니다.',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/autoDeleveraging" style="color: #597ab9">자동자산청산(ADL)</a>︰이 페이지에서는 거래자의 포지션이 현재 시장에서 청산될 수 없는 경우 상대방의 포지션에 어떠한 변화가 있는 지를 설명하기 때문에 매우 중요합니다.',
      p7: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/fairPriceMarking" style="color: #597ab9">공정가격 표시:</a>︰이 페이지에서는 포지션이 어떻게 표시되는 지를 확인할 수 있으며 이는 레버리지를 사용하는 모든 거래자들의 청산 가격을 결정하기 때문에 특히 중요합니다.',
      p8: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/liquidation" style="color: #597ab9">청산 기능</a>︰이 페이지는 어떻게 청산이 이루어지는 지에 대한 중요한 내용을 다루고 있으므로 모든 거래자들은 해당 내용을 반드시 숙지하고 이해하시기를 권장 드립니다.',
      // p9: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/profit-loss#F1" style="color: #597ab9">위험 한도</a>︰이 페이지는 특정 포지션 규모에서 어느 정도의 레버리지를 사용할 수 있는지를 설명합니다.'
    },
    text2: '거래 개요',
    paragraph5: {
      p1: '58 Swap에서 제공하는 거래는 상품, 종류 및 유형에 의해 일부 사용자들에게는 새로운 경험을 제공할 수 있습니다. 58 Swap와 다른 경쟁사 간의 주요한 차이점을 확인하시려면 <a href="" style="color: #597ab9">여기</a>를 클릭하여 주세요',
      p2: '모든 거래자들은 58 Swap에서 사용되는 <a href="/reference/marginTermReference" style="color: #597ab9">마진 용어</a>를 숙지하셔야 합니다.',
      p3: '58 Swap에서 주문할 수 있는 유형에 대한 문의는 <a href="/reference/orderTypeFAQ" style="color: #597ab9">주문 유형 FAQ</a>를 참고하여 주세요.'
    },
    paragraph6 : {
      p1: '58 Swap에서 제공하는 계약',
      p2: '58 Swap에서는 <a href="/reference/swapContractsGuide" style="color: #597ab9">무기한 계약</a> 상품을 제공하고 있습니다.',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>선물 계약과 반대로 무기한 계약은 만기일이 없으므로 결산 역시 이루어지지 않습니다.',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>무기한 계약은 매 8 시간마다 <a href="/reference/swapContractsGuide" style="color: #597ab9">펀딩 비율</a>이 발생합니다. 포지션을 보유한 모든 사용자들은 일정 시간마다 수수료를 지급받거나 지불하셔야 합니다.',
      p5: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>선물 계약이 결산되면 해당 포지션을 보유한 모든 사용자는 계약의 결산가로 결제됩니다.',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>이러한 계약을 간단하게 매수 혹은 매도하여 해당 계약을 공매수 또는 공매도 할 수 있습니다. 계약을 보유하지 않을 경우에도 매도가 가능하기 때문에 58 Swap를 더욱 "적나라"한 공매도를 위한 도구로써 활용하시기에 매우 유용합니다.',
    },
    paragraph7 : {
      p1: '마진 거래',
      p2: '58 Swap에서는 <a href="/reference/autoDeleveraging" style="color: #597ab9">자동자산청산(ADL)</a> 기능을 구현하고 있으며 이를 통해 청산된 주문이 시장에서 드물게 실행되지 못할 경우 레버리지 포지션에 대한 수익을 특정 기간 동안 감소시킵니다.',
      p3: '58 Swap에서는 2배、3배、5배、10배、20배、33배、50배、100배의 레버리지 거래 효과를 제공합니다',
      p4: ' - 안정적인 거래를 추구하는 투자자는 위험율이 비교적 낮은 2-10배의 레버리지를 선택할 수 있습니다.',
      p5: ' - 위험적인 거래를 추구하는 투자자는 위험율이 비교적 높은 10-100배의 레버리지를 선택하여 더 높은 수익을 실현할 수 있습니다.',
      p6: '만약 100배 레버리지를 선택할 경우 이는 1개 비트코인을 통해 100개 비트코인 가치가 있는 계약을 매수할 수 있다는 것을 의미합니다. 그러나 항상 주의하셔야 합니다. 높은 레버리지로 인해 수익이 가속화 될 수 있으나 잠재적인 <a href="/reference/liquidation" style="color: #597ab9">손실의 가속화</a> 역시 초래할 수 있습니다.'
    }
  },
  questions: {
    title: '자무 묻는 질문',
    text1: '58 Swap 상업 거래소',
    paragraph1: {
      p1: '무기한 계약',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>무기한 계약이란？',
      p3: '<a href="/reference/swapContractsGuide" style="color: #597ab9">무기한 계약</a>은 거래 방식에 있어 전통적인 선물계약과 유사한 상품이지만 만기가 없으므로 거래자는 원하는 기한 만큼 포지션을 유지할 수 있습니다. 무기한 계약은 현물과 유사하게 거래되며 기초 물가지수와 밀접한 관계를 형성합니다. 또한 무기한 계약은 <a href="/reference/swapContractsGuide" style="color: #597ab9">펀딩</a>의 메커니즘을 기반으로 이루어집니다.',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>시장 평균가란？',
      p7: '시장 평균가란 계약이 <a href="/reference/marginTermReference" style="color: #597ab9">미실현 손익</a>으로 표시된 가격을 의미하며 주로 <a href="/reference/liquidation" style="color: #597ab9">청산</a>의 목적을 지니고 있습니다.',
      p8: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>무기한 계약 또는 선물 계약의 가격을 어떻게 결정하나요？',
      p9: '58 Swap는 <a href="/reference/fairPriceMarking" style="color: #597ab9">공정가격(시장 평균가) 표시 방법</a>에 의해 계약을 표시합니다.해당 가격은 미실현 손익을 결정합니다. 실현 손익은 진입 가격, 거래 가격 또는 결산 가격 및 그 외 발생 비용에 의해 결정됩니다.',
      p10: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>결산가는 어떻게 계산되나요？',
      p11: '결산가는 선물계약이 결산되는 가격을 의미합니다. 58 Swap는 가격 조작 사태를 방지하기 위해 결제 및 결산 전 일정 기간 동안의 평균치를 사용하며 해당 기간은 상품 별로 상이합니다.자세한 사항은 계약 세부 정보를 참고하여 주세요.',
      p12: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>무기한 계약 및 선물 계약의 매매는 어떻게 이루어지나요？',
      p13: '“주문하기” 탭에서 특정 수량, 가격 및 거래 방향을 지정할 수 있습니다.',
      p14: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>매수가 및 매도가란？',
      p15: '매수가는 거래자가 특정 가격 및 수량으로 계약을 매수하고자 하는 주문을 의미합니다. 매도가는 거래자가 특정 가격 및 수량으로 계약을 매도하고자 하는 주문을 의미합니다.',
      p16: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>58 Swap에는 시장 메이커가 있나요？',
      p17: '在 58 Swap에 제공되는 계약에 의해 지속적으로 큰 규모의 계약을 이끌어 가는 시장메이커가 있습니다. 하지만 이러한 시장 메이커들에게는 그 어떠한 혜택이나 특별한 권한은 없으며 공정한 시장 가격으로 운영됩니다.',
    },
    paragraph2: {
      p1: '레버리지',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>58 Swap는 레버리지 효과를 제공하나요？',
      p3: '예，58 Swap는 모든 상품에 대한 레버리지를 제공합니다.',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>58 Swap는 어느 정도의 레버리지 효과를 제공하나요?',
      p5: '58 Swap는 상품 별로 상이한 규모의 레버리지 효과를 제공합니다. 레버리지는 <a href="/reference/marginTermReference" style="color: #597ab9">개시마진 및 유지마진</a> 수준에 의해 결정됩니. 해당 마진의 수준은 포지션을 입력 및 유지하기 위해 최소한으로 요구되는 자본을 결정합니다 .레버리지는 고정된 거래 승수가 아닌 최소한으로 요구되는 자본을 의미합니다.',
      p6: '58Swap의 <a href="/guide/BTCUSD/1" style="color: #597ab9">BTC/USD</a> 무기한 계약은 2-100배의 레버리지 효과를 제공하고 있습니다.',
      p7: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>개시 마진이란?？',
      p8: '<a href="/reference/marginTermReference" style="color: #597ab9">개시 마진</a>은 포지션을 열기 위해 입금되어야 할 최소량의 비트코인을 의미합니다.',
      p9: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>유지 마진이란?？',
      p10: '<a href="/reference/marginTermReference" style="color: #597ab9">유지 마진</a>은 포지션을 유지하기 위해 보유되어야 하는 최소량의 비트코인을 의미합니다. 마진 잔액이 유지 마진보다 작을 경우 포지션은 청산 기능에 의해 <a href="/reference/liquidation" style="color: #597ab9">청산</a>됩니다',
    },
    paragraph3: {
      p1: '청산',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>왜 청산이 이루어지나요？',
      p3: '계약 상의 시장 평균가가 공매수에 대한 청산 가격보다 낮아지거나 공매도에 대한 청산 가격보다 높아 질 경우 유지 마진 수준에 미치지 못하게 되어 청산이 이루어집니다. <a href="/information/tradeHistory" style="color: #597ab9">거래 내역</a>에서 청산된 가격은 파산 가격(유지 마진 0에 해당)을 의미합니다.',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>청산 기능은 어떻게 이루어지나요？',
      p5: '청산 시 청산 기능은 유력한 시장 가격으로 포지션의 종료를 시도하게 됩니다. 이러한 시도가 이루어지지 않을 경우 <a href="/reference/autoDeleveraging" style="color: #597ab9">자동자산청산(ADL)</a> 절차가 이루어집니다.',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>예고없이 파산이 가능한가요？',
      p7: '아니오. 58 Swap는 거래자의 마진 잔고가 0 이하로 하락하는 것을 방지하기 위해 정교하게 설계된 마진 및 청산 절차를 이행하기 전 계약자에게 이메일로 파산 가능성을 예고해 줍니다.',
      p8: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>58 Swap는 집합손실이 이루어지나요？',
      p9: '아니요，58 Swap는 <a href="/reference/autoDeleveraging" style="color: #597ab9">자동자산청산(ADL) 시스템</a>을 사용하기 때문에 손실을 사회화 할 필요가 없습니다.',
      p10: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>자동자산청산(ADL) 기능이란？',
      p11: '<a href="/reference/autoDeleveraging" style="color: #597ab9">자동자산청산(ADL)</a> 절차는 시장에서 청산되지 않은 채 파산된 경우에 발생합니다. 반대의 포지션을 취하는 거래자들의 포지션은 레버리지 및 우선 수익에 의해 정리됩니다.'
    },
    paragraph4: {
      p1: '수수료',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>비트코인 입금 시 수수료가 있나요？',
      p3: '아니요，58 Swap에서 입금 시 수수료를 부과하지 않습니다.',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>비트코인 출금 시 수수료가 있나요？',
      p5: '아니요，58 Swap에서 출금 시 수수료를 부과하지 않습니다. 비트코인 출금 시 최소의 비트코인 네트워크 요금이 블록체인 로드에 의해 정해지며 해당 내역은 출금 페이지에서 확인하실 수 있습니다.',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>거래 시 수수료가 있나요？',
      p7: '예，58 Swap는 완료된 모든 거래 건에 대해 수수료를 부과합니다. 자세한 내용은 <a href="/reference/fees" style="color: #597ab9">수수료</a> 페이지를 참고하여 주세요'
    },
    paragraph5: {
      p1: '입금 및 보안',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>어떻게 입금하나요？',
      p3: '"계정" 탭에서 지갑 관리를 클릭하여 입금 버튼을 클릭하면 비트코인 입금을 위한 멀티 시그니처 주소 페이지로 이동됩니다. 1회 인증 후 자금은 계좌로 입금됩니다.',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>58 Swap에서 멀티 시그니처 주소를 사용하는 이유는 무엇인가요？',
      p5: '58 Swap에서는 비트코인의 입출금 및 거래 시 절도 또는 도난을 방지하기 위해 멀티시그니처 주소를 사용합니다.',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>문제가 발생하는 경우 누구에게 연락해야 하나요？',
      p7: '문의사항 또는 문제가 발생하는 경우 고객센터로 문의하시면 신속하게 연락드립니다.'
    }
  },
  fee: {
    title: '수수료',
    text1: '무기한 계약',
    theadList: ['시리즈', '레버리지', '메이커 수수료', '테이커 수수료'],
    // theadList: ['시리즈', '레버리지', '메이커 수수료', '테이커 수수료', '공매수 펀딩', '공매도 펀딩', '펀딩 간격'],
    tbodyList: [
      ['모든 무기한 계약', '모든 레버리지', '0.03%', '0.06%']
      // ['비트코인', '100x', '-0.0250%', '0.0750%', '0.0100%', '-0.0100%', '모든 8 시간']
    ],
    tip1: '마이너스 수수료는 거래자가 리베이트를 지급받는 것을 의미합니다. 펀딩 비율은 시장의 대출 금리에 기반해 변경됩니다. 자세한 내용은 아래를 참고하여 주세요.',
    paragraph1: {
      p1: '펀딩',
      p2: 'BTCUSD와 같은 무기한 계약에서는 개별적인 펀딩 간격에서의 공매수 및 공매도 사이의 펀딩 교환이 이루어집니다. <a href="/information/tradeHistory" style="color: #597ab9">거래 내역</a>에서 양수의 금액은 해당 펀딩 기간에 펀딩을 지불했다는 것을 의미하고 음수로 표시되는 금액은 펀딩을 수령한 것을 나타냅니다. 58 Swap는 펀딩 지불 및 수령에 대한 수수료를 부과하지 않습니다.',
      p3: '펀딩에 대한 자세한 내용은 <a href="/reference/swapContractsGuide" style="color: #597ab9">무기한 계약</a> 가이드를 참고하여 주세요'
    }
  },
  introduce: {
    title: '무기한 계약 가이드',
    text1: '개요',
    paragraph1: {
      p1: '무기한 계약은 전통적인 선물 계약과 유사한 파생 상품이나 몇 가지 차별화 되는 특징이 있습니다.',
      p2: '만기 또는 결산이 없습니다.',
    },
    paragraph2: {
      p1: '무기한 계약은 마진 거래를 기반으로 현물 시장을 모방하기 때문에 기준 가격 지수에 가깝게 거래됩니다.',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>이는 베이시스로 인해 현저히 다른 가격으로 거래되는 선물 계약과 대조되는 양상을 보입니다',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>현물 가격 변동을 결정하는 기본적인 메커니즘은 <a href="/reference/swapContractsGuide" style="color: #597ab9">펀딩</a>입니다.'
    },
    text2: '무기한 계약 마켓의 원리',
    paragraph3: {
      p1: '무기한 계약에서 시장에 대한 몇 가지 메커니즘을 인지해야 합니다.핵심 요소는 다음과 같습니다：',
      p2: '1.포지션 표기：무기한 계약은 <a href="/reference/fairPriceMarking" style="color: #597ab9">공정가격 표기</a>법에 의해 정확하게 표기됩니다. 또한 표기된 가격은 <a href="/reference/marginTermReference" style="color: #597ab9">미실현 손익</a> 및 청산 가격을 결정합니다.',
      p3: '2.핵심적인 마진 수준으로 사용 가능한 최대 레버리지 및 어느 시점에서 <a href="/reference/liquidation" style="color: #597ab9">청산</a>이 이루어지는 지를 결정합니다.',
      p4: '3.펀딩：8시간 마다 매수인과 매도인 간의 정기적인 지불 교환이 이루어집니다. 해당 비율이 양수일 경우 매수인은 지불하게 되며 매도인은 지급을 받습니다. 비율이 음수일 경우 반대로 적용됩니다. 주의: 펀딩 타임스탬프에 포지션을 보유하고 있는 경우에만 지불하거나 지급을 받게 됩니다.',
      p5: '예：- 현물 가격이 지수 가격보다 상승되면 공매수는 시장 가격보다 많은 수익을 얻게되며 공매도는 시장 가격보다 더 많은 손실을 초래할 수 있습니다. 해당 경우 공매수는 공매도에게 일정 비례의 펀딩을 지불합니다.',
      p6: ' - 플랫폼 가격이 지수 가격보다 하락되면 공매수는 시장 가격보다 적은 수익을 얻게되며 공매도는 시장 가격보다 적게 손실하게 됩니다. 해당 경우 공매도는 공매수에게 일정 비례의 펀딩을 지불합니다.',
      p7: '4.펀딩 타임스탬프：UTC 16:00（북경 시간 00:00）、UTC 00:00（북경 시간 08:00）및 UTC 08:00（북경 시간 16:00）'
    },
    paragraph4: {
      p1: '좌측 하단의 “계약 세부사항” 탭을 통해 계약에 대한 펀딩 비율을 확인할 수 있습니다. 또한 해당 비율을 개별 "계약 세부정보"에서도 확인할 수 있습니다. 과거 비율은 <a href="/guide/fundingHistory" style="color: #597ab9">펀딩 내역</a>을 통해 확인할 수 있습니다.',
    },
    text3: '펀딩',
    paragraph5: {
      p1: '펀딩은 00:00 UTC、08:00 UTC 및 16:00 UTC 같이 매 8시간 마다 발생됩니다. 해당 시간에 포지션을 보유하고 있는 경우에만 지불하거나 지급을 받게 됩니다. 만약 그 이전에 포지션을 종료하신 경우에는 펀딩이 발생되지 않습니다.'
    },
    paragraph55: {
      p1: '플랫폼 현물 가격이 지수 가격보다 상승되면 공매수는 시장 가격보다 많은 수익을 얻게되며 공매도는 시장 가격보다 더 많은 손실을 초래할 수 있습니다. 해당 경우 공매수는 공매도에게 일정 비례의 펀딩을 지불합니다.플랫폼 가격이 지수 가격보다 하락되면 공매수는 시장 가격보다 적은 수익을 얻게되며 공매도는 시장 가격보다 적게 손실하게 됩니다. 해당 경우 공매도는 공매수에게 일정 비례의 펀딩을 지불합니다.'
    },
    paragraph6: {
      p1: '펀딩 지불 및 지급은 다음과 같이 계산됩니다︰',
      p2: '펀딩 = 포지션 금액 * 펀딩 비율'
    },
    paragraph7: {
      p1: '포지션 가치는 레버리지와 관계 없습니다. 예:100장의 BTCUSD 계약을 보유하고 계시다면 해당 계약의 명목상의 가치에 대해 자금이 청구되거나 수령되며 이는 할당 한 마진 기준으로 적용되지 않습니다.',
      p2: '펀딩 비율이 양수일 경우 매수인이 매도인에게 지불하게 되며 반대일 경우 매도인이 매수인에게 지불하게 됩니다.'
    },
    paragraph8: {
      p1: '펀딩 비율 계산',
      p2: '펀딩 비율은 무기한 계약이 거래되는 가격을 참고하여 기초 가격과 일치되도록 유지하는 목적을 지니고 있습니다. 이러한 방식으로 계약은 매수인과 매도인이 주기적인 이자를 교환하는 마진거래 시장이 어떻게 운영되는 지 모방합니다.',
      p3: '프리미엄／디스카운트',
      p4: '무기한 계약은 시장 평균가에 대한 상당한 프리미엄 또는 디스카운트로 거래될 수 있습니다. 이러한 상황에는 프리미엄 지수가 사용되어 다음 펀딩 비율을 계약이 이루어지는 수준과 일치하는 수준으로 높이거나 낮추게 됩니다. 각 계약의 프리미엄 지수는 특정 상품 별 계약 세부정보에서 확인할 수 있으며 계산 방식은 다음과 같습니다：',
      p5: '프리미엄 지수 (P) = 최후 3분 거래 평균값 / 최후 3분 평균 지수 - 1',
      p6: '최종 펀딩 비율 계산',
      p7: '펀딩 비율 (F) = 클램프(프리미엄 지수 (P) * K, 0.03%, -0.03%)',
      p8: '만약 프리미엄 지수 (P) * K가 +/-0.03% 범위 이내이면 펀딩 비율은 금리와 동일하게 됩니다.',
      p9: '이러한 방식으로 계산된 펀딩 비율은 포지션 값에 적용되어 펀딩 타임스탬프에 지불 또는 지급받는 금액을 결정하게 됩니다.',
      p10: '펀딩 수수료',
      p26: '58 Swap는 펀딩에 대한 수수료를 부과하지 않습니다；모든 거래는 피어 투 피어 (peer-to-peer) 방식으로 직접 진행됩니다'
    },
    text4: '추가 정보',
    paragraph9: {
      p1: '펀딩 계산에 관한 <a href="" style="color: #597ab9">추가 정보 및 예시</a>를 참고하여 주세요',
    }
  },
  underweight: {
    title: '자동자산청산(ADL)',
    text1: '자동자산청산(ADL) 개요',
    paragraph1: {
      p1: '포지션에 청산이 이루어질 경우 해당 포지션은 58 Swap의 청산 기능에 의해 처리됩니다. 시장 평균가가 파산 가격에 도달할 때까지 청산이 될 수 없는 경우 거래 상대방의 수익 및 레버리지 순위에 의해 청산이 자동으로 이루어집니다.',
      p2: '포지션이 종료되는 가격은 최초 청산 주문의 파산 가격이됩니다'
    },
    text2: '자동자산청산(ADL)의 우선 순위 디레버리징 랭킹',
    paragraph2: {
      p1: '대기열에서 포지션은 항상 표시기에 나타나며 이는 5개의 단위 (20%)로 아래와 같이 표시됩니다:',
      p2: '위 표시기의 모든 "표시등"이 켜진 상태는 포지션이 가장 높은 순위에 놓여 있다는 것을 의미합니다. 만약 시장에서 확인될 수 없는 청산의 경우 포지션은 자동자산청산(ADL) 처리될 수 있습니다.',
      p3: '<a href="/guide/insuranceFund" style="color: #597ab9">보험 기금</a>은 자동자산청산(ADL)의 발생을 예방하기 위해 사용됩니다. 만약 보험 기금이 완전히 소멸되면 자동자산청산(ADL) 처리됩니다.',
      p4: '만약 자동자산청산(ADL)이 발생되면 알림을 통해 통지를 받게됩니다. 미 체결 주문은 계속하여 유효하며 동시에 언제든지 새로운 주문을 진행할 수 있습니다.',
    },
    paragraph3: {
      p1: '우선 순위 계산',
      p2: '자동자산청산(ADL)에 대한 우선 순위는 수익 및 레버리지 기반으로 계산됩니다.수익성이 높고 레버리지가 높은 포지션이 우선 청산됩니다.',
      p3: '순위 계산식은 다음과 같습니다︰',
      p4: '랭킹 = 손익 백분율 * 유효 레버리지  (손익 백분율 > 0)',
      p5: '= 손익 백분율 / 유효 레버리지  (손익 백분율 < 0)',
      p6: '이 중에',
      p7: '유효 레버리지 = abs(시장 가치) / (시장 가치 - 파산 가치)',
      p8: '손익 백분율 = (시장 가치 - 평균 진입 가치) / abs(평균 진입 가치)',
      p9: '시장 가치 = 시장 평균가의 포지션 가치',
      p10: '파산 가치 = 파산 가격의 포지션 가치',
      p11: '평균 진입 가치 = 진입 가격 평균의 포지션 가치',
      p12: '본 시스템은 이러한 포지션을 공매수, 공매도 및 가장 높은 순위에서 낮은 순위에 의해 구분합니다.'
    },
    text3: '추가 정보',
    paragraph4: {
      p1: '자동자산청산(ADL)에 대한 <a href="" style="color: #597ab9">추가 정보 및 예시</a>를 참고하여 주세요.',
    }
  },
  exchange: {
    title: '거래 가이드',
    text1: '주문하기',
    paragraph1: {
      p1: '거래 대시보드의 주문하기 탭을 통해 <a href="/reference/orderTypeFAQ" style="color: #597ab9">다양한 유형</a>의 주문을 할수 있습니다.',
      p2: '매수 또는 매도 주문이 이루어질 경우 해당 주문이 제출되기 전 시스템에서는 <a href="/reference/marginTermReference" style="color: #597ab9"> 개시 마진</a>이 <a href="/reference/marginTermReference" style="color: #597ab9"> 사용 가능 잔액</a>에 확보되어 있는지 확인해야 합니다. 만약 해당 상품에 대한 기존 포지션이 존재하는 경우 시스템에서는 <a href="/reference/marginTermReference" style="color: #597ab9">유지 마진</a> 및 손익의 변동을 충당할 수 있는 사용 가능 잔액이 있는지도 확인합니다. 충분한 자금이 있을 경우 주문은 수락됩니다. 참고：주문이 완료되지 않거나 취소된 미 체결 주문일 경우에도 개시 마진만큼 사용 가능 잔액에서 차감됩니다.',
    },
    text2: '마진 및 손익',
    paragraph2: {
      p1: '거래 시작 전 개인 계정에 비트코인을 입금하셔야 합니다. 58 Swap의 모든 마진 및 손익은 비트코인에 표기됩니다. 거래 전 마진 용어에 포함되어 있는 모든 사항을 이해하고 거래를 진행하시기 권장해 드립니다.'
    },
    paragraph3: {
      p1: '다음은 개시 마진(IM)에 대한 중요한 규칙입니다：',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>매수 시 요구되는 개시 마진 = (IM * 계약 수량 * 거래 승수 / 지정 가격). 지정 가격으로 매수하는 경우 커미션이 적용됩니다.\n' +
      '그러나 실질적인 커미션은 최종 실행 가격을 기준으로 계산됩니다.',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>매수 시 요구되는 개시 마진 = (IM * 계약 수량 *  Max (거래 승수 / 지정 가격, 거래 승수 / 최적 경매 가격) ). 지정 가격 또는 최적 경매 가격으로 매도하는 경우 둘 중에 더욱 높은 쪽으로 커미션이 적용됩니다.\n' +
      '실질적인 커미션은 최종 실행 가격을 기준으로 계산됩니다.',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>만약 주문이 포지션 규모를 감소시키는 경우 개시 마진은 반영되거나 부과되지 않습니다.',
      p5: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>만약 시장에서 매수 및 매도 주문이 모두 보유하고 있는 경우 개시 마진은 순 매수가에 부과됩니다.(매수 주문 - 매도 주문). 또한 현재 포지션 규모를 줄이지 않을 경우 매도 주문에도 여전히 개시 마진이 부과됩니다.\n' +
      '예: 20건의 계약을 100 달러로 체결하고 15건의 계약을 150 달러로 제시한다면 \n' +
      '5건의 매수 주문 (20 - 15) 및 15건의 매도 계약에 대한 개시 마진이 부과됩니다.',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span> 만약 계약이 <a href="/reference/fairPriceMarking" style="color: #597ab9">공정가격 표시</a>방법으로 책정되는 경우 개시 마진의 계산 방법은 달라집니다. 매수 주문이 시장 평균가보다 높거나 매도 주문이 시장 평균가보다 낮게 책정되는 경우 반드시 지정가 및 시장 평균가의 차액을 부담해야 합니다.\n' +
      '예: 시장 평균가가 100 달러라고 가정하고 10건의 매수 주문을 110 달러로 개시하는 경우 요구되는 개시 마진은 다음과 같이 계산됩니다.\n' +
      '( 요구되는 개시 마진 = (IM * 10건의 거래 * 거래 승수 / $100) + (100% * 10건의 계약 * (거래 승수/$110 - 거래 승수/$100) ).',
    },
    paragraph4: {
      p1: '유지 마진(MM)은 계약의 시장 평균가로 계산됩니다.',
      p2: '모든 포지션에 대해 요구되는 유지 마진 = (MM * 계약 수량 * 거래 승수 / 진입 가격). 모든 포지션을 종료하기 위해 적용되는 커미션도 유지 마진의 조건에 추가됩니다.\n' +
      '이는 <a href="/reference/liquidation" style="color: #597ab9">청산</a>을 방지하기 위해 최소한으로 요구되는 마진입니다.',
      p3: '58 Swap는 마진 정책을 수정할 수 있는 권한을 보유하고 있습니다. 정책 수정 시 이메일로 통지하여 드립니다.',
    },
    text3: '펀딩 및 결산',
    paragraph5: {
      p1: '58 Swap의 계약은 <a href="/reference/swapContractsGuide" style="color: #597ab9">펀딩</a>이 발생합니다.펀딩 계산의 예시는 각 계약 세부정보에서 확인할 수 있습니다. 또한 모든 계약의 <a href="/guide/fundingHistory" style="color: #597ab9">펀딩 내역</a>에서 확인이 가능합니다.',
      p2: '선물 계약은 결산이 이루어지지만 무기한 계약은 결산이 이루어지지 않습니다. 계약 결산 시 포지션은 결산 가격으로 마감됩니다.',
      p3: '계약 만기 시 모든 수익 및 손실은 비트코인 잔고에 추가되며 더 이상 포지션 리스트에 표시되지 않습니다.',
      p4: '58 Swap에서 수행한 모든 계산은 최종 수치입니다'
    },
    text4: '시장 교란 (MDE)',
    paragraph6: {
      p1: '58 Swap에서 일시적으로 거래를 중단하는 경우에는 시장 교란 (MDE)이 공식적으로 발생하였기 때문입니다. 시장 교란으로 인하여 계약의 결산 또는 만기일 변경에 대하여 이메일로 통지하여 드립니다.',
      p2: '해당 내용은 거래 대시보드에 공지됩니다',
      p3: '시장 교란 (MDE) 발표는 58 Swap의 고유 권한입니다.',
    }
  },
  mark_reasonable_price: {
    title: '공정 가격 표시',
    text1: '개요',
    paragraph1: {
      p1: '58 Swap는 공정가격 표시 시스템에 의해 높은 레버리지 기반의 상품에 청산이 발생하는 것을 예방합니다. 만약 이러한 시스템이 존재하지 않으면 시장 조작이 발생하게 되여 불 필요한 청산이 발생하거나 시장 평균가가 가격 지수와 관계없이 변동할 수 있습니다.，。 불 필요한 청산을 방지하기 위해 58 Swap 시스템은 계약의 최종 가격을 시장 평균가가 아닌 공정 가격으로 설정하게 됩니다.'
    },
    paragraph2: {
      p1: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>무기한 계약에서 공정 각겨이 감소하는 경우 펀딩 베이시스 비율을 기초 가격 지수에 더한 금액과 동일합니다.',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>선물 계약의 경우 공정 가격은 기초 가격 지수에 연간 공정 가치 베이시스 즉 공정 베이시스 %를 더한 값이 됩니다.',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>모든 <a href="/reference/autoDeleveraging" style="color: #597ab9"> 자동자산청산 (ADL)</a> 계약에는 공정가격 표시 방법이 적용됩니다. 공정가격 표시 방법은 청산 가격 및 미 실현 손익에만 영향을 주며 실현 손익에는 영향을 미치지 않습니다.',
      p4: '참고：주문 실행 후 미 실현 손익은 양수 또는 음수로 표시될 수 있습니다. 이런 현상은 공정 가격과 최종 가격이 약간의 차이가 있다는것을 의미합니다. 이는 정상적인 현상이며 손실을 의미하는 것은 아닙니다. 하지만 조기 청산을 방지하려면 수시로 청산 가격을 확인하고 유의하여 주시기 바랍니다.',
    },
    text2: '무기한 계약의 공정 가격 계산',
    paragraph3: {
      p1: '58 Swap는 공정가격 표시 시스템에 의해 높은 레버리지 기반의 상품에 청산이 발생하는 것을 예방합니다. 만약 이러한 시스템이 존재하지 않으면 시장 조작이 발생하게 되여 불 필요한 청산이 발생하거나 시장 평균가가 가격 지수와 관계없이 변동할 수 있습니다.，。 불 필요한 청산을 방지하기 위해 58 Swap 시스템은 계약의 최종 가격을 시장 평균가가 아닌 공정 가격으로 설정하게 됩니다.'
    },
    paragraph4: {
      p1: '무기한 계약의 공정 가격 계산：',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>펀딩 베이시스 =  펀딩 비율 *  (펀딩까지의 시간 / 펀딩 간격)',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>공정 가격 = 지수 가격 * (1 + 펀딩 베이시스)',
      p4: '펀딩 계산에 대한 추가 정보 및 예시는 계약 가이드의 <a href="/reference/SwapContractsGuide" style="color: #597ab9">펀딩</a>을 참고하여 주세요',
    },
    paragraph5: {
      p1: '영향 매수/매도 가격',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>영향 매수가 = 매수 측에서 영향 마진을 실행하기 위한 평균 가격',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>영향 매도가 = 매도 측에서 영향 마진을 실행하기 위한 평균 가격',
      p4: '영향 마진이란 0.1 BTC 가치의 마진(예: 0.1 BTC / 개시 마진)으로 거래를 할 수 있는 금액이며 영향 매수/매도의 가격을 결정합니다.',
    }
  },
  isolated_cross: {
    title: '교차 마진',
    text1: '개요',
    paragraph1: {
      p1: '파생 상품 시장에서 마진이란 레버리지 기반의 포지션 진입을 위해 요구되는 금액을 의미합니다. 개시 마진 및 유지 마진은 포지션 진입 및 불 필요한 청산을 방지하기 위해 최소한으로 요구되는 금액을 의미합니다. 사용자 별 다양한 거래 전략을 구사하고 있기 때문에 58Swap는 교차 마진 제도를 적용하고 있습니다.'
    },
    paragraph2: {
      p1: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>교차 마진：마진은 포지션 간의 마진은 서로 공유되며 필요 시 청산을 피면하기 위해 계정의 총 자산에서 더 많은 마진을 얻을 수 있습니다.'
    },
    text2: '교차 마진',
    paragraph3: {
      p1: '교차 마진은 "스프레드 마진"으로도 표현되며 이는 청산을 방지하기 위해 사용 가능한 전체 펀드를 활용하는 마진 방법입니다. 다른 포지션에서의 실현 손익 또한 손실이 발생하는 포지션에 마진을 추가하는 목적으로 사용될 수 있습니다.',
      p2: '이런 방식은 기존 포지션을 헤징하는 사용자 및 청산이 이루어지는 경우 거래의 한 쪽에 치우치는 것을 꺼려하는 중개 거래인들에게도 매우 유용하게 작용합니다.'
    },
    paragraph4: {
      p1: '포트폴리오 마진',
      p2: '58 Swap는 포트폴리오 마진을 제공하지 않습니다. 미 실현 수익은 미 실현 손실을 상쇄하거나 새로운 포지션을 개설하는데 사용되지 않을 것입니다. 이것은 특히 동일한 기초를 공유하는 두 가지 파생 상품 사이의 교차 마진을 거래하려는 거래자들에게 특히 중요합니다. 다른 거래의 손실을 상쇄하기 위해 포지션을 청산함으로써 수익을 실현해야 합니다.',
    },
    text3: '교차 마진과 격리된 마진 대비',
    paragraph5: {
      p1: '변동이 심하고 불안정한 시장에서 특히 높은 레버리지 기반의 포지션은 자본의 빠른 손실을 초래할 수 있습니다. 58Swap는 청산 최소화를 위한 다양한 기능을 구현하여 이러한 사태를 방지하고 있으나 높은 레버리지 기반의 거래가 청산을 초래할 가능성을 감소시키는 것은 현실적으로 매우 어렵습니다. 예：레버리지 효과 50배의 포지션은 단 2%의 반대되는 이동으로 인해 청산이 이루어집니다. 교차 마진을 사용하면 변동이 심하고 불안정인 시장에서의 손실을 피면할 수 있으며 일정한 법위 내의 가격 변동 위험을 피면할 수 있는 동시에 높은 수익을 얻을 수 있습니다. 또한 수시로 포지션을 추가할 수 있어서 조작이 더욱 원활해집니다.'
    }
  },
  liquidation: {
    title: '청산',
    paragraph1: {
      p1: '58 Swap는 대부분 높은 레버리지 기반의 계약을 제공합니다. 포지션을 유지하기 위해 거래값의 일정 비율을 유지해야 하며 이를 유지 마진 비율이라고 합니다.최소로 요구되는 유지 마진은  위험 한도 페이지에서 확인할 수 있습니다.',
      p2: '만약 요구되는 유지 사항을 이행하실 수 없으면 청산이 이루어지며 유지 마진이 손실됩니다.',
      p3: '“보유 포지션” 탭에서 포지션 별 청산 가격을 확인할 수 있으며 “레버리지” 또는 “위험 한도” 탭을 통해 마진 추가 및 레버리지를 조정할 수 있습니다.'
    },
    text1: '청산 최소화',
    paragraph2: {
      p1: '58 Swap는 <a href="/reference/fairPriceMarking" style="color: #597ab9">공정가격 표시</a> 방법을 통해 비 유동적인 시장 또는 시장 조작으로 인해 발생하는 청산을 예방하고 있습니다.',
      p2: '규모가 큰 포지션에 대해서는 더욱 높은 마진 레벨이 요구되는 위험 한도가 부과됩니다. 이를 통해 58 Swap 청산 시스템이 큰 규모의 포지션을 종료하는  효과적으로 사용할 수 있는 마진이 확보됩니다. 이것이 안전하다면 큰 규모의 포지션들은 점진적으로 청산됩니다',
      p3: '청산이 시작될 경우 58 Swap 는 현재 계약의 모든 미 체결 주문을 취소하여 마진의 자유화 및 포지션 유지를 위한 시도를 할 것입니다.',
      p4: '참고：다른 계약의 주문은 미 체결 상태로 남아있을 것입니다.'
    },
    text2: '청산 절차',
    paragraph3: {
      p1: '58 Swap는 포지션이 완전히 청산되는 사태를 방지하기 위해 유지 마진을 자동적으로 감소시킴으로써 부분 청산 절차를 사용하고 있습니다.'
    },
    paragraph4: {
      p1: '낮은 위험 한도 계층의 사용자',
      p2: '1.58 Swap는 계약 상의 미 체결 주문을 모두 취소합니다',
      p3: '2.만약 요구되는 유지 마진 조건에 충족되지 못할 경우 파산 가격에 의해 포지션에 대한 청산이 이루어집니다.'
    },
    paragraph5: {
      p1: '높은 위험 한도 계층의 사용자',
      p2: '청산 시스템은 사용자를 낮은 위험 한도로 내리고 이를 통해 아래와 같이 낮은 마진 요구사항을 부과합니다.：',
      p3: '1.현재 포지션 및 미체결 주문에 대한 낮은 위험 한도를 책정합니다.',
      p4: '2.미 체결 주문을 모두 취소하고 사용자의 포지션을 낮은 위험 한도로 책정합니다.',
      p5: '3.현재 위험 한도로 책정된 포지션 규모 및 마진 요구를 충족시키는 포지션 규모 간의 차이를 감안하고 즉시 집행 주문 (이행되지 않을 경우 자동적으로 취소되는 매매 주문)을 제출하여 청산을 방지합니다.',
      p6: '4.청산이 지속되는 경우 전체 포지션은 청산 기능에 의해 정리되며 지정가 주문을 통해 파산 가격으로 책정된 포지션을 종료합니다.',
    },
    text3: '시스템 수익 및 손실',
    paragraph6: {
      p1: '58 Swap는 파산 가격보다 더 높은 가격으로 포지션을 청산하는 경우 추가 펀드가 <a href="/guide/insuranceFund" style="color: #597ab9">보험 기금</a>에 더해지게 됩니다.',
      p2: '만약 58 Swap는 파산 가격으로 청산을 진행할 수 없는 경우 시장에서 포지션을 종료하기 위해 보험 기금을 사용하게 됩니다. 그래도 여전히 청산된 주문이 종료되지 않는다면 결국에는 <a href="/reference/autoDeleveraging" style="color: #597ab9">자동자산청산(ADL)</a> 절차로 넘어가게 됩니다.'
    },
    text4: '추가 정보',
    paragraph7: {
      p1: '58 Swap에서 제공하는 청산 절차에 대한 추가 정보 및 예시입니다.'
    }
  },
  margin: {
    title: '마진 용어',
    theadList: ['용어', '정의'],
    tbodyList: [
      ['지갑 잔액', '입금 - 출금 + 실현 손익'],
      ['미 실현 손익', '모든 포지션에 대한 현재 수익 및 손익을 의미합니다.'],
      ['마진 잔액', '거래소에 보관되어 있는 총 거래 자본을 의미합니다. 마진 잔액 = 지갑 잔액 + 미 실현 손익'],
      ['포지션 마진', '포지션 유지를 위해 최소한으로 요구되는 자본을 의미합니다. 즉 보유하고 있는 모든 계약의 진입 가격을 선택된 레버리지로 나눈 후 미실현 손익을 더한 값이 됩니다.'],
      ['주문 마진', '미 체결 주문 유지를 위해 최소한으로 요구되는 자본을 의미합니다. 즉 보유하고 있는 모든 미 체결 주문을 선택된 레버리지로 나눈 값이 됩니다.'],
      ['사용 가능 잔액', '새로운 포지션에 대한 사용 가능 마진을 의미합니다. 사용 가능 잔액 = 마진 잔액 - 주문 마진 - 포지션 마진']
    ]
  },
  entrust: {
    title: '주문 유형 FAQ',
    paragraph1: {
      p1: '58 Swap는 거래 특성 및 헤징 전략에 부합하는 다양한 주문 유형을 제공하고 있습니다. 58 Swap에서 제공하는 다양한 주문 유형과 이에 대한 예시를 간략하게 설명해 드립니다. 주문 유형 별로 부과되는 수수료에 대한 내용은 <a href="/reference/fees" style="color: #597ab9">여기</a> 클릭하여 주세요',
    },
    text1: '시장가 주문',
    paragraph2: {
      p1: '시장가 주문은 현재 시장에서 형성되는 가격으로 즉시 체결되는 주문을 의미합니다. 이런 주문 유형은 긴급하게 주문을 실행해야 하는 경우에 사용됩니다. 해당 주문 유형을 선택할 경우 항상 주문서를 눈여겨 보십시오. 그렇지 않으면 큰 규모의 시장가 주문으로 인해 “시장 충격비용”이 발생될 수 있습니다.',
      p2: '입력 사항: 수량'
    },
    text2: '지정가 주문',
    paragraph3: {
      p1: '지정가 주문은 매수/매도하고자 하는 최대/최소 가격을 지정하는 주문을 의미합니다. 거래 비용 최소화를 위해 해당 유형을 사용하지만 시장에서 크게 벗어난 주문으로 거래가 실행되지 않을 가능성이 있으므로 보장된 거래 기회를 놓치게 됩니다.',
      p2: '지정가 주문은 어떤 가격으로 거래가 성립되나요? 만약 시장 가격이 지정 가격에 도달하면 즉시 시장 가격으로 거래가 성립되며 만약 도달하지 못할 경우 시장에 주문서를 제출하여 지정 가격에 도달한 후 지정 가격으로 거래를 성립합니다.',
      p3: '예, 만약 BTC의 시장 가격이 13000원일 경우, 거래자가 13100원 지정가 주문을 매수하려고 합니다. 이럴 경우 시스템에서는 BTC의 가치가 설정한 가격 13100원까지 상승된 후 거래가 성립되는 것이 아니라 즉시 시장 가격 13000원으로 거래가 성립됩니다. 만약 시장 가격이 13000원일 경우, 거래자가 12900원으로 저렴하게 매수하려고 합니다. 이럴 경우 시장 가격이 설정한 12900원까지 하락하면 즉시 12900원으로 거래가 성립됩니다.',
      p4: '입력 사항：수량, 지정 가격'
    },
    paragraph4: {
      p1: '지정가 주문의 예시',
      p2: '수량 = 10건 계약',
      p3: '지정가 = 100',
      p4: '거래 방향 = 매수',
      p5: '10건 계약에 대한 입찰 가격이 지정가 100으로 시장에 배치 될 것입니다.',
    },
    text3: '계획 주문',
    paragraph5: {
      p1: '계획 주문은 일종의 조건 주문입니다. 시장에서 가격이 발동 가격에 도달하면 지정한 가격에 의해 주문이 체결됩니다.이런 유형의 주문을 통해 보유하고 있는 포지션을 효과적으로 종료할 수 있으며 또한 시장가 혹 지정가 주문에 대한 명령을 지정하여 본인이 설정한 발동 가격에 도달하면 주문이 자동적으로 체결됩니다.',
      p2: '입력 사항：촉발 가격, 집행 가격, 수량'
    },
    paragraph6: {
      p1: '계획 주문 계시',
      p2: '촉발 가격 = 100',
      p3: '집행 가격 = 99',
      p4: '수량 = 10건 계약',
      p5: '거래 방향 = 매수',
      p6: '10건 계약에 대한 입찰 가격이 100에 도달할때 매수를 설정하면 지장가 99로 매수하게 됩니다.'
    }
  },
  profit_loss: {
    title: '손익 가이드',
    paragraph1: {
      p1: '본 가이드는 미실현 및 실현 손익 (PNL)의 개념을 설명하고 있습니다.'
    },
    text1: '예시 1：매수 및 매도',
    paragraph2: {
      p1: 'John은 1,000건 BTCUSD 계약을 평균 진입 가격 $1,000로 공매수하고자 합니다. 시장 평균가는 현재 $1,250 입니다.',
      p2: 'John의 미 실현 손익은 그의 평균 진입 가격과 시장 평균가의 차이 기반으로 계산됩니다.',
      p3: '미 실현 손익 = ($1/$1,000 - $1/$1,250) * 1,000 = 0.20 BTC',
      p4: 'BTCUSD의 최종 가격은 $1500입니다. 그러나 미 실현 손익을 계산하기 위해 최종 가격 대신 시장 평균가가 사용됩니다. 자세한 내용은 <a href="/reference/fairPriceMarking" style="color: #597ab9">공정가격 표시</a>를 참고하시기 바랍니다.'
    },
    paragraph3: {
      p1: 'John은 500건 BTCUSD 계약을 $1,500에 매도하고 수익을 실현시키고자 합니다.',
      p2: 'John의 실현 손익은 그의 평균 진입 가격과 BTCUSD 매도 시의 가격 차이 기반으로 계산됩니다.',
      p3: '실현 손익 = ($1/1,000 - $1/$1,500) * 500 = 0.17 BTC',
      p4: '실현 손익은 실제로 매수 또는 매도할 수 있는 포지션을 기준으로 하기 때문에 대부분 경우에는 시장 평균가가 적용되지 않습니다. 만약 John이 500건 계약을 시장 평균가 $1,250으로 매도했다면 그의 실현 수익은 0.10 BTC가 될것입니다.'
    },
    text2: '예시 2：펀딩 수수료',
    paragraph4: {
      p1: '58 Swa는 무기한 계약이라는 파생 상품 유형의 계약이 있습니다. 무기한 계약의 매수인 및 매도인은 거래가 이루어지는 동안 정기적으로 펀딩 수수료를 지불하거나 지급 받습니다. 자세한 내용은 <a href="/reference/swapContractsGuide" style="color: #597ab9">무기한 계약 가이드</a>를 참고하여 주세요.',
      p2: 'John은 무기한 계약 BTCUSD를 거래하고 있습니다. 8시간마다 펀딩 수수료가 부과됩니다. 현재 펀딩 수수료는 1%이며 매수인이 매도자에게 지불합니다.',
      p3: 'John은 현재 100 BTC의 BTCUSD를 공매수하고자 합니다. 포지션에 실현 손익이 존재하지 않습니다. 펀딩 시간이 되면 BTCUSD 공매수 계약을 체결하기 위해 John은 반드시 1 BTC를 지불해야 합니다. 펀딩 수수료가 지불되면 John의 실현 손익은 -1 BTC가 됩니다.',
      p4: '만약 John이 동일한 계약의 공매도 포지션을 취했다면 100 BTC를 지급받게 됩니다. 해당 경우 실현 손익은 -1 BTC가 아닌 1 BTC로 되었을 것입니다.',
    },
    text3: '예시 3：거래 수수료',
    paragraph5: {
      p1: '모든 거래 수수료는 실현 손익을 통해 계산됩니다.',
      p2: 'John은 BTCUSD 계약을 매수하였으며 시장 변동은 없었습니다. John의 미실현 손익은 0이지만 BTCUSD 계약을 매수했을 때 테이커 수수료를 지불했기 때문에 실현 손익은 음수입니다.',
      p3: '만약 John이 소극적 지정가 주문을 했다면 주문이 실행되어야만 메이커로 분류됩니다. 메이커로서 John은 거래에서 발생된 레베이트를 받을 것입니다. 이러한 경우 그의 미 실현 손익은 0이 되고 실현 손익은 플러스가 됩니다.',
    },
    text4: '예시 4：실현 손익 계산',
    paragraph6: {
      p1: '실현 손익은 58 Swap 거래 화면의 여러 위치에 표시됩니다.',
      p2: '만약 포지션에서 10 BTC 실현 수익이 발생되면 해당 금액은 “보유 포지션” 탭에 표현될 것입니다.',
      p3: '만약 거래를 완료하고 10 BTC의 수익이 실현되면 해당 10 BTC는 “거래 완료” 탭에 표시될 것입니다.',
      p4: '동일 계약에 새로운 포지션을 생성하게 되면 보유 “보유 포지션” 탭의 실현 손익은 0 BTC로 조정될 것입니다. 새로운 포지션 중 일부 성사된 결과에 대한 손익 실현은 “보유 포지션” 탭에 표기됩니다.',
      p5: '만약 새로운 포지션의 거래가 완료되면 추가된 손익 실현 부분은 클로즈드 “거래 완료” 탭에 추가될 것입니다'
    },
  },
  risk: {
    title: '위험 한도',
    text1: '개요',
    paragraph1: {
      p1: '58 Swap는 모든 거래 계정에 대해 위험 한도를 부과하여 마진 기반의 거래들에 대한 대규모 청산 발생을 최소화합니다.',
      p2: '만약 큰 규모의 포지션을 취할 때 이로 인해 다른 거래자에게 위험을 제공하고 자동자산청산(ADL) 발생을 초래할 수 있습니다. 위험 한도는 큰 규모의 포지션에 대한 마진 요구를 증가시키는 기능으로써 이러한 사태를 사전에 예방합니다.'
    },
    text2: '동태적인 위험 한도',
    paragraph2: {
      p1: '각 상품에는 기본 위험 한도 및 단계가 있습니다. 해당 수치는 기본 유지 및 개시 마진이 합쳐진 값이며 각 포지션 별로 요구되는 전체 마진을 계산하는데 사용됩니다.',
      p2: '포지션 규모가 증가하게 되면 요구되는 유지 및 개시 마진도 증가하게 됩니다. 높은 위험 한도 또는 낮은 한도에 대한 권한을 포지션 패널에 부여해야 합니다. 위험 한도가 변경되는 동시에 요구되는 마진 역시 자동적으로 증가하거나 감소됩니다.'
    },
    text3: '계약 위험 한도',
    theadList: ['기호', '본 위험 한도', '단계', '기본 유지 마진', '기본 개시 마진'],
    tbodyList: [
      ['BTCUSD', '200 BTC', '100 BTC', '0.50%', '1.00%']
    ],
    text4: '공식',
    theadList2: ['용어', 'BTCUSD 예시 (1단계)', '공식'],
    tbodyList2: [
      ['신규 유지 마진 (MM) %', '기본 MM % + ( 단계 * 기본 MM % )', '0.50% + ( 1 * 0.50% ) = 1.00%'],
      ['신규 개시 마진 (IM) %', '기본 IM % + ( 단계 * 기본 MM % )', '1.00% + ( 1 * 0.50% ) = 1.50%'],
      ['유지 마진', '신규 MM % * 총 BTC 포지션 값', '1.00% * 300 BTC = 3 BTC'],
    ],
    text5: '추가 정보',
    paragraph3: {
      p1: '58 Swap에서 제공하는 위험 한도에 대한 자세한 정보입니다：',
      p2: '위험 한도는 어떻게 조정하나요?',
      p3: '거래 예시',
    }
  }
}
export default reference
