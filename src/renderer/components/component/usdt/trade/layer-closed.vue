<template>
  <div :class="{'layer-closed':'black' === themeValue, 'layer-closed-white': 'white' === themeValue}">
    <div class="content">
      <div class="text" style="padding-left: 75px;padding-right:45px;">
        <span class="icon"></span>
        <span class="text2" v-html="text2"></span><br>
        <span class="text3">{{$t('message.layerClosed.text3')}}</span>
      </div>
    </div>
  </div>
</template>

<script>
  import LayerButton from './layer-button.vue'
  export default {
    name: 'layer-closed',
    components: {
      LayerButton
    },
    props: {
      closedData: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        text1: '',
        text2: '',
        type: '',
        side: ''
      }
    },
    computed: {
      contractInfo() {
        return this.$store.state.market.contract.filter(item => {
          return this.closedData.contractId.toString() === item.id.toString()
        })[0]
      },
      // 此合约的币种
      contractCoin () {
        return this.contractInfo.unit.toUpperCase()
      },
      // 主题
      themeValue () {
        return this.$store.state.dictionary.theme
      },
    },
    methods: {
      changeLeverage (contractId, newLeverage, newPositionType) {
        this.swapsApi.changePositionLeverage({contractId, newLeverage, newPositionType})
          .then(res => {
            this.$toast(this.$t('message.common.success'))
          })
          .catch(e => {})
      },
    },
    mounted () {
      let size, price
      if (this.closedData.type === 1) {
        this.type = this.$t('message.layerClosed.limit')
        size = this.closedData.size
        price = this.closedData.price
      } else if (this.closedData.type === 2) {
        this.type = this.$t('message.layerClosed.market')
        size = this.closedData.size
        price = null
      }
      if (this.closedData.side === 1) {
        this.side = this.$t('message.layerClosed.buy')
      } else if (this.closedData.side === 2) {
        this.side = this.$t('message.layerClosed.sell')
      }
      // 数量价格字体颜色
      if (this.closedData.side === 1) {
        price = '<font style="color: #0AB480">' + price + '</font>';
        size = '<font style="color: #0AB480">'+ size +'</font>';
      } else {
        price = '<font style="color: #E12961">' + price + '</font>';
        size = '<font style="color: #E12961">'+ size +'</font>';
      }
      
      this.text1 = this.side +  ' ' +this.type
      // this.text2 = this.side+'在'+ this.closedData.price +'价格'+this.closedData.size+'张BTC合约'
      if (this.closedData.type === 1) {
        if (this.baseUnit === 'BTC') {
          // this.text2 = this.side + '在' + price + '价格' + size + '个'+ this.contractInfo.unit.toUpperCase()
          this.text2 = this.$t(
            'message.layerClosed.textType1Coin',
            {side: this.side, price: price,type: this.type, size: size, name: this.contractInfo.unit.toUpperCase()}
            )
        } else {
          // this.text2 = this.side + '在' + price + '价格' + size + '张'+ this.contractInfo.name +'合约'
          this.text2 = this.$t(
            'message.layerClosed.textType1',
            {side: this.side, price: price,type: this.type, size: size, name: this.contractInfo.name}
          )
        }
      } else if (this.closedData.type === 2) {
        if (this.baseUnit === 'BTC') {
          // this.text2 = '以' + this.type + this.side + size + '个'+ this.contractInfo.unit.toUpperCase()
          this.text2 = this.$t(
            'message.layerClosed.textType2Coin',
            {type: this.type, side: this.side, size: size, name: this.contractInfo.unit.toUpperCase()}
          )
        } else {
          // this.text2 = '以' + this.type + this.side + size + '张'+ this.contractInfo.name +'合约'
          this.text2 = this.$t(
            'message.layerClosed.textType2',
            {type: this.type, side: this.side, size: size, name: this.contractInfo.name}
          )
        }
      }
    }
  }
</script>

<style lang="less" scoped>
  @import url("../../assets/css/theme");
  .layer-closed {
    .themeBlack();
    background-color: @layerCloseBgColor;
    color: @fontColor;
    .content {
      position: relative;
      margin: 0 auto;
      text-align: center;
      // padding-top: 10px;
      .text {
        padding-bottom: 28px;
        span {
          color: @fontColor;
        }
        .text1 {
          font-size: 14px;
          color: @downColor;
        }
        .text2 {
          text-align: left;
          display: inline-block;
          font-size: 16px;
          float: left;
        }
        .text3 {
          display: inline-block;
          width: 100%;
          text-align: left;
          font-size: 12px;
          color: #7889A9!important;
        }
        .icon {
          position: absolute;
          // top: 10px;
          left: 26px;
          width: 42px;
          height: 42px;
          background: url("../../assets/images/newUI/sell.png") no-repeat;
          // background-color: #F6A217;
          background-size: cover;
          border:1px solid transparent;
          border-radius: 100%;
          display: block;
        }
      }
    }
  }
  .layer-closed-white {
    .themeWhite();
    background-color: @boxBgColor;
    color: @fontColor;
    .content {
      position: relative;
      margin: 0 auto;
      text-align: center;
      // padding-top: 10px;
      .text {
        padding-bottom: 28px;
        span {
          color: #24324C;
        }
        .text1 {
          font-size: 14px;
          color: @downColor;
        }
        .text2 {
          text-align: left;
          display: inline-block;
          font-size: 16px;
          float: left;
        }
        .text3 {
          display: inline-block;
          width: 100%;
          text-align: left;
          font-size: 12px;
          color: #7889A9!important;
        }
        .icon {
          position: absolute;
          // top: 10px;
          left: 20px;
          width: 42px;
          height: 42px;
          background: url("../../assets/images/newUI/sell.png") no-repeat;
          // background-color: #F6A217;
          background-size: cover;
          border:1px solid transparent;
          border-radius: 100%;
          display: block;
        }
      }
    }
  }
</style>
