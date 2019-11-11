let entrust = {
  menu: [
    // {
    //   name: 'Asset Information',
    //   children: [
    //     {name: 'Balance', url: '/information/wallet/1', mark: 'wallet'}
    //   ]
    // },
    {
      name: 'History',
      children: [
        {
          name: 'Trade History',
          url: '/information/tradeHistory/1',
          mark: 'tradeHistory',
        }
      ]
    }
  ],
  tradeHistory: {
    contract: 'Contract',
    size: 'Quantity (CONTR)',
    dealSize: 'Execution Quantity',
    surplus: 'Remaining',
    dealPrice: 'Execution Price',
    price: 'Order Price(USD)',
    orderValue: 'Execution Value(BTC)',
    type: 'Type',
    date: 'Order Time',
    less: 'Short',
    more: 'Long'
  }
}
export default entrust
