let entrust = {
  menu: [
    // {
    //   name: '자산 정보',
    //   children: [
    //     {name: '잔액', url: '/information/wallet/1', mark: 'wallet'}
    //   ]
    // },
    {
      name: '과거 데이터',
      children: [
        {
          name: '거래 내역',
          url: '/information/tradeHistory/1',
          mark: 'tradeHistory',
        }
      ]
    }
  ],
  tradeHistory: {
    contract: '계약',
    size: '계약 수량(장)',
    dealSize: '체결량',
    surplus: '잔여량',
    dealPrice: '체결가',
    price: '주문가(USD)',
    orderValue: '체결 가치(BTC)',
    type: '유형',
    date: '시간',
    less: '매도',
    more: '매수'
  }
}
export default entrust
