<template>
  <!-- k 线上面头部组件 -->
  <div class="title-bar">
    <div class="product">
      <!-- <span>{{ currentContract.name }}</span> -->
      <!-- <div class="select-down-currency">
        <img src="../../assets/images/bi_down.png" alt="" srcset="">
      </div> -->
      <v-select
        id="full-select-currency"
        class="select-currency"
        v-model="currencyId"
        :select-data="contractList"
        content-key="name"
        value-key="id"
        align="center"
        @input="chengeCurrency"
      ></v-select>
      <!-- <span>{{ $t('message.panel.text') }}</span> -->
    </div>
    <div class="market">
      <div class="item">
        <p
          class="value"
          :class="{
            green: ticker.change > 0,
            red: ticker.change < 0
          }"
        >
          {{ (ticker.last || 0) | splitFormat(figure.indexPriceFloat) }}
          <span class="rate-money" v-if="rate !== 0"
            >≈{{ unit
            }}{{
              ((ticker.last || 0) * rate)  || 0 | splitFormat(figure.indexPriceFloat)
            }}</span>
        </p>
        <p class="label">{{ $t('message.productInfo.lastPrice') }}</p>
      </div>
      <div class="item">
        <p
          class="value"
          :class="{
            green: ticker.change > 0,
            red: ticker.change < 0
          }"
        >
          {{
            (currentMarket.indexPrice || 0)
              | splitFormat(figure.indexPriceFloat)
          }}
        </p>
        <p class="label">{{ $t('message.entrustList.indexPrice') }}</p>
      </div>
      <div class="item">
        <p
          class="value"
          :class="{
            green: ticker.change > 0,
            red: ticker.change < 0
          }"
        >
          {{ (ticker.change || 0) | numberFormat }}%
        </p>
        <p class="label">{{ $t('message.productInfo.increase') }}</p>
      </div>
      <div class="item">
        <div class="line"></div>
      </div>
      <div class="item">
        <p class="value">{{ (ticker.volume || 0) | numberFormat }}</p>
        <p class="label">
          {{ $t('message.productInfo.size') }}({{
            $t('message.transactionList.A_Hand')
          }})
        </p>
      </div>
      <div class="item">
        <p class="value">
          {{ (ticker.high || 0) | splitFormat(figure.indexPriceFloat) }}
        </p>
        <p class="label">{{ $t('message.productInfo.highPrice') }}</p>
      </div>
      <div class="item">
        <p class="value">
          {{ (ticker.low || 0) | splitFormat(figure.indexPriceFloat) }}
        </p>
        <p class="label">{{ $t('message.productInfo.lowPrice') }}</p>
      </div>
    </div>
    <div class="change-theme">
      <v-switch
        :value="theme"
        @input="changeTheme"
        activeValue="white"
        inactiveValue="black"
        :activeText="$t('message.version3.black')"
        :inactiveText="$t('message.version3.white')"
      ></v-switch>
    </div>
  </div>
</template>

<script>
  import Utils from '@/utils/utils'
  import AccountApi from '@/api/accountApi'
  import {dataMixin, systemMixin} from '@/mixins'

  export default {
  name: 'KLineTitleBar',
  mixins: [systemMixin, dataMixin],
  data() {
    return {
      Utils: Utils,
      rate: 0, // 汇率
      currencyId: Number(this.$route.params.id) || (1001)
    }
  },
  computed: {
    // 此合约的币种
    contractCoin() {
      return this.currentContract.unit.toUpperCase()
    },
    // 单位
    unit() {
      return this.$i18n.locale === 'cn' ? '¥' : '$'
    }
  },
  watch: {
    '$i18n.locale'() {
      this.getRate()
    },
    '$route'(){
      this.currencyId = Number(this.$route.params.id)
    }
  },
  methods: {
    chengeCurrency (val){
      console.log(val)
      let contract = this.contractList.filter(item => {
        return Number(item.id) === val
      })[0]
      console.log(contract)
      this.setCurrentContract(contract)
      this.$router.push('/fullscreen/' + val)
    },
    // 切换主题
    changeTheme(value) {
      this.setTheme(value)
    },
    // 获取汇率
    async getRate() {
      try {
        let re = await AccountApi.getRateUsd(this.$i18n.locale === 'cn' ? 0 : 1)
        this.rate = re.data.rate
      } catch (error) {
        console.error(error)
      }
    }
  },
  created() {
    this.getRate()
  }
}
</script>

<style lang="less" scoped="">
@import (reference) '../../assets/css/index';
.black {
  .themeBlack();
  .title-bar {
    position: relative;
    width: 100%;
    background: @navBgColor;
    height: 50px;
    // box-shadow: 0 4px 10px 0 rgba(9, 13, 23, 0.3);
    z-index: 9;
    .flex-box();
    align-items: center;
    .product {
      margin-left: 20px;
      /deep/.select-currency{
        .select-input{
          border: none;
          background-color: unset;
          font-size: 20px;
          color: @darkFontColor;
        }
        .hyicon-triangle_down{
          width: 14.5px;
          height: 8.4px;
          background: url('../../assets/images/bi_down.png') no-repeat;
          background-size: 100%;
          right: 2px;
          &::before{
            content: "";
          }
        }
        .select-box{
          z-index: 999;
          background: @tipColor;
          .select-item{
            height: 30px;
            line-height: 30px;
            // text-align: center;
          }
        }
      }
      // span {
      //   height: 50px;
      //   line-height: 50px;
      //   font-size: 20px;
      //   color: @darkFontColor;
      //   &:last-child {
      //     margin-left: 10px;
      //     font-size: 18px;
      //   }
      // }
    }
    .market {
      margin-left: 30px;
      position: relative;
      .flex-box();
      .tooltipinfo {
        opacity: 0.5;
        color: @fontActiveColor;
      }
      .tooltipinfo:hover {
        opacity: 1;
      }
      .item {
        margin-left: 50px;
        &:first-child {
          margin-left: 0;
          .rate-money {
            display: inline-block;
            height: 14px;
            font-size: 12px;
            color: @fontActiveColor;
          }
        }
        .value {
          font-size: 14px;
          color: @darkFontColor;
          line-height: 20px;
        }
        .label {
          font-size: 12px;
          color: @middleFontColor;
        }
      }
      .line {
        margin-top: 8px;
        width: 1px;
        height: 17px;
        background: @auxiliaryColor;
      }
    }
    .red {
      color: @tradeRed !important;
    }
    .green {
      color: @tradeGreen !important;
    }
    .change-theme {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}

.white {
  .themeBlack();
  .title-bar {
    position: relative;
    width: 100%;
    background: @navBgColor;
    height: 50px;
    // box-shadow: 0 4px 12px 0 #ecf0f7;
    .flex-box();
    align-items: center;
    z-index: 9;
    .product {
      margin-left: 20px;
      /deep/.select-currency{
        .select-input{
          border: none;
          background-color: unset;
          font-size: 20px;
          color: @darkFontColor;
        }
        .hyicon-triangle_down{
          width: 14.5px;
          height: 8.4px;
          background: url('../../assets/images/bi_down.png') no-repeat;
          background-size: 100%;
          right: 2px;
          &::before{
            content: "";
          }
        }
        .select-box{
          .themeWhite();
          background: @tipColor;
          .select-item{
            height: 30px;
            line-height: 30px;
            // text-align: center;
          }
        }
      }
      // span {
      //   height: 50px;
      //   line-height: 50px;
      //   font-size: 20px;
      //   color: @darkFontColor;
      //   &:last-child {
      //     margin-left: 10px;
      //     font-size: 18px;
      //   }
      // }
    }
    .market {
      margin-left: 30px;
      position: relative;
      .flex-box();
      .tooltipinfo {
        opacity: 0.5;
        color: @fontActiveColor;
      }
      .tooltipinfo:hover {
        opacity: 1;
      }
      .item {
        margin-left: 50px;
        &:first-child {
          margin-left: 0;
          .rate-money {
            display: inline-block;
            height: 14px;
            font-size: 12px;
            color: @darkFontColor;
          }
        }
        .value {
          font-size: 14px;
          color: @darkFontColor;
        }
        .label {
          font-size: 12px;
          color: @middleFontColor;
        }
      }
      .line {
        margin-top: 8px;
        width: 1px;
        height: 17px;
        background: @lineColor;
      }
    }
    .red {
      color: @tradeRed !important;
    }
    .green {
      color: @tradeGreen !important;
    }
    .change-theme {
      position: absolute;
      right: 20px;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}
// @media screen and (max-width: 1440px) {
//   .title-bar{
//     .market{
//       margin-left: 0 !important;
//       .item{
//         margin-left: 20px !important;
//       }
//     }
//   }  
// } 
</style>
