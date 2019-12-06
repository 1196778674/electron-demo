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
          size="default"
          :group="[{text: $t('message.version3.stop'), value: 1, key: 'left'}, {text: $t('message.version3.loss'), value: 2, key: 'right'}]"
          v-model="side"
        ></v-button-group>
			<p>{{ $t('message.version3.orderPrice') }}: <span>{{ layerBoxData.price }}</span></p>
			<!-- <p class="waring">{{ $t('message.version3.oneSelect') }}</p> -->
		</div>
    <v-form
	    :form="form"
	    :rules="rules"
      v-if="side == 1"
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
      <v-form-item
	      :label="$t('message.tradeDetailList.executePrice')"
	      prop="stopMarket"
	      class="form-item"
      >
        <div slot="unit" 
          @click="currentPriceTap"
          :class="['currentPrice', currentPrice ? 'active' : '']">
          {{ $t('message.trade.market') }}
        </div>
        <v-input
	        v-model="form.stopMarket"
	        limit="number"
          :placeholder="currentPrice ? $t(`message.version3.marketExecute`):$t(`message.createdEntrust.importPrice`)"
	        :precision="figure.indexPriceFloat || 4"
          :disabled="currentPrice"
	        align="right"
	        :max="99999999"
        ></v-input>
      </v-form-item>
	    <div class="info">
		    {{ $t('message.version3.earnings') }}:
		    <span>{{ stopEarnings | splitFormat(2) }} USDT</span>
      </div>
    </v-form>
    <v-form
	    :form="form"
	    :rules="rules"
      v-if="side == 2"
	    ref="form"
    >
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
      <v-form-item
	      :label="$t('message.tradeDetailList.executePrice')"
	      prop="lossMarket"
	      class="form-item"
      >
        <div slot="unit" 
          @click="currentPriceTap"
          :class="['currentPrice', currentPrice ? 'active' : '']">
          {{ $t('message.trade.market') }}
        </div>
        <v-input
	        v-model="form.lossMarket"
	        limit="number"
          :placeholder="currentPrice ? $t(`message.version3.marketExecute`):$t(`message.createdEntrust.importPrice`)"
	        :precision="figure.indexPriceFloat || 4"
          :disabled="currentPrice"
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
        }//value == 0 && value != ''
        if ( value == 0 || value == '') {
          return callback(new Error(this.$t('message.errorMessage.error1')))
        }
        return callback()
      }
      return {
        side: 1, //1:预设止盈 2:预设止损
        currentPrice: true, //是否市价
        // 表单
        form: {
          // 止盈价格
          stopPrice: '',
          // 止盈现价
          stopMarket: '',
          // 止损价格
          lossPrice: '',
          // 止损现价
          lossMarket: ''
        },
        // 止盈预估收益
        stopEarnings: 0,
        // 止损预估收益
        lossEarnings: 0,
        // 按钮防多次点击开关
        buttonSwitch: false,
        // 表单验证
        rules: {
          stopPrice: [
            {
              validator: priceValidator,
              trigger: 'blur'
            }
          ],
          stopMarket: [
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
          ],
          lossMarket: [
            {
              validator: priceValidator,
              trigger: 'blur'
            }
          ]
        }
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
        if (this.side === 1) {
          if (!this.currentPrice) {
            return !this.form.stopPrice || !this.form.stopMarket
          }else {
            return !this.form.stopPrice
          }
        }else {
          if (!this.currentPrice) {
            return !this.form.lossPrice || !this.form.lossMarket
          }else {
            return !this.form.lossPrice
          }
        }
        // return !Object.values(this.form).some(item => item)
      }
    },
	  watch: {
      side(){
        if(this.isShow){
          this.info()
        }
      },
			'form.stopPrice'(value) {
        if(!this.currentPrice) return
			  this.stopEarnings = this.getEarnings(value)
      },
      'form.stopMarket'(value) {
        console.log(value)
        if(value == 0){
          this.stopEarnings = this.getEarnings(this.form.stopPrice)
          return
        } 
			  this.stopEarnings = this.getEarnings(value)
			},
		  'form.lossPrice'(value) {
        if(!this.currentPrice) return
        this.lossEarnings = this.getEarnings(value)
      },
      'form.lossMarket'(value) {
        if(value == 0){
          this.lossEarnings = this.getEarnings(this.form.lossPrice)
          return
        } 
        this.lossEarnings = this.getEarnings(value)
      },
      isShow(val) {
			  if (val) {
          this.info();
			  }
      }
	  },
	  methods: {
      currentPriceTap(){
        console.log(this.side)
        this.currentPrice = !this.currentPrice
        if (this.side === 1) {
          if(this.currentPrice){
            this.form.stopMarket = '';
          }else{
            this.form.stopMarket = this.layerBoxData.targetProfitExecutePrice || ''
          }
        }
        if (this.side === 2) {
          if(this.currentPrice){
            this.form.lossMarket = '';
          }else{
            this.form.lossMarket = this.layerBoxData.stopLossExecutePrice || ''
          }
        }
      },
      info(){
        this.$nextTick(()=>{
          this.$refs.form.resetFields()
          this.currentPrice = true
          this.form.stopPrice = this.layerBoxData.targetProfitPrice || ''
          this.form.stopMarket = this.layerBoxData.targetProfitExecutePrice || ''
          this.form.lossPrice = this.layerBoxData.stopLossPrice || ''
          this.form.lossMarket = this.layerBoxData.stopLossExecutePrice || ''
          if( this.form.stopMarket && this.side == 1 || this.form.lossMarket && this.side == 2){
            this.currentPrice = false
          }
        })
      },
      // 重置
		  reset() {
		    this.form.stopPrice = ''
        this.form.stopMarket = ''
        this.form.lossPrice = ''
        this.form.lossMarket = ''
			  this.$refs.form.resetFields()
		  },
      // 关闭
      close() {
        this.$emit('input', false)
        this.buttonSwitch = false
        this.reset()
        this.side = 1
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
            "1": {
              "true": { //在预设止盈市价参数
                orderId: this.layerBoxData.id,
                type: 2,
                targetProfitPrice: this.form.stopPrice,
              },
              "false": { //在预设止盈限价参数
                orderId: this.layerBoxData.id,
                type: 1,
                targetProfitPrice: this.form.stopPrice,
                targetProfitExecutePrice: this.form.stopMarket
              }
            },
            "2": {
              "true": { //在预设止损市价参数
                orderId: this.layerBoxData.id,
                type: 2,
                stopLossPrice: this.form.lossPrice,
              },
              "false": { //在预设止损限价参数
                orderId: this.layerBoxData.id,
                type: 1,
                stopLossPrice: this.form.lossPrice,
                stopLossExecutePrice: this.form.lossMarket
              }
            }
          }
          let re = await swapsApi.preStopClose(params[this.side][`${this.currentPrice}`])
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


.currentPrice{
  width: 40px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  position: relative;
  color: #cbd7f0;
  font-size: 14px;
  cursor: pointer;
  &.active{
    color: #5073ff;
  }
  &.active::before{
    position: absolute;
    top:-1px;
    left: -11px;
    content: '';
    display: block;
    width: 100%;
    height: 100%;
    padding: 0 10px;
    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
    border: 1px solid #5073ff;
  }
}
.preset-stop-layer-box {
	.price {
		font-size: 14px;
		p {
      padding-top: 20px;
    }
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