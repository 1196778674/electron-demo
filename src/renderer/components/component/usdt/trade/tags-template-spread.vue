<!--create by zcy-->
<template>
  <st-row :class="{'tags-template-spread': 'black' === themeValue,
    'tags-template-spread-white': 'white' === themeValue,
   'activeBgColor':active &&  'black' === themeValue, 'activeBgColor-white':active &&  'white' === themeValue}"
          direction="column">
    <div @click="change">
      <p :class="{'product': true, 'productActive': active }">{{contractInfo.name}}</p>
      <st-row ref="ratio" class="ratio" justify="center">
        <p :class="{'red': Number(thisTicker.change) < 0}">{{thisTicker.last | splitFormat(figure.indexPriceFloat) || 0}}</p>
        <p :class="{'red': Number(thisTicker.change) < 0}">{{thisTicker.change || 0}}%</p>
      </st-row>
      <st-row class="label" justify="between">
        <p :class="{'active': active}">{{ $t('message.tradeList.latestPrice') }}</p>
        <p :class="{'active': active}">{{ $t('message.tradeList.gains') }}</p>
      </st-row>
    </div>

  </st-row>
</template>

<script>
  export default {
    name: 'tags-template-spread',
    data() {
      return {
        routeId: this.$route.params.id,
      }
    },
    props: {
      contractInfo: {
        type: Object
      }
    },
    watch: {
      '$route' () {
        this.routeId = this.$route.params.id
      }
    },
    computed: {
      thisTicker () {
        return this.$store.state.market.tickers[this.contractInfo.id] || {}
      },
      // 位数要求
      figure () {
        let tmp = this.$store.state.market.contract.filter(item => {
          return Number(item.id) === Number(this.contractInfo.id)
        })
        return tmp[0] && tmp[0].contractParam
      },
      // 是否是选中
      active () {
        if (Number(this.routeId) === Number(this.contractInfo.id)) {
          return true
        } else {
          return false
        }
      },
      themeValue () {
        return this.$store.state.dictionary.theme
      }
    },
    methods: {
      change () {
        this.$router.push('/trade/' + this.contractInfo.id)
      }
    },
  }
</script>

<style lang="less" scoped="">
  @import "../../assets/css/theme";
  .tags-template-spread {
    .themeBlack();
    width: 100%;
    height: 70px;
    padding: 8px 0 0 10px;
    border-bottom: 1px solid @tagsBorderColor;
    div {
      cursor: pointer;
      width: 100%;
      .product {
        font-size: 14px;
        color: @tagsProductFontColor;
      }
      .ratio {
        width: 100%;
        P {
          width: 50%;
          font-size: 12px;
          font-weight: 500;
          color: @tagsFontColorGreen;
        }
        .red {
          color: @tagsFontColorRed;
        }
      }
      .label {
        width: 100%;
        P {
          width: 50%;
          line-height: 12px;
          font-size: 12px;
          color: @tagsNormalFontColor;
        }
        .active {
          color: @tagsActiveFontColor;
        }
      }
      .productActive {
        color: @tagsProductActiveFontColor;
      }
    }
    &:hover {
      border-bottom: 1px solid @tagsActiveBorderColor;
    }
  }
  .activeBgColor {
    .themeBlack();
    background-color: @tagsActiveBgColor;
  }
  .tags-template-spread-white {
    .themeWhite();
    width: 100%;
    height: 70px;
    padding: 8px 0 0 10px;
    border-bottom: 1px solid @tagsBorderColor;
    div {
      cursor: pointer;
      width: 100%;
      .product {
        font-size: 14px;
        color: @tagsProductFontColor;
      }
      .ratio {
        width: 100%;
        P {
          width: 50%;
          font-size: 12px;
          font-weight: 500;
          color: #03C2A0;
        }
        .red {
          color: @tagsFontColorRed;
        }
      }
      .label {
        width: 100%;
        P {
          width: 50%;
          line-height: 12px;
          font-size: 12px;
          color: @tagsNormalFontColor;
        }
        .active {
          color: #5D6588;
        }
      }
      .productActive {
        color: @tagsProductActiveFontColor;
      }
    }
    &:hover {
      border-bottom: 1px solid @tagsActiveBorderColor;
    }
  }
  .activeBgColor-white {
    .themeWhite();
    background-color: @tagsActiveBgColor;
  }
</style>
