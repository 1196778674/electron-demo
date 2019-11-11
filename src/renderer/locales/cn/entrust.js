let entrust = {
  menu: [
    // {
    //   name: '资产信息',
    //   children: [
    //     {name: '余额', url: '/information/wallet/1', mark: 'wallet'}
    //   ]
    // },
    {
      name: '历史',
      children: [
        {
          name: '交易历史',
          url: '/information/tradeHistory/1',
          mark: 'tradeHistory',
        }
      ]
    }
  ],
  tradeHistory: {
    contract: '合约',
    size: '合约数量(张)',
    dealSize: '成交数量',
    surplus: '剩余',
    dealPrice: '成交价格',
    price: '挂单价格(USD)',
    orderValue: '成交价值',
    type: '类型',
    date: '下单时间',
    less: '空',
    more: '多'
  }
}
export default entrust
