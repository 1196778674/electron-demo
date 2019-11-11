<template>
  <div
    :class="{'layer-trade': themeValue === 'black', 'layer-trade-white': themeValue === 'white'}"
  >
    <div class="content">
      <div class="text">
        <span class="text2">
          <span v-html="getSideText(orderData.side, orderData.close)"></span>
        </span>
        <span class="icon" v-if="orderData.type === 1">{{$t('message.createdEntrust.limit')}}</span>
        <span class="icon1" v-else-if="orderData.type === 2">{{$t('message.createdEntrust.market')}}</span>
      </div>
      <div class="container">
        <st-row class="info">
          <st-row class="item" direction="column">
            <p>{{contractInfo.name}}</p>
            <p>{{$t('message.createdEntrust.A_contract')}}</p>
          </st-row>
          <st-row class="item" direction="column" v-if="!orderData.close">
            <p>{{orderData.leverage | splitFormat(2) }} X</p>
            <p>{{$t('message.createdEntrust.A_leverage')}}</p>
          </st-row>
          <st-row class="item" direction="column">
            <p>{{ getSideText1(orderData.side, orderData.close) }}</p>
            <p>{{$t('message.createdEntrust.A_direction')}}</p>
          </st-row>
          <st-row class="item" direction="column">
            <p>{{ orderData.type === 1 ? $t('message.createdEntrust.A_limit') : $t('message.createdEntrust.A_market') }}</p>
            <p>{{$t('message.createdEntrust.A_type')}}</p>
          </st-row>
        </st-row>
        <st-row class="info">
          <st-row class="item" direction="column" v-if="orderData.type === 1">
            <p>{{orderData.price}}</p>
            <p>{{$t('message.createdEntrust.A_price')}}</p>
          </st-row>
          <st-row class="item" direction="column">
            <p>{{orderData.size}}</p>
            <p>{{$t('message.createdEntrust.A_Amount')}}</p>
          </st-row>
          <st-row class="item" direction="column" v-if="!orderData.close">
            <p>{{ deposit }}</p>
            <p>{{$t('message.createdEntrust.A_margin')}}</p>
          </st-row>
          <!-- 正常下单 -->
          <st-row class="item" direction="column">
            <p
              :style="{color: utils.splitFormat(utils.editE(utils.mul(walletAsset.risk || 0, 100)), 0) > 50 ? '#E12961' : '#0AB480'}"
            >{{ utils.splitFormat(utils.editE(utils.mul(walletAsset.risk || 0, 100)), 0) }}%</p>
            <p>{{$t('message.createdEntrust.A_riskLevel')}}</p>
          </st-row>
        </st-row>
        <!-- 平仓状态 -->
        <st-row class="info" v-if="orderData.close">
          <st-row class="item" direction="column">
            <p>{{ utils.mul(utils.editE(walletAsset.risk) || 0, 100) | splitFormat(2)}}%</p>
            <p>{{$t('message.createdEntrust.A_ror')}}</p>
          </st-row>
        </st-row>
        <!-- <st-row class="marketinfo" v-if="orderData.type === 2">
          提示：当前您的交易方式为市价，价格将完全按照市场价格成交，单量过度时将会导致市场价格变动，您的最终成交价格将不可控，望悉知。
        </st-row>-->
      </div>
    </div>
  </div>
</template>

<script>
import LayerButton from "./layer-button.vue";
import Utils from "@/assets/js/utils";
export default {
  name: "layer-trade",
  components: {
    LayerButton
  },
  props: {
    orderData: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      utils: Utils,
      deposit: ""
    };
  },
  computed: {
    contractInfo() {
      let tmp = this.$store.state.market.contract.filter(item => {
        return Number(item.id) === Number(this.orderData.contractId);
      });
      return tmp[0] || {};
    },
    market() {
      return this.$store.state.market.market || {};
    },
    // 位数要求
    figure() {
      let tmp = this.$store.state.market.contract.filter(item => {
        return Number(item.id) === Number(this.contractInfo.id);
      });
      return (tmp[0] && tmp[0].contractParam) || {};
    },
    // 主题
    themeValue() {
      return this.$store.state.dictionary.theme;
    },
    walletAsset() {
      return this.$store.state.user.walletAsset || {};
    },
    indexPrice() {
      return (
        this.$store.state.market.market[this.$route.params.id] &&
        this.$store.state.market.market[this.$route.params.id].indexPrice
      );
    }
  },
  methods: {
    // 占用保证金=（开仓价格/杠杆*开仓数量*乘数）+（开仓价格*开仓数量*乘数*taker）
    getDeposit() {
      let price = this.orderData.price || Utils.mul(this.indexPrice, 1.03);
      let margin = this.orderData.leverage;
      let amount = this.orderData.size;
      // let taker = this.$store.state.user.wallet.commisionList.filter(item => {
      //   return item.contractId.toString() === this.$route.params.id
      // })[0].takerCommision
      let num = this.contractInfo.value;
      let a = Utils.mul(Utils.mul(Utils.div(price, margin), amount), num);
      // let b = Utils.mul(Utils.mul(Utils.mul(price, amount), num), taker)
      let deposit = a;
      this.deposit = this.$filter.splitFormat(deposit, 2);
    },
    getSideText(side, close) {
      if (close) {
        if (side === 1) {
          return this.$t("message.createdEntrust.A_buy_flat");
        } else {
          return this.$t("message.createdEntrust.A_sell_flat");
        }
      } else {
        if (side === 1) {
          return this.$t("message.createdEntrust.A_buy_title", {
            num: this.orderData.size,
            name: this.contractInfo.name,
            color: "#0AB480"
          });
        } else {
          return this.$t("message.createdEntrust.A_sell_title", {
            num: this.orderData.size,
            name: this.contractInfo.name,
            color: "#E12961"
          });
        }
      }
    },
    getSideText1(side, close) {
      if (close) {
        if (side === 1) {
          return this.$t("message.createdEntrust.A_buy_flat");
        } else {
          return this.$t("message.createdEntrust.A_sell_flat");
        }
      } else {
        if (side === 1) {
          return this.$t("message.createdEntrust.A_buy");
        } else {
          return this.$t("message.createdEntrust.A_sell");
        }
      }
    }
  },
  created() {
    this.getDeposit();
  }
};
</script>

<style lang="less" scoped>
@import url("../../assets/css/theme");
.layer-trade {
  .themeBlack();
  padding-top: 25px;
  padding-bottom: 27px;
  background-color: @layerTradeBgColor;
  color: @fontColor;
  .content {
    margin-left: 30px;
    .text {
      position: relative;
      span {
        color: @fontColor;
      }
      .text1 {
        font-size: 14px;
        color: @downColor;
      }
      .text2 {
        font-size: 16px;
      }
      .text3 {
        font-size: 12px;
      }
      .icon {
        margin-left: 10px;
        padding: 0 5px;
        position: relative;
        top: -2px;
        display: inline-block;
        /*width: 30px;*/
        height: 18px;
        background-color: rgb(244, 120, 104);
        border-radius: 4px;
        text-align: center;
        font-size: 12px;
        line-height: 18px;
        color: #fff;
        &:after {
          position: absolute;
          top: 0;
          left: -7px;
          content: "";
          border-right: 9px solid rgb(244, 120, 104);
          border-top: 9px solid transparent;
          border-bottom: 9px solid transparent;
        }
      }
      .icon1 {
        margin-left: 10px;
        padding: 0 5px;
        position: relative;
        display: inline-block;
        /*width: 30px;*/
        height: 18px;
        background-color: #7e9efd;
        border-radius: 4px;
        text-align: center;
        font-size: 12px;
        line-height: 18px;
        color: #fff;
        &:after {
          position: absolute;
          top: 0;
          left: -7px;
          content: "";
          border-right: 9px solid #7e9efd;
          border-top: 9px solid transparent;
          border-bottom: 9px solid transparent;
        }
      }
    }
    .container {
      width: 100%;
      margin-top: 16px;
      padding-right: 30px;
      .info {
        margin-top: 20px;
        .item {
          margin-left: 2px;
          width: 25%;
          // height: 50px;
        }
        p {
          width: 100%;
          color: @fontColor;
          // word-break: break-all;
          // text-align: center;
          &:nth-child(1) {
            font-size: 14px;
          }
          &:nth-child(2) {
            font-size: 12px;
            color: #7889a9;
          }
        }
        .center {
          padding-left: 10px;
        }
      }
      .balance {
        margin-top: 26px;
        margin-bottom: 6px;
        p {
          font-size: 12px;
          color: @layerTradeFontColor;
        }
      }
      .marketinfo {
        margin-top: 20px;
        font-size: 12px;
        color: #7889a9;
        letter-spacing: 0;
      }
    }
    .leverage {
      padding-left: 130px;
      // padding-bottom:20px;
      .pic {
        position: relative;
        width: 246px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        background: linear-gradient(
          to right,
          rgba(50, 178, 143, 0.8),
          rgba(185, 46, 93, 0.8)
        );
        .warn {
          position: absolute;
          display: inline-block;
          width: 14px;
          height: 12px;
          top: 14px;
          right: 10px;
          color: #fff;
          background-image: url("../../assets/images/warn.png");
        }
      }
      .slider {
        margin: 12px 0 0 0;
        width: 248px;
      }
    }
    .trade-table {
      padding: 30px 0;
      table {
        margin: 0 auto;
        width: 380px;
        border-collapse: collapse;
      }
      table tr td {
        height: 30px;
        font-size: 12px;
        text-align: left;
        padding-left: 10px;
        border: 1px solid #1e2137;
        color: @fontColor;
      }
    }
  }
}
.layer-trade-white {
  .themeWhite();
  padding-top: 25px;
  padding-bottom: 27px;
  background-color: @boxBgColor;
  color: #24324c;
  .content {
    margin-left: 30px;
    .text {
      position: relative;
      span {
        color: #24324c;
      }
      .text1 {
        font-size: 14px;
        color: @downColor;
      }
      .text2 {
        font-size: 16px;
      }
      .text3 {
        font-size: 12px;
      }
      .icon {
        margin-left: 10px;
        padding: 0 5px;
        position: relative;
        top: -2px;
        display: inline-block;
        /*width: 30px;*/
        height: 18px;
        background-color: rgb(244, 120, 104);
        border-radius: 4px;
        text-align: center;
        font-size: 12px;
        line-height: 18px;
        color: #fff;
        &:after {
          position: absolute;
          top: 0;
          left: -7px;
          content: "";
          border-right: 9px solid rgb(244, 120, 104);
          border-top: 9px solid transparent;
          border-bottom: 9px solid transparent;
        }
      }
      .icon1 {
        margin-left: 10px;
        padding: 0 5px;
        position: relative;
        display: inline-block;
        /*width: 30px;*/
        height: 18px;
        background-color: #7e9efd;
        border-radius: 4px;
        text-align: center;
        font-size: 12px;
        line-height: 18px;
        color: #fff;
        &:after {
          position: absolute;
          top: 0;
          left: -7px;
          content: "";
          border-right: 9px solid #7e9efd;
          border-top: 9px solid transparent;
          border-bottom: 9px solid transparent;
        }
      }
    }
    .container {
      width: 100%;
      margin-top: 16px;
      padding-right: 30px;
      .info {
        margin-top: 20px;
        .item {
          width: 25%;
          // height: 50px;
        }
        p {
          width: 100%;
          color: #24324c;
          // text-align: center;
          &:nth-child(1) {
            font-size: 14px;
          }
          &:nth-child(2) {
            font-size: 12px;
            color: @normalFontColor;
          }
        }
      }
      .balance {
        margin-top: 26px;
        margin-bottom: 6px;
        p {
          font-size: 12px;
          color: #24324c;
        }
      }
    }
    .leverage {
      padding-left: 130px;
      // padding-bottom:20px;
      .pic {
        position: relative;
        width: 246px;
        height: 40px;
        line-height: 40px;
        text-align: center;
        color: #fff;
        background: linear-gradient(
          to right,
          rgba(50, 178, 143, 0.8),
          rgba(185, 46, 93, 0.8)
        );
        .warn {
          position: absolute;
          display: inline-block;
          width: 14px;
          height: 12px;
          top: 14px;
          right: 10px;
          color: #fff;
          background-image: url("../../assets/images/warn.png");
        }
      }
      .slider {
        margin: 12px 0 0 0;
        width: 248px;
      }
    }
    .trade-table {
      padding: 30px 0;
      table {
        margin: 0 auto;
        width: 380px;
        border-collapse: collapse;
      }
      table tr td {
        height: 30px;
        font-size: 12px;
        text-align: left;
        padding-left: 10px;
        border: 1px solid #1e2137;
        color: @fontColor;
      }
    }
  }
}
</style>
