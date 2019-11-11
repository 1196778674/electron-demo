let entrust = {
  menu: [
    // {
    //   name: 'Активы',
    //   children: [
    //     {name: 'Сумма', url: '/information/wallet/1', mark: 'wallet'}
    //   ]
    // },
    {
      name: 'История',
      children: [
        {
          name: 'История',
          url: '/information/tradeHistory/1',
          mark: 'tradeHistory',
        }
      ]
    }
  ],
  tradeHistory: {
    contract: 'Контракты',
    size: 'Кол-во (шт)',
    dealSize: 'Исполн.',
    surplus: 'Остаток',
    dealPrice: 'Цена испол.',
    price: 'Цена (USD)',
    orderValue: 'Стоимость (BTC)',
    type: 'Тип',
    date: 'Время',
    less: 'Шорт',
    more: 'Лонг'
  }
}
export default entrust