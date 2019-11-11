let reference = {
  menu: [
    {
      name: 'ベーシック',
      children: [
        {name: '概要(ここから始める)', url: '/reference/overview', mark: 'overview'},
        {name: 'FAQ', url: '/reference/faq', mark: 'faq'},
        {name: '手数料', url: '/reference/fees', mark: 'fees'}
      ]
    },
    {
      name: '契約ガイド',
      children: [
        {name: '無期限ガイド', url: '/reference/swapContractsGuide', mark: 'swapContractsGuide'}
      ]
    },
    {
      name: '証拠金取引',
      children: [
        {name: 'レバレッジ自動解消', url: '/reference/autoDeleveraging', mark: 'autoDeleveraging'},
        {name: '取引所ガイド', url: '/reference/exchangeGuide', mark: 'exchangeGuide'},
        {name: '公正価格マーキング', url: '/reference/fairPriceMarking', mark: 'fairPriceMarking'},
        {name: 'クロスマージン', url: '/reference/isolatedMargin', mark: 'isolatedMargin'},
        {name: '清算', url: '/reference/liquidation', mark: 'liquidation'},
        {name: '証拠金参考', url: '/reference/marginTermReference', mark: 'marginTermReference'},
        {name: '注文タイプに関するFQA', url: '/reference/orderTypeFAQ', mark: 'orderTypeFAQ'},
        {name: '利益/損失ガイド', url: '/reference/pnlGuide', mark: 'pnlGuide'},
        // {name: 'リスク制限', url: '/reference/risk', mark: 'risk'}
      ]
    }
  ],
  overview: {
    title: ' 58 Swapで取引',
    paragraph1: {
      p1: 'デリバティブの取引は深みがあるため、当社のドキュメントセクションは、一見複雑に見えるかもしれません。手続きを開始して最初の取引をするのは簡単ですが、学ぶことはたくさんあります。'
    },
    text1: '58 Swapの概要',
    paragraph2: {
      p1: '58 Swapは、ビットコインで売買されるレバレッジ商品を取り扱うピアツーピアベースのトレーディング・プラットフォームです。全てのプロダクトはベース銘柄で売買されます（例えばBTCUSD契約の取引する際に、BTCで売買します）。',
      p2: '58 Swapでは全ての損益はベース銘柄建てです（例えばBTCUSD契約の取引する際に、BTCで損益を計算します）。58 Swapでは、Fiat (フィアット) 通貨を扱っていません。',
      p3: '58 Swapでは高額レバレッジを使った取引が可能です。'
    },
    paragraph3: {
      p1: '58 Swapには主なナビゲーションタブが次のとおり5つあります。：',
      p2: `<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/trade/1" style="color: #597ab9">契約取引</a>：58 Swapの取引ダッシュボードです。 このタブで、取引商品やレバレッジの選択、注文の発動やキャンセル、契約内容に関する重要情報確認ができます。資産情報でポジションの状況を確認できます。`,
      p3: `<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9">契約ガイド</a>：この重要なタブには、契約ガイドと初心者ガイドが掲載されています。ここでプロダクトの資金調達履歴、最小契約サイズ、扱いレバレッジの種類、満期、資金調達、原資産の参考価格インデックスデータのほか、トレーダーにかかわるページがほかに数ページを確認できます。同時に無期限契約、ポジションのマーク方、清算の発動時間と発動方法、58 Swapの手数料、カスタマーサービスとほかの資料も観覧できるため、より一層取引所を理解することができます。`,
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference" style="color: #597ab9">参考情報</a>︰このタブは 58 Swapの教育コーナーです。ここで、無期限契約、ポジションのマーク方法、清算の発生時期と方法、58 Swapの手数料やサポートについて学んだり、58 Swapを理解するのに役立つその他の情報豊富な資料を参照したりできます。' ,
      p5: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/information" style="color: #597ab9">契約計算機</a>︰契約計算機はユーザーの収益、必要な証拠金、決済価格、オーバー価格などの計算をサポートすることできます。',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference" style="color: #597ab9">レビューシェア</a>このページはトレーダーに取引で金を稼いだら注文情報などをシェアするところダッシュボードです。ここでは、注文情報や取引の策略とかはシェアしてほかのトレーダーと交流することでいい方法を勉強することもできます。',
    },
    paragraph4: {
      p1: '最初のステップ',
      p2: 'まずは、参考情報タブをくまなく読んでから、左側の用語やページに目を通しましょう。取引所ガイドでも、発注や損益計算に関する基礎知識が得られます。',
      p3: '58 Swapでは、次のドキュメントをよく読むことをおすすめしています。',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/swapContractsGuide" style="color: #597ab9">無期限契約ガイド</a>︰ BTCUSD： BTCUSDは無期限の契約であり、58 Swapで最も人気があります。無期限契約ガイドによく目を通して、無期限契約市場の仕組みや資金調達など、主な概念を理解することをおすすめします。',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/autoDeleveraging" style="color: #597ab9">レバレッジの自動解消</a>︰このページでは、別の取引のポジションが現在の市場で清算できない場合に、逆サイドの取引のポジションの動静を決める要因を説明しているため重要です。',
      p7: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/fairPriceMarking" style="color: #597ab9">公正価格マーキング</a>︰このページでは、ポジションのマーク方法が説明されており、すべてのトレーダーにとって重要ですが、清算価格の決定要因について説明しているため、レバレッジを利用するトレーダーにとって特に重要です。',
      p8: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/liquidation" style="color: #597ab9">清算</a>︰このページでは、ポジションの清算方法が説明されています。すべてのトレーダーにこのページを読むことをおすすめします。',
      // p9: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/profit-loss#F1" style="color: #597ab9">リスク制限</a>︰このページでは、特定のポジションサイズで利用できるレバレッジの額が説明されています。'
    },
    text2: '取引の概要',
    paragraph5: {
      p1: '58 Swapでの取引は、扱い商品とそのタイプの特徴から、一部のトレーダーにとって新しい体験となる可能性があります。 <a href="" style="color: #597ab9"> 58 Swapと競合他社との主な違いは、こちら</a>をクリックしてご覧ください。',
      p2: '58 Swapでの<a href="/reference/marginTermReference" style="color: #597ab9">証拠金用語</a>の使用方法にご注意ください。',
      p3: '58 Swapで発注できる注文のタイプは、当社<a href="/reference/orderTypeFAQ" style="color: #597ab9"> 注文タイプに関する FAQ</a>をご覧ください。'
    },
    paragraph6 : {
      p1: '58 Swapの契約',
      p2: '58 Swap では <a href="/reference/swapContractsGuide" style="color: #597ab9">無期限契約</a>。',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>先物と違い、無期限契約には満期日がないため、決済されません。',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>無期限契約では 8 時間ごとに<a href="/reference/swapContractsGuide" style="color: #597ab9">資金調達料金</a>が発生します。 資金調達タイムスタンプを超えてポジションを保有する場合、資金調達料金が授受されます。',
      p5: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>先物契約の決済時には、ポジションは契約の決済価格で決済されます。',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>トレーダーは上記契約を単純売買してロングポジションまたはショートポジションをこ構築することができます。空売りも可能であるため、58 Swap は「ネイキッド (ヘッジなし)」ショートポジションを持つための貴重なツールとなっています。',
    },
    paragraph7 : {
      p1: '証拠金取引',
      p2: '58 Swap が利用するのは<a href="/reference/autoDeleveraging" style="color: #597ab9">自動レバレッジ</a>。ということは、珍しいの状況ですが、市場で清算注文を市場で執行できない場合、保険基金が注入しても足りないのなら、レバレッジのかかったポジションがの利益が減額される可能性があります。',
      p3: '58 Swap 58 Swapは2倍、3倍、5倍、10倍、20倍、33倍、50倍と100倍のレバレッジ倍数をユーザーに提供している：',
      p4: ' - ヘッジユーザーなら、2-10倍のリスク低い倍数はおすすめ；',
      p5: ' - チャレンジャーのユーザーなら、10-100倍の倍数でもっと大きな利益を狙いましょう。',
      p6: '100倍数をお選びの場合、1ビットコインを担保に最大 100 ビットコインの契約を購入することができます。 ただし、注意すべきなのが、 高レバレッジは利益を拡大させますが、<a href="/reference/liquidation" style="color: #597ab9">損失も拡大させる</a>という点です。'
    }
  },
  questions: {
    title: 'FAQ ',
    text1: '58 Swap プロダクト取引所',
    paragraph1: {
      p1: '無期限契約',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>無期限契約とは何ですか？',
      p3: '<a href="/reference/swapContractsGuide" style="color: #597ab9">無期限契約</a>は伝統的な先物契約と同様の商品で、取引方法は同じですが、期限がありませんので、好きなだけポジションを維持することが可能です。 無期限契約は、スポット同様、原資産のインデックス価格を密接に追跡して取引されます。 追跡を実行するには、<a href="/reference/swapContractsGuide" style="color: #597ab9">資金調達コンポーネント</a>の仕組みを利用します。',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>マーク価格とは何ですか？？',
      p7: 'マーク価格とは、<a href="/reference/marginTermReference" style="color: #597ab9">未実現損益</a>及び<a href="/reference/liquidation" style="color: #597ab9">清算</a>目的で契約の目安となる価格です。',
      p8: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>58 Swapでは無期限/先物契約価格をどのように決定しますか？',
      p9: '58 Swap58 Swapでは<a href="/reference/fairPriceMarking" style="color: #597ab9">公正価格マーキング方法</a>に従って契約価格を設定します。この価格によって未実現損益が決まります。実現損益は、参入価格と出口価格または決済価格、及び発生費用によって決まります。',
      p10: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>決済価格はどのように計算されますか？',
      p11: '決済価格とは、先物契約が決済される価格です。 価格操作を防ぐため、58 Swapでは決済前の一定期間にわたる平均を採用しています。この期間は商品ごとに異なる場合があります。取引する各契約の明細を参照してください。',
      p12: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>無期限契約、先物契約はどのように売買しますか？',
      p13: '「取引」タブの「注文する」セクションで、数量、価格、方向を指定します。',
      p14: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>ビットとアスクとはどのようなものですか？',
      p15: 'ビッドとは、トレーダーが契約を特定の価格と数量で購入する場合の通常オーダーです。 アスクとは、トレーダーが契約を特定の価格と数量で売却する場合の通常オーダーです。',
      p16: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>58 Swap はマーケットメイカーですか？',
      p17: ' 58 Swapでは 自らが提供する契約で大量のクォートを継続的に出すアンカーマーケットメイカーが機能します。マーケットメイカーには何らの特権も与えられません。',
    },
    paragraph2: {
      p1: 'レバレッジ',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>58 Swapではレバレッジを提供していますか？',
      p3: 'はい。58 Swapでは、すべての取り扱い商品でレバレッジを提供しています。',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>58 Swapではどのくらいの規模のレバレッジを提供していますか？',
      p5: '58 Swapが提供するレバレッジの額は商品ごとに異なります。 レバレッジは<a href="/reference/marginTermReference" style="color: #597ab9">当初証拠金及び維持証拠金</a>のレベルによって決まります。 このレベルによって、ポジションを構築及び維持するためにアカウントに保有しなければならない最小エクイティが定まります。 レバレッジは固定的乗数というより、最小エクイティ必要額です。',
      p6: '58 Swapが提供するレバレッジ区間は、<a href="/guide/BTCUSD/1" style="color: #597ab9"> Bitcoin / USD</a> 無期限契約で 2-100 倍です。',
      p7: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>当初証拠金とは何ですか？',
      p8: '<a href="/reference/marginTermReference" style="color: #597ab9">当初証拠金</a>とはポジション構築のために入金しなければならないビットコインの最少額です。',
      p9: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>維持証拠金とは何ですか？',
      p10: '<a href="/reference/marginTermReference" style="color: #597ab9">維持証拠金</a>とはポジションをオープンのまま維持するために保持しなければならないビットコインの最少額です。58 Swapでの証拠金残高がこのレベルを割り込むと、ポジションは清算エンジンに引き継がれ、<a href="/reference/liquidation" style="color: #597ab9">清算されます</a>。',
    },
    paragraph3: {
      p1: '清算',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>清算を受けた理由は？',
      p3: '契約のマーク価格が清算価格を下回った場合 (ロング時)、または上回った場合 (ショート時)、維持証拠金のレベルが維持されなくなり、清算エンジンがポジションを引き継ぎます。<a href="/information/tradeHistory" style="color: #597ab9">取引履歴</a>で、清算ポジションが手仕舞いされた価格は破産価格 (維持証拠金がゼロとなるレベルに相当) となります。',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>清算エンジンはどのように機能しますか？',
      p5: '清算エンジンは、清算時に、市場の趨勢価格でのポジション手仕舞いを試みます。実行できない場合、<a href="/reference/autoDeleveraging" style="color: #597ab9">レバレッジの自動解消</a>が起こります。',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>破産する可能性はありますか？',
      p7: 'いいえ。弊社の証拠金・清算プロセスは、58 Swapでのトレーダーの証拠金残高がゼロ未満になるのを確実に回避するように、巧妙に設計されています。',
      p8: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>58 Swap 社会的損失は発生しますか？',
      p9: 'いいえ。58 Swap が採用する<a href="/reference/autoDeleveraging" style="color: #597ab9">レバレッジ自動解消システム</a>では、損失の社会化は必要ありません。',
      p10: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>レバレッジの自動解消とは何ですか？',
      p11: '<a href="/reference/autoDeleveraging" style="color: #597ab9">レバレッジの自動解消</a>は、市場で清算すべきポジションが約定されない場合に起こります。 反対のポジションを保有するトレーダーはレバレッジと利益の優先順位に従って手仕舞いされます。'
    },
    paragraph4: {
      p1: '手数料',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>ビットコインの入金手数料はかかりますか？',
      p3: 'いいえ。58 Swapではビットコインの入金に手数料はかかりません。',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>ビットコインの出金に手数料はかかりますか？',
      p5: 'いいえ。58 Swapでは、ビットコインの出金に手数料はかかりません。 ビットコインを出金する際、小額のビットコインネットワーク料金がかかります。この料金は、ブロックチェーンの負荷を基に変動的に設定され、出金ページで見ることができます。',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>取引手数料はかかりますか？',
      p7: 'はい。58 Swapでは完了取引ごとに取引手数料がかかります。詳細は<a href="/reference/fees" style="color: #597ab9">料金</a>ページをご覧ください。'
    },
    paragraph5: {
      p1: '入金とセキュリティ',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>どのように入金しますか？',
      p3: 'アカウント」タブでウォレットをクリックして相応の銘柄チャージリンクをクリックすれば、マルチサインのビットコイン入金アドレスをもらえます。1 度確認手順を経た後、資金はお客様のアカウントに加算されます。',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>58 Swapがマルチサインアドレスを使用している理由は？',
      p5: 'これは、58 Swapが顧客資金の安全性を徹底するために採用する多くの盗難予防対策のうちのひとつです。',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>問題がある場合、どこに問い合わせればよいですか？',
      p7: 'メールをお送りいただければ、サポートメンバーが速やかにご連絡差し上げます。'
    }
  },
  fee: {
    title: '手数料',
    text1: '無期限契約',
    theadList: ['シリーズ', 'レバレッジ', 'メイカー料金', 'テイカー料金'],
    // theadList: ['シリーズ', 'レバレッジ', 'メイカー料金', 'テイカー料金', 'ロングの資金調達', 'ショートの資金調達', '資金調達の頻度'],
    tbodyList: [
      ['全て無期限契約', '全ての倍数', '0.03%', '0.06%']
      // ['ビットコイン', '100x', '-0.0250%', '0.0750%', '0.0100%', '-0.0100%', '8 hours ごとに']
    ],
    tip1: '料金がマイナスの場合、トレーダーはリベートを受領します。資金調達率は市場金利に基づき変動します。詳細は以下をご覧ください。',
    paragraph1: {
      p1: 'それ以外、資金調達もあります',
      p2: ' BTCUSDをはじめとする当社の無期限契約では、資金調達料金は、資金調達の間隔にわたり 買手（ロング）と売手（ショート）の間で交換されます。<a href="/information/tradeHistory" style="color: #597ab9">取引履歴</a>の金額がプラスの場合、当該資金調達期間に資金調達料金を支払ったことになり、金額がマイナスの場合、資金調達料金を受け取ったことになります。58 Swapは資金調達料金の支払い/受領に関して手数料を課しません。',
      p3: '資金調達の詳細は、<a href="/reference/swapContractsGuide" style="color: #597ab9">無期限契約ガイド</a>をご参照ください。'
    }
  },
  introduce: {
    title: '無期限契約ガイド',
    text1: '概要',
    paragraph1: {
      p1: '無期限契約 は、通常の先物契約同様デリバティブ商品ですが、以下のように異なる点もいくつかあります。',
      p2: '満期や決済がありません。',
    },
    paragraph2: {
      p1: '無期限契約は、証拠金をベースとするスポット市場を模倣するものであるため。原資産を参考にするインデックス価格と近い水準で取引されます。',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>これは、先物契約と対照的な点です。先物契約は、ベーシスを理由に大幅に異なる価格で取引されます。 ',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>スポット価格と連動するための主な仕組みが<a href="/reference/swapContractsGuide" style="color: #597ab9">資金調達</a>です。'
    },
    text2: '無期限契約市場の仕組み',
    paragraph3: {
      p1: '無期限契約を取引する際は、市場のいくつかの仕組みを把握しておく必要があります。その主なものを以下に挙げます。',
      p2: '1. ポジションマーキング：無期限契約は<a href="/reference/fairPriceMarking" style="color: #597ab9">公正価格マーキング</a>方法に従ってマーキングされています。 マーク（公正）価格は<a href="/reference/marginTermReference" style="color: #597ab9">未実現損益</a>と清算価格を設定します。',
      p3: '2. 当初証拠金と維持証拠金：この 2 つの主な証拠金レベルによって、取引可能なレバレッジサイズと<a href="/reference/liquidation" style="color: #597ab9">清算</a>の発生地点が決まります。',
      p4: '3. 資金調達：買い手と売り手が 8 時間ごとに交わす支払いです。 レートがプラスの場合は、レートを買い手が支払い、売り手が受け取ります。レートがマイナスの場合は、この逆になります。資金の支払い/受取をするのは、資金調達タイムスタンプでポジションを保有する場合のみです。',
      p5: '例：プラットフォームの現物価格はインデックス価格よりプレミアムする場合、買い持ちは成行価格より収益が多い。ショートの方が損失が多い。買い持ちは一定的な資金をショートに補充する；',
      p6: ' - プラットフォームの現物価格はインデックス価格よりディスカウントする場合、買い持ちは成行価格より収益が少ない。ショートの方が損失が少ない。ショートは一定的な資金を買い持ちに補充する。',
      p7: '4. 資金調達タイムスタンプ：UTC 16:00（北京時間 00:00）、UTC 00:00（北京時間08:00）和 UTC 08:00（北京時間16:00）。'
    },
    paragraph4: {
      p1: '各契約の最新資金調達率は、「契約の詳細」にある「取引」タブの左下でご確認いただけます。 また、個別の「契約明細」でもこのレートをご覧いただけます。 過去のレートについては<a href="/guide/fundingHistory" style="color: #597ab9">資金調達履歴</a>をご覧ください。',
    },
    text3: '資金調達',
    paragraph5: {
      p1: '資金調達は、8時間ごと (北京時間の 4:00、12:00、20:00) に行われます。資金を授受するのは、このいずれかの時刻にポジションを保有する場合のみです。**この時刻前にポジションを決済した場合は、資金を授受することはありません。'
    },
    paragraph55: {
      p1: 'プラットフォームの現物価格はインデックス価格よりプレミアムする場合、ロングはインデックス価格より収益を増えて/損失が下げて、ショートの方が損失が大きため、ロングから一定的な資金をショートに補充する。インデックス価格よりディスカウントする場合、その逆となります。'
    },
    paragraph6: {
      p1: '授受する資金調達額の計算式：',
      p2: '資金調達額 = ポジション価額 * 資金調達率'
    },
    paragraph7: {
      p1: 'ポジション価額はレバレッジとは無関係です。 例えば、100 BTCUSD契約を保有する場合、資金調達額はこの契約の名目元本で支払い/受領されます。ポジションに課せられる証拠金額を基にすることはありません。',
      p2: '資金調達率 がプラスの場合、買い手が売り手に支払います。マイナスの場合は、売り手が買い手に支払います。'
    },
    paragraph8: {
      p1: '資金調達率の計算',
      p2: '互换补偿率旨在确保永续合约的交易价格紧跟标的参考价格。 在这种方式下，永续合约类似于保证金交易的现货市场，买家和卖家定期交换互换补偿率。',
      p3: 'プレミアム/ディスカウント要素',
      p4: '無期限契約は、マーク価格に対して大幅なプレミアムまたはディスカウントで取引される場合があります。 そのような状況では、プレミアムインデックスを使用して、次回資金調達率を引き上げ/引き下げて、無期限取引水準と整合する水準へ調整します。 各無期限契約のプレミアムインデックスは、特定商品の「契約明細」ページに掲載されています。計算式は以下のとおりです。',
      p5: 'プレミアムインデックス (P) = 最後3分間の平均約定価値/最後3分間の算数平均インデックス-1',
      p6: '最終資金調達額の計算',
      p7: '資金調達料金 (F) = clamp(プレミアムインデックス (P) * K, 0.03%, -0.03%)',
      p8: 'なので、プレミアムインデックス (P) * K は +/-0.03% の間にあります。',
      p9: '計算された資金調達率をトレーダーの BTC ポジション価額に適用すると、資金調達タイムスタンプに授受される資金調達額が確定します。',
      p10: '資金調達料',
      p26: '58 Swapでは資金調達料を請求しません。料金はピアツーピアで直接やり取りされます。。'
    },
    text4: '補足情報',
    paragraph9: {
      p1: '資金調達計算については、<a href="" style="color: #597ab9">補足情報と例示</a>もご確認ください。',
    }
  },
  underweight: {
    title: 'レバレッジ自動解消',
    text1: 'レバレッジ自動解消 (ADL) の概要',
    paragraph1: {
      p1: 'トレーダーのポジションが清算されると、ポジションは58 Swap の清算エンジンによって引き継がれます。市場価格が破産価格に達する期間までに清算を約定できない或は契約の保険基金を注入されてまだ約定できない場合、ADL システムは、利益とレバレッジの優先順位によって、自動的にトレーダーのポジションと逆方向でレバレッジを自動解消します。',
      p2: 'トレーダーのポジションが手仕舞いされる価格は、初回清算注文の破産価格です。'
    },
    text2: 'ADL のレバレッジ解消優先順位',
    paragraph2: {
      p1: 'キューにあるポジションは常にインジケーターで表示されます。このインジケーターは、キューの優先度を表し、20%単位で増加します。',
      p2: '上記の例では、すべての「ライト」が点灯し、ポジションが最上位の % 階層にあることを示します。清算を市場で執行できない場合、レバレッジを解消される可能性があります。',
      p3: 'ADL を防ぐために、<a href="/guide/insuranceFund" style="color: #597ab9">保険基金</a>が使用されます。所定の契約で基金が枯渇した場合、 ADL が起こります。',
      p4: 'レバレッジが解消される場合、通知を受け取ります。執行待ちの注文はキャンセルされ、自由に再び参入することができます。',
    },
    paragraph3: {
      p1: '優先順位の計算',
      p2: 'レバレッジ解消の優先順位は利益とレバレッジによって計算されます。収益性やレバレッジが高い順にレバレッジは解消されます。',
      p3: '優先順位は次の手順で計算されます。',
      p4: '優先順位 = 損益率 * 実効レバレッジ (損益率 > 0 の場合) ',
      p5: ' 　　　　= 損益率 / 実効レバレッジ (損益率 < 0 の場合) ',
      p6: '式中',
      p7: '実効レバレッジ = abs(マーク値) / (マーク値 - 破産値) ',
      p8: '損益率 = (マーク値 - 平均参入値) / abs(平均参入値) ',
      p9: 'マーク値 = マーク価格でのポジション価額',
      p10: '破産値 = 破産価格でのポジション価額',
      p11: '平均参入値 = 平均参入値でのポジション価額',
      p12: 'システムは上記ポジションをロングとショートに分け、高い順から低い順に優先順位を付けます。'
    },
    text3: '補足情報',
    paragraph4: {
      p1: 'レバレッジの自動解消プロセスの<a href="" style="color: #597ab9">補足情報と例示</a>をご覧ください。',
    }
  },
  exchange: {
    title: '取引所ガイド',
    text1: '発注について',
    paragraph1: {
      p1: '取引ダッシュボードの「発注」タブで、<a href="/reference/orderTypeFAQ" style="color: #597ab9">さまざまな種類の売り・買い注文</a>を出すことができます。',
      p2: '買い/売り注文を出す際は、注文が送信可能となる前に、<a href="/reference/marginTermReference" style="color: #597ab9">利用可能残高</a>が<a href="/reference/marginTermReference" style="color: #597ab9">当初証拠金</a>を確保するのに十分であるかがチェックされます。 注文商品に既存ポジションがある場合は、<a href="/reference/marginTermReference" style="color: #597ab9">維持証拠金</a>の変動、及びポジションに注文価格が付けられる場合は損益をカバーするだけの残高があるかどうかもチェックされます。 残高が十分な場合、注文を出すことができます。 注：約定またはキャンセルされていない未処理注文 (純額) がある場合は、当該注文の当初証拠金の額だけ利用可能残高は減少します。',
    },
    text2: '証拠金及び損益 (PNL)',
    paragraph2: {
      p1: '取引が開始できるようになる前に、ビットコインを入金して、証拠金アカウントに残高がある状態にしておく必要があります。58 Swapでは、証拠金と損益額はすべてビットコイン建てで表示されます。あらかじめ、証拠金条件で使用される用語を確認してください。'
    },
    paragraph3: {
      p1: '当初証拠金 (IM) に関する重要な規則は、以下のとおりです。',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>買い注文の場合の算式、当初証拠金必要額 = (IM * 契約の枚数 * 指値ビッド価格 * 乗数)。 手数料は指値ビッド価格を使って仮計算\n' +'されます。'+
      'ただし、実際の支払い手数料額は最終執行価格を基に計算されます。',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>当初証拠金必要額 = (IM * 契約の枚数 * Max(指値アスク価格、ベストビッド)* 乗数)。契約手数料は、指値アスク価格またはベストビッド (いずれか高い方) を使って仮計算\n' +'されます。'+
      '実際の手数料は最終執行価格を基に計算されます。',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>ポジションサイズを縮小させる注文には、当初証拠金は課されません。',
      p5: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>市場にビッドとアスクの両方の注文がある場合、当初証拠金はビッド純額 (買い注文 - 売り注文) のみを基に課されます。 保有ポジションサイズが縮小しない限り、売り注文にも\n' +'当初証拠金がかかります。'+
      '例えば、契約 20 枚を 100ドルで買い、15 枚を 150 ドルで売る場合、相殺後の買い契約 5 枚 (20 - 15) と売り契約 15 枚\n' +
      'に対してのみ当初証拠金がかかります。',
      p6: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/reference/fairPriceMarking" style="color: #597ab9">公正価格マーキング</a>を使用する契約では、当初証拠金は異なる方法で計算されます。 マーク価格を上回るレベルで買い注文が出されるか、マーク価格を下回るレベルで売り注文が出される場合、\n' +
      '注文価格とマーク価格との差額を完全に確保する必要があります。例えば、マーク価格が 100 ドルの場合にトレーダーが 110 ドルで契約 10 枚の買い注文を出す際の当初証拠金必要額の算式は次のとおりです。\n' +
      '= (IM * 10 契約 * $110 * 乗数) + (100% * 10 枚 * ($110 - $100) * 乗数)。',
    },
    paragraph4: {
      p1: '契約のマーク価格を基に計算された維持証拠金 (MM)',
      p2: 'すべての注文を対象とする維持証拠金必要額 = (MM * 契約の枚数 * マーク価格 * 乗数)。 すべてのポジションの手仕舞いに適用される手数料額も維持証拠金必要額に加算されます。\n' +
      '算定額は、ポジションの<a href="/reference/liquidation" style="color: #597ab9">清算</a>を回避するために維持しなければならない証拠金の最小額です。',
      p3: '58 Swapは証拠金ポリシーを変更する権利を有します。変更については、Eメールでトレーダーに通知します。',
    },
    text3: '資金調達と決済',
    paragraph5: {
      p1: '58 Swap の無期限契約は<a href="/reference/swapContractsGuide" style="color: #597ab9">資金調達</a>が必要です。 各無期限契約の明細には、資金調達計算が例示されています。<a href="/guide/fundingHistory" style="color: #597ab9">資金調達履歴</a>もすべての無期限契約で閲覧可能です。',
      p2: '無期限契約は決済されないため、決済料金がかかりません。契約の決済時に、ポジションは決済価格で手仕舞いされます。',
      p3: '契約期限が到来すると、保有期間における契約の損益がトレーダーのビットコイン残高に反映されます。当該契約はポジションセクションに表示されなくなります。',
      p4: '58 Swap によるすべての計算は最終的なものです。'
    },
    text4: '市場混乱イベント (MDE)',
    paragraph6: {
      p1: '取引所がインデックス価格の停止の原因となる場合、58 Swapは市場混乱イベント (MDE) を宣言し、契約に影響する決済や満期日の変更方法を通知します。',
      p2: 'トレーダーは、メールで発表を通知され、MDE の宣告が取引ダッシュボードに大きく表示されます。',
      p3: 'MDE の宣告は58 Swapの独断で行われ、すべての決断は最終的なものとなります。',
    }
  },
  mark_reasonable_price: {
    title: '公正価格マーキング',
    text1: '概要',
    paragraph1: {
      p1: '58 Swapは、高レバレッジ商品での不必要な清算を回避するため、公正価格マーキング と呼ばれる独自のシステムを採用しています。 このシステムがないと、市場操作や流動性不足、マーク価格がインデックス価格に比べて理由無く上下する場合に、不必要な清算が生じる場合があります。契約のマーク価格を直近価格でなく 公正価格に設定することで、こうした事態を自動的に防ぐことができます。'
    },
    paragraph2: {
      p1: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>無期限契約では、公正価格は原資産のインデックス価格に解約時の資金調達基本レートを加算した額と等しくなります。',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>先物契約では、公正価格は原資産のインデックス価格に公正価値基準率 (年率) を加算した額と等しくなります。このレートは公正ベーシス(%)と呼ばれます。',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>所有的<a href="/reference/autoDeleveraging" style="color: #597ab9">ADL</a>契約にはすべて公正価格マーキングが適用されます。公正価格マーキングは清算価格と未実現損益のみに影響し、実現損益には影響しません。',
      p4: '注：上記の理由から、注文執行直後は、プラスまたはマイナスの未実現損益が表示される可能性があります。 こうしたケースは、公正価格が直近価格と若干異なる場合に起こり、 通常の処理であり、資金を失ったことにはなりません。いずれにしても、清算価格に注意して、時期尚早の清算を避けてください。',
    },
    text2: '無期限契約の公正価格の計算',
    paragraph3: {
      p1: ' 58 Swapは、高レバレッジ商品での不必要な清算を回避するため、公正価格マーキング と呼ばれる独自のシステムを採用しています。 このシステムがないと、市場操作や流動性不足、マーク価格がインデックス価格に比べて理由無く上下する場合に、不必要な清算が生じる場合があります。契約のマーク価格を直近価格でなく 公正価格に設定することで、こうした事態を自動的に防ぐことができます。'
    },
    paragraph4: {
      p1: '無期限契約の公正価格の計算',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>資金調達基準率 = 資金調達率 * (資金調達までの期間 / 資金調達間隔)',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>公正価格    = インデックス価格 * (1 + 資金調達基準率)',
      p4: '無期限契約の資金調達計算及び例について詳しくは、無期限契約ガイドの<a href="/reference/SwapContractsGuide" style="color: #597ab9">資金調達セクション</a>をご覧ください。',
    },
    paragraph5: {
      p1: 'インパクトビッド、アスク',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>インパクトビッド価格 = ビッド側でインパクト証拠金名目額の執行の平均約定価格',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>インパクトアスク価格I = アスク側でインパクト証拠金名目額の執行の平均約定価格',
      p4: 'インパクト証拠金名目額 とは、0.1 BTC 相当の証拠金 (0.1 BTC / 当初証拠金) で取引可能な名目額で、インパクトビッド価格またはアスク価格を測定するためのオーダーブックでの厚みの程度を判断するのに使用されます。',
    }
  },
  isolated_cross: {
    title: 'クロスマージン',
    text1: '概要',
    paragraph1: {
      p1: 'デリバティブ商品では、証拠金とはレバレッジのかかったポジションを構築するのに必要とされる金額を指します。<a href="/reference/marginTermReference" style="color: #597ab9">当初証拠金及び維持証拠金</a>とは、ポジションを構築するために最初に必要な最小額、及びそのポジションの清算を回避するために必要な最小額を指します。 さまざまなユーザーがさまざまな取引戦略を持つため、58 Swapでは、証拠金の設定方法を次の 2 通り用意しています。'
    },
    paragraph2: {
      p1: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span>クロスマージン：証拠金はオープンポジション間で共有されます。必要に応じて、特定のポジションに合計アカウント残高からより多くの証拠金が設定され、清算を回避します。',
    },
    text2: 'クロスマージン',
    paragraph3: {
      p1: 'クロスマージンは、「スプレッドマージン」とも呼ばれ、清算を回避するために利用可能な残高の全額を利用する証拠金の設定方法です。 他のポジションからの実現損益はすべて証拠金に加算して、損失ポジションを支援することができます。',
      p2: 'この証拠金設定方法は、既存ポジションをヘッジしているユーザーや、清算の際に取引の片側に偏りたくない裁定投資家にも役立ちます。',
    },
    paragraph4: {
      p1: 'ポートフォリオマージン',
      p2: '58 Swapではポートフォリオマージン方式を 採用していません 。 未実現利益は、未実現損失を相殺したり、新規ポジション構築のための証拠金として使用できません。 この規則は、原資産を同じくする 2 つのデリバティブ契約間のスプレッド取引を検討している場合、重要となります。 ポジションの未実現利益で別の契約の損失を相殺するには、そのポジションを解消して利益を実現させる必要があります。',
    },
    text3: '分離マとクロスマージンの比べ',
    paragraph5: {
      p1: '変動しやすいマーケットにはハイレバレッジのポジションが分離マージンすれば素早く保証金をなくなるでしょう。しかし、是非ご注意したいのは58Swapの目標はできるだけ清算を避けたいですが、変動しやすいマーケットにハイレバレッジはもっと清算されやすいです。例えば、50倍レバレッジのポジションは反向マーケット2％する場合清算されます。クロスマージンはオーバーレバレッジ損失を防ぐ同時に、一定範囲内に価格波動も制御し高収益ももらえます。そして、ポジション追加もできて、操作方法は多いです。'
    }
  },
  liquidation: {
    title: '清算',
    paragraph1: {
      p1: ' 58 Swapの大半の契約は高水準のレバレッジがかかっています。 こうしたポジションを維持するには、取引所にポジション額の一定比率を保持する必要があります。この比率は維持証拠金率と呼ばれます。 最小維持証拠金必要額は、リスク制限ページ で確認することができます。',
      p2: '証拠金必要額を充足できない場合、ポジションは清算され維持証拠金は失われます。',
      p3: '「オープンポジション」タブからポジションごとの清算価格を確認することができます。また、レバレッジスライダーまたは「リスク制限」タブから追加証拠金を追加して調整することもできます。'
    },
    text1: '清算の最小化',
    paragraph2: {
      p1: '58 Swap では、非流動的な市場や価格操作を理由とする清算を回避するために、<a href="/reference/fairPriceMarking" style="color: #597ab9">公正価格マーキング</a>を採用しています。',
      p2: '大口ポジションには、証拠金高の引き上げを必要とするリスク制限も設けています。 この制限により、58 Swapの清算システムが使用可能な証拠金の額が増えるため、通常は安全に解消することが難しい大口ポジションも効果的に解消されます。 安全に実施できる場合、大口ポジションは段階的に清算されます。',
      p3: '清算がトリガされた場合、58 Swapは既存契約のオープンオーダーをキャンセルして、使用可能な証拠金の枠を広げ、ポジションの維持に努めます。',
      p4: '注：他の契約の注文はオープンのままとなります。'
    },
    text2: '清算プロセス',
    paragraph3: {
      p1: '58 Swapは、維持証拠金の自動減額を伴う部分的清算プロセスを採用しており、ポジションが完全清算される事態の回避を試みます。'
    },
    paragraph4: {
      p1: 'リスク制限の最低ランクに属するユーザー',
      p2: '1. 58 Swapは契約のオープンオーダーをすべてキャンセルします。',
      p3: '2. 1 によって維持証拠金必要額が充足されない場合、ポジションは破産価格で清算エンジンによって清算されます。'
    },
    paragraph5: {
      p1: 'リスク制限のより上位のランクに属するユーザー',
      p2: '清算システムは、ユーザーのリスク制限ランクを引き下げて、証拠金必要額の減額を試みます。引き下げ方法は以下のとおりです。',
      p3: '1. オープンオーダーと保有ポジションに関連するリスク制限までユーザーの所属ランクの引き下げを試みます。',
      p4: '2. オープンオーダーをすべてキャンセルし、保有ポジションに関連するリスク制限までユーザーの所属ランクの引き下げを試みます。',
      p5: '3. 現在のリスク制限のポジションサイズと清算回避に必要な証拠金額を充足するポジションサイズとの差額について、FillOrKill 注文を送信します。',
      p6: '4. ポジションがなお清算状態にある場合、すべてのポジションは清算エンジンに引き継がれ、ポジションを解消するための指値注文が破産価格で出されます。',
    },
    text3: 'システムの損益',
    paragraph6: {
      p1: ' 58 Swapが破産価格より有利な価格でポジションを清算できる場合、追加資金は<a href="/guide/insuranceFund" style="color: #597ab9">保険基金</a>に加算されます。',
      p2: '破産価格でポジションを清算できない場合、58 Swap は保険基金を使って、市場のポジションに攻勢をかけ、ポジション解消を試みます。 それでも清算注文が執行されない場合は、<a href="/reference/autoDeleveraging" style="color: #597ab9">レバレッジの自動解消</a>イベントに発展します。'
    },
    text4: '補足情報',
    paragraph7: {
      p1: '清算プロセスについては、補足情報と例示もご確認ください。'
    }
  },
  margin: {
    title: '証拠金参考',
    theadList: ['用語', '定義'],
    tbodyList: [
      ['ウォレット残高', '入金 - 出金 + 実現損益'],
      ['未実現損益', 'すべてのポジションの現在の損益。'],
      ['証拠金残高', '取引所で保持されるエクイティ総額。証拠金残高 = (ウォレット残高 + 未実現損益)。'],
      ['ポジション証拠金', ' 	ポジションを維持するために取引所に保持しなければならない最小エクイティ。保有するすべての契約の参入価額を選択したレバレッジで割った値に未実現損益を加算した金額です。'],
      ['注文証拠金', '注文証拠金：オープンオーダーを維持するために取引所に保持しなければならない最小エクイティ。保有するすべてのオープンオーダーの価額を選択したレバレッジで割った金額です。'],
      ['利用可能残高', '新規ポジションに利用可能な証拠金。利用可能残高 = (証拠金残高 - 注文証拠金 - ポジション証拠金)。']
    ]
  },
  entrust: {
    title: '注文タイプに関するFAQ ',
    paragraph1: {
      p1: '58 Swapは、ユーザーの独自の取引及びヘッジ戦略をアシストするため、多様な注文タイプを複数用意しています。このセクションでは、選択可能な注文タイプを例示を交えて概説します。各種注文タイプにかかる料金を確認するには、<a href="/reference/fees" style="color: #597ab9">こちら</a>をクリックしてください。',
    },
    text1: '成行注文',
    paragraph2: {
      p1: '成行注文は、現在の市場価格で即刻執行される注文です。 取引を急いで執行する場合は、このタイプの注文が選択されます。このタイプの注文を選択する際は、オーダーブックに注目する必要があります。さもないと、大量の成行注文によって「市場変動が助長される」が起こり、市場インパクトコストが発生する恐れがあります。',
      p2: 'ユーザー入力：数量'
    },
    text2: '指値注文',
    paragraph3: {
      p1: '指値注文は投資家が指定する購入/売却したい最高/最低価格で取引することである。指値注文は取引コストを抑えられます',
      p2: '指値注文はどの価格で約定します？指値注文を提出してから、もし市場の成行価格が満たす場合リアルタイムで約定できます。もし当時の価格が達していない場合、達するまでオーダーが展示し続けます。',
      p3: '例：成行価格は13000でユーザーが13100の指値価格で購入したい場合、システムは指値価格の13100に上がるまで待つのではなく、成行価格の13000でリアルタイムで約定します。BTC契約の成行インデックスは13000の場合、もしユーザーは12900で購入したい場合、指値価格の12900で購入することは設定して、成行価格≤12900になる場合、システムが自動的に12900で約定します。',
      p4: 'ユーザー入力：数量、指値'
    },
    paragraph4: {
      p1: '指値注文の例',
      p2: '数量 = 契約 10 枚',
      p3: '指値 = 100 ',
      p4: '方向 = 買い',
      p5: '契約 10 枚の買い注文が、指値 100 で市場に出されます。',
    },
    text3: '予備注文',
    paragraph5: {
      p1: '予備注文は条件を定めた注文のことです。指定するトリガ価格に達した場合、指定する執行価格で売買します。ユーザーはこちらのタイプを利用し、注文を設定することで保有するポジションを利食い/ストップすることもできますが、指定する執行価格で参入し取引コストを下げることもできます。',
      p2: 'ユーザー入力：トリガ、執行価格、数量'
    },
    paragraph6: {
      p1: '予備注文例示',
      p2: 'トリガ価格 = 100',
      p3: '執行価格 = 99',
      p4: '数量 = 10 张合约',
      p5: '方向 = 購入',
      p6: '10枚契約の購入は成行価格が100に達する時依頼して、99の指値価格で購入'
    }
  },
  profit_loss: {
    title: '利益/損失ガイド',
    paragraph1: {
      p1: 'このガイドでは、未実現損益及び実現損益 (PNL) の概念について説明します。'
    },
    text1: '例1、買い及び売り',
    paragraph2: {
      p1: '山田は 1,000 BTCUSD 契約をロングしています。平均参入価格は $1,000 です。BTCUSD のマーク価格は現在 $1,250 です。',
      p2: '山田の未実現損益は、平均参入価格と市場価格の差額が基盤となります。',
      p3: '未実現利益 = ($1/$1,000 - $1/$1,250) * 1,000 = 0.20 BTC',
      p4: 'BTCUSD の直近価格は $ 1,500です。 ただし、未実現損益の計算では、直近価格でなく市場価格が使用されます。 その理由を理解するには、<a href="/reference/fairPriceMarking" style="color: #597ab9">公正価格マーキング</a>をお読みください。'
    },
    paragraph3: {
      p1: '山田 は 500 BTCUSD 契約を $1,500 で売却し、利益を確定することにします。',
      p2: '山田 の実現損益は、平均参入価格とBTCUSD の売却価格の差額が基盤となります。',
      p3: '実現利益 = ($1/1,000 - $1/$1,500) * 500 = 0.17 BTC',
      p4: '実現損益は、ポジションを実際に購入または売却することができる価格を基盤にします。これは大半の場合、マーク価格ではありません。山田が500契約をマーク価格の $1,250 で売却していたとしたら、実現利益は 0.10 BTC になります。'
    },
    text2: '例2、資金調達料',
    paragraph4: {
      p1: '58 Swapには無期限契約と呼ばれるタイプのデリバティブ契約があります。 無期限契約の買い手と売り手は、取引日の間、定期的に資金調達料を支払い、受領します。詳細は、<a href="/reference/swapContractsGuide" style="color: #597ab9">無期限契約ガイド</a>をお読みください。',
      p2: '山田は、無期限契BTCUSDを取引しています。8 時間ごとに、資金調達料が発生します。この料金は現在 1% で、買い手が売り手に支払います。',
      p3: '山田は、100 BTC 相当の BTCUSD のロングポジションを保有しています。 このポジションには実現損益はありません。 資金調達の時間となり、山田さん は BTCUSD のロングポジションを保有しているため 1 BTC を支払わなければなりません。 資金調達料の支払い後、山田さん の実現損益は - 1 BTC となっています。',
      p4: '代わりに 100 BTC 相当の BTCUSD のショートポジションを保有していたならば、山田さん は 1 BTC を受領し、実現利益は、-1 BTC でなく 1 BTC となっていたことでしょう。',
    },
    text3: '例3、取引手数料',
    paragraph5: {
      p1: '取引手数料はすべて実現損益を通じて処理されます。',
      p2: '山田さん は BTCUSD を購入しました。市場は変動していません。未実現損益はゼロ (0) ですが、実現損益はマイナスです。なぜなら、BTCUSD の購入時にテイカー料金を支払っているからです。',
      p3: '受動的な指値注文を出していたならば、注文の執行後はメイカーと分類されていたはずです。メイカーとして 山田さん は取引のリベートを受領していたことでしょう。その場合、未実現損益は 0 に、実現損益はプラスになります。',
    },
    text4: '例 4、実現損益の処理',
    paragraph6: {
      p1: '実現損益は、58 Swap 取引ダッシュボードの複数の場所に表示されます。表示場所は、既存ポジションサイズが縮小するだけなのか、ポジションを完全に解消するのかに応じて決まります。',
      p2: '実現利益 10 BTC のオープンポジションを保有している場合、この金額は「オープンポジション」タブに表示されます。',
      p3: 'このポジションを完全に手仕舞いし、10 BTC の利益が確定した場合、この 10 BTC は「決済済みポジション」タブに表示されます。',
      p4: 'その後、同じ契約で新しいポジションを構築した場合、「オープンポジション」タブで実現損益は 0 BTC にリセットされます。 この新しいポジションの部分決済から生じる実現損益は、「オープンポジション」タブに表示されます。',
      p5: 'その後この新しいポジションを完全に手仕舞いすると、「決済済みポジション」タブにこのシンボルの実現損益が加算されます。'
    },
  },
  risk: {
    title: 'リスク制限',
    text1: '概要',
    paragraph1: {
      p1: ' 58 Swap では、すべての取引アカウントにリスク制限を設け、証拠金が設定された契約での大規模な清算の発生を最小化しています。',
      p2: 'トレーダーがより大口のポジションを積み上げると、取引所の他のトレーダーにリスクをもたらします。ポジションを完全に清算できない場合、他のトレーダーが レバレッジ解消 イベントに直面することもあります。 ステップ モデルは、大口ポジションの証拠金必要額を増やすことでこうした事態を回避するのに役立ちます。'
    },
    text2: '変動的なリスク制限',
    paragraph2: {
      p1: '各商品には 最小リスク制限 と ステップ があります。こうした数値は最小維持証拠金 (MM) と当初証拠金必要額と共に、各ポジションサイズで完全な証拠金必要額を計算するために使用されます。',
      p2: 'ポジションサイズが拡大するほど、維持証拠金と当初証拠金の必要額は増えます。 ユーザーは「ポジション」パネルでリスク制限の引き上げまたは引き下げを承認する必要があります。 証拠金必要額は、リスク制限の変動に伴い自動的に増減します。'
    },
    text3: '商品のリスク制限',
    theadList: ['シンボル', '最小リスク制限', 'ステップ', '最小維持証拠金', '最小当初証拠金'],
    tbodyList: [
      ['BTCUSD', '200 BTC', '100 BTC', '0.50%', '1.00%']
    ],
    text4: '式',
    theadList2: ['用語', ' BTCUSD の例 (1ステップ)', '式'],
    tbodyList2: [
      ['新規維持証拠金率', '最小 MM 率 + ( ステップ * 最小 MM 率 )', '0.50% + ( 1 * 0.50% ) = 1.00%'],
      ['新規当初証拠金率', '最小 IM 率 + ( ステップ * 最小 MM 率 )', '1.00% + ( 1 * 0.50% ) = 1.50%'],
      [' BTC 維持証拠金', '新規 MM * BTC ポジション総額', '1.00% * 300 BTC = 3 BTC'],
    ],
    text5: '補足情報',
    paragraph3: {
      p1: '補足情報の参照先：',
      p2: 'リスク制限の調整方法',
      p3: '取引例',
    }
  }
}
export default reference

