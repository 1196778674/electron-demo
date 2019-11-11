<!--crated by zcy 2018.09-->
<template>
  <div
    :class="{'product-market':'black' === themeValue, 'product-market-white': 'white' === themeValue}"
  >
    <st-row class="top">
      <st-row class="product">
        <span>{{contractInfo.name}}</span>
        <span>{{$t('message.panel.text')}}</span>
      </st-row>
      <st-row class="market">
        <st-row class="item" direction="column">
          <p
            :class="{'value': true, 'green': Number(ticker.change) > 0, 'red': Number(ticker.change) < 0}"
          >
            {{ticker.last || 0 | splitFormat(figure.indexPriceFloat)}}
            <span
              class="rate-money"
              v-if="rate !== 0 "
            >≈{{unit}}{{ (ticker.last * rate) || 0 | splitFormat(figure.indexPriceFloat) }}</span>
          </p>
          <p class="label">{{$t('message.productInfo.lastPrice')}}</p>
        </st-row>
        <st-row class="item" direction="column">
          <p
            :class="{'value': true, 'green': Number(ticker.change) > 0, 'red': Number(ticker.change) < 0}"
          >{{ market[$route.params.id] && market[$route.params.id].indexPrice || 0 | splitFormat(figure.indexPriceFloat)}}</p>
          <p class="label">{{$t('message.productInfo.markPrice')}}</p>
        </st-row>
        <st-row class="item" direction="column">
          <p
            :class="{'value': true, 'green': Number(ticker.change) > 0, 'red': Number(ticker.change) < 0}"
          >{{ ticker.change || 0 | numberFormat }}%</p>
          <p class="label">{{$t('message.productInfo.increase')}}</p>
        </st-row>
        <!--互换补偿率 暂时不显示-->
        <!--<st-row class="item" v-if="market[$route.params.id]" direction="column">-->
        <!--<p :class="{'value': true, 'green': Utils.editE(market[$route.params.id].fundingRate) > 0, 'red': Utils.editE(market[$route.params.id].fundingRate) < 0}">-->
        <!--{{ Utils.editE(market[$route.params.id].fundingRate) > 0?'+':'' }}{{  Utils.mul(market[$route.params.id] && market[$route.params.id].fundingRate,100) || 0 | splitFormat(contractInfo.contractParam.compensationRate) }}%</p>-->
        <!--<p class="label">-->
        <!--{{ $t('message.productInfo.fundingRate') }}-->
        <!--<el-tooltip popper-class="tooltip-content" :content="$t('message.productInfo.prompt')" placement="bottom">-->
        <!--<el-button style="background:none;border:none;padding:0;" class="tooltipinfo iconfont icon-wenhaofill"></el-button>-->
        <!--</el-tooltip>-->
        <!--</p>-->
        <!--</st-row>-->
        <st-row class="item">
          <div class="line"></div>
        </st-row>
        <st-row class="item" direction="column">
          <p class="value">{{ ticker.volume || 0 | numberFormat }}</p>
          <p
            class="label"
          >{{$t('message.productInfo.size')}}({{$t('message.transactionList.A_Hand')}})</p>
        </st-row>
        <st-row class="item" direction="column">
          <p class="value">{{ ticker.high || 0 | splitFormat(figure.indexPriceFloat) }}</p>
          <p class="label">{{$t('message.productInfo.highPrice')}}</p>
        </st-row>
        <st-row class="item" direction="column">
          <p class="value">{{ ticker.low || 0 | splitFormat(figure.indexPriceFloat) }}</p>
          <p class="label">{{$t('message.productInfo.lowPrice')}}</p>
        </st-row>
      </st-row>
    </st-row>
    <slot></slot>
  </div>
</template>

<script>
import Utils from "@/assets/js/utils";
import AccountApi from "@/assets/js/api/accountApi";
export default {
  name: "product-market",
  data() {
    return {
      Utils: Utils,
      rate: 0, // 汇率
      unit: "¥"
    };
  },
  computed: {
    contractInfo() {
      let tem = this.$store.state.market.contract.filter(item => {
        return Number(this.$route.params.id) === Number(item.id);
      });
      return tem[0] || {};
    },
    // 此合约的币种
    contractCoin() {
      return this.contractInfo.unit.toUpperCase();
    },
    lastPrice() {
      return this.$store.state.market[this.$route.params.id]
        ? this.$store.state.market[this.$route.params.id].last
        : "0";
    },
    // K线最新成交价
    specialLastPrice() {
      return this.$store.state.market.specialLastPrice;
    },
    ticker() {
      return this.$store.state.market.tickers[this.$route.params.id] || {};
    },
    bits() {
      return this.$store.state.dictionary.bits;
    },
    market() {
      return this.$store.state.market.market || {};
    },
    // 位数要求
    figure() {
      let tem = this.$store.state.market.contract.filter(item => {
        return Number(item.id) === Number(this.contractInfo.id);
      });
      return (tem[0] && tem[0].contractParam) || {};
    },
    themeValue() {
      return this.$store.state.dictionary.theme;
    }
  },
  watch: {
    "$i18n.locale"() {
      this.unit = this.$i18n.locale === "cn" ? "¥" : "$";
      this.getRate();
    },
    $route() {
      this.init();
    },
    lastPrice(nextPrice, price) {
      if (nextPrice && price) {
        this.isRise = nextPrice >= price;
      }
    }
  },
  methods: {
    getRate() {
      AccountApi.getRateUsd(this.$i18n.locale === "cn" ? 0 : 1).then(res => {
        this.rate = res.data.rate;
      });
    },
    init() {
      this.contractName = this.contractInfo.name;
    },
    setPrice(price, number, type) {
      let arr = {
        type: type,
        price: price,
        number: number
      };
      this.$emit("setPrice", arr);
    }
  },
  created() {
    this.init();
  },
  mounted() {
    // console.log(this.contractInfo)
    this.unit = this.$i18n.locale === "cn" ? "¥" : "$";
    this.getRate();
  }
};
</script>

<style lang="less" scoped="">
@import "../../assets/css/theme";
.product-market {
  .themeBlack();
  position: relative;
  width: 100%;
  min-width: 870px;
  // max-width: 1200px;
  // height: 46px;
  // background-color: @testColor;
  background: @marketBgColor;
  border-radius: 3px;
  .product {
    margin-left: 20px;
    span {
      height: 46px;
      line-height: 46px;
      font-size: 20px;
      color: @marketBrightFontColor;
      &:last-child {
        margin-left: 10px;
        font-size: 18px;
      }
    }
  }
  .market {
    margin-left: 30px;
    .tooltipinfo {
      opacity: 0.5;
      color: #7e9efd;
    }
    .tooltipinfo:hover {
      opacity: 1;
    }
    .item {
      margin-left: 40px;
      padding-top: 8px;
      &:first-child {
        margin-left: 0;
        .rate-money {
          display: inline-block;
          height: 14px;
          font-family: PingFangSC-Regular;
          font-size: 12px;
          color: #8998b6;
        }
      }
      .value {
        font-size: 14px;
        color: @marketBrightFontColor;
      }
      p {
        line-height: 1em;
      }
      .label {
        margin-top: 4px;
        font-size: 12px;
        /*font-weight: 300;*/
        color: @marketFontColor;
      }
    }
    .line {
      margin-top: 8px;
      width: 1px;
      height: 17px;
      background: @marketLineColor;
    }
  }
  .red {
    color: @tradeRed !important;
  }
  .green {
    color: @tradeGreen !important;
  }
  @media screen and (max-width: 1440px) {
    /*.product-market {*/
    /*min-width: 870px !important;*/
    /*}*/
    .market {
      .item {
        margin-left: 30px;
      }
    }
  }
}
.product-market-white {
  .themeWhite();
  position: relative;
  width: 100%;
  min-width: 870px;
  // max-width: 1200px;
  // height: 46px;
  // background-color: @testColor;
  background-color: @marketBgColor;
  border-radius: 3px;
  .top {
    position: relative;
    margin-bottom: 2px;
    z-index: 5;
    box-shadow: 0 2px 10px 0 rgba(89, 122, 185, 0.1);
    .product {
      margin-left: 20px;
      span {
        height: 46px;
        line-height: 46px;
        font-size: 20px;
        color: @marketBrightFontColor;
        &:last-child {
          margin-left: 10px;
          font-size: 18px;
        }
      }
    }
    .market {
      margin-left: 30px;
      .tooltipinfo {
        opacity: 0.5;
        color: #597ab9;
      }
      .tooltipinfo:hover {
        opacity: 1;
      }
      .item {
        margin-left: 40px;
        padding-top: 8px;
        &:first-child {
          margin-left: 0;
          .rate-money {
            display: inline-block;
            height: 14px;
            font-family: PingFangSC-Regular;
            font-size: 12px;
            color: #24324c;
          }
        }
        p {
          line-height: 1em;
        }
        .value {
          font-size: 14px;
          color: @marketBrightFontColor;
        }
        .label {
          margin-top: 4px;
          font-size: 12px;
          /*font-weight: 300;*/
          color: @marketFontColor;
        }
      }
      .line {
        margin-top: 8px;
        width: 1px;
        height: 17px;
        background: @marketLineColor;
      }
    }
    .red {
      color: @tradeRed !important;
    }
    .green {
      color: @tradeGreen !important;
    }
  }
}
@media screen and (max-width: 1440px) {
  /*.product-market {*/
  /*min-width: 870px !important;*/
  /*}*/
  .product-market {
    .market {
      .item {
        margin-left: 20px;
      }
    }
  }
  .product-market-white {
    .market {
      .item {
        margin-left: 20px !important;
        &:first-child {
          margin-left: 0 !important;
        }
      }
    }
  }
}
</style>
