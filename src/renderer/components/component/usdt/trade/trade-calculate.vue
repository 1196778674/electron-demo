<template>
  <div :class="{'trade-calculate': 'black' === themeValue, 'trade-calculate-white': 'white' === themeValue}" @click="removeSelected">
    <st-row class="container1" direction="column">
      <div class="title">
        <span class="text">{{$t('message.calculate.title')}}</span>
        <span class="icon-close" @click.stop="close"></span>
        <span class="arrow"></span>
      </div>
      <div class="tags">
        <p v-if="themeValue === 'white'" :class="{'active': this.calculateType === 1}" @click="changeSelect('calType', 1)">
          {{$t('message.calculate.profitCal')}}
        </p>
        <p v-else :class="{'active': this.calculateType === 1}" @click="changeSelect('calType', 1)">
          {{$t('message.calculate.profitCal')}}
        </p>
        <p :class="{'active': this.calculateType === 2}" @click="changeSelect('calType', 2)">
          {{$t('message.calculate.goalPriceCal')}}
        </p>
        <p  v-if="themeValue === 'white'" :class="{'active': this.calculateType === 3}" @click="changeSelect('calType', 3)">
          {{$t('message.calculate.liquidationCal')}}
        </p>
        <p  v-else :class="{'active': this.calculateType === 3}" @click="changeSelect('calType', 3)">
          {{$t('message.calculate.liquidationCal')}}
        </p>
      </div>
      <st-row class="contract" style="position: relative">
        <span class="label">{{$t('message.calculate.contract')}}</span>
        <p id="contract1" class="value" @click="showLayer($event, 'showLayerContracts')">
          <span id="contract2">{{presentContractName}}</span>
          <span id="contract3" :class="['icon', showLayerContracts ? ' transition-icon' : '']"></span>
        </p>
        <layer-select v-show="showLayerContracts"
                      width="190px"
                      left="124px"
                      top="36px"
                      :list="list"
                      @selection="changeContract"></layer-select>
      </st-row>
      <st-row class="type">
        <span class="label">{{$t('message.calculate.type')}}</span>
        <st-row class="type-item" justify="between">
          <span :class="{'active span-more': this.order.side === 1,'active-more':this.order.side === 1 &&  'white' === themeValue, 'span-more':'white' === themeValue}" @click="changeSelect('type', 1)">
            {{$t('message.calculate.more')}}
          </span>
          <span :class="{'active span-less': this.order.side === 2,'active-less':this.order.side === 2 &&  'white' === themeValue, 'span-less':'white' === themeValue}" @click="changeSelect('type', 2)">
            {{$t('message.calculate.less')}}
          </span>
        </st-row>
      </st-row>
      <st-row class="leverage" style="position: relative" v-if="calculateType !== 3 ? calculateType === 2 ? profitType === 1 ? true : false : true : false">
        <span class="label">{{$t('message.calculate.leverage')}}</span>
        <p id="leverage1" class="value" @click="showLayer($event, 'showLayerLeverage')">
          <span id="leverage2">{{presentLeverageName}}</span>
          <span id="leverage3" :class="['icon', showLayerLeverage ? ' transition-icon' : '']"></span>
        </p>
        <layer-select v-show="showLayerLeverage"
                      width="190px"
                      left="124px"
                      top="36px"
                      :list="leverageList"
                      @selection="changeLeverage"></layer-select>
      </st-row>
      <st-row class="profit-type"
              v-if="calculateType === 2"
              justify="between">
        <span :class="{'active span-more': this.profitType === 1,'active-1':this.profitType === 1 && 'white' === themeValue, 'span-more':'white' === themeValue}"
              @click="changeSelect('profit', 1)">
          {{$t('message.calculate.useProfitRate')}}
        </span>
        <span :class="{'active span-less': this.profitType === 2,'active-2':this.profitType === 2 && 'white' === themeValue, 'span-less':'white' === themeValue, 'ru-span-less':'ru'===$i18n.locale}"
           @click="changeSelect('profit', 2)">
          {{$t('message.calculate.useProfit')}}
        </span>
      </st-row>
      <!-- <st-row class="unit"
              v-if="!(calculateType === 2 && profitType === 1)">
        <span class="label">{{$t('message.calculate.unit')}}</span>
        <st-row class="unit-item" justify="between">
        <span :class="{'active span-more': this.order.unit === 1,'active-usd':this.order.unit === 1 &&  'white' === themeValue, 'span-usd':'white' === themeValue}"
          @click="changeSelect('unit', 1)">
          {{$t('message.calculate.piece')}}
        </span>
          <span  :class="{'active span-less': this.order.unit === 2,'active-btc':this.order.unit === 2 &&  'white' === themeValue, 'span-btc':'white' === themeValue}"
                 @click="changeSelect('unit', 2)">
          {{contractInfo.unit.toUpperCase()}}
        </span>
        </st-row>
      </st-row> -->
      <st-row class="input"
              style="margin-top: 10px;">
        <span class="label" ><span>{{$t('message.calculate.openPrice')}}</span></span>
        <st-row class="item">
          <input v-model="order.openPrice" type="text"
                 @blur="priceErrorFn(order.openPrice, 'openPrice')"
                 @input="changePrice('openPrice')">
          <span class="unit">USDT</span>
        </st-row>
      </st-row>
      <st-row class="input"
              v-if="calculateType === 1"
              style="margin-top: 10px;">
        <span class="label"><span>{{$t('message.calculate.closePrice')}}</span></span>
        <st-row class="item">
          <input v-model="order.closePrice" type="text"
                 @blur="priceErrorFn(order.closePrice, 'closePrice')"
                 @input="changePrice('closePrice')">
          <span class="unit">USDT</span>
        </st-row>
      </st-row>
      <st-row class="input"
              v-if="!(calculateType === 2 && profitType === 1)"
              style="margin-top: 10px;">
        <span class="label"><span>{{$t('message.calculate.amount')}}</span></span>
        <st-row class="item" v-if="order.unit === 1">
          <input v-model="order.openAmount" type="text"
                 @blur="priceErrorFn(order.openAmount, 'openAmount')"
                 @input="changeAmount('openAmount')">
          <span class="unit">{{$t('message.createdEntrust.lot')}}</span>
        </st-row>
        <st-row class="item" v-if="order.unit === 2">
          <input v-model="order.openCoinAmount" type="text"
                 @blur="priceErrorFn(order.openCoinAmount, 'openCoinAmount')"
                 @input="changeAmount('openCoinAmount')">
          <span class="unit">{{ 'USDT' }}</span>
        </st-row>
      </st-row>
      <st-row class="input"
              v-if="calculateType === 2"
              style="margin-top: 10px;">
        <span v-if="profitType === 1" class="label"><span>{{$t('message.calculate.principalROR')}}</span></span>
        <span v-if="profitType === 2" class="label"><span>{{$t('message.calculate.goalProfit')}}</span></span>
        <st-row class="item" v-if="profitType === 1">
          <input v-model="order.profitRate" type="text"
                 @blur="priceErrorFn(order.profitRate, 'profitRate')"
                 @input="changeAmount('profitRate')">
          <span class="unit">%</span>
        </st-row>
        <st-row class="item" v-if="profitType === 2">
          <input v-model="order.profit" type="text"
                 @blur="priceErrorFn(order.profit, 'profit')"
                 @input="changeAmount('profit')">
          <span class="unit">{{ 'USDT' }}</span>
        </st-row>
      </st-row>
      <st-row class="input"
              v-if="calculateType === 3"
              style="margin-top: 10px;">
        <span class="label"><span>{{$t('message.calculate.balance')}}</span></span>
        <st-row class="item">
          <input v-model="order.balance" type="text"
                 @blur="priceErrorFn(order.balance, 'balance')"
                 @input="changeAmount('balance')">
          <span class="unit">{{ 'USDT' }}</span>
        </st-row>
      </st-row>
      <st-row class="buttons">
        <a :class="{'button1': true, 'useless': !useless}" @click="doCalculate(calculateType)">{{$t('message.calculate.calculate')}}</a>
      </st-row>
      <st-row class="result" v-if="showResult">
        <st-row class="container" direction="column">
          <st-row class="item first" style="height: 30px">{{$t('message.calculate.result')}}</st-row>
          <st-row class="item" justify="between" v-if="calculateType === 1">
            <p class="label">{{$t('message.calculate.margin')}}</p>
            <p class="res">{{showMarginRes}} {{ 'USDT' }}</p>
          </st-row>
          <st-row class="item" justify="between" v-if="calculateType === 1">
            <p class="label">{{$t('message.calculate.profit')}}</p>
            <p class="res">{{showProfitRes}} {{ 'USDT' }}</p>
          </st-row>
          <!-- <st-row class="item" justify="between" v-if="calculateType === 1">
            <p class="label">{{$t('message.calculate.profitRate')}}</p>
            <p class="res">{{profitRateRes}}%</p>
          </st-row> -->
          <st-row class="item" justify="between" v-if="calculateType === 1">
            <p class="label">{{ $t('message.calculate.positionROR') }}</p>
            <p class="res">{{positionProfitRate}}%</p>
          </st-row>
          <st-row class="item" justify="between" v-if="calculateType === 1">
            <p class="label">{{ $t('message.calculate.principalROR') }}</p>
            <p class="res">{{principalProfitRate}}%</p>
          </st-row>
          <st-row class="item" justify="between" v-if="calculateType === 2">
            <p class="label">{{$t('message.calculate.goalClosePrice')}}</p>
            <p class="res">{{goalClosePriceRes}}</p>
          </st-row>
          <st-row class="item" justify="between" v-if="calculateType === 3">
            <p class="label">{{$t('message.calculate.liquidationPrice')}}</p>
            <p class="res">{{liquidationRes}}</p>
          </st-row>
        </st-row>
      </st-row>
      <st-row class="warn" v-if="showWarn">
        <st-row class="warn-tips">
          {{warnText}}
        </st-row>
      </st-row>
      <st-row class="tips">
        {{$t('message.calculate.tips')}}
      </st-row>
    </st-row>
  </div>
</template>

<script>
  import LayerSelect from "./layer-select.vue";
  import bigdecimal from 'bigdecimal'
  import Utils from '@/assets/js/utils'
  export default {
    name: 'trade-calculate',
    components: {
      LayerSelect
    },
    data() {
      return {
        showLayerContracts: false,
        showLayerLeverage: false,
        presentContractName: 'BTCUSDT',
        presentContractValue: 1,
        presentLeverageName: '100X',
        presentLeverageValue: 100,
        list: [],
        leverageList: [
          {name: '2X', value: 2},
          {name: '3X', value: 3},
          {name: '5X', value: 5},
          {name: '10X', value: 10},
          {name: '20X', value: 20},
          {name: '33X', value: 33},
          {name: '50X', value: 50},
          {name: '100X', value: 100},
        ],
        calculateType: 1, // 计算方式  1：收益 2：目标价 3：强平价
        unit: 1, // 单位1：张 2：币
        side: 1, // 方向默认多：1
        profitType: 1, // 1:按收益率 2:按收益
        order: {
          contractId: 1,
          side: 1,
          leverage: 100,
          unit: 1,
          openPrice: null,
          closePrice: null,
          openAmount: null,
          openCoinAmount: null,
          balance: null,
          coinBalance: null,
          profitRate: null,
          profit: null,
        },
        coinAmount: null,
        showResult: false,
        showWarn: false,
        contractValue: 1, // 合约成数（合约的美元价值）
        marginRes: null,
        showMarginRes: null,
        profitRes: null,
        showProfitRes: null,
        profitRateRes: null,
        goalClosePriceRes: null,
        liquidationRes: null,
        positionProfitRate: null, // 仓位收益率
        principalProfitRate: null, // 本金收益率
        rate: 0.005, //
        useful: false, // useful true时正常 false灰色,
        warnText: null
      }
    },
    computed: {
      taker () {
        let arr = this.$store.state.user.wallet.commisionList || []
        let obj = arr.filter(item => {
          return item.contractId.toString() === this.$route.params.id
        })[0] || {}
        return obj.takerCommision
      },
      contractList () {
        return this.$store.state.market.contract || []
      },
      // 合约详情
      contractInfo () {
        let tmp = this.$store.state.market.contract.filter(item => {
          return Number(item.id) === Number(this.$route.params.id)
        })
        return tmp[0] || {}
      },
      // 仓位
      position() {
        return this.$store.state.market.position || {}
      },
      // 主题
      themeValue () {
        return this.$store.state.dictionary.theme
      },
      // 位数要求
      figure () {
        let tmp = this.$store.state.market.contract.filter(item => {
          return Number(item.id) === Number(this.contractInfo.id)
        })
        return tmp[0] && tmp[0].contractParam || {}
      },
      // useless 为true 时 灰色 false 为正常
      useless: {
        get () {
          if (this.calculateType === 1) {
            if (this.order.unit === 1) {
              // return true
              if (this.order.openPrice && this.order.closePrice && this.order.openAmount) {
                return true
              } else {
                return false
              }
            } else {
              if (this.order.openPrice && this.order.closePrice && this.order.openCoinAmount) {
                return true
              } else {
                return false
              }
            }

          }
          if (this.calculateType === 2) {
            if (this.profitType === 1) {
              if (this.order.openPrice && this.order.profitRate) {
                return true
              } else {
                return false
              }
            }
            if (this.profitType === 2) {
              if (this.order.unit === 1) {
                if (this.order.openPrice && this.order.openAmount && this.order.profit) {
                  return true
                } else {
                  return false
                }
              } else {
                if (this.order.openPrice && this.order.openCoinAmount && this.order.profit) {
                  return true
                } else {
                  return false
                }
              }
            }

          }
          if (this.calculateType === 3) {
            if (this.order.unit === 1) {
              // return true
              if (this.order.openPrice  && this.order.openAmount && this.order.balance) {
                return true
              } else {
                return false
              }
            } else {
              if (this.order.openPrice  && this.order.openCoinAmount && this.order.balance) {
                return true
              } else {
                return false
              }
            }
          }
        },
        set (newValue) {}
      }
    },
    methods: {
      removeSelected () {
        this.showLayerContracts = false
        this.showLayerLeverage = false
      },
      // 初始化所有数据
      init () {
        this.order.openPrice = null
        this.order.closePrice = null
        this.order.openAmount = null
        this.order.openCoinAmount = null
        this.order.profit = null
        this.order.profitRate = null
        this.order.balance = null
        this.showWarn = false
      },
      close () {
        this.$emit('closeCal')
      },
      showLayer (e, val) {
        e.stopPropagation()
        this[val] = !this[val]
      },
      formatContractList () {
        this.contractList.forEach(item => {
          let tmp = {}
          tmp.name = item.name
          tmp.value = item.id
          tmp.contractValue = item.value
          this.list.push(tmp)
        })
        this.changeContract(this.list[0])
      },
      changeContract(value) {
        this.presentContractName = value.name
        this.presentContractValue = value.value
        this.contractValue = value.contractValue
        this.init()
        this.showLayerContracts = false
      },
      changeLeverage(value) {
        this.showResult = false
        this.presentLeverageName = value.name
        this.presentLeverageValue = value.value
        this.order.leverage = value.value
        this.showLayerLeverage = false
      },
      changeSelect (type, value) {
        this.showResult = false
        // console.log(type)
        if (type === 'type') {
          this.order.side = value
        } else if (type === 'unit') {
          this.order.unit = value
        } else if (type === 'profit') {
          this.profitType = value
        } else if (type === 'calType') {
          this.init()
          this.calculateType = value
        }
      },
      doCalculate(type) {
        for (let i in this.order) {
          this.order[i] = Number(this.order[i])
        }
        if (!this.useless) {
          return
        }
        // console.log(type)
        switch (type) {
          case 1:
            // console.log('收益计算');
            this.calMargin()
            this.calProfit()
            // this.calProfitRate()
            this.positionProfitRateFun()
            this.principalProfitRateFun()
            break;
          case 2:
            // console.log('目标价值计算')
            this.calGoalClosePrice()
            break;
          case 3:
            // console.log('强平价')
            this.calLiquidation()
        }
        this.showResult = !this.showWarn
      },
      // 计算保证金
      calMargin() {
        let a = Utils.div(Utils.mul(this.order.openPrice, Utils.mul(this.order.openAmount, this.contractValue)), this.order.leverage)
        // 暂时注释掉，默认给个0
        // let b = Utils.mul(Utils.mul(this.order.openPrice, Utils.mul(this.order.openAmount, this.contractValue)), this.taker || 0)
        let b = Utils.mul(Utils.mul(this.order.openPrice, Utils.mul(this.order.openAmount, this.contractValue)), 0);
        this.showMarginRes = this.$filter.splitFormat(Utils.add(a, b), 8)
      },
      // 收益
      calProfit () {
        let a = this.order.side === 1 ? Utils.sub(this.order.closePrice, this.order.openPrice) : Utils.sub(this.order.openPrice, this.order.closePrice)
        this.showProfitRes = this.$filter.splitFormat(Utils.mul(a, Utils.mul(this.order.openAmount, this.contractValue)), 8)
      },
      // 收益率
      calProfitRate () {
        let a = this.order.side === 1 ? Utils.sub(this.order.closePrice, this.order.openPrice) : Utils.sub(this.order.openPrice, this.order.closePrice)
        this.profitRateRes = this.$filter.splitFormat(Utils.mul(Utils.div(a, this.order.openPrice), 100), 2)
      },
      // 仓位收益率
      /**
        * 多仓收益率 = (平仓价格 - 开仓价格) / 开仓价格
        * 空仓收益率 = (开仓价格 - 平仓价格) / 开仓价格
      */
      positionProfitRateFun () {
        if (this.order.side === 1) {
          this.positionProfitRate = this.$filter.splitFormat(Utils.mul(Utils.div(Utils.sub(this.order.closePrice,this.order.openPrice),this.order.openPrice),100), 2)
        } else {
          this.positionProfitRate = this.$filter.splitFormat(Utils.mul(Utils.div(Utils.sub(this.order.openPrice, this.order.closePrice),this.order.openPrice),100), 2)
        }
      },
      // 本金收益率
      /**
        * 多仓收益率 = ((平仓价格 - 开仓价格) / 开仓价格) * 杠杆
        * 空仓收益率 = ((开仓价格 - 平仓价格) / 开仓价格) * 杠杆
      */
      principalProfitRateFun () {
        if (this.order.side === 1) {
          this.principalProfitRate = this.$filter.splitFormat(Utils.mul(Utils.mul(Utils.div(Utils.sub(this.order.closePrice,this.order.openPrice),this.order.openPrice),this.presentLeverageValue),100), 2)
        } else {
          this.principalProfitRate = this.$filter.splitFormat(Utils.mul(Utils.mul(Utils.div(Utils.sub(this.order.openPrice, this.order.closePrice),this.order.openPrice),this.presentLeverageValue),100), 2)
        }
      },
      // 计算目标平仓价格
      /**
        * 目标价收益-本金收益率
        * 多仓目标平仓价格 = 开仓价格 * (盈利率 / 杠杆 + 1)
        * 空仓目标平仓价格 = 开仓价格 * (1 - 盈利率 / 杠杆)
        * 目标价收益-目标收益
        * 开仓数量 = 手数 * 乘数
        * 多仓目标平仓价格 = 目标收益 / 手数 * 乘数 + 开仓价格
        * 空仓目标平仓价格 = 开仓价格 - 目标收益 / 手数 * 乘数
      */
      calGoalClosePrice () {
        
        if (this.profitType === 1) {
          if (this.order.side === 1) {
            // console.log(Utils.mul(this.order.openPrice,Utils.add(Utils.div(Utils.div(this.order.profitRate,100),this.presentLeverageValue),1)))
            this.goalClosePriceRes = this.$filter.splitFormat(Utils.mul(this.order.openPrice,Utils.add(Utils.div(Utils.div(this.order.profitRate,100),this.presentLeverageValue),1)), 8)
          } else {
            // console.log(Utils.mul(this.order.openPrice,Utils.sub(1,Utils.div(Utils.div(this.order.profitRate,100),this.presentLeverageValue))))
            this.goalClosePriceRes = this.$filter.splitFormat(Utils.mul(this.order.openPrice,Utils.sub(1,Utils.div(Utils.div(this.order.profitRate,100),this.presentLeverageValue))), 8)
          }
        } else {
          if (this.order.side === 1) {
            this.goalClosePriceRes = this.$filter.splitFormat(Utils.add(Utils.div(this.order.profit, Utils.mul(this.order.openAmount, this.contractValue)), this.order.openPrice), 8)
          } else {
            this.goalClosePriceRes = this.$filter.splitFormat(Utils.sub(this.order.openPrice, Utils.div(this.order.profit, Utils.mul(this.order.openAmount, this.contractValue))), 8)
          }
        }
      },
      // 强制平仓价格
      /**
        * 多仓强平价 = (开仓价格 * 手数 * 乘数 * MM - 合约余额) / (手数 * 乘数) + 开仓价格
        * 空仓强平价 = 开仓价格 - (开仓价格 * 手数 * 乘数 * MM - 合约余额) / (手数 * 乘数)
        * 强平价格小于0，表示不会爆仓
      */
      // 强平价计算
      calLiquidation () {
        if (this.order.side === 1) {
          this.liquidationRes = this.$filter.splitFormat(Utils.add(Utils.div(Utils.sub(Utils.mul(Utils.mul(Utils.mul(this.order.openPrice,this.order.openAmount),this.contractValue),this.rate),this.order.balance),Utils.mul(this.order.openAmount,this.contractValue)),this.order.openPrice), 8)
        } else {
          // console.log(Utils.mul(Utils.mul(this.order.openPrice,this.order.openAmount),this.contractValue))
          // console.log(Utils.sub(Utils.mul(Utils.mul(Utils.mul(this.order.openPrice,this.order.openAmount),this.contractValue),this.rate),this.order.balance))
          // console.log(Utils.div(Utils.sub(Utils.mul(Utils.mul(Utils.mul(this.order.openPrice,this.order.openAmount),this.contractValue),this.rate),this.order.balance),Utils.mul(this.order.openAmount,this.contractValue)))
          // console.log(Utils.sub(this.order.openPrice,Utils.div(Utils.sub(Utils.mul(Utils.mul(Utils.mul(this.order.openPrice,this.order.openAmount),this.contractValue),this.rate),this.order.balance),Utils.mul(this.order.openAmount,this.contractValue))))
          // console.log(Utils.add(Utils.div(Utils.sub(Utils.mul(Utils.mul(Utils.mul(this.order.openPrice,this.order.openAmount),this.contractValue),this.rate),this.order.balance),Utils.mul(this.order.openAmount,this.contractValue)),this.order.openPrice))
          this.liquidationRes = this.$filter.splitFormat(Utils.sub(this.order.openPrice,Utils.div(Utils.sub(Utils.mul(Utils.mul(Utils.mul(this.order.openPrice,this.order.openAmount),this.contractValue),this.rate),this.order.balance),Utils.mul(this.order.openAmount,this.contractValue))), 8)
        }
      },
      // calLiquidation () {
      //   if (this.order.side === 1) {
      //     if (this.order.unit === 1) {
      //       this.liquidationRes = this.order.openPrice / (1 - (this.coinAmount * this.rate - this.order.balance) / this.coinAmount)
      //     } else {
      //       this.liquidationRes = this.order.openPrice / (1 - (this.order.openCoinAmount * this.rate - this.order.balance) / this.order.openCoinAmount)
      //     }
      //   } else {
      //     if (this.order.unit === 1) {
      //       this.liquidationRes = this.order.openPrice / (1 + (this.coinAmount * this.rate - this.order.balance) / this.coinAmount)
      //     } else {
      //       this.liquidationRes = this.order.openPrice / (1 + (this.order.openCoinAmount * this.rate - this.order.balance) / this.order.openCoinAmount)
      //     }
      //   }
      //   this.liquidationRes = this.$filter.splitFormat(this.liquidationRes, 8)
      //   if (this.liquidationRes < 0) {
      //     this.liquidationRes = 100000000
      //   }
      //   // console.log(this.liquidationRes)
      // },
      // 验证价格
      // index = 1 非计划委托 2 触发价格 3执行价格
      changePrice (index) {
        if (index === 'openPrice') {
          this.order.openPrice = this.retainDecimals(
            this.order.openPrice,
            {integer: this.figure.entrustPriceInteger, decimal: this.figure.entrustPriceFloat},
            'price'
          )
        }
        switch (index) {
          case 'openPrice':
            this.order.openPrice = this.retainDecimals(
              this.order.openPrice,
              {integer: this.figure.entrustPriceInteger, decimal: this.figure.entrustPriceFloat},
              'price'
            )
            break;
          case 'closePrice':
            this.order.closePrice = this.retainDecimals(
              this.order.closePrice,
              {integer: this.figure.entrustPriceInteger, decimal: this.figure.entrustPriceFloat},
              'price'
            )
            break;
        }
        return
        if (index === 3) {
          this.entrustPlanOrderForm.price = this.retainDecimals(
            this.entrustPlanOrderForm.price,
            {integer: this.figure.entrustPriceInteger, decimal: this.figure.entrustPriceFloat},
            'price'
          )
          this.priceErrorFn(3)
        } else if (index === 2) {
          this.entrustPlanOrderForm.triggerPrice = this.retainDecimals(
            this.entrustPlanOrderForm.triggerPrice,
            {integer: this.figure.entrustPriceInteger, decimal: this.figure.entrustPriceFloat},
            'price'
          )
          this.priceErrorFn(2)
        } else {
          this.orderForm.price = this.retainDecimals(
            this.orderForm.price,
            {integer: this.figure.entrustPriceInteger, decimal: this.figure.entrustPriceFloat},
            'price'
          )
          this.priceErrorFn()
        }
      },
      // 验证数量
      changeAmount (index, type) {
        switch (index) {
          case 'openAmount':
            this.order.openAmount = this.numLimit(this.order.openAmount, this.figure.entrustSize)
            break;
          case 'openCoinAmount':
            this.order.openCoinAmount = this.retainDecimals(this.order.openCoinAmount, this.figure.entrustSize)
            break;
          case 'balance':
            this.order.balance = this.retainDecimals(this.order.balance, this.figure.entrustSize)
            break;
          case 'profit':
            this.order.profit = this.retainDecimals(this.order.profit, this.figure.entrustSize)
            break;
          case 'profitRate':
            this.order.profitRate = this.retainDecimals(this.order.profitRate, this.figure.entrustSize)
            break;
        }
        return
        this.transformSize()
        this.orderForm.size = this.numLimit(this.orderForm.size, this.figure.entrustSize)
        this.sizeErrorFn()
      },

      priceErrorFn (index, type) {
        // console.log(123, index)
        if (index === null ) {
          return
        }
        if (index.toString() === '0' || index.toString() === '0.' || index.toString() === '0.0') {
          this.order[type] = null
        } else {
          this.useful = true
        }
        return
        if (this.priceType) {
          if (this.presentOrderTypeValue === 3) {
            if (index === 3) {
              this.priceError = this.numberEightVerity(this.entrustPlanOrderForm.price)
            } else if (index === 2) {
              // console.log('priceError 222')
              this.priceError = this.numberEightVerity(this.entrustPlanOrderForm.triggerPrice)
            } else {
              this.priceError = true
            }
          } else {
            this.priceError = this.numberEightVerity(this.orderForm.price)
          }
        } else {
          this.priceError = true
        }
        if (this.orderForm.price === '0.' || this.orderForm.price === '0.0') {
          // console.log('0.0.0.0.00.0.')
          this.priceError = false
        }
        return !!this.priceError
      },
      // 更改不合法字符
      retainDecimals (value, obj = {}, type) {
        value = value.toString()
        value = value.replace('。', '.')
        // console.log(value ,obj)
        // // console.log('更改不合法字符',value, obj)
        if (!value) return value
        value = value.toString()
        let decimals = ''
        if (value.indexOf('.') > 0) {
          let decimalsRe = new RegExp('[.]{1}[0-9]{0,' + (obj.decimal || 8) + '}')
          let decimalsExec = decimalsRe.exec(value)
          decimalsExec && (decimals = decimalsExec[0])
        }
        let v = 0
        let re = new RegExp('^0{1}|[1-9]{1}[0-9]{0,' + (obj.integer - 1 || 7) + '}')
        v = re.exec(value)
        let n = ''
        if (v) {
          n = v[0]
        }
        // // console.log(222, last)

        // console.log(333, decimals)
        return n + decimals
      },
      // 验证数字
      numberEightVerity: (value, num = 8) => {
        if (!value || !Number(value)) {
          // return '请输入大于0数字'
          return false
        }
        let rg = new RegExp('^[0-9]{0,9}([.]{1}[0-9]{0,' + num + '}){0,1}$')
        if (!rg.test(value)) {
          // return '请输入最多包含' + num + '位小数的数字'
          return false
        }
        // return ''
        return true
      },
      // 只能为整数
      numLimit (val, len = 9) {
        // 过滤非数字
        if (!len) val = val.replace(/\D/gi, '')
        if (val.indexOf('.') > -1) {
          let index = val.indexOf('.')
          val = val.replace(/\D/gi, '').slice(0, index) + '.' + val.replace(/\D/gi, '').slice(index)
        } else val = val.replace(/\D/gi, '')
        // 过滤首位0
        val = val.replace(/^[0]+(?=\d)/, '')
        // 限制小数位
        if (val.indexOf('.') >= 0) {
          val = val.slice(0, val.indexOf('.'))
        }
        if (val.length > len) {
          val = val.slice(0, len)
        }
        // if (val.indexOf('.') >= 0 && val.length - val.indexOf('.') > len + 1) val = val.slice(0, val.indexOf('.') + len + 1)
        return val
      }
    },
    mounted () {
      this.formatContractList()
    }
  }
</script>

<style lang="less" scoped>
  @import "../../assets/css/theme";
  .trade-calculate {
    .themeBlack();
    // position: fixed;
    // bottom: 10px;
    right: 20px;
    width: 370px;
    background-color: @calculateBgColor;
    // background-color: red;
    z-index: 999999;
    .container1 {
      margin-right: 0;
      .title {
        position: relative;
        width: 370px;
        height: 36px;
        // background: red;
        background: @calculateTitleBgColor;
        .text {
          display: inline-block;
          margin-left: 20px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          font-size: 14px;
          color: #fff;
        }
        .icon-close {
          position: absolute;
          top: 10px;
          right: 12px;
          display: inline-block;
          width: 22px;
          height: 22px;
          background-image: url("../../assets/images/wrong.png");
          background-size: 50% 50%;
          background-repeat: no-repeat;
          background-position: 5px 5px;
          cursor: pointer;
          transition: transform 0.2s ease-in-out;
          &:hover {
            transform: rotate(90deg);
          }
        }
        .arrow {
          position: absolute;
          right: -4px;
          bottom: 14px;
          width: 4px;
          height: 4px;
          border-top: 4px solid transparent;
          border-left: 4px solid @calculateTitleBgColor;
          border-bottom: 4px solid transparent;
        }
      }
      .tags {
        display: flex;
        align-items: stretch;
        font-size: 0;
        margin: 20px auto 10px auto;
        background: @calculateItemBgColor;
        border-radius: 3px;
        cursor: pointer;
        width: 258px;
        p {
          display: table-cell;
          min-height: 100%;
          width: 149px;
          vertical-align: middle;
          border: 1px solid #39425E;
          font-size: 12px;
          line-height: 12px;
          margin-left: -1px;
          padding: 10px;
          position: relative;
          display: inline-block;
          text-align: center;
          color: #7889A9;
          &:first-child {
            margin-left: 0;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
          }
          &:last-child {
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
          }
        }
        .active {
          z-index: 1000000;
          background: @calculateActiveBgColor;
          color: #CBD7F0;
        }
      }
      .contract {
        margin-top: 10px;
        .label {
          display: inline-block;
          margin-left: 56px;
          width: 68px;
          height: 32px;
          line-height: 32px;
          font-size: 12px;
          color: #7889A9;
        }
        p {
          position: relative;
          padding-left: 10px;
          width: 188px;
          height: 32px;
          line-height: 32px;
          // background-color: #21233b;
          background-color: @calculateItemBgColor;
          border: 1px solid @calculateItemBgColor;
          border-radius: 3px;
          font-size: 12px;
          span {
            color: @fontColor;
          }
          .icon {
            position: absolute;
            display: inline-block;
            right: 10px;
            top: 12px;
            width: 10px;
            height: 6px;
            background-image: url("../../assets/images/select.jpg");
            transition: all .5s linear;
          }
          .transition-icon {
            transform: rotate(180deg);
            -ms-transform: rotate(180deg); 	/* IE 9 */
            -moz-transform: rotate(180deg); 	/* Firefox */
            -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
            -o-transform: rotate(180deg); 	/* Opera */
          }
        }
        .value {
          cursor: pointer;
          &:hover {
            border: 1px solid #39425E;
          }
          &:focus {
            border: 1px solid #39425E;
          }
        }
        .layer-select {
          right: 0;
        }
      }
      .type {
        margin-top: 10px;
        // margin-left: 56px;
        .label {
          display: inline-block;
          margin-left: 56px;
          width: 68px;
          height: 32px;
          line-height: 32px;
          font-size: 12px;
          color: #7889A9;
        }
        .type-item {
          position:relative;
          width: 190px;
          background: @calculateItemBgColor;
          span {
            position: relative;
            display: inline-block;
            width: 95px;
            line-height: 12px;
            padding: 10px 0;
            font-size: 12px;
            color: #7889A9;
            text-align: center;
            cursor: pointer;
            &:first-child {
              border-top-left-radius: 3px;
              border-bottom-left-radius: 3px;
            }
            &:last-child {
              margin-left: -1px;
              border-top-right-radius: 3px;
              border-bottom-right-radius: 3px;
            }
          }
          .active {
            z-index: 1000000;
            color: @fontColor;
            background-color: @calculateActiveBgColor;
          }
        }
      }
      .profit-type {
        display: flex;
        align-items: stretch;
        margin-top: 10px;
        margin-left: 56px;
        background: @calculateItemBgColor;
        .border-radius(@radius: 3px);
        span {
          min-height: 100%;
          position: relative;
          display: inline-block;
          width: 129px;
          line-height: 12px;
          padding: 10px 0;
          font-size: 12px;
          color: #7889A9;
          text-align: center;
          cursor: pointer;
          &:first-child {
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
          }
          &:last-child {
            margin-left: -1px;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
          }
        }
        .active {
          z-index: 1000000;
          color: @fontColor;
          background: @calculateActiveBgColor;
        }
      }
      .leverage {
        margin-top: 10px;
        .label {
          display: inline-block;
          margin-left: 56px;
          width: 68px;
          height: 32px;
          line-height: 32px;
          font-size: 12px;
          color: #7889A9;
        }
        p {
          position: relative;
          padding-left: 10px;
          width: 188px;
          height: 32px;
          line-height: 32px;
          background-color: @calculateItemBgColor;
          border: 1px solid @calculateItemBgColor;
          border-radius: 3px;
          font-size: 12px;
          span {
            color: @fontColor;
          }
          .icon {
            position: absolute;
            display: inline-block;
            right: 10px;
            top: 12px;
            width: 10px;
            height: 6px;
            background-image: url("../../assets/images/select.jpg"); transition: all .5s linear;
          }
          .transition-icon {
            transform: rotate(180deg);
            -ms-transform: rotate(180deg); 	/* IE 9 */
            -moz-transform: rotate(180deg); 	/* Firefox */
            -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
            -o-transform: rotate(180deg); 	/* Opera */
          }

        }
        .value {
          cursor: pointer;
          &:hover {
            border: 1px solid #39425E;
          }
          &:focus {
            border: 1px solid #39425E;
          }
        }
        .layer-select {
          right: 0;
        }
      }
      .unit {
        margin-top: 10px;
        // margin-left: 56px;
        .label {
          display: inline-block;
          margin-left: 56px;
          width: 68px;
          height: 32px;
          line-height: 32px;
          font-size: 12px;
          color: #7889A9;
        }
        .unit-item {
          // position:relative;
          width: 190px;
          background: @calculateItemBgColor;
          .border-radius(@radius: 3px);
          span {
            display: inline-block;
            width: 50%;
            height: 32px;
            line-height: 32px;
            font-size: 12px;
            color: #7889A9;
            text-align: center;
            cursor: pointer;
          }
          .span-more {
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
            border-right: none;
          }
          .span-less {
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
          }
          .active {
            // border-bottom: 1px solid #4a4c7c;
            color: @fontColor;
            background-color: @calculateActiveBgColor;
          }
        }
      }
      .input {
        margin-top: 10px;
        .label {
          // display: inline-block;
          display: table;
          margin-left: 56px;
          width: 68px;
          height: 32px;
          // line-height: 32px;
          font-size: 12px;
          color: #7889A9;
          span{
            line-height: 12px;
            display: table-cell;
            vertical-align: middle;
          }
        }
        .item {
          position: relative;
          width: 190px;
          // .flex-grow();
          height: 32px;
          // border: 1px solid #253a5e;
          input {
            width: 100%;
            height: 100%;
            padding-left: 16px;
            border: 1px solid @calculateItemBgColor;
            // border-style: solid;
            border-radius: 3px;
            background: @calculateItemBgColor;
            color: @fontColor;
            font-size: 16px;
            text-align: left;
            .placeholder({color: #6c85ae; font-size: 12px;});
            &:hover {
              border: 1px solid #39425E;
            }
            &:focus {
              border: 1px solid #39425E;
            }
          }
          span {
            position: absolute;
            right: 15px;
            top: -8px;
            display: block;
            width: 32px;
            // background: #243b63;
            line-height: 32px;
            font-size: 12px;
            color: #7889A9;
            // text-align: center;
            text-align: right;
            height: 100%;
          }
          .special {
            right: 20px;
          }
        }
        .error {
          position: absolute;
          bottom: -18px;
          left: 0;
          width: 100%;
          text-align: right;
          font-size: 12px;
          color: #d32f2f;
        }
      }
      .buttons {
        margin-top: 30px;
        margin-left: 56px;
        .button1 {
          display: inline-block;
          width: 258px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          font-size: 14px;
          color: #fff;
          background: #7E9EFD;
          border-radius: 3px;
          &:hover {
            background: #6080E0;
          }
        }
        .useless {
          color: rgba(255,255,255,0.5);
          &:hover {
            background: #7E9EFD;
          }
        }
      }
      .result {
        margin-top: 20px;
        margin-left: 56px;
        width: 258px;
        // height: 140px;
        padding-top: 10px;
        /*background: #1C1C36;*/
        .first {
          height: 30px;
          font-size: 14px;
          color: #CBD7F0;
        }
        .item {
          width: 100%;
          height: 25px;
          .label {
            font-size: 12px;
            color: #7889A9;
          }
          .res {
            font-size: 16px;
            color: #cbd7f0;
          }
        }
      }
      .warn {
        margin-left: 56px;
        width: 258px;
        // height: 140px;
        padding: 14px 8px 5px;
        /*background: #1C1C36;*/
        .warn-tips {
          color: #cbd7f0;
          font-size: 14px;
        }
      }
      .tips {
        width: 258px;
        margin-top: 8px;
        margin-left: 56px;
        margin-bottom: 24px;
        font-size: 12px;
        color: #7889A9;
        // word-wrap: break-word;
      }
    }
  }
  .trade-calculate-white {
    .themeWhite();
    position: absolute;
    // bottom: 10px;
    right: 36px;
    width: 370px;
    background-color: @boxBgColor;
    // background-color: red;
    box-shadow: 0 4px 10px 0 rgba(89,122,185,0.15);
    z-index: 999999;
    .container1 {
      margin-right: 0;
      .title {
        position: relative;
        width: 370px;
        height: 36px;
        // background: red;
        background: @boxBgColor;
        box-shadow: 0 1px 10px 0 rgba(89,122,185,0.07);
        .text {
          display: inline-block;
          margin-left: 20px;
          height: 36px;
          line-height: 36px;
          text-align: center;
          font-size: 14px;
          color: @calculateFontColor;
        }
        .icon-close {
          position: absolute;
          top: 10px;
          right: 12px;
          display: inline-block;
          width: 22px;
          height: 22px;
          background-image: url("../../assets/images/wrong1.jpg");
          background-size: 50% 50%;
          background-repeat: no-repeat;
          background-position: 5px 5px;
          cursor: pointer;
          transition: transform 0.2s ease-in-out;
          &:hover {
            transform: rotate(90deg);
          }
        }
        .arrow {
          position: absolute;
          right: -4px;
          bottom: 14px;
          width: 4px;
          height: 4px;
          border-top: 4px solid transparent;
          border-left: 4px solid #fff;
          border-bottom: 4px solid transparent;
        }
      }
      .tags {
        display: flex;
        align-items: stretch;
        font-size: 0;
        margin: 20px auto 10px auto;
        background: #fff;
        border-radius: 3px;
        cursor: pointer;
        width: 258px;
        p {
          min-height: 100%;
          width: 149px;
          vertical-align: middle;
          border: 1px solid #DEE6F3;
          font-size: 12px;
          line-height: 12px;
          margin-left: -1px;
          padding: 10px;
          position: relative;
          display: inline-block;
          text-align: center;
          color: #7889A9;
          &:first-child {
            margin-left: 0;
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
          }
          &:last-child {
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
          }
        }
        .active {
          z-index: 1000000;
          color: #597AB9;
          border-color: rgba(89, 122, 185, .6);
        }
      }
      .contract {
        margin-top: 10px;
        .label {
          display: inline-block;
          margin-left: 56px;
          width: 68px;
          height: 32px;
          line-height: 32px;
          font-size: 12px;
          color: #7889A9;
        }
        p {
          position: relative;
          padding-left: 10px;
          width: 188px;
          height: 32px;
          line-height: 32px;
          // background-color: #21233b;
          background-color: @boxBgColor;
          border: 1px solid @calculateItemBorderColor;
          border-radius: 3px;
          font-size: 12px;
          span {
            color: @calculateItemFontColor;
          }
          .icon {
            position: absolute;
            display: inline-block;
            right: 10px;
            top: 12px;
            width: 9px;
            height: 6px;
            background-image: url("../../assets/images/newUI/operate/sjx-white.svg"); transition: all .5s linear;
          }
          .transition-icon {
            transform: rotate(180deg);
            -ms-transform: rotate(180deg); 	/* IE 9 */
            -moz-transform: rotate(180deg); 	/* Firefox */
            -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
            -o-transform: rotate(180deg); 	/* Opera */
          }
        }
        .value {
          cursor: pointer;
          &:hover {
            border: 1px solid #B9C7E2;
          }
          &:focus {
            border: 1px solid #B9C7E2;
          }
        }
        .layer-select {
          right: 0;
        }
      }
      .type {
        margin-top: 10px;
        // margin-left: 56px;
        .label {
          display: inline-block;
          margin-left: 56px;
          width: 68px;
          height: 32px;
          line-height: 32px;
          font-size: 12px;
          color: #7889A9;
        }
        .type-item {
          // position:relative;
          background-color: @boxBgColor;
          display: flex;
          font-size: 0;
          span {
            position: relative;
            display: inline-block;
            width: 95px;
            line-height: 12px;
            padding: 10px 0;
            font-size: 12px;
            color: #7889A9;
            text-align: center;
            cursor: pointer;
            border: 1px solid @calculateItemBorderColor;
            &:first-child {
              border-top-left-radius: 3px;
              border-bottom-left-radius: 3px;
            }
            &:last-child {
              margin-left: -1px;
              border-top-right-radius: 3px;
              border-bottom-right-radius: 3px;
            }
          }
          .active {
            z-index: 1000000;
            color: #597AB9;
            border-color: rgba(89, 122, 185, .6);
          }
        }
      }
      .profit-type {
        display: flex;
        margin-top: 10px;
        margin-left: 56px;
        font-size: 0;
        background-color: @boxBgColor;
        span {
          position: relative;
          display: inline-block;
          width: 129px;
          line-height: 12px;
          padding: 10px 0;
          font-size: 12px;
          color: #7889A9;
          text-align: center;
          cursor: pointer;
          border: 1px solid @calculateItemBorderColor;
          &:first-child {
            border-top-left-radius: 3px;
            border-bottom-left-radius: 3px;
          }
          &:last-child {
            margin-left: -1px;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
          }
        }
        .active {
          z-index: 1000000;
          color: #597AB9;
          border-color: rgba(89, 122, 185, .6);
        }
        .ru-span-less{
          height: 46px;
        }
      }
      .leverage {
        margin-top: 10px;
        .label {
          display: inline-block;
          margin-left: 56px;
          width: 68px;
          height: 32px;
          line-height: 32px;
          font-size: 12px;
          color: #7889A9;
        }
        p {
          position: relative;
          padding-left: 10px;
          width: 188px;
          height: 32px;
          line-height: 32px;
          background-color: @boxBgColor;
          border: 1px solid @calculateItemBorderColor;
          border-radius: 3px;
          font-size: 12px;
          span {
            color: @calculateItemFontColor;
          }
          .icon {
            position: absolute;
            display: inline-block;
            right: 10px;
            top: 12px;
            width: 9px;
            height: 6px;
            background-image: url("../../assets/images/newUI/operate/sjx-white.svg"); transition: all .5s linear;
          }
          .transition-icon {
            transform: rotate(180deg);
            -ms-transform: rotate(180deg); 	/* IE 9 */
            -moz-transform: rotate(180deg); 	/* Firefox */
            -webkit-transform: rotate(180deg); /* Safari 和 Chrome */
            -o-transform: rotate(180deg); 	/* Opera */
          }
        }
        .value {
          cursor: pointer;
          &:hover {
            border: 1px solid #B9C7E2;
          }
          &:focus {
            border: 1px solid #B9C7E2;
          }
        }
        .layer-select {
          right: 0;
        }
      }
      .unit {
        margin-top: 10px;
        // margin-left: 56px;
        .label {
          display: inline-block;
          margin-left: 56px;
          width: 68px;
          height: 32px;
          line-height: 32px;
          font-size: 12px;
          color: #7889A9;
        }
        .unit-item {
          // position:relative;
          display: flex;
          font-size: 0;
          background-color: @boxBgColor;
          span {
            position: relative;
            display: inline-block;
            width: 95px;
            line-height: 12px;
            padding: 10px 0;
            font-size: 12px;
            color: #7889A9;
            text-align: center;
            cursor: pointer;
            border: 1px solid @calculateItemBorderColor;
            &:first-child {
              border-top-left-radius: 3px;
              border-bottom-left-radius: 3px;
            }
            &:last-child {
              margin-left: -1px;
              border-top-right-radius: 3px;
              border-bottom-right-radius: 3px;
            }
          }
          .active {
            z-index: 1000000;
            color: #597AB9;
            border-color: rgba(89, 122, 185, .6);
          }
        }
      }
      .input {
        margin-top: 10px;
        .label {
          // display: inline-block;
          display: table;
          margin-left: 56px;
          width: 68px;
          height: 32px;
          // line-height: 32px;
          font-size: 12px;
          color: #7889A9;
          span{
            line-height: 12px;
            display: table-cell;
            vertical-align: middle;
          }
        }
        .item {
          position: relative;
          width: 190px;
          // .flex-grow();
          height: 32px;
          // border: 1px solid #253a5e;
          input {
            width: 100%;
            height: 100%;
            padding-left: 16px;
            border: 1px solid #DEE6F3;
            // border-style: solid;
            border-radius: 3px;
            background: @boxBgColor;
            color: @calculateItemFontColor;
            font-size: 16px;
            text-align: left;
            .placeholder({color: #6c85ae; font-size: 12px;});
            &:hover {
              border: 1px solid #B9C7E2;
            }
            &:focus {
              border: 1px solid #B9C7E2;
            }
          }
          span {
            position: absolute;
            right: 15px;
            top: -8px;
            display: block;
            width: 32px;
            // background: #243b63;
            line-height: 32px;
            font-size: 12px;
            color: #7889A9;
            // text-align: center;
            text-align-last: right;
            height: 100%;
          }
          .special {
            right: 20px;
          }
        }
        .error {
          position: absolute;
          bottom: -18px;
          left: 0;
          width: 100%;
          text-align: right;
          font-size: 12px;
          color: #d32f2f;
        }
      }
      .buttons {
        margin-top: 30px;
        margin-left: 56px;
        .button1 {
          display: inline-block;
          width: 258px;
          height: 32px;
          line-height: 32px;
          text-align: center;
          font-size: 14px;
          color: #fff;
          background: #597AB9;
          border-radius: 3px;
          &:hover {
            background: #4B6AA5;
          }
        }
        .useless {
          color: rgba(255,255,255,0.5);
          &:hover {
            background: #597AB9;
          }
        }
      }
      .result {
        margin-top: 20px;
        margin-left: 56px;
        width: 258px;
        // height: 140px;
        padding-top: 10px;
        background: @boxBgColor;
        .first {
          height: 30px;
          font-size: 14px;
          color: @calculateItemFontColor;
        }
        .item {
          width: 100%;
          height: 25px;
          .label {
            font-size: 12px;
            color: #7889A9;
          }
          .res {
            font-size: 16px;
            color: @calculateItemFontColor;
          }
        }
      }
      .warn {
        margin-left: 56px;
        width: 258px;
        // height: 140px;
        padding: 14px 8px 5px;
        background: @boxBgColor;
        .warn-tips {
          color: #7889A9;
          font-size: 14px;
        }
      }
      .tips {
        width: 258px;
        margin-top: 8px;
        margin-left: 56px;
        margin-bottom: 24px;
        font-size: 12px;
        color: #7889A9;
        // word-wrap: break-word;
      }
    }
  }
</style>