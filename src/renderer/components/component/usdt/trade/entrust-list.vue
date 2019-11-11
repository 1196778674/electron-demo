<template>
  <div
    :class="{'entrust-list':'black' === themeValue,
   'entrust-list-white': 'white' === themeValue, height: boxHeight}"
    v-if="show"
  >
    <div class="list">
      <div class="table">
        <div class="thead">
          <st-row class="tr" align="center" style="padding: 0 10px; height: 32px;">
            <div class="th">{{$t('message.entrustList.price')}}</div>
            <div class="th" style="padding-right: 14px;">{{ $t('message.entrustList.size') }}</div>
            <div class="th">{{$t('message.entrustList.amount')}}</div>
          </st-row>
        </div>
        <div class="tbody">
          <st-row
            :style="{
              background: `-webkit-linear-gradient(to left, #2d1e33 ${(item.amount?(item.amount/getTotalAmount * 100):0)+'%'}, transparent 0)`,
              background: `-o-linear-gradient(to left, #2d1e33 ${(item.amount?(item.amount/getTotalAmount * 100):0)+'%'}, transparent 0)`,
              background: `-moz-linear-gradient(to left, #2d1e33 ${(item.amount?(item.amount/getTotalAmount * 100):0)+'%'}, transparent 0)`,
              background: `linear-gradient(to left, #2d1e33 ${(item.amount?(item.amount/getTotalAmount * 100):0)+'%'}, transparent 0)`
            }"
            class="tr trs tr-sell"
            v-for="item in sellOrder"
            v-if="themeValue === 'black'"
            align="center"
            @callback="setPrice(item.price)"
            :key="item.id"
          >
            <div
              class="td sell"
              style="padding-left: 10px;color: #e12961;text-align: left;"
              v-html="item.price ? item.price : '-'"
            ></div>
            <div class="td" v-html="item.amount ? item.amount.toFixed(0) : '-'"></div>
            <div
              class="td"
              style="padding-right: 10px"
              v-html="item.number ? item.number.toFixed(0): '-'"
            ></div>
          </st-row>
          <st-row
            :style="{
              background: `-webkit-linear-gradient(to left, #FCF1F4 ${(item.amount?(item.amount/getTotalAmount * 100):0)+'%'}, transparent 0)`,
              background: `-o-linear-gradient(to left, #FCF1F4 ${(item.amount?(item.amount/getTotalAmount * 100):0)+'%'}, transparent 0)`,
              background: `-moz-linear-gradient(to left, #FCF1F4 ${(item.amount?(item.amount/getTotalAmount * 100):0)+'%'}, transparent 0)`,
              background: `linear-gradient(to left, #FCF1F4 ${(item.amount?(item.amount/getTotalAmount * 100):0)+'%'}, transparent 0)`
            }"
            class="tr trs tr-sell"
            v-for="item in sellOrder"
            v-if="themeValue === 'white'"
            align="center"
            @callback="setPrice(item.price)"
            :key="item.id"
          >
            <div
              class="td sell"
              style="padding-left: 10px;color: #e12961;text-align: left;"
              v-html="item.price ? item.price : '-'"
            ></div>
            <div class="td" v-html="item.amount ? item.amount.toFixed(0) : '-'"></div>
            <div
              class="td"
              style="padding-right: 10px"
              v-html="item.number ? item.number.toFixed(0): '-'"
            ></div>
          </st-row>
          <st-row class="tr" style="height: 48px;">
            <div class="td-center">
              <div class="info">
                <p class="new lastPrice-tip" @click="setPrice(specialLastPrice)">
                  {{specialLastPrice | splitFormat(figure.indexPriceFloat) || 0}}
                  <b
                    class="rate-money"
                    v-if="rate !== 0"
                  >≈{{unit}}{{ specialLastPrice * rate | splitFormat(figure.indexPriceFloat) }}</b>
                  <span>{{$t('message.entrustList.lastPrice')}}</span>
                </p>
                <p class="detail">
                  <!--<span class="icon_incline"></span>-->
                  <span
                    class="indexPrice-tip"
                    @click="setPrice(market[$route.params.id].indexPrice)"
                  >
                    {{market[$route.params.id] && market[$route.params.id].indexPrice || 0 | splitFormat(figure.indexPriceFloat)}}
                    <span>{{$t('message.entrustList.indexPrice')}}</span>
                  </span>
                  <!-- <span style="display: inline-block;height: 10px;margin-left: 10px;padding-left: 10px;border-left: 1px solid #5c6186;"></span>
                  <span class="fairPrice-tip"
                        @click="setPrice(market[$route.params.id].indexPrice)">
                    {{market[$route.params.id] && market[$route.params.id].indexPrice || 0 | splitFormat(figure.indexPriceFloat)}}
                    <span>{{$t('message.entrustList.fairPrice')}}</span>
                  </span>-->
                </p>
              </div>
            </div>
          </st-row>
          <st-row
            v-for="item in buyOrder"
            v-if="themeValue === 'black'"
            align="center"
            @callback="setPrice(item.price)"
            :key="item.id"
            class="bottom-content tr trs tr-buy"
            :style="{
              background: `-webkit-linear-gradient(to left, #1d2f3b ${(item.amount?(item.amount/getTotalAmount * 100):0)+'%'}, transparent 0)`,
              background: `-o-linear-gradient(to left, #1d2f3b ${(item.amount?(item.amount/getTotalAmount * 100):0)+'%'}, transparent 0)`,
              background: `-moz-linear-gradient(to left, #1d2f3b ${(item.amount?(item.amount/getTotalAmount * 100):0)+'%'}, transparent 0)`,
              background: `linear-gradient(to left, #1d2f3b ${(item.amount?(item.amount/getTotalAmount * 100):0)+'%'}, transparent 0)`,
            }"
          >
            <div
              class="td buy"
              style="padding-left: 10px; color: #0ab480;text-align: left;"
              v-html="item.price ? item.price : '-' "
            ></div>
            <div class="td" v-html="item.amount ? item.amount.toFixed(0) : '-'"></div>
            <div
              class="td"
              style="padding-right: 10px"
              v-html="item.number ? item.number.toFixed(0): '-'"
            ></div>
          </st-row>
          <st-row
            v-for="item in buyOrder"
            v-if="themeValue === 'white'"
            align="center"
            @callback="setPrice(item.price)"
            :key="item.id"
            class="bottom-content tr trs tr-buy"
            :style="{
              background: `-webkit-linear-gradient(to left, #F6FBFA ${(item.amount?(item.amount/getTotalAmount * 100):0)+'%'}, transparent 0)`,
              background: `-o-linear-gradient(to left, #F6FBFA ${(item.amount?(item.amount/getTotalAmount * 100):0)+'%'}, transparent 0)`,
              background: `-moz-linear-gradient(to left, #F6FBFA ${(item.amount?(item.amount/getTotalAmount * 100):0)+'%'}, transparent 0)`,
              background: `linear-gradient(to left, #F6FBFA ${(item.amount?(item.amount/getTotalAmount * 100):0)+'%'}, transparent 0)`,
            }"
          >
            <div
              class="td buy"
              style="padding-left: 10px; color: #0ab480;text-align: left;"
              v-html="item.price ? item.price : '-' "
            ></div>
            <div class="td" v-html="item.amount ? item.amount.toFixed(0) : '-'"></div>
            <div
              class="td"
              style="padding-right: 10px"
              v-html="item.number ? item.number.toFixed(0): '-'"
            ></div>
          </st-row>
        </div>
      </div>
      <st-row class="deep">
        <p>{{$t('message.entrustList.deep')}}：</p>
        <st-row class="deep-button">
          <a
            @click="mergeDeep(item)"
            :class="[deep === item ? 'active' : '']"
            v-for="(item, index) in deepList"
            v-if="index<2"
            :key="index"
          >{{ item }}{{$t('message.entrustList.bit')}}</a>
        </st-row>
      </st-row>
    </div>
  </div>
</template>

<script>
import Utils from "../../assets/js/utils";
import Cookie from "@/assets/js/config/cookie";
import AccountApi from "@/assets/js/api/accountApi";
import Sub from "@/assets/js/sub";
export default {
  name: "entrust-list",
  data() {
    return {
      newPrice: [],
      sellOrder: [],
      buyOrder: [],
      deep: null,
      showItem: 6, // 显示数据条数,
      show: true,
      boxHeight: "",
      rate: 0,
      local: "",
      unit: "¥",
      sub: new Sub()
    };
  },
  props: {
    productInfo: {
      type: Object,
      requried: true
    }
    //      contractInfo: {
    //        type: Object,
    //        requried: true
    //      }
  },
  computed: {
    contractInfo() {
      let tmp = this.$store.state.market.contract.filter(item => {
        return Number(item.id) === Number(this.$route.params.id);
      });
      return tmp[0] || {};
    },
    // 此合约的币种
    contractCoin() {
      // console.log(123, this.contractInfo.name.substring(0, 3))
      return this.contractInfo.name.substring(0, 3);
    },
    bits() {
      return this.$store.state.dictionary.bits;
    },
    deepList() {
      // console.log('figure',this.figure.entrustPriceFloat)
      let tmp = this.figure.handicapFloat || 4;
      let arr = [];
      for (let i = 0; i <= tmp; i++) {
        if (tmp - i >= 0) {
          if (arr.length < 3) {
            arr.push(tmp - i);
          }
        }
      }
      // let arr = [tmp - 0, tmp - 1, tmp - 2]
      return arr;
      // return this.$store.state.dictionary.bits.deep
    },
    lastPrice() {
      return this.$store.state.market.tickers[this.contractInfo.id]
        ? this.$store.state.market.tickers[this.contractInfo.id].last
        : "0";
    },
    // K线最新成交价
    specialLastPrice() {
      return Number(this.$store.state.market.specialLastPrice)
        ? this.$store.state.market.specialLastPrice
        : this.lastPrice;
    },
    sell() {
      return (
        (this.$store.state.market.order[this.contractInfo.id] &&
          this.$store.state.market.order[this.contractInfo.id].asks) ||
        []
      );
    },
    buy() {
      return (
        (this.$store.state.market.order[this.contractInfo.id] &&
          this.$store.state.market.order[this.contractInfo.id].bids) ||
        []
      );
    },
    getTotalAmount() {
      let a = this.sellOrder.concat(this.buyOrder);
      let b = [];
      a.forEach(item => {
        let amount = item.amount ? item.amount : 0;
        b.push(amount);
      });
      return Math.max(...b);
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
    themeValue() {
      return this.$store.state.dictionary.theme;
    },
    screenWidth() {
      return this.$store.state.dictionary.screenWidth;
    },
    screenHeight() {
      return this.$store.state.dictionary.screenHeight;
    }
  },
  watch: {
    "$i18n.locale"() {
      this.local = this.$i18n.locale === "cn" ? 0 : 1;
      this.unit = this.$i18n.locale === "cn" ? "¥" : "$";
      this.getRate(this.local);
    },
    $route() {
      this.init();
    },
    sellOrder: {
      handler(val) {
        if (val instanceof Array && val.length > 0) {
          let price = val[val.length - 1].price || "";
          this.$store.commit("market/SET_SELLONE", price);
        }
      },
      deep: true,
      immediate: true
    },
    buyOrder: {
      handler(val) {
        if (val instanceof Array && val.length > 0) {
          let price = val[0].price || "";
          this.$store.commit("market/SET_BUYONE", price);
        }
      },
      deep: true,
      immediate: true
    },
    sell(val) {
      this.sellOrder = this.merge(val).reverse();
      this.getNewsPrice();
    },
    buy(val) {
      this.buyOrder = this.merge(val, true);
      if (
        this.sellOrder[this.showItem - 1].price &&
        this.buyOrder[0].price &&
        Number(this.buyOrder[0].price) >=
          Number(this.sellOrder[this.showItem - 1].price)
      ) {
        this.sub.cancelOrderBook(this.contractInfo.id);
        this.sub.subOrderBook(this.contractInfo.id);
      }
      this.getNewsPrice();
    },
    deep(val) {
      this.sellOrder = this.merge(this.sell).reverse();
      this.buyOrder = this.merge(this.buy, true);
    },
    "$store.state.dictionary.screenWidth": {
      handler(val) {
        if (this.screenHeight <= 760 || this.screenWidth <= 1366) {
          this.boxHeight = "338px";
          this.showItem = 6;
        } else {
          this.boxHeight = "470px";
          this.showItem = 10;
        }
      },
      immediate: true
    },
    "$store.state.dictionary.screenHeight": {
      handler(val) {
        if (this.screenHeight <= 760 || this.screenWidth <= 1366) {
          this.boxHeight = "338px";
          this.showItem = 6;
        } else {
          this.boxHeight = "470px";
          this.showItem = 10;
        }
      },
      immediate: true
    },
    showItem() {
      this.init();
    }
  },
  methods: {
    init() {
      this.newPrice = [];
      this.sellOrder = this.merge(this.sell).reverse();
      this.buyOrder = this.merge(this.buy, true);
      this.deep = this.figure.handicapFloat || 4;
    },
    // 合并深度
    mergeDeep(deep) {
      this.deep = deep;
    },
    // 合并深度算法
    merge(data, type) {
      return Utils.deepFn.merge(
        data,
        type,
        this.deep,
        this.showItem,
        this.bits.size
      );
    },
    setPrice(price) {
      if (!price || price === "0") {
        price = "";
      } else {
        price = this.$filter.splitFormat(price, this.figure.indexPriceFloat);
      }
      this.$store.commit("market/SET_OPERATEPRICE", price);
    },
    getNewsPrice() {
      if (this.newPrice.length === 2) {
        return false;
      }
      if (
        this.sellOrder[this.sellOrder.length - 1] &&
        this.sellOrder[this.sellOrder.length - 1].price &&
        this.buyOrder[0] &&
        this.buyOrder[0].price
      ) {
        this.newPrice[0] = this.sellOrder[this.sellOrder.length - 1].price;
        this.newPrice[1] = this.buyOrder[0].price;
      }
    },
    getRate(data) {
      AccountApi.getRateUsd(data).then(res => {
        this.rate = res.data.rate;
      });
    }
  },
  created() {
    this.init();
    this.local = this.$i18n.locale === "cn" ? 0 : 1;
    this.unit = this.$i18n.locale === "cn" ? "¥" : "$";
    this.getRate(this.local);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../assets/css/theme";
.entrust-list {
  .themeBlack();
  background: #121723;
  overflow-y: hidden;
  .transition(height ease-in-out 0.15s);
  &.show {
    height: 470px;
  }
  &.hide {
    height: 40px;
  }
  .title {
    height: 40px;
    background-color: @titleBgColor;
    .arrow {
      width: 36px;
      height: 40px;
      cursor: pointer;
      a {
        display: block;
        width: 10px;
        height: 6px;
        background: url(../../assets/images/jiantou.png);
        .transition(transform ease-in-out 0.15s);
        &.rotate {
          .transform(rotate(-90deg));
        }
      }
    }
    h3 {
      font-size: 14px;
      color: @fontColor;
    }
  }
  .list {
    // padding-top: 6px;
    background: #121723;
    .table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      .thead {
        .tr {
          height: 28px;
          .th {
            width: 32%;
            font-size: 12px;
            font-weight: 300;
            color: #5d6588;
            text-align: right;
            &:first-child {
              width: 32%;
              text-align: left;
            }
            &:nth-child(2) {
              width: 36%;
            }
            &:nth-of-type(2) {
              padding-right: 20px;
            }
          }
        }
      }
      .tbody {
        // padding: 0 10px;
        .tr {
          height: 17px;
          margin-bottom: 1px;
          cursor: pointer;
          &.trs {
            // border-bottom: 1px solid @boxBgColor;
            &::after {
              content: "";
              display: block;
              margin-top: 21px;
              margin-left: -503px;
              width: 500px;
              // height: 1px;
              background-color: @boxBgColor;
            }
            &.tr-sell:last-of-type::after,
            &.tr-buy:last-of-type::after {
              display: none;
            }
            &:hover {
              background: #20273d padding-box !important;
            }
          }
          hr {
            // margin: 0 10px 0 16px;
            border: none;
            border-top: 1px solid @tableBorderColor;
          }
          .td {
            width: 32%;
            position: relative;
            z-index: 1;
            font-size: 12px;
            font-weight: 500;
            color: @fontColor;
            text-align: right;
            &:first-child {
              width: 36%;
              text-align: left;
            }
            &:nth-of-type(2) {
              padding-right: 20px;
            }
            &:last-child {
              padding-right: 3px;
            }
            &.sell {
              color: @tradeRed;
            }
            &.buy {
              color: @tradeGreen;
            }
            &:first-child {
              width: 32%;
              text-align: left;
            }
            &:nth-of-type(2) {
              width: 36%;
              padding-right: 20px;
            }
            &:last-child {
              padding-right: 3px;
            }
            &.sell {
              color: @tradeRed;
            }
            &.buy {
              color: @tradeGreen;
            }
          }
          .td-center {
            width: 100%;
            // height: 100px;
            position: relative;
            z-index: 1;
            font-size: 12px;
            color: @fontColor;
            text-align: right;
          }
          .info {
            width: 100%;
            text-align: center;
            display: block;
            height: 40px;
            .new {
              width: 100%;
              font-size: 16px;
              color: @tradeGreen;
            }
            .lastPrice-tip {
              position: relative;
              display: inline-block;
              // vertical-align: text-top;
              cursor: pointer;
              span {
                display: none;
              }
              .rate-money {
                display: inline;
                // vertical-align: text-top;
                font-weight: normal;
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #8998b6;
                // line-height: 24px;
              }
              &:hover {
                span {
                  position: absolute;
                  display: inline-block;
                  padding: 0 10px;
                  white-space: nowrap;
                  height: 24px;
                  line-height: 24px;
                  font-size: 12px;
                  .border-radius(2px);
                  /*left: 40px;*/
                  left: 50%;
                  transform: translateX(-50%);
                  top: -24px;
                  background: #20283b;
                  color: #cbd7f0;
                  text-align: center;
                  &::after {
                    content: "";
                    position: absolute;
                    /*right: 8px;*/
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: -5px;
                    border-top: 6px solid #20283b;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                  }
                }
              }
            }
            .red {
              font-size: 18px;
              color: #e6491a;
            }
            .detail {
              position: relative;
              width: 100%;
              span {
                font-size: 12px;
                color: @fontColor;
                cursor: default;
              }
              .line {
                margin: 0 10px;
                width: 1px;
                height: 12px;
                background: #6279a0;
              }
              .indexPrice-tip {
                position: relative;
                display: inline-block;
                // vertical-align: text-top;
                cursor: pointer;
                span {
                  display: none;
                }
                &:hover {
                  span {
                    display: inline-block;
                    padding: 0 10px;
                    height: 24px;
                    line-height: 24px;
                    white-space: nowrap;
                    .border-radius(2px);
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: -30px;
                    background: #20283b;
                    color: #cbd7f0;
                    text-align: center;
                    &::after {
                      content: "";
                      position: absolute;
                      left: 50%;
                      transform: translateX(-50%);
                      bottom: -5px;
                      border-top: 6px solid #20283b;
                      border-left: 5px solid transparent;
                      border-right: 5px solid transparent;
                    }
                  }
                }
              }
              .fairPrice-tip {
                position: relative;
                display: inline-block;
                // vertical-align: text-top;
                cursor: pointer;
                span {
                  display: none;
                }
                &:hover {
                  span {
                    display: inline-block;
                    padding: 0 10px;
                    height: 24px;
                    line-height: 24px;
                    white-space: nowrap;
                    .border-radius(2px);
                    position: absolute;
                    /*left: 10px;*/
                    left: 50%;
                    transform: translateX(-50%);
                    top: -30px;
                    background: #20283b;
                    color: #cbd7f0;
                    text-align: center;
                    &::after {
                      content: "";
                      position: absolute;
                      /*right: 68px;*/
                      left: 50%;
                      transform: translateX(-50%);
                      bottom: -5px;
                      border-top: 6px solid #20283b;
                      border-left: 5px solid transparent;
                      border-right: 5px solid transparent;
                    }
                  }
                }
              }
            }
            .icon_incline {
              /*position: absolute;*/
              /*top: 4px;*/
              /*left: 46px;*/
              display: inline-block;
              width: 12px;
              height: 12px;
              // line-height: 20px;
              background-image: url("../../assets/images/incline2.png");
              background-repeat: no-repeat;
            }
          }
        }
        .bottom-content {
          border-color: #2d3e30;
        }
      }
    }
    .deep {
      margin-top: 5px;
      p {
        padding-left: 10px;
        line-height: 20px;
        font-size: 12px;
        color: @entrustListDeepColor;
      }
      .deep-button {
        a {
          display: block;
          margin-top: 2px;
          margin-left: 10px;
          padding: 0 6px;
          font-size: 12px;
          text-align: center;
          line-height: 16px;
          color: @entrustListDeepFontColor;
          background: #20283b;
          border-radius: 3px;
          &.active {
            line-height: 16px;
            color: #cbd7f0;
            background: #394259;
            &:hover {
              line-height: 16px;
              border: none;
              color: #cbd7f0;
              background: #394259;
            }
          }
          &:hover {
            line-height: 16px;
            color: #cbd7f0;
            background: #394259;
          }
        }
      }
    }
  }
}
.entrust-list-white {
  .themeWhite();
  background: @boxBgColor;
  overflow-y: hidden;
  .transition(height ease-in-out 0.15s);
  &.show {
    height: 470px;
  }
  &.hide {
    height: 40px;
  }
  .title {
    height: 40px;
    background-color: @titleBgColor;
    .arrow {
      width: 36px;
      height: 40px;
      cursor: pointer;
      a {
        display: block;
        width: 10px;
        height: 6px;
        background: url(../../assets/images/jiantou.png);
        .transition(transform ease-in-out 0.15s);
        &.rotate {
          .transform(rotate(-90deg));
        }
      }
    }
    h3 {
      font-size: 14px;
      color: @fontColor;
    }
  }
  .list {
    // padding-top: 6px;
    .table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      .thead {
        .tr {
          height: 28px;
          .th {
            width: 32%;
            font-size: 12px;
            font-weight: 350;
            color: @entrustListTitleFontColor;
            text-align: right;
            &:first-child {
              width: 32%;
              text-align: left;
            }
            &:nth-child(2) {
              width: 36%;
            }
            &:nth-of-type(2) {
              padding-right: 20px;
            }
          }
        }
      }
      .tbody {
        // padding: 0 10px;
        .tr {
          height: 17px;
          margin-bottom: 1px;
          cursor: pointer;
          &.trs {
            // border-bottom: 1px solid @boxBgColor;
            &::after {
              content: "";
              display: block;
              margin-top: 21px;
              margin-left: -503px;
              width: 500px;
              // height: 1px;
              background-color: @boxBgColor;
            }
            &.tr-sell:last-of-type::after,
            &.tr-buy:last-of-type::after {
              display: none;
            }
            &:hover {
              background: #f3f7fe padding-box !important;
            }
          }
          hr {
            // margin: 0 10px 0 16px;
            border: none;
            border-top: 1px solid @tableBorderColor;
          }
          .td {
            width: 32%;
            position: relative;
            z-index: 1;
            font-size: 12px;
            font-weight: 500;
            color: @entrustListFontNormalColor;
            text-align: right;
            &:first-child {
              width: 36%;
              text-align: left;
            }
            &:nth-of-type(2) {
              padding-right: 20px;
            }
            &:last-child {
              padding-right: 3px;
            }
            &.sell {
              color: @tradeRed;
            }
            &.buy {
              color: #03c2a0 !important;
            }
            &:first-child {
              width: 32%;
              text-align: left;
            }
            &:nth-of-type(2) {
              width: 36%;
              padding-right: 20px;
            }
            &:last-child {
              padding-right: 3px;
            }
            &.sell {
              color: @tradeRed;
            }
            &.buy {
              color: #03c2a0 !important;
            }
          }
          .td-center {
            width: 100%;
            // height: 100px;
            position: relative;
            z-index: 1;
            font-size: 12px;
            color: @fontColor;
            text-align: right;
          }
          .info {
            width: 100%;
            text-align: center;
            display: block;
            height: 40px;
            .new {
              width: 100%;
              font-size: 16px;
              color: @tradeGreen;
            }
            .lastPrice-tip {
              position: relative;
              display: inline-block;
              // vertical-align: text-top;
              cursor: pointer;
              span {
                display: none;
              }
              .rate-money {
                display: inline;
                // vertical-align: text-top;
                font-weight: normal;
                font-family: PingFangSC-Regular;
                font-size: 12px;
                color: #24324c;
                // line-height: 24px;
              }
              &:hover {
                span {
                  position: absolute;
                  display: inline-block;
                  padding: 0 10px;
                  white-space: nowrap;
                  height: 24px;
                  line-height: 24px;
                  font-size: 12px;
                  .border-radius(2px);
                  left: 50%;
                  transform: translateX(-50%);
                  top: -24px;
                  background: #20283b;
                  color: #cbd7f0;
                  text-align: center;
                  &::after {
                    content: "";
                    position: absolute;
                    /*right: 8px;*/
                    left: 50%;
                    transform: translateX(-50%);
                    bottom: -5px;
                    border-top: 6px solid #20283b;
                    border-left: 5px solid transparent;
                    border-right: 5px solid transparent;
                  }
                }
              }
            }
            .red {
              font-size: 18px;
              color: #e6491a;
            }
            .detail {
              position: relative;
              width: 100%;
              span {
                font-size: 12px;
                color: @entrustListPriceColor;
                cursor: default;
                &:nth-child(2) {
                  border-left: 1px solid #ecedf3 !important;
                }
              }
              .line {
                margin: 0 10px;
                width: 1px;
                height: 12px;
                background: #6279a0;
              }
              .indexPrice-tip {
                position: relative;
                display: inline-block;
                // vertical-align: text-top;
                cursor: pointer;
                span {
                  display: none;
                  color: @fontColor;
                }
                &:hover {
                  span {
                    display: inline-block;
                    padding: 0 10px;
                    height: 24px;
                    line-height: 24px;
                    white-space: nowrap;
                    .border-radius(2px);
                    position: absolute;
                    left: 50%;
                    transform: translateX(-50%);
                    top: -30px;
                    background: #20283b;
                    color: @fontColor;
                    text-align: center;
                    &::after {
                      content: "";
                      position: absolute;
                      left: 50%;
                      transform: translateX(-50%);
                      bottom: -5px;
                      border-top: 6px solid #20283b;
                      border-left: 5px solid transparent;
                      border-right: 5px solid transparent;
                    }
                  }
                }
              }
              .fairPrice-tip {
                position: relative;
                display: inline-block;
                // vertical-align: text-top;
                cursor: pointer;
                span {
                  display: none;
                }
                &:hover {
                  span {
                    display: inline-block;
                    padding: 0 10px;
                    white-space: nowrap;
                    height: 24px;
                    line-height: 24px;
                    .border-radius(2px);
                    position: absolute;
                    /*left: 10px;*/
                    left: 50%;
                    transform: translateX(-50%);
                    top: -30px;
                    background: #20283b;
                    color: @fontColor;
                    text-align: center;
                    &::after {
                      content: "";
                      position: absolute;
                      /*right: 68px;*/
                      left: 50%;
                      transform: translateX(-50%);
                      bottom: -5px;
                      border-top: 6px solid #20283b;
                      border-left: 5px solid transparent;
                      border-right: 5px solid transparent;
                    }
                  }
                }
              }
            }
            .icon_incline {
              /*position: absolute;*/
              /*top: 4px;*/
              /*left: 46px;*/
              display: inline-block;
              width: 12px;
              height: 12px;
              // line-height: 20px;
              background-image: url("../../assets/images/incline2.png");
              background-repeat: no-repeat;
            }
          }
        }
        .bottom-content {
          border-color: #2d3e30;
        }
      }
    }
    .deep {
      margin-top: 5px;
      p {
        padding-left: 10px;
        line-height: 20px;
        font-size: 12px;
        color: @entrustListDeepColor;
      }
      .deep-button {
        a {
          display: block;
          margin-top: 2px;
          margin-left: 10px;
          padding: 0 6px;
          font-size: 12px;
          text-align: center;
          line-height: 16px;
          color: @entrustListDeepFontColor;
          background: @entrustListDeepButtonBgColor;
          border-radius: 3px;
          &.active {
            line-height: 16px;
            color: #fff;
            background: @entrustListDeepButtonActiveBgColor;
            &:hover {
              line-height: 16px;
              border: none;
              color: #fff;
              background: @entrustListDeepButtonActiveBgColor;
            }
          }
          &:hover {
            line-height: 16px;
            color: #fff;
            background: @entrustListDeepButtonActiveBgColor;
          }
        }
      }
    }
  }
}
// @media screen and ( max-width: 1366px) {
//   .entrust-list {
//     height: 330px !important;
//   }
//   .entrust-list-white {
//     height: 330px !important;
//   }
// }
// @media screen and ( max-height: 760px) {
//   .entrust-list {
//     height: 330px !important;
//   }
//   .entrust-list-white {
//     height: 330px !important;
//   }
// }
</style>

