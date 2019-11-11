let wallet = {
  title: 'Баланс',
  walletBalance: 'Баланс кошелька',
  walletBalanceTip: 'Баланс кошелька = Доступный баланс + Замор.маржа + Маржа позиций',
  marginBalance: 'Капитал',
  marginBalanceTip: 'Капитал пользователя = Баланс кошелька + нереальзованный PNL ',
  userEquity: 'Капитал пользователя',
  userEquityTip: 'Капитал пользователя= Доступные средства + Капитал позиций',
  ratio: 'Нереализованный PNL',
  ratioTip: 'PNL всех открытых контрактов',
  positionMarginValue: 'Капитал позиций',
  positionMarginValueTip: 'Капитал позиций = Маржа позиций + нереализованный PNL ',
  orderHold: 'Маржа',
  orderHoldTip: 'Необходима мин.сумма маржи. Эта сумма равна цена каждого ордера умнож.на процент первонач.маржи этих ордеров',
  unRelease: 'Открытый контрак',
  unReleaseAmount: 'Кол-во открытых контрактов',
  less: 'шорт',
  more: 'лонг'
}
export default wallet
