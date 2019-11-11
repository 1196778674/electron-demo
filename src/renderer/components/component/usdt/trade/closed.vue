<template>
  <div :class="{'closed': themeValue === 'black', 'closed-white': themeValue === 'white'}">
    <div class="box" style="padding-top: 20px;">
      <st-row justify="between" align="center">
        <div
          class="tab"
          style="border-radius:3px 0 0 3px;"
          :class="{active: type === 1, active1: type===1}"
          @click="tabChange(1)"
        >{{ $t('message.transactionList.A_LimitPrice') }}</div>
        <div
          class="tab"
          style="border-radius:0 3px 3px 0;"
          :class="{active: type === 2, active2: type===2}"
          @click="tabChange(2)"
        >{{ $t('message.transactionList.A_MarketPrice') }}</div>
      </st-row>
    </div>
    <div class="box" style="margin-top: 14px;" v-if="type === 1">
      <st-row class="input">
        <st-row class="item">
          <span class="label">{{ $t('message.transactionList.A_Price') }}</span>
          <input
            type="text"
            style="text-align:right;padding-right:48px;"
            v-model="price"
            @input="priceChange"
            @blur="valid('price')"
            :class="{'error-color': !priceValid}"
          />
          <span class="unit">USDT</span>
        </st-row>
        <prompt :message="priceText" v-show="!priceValid"></prompt>
      </st-row>
    </div>
    <div class="box" style="margin-top: 10px;">
      <st-row class="input">
        <st-row class="item">
          <span class="label">{{ $t('message.transactionList.A_Amount') }}</span>
          <input
            type="text"
            style="text-align:right;padding-right:30px;"
            v-model="amount"
            @input="amountChange"
            @blur="valid('amount')"
            :class="{'error-color': !amountValid}"
          />
          <span class="unit">{{ $t('message.transactionList.A_Hand') }}</span>
        </st-row>
        <prompt :message="amountText" v-show="!amountValid"></prompt>
      </st-row>
    </div>
    <div class="box" style="padding: 5px 0 15px 0;">
      <st-slider :value="sliderValue" @percent="sliderSize" style="margin-top: 24px"></st-slider>
    </div>
    <div v-show="type === 2" style="height:46px;"></div>
    <layer-button :close="popClose" :confirm="confirm"></layer-button>
  </div>
</template>
<script>
import Prompt from "./prompt.vue";
import Utils from "@/assets/js/utils";
import LayerButton from "./layer-button.vue";
export default {
  name: "closed",
  components: {
    Prompt,
    LayerButton
  },
  props: ["popData"],
  data() {
    return {
      sliderValue: 0,
      type: 1,
      priceTip: false,
      numTip: false,
      amount: "",
      amountValid: true,
      amountText: "",
      price: "",
      priceValid: true,
      priceText: ""
    };
  },
  computed: {
    contractInfo() {
      let tmp = this.$store.state.market.contract.filter(item => {
        return Number(item.id) === Number(this.$route.params.id);
      });
      return tmp[0] || {};
    },
    figure() {
      let tmp = this.$store.state.market.contract.filter(item => {
        return Number(item.id) === Number(this.contractInfo.id);
      });
      return (tmp[0] && tmp[0].contractParam) || {};
    },
    themeValue() {
      return this.$store.state.dictionary.theme;
    },
    thisTicker() {
      return this.$store.state.market.tickers[this.popData.contractId] || {};
    },
    operatePrice() {
      return this.$store.state.market.operatePrice;
    }
  },
  watch: {
    operatePrice(val) {
      this.price = val.value;
      this.valid("price");
    },
    price(val) {
      this.amountChange();
      if (this.price > 99999999) this.price = 99999999;
    },
    amount(val) {
      if (this.amount > 99999999) this.amount = 99999999;
    }
  },
  methods: {
    priceChange() {
      this.replaceValid("price");
      this.valid("price");
    },
    amountChange() {
      this.replaceValid("amount");
      this.valid("amount");
      if (!this.amount || !this.popData.availablePositionQty) {
        this.sliderValue = 0;
        return;
      }
      if (/^[1-9]\d*$/.test(this.amount)) {
        // console.log(111)
        this.sliderValue = Utils.div(
          this.amount,
          this.popData.availablePositionQty
        );
      }
    },
    // 禁止输入非数字
    replaceValid(val) {
      if (!this[val] && this[val] !== 0) return;
      if (val === "price") {
        if (this.price.indexOf(".") > -1) {
          let index = this.price.indexOf(".");
          this.price =
            this.price.replace(/\D/gi, "").slice(0, index) +
            "." +
            this.price.replace(/\D/gi, "").slice(index, index + 4);
        } else this.price = this.price.replace(/\D/gi, "");
      } else {
        if (this.amount.indexOf(".") > -1) {
          let index = this.amount.indexOf(".");
          this.amount = this.amount.replace(/\D/gi, "").slice(0, index);
        } else this.amount = this.amount.replace(/\D/gi, "");
      }
    },
    valid(val) {
      if (!this[val] && this[val] !== 0) {
        this[`${val}Valid`] = true;
        return;
      }
      if (val === "price") {
        if (
          !/^(([0-9]+\.[0-9]*[1-9][0-9]*)|([0-9]*[1-9][0-9]*\.[0-9]+)|([0-9]*[1-9][0-9]*))$/.test(
            this[val]
          )
        ) {
          this.priceValid = false;
          this.priceText = this.$t("message.createdEntrust.positiveNum");
        } else {
          this.priceValid = true;
        }
      } else {
        if (!/^[1-9]\d*$/.test(this[val])) {
          this.amount = Number(this.amount);
          this.amountValid = false;
          this.amountText = this.$t("message.createdEntrust.positiveInteger");
        } else if (
          Number(this[val]) > Number(this.popData.availablePositionQty)
        ) {
          this.amountValid = false;
          this.amountText = this.$t("message.errorCode.10300011");
        } else {
          this.amountValid = true;
        }
      }
    },
    tabChange(val) {
      this.type = val;
      this.resetFields();
      this.valid("amount");
      this.valid("price");
    },
    resetFields() {
      this.priceValid = true;
      this.amountValid = true;
    },
    sliderSize(val) {
      this.amount = Utils.mul(this.popData.availablePositionQty, val);
      this.amount = Math.floor(this.amount) || "";
      this.valid("amount");
    },
    confirm() {
      if (this.type === 1 && !this.priceValid) {
        return;
      }
      if (!this.amountValid) return;
      if (!this.price && this.type === 1) {
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
        type: this.type,
        side: this.popData.side === 1 ? 2 : 1,
        size: Number(this.amount),
        price: Number(this.price),
        close: 1
      };
      this.$emit("confirm", obj);
    },
    popClose() {
      this.$emit("popClose");
    }
  },
  created() {
    this.amount = this.popData.availablePositionQty + "";
    this.price = Utils.splitFormat(this.thisTicker.last, 4) + "";
    this.valid("price");
    this.valid("amount");
  }
};
</script>
<style lang="less" scoped>
@import url("../../assets/css/theme");
.unit {
  text-align: right !important;
  margin-right: 10px;
}
.closed {
  .themeBlack();
  background-color: @closeBg;
  color: #7889a9;
  .box {
    width: 250px;
    margin: 0 auto;
  }
  .tab {
    width: 125px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background: @tabBg;
    font-size: 12px;
    cursor: pointer;
  }
  .active {
    border: solid 1px @tabActive;
    border-radius: 3px;
    color: @tabActiveFont;
  }
  .active1 {
    border-radius: 3px 0 0 3px;
  }
  .active2 {
    border-radius: 0px 3px 3px 0px;
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
        padding-left: 70px;
        // border-style: solid;
        border-radius: 2px;
        background: @closeInputBg;
        color: @fontColor;
        font-size: 12px;
        text-align: left;
        .placeholder({color: #6c85ae; font-size: 12px;});
        &:focus {
          border: 1px solid @closeInputActive;
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
        width: 50px;
        text-align: left;
        color: #cbd7f0;
      }
    }
    .error {
      position: absolute;
      bottom: -18px;
      left: 0px;
      width: 100%;
      text-align: right;
      font-size: 12px;
      color: #d32f2f;
    }
  }
}
.closed-white {
  .themeWhite();
  background-color: @closeBg;
  color: #7889a9;
  .box {
    width: 250px;
    margin: 0 auto;
  }
  .tab {
    width: 125px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background: @tabBg;
    font-size: 12px;
    border: solid 1px @tabBorderColor;
    cursor: pointer;
  }
  .active {
    border: solid 1px @tabActive;
    border-radius: 3px;
    color: @tabActiveFont;
  }
  .active1 {
    border-radius: 3px 0 0 3px;
  }
  .active2 {
    border-radius: 0px 3px 3px 0px;
  }
  .input {
    position: relative;
    width: 100%;
    .item {
      position: relative;
      width: 100%;
      // .flex-grow();
      height: 32px;
      border: 1px solid @closeInputBorder;
      border-radius: 3px;
      input {
        width: 100%;
        height: 100%;
        padding-left: 70px;
        // border-style: solid;
        border-radius: 2px;
        background: @closeInputBg;
        // color: @fontColor;
        color: #24324c;
        font-size: 12px;
        text-align: left;
        .placeholder({color: #6c85ae; font-size: 12px;});
        &:focus {
          border: 1px solid @closeInputActive;
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
        width: 50px;
        text-align: left;
      }
    }
    .error {
      position: absolute;
      bottom: -18px;
      left: 0px;
      width: 100%;
      text-align: right;
      font-size: 12px;
      color: #d32f2f;
    }
  }
}
.error-color {
  border: solid 1px #d32f2f !important;
}
</style>

