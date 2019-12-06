<template>
	<!-- 下单区平仓 -->
	<div class="market-price">
		<!-- 买入 -->
		<div class="buy">
			<v-form
				:form="Form"
				:rules="buyRules"
				ref="Form"
			>
				<v-form-item
					:label="$t('message.createdEntrust.price')"
					:unit="groupValue === 2 ? $t('message.version3.marketPriceSell') : 'USDT'"
					prop="price"
          :style="{'z-index': 9}"
				>
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
				</v-form-item>
				<v-form-item
					class="number"
					:label="$t('message.transactionList.A_Amount')"
					prop="number"
					:unit="$t('message.createdEntrust.lot')"
					:tip="true"
					:tipText="
            $t('message.createdEntrust.hand', {
              hand: $t(`message.createdEntrust.lot`),
              name: currentContract.name,
              value: currentContract.value,
              tableName: currentContract.tableName.toUpperCase()
            })
          "
				>
					<v-input
						v-model="Form.number"
						limit="number"
						:max="99999999"
					></v-input>
				</v-form-item>
			</v-form>
			<v-slider
				v-model="buySlideValue"
				:disabled="!userInfo || !buyOpen || !sellOpen"
				:max="buyOpen > sellOpen ? buyOpen : sellOpen"
				type="default"
			></v-slider>
      <div class="info-position-value">
        <div class="info">
          <div class="open">
            {{ $t(`message.version3.closeOpen`)
            }}<span>{{ `${buyOpen} ${$t(`message.createdEntrust.lot`)}` }}</span>
          </div>
        </div>
        <div class="nbsp"></div>
        <div class="info">
          <div class="open">
            {{ $t(`message.version3.closeOpen`)
            }}<span>{{ `${sellOpen} ${$t(`message.createdEntrust.lot`)}` }}</span>
          </div>
        </div>
      </div>
			
      <div class="order-button">
        <v-color-button
          type="sell"
          :button-text="$t('message.version3.closeSell')"
          :disabled="!buyOpen || buyButtonCanClick"
          :login="!!userInfo"
          @click="buySubmit"
        >
          <v-tip
            class="table-tip"
            :label="$t('message.version3.closeSell')"
            :tipText="$t('message.usdtTips.openTheEmpty')"
            :width="306"
            placement="top"
          ></v-tip>
        </v-color-button>
        <div class="nbsp"></div>
        <v-color-button
          type="buy"
          :button-text="$t('message.version3.closeBuy')"
          :disabled="!sellOpen || sellButtonCanClick"
          :login="!!userInfo"
          @click="sellSubmit"
        >
          <v-tip
            class="table-tip"
            :label="$t('message.version3.closeBuy')"
            :tipText="$t('message.usdtTips.openMore')"
            :width="306"
            placement="top"
          ></v-tip>
        </v-color-button>
      </div>
		</div>
	</div>
</template>

<script>
  import SwapsApi from '@/api/swapsApi'
  import { dataMixin, systemMixin, userMixin } from '@/mixins'
  import { ALERT_BUYSELL_SELL, ALERT_BUYSELL_BUY } from '@/data/noTip'

  export default {
    name: 'orderCloseMarketAndPrice',
    mixins: [systemMixin, dataMixin, userMixin],
    // props: {
    //   // 当前价格类型  1: 限价  2:市价
    //   groupValue: Number
    // },
    data() {
      return {
        groupValue: 1,
        // 买入表单
        Form: {
          price: '',
          number: ''
        },
        // 按钮防多次点击开关
        buttonSwitch: false,
        // input 框数字进入动画
        animation: false
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
      // 当前的 Taker
      currentTicker() {
        return this.tickers[this.currentContract.id] || {}
      },
      // 多仓可平手数量
      buyOpen() {
        return this.getClose('buy')
      },
      // 空仓可平手数
      sellOpen() {
        return this.getClose('sell')
      },
      // 买入验证
      buyRules() {
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
              validator: this.buyNumberValidator,
              trigger: 'blur'
            }
          ]
        }
      },
      // 买入按钮是否可点击验证
      buyButtonCanClick() {
        if ( this.groupValue === 1 ) {
          return !Object.values(this.Form).every(item => item)
        } else {
          return !this.Form.number
        }
      },
      // 卖出按钮是否可点击验证
      sellButtonCanClick() {
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
          if ( val === '' ) {
            this.$refs.Form.reset('number')
          }
          if ( val * 1 ) {
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
      // 监听仓位
      allPositionsList() {
        this.getClose('buy')
        this.getClose('sell')
      },
      // 监听路由
      $route() {
        this.getClose('buy')
        this.getClose('sell')
      },
      Form: {
        handler() {
          this.setOperatePrice('')
          this.getClose('buy')
          this.getClose('sell')
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
      //价格验证
      priceValidator(rule, value, callback) {
        if ( !this.userInfo ) {
          return callback()
        }
        if ( value == 0 ) {
          return callback(new Error(this.$t('message.errorMessage.error1')))
        }
        return callback()
      },
      // 数量验证
      buyNumberValidator(rule, value, callback) {
        let max = this.buyOpen > this.sellOpen?this.buyOpen: this.sellOpen
        if ( !this.userInfo ) {
          return callback()
        }
        if ( value == 0 ) {
          return callback(new Error(this.$t('message.errorMessage.error1')))
        }
        if ( value > max) {
          return callback(new Error(this.$t('message.errorCode.10300003')))
        }
        return callback()
      },
      // 获取可平手数量
      getClose(type) {
        if ( !this.userInfo ) return 0
        if ( !this.allPositionsList.length ) return 0
        let currentPosition = this.allPositionsList.filter(
          item => item.contractId === this.currentContract.id
        )
        let buy = currentPosition.filter(item => item.side === 1)
        let sell = currentPosition.filter(item => item.side === 2)
        if ( buy.length && type === 'buy' ) {
          return buy[0].availablePositionQty
        }
        if ( sell.length && type === 'sell' ) {
          return sell[0].availablePositionQty
        }
        return 0
      },
      // 重置价格,仓位数量,手数,价值数据
      reset() {
        this.$refs.Form.resetFields()
        this.getClose('buy')
        this.getClose('sell')
        this.setOperatePrice('')
        this.buySlideValue = 0
      },
      // 买入提交 (绿)
      async buySubmit(event) {
        try {
          if ( this.buttonSwitch ) return
          this.buttonSwitch = false
          await this.$refs.Form.verification()
          let clickRect = event.target.getBoundingClientRect()
          if ( !this.promptBoxShowInfo[ALERT_BUYSELL_BUY] ) {
            let rect = await this.$alert({
              type: 'buysell',
              contentType: this.groupValue,
              content: this.$t('message.version3.closeBuyTitle', {
                type: this.groupValue === 1 ? this.$t('message.trade.limit') : '',
                price: this.groupValue === 1 ? this.Form.price : this.$t('message.trade.market'),
                number: this.Form.number,
                color: this.themeColor.tradeRed
              }),
              prompt: `*${ this.$t('message.layerClosed.text3') }`,
              isBallBox: true
            })
            clickRect = rect
          }
          await this.submitApi(2, 'buy', clickRect)
        } catch (error) {
          console.log(error)
          this.buttonSwitch = false
        }
      },
      // 提交接口
      async submitApi(side, type, rect) {
        let params = {
          contractId: this.currentContract.id,
          type: this.groupValue,
          side: side,
          size: this[`Form`].number,
          price: this[`Form`].price || this.currentTicker.last,
          close: 1
        }
        try {
          let re = await SwapsApi.orderPlace(params)
          this.$notify({
            title: this.$t('message.errorCode.' + re.code),
            type: 'success'
          })
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
        } finally {
          this.reset()
          this.buttonSwitch = false
        }
      },
      // 卖出提交 (红)
      async sellSubmit(event) {
        try {
          if ( this.buttonSwitch ) return
          this.buttonSwitch = true
          await this.$refs.Form.verification()
          let clickRect = event.target.getBoundingClientRect()
          if ( !this.promptBoxShowInfo[ALERT_BUYSELL_SELL] ) {
            let rect = await this.$alert({
              type: 'buysell',
              contentType: this.groupValue,
              content: this.$t('message.version3.closeSellTitle', {
                type: this.groupValue === 1 ? this.$t('message.trade.limit') : '',
                price: this.groupValue === 1 ? this.Form.price : this.$t('message.trade.market'),
                number: this.Form.number,
                color: this.themeColor.tradeGreen
              }),
              prompt: `*${ this.$t('message.layerClosed.text3') }`,
              isBallBox: true
            })
            clickRect = rect
          }
          await this.submitApi(1, 'sell', clickRect)
        } catch (error) {
          console.log(error)
          this.buttonSwitch = false
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import (reference) '~@/assets/css/index';

  .market-price {
    .flex-box();
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
  .info-position-value{
    margin: 10px 0;
    .flex-box();
    .info{
      flex: 1;
    }
  }
  .black {
    .themeBlack();
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

    .open,
    .positionValue {
      font-size: 12px;
      color: @middleFontColor;

      span {
        color: @darkFontColor;
        margin-left: 6px;
      }
    }

    .number {
      margin-top: 10px;
    }
  }

  .white {
    .themeWhite();
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
    .open,
    .positionValue {
      font-size: 12px;
      color: @middleFontColor;
      span {
        color: @darkFontColor;
        margin-left: 6px;
      }
    }

    .number {
      margin-top: 10px;
    }
  }
</style>

