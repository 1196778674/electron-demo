<template>
  <!-- 止盈弹框 -->
  <v-layer-box
    class="stop-layer-box"
    :value="isShow"
    @input="close"
    :title="layerBoxTitle"
  >
    <v-form :form="form" :rules="rules" ref="form">
      <v-form-item
        :label="
          `${$t('message.transactionList.triggerPrice')} ${this.layerInput}`
        "
        prop="triggerPrice"
        :tip="true"
        :tip-text="$t('message.usdtTips.triggerPrice')"
      >
        <v-input
          v-model="form.triggerPrice"
          limit="number"
          :precision="figure.indexPriceFloat || 4"
          align="right"
          :max="99999999"
          :min="0"
          :placeholder="$t('message.createdEntrust.importPrice')"
        ></v-input>
      </v-form-item>
      <v-button-group
        v-model="type"
        :group="[{text: $t('message.trade.limit'), value: 1, key: 'left'}, {text: $t('message.trade.market'), value: 2, key: 'right'}]"
      ></v-button-group>
      <v-form-item
        :label="$t('message.trade.executePrice')"
        :unit="type === 2 ? $t('message.createdEntrust.market') : 'USDT'"
        prop="price"
      >
        <v-input
          v-model="form.price"
          limit="number"
          :precision="figure.indexPriceFloat || 4"
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
    <v-slider
      v-model="slideValue"
      :max="layerBoxData.availablePositionQty"
    ></v-slider>
    <div class="info">
      <p v-if="type === 2 && boxType === 1">
        {{ $t('message.transactionList.returnPrice') }}
      </p>
      <p v-if="type === 1 && boxType === 1">
        {{ $t('message.transactionList.returnPrice1') }}
      </p>
      <p v-if="type === 2 && boxType === 2">
        {{ $t('message.transactionList.lossPirce') }}
      </p>
      <p v-if="type === 1 && boxType === 2">
        {{ $t('message.transactionList.lossPirce1') }}
      </p>
      <span>{{ earnings | splitFormat(2) }} USDT</span>
    </div>
    <v-button @click="submit" size="big" :disabled="buttonIsDisabled">{{
      $t('message.version3.submit')
    }}</v-button>
  </v-layer-box>
</template>
<script>
import { dataMixin, systemMixin, userMixin } from '@/mixins'
import Utils from '@/utils/utils'
import SwapsApi from '@/api/swapsApi'
import { ALERT_PROMPT_STOPLOSSCHANGE } from '@/data/noTip'

export default {
  name: 'CloseLayerBox',
  mixins: [systemMixin, dataMixin, userMixin],
  model: {
    prop: 'isShow',
    event: 'input'
  },
  props: {
    // 来源
    source: {
      type: String,
      default: ''
    },
    // 仓位数据
    layerBoxData: {
      type: Object,
      default: () => ({})
    },
    isShow: {
      type: Boolean,
      default: false
    },
    /**
     * @content 止盈止损弹框类型
     * @param 1 止盈
     * @param 2 止损
     *
     */
    boxType: {
      type: Number,
      default: 1
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
    // 价格验证
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
      type: 2,
      // 表单数据
      form: {
        triggerPrice: '',
        price: '',
        number: ''
      },
      // 表单验证
      rules: {
        triggerPrice: [
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
      // 收益
      earnings: 0,
      // 按钮防多次点击开关
      buttonSwitch: false
    }
  },
  computed: {
    // 止盈止损标题
    layerBoxTitle() {
      return `${this.layerBoxData.name} ${
        this.layerBoxData.side === 1
          ? this.$t('message.transactionList.more')
          : this.$t('message.transactionList.less')
      } ${
        this.boxType === 1
          ? this.$t('message.transactionList.stopProfit')
          : this.$t('message.transactionList.stopLoss')
      }`
    },
    // 止盈止损大于小于号
    layerInput() {
      let inputMap = {
        '11': '>=',
        '12': '<=',
        '21': '<=',
        '22': '>='
      }
      return inputMap['' + this.layerBoxData.side + ('' + this.boxType)]
    },
    currentTicker() {
      return this.tickers[this.layerBoxData.contractId] || {}
    },
    // 提交按钮是否禁用
    buttonIsDisabled() {
      if (this.type === 1) {
        return !Object.values(this.form).every(item => item)
      } else {
        return !(this.form.number && this.form.triggerPrice)
      }
    },
    // 当前语言
    currentLocale() {
      if (this.locale === 'cn') {
        return 'zh-cn'
      } else if (this.locale === 'en') {
        return 'en-us'
      } else {
        return this.locale
      }
    },
    //滑块
    slideValue: {
      get() {
        return this.form.number
      },
      set(val) {
        this.form.number = val ? val + '' : ''
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
    //监听表单,重新收益金额
    form: {
      handler() {
        this.earnings =
          this.type === 1
            ? this.getEarnings(this.form.price, this.form.number)
            : this.getEarnings(this.form.triggerPrice, this.form.number)
      },
      deep: true
    },
    //监听类型切换,切换时不清空表单
    type(value) {
      this.reset()
      this.earnings =
        this.type === 1
          ? this.getEarnings(this.form.price, this.form.number)
          : this.getEarnings(this.form.triggerPrice, this.form.number)
      // this.showWaring(value)
    },
    //隐藏是清空数据
    isShow(value) {
      if (!value) return
      this.type = 2
      this.form.price = ''
      this.form.number = this.layerBoxData.availablePositionQty && this.layerBoxData.availablePositionQty.toString() || ''
      this.form.triggerPrice =  this.layerBoxData.triggerPrice || ''
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
      for (const key in this.form) {
        if (this.form.hasOwnProperty(key)) {
          const element = this.form[key]
          if (!element) {
            this.$refs.form && this.$refs.form.reset(key)
          }
        }
      }
    },
    // 提交
    async submit() {
      try {
        if (this.buttonSwitch) return
        await this.$refs.form.verification()
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
        price: this.type === 1 ? this.form.price : this.currentTicker.last,
        triggerPrice: this.form.triggerPrice,
        mode: this.boxType
      }
      try {
        let re = await SwapsApi.lossClose(params)
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
        if (this.source === 'fullKline') {
          let data = {
            price: params.triggerPrice,
            orderName: this.layerBoxData['orderNameCallback'],
            type: this.layerBoxData['typeCallback']
          }
          this.$emit('resetList',data)
        } else {
          this.$emit('resetList')
        }
      }
    },
    /**
     * 已实现盈亏（多仓）=（平仓价格-开仓价格）* 开仓数量
     * 已实现盈亏（空仓）=（开仓价格-平仓价格）* 开仓数量
     * 注释：开仓数量=手数*乘数
     *
     * 选择限价时候：平仓价格 = 执行价格、平仓数量 = 手数 * 乘数
     * 选择市价时候：平仓价格 = 触发价格、平仓数量 = 手数 * 乘数
     * 计算盈亏方法
     */
    getEarnings(price = 0, amount = 0) {
      console.log(price,amount)
      if (!price || !amount) {
        return 0
      }
      if (this.layerBoxData.side === 1) {
        // 多仓
        return Utils.mul(
          price - this.layerBoxData.entryPrice,
          amount * this.layerBoxData.contractValue
        )
      } else {
        // 空仓
        return Utils.mul(
          this.layerBoxData.entryPrice - price,
          amount * this.layerBoxData.contractValue
        )
      }
    },
    //  切换限价时显示警告
    showWaring(value) {
      if (value === 1) {
        // 弹框不在提示说明去 alert 组件找
        if (!this.promptBoxShowInfo[ALERT_PROMPT_STOPLOSSCHANGE]) {
          this.$alert({
            type: 'prompt',
            content: this.$t('message.usdtTips.priceTitle'),
            contentType: 3,
            promptHTMLString: true,
            prompt: this.$t('message.usdtTips.priceTipInfo', {
              href: `https://58coin-support.zendesk.com/hc/${
                this.currentLocale
              }/articles/360034270853`
            }),
            isShowCancel: false
          })
        }
      }
    }
  }
}
</script>

<style
	lang="less"
	scoped
>
@import (reference) '~@/assets/css/index';

.black {
  .themeBlack();

  .stop-layer-box {
    /deep/ .form-item {
      margin-top: 10px;

      &:nth-child(1) {
        margin: 0;
        margin-bottom: 10px;
      }
    }

    /deep/ .button-warp {
      margin-top: 10px;
    }

    .info {
      .flex-box();
      color: @lightFontColor;
      font-size: 12px;
      width: 300px;

      span {
        color: @darkFontColor;
        margin-left: 5px;
      }
    }
  }
}

.white {
  .themeWhite();

  .stop-layer-box {
    /deep/ .form-item {
      margin-top: 10px;

      &:nth-child(1) {
        margin: 0;
        margin-bottom: 10px;
      }
    }

    /deep/ .button-warp {
      margin-top: 10px;
    }

    .info {
      .flex-box();
      color: @lightFontColor;
      font-size: 12px;
      width: 300px;
      span {
        color: @darkFontColor;
        margin-left: 5px;
      }
    }
  }
}
</style>


