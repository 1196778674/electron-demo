<template>
	<!--	预设止盈止损弹框 -->
	<v-layer-box
		class="preset-stop-layer-box"
		:value="isShow"
		@input="close"
		:title="layerBoxTitle"
	>
		<div class="price">
      <v-button-group
          size="medium"
          :group="[{text: $t('message.calculate.more'), value: 1, key: 'left'}, {text: $t('message.calculate.less'), value: 2, key: 'right'}]"
          v-model="form.side"
      ></v-button-group>
			<p>{{ $t('message.version3.orderPrice') }}: <span>{{ layerBoxData.price }}</span></p>
			<p class="waring">{{ $t('message.version3.oneSelect') }}</p>
		</div>
    <v-form
	    :form="form"
	    :rules="rules"
	    ref="form"
    >
      <v-form-item
	      :label="$t('message.version3.stopTrigger')"
	      prop="stopPrice"
	      unit="USDT"
	      class="form-item"
      >
        <v-input
	        v-model="form.stopPrice"
	        limit="number"
	        :precision="figure.indexPriceFloat || 4"
	        align="right"
	        :max="99999999"
        ></v-input>
      </v-form-item>
	    <div class="info">
		    {{ $t('message.version3.earnings') }}:
		    <span>{{ stopEarnings | splitFormat(2) }} USDT</span>
      </div>
      <v-form-item
	      :label="$t('message.version3.lossTrigger')"
	      unit="USDT"
	      prop="lossPrice"
	      class="form-item"
      >
        <v-input
	        v-model="form.lossPrice"
	        limit="number"
	        :precision="figure.indexPriceFloat || 4"
	        align="right"
	        :max="99999999"
        ></v-input>
      </v-form-item>
	    <div class="info">
		   {{ $t('message.version3.earnings') }}:
        <span>{{ lossEarnings | splitFormat(2) }} USDT</span>
      </div>
    </v-form>
    <v-button
	    @click="submit"
	    size="big"
	    :disabled="buttonIsDisabled"
    >{{
      $t('message.version3.submit')
    }}</v-button>
  </v-layer-box>
</template>

<script>
	import { systemMixin, dataMixin, userMixin } from '@/mixins'
  import swapsApi from '@/api/swapsApi'

  export default {
    name: 'presetStopLossLayerBox',
    mixins: [systemMixin, dataMixin, userMixin],
    model: {
      prop: 'isShow',
      event: 'input'
    },
    props: {
      // 委托传过来的数据
      layerBoxData: {
        type: Object,
        default: () => ({})
      },
      isShow: {
        type: Boolean,
        default: false
      }
    },
    data() {
      // 价格验证
      const priceValidator = (rule, value, callback) => {
        if ( !this.userInfo ) {
          return callback()
        }
        if ( value == 0 && value != '') {
          return callback(new Error(this.$t('message.errorMessage.error1')))
        }
        return callback()
      }
      return {
        // 表单
        form: {
          // 止盈价格
          stopPrice: '',
          // 止损价格
          lossPrice: ''
        },
        // 表单验证
        rules: {
          stopPrice: [
            {
              validator: priceValidator,
              trigger: 'blur'
            }
          ],
          lossPrice: [
            {
              validator: priceValidator,
              trigger: 'blur'
            }
          ]
        },
        // 止盈预估收益
        stopEarnings: 0,
        // 止损预估收益
        lossEarnings: 0,
        // 按钮防多次点击开关
        buttonSwitch: false
      }
    },
    computed: {
      // 平仓标题
      layerBoxTitle() {
        return `${ this.layerBoxData.name } ${
          this.layerBoxData.side === 1
            ? this.$t('message.transactionList.more')
            : this.$t('message.transactionList.less')
        }${ this.$t('message.transactionList.S_openPosition') }`
      },
	    // 提交按钮禁用状态
      buttonIsDisabled() {
        return !Object.values(this.form).some(item => item)
      }
    },
	  watch: {
			'form.stopPrice'(value) {
			  this.stopEarnings = this.getEarnings(value)
			},
		  'form.lossPrice'(value) {
        this.lossEarnings = this.getEarnings(value)
      },
      isShow(val) {
			  if (val) {
          this.form.stopPrice = this.layerBoxData.targetProfitPrice || ''
          this.form.lossPrice = this.layerBoxData.stopLossPrice || ''
			  }
      }
	  },
	  methods: {
      // 重置
		  reset() {
		    this.form.stopPrice = ''
			  this.form.lossPrice = ''
			  this.$refs.form.resetFields()
		  },
      // 关闭
      close() {
        this.$emit('input', false)
        this.buttonSwitch = false
	      this.reset()
      },
		  /**
		  * @content:  计算盈亏方法
		   * 已实现盈亏（多仓）=（平仓价格-开仓价格）* 开仓数量
       * 已实现盈亏（空仓）=（开仓价格-平仓价格）* 开仓数量
       * 注释：开仓数量=手数*乘数
       * 选择限价时候：平仓价格 = 执行价格、平仓数量 = 手数 * 乘数
       * 选择市价时候：平仓价格 = 触发价格、平仓数量 = 手数 * 乘数
		   *
       * @params  <Number,String> price 价格
		  * @returns  <Number> 未实现盈亏
		  */
      getEarnings(price = 0) {
        if ( !price ) {
          return 0
        }
        let { size, side, contractId, price: entryPrice } = this.layerBoxData
			  let currentContract = this.contractList.find(item => item.id === contractId)
        if ( side === 1 ) {
          // 多仓
          return this.$utils.mul(
            price - entryPrice,
            size * currentContract.value
          )
        } else {
          // 空仓
          return this.$utils.mul(
            entryPrice - price,
            size * currentContract.value
          )
        }
      },
			// 提交
			async submit() {
        try {
          if (this.buttonSwitch) return
          await this.$refs.form.verification()
	        this.submitApi()
        }catch (error) {
					console.error(error)
        }
			},
		  // 提交接口
      async submitApi() {
        try {
          let params = {
            orderId: this.layerBoxData.id,
            targetProfitPrice: this.form.stopPrice,
            stopLossPrice: this.form.lossPrice
          }
          let re = await swapsApi.preStopClose(params)
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
          this.close()
          this.buttonSwitch = false
          this.$emit('resetList')
        }
      }
	  }
  }
</script>

<style
	scoped
	lang="less"
>
	@import (reference) '~@/assets/css/index';

.preset-stop-layer-box {
	.price {
		font-size: 14px;
		span {}
	}
	.waring {
		font-size: 12px;
	}
	.form-item {
		margin-top: 10px;
	}
	.info {
		.flex-box();
		font-size: 12px;
		width: 300px;
		margin-top: 6px;
		span {
			margin-left: 5px;
		}
	}
	.button-warp {
		margin-top: 10px;
	}
}

	.black {
		.themeBlack();
		.preset-stop-layer-box {
			.price {
				color: @lightFontColor;
				span {
					color: @darkFontColor;
				}
			}
			.waring {
				color: @tradeRed;
			}
			.info {
				color: @lightFontColor;
				span {
					color: @darkFontColor;
				}
			}
		}
	}
	.white {
		.themeWhite();
		.preset-stop-layer-box {
			.price {
				color: @lightFontColor;
				span {
					color: @darkFontColor;
				}
			}
			.waring {
				color: @tradeRed;
			}
			.info {
				color: @lightFontColor;
				span {
					color: @darkFontColor;
				}
			}
		}
	}
</style>