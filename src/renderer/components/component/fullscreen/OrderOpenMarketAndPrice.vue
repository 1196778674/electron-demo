<template>
	<!-- 市价/限价 -->
	<div class="market-price">
		<!-- 买入 -->
		<div class="buy">
			<v-form
				:form="Form"
				:rules="Rules"
				ref="Form"
			>
				<v-form-item
					:label="$t('message.createdEntrust.price')"
					:unit="groupValue === 2 ? $t('message.version3.marketPrice') : 'USDT'"
					prop="price"
          :select="true"
          :style="{'z-index': 9}"
				>
          <!-- <div class="market-full-price"> -->
            <v-input
              v-model="Form.price"
              limit="number"
              :precision="figure.indexPriceFloat || 4"
              :disabled="groupValue === 2"
              :max="99999999"
              :animation.sync="animation"
            ></v-input>
            <v-select
              slot="select-unit"
              class="selects"
              v-model="groupValue"
              :select-data="marketData"
              content-key="name"
              value-key="value"
            ></v-select>
          <!-- </div> -->
					
				</v-form-item>
				<v-form-item
					class="number"
					:label="$t('message.calculate.amount')"
					prop="number"
					:unit="$t('message.createdEntrust.lot')"
					:tip="true"
					:tipText="
            $t('message.createdEntrust.hand', {
              hand: $t(`message.createdEntrust.lot`),
              name: currentContract.name,
              value: currentContract.value,
              tableName: currentContract.tableName && currentContract.tableName.toUpperCase()
            })
          "
				>
					<v-input
						v-model="Form.number"
						limit="number"
						:max="99999999"
					></v-input>
					<span
						class="amount"
						v-if="Number(Amount) > 0 && (Amount + '').length <= 6"
					>
          (= {{ Amount }} {{ currentContract.tableName && currentContract.tableName.toUpperCase() }})</span
					>
				</v-form-item>
			</v-form>
			<v-slider
        :style="{'margin-top': '20px'}"
        type="default"
				v-model="buySlideValue"
				:disabled="!userInfo || !buyOpen"
				:max="buyOpen"
			></v-slider>
      <div class="info-position-value">
        <div class="info buy-info">
          <div class="open">
            {{ $t('message.createdEntrust.buyable')
            }}<span>{{ `${buyOpen} ${$t(`message.createdEntrust.lot`)}` }}</span>
          </div>
          <div class="positionValue">
            <v-tip
              class="tip"
              :label="$t('message.createdEntrust.positionValue')"
              :tipText="$t('message.usdtTips.positionValue')"
              :width="306"
            ></v-tip>
            <span>{{ buyPositionValue | splitFormat(figure.indexPriceFloat || 4) }} USDT</span>
          </div>
        </div>
        <div class="nbsp"></div>
        <div class="info sell-info">
          <div class="open">
            {{ $t('message.createdEntrust.buyable')
            }}<span>{{ `${sellOpen} ${$t(`message.createdEntrust.lot`)}` }}</span>
          </div>
          <div class="positionValue">
            <v-tip
              class="tip"
              :label="$t('message.createdEntrust.positionValue')"
              :tipText="$t('message.usdtTips.positionValue')"
              :width="306"
            ></v-tip>
            <span>{{
                sellPositionValue | splitFormat(figure.indexPriceFloat || 4)
              }}
              USDT</span>
          </div>
        </div>
      </div>
			
      <div class="order-button">
        <v-color-button
          
          type="buy"
          :button-text="$t('message.version3.buy')"
          :disabled="!buyOpen || ButtonCanClick"
          :login="!!userInfo"
          @click="buySubmit"
        >
          <v-tip
            class="table-tip"
            :label="$t('message.version3.buy')"
            :tipText="$t('message.usdtTips.openMore')"
            placement="top"
          ></v-tip>
        </v-color-button>
        <div class="nbsp"></div>
        <v-color-button
          type="sell"
          :button-text="$t('message.version3.sell')"
          :disabled="!sellOpen || ButtonCanClick"
          :login="!!userInfo"
          @click="sellSubmit"
        >
          <v-tip
            class="table-tip"
            :label="$t('message.version3.sell')"
            :tipText="$t('message.usdtTips.openTheEmpty')"
            placement="top"
          ></v-tip>
        </v-color-button>
      </div>
		</div>
	</div>
</template>

<script>
import Utils from '@/utils/utils'
import SwapsApi from '@/api/swapsApi'
import { CONFIRM_OPEN_BUY,CONFIRM_OPEN_SELL } from '@/data/noTip'
import { dataMixin, systemMixin, userMixin } from '@/mixins'

export default {
  name: 'OrderBuyMarketAndPrice',
  mixins: [systemMixin, dataMixin, userMixin],
  props: {
    leverageValue: {
      type: Number
    }
  },
  data() {
    return {
      groupValue: 1,
      // 买入表单
      Form: {
        price: '',
        number: ''
      },
      // 买入可开手数量
      buyOpen: 0,
      // 卖出可开手数量
      sellOpen: 0,
      //  买入仓位价格
      buyPositionValue: 0,
      // 卖出仓位价格
      sellPositionValue: 0,
      // 按钮防多次点击开关
      buttonSwitch: false,
      // input 框数字进入动画
      animation: false,
    }
  },
  computed: {
    marketData () {
      return [
        {
          name: this.$t('message.createdEntrust.limit'),
          value: 1
        },
        {
          name: this.$t('message.createdEntrust.market'),
          value: 2
        },
      ]
    },
    // 指数价格
    indexPrice() {
      return this.currentMarket.indexPrice
    },
    // 当前的 Taker
    currentTaker() {
      let taker = this.wallet.commisionList.find(item => item.contractId == this.currentContract.id) || {}
      return taker.takerCommision || 0
    },
    // 买入单位换算  = {} BTC
    Amount() {
      return Utils.mul(
        Number(this.currentContract.value),
        Number(this.Form.number)
      )
    },
    // 买入验证
    Rules() {
      return {
        price: [
          {
            require: true,
            message: this.$t('message.createdEntrust.importPrice'),
            trigger: 'blur'
          },
          {
            validator: this.priceValidator,
            trigger: 'blur'
          }
        ],
        number: [
          {
            require: true,
            message: this.$t('message.createdEntrust.contractHand'),
            trigger: 'blur'
          },
          {
            validator: this.buyNumber,
            trigger: 'blur'
          }
        ]
      }
    },
    // 买入按钮是否可点击验证
    ButtonCanClick() {
      if ( this.groupValue === 1 ) {
        return !Object.values(this.Form).every(item => item)
      } else {
        return !this.Form.number
      }
    },
    // 买入滑块
    buySlideValue: {
      get() {
        return this.Form.number
      },
      set(val) {
        this.Form.number = val ? val + '' : ''
        if ( val ) {
          this.$refs.Form.validateField('number')
        }
      }
    }
  },
  watch: {
    // 监听全局的价格点击
    operatePrice(value) {
      if ( !value ) return
      if ( this.groupValue === 2 ) return
      this.Form.price = value
      this.$refs.Form.validateField('price')
      this.animation = true
    },
    // 监听类型
    groupValue() {
      this.reset()
    },
    walletAsset: {
      handler(val) {
        this.getOpen('buy')
        this.getOpen('sell')
      },
      deep: true,
      immediate: true
    },
    wallet: {
      handler(val) {
        this.getOpen('buy')
        this.getOpen('sell')
      },
      deep: true,
      immediate: true
    },
    '$store.state.market.buyFirst': {
      handler(val) {
        this.getOpen('buy')
        this.getOpen('sell')
      },
      deep: true,
      immediate: true
    },
    '$store.state.market.sellLast': {
      handler(val) {
        this.getOpen('buy')
        this.getOpen('sell')
      },
      deep: true,
      immediate: true
    },
    currentContract: {
      handler(val) {
        this.getOpen('buy')
        this.getOpen('sell')
      },
      deep: true,
      immediate: true
    },
    // 监听杠杆
    // 重置可开手数,根据数量的值重置或重新验证输入框
    leverageValue() {
      this.getOpen('buy')
      this.getOpen('sell')
      this.$nextTick().then(re => {
        if ( this.Form.number ) {
          this.$refs.Form.validateField('number')
        } else {
          this.$refs.Form.reset('number')
        }
      })
    },
    Form: {
      handler() {
        this.setOperatePrice('')
        this.getOpen('buy')
        this.getOpen('sell')
        this.calPositionValue('buy')
        this.calPositionValue('sell')
      },
      deep: true
    },
    // 监听多语言切换
    locale() {
      this.reset()
    },
    $route() {
      this.reset()
    }
  },
  methods: {
    // 重置价格,仓位数量,手数,价值数据
    reset() {
      this.$refs.Form.resetFields()
      this.setOperatePrice('')
      this.getOpen('buy')
      this.getOpen('sell')
    },
    // 占用保证金=（开仓价格/杠杆*开仓数量*乘数）+（开仓价格*开仓数量*乘数*taker）
    getDeposit() {
      if ( !this.wallet.commisionList ) {
        this.deposit = 0
        return
      }
      if ( !this[`Form`].price && this.groupValue === 1 ) {
        this.deposit = 0
        return
      }
      if ( !this[`Form`].number ) {
        this.deposit = 0
        return
      }
      let price = this[`Form`].price || Utils.mul(this.indexPrice, 1.03)
      let amount = this[`Form`].number
      let num = this.currentContract.value
      let a = Utils.mul(
        Utils.mul(Utils.div(price, this.leverageValue), amount),
        num
      )
      let b = Utils.mul(
        Utils.mul(Utils.mul(price, amount), num),
        this.currentTaker
      )
      let deposit = Utils.add(a, b)
      this.deposit = this.$filter.splitFormat(deposit, 2)
    },
    // 买入提交
    async buySubmit(event) {
      if ( this.buttonSwitch ) return
      try {
        await this.$refs.Form.verification()
        this.getDeposit()
        let clickRect = event.target.getBoundingClientRect()
        this.buttonSwitch = true
        if ( !this.promptBoxShowInfo[CONFIRM_OPEN_BUY] ) {
          let rect = await this.$confirm({
            title: this.$t('message.trade.title'),
            leverage: this.leverageValue,
            content: this.$t('message.version3.openBuyTitle', {
              type: this.groupValue === 1 ? this.$t('message.trade.limit') : '',
              price: this.groupValue === 1 ? this.Form.price : this.$t('message.trade.market'),
              number: this.Form.number,
              color: this.themeColor.tradeGreen
            }),
            type: this.groupValue,
            contract: this.currentContract.name,
            side: 1,
            price: this.Form.price || this.$t('message.trade.market'),
            size: this.Form.number,
            deposit: this.deposit,
            risk: this.risk,
            isBallBox: true
          })
          clickRect = rect
        }
        await this.submitApi('buy', clickRect)
      } catch (error) {
        this.buttonSwitch = false
        console.log(error)
      }
    },
    // 提交接口
    async submitApi(type, rect) {
      let params = {
        contractId: this.currentContract.id,
        type: this.groupValue,
        price: this[`Form`].price,
        size: this[`Form`].number,
        side: type === 'buy' ? 1 : 2,
        leverage: this.leverageValue
      }
      try {
        let re = await SwapsApi.orderPlace(params)
        this.$notify({
          title: this.$t('message.errorCode.' + re.code),
          type: 'success'
        })
        this.buttonSwitch = false
        // 小球动画
        let badge = document.getElementById('badge')
        let badgeRect = badge.getBoundingClientRect()
        this.$showBall({
          clickRect: rect,
          targetRect: badgeRect
        })
      } catch (error) {
        this.$notify({
          title: this.$t('message.errorCode.' + error.data.code),
          type: 'warning'
        })
        this.buttonSwitch = false
      } finally {
        this.reset()
      }
    },
    // 卖出提交
    async sellSubmit(event) {
      if ( this.buttonSwitch ) return
      try {
        await this.$refs.Form.verification()
        this.getDeposit()
        let clickRect = event.target.getBoundingClientRect()
        this.buttonSwitch = true
        // 不在显示判断
        if ( !this.promptBoxShowInfo[CONFIRM_OPEN_SELL] ) {
          let rect = await this.$confirm({
            title: this.$t('message.trade.title'),
            leverage: this.leverageValue,
            content: this.$t('message.version3.openSellTitle', {
              type: this.groupValue === 1 ? this.$t('message.trade.limit') : '',
              price: this.groupValue === 1 ? this.Form.price : this.$t('message.trade.market'),
              number: this.Form.number,
              color: this.themeColor.tradeRed
            }),
            type: this.groupValue,
            contract: this.currentContract.name,
            side: 2,
            price: this.Form.price || this.$t('message.trade.market'),
            size: this.Form.number,
            deposit: this.deposit,
            risk: this.risk,
            isBallBox: true
          })
          clickRect = rect
        }
        await this.submitApi('sell', clickRect)
      } catch (error) {
        this.buttonSwitch = false
        console.log(error)
      }
    },
    // 计算仓位价值
    calPositionValue(type) {
      let { price, number } = this[`Form`]
      if ( this.indexPrice && number ) {
        // 判断是否为市价 vlaue = 2 
        if ( this.groupValue === 2 ) {
          this[`${ type }PositionValue`] =
            this.indexPrice * number * this.currentContract.value
        } else {
          this[`${ type }PositionValue`] =
            price * number * this.currentContract.value
        }
      } else {
        this[`${ type }PositionValue`] = 0
      }
    },
    // 可开手数= （可用资产*资金比例）/【（委托价格/杠杆）+（委托价格*2taker）】
    getOpen(type) {
      if ( !this.userInfo ) {
        this[`${ type }Open`] = 0
        return
      }
      if ( !this.wallet.commisionList ) {
        this[`${ type }Open`] = 0
        return
      }
      if ( !this.walletAsset.balance ) {
        this[`${ type }Open`] = 0
        return
      }
      if ( !this[`Form`].price && !this.indexPrice ) {
        this[`${ type }Open`] = 0
        return
      }
      // 按委托价格来算，则委托价格带入指数价格的103%
      // 可开手数 = （可用资产*资金比例）/【（委托价格 * 乘数 / 杠杆）+（委托价格 * 乘数 * 2 * taker）】
      let price = this[`Form`].price || Utils.mul(this.indexPrice, 1.03)
      let available = this.walletAsset.balance
      let num = this.currentContract.value
      let a = Utils.mul(available, 1)
      let b = Utils.div(Utils.mul(price, num), this.leverageValue)
      let c = Utils.mul(Utils.mul(Utils.mul(price, num), this.currentTaker), 2)
      let open = Utils.div(a, Utils.add(b, c))
      this[`${ type }Open`] = Utils.editE(Math.floor(open))
    },
  }
}
</script>

<style lang="less" scoped >
  @import (reference) '~@/assets/css/index';
  .order-button{
    display: flex;
    justify-content: space-around;
    /deep/.button-warp{
      flex: 1;
    }
  }
  .nbsp{
    width: 10px;
  }
  .black {
    .themeBlack();
    .market-price {
      .flex-box();
    }
    .buy {
      width: 100%;
      /deep/.unit{
        padding-right: 0;
        &>span{
          padding-right: 10px;
        }
        .selects{
          min-width: 62px;
          flex: 0 0 auto;
          .select-input{

            border: none !important;
            border-radius: 0 !important;
            border-left: 1px solid @inputBorderColor !important;
            padding-left: 10px;
            height: 34px;
            color: @tradeBlue;
          }
          .select-item{
            text-align: center;
          }
        }
      }
    }
    .info-position-value{
      .flex-box();
      justify-content: space-between;
      margin-bottom: 10px;
      .info{
        flex: 1;
      }
      .positionValue{
        /deep/.has-tip{
          padding-left: 0;
          span{
            color: @middleFontColor;
          }
        }
      }
    }
    .open {
      text-align: left;
      span {
        margin-left: 6px;
      }
    }
    .open,
    .positionValue {
      font-size: 12px;
      color: @middleFontColor;
      span {
        color: @darkFontColor;
      }
    }

    .number {
      margin-top: 10px;
    }
  }

  .white {
    .themeWhite();
    .market-price {
      .flex-box();
    }

    .buy {
      width: 100%;
      /deep/.unit{
        padding-right: 0;
        &>span{
          padding-right: 10px;
        }
        .selects{
          min-width: 62px;
          flex: 0 0 auto;
          .select-input{

            border: none !important;
            border-radius: 0 !important;
            border-left: 1px solid @inputBorderColor !important;
            padding-left: 10px;
            height: 34px;
            color: @tradeBlue;
          }
          .select-item{
            text-align: center;
          }
        }
      }
    }
    .info-position-value{
      .flex-box();
      justify-content: space-between;
      margin-bottom: 10px;
      .info{
        flex: 1;
      }
      .positionValue{
        /deep/.has-tip{
          padding-left: 0;
          span{
            color: @middleFontColor;
          }
        }
      }
    }
    .open,
    .positionValue {
      font-size: 12px;
      color: @middleFontColor;
      span {
        color: @darkFontColor;
      }
    }

    .number {
      margin-top: 10px;
    }
    .order-button{
      display: flex;
      justify-content: space-around;
      /deep/.button-warp{
        flex: 1;
      }
    }
    .nbsp{
      width: 10px;
    }
  }
</style>

