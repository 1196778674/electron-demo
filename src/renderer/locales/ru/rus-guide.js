﻿let guide = {
    menu: [
      {
        name: 'Основной',
        children: [
          {name: 'Обзор(отсюда)', url: '/guide/overview', mark: 'overview'},
          {name: 'FAQ', url: '/guide/faq', mark: 'faq'},
          {name: 'Расходы', url: '/guide/fees', mark: 'fees'}
        ]
      },
      {
        name: 'Справочник по контрактам',
        children: [
          {name: 'Справочник по бессрочным контрактам', url: '/guide/swapContractsGuide', mark: 'swapContractsGuide'},
          {name: 'Справочник по Биткойнам（BTC）', url: '/guide/BTC', mark: 'BTC'},
          {name: 'BTCUSD', url: '/guide/BTCUSD/1', mark: 'BTCUSD'}
        ]
      },
      {
        name: 'Исторические данные',
        children: [
          {name: 'Индекс спотовой цены', url: '/guide/.BBTC/1', mark: '.BBTC'},
          {name: 'история брутто-ставок', url: '/guide/fundingHistory/1', mark: 'fundingHistory'},
          {name: 'страховой фонд', url: '/guide/insuranceFund/1', mark: 'insuranceFund'},
        ]
      },
      {
    name: 'Маржинальная торговля',
    children: [
      {name: 'авто-делевириджинг', url: '/guide/autoDeleveraging', mark: 'autoDeleveraging'},
      {name: 'Справочник по бирже', url: '/guide/exchangeGuide', mark: 'exchangeGuide'},
      {name: 'маркировка сходной цены', url: '/guide/fairPriceMarking', mark: 'fairPriceMarking'},
      {name: 'Изолированнная маржа', url: '/guide/isolatedMargin', mark: 'isolatedMargin'},
      {name: 'Принудительная ликвидация', url: '/guide/liquidation', mark: 'liquidation'},
      {name: 'Терминология маржинальных фондов', url: '/guide/marginTermReference', mark: 'marginTermReference'},
      {name: 'FAQ по типам оредров', url: '/guide/orderTypeFAQ', mark: 'orderTypeFAQ'},
      {name: 'Справочник по PNL', url: '/guide/pnlGuide', mark: 'pnlGuide'},
      // {name: 'Предел риска', url: '/reference/risk', mark: 'risk'}
    ]
  },
  ],
  history: {
    title: 'История',
    text1: 'Здесь отображена история по всем контрактам',
    text11: 'ставка возмещения обмена временно не получена',
    search: {
      placeholder: 'Выберите',
      clear: 'Очистить',
      search: 'Поиск'
    },
    list_info: {
      p1: '0 - 100',
      p2: 'След. >'
    },
    theadList: ['Время', 'Контракты', 'Интервал', 'Ставка', 'Сутки'],
    next: 'След.',
    previous: 'Пред.',
    hours: 'Часы',
  },
  insurance_fund: {
    title: 'Страховой фонд',
    paragraph1: {
      p1: '58 Swap использует страховой фонд, чтобы избегать авто-делевериджинга позиций. Фонд предназначен для корректировки цены ликвидации ордеров до того, как они будут переведены в систему авто-делевириджинга<a href="/reference/autoDeleveraging" style="color: #597ab9"></a>',
      p2: 'Страховой фонд увеличивается за счет ликвидаций, которые были реализованы на рынке по цене более выгодной, чем цена банкротства конкретной позиции<a href="/reference/liquidation" style="color: #597ab9"></a> '
    },
    text1: 'Здесь отображена история по всем контрактам',
    list_info: {
      p1: '0 - 100',
      p2: 'След. >'
    },
    theadList: ['Дата', 'Баланс страхового фонда']
  },
  xbt: {
    title: 'Руководство по BTC',
    paragraph1: {
      p1: '58 SWAP это новый, инновационный тип контракта - бессрочный контракт. Контракт не имеет срока истечения. Спотовая цена привязана к механизмам,<a href="/reference/swapContractsGuide" style="color: #597ab9;"> таким как капитальные затраты, а целью контракта является повторение условий спотового рынка с высоким уровнем кредитного плеча. ',
      p2: 'Чтобы просмотреть текущие капитальные затраты и расчеты, для определения размера финансирования, см. расчеты финансирования в спецификациях контракта по BTCUSD или в руководстве по бессрочным контрактам.',
    },
    paragraph2: {
      p1: 'Подходит для трейдеров, которые предпочитают держать открытые позиции в течение длительного срока и не хотят, чтобы стоимость их позиций изменялась по причине резких колебаний ',
      p2: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9;"> Как котируется бессрочный контракт BTCUSD ?</a>',
      p3: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9;">Маржа и кредитное плечо</a>',
      p4: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9;">Индекс цен</a>',
      p5: '<span style="display: inline-block;margin-right:8px;width:6px;height:6px;border-radius: 3px;background-color: #888;"></span><a href="/guide/BTC" style="color: #597ab9;">Маркировка и исполнение</a>'
    },
    text1: 'Как котируется бессрочный контракт?',
    paragraph3: {
      p1: 'В качестве базовой цены бессрочного контракта BTCUSD используется индекс 58 Swap. Это равновзвешенный индекс, использующий цены BTC/USD на биржах  BitFinex, Bitstamp, Gdax, Huobi и Binance. Как базовый, так и своповый контракты котируются в долларах США. Маржа и PNL деноминированы в биткойнах. <a href="/guide/.BBTC/1" style="color: #597ab9;"></a>'
    },
    theadList: [' ', 'Формулы'],
    tbodyList: [
      ['Коэффициент', '1 USD'],
      ['Сумма контракта XBT ', '1 USD/ Цена BTCUSD'],
      ['Сумма контракта USD', '1 USD'],
      ['Расчет PNL', 'Кол-во контрактов * Коэффициент * (1/цена открытия - 1/цена закрытия)']
      ],
    paragraph4: {
      p1: 'Если трейдер желает заработать на повышении цены биткоина в паре с долларом США, то необходимо купить бессрочный контракт BTCUSD; И наоборот: если он считает, что цена снизится, он продает контракт.'
    },
    text2: 'Маржа и кредитное плечо',
    paragraph5: {
      p1: 'Маржа указывается в биткоинах. Это означает, что трейдеры могут открывать длинные или короткие позиции, используя только биткоин. В контрактах BTCUSD используется кредитное плечо 2х, 3х, 5х, 10х, 20х, 33х, 50х, максимум 100х. ',
      p2: 'Например, чтобы купить контракты стоимостью 100 биткойнов, вам потребуется всего 1 биткойн начальной маржи'
    },
    text3: 'Индекс цен',
    paragraph6: {
      p1: 'Индекс 58 Swap <a href="/guide/.BBTC/1" style="color: #597ab9;">.BBTC </a> настоящее время используется для определения цены бессрочных контрактов по BTCUSD. Его состав: <a href="/guide/BTCUSD/1" style="color: #597ab9;"> </a>'
    },
    theadList2: ['Биржа', 'Вес'],
    tbodyList2: [
      ['BitFinex', '20%'],
      ['Bitstamp', '20%'],
      ['GDAX', '20%']
    ['Huobi', '20%'],
    ['Binance', '20%']
    ],
    paragraph7: {
      p1: 'В настоящее время вес бирж равнозначен. В будущем вес той или иной биржи может быть скорректирован. Корректировки будут произведены с заблаговременным оповещением'
    },
    text4: 'Маркировка и исполнение',
    paragraph8: {
      p1: 'Так как BTCUSD имеет бессрочный характер, исполнение такого контракта не производится. Маркировка в целях определения нереализованного PNL и уровня ликвидации выполняется в соответствии с системой маркировки справедливой цены<a href="/reference/marginTermReference" style="color: #597ab9;"> </a><a href="/reference/liquidation" style="color: #597ab9;"> </a> <a href="/reference/fairPriceMarking" style="color: #597ab9;"> </a>',
      p2: 'Обратите внимание: для бессрочных контрактов финансирование происходит каждые 8 часов. Справочную информацию см. в разделе Финансирование в Руководстве по бессрочным контрактам. Действующие ставки см. в разделе Расчет финансирования в спецификации контракта по BTCUSD <a href="/reference/swapContractsGuide" style="color: #597ab9;"></a><a href="/guide/BTCUSD/1" style="color: #597ab9;"> </a>'
    },
    text5: 'Пример сделки BTCUSD >',
    paragraph9: {
      p1: 'Трейдер открывает длинную позицию в размере 100 XBT по цене 6,000 долларов США. Таким образом, он покупает (т. е. открывает длинную позицию) 100 XBT * 6,000 USD = 600, 000 контрактов. Через несколько дней цена контракта возрастает до 7,000 долларов США',
      p2: 'Прибыль трейдера составит : 600,000 * 1 * (1/6,000 - 1/7,000) = 14.286 BTC',
      p3: 'Если бы цена упала до 5,000 долларов США, убытки трейдера составили бы: 600 000 * 1 * (1/6000 - 1/5000) = -20 BTС. Убыток будет больше по причине обратного и нелинейного характера контракта',
      p4: 'И наоборот: если бы трейдер открыл короткую позицию, он заработал бы больше, если бы цена упала, чем потерял бы, если бы цена поднялась'
    }
  },
  xbtusd: {
    title: 'Спецификация контракта BTCUSD',
    text1: 'Описание',
    paragraph1: {
      p1: '<a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD</a> - это бессрочный контракт по BTC/USD на BBTC индексе. 1 контракт равен 1 USD в отношении к биткоину<a href="/guide/.BBTC/1" style="color: #597ab9;">. </a> ',
      p2: 'Платформа использует премиальный индекс для расчета, Финансирование производится каждые 8 часов. Каждый календарный день UTC + 8 в 8 утра, в UTC + 8 4:00 вечера и UTC + 8 12:00 вечера.',
      p3: `<a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD</a> использует премиальный индекс для расчета ставок финансирования. Базовые процентные ставки указаны в индексах .BTCBON8H и .USDBON8H. <a href="/guide/.BTCBON8H/1" style="color: #597ab9;"> </a> <ahref="/guide/.BTCUSDPI8H/1" style="color: #597ab9;"> </a> Ставка премиума назначается на индексе .BTCUSDPI8H. Эти ставки используются для расчета окончательной ставки финансирования.<a href="/reference/swapContractsGuide" style="color: #597ab9;"></a> `,
      p4: '58 Swap не взимает комиссию за финансирование',
      p5: 'Экспирация: бессрочный инструмент не имеет срока истечения'
    },
    // text2: 'Посмотреть руководство серии BTC ',
    text2: 'Расчет финансирования',
    paragraph2: {
      p1: `Более подробную информацию о ставке финансирования можно получить см. в разделе<a href="/reference/swapContractsGuide" style="color: #597ab9;"> Руководство по бессрочным контрактам</a>。`
    },
    text3: 'Формула',
    paragraph3: {
      p1: 'Премиальный индекс P = A / B - 1',
      p2: 'P，Премиальный индекс；A，Средняя цена за последние три минуты торгов；B，Среднее арифметическов за последние три минуты торгов',
    },
    paragraph4: {
      p1: 'Ставка финансирования F = Clamp( P * K, -0.03%, 0.03%)',
      p2: 'F，Ставка финансирования；P，Премиальный индекс；K，значения параметра K=0.6'
    },
    paragraph5: {
      p1: `Ставка финансирования - это ставка, которая обменивается между трейдерами。`,
      p2: `Ставка премиума используется для вычесления процентной ставки до 0.03% `
    },
    text4: 'Полная информация о контракте',
    theadList2: ['Основной тике', 'BTCUSD'],
    tbodyList2: [
      ['Дата экспирации ', 'Бессрочный'],
      ['Начальная маржа', '1.00% +комиссия за вход тейкера+комиссия за выход тейкера'],
      ['Поддерж.маржа', '0.50% +комиссия за выход тейкера+ставка финансирования'],
      ['Символ процентной базовой ставки', '.BTCBON8H'],
      ['Символ процентной котировки', '.USDBON8H'],
      ['Символ премиума финансирования', '.BTCUSDPI8H'],
      ['Интервал финансирования', 'Каждые 8ч.'],
      ['Включен авто-делевериджин', 'Да. Этот контракт высоко спекулятивный и ограничивает убытки посредством авто-делевериджинга'],
      ['Способ маркировки', 'FairPrice'],
      ['Расчет справедливого базиса', 'Справедливый базис по этому инструменту определяется годовой ставкой финансирования'],
      ['Риск лимит', '200 BTC'],
      ['Шаг риска', '100 BTC'],
      ['Размер контракта', '1 USD (в настоящее время 0.00006086 BTC за контракт)'],
      ['Исполнение расчетов', 'Этот контракт бессрочен, поэтому расчеты по нему не производятся'],
      ['Комиссия', 'Более подробную информацию см. в разделе Справочная информация о комиссии'],
      ['Мин. изменение цены', '0.5 USD'],
      ['Макс. цена', '1,000,000'],
      ['Макс. кол-во ордеров', '10,000,000'],
      ['Объем лота', '1'],
      ]
  },
  bxbt: {
    title: 'Спотовый индекс цен',
    text1: 'Данные индекса ',
    paragraph1: {
      p1: 'Индекс 58 Swap отслеживает спотовую цену Bitcoin каждую минуту. Цена Bitcoin рассчитывается на основе последней цены на индекс 58 Swap. Значение индекса используется в качестве текущей цены Bitcoin на многих страницах ',
      p2: 'Индекс 58 Swap это равновзвешенный индекс, использующий цены BTC/USD на биржах  BitFinex, Bitstamp, Gdax, Huobi и Binance.',
      p3: `Это составной индекс, а это означает, что его цена рассчитывается на основе нескольких источников. Информацию о компонентах составного индекса см. в разделе Разбивка составного индекса. Если биржа прекращает обслуживание компонента индекса, и никакие сделки не регистрируются в течение более чем 15 минут, система 58Swap может автоматически удалить этот компонент из индекса до возобновления торгов`
    },
    paragraph2: {
      p1: `Инструменты, использующие этот индекс`,
      p2: `<a href="/guide/BTCUSD/1" style="color: #597ab9;">BTCUSD</a>。`
    },
    text2: 'Исторические значения индекса .BBTC ',
    text3: 'Значения индекса',
    theadList1: ['Время', 'Символ', 'Индекс цен'],
    tbodyList1: [],
    text4: 'Разбивка составного индекса',
    theadList2: ['Время', 'Источник', 'Вес', 'Последняя цена'],
    tbodyList2: []
  },

};
export default guide
