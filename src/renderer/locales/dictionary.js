export default {
  dictionary: {},
  install(Vue, i18n) {
    this.dictionary = Vue[Vue.prototype ? 'prototype' : 'val'].$dictionary = {
      kLineTypeMore(i18n) {
        return [
          {
            id: 0,
            name: '1',
            time: '1.1',
            buttonName: i18n.t('message.kLineType.buttonName'),
            period: '1min',
            step: 60 * 1000
          },
          {
            id: 1,
            name: '1',
            time: '1',
            buttonName: '1' + i18n.t('message.kLineType.min'),
            period: '1min',
            step: 60 * 1000
          },
          {
            id: 1,
            name: '3',
            time: '3',
            buttonName: '3' + i18n.t('message.kLineType.min'),
            period: '3min',
            step: 3 * 60 * 1000
          },
          {
            id: 2,
            name: '5',
            time: '5',
            buttonName: '5' + i18n.t('message.kLineType.min'),
            period: '5min',
            step: 5 * 60 * 1000
          },
          {
            id: 3,
            name: '15',
            time: '15',
            buttonName: '15' + i18n.t('message.kLineType.min'),
            period: '15min',
            step: 15 * 60 * 1000
          },
          {
            id: 4,
            name: '30',
            time: '30',
            buttonName: '30' + i18n.t('message.kLineType.min'),
            period: '30min',
            step: 30 * 60 * 1000
          },
          {
            id: 5,
            name: '60',
            time: '60',
            buttonName: '1' + i18n.t('message.kLineType.hours'),
            period: '1hour',
            step: 60 * 60 * 1000
          },
          {
            id: 6,
            name: '120',
            time: '120',
            buttonName: '2' + i18n.t('message.kLineType.hours'),
            period: '2hour',
            step: 120 * 60 * 1000
          },
          {
            id: 7,
            name: '240',
            time: '240',
            buttonName: '4' + i18n.t('message.kLineType.hours'),
            period: '4hour',
            step: 240 * 60 * 1000
          },
          {
            id: 8,
            name: '360',
            time: '360',
            buttonName: '6' + i18n.t('message.kLineType.hours'),
            period: '6hour',
            step: 360 * 60 * 1000
          },
          {
            id: 9,
            name: '720',
            time: '720',
            buttonName: '12' + i18n.t('message.kLineType.hours'),
            period: '12hour',
            step: 720 * 60 * 1000
          },
          {
            id: 10,
            name: 'D',
            time: 'D',
            buttonName: '1' + i18n.t('message.kLineType.day'),
            period: '1day',
            step: 1440 * 60 * 1000
          },
          {
            id: 11,
            name: 'W',
            time: 'W',
            buttonName: '1' + i18n.t('message.kLineType.week'),
            period: '1week',
            step: 7 * 1440 * 60 * 1000
          }
        ]
      },
      kLineType(i18n) {
        return [
          {
            id: 0,
            name: '1',
            time: '1.1',
            buttonName: i18n.t('message.kLineType.buttonName'),
            period: '1min',
            step: 60 * 1000
          },
          {
            id: 1,
            name: '1',
            time: '1',
            buttonName: '1' + i18n.t('message.kLineType.min'),
            period: '1min',
            step: 60 * 1000
          },
          {
            id: 2,
            name: '5',
            time: '5',
            buttonName: '5' + i18n.t('message.kLineType.min'),
            period: '5min',
            step: 5 * 60 * 1000
          },
          {
            id: 3,
            name: '15',
            time: '15',
            buttonName: '15' + i18n.t('message.kLineType.min'),
            period: '15min',
            step: 15 * 60 * 1000
          },
          {
            id: 4,
            name: '30',
            time: '30',
            buttonName: '30' + i18n.t('message.kLineType.min'),
            period: '30min',
            step: 30 * 60 * 1000
          },
          {
            id: 5,
            name: '60',
            time: '60',
            buttonName: '1' + i18n.t('message.kLineType.hours'),
            period: '1hour',
            step: 60 * 60 * 1000
          },

          {
            id: 6,
            name: '120',
            time: '120',
            buttonName: '2' + i18n.t('message.kLineType.hours'),
            period: '2hour',
            step: 120 * 60 * 1000
          },
          {
            id: 7,
            name: '240',
            time: '240',
            buttonName: '4' + i18n.t('message.kLineType.hours'),
            period: '4hour',
            step: 240 * 60 * 1000
          }
        ]
      },
      // 充值状态
      depositStates: {
        WAIT: i18n.t('message.depositStates.WAIT'),
        WAIT_CONFIRM: i18n.t('message.depositStates.WAIT_CONFIRM'),
        SUCCESSED: i18n.t('message.depositStates.SUCCESSED'),
        FAILED: i18n.t('message.depositStates.FAILED')
      },
      source: [
        i18n.t('message.source.PC'),
        i18n.t('message.source.API'),
        i18n.t('message.source.IOS'),
        i18n.t('message.source.Android')
      ],
      // 订单状态
      orderStatusList: [
        { value: '0,1', name: i18n.t('message.orderStatusList.name2') },
        { value: 4, name: i18n.t('message.orderStatusList.name3') },
        { value: 2, name: i18n.t('message.orderStatusList.name4') },
        { value: 3, name: i18n.t('message.orderStatusList.name5') }
      ],
      // 计划委托--订单状态
      planOrderStatusList: [
        { value: 1, name: i18n.t('message.planOrderStatusList.name1') },
        { value: 2, name: i18n.t('message.planOrderStatusList.name2') },
        { value: 3, name: i18n.t('message.planOrderStatusList.name3') }
      ],
      // 类型
      orderTypeList: [
        { value: 1, name: i18n.t('message.orderTypeList.limit') },
        { value: 2, name: i18n.t('message.orderTypeList.market') }
      ],
      // 爆仓类型
      orderLiquidationList: [
        { value: 1, name: i18n.t('message.orderLiquidationList.liquidation') },
        { value: 2, name: i18n.t('message.orderLiquidationList.ADL') }
      ],
      productList: [
        {
          id: 1,
          name: i18n.t('message.productList.name1'),
          text: i18n.t('message.productList.text1')
        },
        {
          id: 2,
          name: i18n.t('message.productList.name2'),
          text: i18n.t('message.productList.text2')
        },
        {
          id: 3,
          name: i18n.t('message.productList.name3'),
          text: i18n.t('message.productList.text3')
        },
        {
          id: 4,
          name: i18n.t('message.productList.name4'),
          text: i18n.t('message.productList.text4')
        }
      ],
      coinBase: {
        BTC: {
          pricePrecision: 8,
          priceMax: 8,
          sizePrecision: 3,
          deep: [8, 7, 6]
        },
        USDT: {
          pricePrecision: 2,
          priceMax: 7,
          sizePrecision: 3,
          deep: [2, 1, 0]
        },
        BTCUSD: {
          pricePrecision: 8,
          priceMax: 8,
          sizePrecision: 3,
          deep: [8, 7, 6]
        },
        EOSUSD: {
          pricePrecision: 8,
          priceMax: 8,
          sizePrecision: 3,
          deep: [8, 7, 6]
        }
      },
      error(id) {
        return i18n.t('message.errorCode.' + id)
      },
      wsError(id) {
        return i18n.t('message.wsErrorCode.' + id)
      }
    }
  }
}
