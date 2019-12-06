<template>
	<!-- 平仓弹框 -->
	<v-layer-box
		class="close-layer-box"
		:value="isShow"
		@input="close"
		:title="layerBoxTitle"
	>
		<v-button-group
			:group="[{text: $t('message.trade.limit'), value: 1, key: 'left'}, {text: $t('message.trade.market'), value: 2, key: 'right'}]"
			v-model="type"
		></v-button-group>
		<v-form :form="form" :rules="rules" ref="form">
			<v-form-item
				:label="$t('message.createdEntrust.price')"
				:unit="type === 2 ? $t('message.createdEntrust.market') : 'USDT'"
				prop="price"
			>
				<v-input
					v-model="form.price"
					limit="number"
					:precision="layerBoxData.contractParam && layerBoxData.contractParam.indexPriceFloat || 4"
					:disabled="type === 2"
					align="right"
					:max="99999999"
				></v-input>
			</v-form-item>
			<v-form-item
				class="number"
				:label="$t('message.transactionList.A_Amount')"
				prop="number"
				:unit="$t('message.createdEntrust.lot')"
			>
				<v-input
					v-model="form.number"
					limit="number"
					:max="99999999"
					align="right"
				></v-input>
			</v-form-item>
		</v-form>
		<v-slider v-model="slideValue" :max="layerBoxData.availablePositionQty"></v-slider>
		<v-button @click="submit" size="big" :disabled="buttonIsDisabled">{{ $t('message.version3.submit') }}</v-button>
	</v-layer-box>
</template>
<script>
  import {dataMixin, systemMixin, userMixin} from '@/mixins'
  import Utils from '@/utils/utils'
  import SwapsApi from '@/api/swapsApi'
  import { ALERT_BUYSELL_SELL, ALERT_BUYSELL_BUY } from '@/data/noTip'

  export default {
    name: 'CloseLayerBox',
    mixins: [systemMixin, dataMixin, userMixin],
    model: {
      prop: 'isShow',
      event: 'input'
    },
    props: {
      // 仓位数据
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
      // 数量验证
      const numberValidator = (rule, value, callback) => {
        if (value == 0) {
          return callback(new Error(this.$t('message.errorMessage.error1')))
        }
        if (value > this.layerBoxData.availablePositionQty) {
          return callback(new Error(this.$t('message.errorCode.11300003')))
        }
        return callback()
      }
      const priceValidator = (rule, value, callback) => {
        if (!this.userInfo) {
          return callback()
        }
        if (value == 0) {
          return callback(new Error(this.$t('message.errorMessage.error1')))
        }
        return callback()
      }
      return {
        // 类型  1: 限价  2:市价
        type: 1,
        // 表单数据
        form: {
          price: '',
          number: ''
        },
        // 表单验证
        rules: {
          price: [
            {
              require: true,
              message: this.$t('message.createdEntrust.importPrice'),
              trigger: 'blur'
            },
	          {
              validator: priceValidator,
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
              validator: numberValidator,
              trigger: 'blur'
            }
          ]
        },
        // 按钮方多次点击开关
        buttonSwitch: false
      }
    },
    computed: {
      // 平仓标题
      layerBoxTitle() {
        return `${this.layerBoxData.name} ${
          this.layerBoxData.side === 1
            ? this.$t('message.transactionList.more')
            : this.$t('message.transactionList.less')
        } ${this.$t('message.trade.closePosition')}`
      },
      currentTicker() {
        return this.tickers[this.layerBoxData.contractId] || {}
      },
      buttonIsDisabled() {
        if (this.type === 1) {
          return !Object.values(this.form).every(item => item)
        } else {
          return !this.form.number
        }
      },
	    //滑块
      slideValue: {
        get() {
          return this.form.number
        },
	      set(val) {
          this.form.number = val? val + '' : ''
          if (val === '') {
            this.$refs.form.reset('number')
          }
          if (val * 1) {
            this.$refs.form.validateField('number')
          }
	      }
      }
    },
    watch: {
      type() {
        this.reset()
      },
      isShow(value) {
        if (!value) return
        this.type = 1
        this.form.price = Utils.splitFormat(this.currentTicker.last, this.layerBoxData.contractParam.indexPriceFloat) + ''
        this.form.number = this.layerBoxData.availablePositionQty + ''
      }
    },
    methods: {
      // 关闭
      close() {
        this.$emit('input', false)
        this.buttonSwitch = false
      },
      // 重置
      reset() {
        this.$refs.form && this.$refs.form.resetFields()
        if (this.type === 1) {
          this.form.price = Utils.splitFormat(this.currentTicker.last, 4) + ''
        } else {
          this.form.price = ''
        }
        this.form.number = this.layerBoxData.availablePositionQty + ''
      },
      // 提交
      async submit() {
        try {
          if (this.buttonSwitch) return
          await this.$refs.form.verification()
	        let side = this.layerBoxData.side == 1 ? ALERT_BUYSELL_BUY : ALERT_BUYSELL_SELL
          if (!this.promptBoxShowInfo[side]) {
            let content = this.getContent(this.layerBoxData.side)
            this.close()
            await this.$alert({
              type: 'buysell',
              contentType: this.layerBoxData.side,
              content,
              prompt: `*${this.$t('message.layerClosed.text3')}`
            })
          }
          this.submitApi()
        } catch (error) {
          console.log(error)
        }
      },
      // 提交 api
      async submitApi() {
        this.buttonSwitch = true
        let params = {
          contractId: this.layerBoxData.contractId,
          type: this.type,
          side: this.layerBoxData.side === 1 ? 2 : 1,
          size: this.form.number,
          price: this.form.price || this.currentTicker.last,
          close: 1
        }
        try {
          let re = await SwapsApi.orderPlace(params)
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
          this.reset()
          this.buttonSwitch = false
          this.$emit('resetList')
        }
      },
      /**
      * @content: 获取内容
      * @params side 1: 多  2: 空
      */
      getContent(side) {
        if (side === 2) {
          return this.$t('message.version3.closeSellTitle', {
            type: this.type === 1 ? this.$t('message.trade.limit') : '',
            price: this.type === 1 ? this.form.price : this.$t('message.trade.market'),
            number: this.form.number,
            color: this.themeColor.tradeGreen
          })
        } else {
          return this.$t('message.version3.closeBuyTitle', {
            type: this.type === 1 ? this.$t('message.trade.limit') : '',
            price: this.type === 1 ? this.form.price : this.$t('message.trade.market'),
            number: this.form.number,
            color: this.themeColor.tradeRed
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
	 @import (reference) '~@/assets/css/index';

	.close-layer-box {
		/deep/ .form-item {
			margin-top: 10px;
		}

		/deep/ .button-warp {
			margin-top: 10px;
		}
	}
</style>


