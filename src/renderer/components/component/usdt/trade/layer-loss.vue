<template>
  <div :class="{'loss': themeValue === 'black', 'loss-white': themeValue === 'white'}">
    <div class="box" style="padding-top: 20px;">
      <st-row class="input">
        <st-row class="item">
          <span class="label">
            {{$t('message.transactionList.triggerPrice')}}
            <!-- <font v-if="lossSide == 1 && lossType == 1">≥</font>
            <font v-if="lossSide == 1 && lossType == 2">≤</font>
            <font v-if="lossSide == 2 && lossType == 1">≤</font>
            <font v-if="lossSide == 2 && lossType == 2">≥</font>-->
          </span>
          <input
            type="text"
            style="text-align:right;padding-right:5px;"
            v-model="readyPrice"
            @input="readyPriceChange"
            @blur="valid('readyPrice')"
            :class="{'error-color': !readyPriceValid}"
            :placeholder="$t('message.createdEntrust.importPrice')"
          />
        </st-row>
        <prompt :message="readyPriceText" v-show="!readyPriceValid"></prompt>
      </st-row>
    </div>
    <div class="box" style="padding-top: 10px;position:relative">
      <st-row justify="between" align="center">
        <div
          class="tab"
          style="border-right: none;"
          :class="[type == 1 && 'active']"
          @click="changeType(1)"
        >
          <!--{{ $t('message.transactionList.A_LimitPrice') }}-->
          <!--<span class="hypotenuse"></span>-->
        </div>
        <div class="taba" :class="[type == 1 && 'active']" @click="changeType(1)">
          <span class="text">{{ $t('message.transactionList.A_LimitPrice') }}</span>
        </div>
        <div class="tab" :class="[type == 2 && 'active']" @click="changeType(2)">
          <!--{{ $t('message.transactionList.A_MarketPrice') }}-->
          <!--<span class="hypotenuse"></span>-->
        </div>
        <div class="tabb" :class="[type == 2 && 'active']" @click="changeType(2)">
          <span class="text">{{ $t('message.transactionList.A_MarketPrice') }}</span>
        </div>
      </st-row>
    </div>
    <!-- 限价 -->
    <div class="box" style="padding-top: 10px;" v-if="type == 1">
      <st-row class="input">
        <st-row class="item">
          <span class="label">{{$t('message.trade.executePrice')}}</span>
          <input
            type="text"
            style="text-align:right;padding-right:50px;"
            v-model="price"
            @input="priceChange"
            @blur="valid('price')"
            :class="{'error-color': !priceValid}"
            placeholder
          />
          <span class="unit">USDT</span>
        </st-row>
        <prompt :message="priceText" v-show="!priceValid"></prompt>
      </st-row>
    </div>
    <!-- 市价 -->
    <div class="box" style="padding-top: 10px;" v-if="type == 2">
      <st-row class="input">
        <st-row class="item">
          <span class="label label_no_color">{{$t('message.trade.executePrice')}}</span>
          <input
            class="no_hover"
            type="text"
            style="text-align:right;padding-right:50px;"
            disabled="disabled"
          />
          <span class="unit">{{$t('message.createdEntrust.market')}}</span>
        </st-row>
        <prompt :message="priceText" v-show="!priceValid"></prompt>
      </st-row>
    </div>
    <div class="box" style="padding-top: 10px;">
      <st-row class="input">
        <st-row class="item">
          <span class="label">{{ $t('message.transactionList.A_Amount') }}</span>
          <input
            type="text"
            style="text-align:right;padding-right:35px;"
            v-model="amount"
            @input="amountChange"
            @blur="valid('amount')"
            :class="{'error-color': !amountValid}"
            placeholder
          />
          <span class="unit">{{ $t('message.transactionList.A_Hand') }}</span>
        </st-row>
        <prompt :message="amountText" v-show="!amountValid"></prompt>
      </st-row>
    </div>
    <div class="box" style="padding: 5px 0 15px 0;">
      <st-slider :set="true" :value="sliderValue" @percent="sliderSize" style="margin-top: 24px"></st-slider>
    </div>
    <div class="box loss_tips" style="margin-top: -10px;">
      <p>
        <font v-if="lossType == 1 && type == 2">{{$t('message.transactionList.returnPrice')}}</font>
        <font v-if="lossType == 1 && type == 1">{{$t('message.transactionList.returnPrice1')}}</font>
        <font v-if="lossType == 2 && type == 2">{{$t('message.transactionList.lossPirce')}}</font>
        <font v-if="lossType == 2 && type == 1">{{$t('message.transactionList.lossPirce1')}}</font>
        <span>{{loss_number | splitFormat(2)}} USDT</span>
      </p>
    </div>
    <layer-button :close="popClose" :confirm="confirm"></layer-button>
  </div>
</template>
<script>
import Utils from "@/assets/js/utils";
import Prompt from "./prompt.vue";
import LayerButton from "./layer-button.vue";

export default {
  name: "layer-loss",

  data() {
    return {
      // tab类型
      type: 1, // 1=限价 2=市价
      // 触发价格
      readyPrice: "",
      // 执行价格
      price: "",
      amount: "",
      sliderValue: 0,
      readyPriceValid: true,
      priceValid: true,
      amountValid: true,
      amountText: "",
      priceText: "",
      readyPriceText: "",
      // 亏损提示
      // loss_tips: '',
      // 亏损数量
      loss_number: 0,
      // 开仓价格
      entryPrice: 0,
      // 多空
      order_type: "",
      // 可用平仓量
      availableAmount: 0
    };
  },
  components: {
    Prompt,
    LayerButton
  },
  props: ["popData", "lossType", "lossSide"],
  computed: {
    // 主题颜色
    themeValue() {
      return this.$store.state.dictionary.theme;
    },

    contractInfo() {
      let tmp = this.$store.state.market.contract.filter(item => {
        return Number(item.id) === Number(this.popData.contractId);
      });
      return tmp[0] || {};
    }
  },
  watch: {
    type(val) {
      // this.loss_tips = val == 1 ? `${this.$t('message.transactionList.returnPrice')}: ` : `按触发价格将亏损: `
    }
  },
  created() {
    // this.loss_tips = this.type == 1 ? `${this.$t('message.transactionList.returnPrice')}: ` : `按触发价格将亏损: `;
    // 开仓价格
    this.entryPrice = this.popData.entryPrice;
    // 多空
    this.order_type = this.popData.side;
    // 可用平仓量
    if (this.lossType == 1) {
      // 止盈
      this.availableAmount = Math.max(
        Utils.sub(
          this.popData.availablePositionQty,
          this.popData.planProfitQty
        ),
        0
      );
    } else {
      // 止损
      this.availableAmount = Math.max(
        Utils.sub(this.popData.availablePositionQty, this.popData.planLossQty),
        0
      );
    }
  },
  methods: {
    // 切换类型
    changeType(type) {
      this.type = type;
      // 计算盈亏
      this.type == 1
        ? this.calculationLoss(this.price, this.amount)
        : this.calculationLoss(this.readyPrice, this.amount);
    },
    // 滑块
    sliderSize(val) {
      this.amount = Utils.mul(this.availableAmount, val);
      this.amount = Math.floor(this.amount) || "";
      this.valid("amount");
      // 计算盈亏
      this.type == 1
        ? this.calculationLoss(this.price, this.amount)
        : this.calculationLoss(this.readyPrice, this.amount);
    },
    // 禁止输入非数字
    replaceValid(val) {
      if (!this[val] && this[val] !== 0) return;
      if (val === "price" || val == "readyPrice") {
        if (this[val].indexOf(".") > -1) {
          let index = this[val].indexOf(".");
          this[val] =
            this[val].replace(/\D/gi, "").slice(0, index) +
            "." +
            this[val].replace(/\D/gi, "").slice(index, index + 4);
        } else this[val] = this[val].replace(/\D/gi, "");
      } else {
        if (this.amount.indexOf(".") > -1) {
          let index = this.amount.indexOf(".");
          this.amount = this.amount.replace(/\D/gi, "").slice(0, index);
        } else this.amount = this.amount.replace(/\D/gi, "");
      }
    },
    // 输入触发价格
    readyPriceChange() {
      this.replaceValid("readyPrice");
      this.valid("readyPrice", true);
      // 计算盈亏
      this.calculationLoss(this.readyPrice, this.amount);
    },
    // 输入执行价格
    priceChange() {
      this.replaceValid("price");
      this.valid("price", true);
      // 计算盈亏
      this.calculationLoss(this.price, this.amount);
    },
    // 平仓数量
    amountChange() {
      this.replaceValid("amount");
      this.valid("amount");
      if (!this.amount || !this.availableAmount) {
        this.sliderValue = 0;
        return;
      }
      if (/^[1-9]\d*$/.test(this.amount)) {
        // console.log(111)
        this.sliderValue = Utils.div(this.amount, this.availableAmount);
      }
      // 计算盈亏
      this.type == 1
        ? this.calculationLoss(this.price, this.amount)
        : this.calculationLoss(this.readyPrice, this.amount);
    },
    /**
     * 已实现盈亏（多仓）=（平仓价格-开仓价格）*开仓数量
     * 已实现盈亏（空仓）=（开仓价格-平仓价格）*开仓数量
     * 注释：开仓数量=手数*乘数
     *
     * 选择限价时候：平仓价格 = 执行价格、平仓数量 = 手数 * 乘数
     * 选择市价时候：平仓价格 = 触发价格、平仓数量 = 手数 * 乘数
     * 计算盈亏方法
     */
    calculationLoss(price = 0, amount = 0) {
      // 价格 price
      // 手数 amount
      // 乘数 this.contractInfo.value
      // 类型 this.type
      // 开仓价格 entryPrice
      // 多空判断 order_type  1=多,2=空
      // 盈亏数量 loss_number
      if (!price || price == 0 || !amount || amount == 0) {
        this.loss_number = 0;
        return;
      }
      // console.log(price, this.entryPrice, amount * this.contractInfo.value);
      if (this.order_type == 1) {
        // 多仓
        this.loss_number = Utils.mul(
          price - this.entryPrice,
          amount * this.contractInfo.value
        );
      } else {
        // 空仓
        this.loss_number = Utils.mul(
          this.entryPrice - price,
          amount * this.contractInfo.value
        );
      }
    },
    // 校验
    valid(val, type) {
      if (!this[val] && this[val] !== 0) {
        this[`${val}Valid`] = true;
        return;
      }
      if (val === "price" || val === "readyPrice") {
        if (
          !/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/.test(
            this[val]
          )
        ) {
          // 请输入正数
          if (this[val] == ".") {
            this[val] = "0.";
          }
          if (type == true) return;

          this.priceText = this.$t("message.createdEntrust.positiveNum");
          if (val === "readyPrice") {
            this.readyPriceValid = false;
            this.readyPriceText = this.$t("message.createdEntrust.importPrice");
            return;
          } else {
            this.priceValid = false;
            return;
          }
        } else {
          this.priceValid = true;
          this.readyPriceValid = true;
        }
      } else {
        if (this[val] == 0) {
          this[val] = "";
          return;
        }
        if (!/^[1-9]\d*$/.test(this[val])) {
          this.amount = Number(this.amount);
          this.amountValid = false;
          this.amountText = this.$t("message.createdEntrust.positiveInteger");
        } else if (Number(this[val]) > Number(this.availableAmount)) {
          this[val] = this.availableAmount;
          // this.amountValid = false
          // this.amountText = this.$t('message.errorCode.300009')
        } else {
          this.amountValid = true;
        }
      }
    },
    // 取消操作
    popClose() {
      this.$emit("popClose");
    },
    // 确认操作
    confirm() {
      if (this.type === 1 && !this.priceValid) {
        return;
      }
      if (!this.amountValid) return;
      if (!this.readyPrice) {
        this.readyPriceValid = false;
        this.readyPriceText = this.$t("message.createdEntrust.importPrice");
        return;
      }
      if (!this.price && this.type == 1) {
        this.priceValid = false;
        this.priceText = this.$t("message.createdEntrust.importPrice");
        return;
      }
      if (!this.amount) {
        this.amountValid = false;
        this.amountText = this.$t("message.createdEntrust.contractHand");
        return;
      }
      let obj = {
        contractId: this.popData.contractId,
        // contractId: this.popData.id,
        type: this.type,
        side: this.popData.side == 1 ? 2 : 1,
        size: Number(this.amount),
        price: Number(this.price),
        triggerPrice: Number(this.readyPrice),
        mode: this.lossType
      };
      this.$emit("confirm", obj);
    }
  }
};
</script>
<style lang="less" scoped>
@import url("../../assets/css/theme");
@tabColor: #7e9efd;
@tableColorWhite: #597ab9;
@inputActive: #39425e;
@whiteInputActive: #b9c7e2;

.error-color {
  border: solid 1px #d32f2f !important;
}

.unit {
  text-align: right !important;
  margin-right: 10px;
}

// 黑色主题
.loss {
  .themeBlack();
  background-color: @closeBg;
  color: #7889a9;

  .box {
    width: 250px;
    margin: 0 auto;

    .tab {
      position: relative;
      font-size: 13px;
      width: 116px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border: 1px solid #181e2f;
      border-radius: 3px 0px 0px 3px;
      cursor: pointer;
      background: #181e2f;

      .hypotenuse {
        position: absolute;
        display: block;
        width: 10px;
        height: 31px;
        background: #20283b;
        border-left: 1px solid #20283b;
        top: 0px;
        right: -7px;
        z-index: 1;
        transform: rotate(15deg);
        -ms-transform: rotate(15deg);
        -moz-transform: rotate(15deg);
        -webkit-transform: rotate(15deg);
        -o-transform: rotate(15deg);
        background: #20283b;
      }

      &:nth-child(3) {
        border-left: 0;
        border-right: 1px solid #20283b;
        border-radius: 0px 3px 3px 0px;

        .hypotenuse {
          border-left: 0;
          border-right: 1px solid #20283b;
          transform: rotate(15deg);
          -ms-transform: rotate(15deg);
          -moz-transform: rotate(15deg);
          -webkit-transform: rotate(15deg);
          -o-transform: rotate(15deg);
          top: -3px;
          left: -5px;
        }
      }

      &.active {
        border-color: @tabColor;
        color: @tabColor;
        .hypotenuse {
          border-color: @tabColor;
        }
      }
    }
    .taba {
      width: 116px;
      height: 30px;
      position: absolute;
      left: 6px;
      top: 10px;
      border: 1px solid transparent;
      text-align: center;
      background: #181e2f;
      transform: skew(-20deg);
      cursor: pointer;
      .text {
        display: inline-block;
        transform: skew(20deg);
        font-size: 13px;
        line-height: 30px;
      }
      &.active {
        border-left: none;
        border-color: @tabColor;
        color: @tabColor;
        .hypotenuse {
          border-color: @tabColor;
        }
      }
    }
    .tabb {
      width: 116px;
      height: 30px;
      position: absolute;
      right: 6px;
      top: 10px;
      text-align: center;
      background: #181e2f;
      border: 1px solid transparent;
      border-right: none;
      transform: skew(-20deg);
      cursor: pointer;
      .text {
        display: inline-block;
        transform: skew(20deg);
        font-size: 13px;
        line-height: 28px;
      }
      &.active {
        border-color: @tabColor;
        color: @tabColor;
        .hypotenuse {
          border-color: @tabColor;
        }
      }
    }

    .input {
      position: relative;
      width: 100%;

      .item {
        position: relative;
        width: 100%;
        border-radius: 3px;
        // .flex-grow();
        height: 32px;

        input {
          width: 100%;
          height: 100%;
          padding-left: 100px;
          // border-style: solid;
          border-radius: 2px;
          background: @closeInputBg;
          color: @fontColor;
          font-size: 14px;
          text-align: left;
          border: 1px solid @closeInputActive;

          .placeholder({color: #5D6588; font-size: 12px;});

          &:hover {
            border: 1px solid @inputActive;
          }
          &.no_hover:hover {
            border: 1px solid @closeInputActive;
          }

          &:focus {
            border: 1px solid @inputActive;
          }
        }

        span {
          position: absolute;
          margin-left: 10px;
          right: 0;
          top: 0;
          display: block;
          // width: 32px;
          // background: #243b63;
          line-height: 32px;
          font-size: 12px;
          color: #5d6588;
          text-align: center;
          height: 100%;
        }

        .label {
          left: 0;
          width: 80px;
          text-align: left;
          color: #cbd7f0;
          font-size: 12px;
          &.label_no_color {
            color: #5d6588;
          }
        }
      }

      .error {
        position: absolute;
        bottom: -18px;
        left: 0px;
        width: 100%;
        text-align: right;
        font-size: 14px;
        color: #d32f2f;
      }
    }
  }
  .loss_tips {
    font-size: 12px;
    color: #5d6588;
    letter-spacing: 0;
    line-height: 12px;
    padding-bottom: 10px;

    span {
      color: #cbd7f0;
    }
  }
}

// 白色主题
.loss-white {
  .themeWhite();
  background-color: @closeBg;
  color: #7889a9;

  .box {
    width: 250px;
    margin: 0 auto;
    .tab {
      position: relative;
      font-size: 13px;
      width: 116px;
      height: 30px;
      line-height: 30px;
      text-align: center;
      border: 1px solid #dee6f3;
      border-radius: 3px 0px 0px 3px;
      cursor: pointer;
      background: #fff;

      .hypotenuse {
        position: absolute;
        display: block;
        width: 10px;
        height: 31px;
        background: #fff;
        border-left: 1px solid #dee6f3;
        top: 0px;
        right: -7px;
        z-index: 1;
        transform: rotate(15deg);
        -ms-transform: rotate(15deg);
        -moz-transform: rotate(15deg);
        -webkit-transform: rotate(15deg);
        -o-transform: rotate(15deg);
        background: #fff;
      }

      &:nth-child(3) {
        border-left: 0;
        border-right: 1px solid #dee6f3;
        border-radius: 0px 3px 3px 0px;

        .hypotenuse {
          border-left: 0;
          border-right: 1px solid #dee6f3;
          transform: rotate(15deg);
          -ms-transform: rotate(15deg);
          -moz-transform: rotate(15deg);
          -webkit-transform: rotate(15deg);
          -o-transform: rotate(15deg);
          top: -3px;
          left: -5px;
        }
      }

      &.active {
        border-color: @tableColorWhite;
        color: @tableColorWhite;
        .hypotenuse {
          border-color: @tableColorWhite;
        }
      }
    }

    .taba {
      width: 116px;
      height: 30px;
      position: absolute;
      left: 6px;
      top: 10px;
      border: 1px solid #dee6f3;
      border-left: none;
      text-align: center;
      background: #fff;
      transform: skew(-20deg);
      cursor: pointer;
      .text {
        display: inline-block;
        transform: skew(20deg);
        font-size: 13px;
        line-height: 30px;
      }
      &.active {
        border-left: none;
        border-color: @tableColorWhite;
        color: @tableColorWhite;
        .hypotenuse {
          border-color: @tableColorWhite;
        }
      }
    }
    .tabb {
      width: 116px;
      height: 30px;
      position: absolute;
      right: 6px;
      top: 10px;
      text-align: center;
      background: #fff;
      border: 1px solid #dee6f3;
      border-right: none;
      transform: skew(-20deg);
      cursor: pointer;
      .text {
        display: inline-block;
        transform: skew(20deg);
        font-size: 13px;
        line-height: 28px;
      }
      &.active {
        border-color: @tableColorWhite;
        color: @tableColorWhite;
        .hypotenuse {
          border-color: @tableColorWhite;
        }
      }
    }
    .input {
      position: relative;
      width: 100%;

      .item {
        position: relative;
        width: 100%;
        // .flex-grow();
        height: 32px;
        // border: 1px solid @closeInputBorder;
        border-radius: 3px;

        input {
          width: 100%;
          height: 100%;
          padding-left: 100px;
          // border-style: solid;
          border-radius: 2px;
          background: @closeInputBg;
          // color: @fontColor;
          color: #24324c;
          font-size: 14px;
          text-align: left;
          border: 1px solid #dee6f3;

          .placeholder({color: #5D6588; font-size: 12px;});

          &:hover {
            border: 1px solid @whiteInputActive;
          }
          &.no_hover {
            border: none;
            background: #ecf0f7;
          }
          &.no_hover:hover {
            border: 1px solid #ecf0f7;
          }

          &:focus {
            border: 1px solid @whiteInputActive;
          }
        }

        span {
          position: absolute;
          margin-left: 10px;
          right: 0;
          top: 0;
          display: block;
          // width: 32px;
          // background: #243b63;
          line-height: 32px;
          font-size: 12px;
          color: #666b93;
          text-align: center;
          height: 100%;
        }

        .label {
          left: 0;
          width: 80px;
          text-align: left;
          font-size: 12px;
          &.label_no_color {
            color: #666b93;
          }
        }
      }

      .error {
        position: absolute;
        bottom: -18px;
        left: 0px;
        width: 100%;
        text-align: right;
        font-size: 14px;
        color: #d32f2f;
      }
    }
  }
  .loss_tips {
    font-size: 12px;
    color: #5d6588;
    letter-spacing: 0;
    line-height: 12px;
    padding-bottom: 10px;

    span {
      color: #24324c;
    }
  }
}
</style>
