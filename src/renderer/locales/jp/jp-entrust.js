let entrust = {
  menu: [
    // {
    //   name: '資産情報',
    //   children: [
    //     {name: '残高', url: '/information/wallet/1', mark: 'wallet'}
    //   ]
    // },
    {
      name: '履歴',
      children: [
        {
          name: '取引履歴',
          url: '/information/tradeHistory/1',
          mark: 'tradeHistory',
        }
      ]
    }
  ],
  tradeHistory: {
    contract: '契約',
    size: '契約数量(枚)',
    dealSize: '約定数量',
    surplus: '残り',
    dealPrice: '約定価格',
    price: '暫定中オーダー価格(USD)',
    orderValue: '約定価値(BTC)',
    type: 'タイプ',
    date: '注文時間',
    less: 'ショート',
    more: 'ロング'
  }
}
export default entrust
