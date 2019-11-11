let entrust = {
  menu: [
    // {
    //   name: '자산 정보',
    //   children: [
    //     {name: '잔액', url: '/information/wallet/1', mark: 'wallet'}
    //   ]
    // },
    {
      name: '과거',
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
    size: '계약 수량 (장)',
    dealSize: '거래 수량',
    surplus: '남은 수량',
    dealPrice: '거래 가격',
    price: '주문 가격 (USD)',
    orderValue: '거래 가치 (BTC)',
    type: '유형',
    date: '주문 시간',
    less: '매도',
    more: '매수'
  }
}
export default entrust
