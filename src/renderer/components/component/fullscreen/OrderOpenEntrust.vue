<template>
	<!--	计划委托	-->
	<div class="entrust">
			<!-- 买入 -->
			<div class="buy">
				<v-form
					:form="Form"
					:rules="buyRules"
					ref="Form"
				>
					<v-form-item
						:label="$t('message.transactionList.triggerPrice')"
						unit="USDT"
						prop="triggerPrice"
					>
						<v-input
							v-model="Form.triggerPrice"
							limit="number"
							:precision="figure.indexPriceFloat || 4"
							:max="99999999"
						></v-input>
					</v-form-item>
					<v-form-item
						:label="$t('message.transactionList.executionPrice')"
						unit="USDT"
						prop="price"
						class="price"
					>
						<v-input
							v-model="Form.price"
							limit="number"
							:precision="figure.indexPriceFloat || 4"
							:max="99999999"
							:placeholder="$t('message.version3.defaultExecutionPrice')"
						></v-input>
					</v-form-item>
					<v-form-item
						class="number"
						:label="$t('message.transactionList.positions')"
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
					</v-form-item>
				</v-form>
        <div class="info-position-value">
          <div class="info">
            <div class="positionValue">
              {{ $t('message.createdEntrust.positionValue') }}
              <span> {{ buyPositionValue | splitFormat(figure.indexPriceFloat || 4) }} USDT</span>
            </div>
          </div>
          <div class="nbsp"></div>
          <div class="info">
            <div class="positionValue">
              {{ $t('message.createdEntrust.positionValue') }}
              <span> {{ sellPositionValue | splitFormat(figure.indexPriceFloat || 4) }} USDT</span>
            </div>
          </div>
        </div>
        <div class="order-button">
          <v-color-button
            type="buy"
            :button-text="$t('message.version3.buy')"
            :disabled="buyButtonCanClick"
            :login="!!userInfo"
            @click="buySubmit"
          >
            <v-tip
              class="table-tip"
              :label="$t('message.version3.buy')"
              :tipText="$t('message.usdtTips.openMore')"
              :width="306"
              placement="top"
            ></v-tip>
          </v-color-button>
          <div class="nbsp"></div>
          <v-color-button
            type="sell"
            :button-text="$t('message.version3.sell')"
            :disabled="sellButtonCanClick"
            :login="!!userInfo"
            @click="sellSubmit"
          >
            <v-tip
              class="table-tip"
              :label="$t('message.version3.sell')"
              :tipText="$t('message.usdtTips.openTheEmpty')"
              :width="306"
              placement="top"
            ></v-tip>
          </v-color-button>
        </div>
			</div>
		</div>
</template>

<script>
	import { dataMixin, userMixin, systemMixin } from '@/mixins'
	import { CONFIRM_ENTRUST_SELL, CONFIRM_ENTRUST_BUY } from '@/data/noTip'

	import SwapsApi from '@/api/swapsApi'

  export default {
    name: 'OrderOpenEntrust',
    mixins: [dataMixin, userMixin, systemMixin],
    props: {
      // 当前组的 值
      groupValue: {
        type: Number
      },
	    // 杠杆
      leverageValue: {
        type: Number
      }
    },
    data() {
      return {
        // 买入表单
        Form: {
          // 触发价
          triggerPrice: '',
          // 执行价
          price: '',
          // 数量
          number: ''
        },
	      // 按钮防多次点击开关
        buttonSwitch: false,
	      // 买入收益
        buyPositionValue: 0,
	      // 卖出收益
        sellPositionValue: 0
      }
    },
	  computed: {
      // 买入按钮是否可点击验证
      buyButtonCanClick() {
        let validationObj = this.$utils.deepCopy(this.Form)
	      delete validationObj.price
        return !Object.values(validationObj).every(item => item)
      },
      // 卖出按钮是否可点击验证
      sellButtonCanClick() {
        let validationObj = this.$utils.deepCopy(this.Form)
        delete validationObj.price
        return !Object.values(validationObj).every(item => item)
      },
      // 买入验证
      buyRules() {
        return {
          triggerPrice: [
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
          price: [
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
              validator: this.numberValidator,
              trigger: 'blur'
            }
          ]
        }
      },
	  },
	  watch: {
		  // 监听买入表单
      Form: {
        handler(){
          this.getPositionValue('buy')
          this.getPositionValue('sell')
        },
	      deep: true
      },
	  },
	  methods: {
      // 重置
      reset() {
        this.$refs.Form.resetFields()
      },
      // 计算仓位价值
		  getPositionValue(type) {
        let { triggerPrice, price, number } = this[`Form`]
			  let currentPrice = price || triggerPrice
        if ( currentPrice && number ) {
            this[`${ type }PositionValue`] =
              currentPrice * number * this.currentContract.value
        } else {
          this[`${ type }PositionValue`] = 0
        }
		  },
      //价格验证
      priceValidator(rule, value, callback) {
        if ( !this.userInfo ) {
          return callback()
        }
        if ( value == 0 && value != '' ) {
          return callback(new Error(this.$t('message.errorMessage.error1')))
        }
        return callback()
      },
      // 数量验证
      numberValidator(rule, value, callback) {
        if ( !this.userInfo ) {
          return callback()
        }
        if ( value == 0 ) {
          return callback(new Error(this.$t('message.errorMessage.error1')))
        }
        return callback()
      },
      // 买入提交
      async buySubmit() {
        try {
          if (this.buttonSwitch) return
          await this.$refs.Form.verification()
          this.buttonSwitch = true
          if ( !this.promptBoxShowInfo[CONFIRM_ENTRUST_BUY] ) {
            await this.$confirm({
              confirmType: 'entrust',
              title: this.$t('message.trade.title'),
              leverage: this.leverageValue,
              content: this.$t('message.version3.entrustBuyTitle', {
                price: this.Form.price || this.$t('message.trade.market'),
                number: this.Form.number,
	              name: this.currentContract.name,
                color: this.themeColor.tradeGreen
              }),
              contract: this.currentContract.name,
              side: 1,
              triggerPrice: this.Form.triggerPrice,
              price: this.Form.price || this.$t('message.trade.market'),
              size: this.Form.number
            })
          }
          await this.submitApi('buy')
        } catch (error) {
          this.buttonSwitch = false
	        console.error(error)
        }
      },
		  // 卖出提交
		  async sellSubmit() {
        try {
          if (this.buttonSwitch) return
          await this.$refs.sellForm.verification()
          this.buttonSwitch = true
          if ( !this.promptBoxShowInfo[CONFIRM_ENTRUST_SELL] ) {
            await this.$confirm({
              confirmType: 'entrust',
              title: this.$t('message.trade.title'),
              leverage: this.leverageValue,
              content: this.$t('message.version3.entrustSellTitle', {
                price: this.sellForm.price || this.$t('message.trade.market'),
                number: this.sellForm.number,
                name: this.currentContract.name,
                color: this.themeColor.tradeRed
              }),
              contract: this.currentContract.name,
              side: 2,
              triggerPrice: this.sellForm.triggerPrice,
              price: this.sellForm.price || this.$t('message.trade.market'),
              size: this.sellForm.number
            })
          }
          await this.submitApi('sell')
        } catch (error) {
          this.buttonSwitch = false
	        console.error(error)
        }
		  },
		  // 提交接口
      async submitApi(type) {
        let params = {
          contractId: this.currentContract.id,
          side: type === 'buy' ? 1 : 2,
          triggerPrice: this[`Form`].triggerPrice,
          size: this[`Form`].number,
          leverage: this.leverageValue,
          type: this[`Form`].price ? 1 : 2,
          price: this[`Form`].price
        }
        try {
          let re = await SwapsApi.entrustOpen(params)
          this.$notify({
            title: this.$t('message.errorCode.' + re.code),
            type: 'success'
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
      }
	  }
  }
</script>

<style scoped lang="less">
@import (reference) '~@/assets/css/index';

.price {
	margin-top: 10px;
}
.number {
	margin-top: 10px;
}
.entrust {
	.flex-box();
}

.buy {
	width: 100%;
}
.info-position-value{
  margin: 10px 0;
  .flex-box();
  .info{
    flex: 1;
  }
}
.open {
	span {
		margin-left: 6px;
	}
}

.open,
.positionValue {
	font-size: 12px;
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
.black {
	.themeBlack();
	/* .buy {
		border-right: 1px @inputBorderColor dashed;
	} */

	.open,
	.positionValue {
		color: @middleFontColor;

		span {
			color: @darkFontColor;
		}
	}
}

.white {
	.themeWhite();
	.open,
	.positionValue {
		color: @middleFontColor;

		span {
			color: @darkFontColor;
		}
	}
}
</style>