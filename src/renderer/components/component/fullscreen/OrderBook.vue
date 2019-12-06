<template>
  <div class="new-price-order-book">
    <div class="title">
      <div class="text">{{ $t('message.version3.newPrice') }}</div>
      <div class="deep-title">
        <p>{{ $t('message.entrustList.deep') }}：</p>
        <div class="deep-button">
          <v-select
            v-show="isWindow"
            v-model="deep"
            :select-data="deepObj"
            value-key="value"
            content-key="name"
          ></v-select>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="table">
        <div class="thead">
          <div class="tr">
            <div class="th left">{{ $t('message.entrustList.price') }}</div>
            <div class="th">
              {{ $t('message.entrustList.size') }}
            </div>
            <div class="th">{{ $t('message.entrustList.amount') }}</div>
          </div>
        </div>
        <div class="tbody">
          <div
            :style="{
              background: `linear-gradient(to left, ${
                themeColor.orderBookRed
              } ${(item.amount ? (item.amount / getMaxAmount) * 100 : 0) +
                '%'}, transparent 0)`
            }"
            class="tr trs tr-sell"
            v-for="item in sellOrder"
            @click="setPrice(item.price)"
            :key="item.id"
          >
            <div class="td sell left">{{ item.price || '-' }}</div>
            <div class="td">
              {{ item.amount ? item.amount.toFixed(0) : '-' }}
            </div>
            <div class="td">
              {{ item.number ? item.number.toFixed(0) : '-' }}
            </div>
          </div>
          <div class="tr-center">
            <div class="info">
              <p class="new">
                <el-tooltip
                  class="item"
                  :content="$t('message.entrustList.lastPrice')"
                  placement="top"
                >
                  <span @click="setPrice(currentSpecialLastPrice)">
                    <span>{{
                      currentSpecialLastPrice
                        | splitFormat(figure.indexPriceFloat) || 0
                    }}</span>
                    <span class="rate-money" v-if="rate !== 0"
                      >≈ {{ unit
                      }}{{
                        (currentSpecialLastPrice * rate)
                          | splitFormat(figure.indexPriceFloat)
                      }}</span>
                  </span>
                </el-tooltip>
              </p>

              <p class="detail">
                <el-tooltip
                  class="item"
                  :content="$t('message.entrustList.indexPrice')"
                  placement="top"
                >
                  <span @click="setPrice(indexPrice)">
                    {{
                      indexPrice ||
                        0 | splitFormat(figure.indexPriceFloat)
                    }}
                  </span>
                </el-tooltip>
              </p>
            </div>
          </div>
          <div
            v-for="item in buyOrder"
            align="center"
            @click="setPrice(item.price)"
            :key="item.id"
            class="bottom-content tr trs tr-buy"
            :style="{
              background: `linear-gradient(to left, ${
                themeColor.orderBookGreen
              } ${(item.amount ? (item.amount / getMaxAmount) * 100 : 0) +
                '%'}, transparent 0)`
            }"
          >
            <div class="td buy left">{{ item.price || '-' }}</div>
            <div class="td">
              {{ item.amount ? item.amount.toFixed(0) : '-' }}
            </div>
            <div class="td">
              {{ item.number ? item.number.toFixed(0) : '-' }}
            </div>
          </div>
        </div>
      </div>
      <!-- <div class="deep">
        <p>{{ $t('message.entrustList.deep') }}：</p>
        <div class="deep-button">
          <v-button
            size="small"
            :active="deep === item"
            v-for="(item, index) in deepButtonList"
            :key="index"
            @click="setMergeDeep(item)"
            >{{ item }}{{ $t('message.entrustList.bit') }}</v-button
          >
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
  import Utils from '@/utils/utils'
  import AccountApi from '@/api/accountApi'
  import createSub from '@/data/sub'
  import {dataMixin, systemMixin} from '@/mixins'

  export default {
  name: 'NewPriceOrderBook',
  mixins: [systemMixin, dataMixin],
  data() {
    return {
      // 卖出数据(红色)
      sellOrder: [],
      // 买入数据(绿色)
      buyOrder: [],
      // 当前深度位数
      deep: 4,
      // 显示数据条数
      showItem: 10,
      // 汇率
      rate: 0,
      // 订阅实例
      sub: createSub(this.$store),
      deepObj: [],
    }
  },
  computed: {
    isWindow () {
      return process.client ? true : false
    },
    // 此合约的币种
    contractCoin() {
      return this.currentContract.name.substring(0, 3)
    },
    // 深度按钮数组
    deepButtonList() {
      let tmp = this.figure.handicapFloat || 4
      let arr = []
      for (let i = 0; i <= tmp; i++) {
        if (tmp - i > 0) {
          if (arr.length < 2) {
            arr.push(tmp - i)
          }
        }
      }
      return arr
    },
    // 最新成交价
    lastPrice() {
      return this.ticker.last || 0
    },
    // K 线最新成交价
    currentSpecialLastPrice() {
      if (this.currentContract.id != this.$route.params.id) return this.lastPrice
      return this.specialLastPrice || this.lastPrice
    },
    //指数价格
    indexPrice() {
      return this.currentMarket.indexPrice || 0
    },
    // 卖出的原始数据
    sell() {
      return (
        (this.order[this.currentContract.id] &&
          this.order[this.currentContract.id].asks) ||
        []
      )
    },
    // 买入的原始数据
    buy() {
      return (
        (this.order[this.currentContract.id] &&
          this.order[this.currentContract.id].bids) ||
        []
      )
    },
    // 获取最大的数量
    getMaxAmount() {
      let totalOrder = this.sellOrder.concat(this.buyOrder)
      let orderNumber = totalOrder.map(item => item.amount || 0)
      return Math.max(...orderNumber)
    },
    // 当前语言映射
    currentLocaleMap() {
      return this.locale === 'cn' ? 0 : 1
    },
    // 当前单位
    unit() {
      return this.locale === 'cn' ? '¥' : '$'
    }
  },
  watch: {
    deepButtonList: {
      handler(val){
        if (process.client) {
          this.deepObj = []
          val.map(item => {
            this.deepObj.push({
              name: item + this.$t('message.entrustList.bit'),
              value: item
            })
          })
        }
      },
      deep: true,
      immediate: true
    },
    //更具宽度重新生成个数
    screenWidth: {
      handler(val) {
        // if (this.screenHeight >= 850 && val > 1440) {
        if (this.screenHeight >= 850) {
          this.showItem = 10
          this.init()
        }else if((this.screenHeight <= 850 && this.screenHeight >= 750) || val <= 1440) {
          this.showItem = 7
          this.init()
        }
        if(this.screenHeight < 750) {
          this.showItem = 6
          this.init()
        }
      },
      immediate: true
    },
    // 根据高度重新生成显示个数
    screenHeight: {
      handler(val) {
        //  && this.screenWidth > 1440
        if (val >= 850) {
          this.showItem = 10
          this.init()
        }else if((val <= 850 && val >= 750) || this.screenWidth <= 1440) {
          this.showItem = 7
          this.init()
        }
        if(val < 750) {
          this.showItem = 6
          this.init()
        }
      },
      immediate: true
    },
    // 监听语言
    locale() {
      this.deepObj = []
        this.deepButtonList.map(item => {
          this.deepObj.push({
            name: item + this.$t('message.entrustList.bit'),
            value: item
          })
        })
      this.getRate(this.currentLocaleMap)
    },
    // 监听路由
    $route() {
      this.init()
    },
    // 监听卖出数据,把最后一条存入 vuex
    sellOrder: {
      handler(val) {
        if (val instanceof Array && val.length > 0) {
          let price = val[val.length - 1].price || ''
          this.$store.commit('market/SET_SELLLAST', price)
        }
      },
      deep: true,
      immediate: true
    },
    // 监听买入数据,把第一条存入 vuex
    buyOrder: {
      handler(val) {
        if (val instanceof Array && val.length > 0) {
          let price = val[0].price || ''
          this.$store.commit('market/SET_BUYFIRST', price)
        }
      },
      deep: true,
      immediate: true
    },
    // 监听卖出数据
    sell(val) {
      if (this.$route.params.id != this.currentContract.id) return
      this.sellOrder = this.merge(val)
    },
    // 监听买入数据
    buy(val) {
      if (this.$route.params.id != this.currentContract.id) return
      this.buyOrder = this.merge(val, true)
      if (!val.length) return
      if (
        this.sellOrder[this.showItem - 1].price &&
        this.buyOrder[0].price &&
        Number(this.buyOrder[0].price) >=
          Number(this.sellOrder[this.showItem - 1].price) &&
        this.socketConnectState
      ) {
        this.sub.cancelOrderBook(this.currentContract.id)
        this.sub.subOrderBook(this.currentContract.id)
      }
    },
    // 监听深度位数,改变后重新计算
    deep() {
      this.sellOrder = this.merge(this.sell)
      this.buyOrder = this.merge(this.buy, true)
    }
  },
  methods: {
    // 初始化
    init() {
      this.deep = this.figure.handicapFloat || 4
      this.sellOrder = this.merge(this.sell)
      this.buyOrder = this.merge(this.buy, true)
    },
    // 设置深度
    setMergeDeep(deep) {
      this.deep = deep
    },
    // 合并深度算法
    merge(data, type) {
      return Utils.deepFn.merge(
        data,
        type,
        this.deep,
        this.showItem,
        this.bits.size
      )
    },
    // 设置全局输入框的价格
    setPrice(price) {
      if (!price || price === '0') {
        price = ''
      } else {
        price = this.$filter.splitFormat(price, this.figure.indexPriceFloat)
      }
      this.$store.commit('market/SET_OPERATEPRICE', price)
    },
    // 获取汇率
    getRate(data) {
      AccountApi.getRateUsd(data).then(res => {
        this.rate = res.data.rate
      })
    }
  },
  created() {
    this.init()
    this.getRate(this.currentLocaleMap)
  }
}
</script>

<style lang="less" scoped>
@import (reference) '../../assets/css/index';
.black {
  .themeBlack();
  .new-price-order-book {
    width: 300px;
    background-color: @navBgColor;
    height: 67%;
    padding-bottom: 10px;
    overflow: hidden;
    .title {
      padding: 0 20px;
      border-bottom: 1px solid @lineColor;
      color: @darkFontColor;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 36px;
      .text{
        height: 36px;
        line-height: 36px;
      }
      .deep-title{
        display: flex;
        align-items: center;
        /deep/.select-input{
          height: 20px;
          padding-left: 10px;
          border: none;
          background: @auxiliaryColor;
          font-size: 12px;
          color: @tradeBlue;
        }
      }
    }
    .content {
      // height: 728px;
      flex: 1;
      display: flex;
    }
    .table {
      padding: 0 20px;
      width: 100%;
      flex: 1;
      display: flex;
      flex-direction: column;
      .thead {
        .tr {
          height: 36px;
          .flex-box();
          .th {
            line-height: 36px;
            width: 32%;
            font-size: 12px;
            font-weight: 300;
            color: @middleFontColor;
            text-align: right;
            &.left {
              text-align: left;
            }
          }
        }
      }
      .tbody {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        .tr {
          // flex: 1;
          width: 100%;
          margin-bottom: 1px;
          cursor: pointer;
          .flex-box();
        }
        .td {
          line-height: 22px;
          width: 32%;
          position: relative;
          z-index: 1;
          font-size: 12px;
          font-weight: 500;
          color: @darkFontColor;
          text-align: right;
          &.left {
            text-align: left;
          }
          &.sell {
            color: @tradeRed;
          }
          &.buy {
            color: @tradeGreen;
          }
        }
        .tr-center {
          width: 100%;
          position: relative;
          z-index: 1;
          font-size: 12px;
          color: @darkFontColor;
          text-align: right;
          height: 50px;
          .flex-box();
          align-items: center;
        }
        .info {
          width: 100%;
          text-align: center;
          display: block;
          cursor: pointer;
          .new {
            width: 100%;
            font-size: 16px;
            color: @tradeRed;
            .rate-money {
              font-size: 12px;
              color: @middleFontColor;
            }
          }
          .detail {
            position: relative;
            width: 100%;
            cursor: pointer;
            span {
              font-size: 14px;
              color: @darkFontColor;
            }
          }
        }
      }
    }
    .deep {
      margin-top: 20px;
      padding: 0 20px;
      .flex-box();
      p {
        line-height: 20px;
        font-size: 12px;
        color: @darkFontColor;
      }
      .deep-button {
        .flex-box();
      }
    }
  }
}

.white {
  .themeWhite();
  .new-price-order-book {
    width: 300px;
    height: 67%;
    background-color: @navBgColor;
    padding-bottom: 10px;
    overflow: hidden;
    .title {
      padding: 0 20px;
      border-bottom: 1px solid @lineColor;
      color: @darkFontColor;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 36px;
      line-height: 36px;
      .text{
        height: 36px;
        line-height: 36px;
      }
      .deep-title{
        display: flex;
        align-items: center;
        /deep/.select-input{
          height: 20px;
          padding-left: 10px;
          border: none;
          background: @auxiliaryColor;
          font-size: 12px;
          color: @tradeBlue;
        }
      }
    }
    .content {
      // height: 728px;
      flex: 1;
      display: flex;
    }
    .table {
      padding: 0 20px;
      width: 100%;
      .thead {
        .tr {
          height: 36px;
          .flex-box();
          .th {
            line-height: 36px;
            width: 32%;
            font-size: 12px;
            font-weight: 300;
            color: @middleFontColor;
            text-align: right;
            &.left {
              text-align: left;
            }
          }
        }
      }
      .tbody {
        .tr {
          height: 22px;
          margin-bottom: 1px;
          cursor: pointer;
          .flex-box();
        }
        .td {
          line-height: 22px;
          width: 32%;
          position: relative;
          z-index: 1;
          font-size: 12px;
          font-weight: 500;
          color: @darkFontColor;
          text-align: right;
          &.left {
            text-align: left;
          }
          &.sell {
            color: @tradeRed;
          }
          &.buy {
            color: @tradeGreen;
          }
        }
        .tr-center {
          width: 100%;
          position: relative;
          z-index: 1;
          font-size: 12px;
          color: @darkFontColor;
          text-align: right;
          height: 50px;
          .flex-box();
          align-items: center;
        }
        .info {
          width: 100%;
          text-align: center;
          display: block;
          cursor: pointer;
          .new {
            width: 100%;
            font-size: 16px;
            color: @tradeRed;
            .rate-money {
              font-size: 12px;
              color: @middleFontColor;
            }
          }
          .detail {
            position: relative;
            width: 100%;
            cursor: pointer;
            span {
              font-size: 14px;
              color: @darkFontColor;
            }
          }
        }
      }
    }
    .deep {
      margin-top: 20px;
      padding: 0 20px;
      .flex-box();
      p {
        line-height: 20px;
        font-size: 12px;
        color: @darkFontColor;
      }
      .deep-button {
        .flex-box();
      }
    }
  }
}
</style>

