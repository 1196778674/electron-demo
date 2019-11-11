<template>
  <div
    class="dis-selected"
    :class="{'trade-operate':'black' === themeValue, 'trade-operate-white': 'white' === themeValue}"
    @click="removeSelected"
  >
    <div class="title">{{ $t('message.createdEntrust.submitOrder')}}</div>
    <st-row class="content" direction="column">
      <st-row class="selects" justify="between" style="margin-top: 5px;">
        <div id="type1" class="icon-box">
          <div id="type2" class="label">{{ orderType.name }}</div>
          <div class="tooltip-div">
            <el-popover
              trigger="manual"
              v-model="popoverStatus"
              popper-class="tooltip-content"
              :content="typeText[orderType.value]"
              placement="top"
            >
              <div id="type3" slot="reference" class="iconfont icon-warning-circle iconfont_tips"></div>
            </el-popover>
          </div>
          <div
            id="type4"
            class="triangle-up"
            @click="popupTypeShow($event, 'orderTypePop')"
            :class="{trans: orderTypePop}"
          ></div>
          <layer-select
            v-show="orderTypePop"
            :list="orderTypeList"
            :top="'25px'"
            :right="'-9px'"
            @selection="showPresentOrderType"
          ></layer-select>
        </div>
        <div id="leverage1" class="icon-box">
          <div id="leverage2" class="label">{{ margin.name }}</div>
          <div class="tooltip-div">
            <el-popover
              trigger="manual"
              v-model="popoverStatus1"
              popper-class="tooltip-content top-end-arrow"
              :content="$t('message.createdEntrust.leverageInfo')"
              placement="top-end"
            >
              <div
                id="leverage3"
                slot="reference"
                class="iconfont icon-warning-circle iconfont_tips"
              ></div>
            </el-popover>
          </div>
          <div
            id="leverage4"
            class="triangle-up"
            @click="popupTypeShow($event, 'marginPop')"
            :class="{trans: marginPop}"
          ></div>
          <layer-select
            v-show="marginPop"
            :list="marginList"
            :top="'25px'"
            :right="'-9px'"
            @selection="marginCallback"
          ></layer-select>
        </div>
      </st-row>
      <div class="box" style="margin-top: 5px;">
        <st-row class="input">
          <st-row class="item" :class="[orderType.value === 2 && 'input_disabled']">
            <span
              class="label"
              :class="[orderType.value !== 2 && 'focus', langCss]"
            >{{ $t('message.createdEntrust.price') }}</span>
            <input
              type="text"
              id="entrustPlanOrderForm_price"
              v-model="price"
              :disabled="orderType.value === 2"
              @input="priceChange"
              @focus="setNameColor('1')"
              :class="[!priceValid && 'error-color', langCss]"
              @blur="valid('price', true)"
            />
            <span class="unit">USDT</span>
          </st-row>
          <prompt :message="priceText" v-show="!priceValid && price_amount_type == 1"></prompt>
        </st-row>
      </div>
      <div class="box" style="margin-top: 10px;">
        <st-row class="input">
          <st-row class="item">
            <span class="label focus" :class="[langCss]">
              {{ $t('message.createdEntrust.positions') }}
              <div class="tooltip-div">
                <el-popover
                  trigger="manual"
                  v-model="popoverStatus2"
                  popper-class="tooltip-content"
                  :content="$t('message.createdEntrust.hand', {hand: $t(`message.createdEntrust.lot`), name: contractInfo.name, value: contractInfo.value, tableName: contractInfo.tableName})"
                  placement="top"
                >
                  <p
                    v-html="$t('message.createdEntrust.hand', {hand: $t(`message.createdEntrust.lot`), name: contractInfo.name, value: contractInfo.value, tableName: contractInfo.tableName.toUpperCase()})"
                  ></p>
                  <div
                    id="amount1"
                    slot="reference"
                    class="iconfont icon-warning-circle iconfont_amount"
                  ></div>
                </el-popover>
              </div>
            </span>
            <input
              type="text"
              id="entrustPlanOrderForm_price"
              v-model="amount"
              @input="amountChange"
              @focus="setNameColor('2')"
              :class="[!amountValid && 'error-color', langCss]"
              @blur="valid('amount', true)"
            />
            <span class="unit">{{ $t('message.createdEntrust.lot') }}</span>
            <!-- <el-popover trigger="hover" popper-class="tooltip-content hand-popover" :content="$t('message.createdEntrust.hand')" placement="top-end">
              <span class="unit" slot="reference">{{ $t('message.createdEntrust.lot') }}</span>
            </el-popover>-->
            <!-- 手数*amount -->
            <span
              class="amount_lot"
              v-if="Number(amountInfo) > 0 && (amountInfo+'').length <= 6"
            >( = {{amountInfo}} {{contractInfo.tableName.toUpperCase()}})</span>
          </st-row>
          <prompt :message="amountText" v-show="!amountValid && price_amount_type == 2"></prompt>
        </st-row>
      </div>
      <div class="box">
        <st-slider :set="true" :value="sliderValue" @percent="sliderSize" style="margin-top: 24px"></st-slider>
      </div>
      <st-row style="width: 100%;font-size: 12px;" direction="column" justify="flex-start">
        <div style="text-align: right">{{ $t('message.createdEntrust.buyable')+`：${open}` }}</div>
        <div
          style="text-align: right"
        >{{ $t('message.createdEntrust.positionValue') }}：{{positionValue | splitFormat(4)}} USDT</div>
      </st-row>
    </st-row>
    <st-row class="buttons box" style="margin-top: 16px;">
      <!-- <a id="entrustButton1" :class="{'buy': !useless, 'uselessBuy': useless}" @click="operate(1)">{{ `${$t('message.trade.buyIn')} / ${$t('message.trade.doMore')}` }}</a>
      <a id="entrustButton2" :class="{'sell': !useless, 'uselessSell': useless}" @click="operate(2)">{{ `${$t('message.trade.sellOut')} / ${$t('message.trade.doNull')}` }}</a>-->
      <a class="btn1" @click="operate(1)">{{ $t('message.createdEntrust.openlong') }}</a>
      <a class="btn3" @click="operate(2)">{{ $t('message.createdEntrust.openshort') }}</a>
    </st-row>
    <st-row class="buttons box btns_2">
      <!-- <a id="entrustButton1" :class="{'buy': !useless, 'uselessBuy': useless}" @click="operate(1)">{{ `${$t('message.trade.buyIn')} / ${$t('message.trade.doMore')}` }}</a>
      <a id="entrustButton2" :class="{'sell': !useless, 'uselessSell': useless}" @click="operate(2)">{{ `${$t('message.trade.sellOut')} / ${$t('message.trade.doNull')}` }}</a>-->
      <!--<a class="btn2" @click="orderClose(1)">{{ $t('message.createdEntrust.closelong') }}</a>-->
      <!--<a class="btn4" @click="orderClose(2)">{{ $t('message.createdEntrust.closeshort') }}</a>-->
    </st-row>
    <!--一般提示框 toast 提示-->
    <toast v-show="showToast" :message="toastMessage"></toast>
    <!--未登录遮罩-->
    <st-row class="cover" justify="center" v-if="!userInfo">
      <div class="text">
        <p>{{ $t('message.noSign.no_sign')}}</p>
        <p>
          {{ $t('message.noSign.please')}}
          <span>
            <a
              :href="apiConfig.mainDomain + 'manage/login?position=usdt'"
            >{{ $t('message.noSign.sign_in')}}/</a>
            <a :href="apiConfig.mainDomain + 'manage/register'">{{ $t('message.noSign.sign_up') }}</a>
          </span>
          {{ $t('message.noSign.deal')}}
        </p>
      </div>
    </st-row>
    <popup
      :title="$t('message.createdEntrust.A_confirmOrder')"
      :callback="popClose"
      :boxWidth="'420px'"
      :bottomB="bottomB"
      v-if="showPop"
    >
      <layer-trade :orderData="orderData"></layer-trade>
      <layer-button :close="popClose" :confirm="operateConfirm"></layer-button>
    </popup>
    <!-- 防爆仓弹框提示 start -->
    <popup
      :title="' '"
      :bgColor="bgColor"
      :boxWidth="'320px'"
      :bottomB="borderBottom"
      :callback="closeLayerClosedNormal"
      v-if="showCancelNormal"
    >
      <layer-cancel-all
        :showLayerCancelALlToastError="closeLayerClosedNormal"
        :info="' '"
        :title="$t('message.createdEntrust.explosion')"
      ></layer-cancel-all>
      <layer-button :close="closeLayerClosedNormal" :btnText="confirmBtn" :confirm="close"></layer-button>
    </popup>
    <!-- 防爆仓弹框提示 end -->
  </div>
</template>

<script>
// 可开=可用/（该合约当前输入价格*1/杠杆*合约乘数）contract/list value
import Popup from "./popup.vue";
import Cookie from "@/assets/js/config/cookie";
import Api from "@/assets/js/config/api.config";
import Toast from "@/components/trade/toast.vue";
import Prompt from "@/components/trade/prompt.vue";
import LayerSelect from "./layer-select.vue";
import SwapsApi from "@/assets/js/api/swapsApi";
import LayerTrade from "./layer-trade.vue";
import LayerButton from "./layer-button.vue";
import Utils from "@/assets/js/utils";
import LayerCancelAll from "./layer-cancel-all.vue";
export default {
  name: "trade-detail-information",
  components: {
    Popup,
    LayerSelect,
    Toast,
    Prompt,
    LayerTrade,
    LayerButton,
    LayerCancelAll
  },
  data() {
    return {
      disPost: false,
      sliderValue: 0,
      typeText: {
        "1": this.$t("message.createdEntrust.limitInfo"),
        "2": this.$t("message.createdEntrust.marketInfo")
      },
      showToast: false,
      toastMessage: "123",
      useless: false,
      orderType: {
        name: this.$t("message.createdEntrust.limit"),
        value: 1
      },
      orderTypeList: [
        {
          name: this.$t("message.createdEntrust.limit"),
          value: 1
        },
        {
          name: this.$t("message.createdEntrust.market"),
          value: 2
        }
      ],
      orderTypePop: false,
      apiConfig: Api,
      marginPop: false,
      marginList: [
        { name: "2X", value: 2 },
        { name: "3X", value: 3 },
        { name: "5X", value: 5 },
        { name: "10X", value: 10 },
        { name: "20X", value: 20 },
        { name: "33X", value: 33 },
        { name: "50X", value: 50 },
        { name: "100X", value: 100 }
      ],
      margin: { name: "100X", value: 100 },
      price: "",
      priceValid: true,
      priceText: "",
      amount: "",
      amountValid: true,
      amountText: "",
      side: 1,
      showPop: false,
      orderData: {},
      open: 0,
      deposit: 0,
      // 设置名称颜色
      price_amount_type: 0, // 0无色， 1price颜色， 2amount颜色
      // 当前语言
      locale: "cn",
      popoverStatus: false,
      popoverStatus1: false,
      popoverStatus2: false,
      bottomB: "",
      // 防爆仓一些参数
      bgColor: "#20283B",
      borderBottom: "",
      showCancelNormal: false,
      confirmBtn: this.$t("message.createdEntrust.explosionConfirm"),
      // 手数*amount
      amountInfo: 0,
      positionValue: 0 // 仓位价值默认为0
    };
  },
  computed: {
    // 不同语言显示的样式
    langCss() {
      return this.$i18n.locale;
    },
    contractInfo() {
      let tmp = this.$store.state.market.contract.filter(item => {
        return Number(item.id) === Number(this.$route.params.id);
      });
      return tmp[0] || { tableName: "btc" };
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
    userInfo() {
      return this.$store.state.user.userInfo;
    },
    indexPrice() {
      return (
        (this.$store.state.market.market[this.$route.params.id] &&
          this.$store.state.market.market[this.$route.params.id].indexPrice) ||
        0
      );
    },
    taker() {
      let obj =
        this.$store.state.user.wallet.commisionList.filter(item => {
          return item.contractId.toString() === this.$route.params.id;
        })[0] || {};
      return obj.takerCommision || 0;
    },
    market() {
      return this.$store.state.market.market || {};
    },
    buyOne() {
      return this.$store.state.market.buyOne;
    },
    sellOne() {
      return this.$store.state.market.sellOne;
    }
  },
  watch: {
    // 切换多语言时置空输入框
    langCss(val) {
      this.resetFields();
    },
    "$store.state.dictionary.theme": {
      handler(val) {
        if (val === "black") {
          this.bgColor = "#20283B";
          this.borderBottom = "";
        } else {
          this.bgColor = "#fff";
          this.borderBottom = "none";
        }
      },
      immediate: true
    },
    "$i18n.locale"() {
      this.typeText = {
        "1": this.$t("message.createdEntrust.limitInfo"),
        "2": this.$t("message.createdEntrust.marketInfo")
      };
      this.orderType = {
        name: this.$t("message.createdEntrust.limit"),
        value: 1
      };
      (this.orderTypeList = [
        {
          name: this.$t("message.createdEntrust.limit"),
          value: 1
        },
        {
          name: this.$t("message.createdEntrust.market"),
          value: 2
        }
      ]),
        (this.confirmBtn = this.$t("message.createdEntrust.explosionConfirm"));
    },
    $route(val) {
      this.resetFields();
    },
    "$store.state.market.operatePrice"(val) {
      if (this.orderType.value === 1) {
        this.price = val.value;
        this.valid("price");
      }
    },
    "$store.state.market.currentPosition": {
      handler(val) {
        this.getOpen();
      },
      deep: true,
      immediate: true
    },
    "$store.state.user.walletAsset": {
      handler(val) {
        this.getOpen();
      },
      deep: true,
      immediate: true
    },
    "$store.state.user.wallet": {
      handler(val) {
        this.getOpen();
      },
      deep: true,
      immediate: true
    },
    "$store.state.market.buyOne": {
      handler(val) {
        this.getOpen();
      },
      deep: true,
      immediate: true
    },
    "$store.state.market.sellOne": {
      handler(val) {
        this.getOpen();
      },
      deep: true,
      immediate: true
    },
    price(val) {
      this.getOpen();
      this.getDeposit();
      this.amountChange();
      if (this.price > 99999999) this.price = 99999999;
      this.calPositionValue(this.price, this.amount);
    },
    amount(val) {
      this.getDeposit();
      if (this.amount > 99999999) this.amount = 99999999;
      this.amountInfo = Utils.mul(
        Number(this.contractInfo.value),
        Number(this.amount)
      );
      this.calPositionValue(this.price, this.amount);
    },
    contractInfo: {
      handler(val) {
        this.getOpen();
      },
      deep: true,
      immediate: true
    },
    "$store.state.market.popoverStatus"() {
      this.popoverStatus = this.$store.state.market.popoverStatus;
    },
    "$store.state.market.popoverStatus1"() {
      this.popoverStatus1 = this.$store.state.market.popoverStatus1;
    },
    "$store.state.market.popoverStatus2"() {
      this.popoverStatus2 = this.$store.state.market.popoverStatus2;
    }
  },
  methods: {
    // 点击防爆仓弹框取消按钮
    closeLayerClosedNormal() {
      this.showCancelNormal = false;
    },
    // 点击防爆仓弹框确认按钮
    close() {
      this.showPop = true;
      this.closeLayerClosedNormal();
    },
    popoverFun() {
      this.$store.commit(
        "market/SET_POPOVER_STATUS",
        !this.$store.state.market.popoverStatus
      );
      this.$store.commit("market/SET_POPOVER_STATUS1", false);
      this.$store.commit("market/SET_POPOVER_STATUS2", false);
      this.$store.commit("market/SET_POPOVER_STATUS3", false);
    },
    popoverFun1() {
      this.$store.commit(
        "market/SET_POPOVER_STATUS1",
        !this.$store.state.market.popoverStatus1
      );
      this.$store.commit("market/SET_POPOVER_STATUS", false);
      this.$store.commit("market/SET_POPOVER_STATUS2", false);
      this.$store.commit("market/SET_POPOVER_STATUS3", false);
    },
    popoverFun2() {
      this.$store.commit("market/SET_POPOVER_STATUS", false);
      this.$store.commit("market/SET_POPOVER_STATUS1", false);
      this.$store.commit(
        "market/SET_POPOVER_STATUS2",
        !this.$store.state.market.popoverStatus2
      );
      this.$store.commit("market/SET_POPOVER_STATUS3", false);
    },
    // 设置价格，仓位字体颜色
    setNameColor(type) {
      this.price_amount_type = type;
    },
    // 去除价格，仓位字体颜色
    removeNameColor() {
      this.price_amount_type = 0;
      // 校验价格数量
      this.price !== "" && (this.price = Utils.mul(this.price, 1));
    },
    removeSelected() {
      this.orderTypePop = false;
      this.marginPop = false;
    },
    priceChange() {
      this.replaceValid("price");
      this.valid("price");
    },
    amountChange() {
      this.replaceValid("amount");
      this.valid("amount");
      if (!this.amount || !this.open) {
        this.sliderValue = 0;
        return;
      }
      if (/^[1-9]\d*$/.test(this.amount)) {
        this.sliderValue = Utils.div(this.amount, this.open);
      }
    },
    // 禁止输入非数字
    replaceValid(val) {
      if (!this[val] && this[val] !== 0) return;
      if (val === "price") {
        this.price = this.price + "";
        if (this.price.indexOf(".") > -1) {
          let index = this.price.indexOf(".");
          this.price =
            this.price.replace(/\D/gi, "").slice(0, index) +
            "." +
            this.price
              .replace(/\D/gi, "")
              .slice(
                index,
                index +
                  (this.figure.indexPriceFloat
                    ? this.figure.indexPriceFloat
                    : 4)
              );
        } else this.price = this.price.replace(/\D/gi, "");
      } else {
        this.amount = this.amount + "";
        if (this.amount.indexOf(".") > -1) {
          let index = this.amount.indexOf(".");
          this.amount = this.amount.replace(/\D/gi, "").slice(0, index);
        } else this.amount = this.amount.replace(/\D/gi, "");
      }
    },
    valid(val, type) {
      // 失去焦点时候执行removeNameColor方法
      !!type && this.removeNameColor();
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
        this.amount = Number(this.amount);
        if (!/^[0-9]\d*$/.test(this[val])) {
          this.amountValid = false;
          this.amountText = this.$t("message.createdEntrust.positiveInteger");
        } else if (Number(this[val]) > Number(this.open)) {
          this.amountValid = false;
          this.amountText = this.$t("message.createdEntrust.limitNum");
        } else {
          this.amountValid = true;
        }
      }
    },
    popClose() {
      this.showPop = false;
    },
    resetFields() {
      this.priceValid = true;
      this.amountValid = true;
      this.price = "";
      this.amount = "";
    },
    // 计算仓位价值
    calPositionValue(price, amount) {
      // 判断是否有必要的参数
      if (this.market[this.$route.params.id].indexPrice && amount) {
        // 判断是否为市价 vlaue = 2
        if (this.orderType.value === 2) {
          this.positionValue =
            this.market[this.$route.params.id].indexPrice *
            amount *
            this.contractInfo.value;
        } else {
          this.positionValue = price * amount * this.contractInfo.value;
        }
      } else {
        this.positionValue = 0;
      }
    },
    operate(type) {
      if (this.orderType.value === 1 && !this.priceValid) {
        return;
      }
      if (!this.amountValid) return;
      if (!this.price && this.orderType.value === 1) {
        this.priceValid = false;
        this.priceText = this.$t("message.createdEntrust.importPrice");
        return;
      }
      if (!this.amount) {
        this.amountValid = false;
        this.amountText = this.$t("message.createdEntrust.contractHand");
        return;
      }
      // 调用防爆仓方法，先获取最新仓位列表
      //        SwapsApi.getPositionList().then((res) => {
      //          let posList = [];
      //
      //          if (res && res.data && res.data.positionTotal && res.data.positionTotal.positionList){
      //            posList = res.data.positionTotal.positionList
      //          }
      //
      //          let isShowPop = Utils.operateLimit(
      //              this.$route.params.id,
      //              posList,
      //              this.orderType.value,
      //              type,
      //              this.$store.state.user.walletAsset.current,
      //              this.price,
      //              this.amount,
      //              this.contractInfo.value,
      //              this.taker,
      //              (!!this.market[this.$route.params.id] ? this.market[this.$route.params.id].indexPrice : 0),
      //              this.contractInfo.maintenanceMarginRate,
      //              this.$store.state.user.walletAsset.positionValue,
      //              this.buyOne,
      //              this.sellOne
      //          );
      //
      //          // if (!!isShowPop) {
      //          //   // 防爆仓提示框
      //          //   this.showCancelNormal = true;
      //          // } else {
      //          //   // 正常下单
      //          //   this.showPop = true
      //          // }
      //
      //          if (!!isShowPop) {
      //            // this.showT(this.$t('message.createdEntrust.explosionProof'));
      //            this.showT(this.$t('message.createdEntrust.explosion'));
      //            return;
      //          }
      //
      //          this.orderData = {
      //            contractId: this.contractInfo.id,
      //            type: this.orderType.value,
      //            price: this.price,
      //            size: this.amount,
      //            side: type,
      //            leverage: this.margin.value
      //          }
      //
      //          this.showPop = true;
      //
      //          if (this.themeValue === "white") {
      //            this.bottomB = "1px solid #ECF0F7"
      //          } else {
      //            this.bottomB = ""
      //          }
      //        }).catch(err => {
      //
      //        })
      this.orderData = {
        contractId: this.contractInfo.id,
        type: this.orderType.value,
        price: this.price,
        size: this.amount,
        side: type,
        leverage: this.margin.value
      };

      this.showPop = true;

      if (this.themeValue === "white") {
        this.bottomB = "1px solid #ECF0F7";
      } else {
        this.bottomB = "";
      }
    },
    operateConfirm() {
      if (this.disPost) return;
      this.disPost = true;
      SwapsApi.orderPlace(this.orderData)
        .then(res => {
          // this.showT(this.$t('message.errorCode.'+res.code))
          this.$store.commit("dictionary/SET_NOTICE", "success");
          this.showPop = false;
          this.disPost = false;
        })
        .catch(e => {
          this.showPop = false;
          this.showT(this.$t("message.errorCode." + e.data.code));
          this.disPost = false;
        });
    },
    showT(msg) {
      if (!msg) return;
      this.showToast = true;
      this.toastMessage = msg;
      setTimeout(() => {
        this.showToast = false;
      }, 2000);
    },
    showPresentOrderType(data) {
      this.orderType = data;
      this.orderTypePop = false;
      this.resetFields();
    },
    popupTypeShow(e, val) {
      e.stopPropagation();
      this[val] = !this[val];
    },
    marginCallback(data) {
      this.margin = data;
      this.marginPop = false;
      this.getOpen();
      this.getDeposit();
      this.amountChange();
      this.valid("amount");
    },
    sliderSize(val) {
      this.amount = Utils.mul(this.open, val);
      this.amount = Math.floor(this.amount) || "";
      this.valid("amount");
    },
    orderClose(type) {
      this.resetFields();
      if (
        !this.$store.state.market.currentPosition.availablePositionQty ||
        this.$store.state.market.currentPosition.side !== type
      ) {
        //this.showT(this.$t('message.createdEntrust.noLeveling'))
        this.showT(this.$t("message.errorCode.10300012"));
        return;
      }
      this.$store.commit(
        "SET_ORDERCLOSEFIRE",
        !this.$store.state.market.orderCloseFire
      );
    },
    // 可开手数= （可用资产*资金比例）/【（委托价格/杠杆）+（委托价格*2taker）】
    getOpen() {
      if (!this.$store.state.user.wallet.commisionList) {
        this.open = 0;
        return;
      }
      if (!this.$store.state.user.walletAsset.balance) {
        this.open = 0;
        return;
      }
      if (!this.price && !this.indexPrice) {
        this.open = 0;
        return;
      }
      // 按委托价格来算，则委托价格带入指数价格的103%
      let price = this.price || Utils.mul(this.indexPrice, 1.03);
      let available = this.$store.state.user.walletAsset.balance;
      let taker = this.taker;
      let num = this.contractInfo.value;
      let margin = this.margin.value;
      let a = Utils.mul(available, 1);
      let b = Utils.mul(price, num);
      let c = Utils.add(Utils.div(1, margin), Utils.mul(taker, 2));
      let open = Utils.div(a, Utils.mul(b, c));
      this.open = Utils.editE(Math.floor(open));
    },
    // 占用保证金=（开仓价格/杠杆*开仓数量*乘数）+（开仓价格*开仓数量*乘数*taker）
    getDeposit() {
      if (!this.$store.state.user.wallet.commisionList) {
        this.deposit = 0;
        return;
      }
      if (!this.price && this.orderType.value === 1) {
        this.deposit = 0;
        return;
      }
      if (!this.amount) {
        this.deposit = 0;
        return;
      }
      let price = this.price || Utils.mul(this.indexPrice, 1.03);
      let margin = this.margin.value;
      let amount = this.amount;
      let taker = this.taker;
      let num = this.contractInfo.value;
      let a = Utils.mul(Utils.mul(Utils.div(price, margin), amount), num);
      let b = Utils.mul(Utils.mul(Utils.mul(price, amount), num), taker);
      let deposit = Utils.add(a, b);
      this.deposit = this.$filter.splitFormat(deposit, 2);
    }
  }
};
</script>

<style lang="less" scoped="">
@import "../../assets/css/theme";
.tooltip-div {
  width: 16px;
  margin-left: 5px;
  & > span {
    height: 24px !important;
    line-height: 24px !important;
  }
  .iconfont {
    color: #3f4663;
    &:hover {
      color: #cbd7f0;
    }
    &:focus {
      outline: none;
    }
    &.iconfont_tips {
      width: 15px;
      text-align: center;
      position: absolute;
      top: 8px;
      height: 13px;
      line-height: 13px;
    }
    &.iconfont_amount {
      width: 45px;
      text-align: center;
      position: absolute;
      top: 10px;
      height: 13px;
      line-height: 13px;
      cursor: pointer;
    }
  }
}
.box {
  width: 250px;
  margin: 0 auto;
}
.icon-box {
  position: relative;
  .flex-box(row, flex-start, center);
  cursor: pointer;
  .label {
    font-size: 14px;
    // font-weight: bolder;
    margin-top: 2px;
  }
}
.trans {
  transform: rotate(-180deg);
}
.triangle-up {
  .triangle-down(#3f4663);
  margin-left: 4px;
  margin-top: 4px;
}
.trade-operate {
  .themeBlack();
  .toast {
    position: absolute;
  }
  color: @tradeOperateFontColor;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  .closeBtn {
    background: @tradeCloseBtn;
    color: @tradeCloseBtnFont;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
    font-size: 14px;
  }
  .btn1 {
    background: linear-gradient(-90deg, #23d49e 0%, #16be8b 100%);
    border-radius: 3px 0 0 3px !important;
    border-right: none !important;
    &:hover {
      background: @buyButtonHoverColor;
    }
  }
  .btn2 {
    background: linear-gradient(-90deg, #23d49e 0%, #0ab480 100%);
    border-radius: 3px 0 0 3px !important;
    border-left: none !important;
    &:hover {
      background: @buyButtonHoverColor;
    }
  }
  .btn3 {
    background: linear-gradient(-90deg, #e7386c 0%, #ce2155 100%);
    border-radius: 0 3px 3px 0 !important;
    border-right: none !important;
    &:hover {
      background: @sellButtonHoverColor;
    }
  }
  .btn4 {
    background: linear-gradient(-90deg, #e7386c 0%, #c12252 100%);
    border-radius: 0 3px 3px 0 !important;
    border-left: none !important;
    &:hover {
      background: @sellButtonHoverColor;
    }
  }
  position: relative;
  min-width: 270px;
  height: 314px;
  background-color: @tradeOperateBgColor;
  .title {
    width: 100%;
    height: 36px;
    line-height: 36px;
    padding-left: 10px;
    color: @tradeOperateFontColor;
    font-size: 14px;
    background-color: @tradeOperateTitleBgColor;
  }
  .content {
    padding: 0 10px;
    .selects {
      width: 100%;
      span {
        display: inline-block;
        height: 38px;
        line-height: 38px;
        color: @tradeOperateFontColor;
        font-size: 14px;
        cursor: pointer;
        vertical-align: middle;
      }
      .icon {
        margin-bottom: 2px;
        width: 10px;
        height: 6px;
        background: url("../../assets/images/newUI/operate/sjx.svg") no-repeat;
        cursor: pointer;
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
        // border: 1px solid #253a5e;
        .label.focus {
          color: #cbd7f0 !important;
        }
        &.input_disabled:hover {
          input {
            border: 1px solid transparent;
          }
        }
        input {
          width: 100%;
          height: 100%;
          padding-left: 70px;
          border: 1px solid transparent;
          // border-style: solid;
          border-radius: 2px;
          background: #181e2f;
          color: @fontColor;
          font-size: 12px;
          text-align: left;
          .placeholder({color: #6c85ae; font-size: 12px;});
          &:focus {
            // border-color: #39425E!important;
            border-color: #39425e;
          }
          &:hover {
            border-color: #39425e;
          }
          /*&:hover {*/
          /*background: #181e2f;*/
          /*}*/
          &.en {
            padding-left: 90px !important;
          }
          &.cn {
            padding-left: 70px;
          }
          &.ko {
            padding-left: 70px;
          }
          &.ru {
            padding-left: 90px;
          }
          &.ja {
            padding-left: 100px;
          }
        }
        .borderTransparent {
          border-color: transparent;
        }
        .borderActive {
          border-color: #39425e !important;
        }
        .borderRed {
          border-color: #e12961 !important;
        }
        span {
          position: absolute;
          margin-left: 10px;
          right: 0;
          top: 0;
          display: block;
          width: 32px;
          // background: #243b63;
          line-height: 32px;
          font-size: 12px;
          color: #666b93;
          // text-align: center;
          height: 100%;
          text-align: right;
          &.amount_lot {
            position: absolute;
            right: 35px;
            display: inline-block;
            width: auto;
          }
        }
        .label {
          left: 0;
          width: 50px;
          text-align: left;
          color: #7889a9 !important;
          &.en {
            width: 70px;
          }
          &.cn {
            width: 50px;
          }
          &.ko {
            width: 50px;
          }
          &.ru {
            width: 70px;
          }
          &.ja {
            width: 80px;
          }
        }
        .long-label {
          width: 60px !important;
        }
        .unit {
          margin-left: 0;
          right: 10px;
          color: #5d6588 !important;
        }
      }
      .item-active {
        .label {
          color: #cbd7f0 !important;
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
    .move {
      margin-top: 1px;
      width: 100%;
    }
    .info {
      p {
        height: 20px;
      }
      .label {
        color: @normalFontColor;
      }
      .num {
        color: @fontColor;
      }
      span {
        color: @tradeOperateFontColor;
        font-size: 12px;
      }
      .cost {
        width: 246px;
        .label {
          color: #5d6588 !important;
        }
      }
      .fund {
        margin-top: 16px;
        div {
          width: 246px;
          &:nth-child(2) {
            margin-top: 8px;
          }
        }
        span {
          display: inline-block;
        }
      }
      .turn {
        width: 100%;
        position: relative;
        padding-right: 16px;
        padding-bottom: 18px;
        text-align: right;
        .text {
          width: 100%;
          text-align: right;
          cursor: pointer;
          a {
            color: @normalFontColor;
            font-size: 12px;
          }
        }
        .change {
          // position: absolute;
          display: inline-block;
          // top: 8px;
          // right: 56px;
          width: 15px;
          height: 12px;
          background-image: url("../../assets/images/change-light.png");
          background-repeat: no-repeat;
          cursor: pointer;
        }
      }
    }
  }
  .buttons {
    margin-top: 5px;
    &.btns_2 {
      margin-top: 10px;
    }
    a {
      width: 50%;
      height: 36px;
      font-size: 16px;
      line-height: 36px;
      text-align: center;
      color: #fff;
      background-color: #1b2c4a;
      border: 1px solid transparent;
      border-radius: 2px;
      font-family: "Medlium";
    }
    .uselessBuy {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      background-color: #54897b;
      &:hover {
        background-color: #54897b;
      }
    }
    .uselessSell {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      background-color: #a3546f;
      &:hover {
        background-color: #a3546f;
      }
    }
    .buy-order {
    }
    .buy {
      border-top-right-radius: 0;
      border-bottom-right-radius: 0;
      background-color: #0ab480;
      &:hover {
        background-color: @buyButtonHoverColor;
      }
    }
    .sell {
      border-top-left-radius: 0;
      border-bottom-left-radius: 0;
      background-color: #c12252;
      &:hover {
        background-color: @sellButtonHoverColor;
      }
    }
  }
  .cover {
    position: absolute;
    top: 32px;
    width: 270px;
    height: 282px;
    // opacity: 0.5;
    background-color: rgba(0, 0, 0, 0.5);
    .text {
      margin-top: 80px;
      p {
        text-align: center;
        font-size: 14px;
        color: #fff;
        a {
          color: @tradeListBlueFontColor;
        }
      }
    }
  }
}
.trade-operate-white {
  .themeWhite();

  .iconfont {
    color: #8998b6;
    &:hover {
      color: #3f4663;
    }
  }

  .triangle-up {
    .triangle-down(#8998b6);
    background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgNiA0IiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA2IDQ7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPHN0eWxlIHR5cGU9InRleHQvY3NzIj4KCS5zdDB7ZmlsbDojODk5OEI2O30KPC9zdHlsZT4KPHRpdGxlPuWvvOiIqi3kuInop5LlvaI8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KPGcgaWQ9IuWvvOiIqi3kuInop5LlvaIiPgoJPHBhdGggaWQ9IlBhdGgtOCIgY2xhc3M9InN0MCIgZD0iTTAuMiwwaDUuNkM1LjksMCw2LDAuMSw2LDAuMmMwLDAsMCwwLjEsMCwwLjFMMy4yLDMuOUMzLjEsNCwzLDQsMi45LDMuOWMwLDAsMCwwLDAsMEwwLDAuMwoJCUMwLDAuMiwwLDAuMSwwLjEsMEMwLjEsMCwwLjIsMCwwLjIsMHoiLz4KPC9nPgo8L3N2Zz4K)
      no-repeat;
  }

  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  color: @tradeOperateFontColor;
  position: relative;
  min-width: 270px;
  height: 314px;
  background-color: @boxBgColor;
  .toast {
    position: absolute;
  }
  .closeBtn {
    background: @tradeCloseBtn;
    color: @tradeCloseBtnFont;
    height: 36px;
    line-height: 36px;
    text-align: center;
    border-radius: 3px;
    cursor: pointer;
    font-size: 14px;
  }
  .btn1 {
    background: linear-gradient(-90deg, #23d49e 0%, #16be8b 100%);
    border-radius: 3px 0 0 3px !important;
    border-right: none !important;
    &:hover {
      background: @buyButtonHoverColor!important;
    }
  }
  .btn2 {
    background: linear-gradient(-90deg, #23d49e 0%, #0ab480 100%);
    border-radius: 3px 0 0 3px !important;
    border-left: none !important;
    &:hover {
      background: @buyButtonHoverColor;
    }
  }
  .btn3 {
    background: linear-gradient(-90deg, #e7386c 0%, #ce2155 100%);
    border-radius: 0 3px 3px 0 !important;
    border-right: none !important;
    &:hover {
      background: @sellButtonHoverColor;
    }
  }
  .btn4 {
    background: linear-gradient(-90deg, #e7386c 0%, #c12252 100%);
    border-radius: 0 3px 3px 0 !important;
    border-left: none !important;
    &:hover {
      background: @sellButtonHoverColor;
    }
  }
  .title {
    width: 100%;
    height: 36px;
    line-height: 36px;
    padding-left: 10px;
    color: @tradeOperateTitleFontColor;
    font-size: 14px;
    background-color: @boxBgColor;
    box-shadow: 0 2px 10px 0 rgba(89, 122, 185, 0.1);
  }
  .content {
    padding: 0 10px;
    .selects {
      width: 100%;
      span {
        display: inline-block;
        height: 38px;
        line-height: 38px;
        color: #7889a9;
        font-size: 14px;
        cursor: pointer;
        vertical-align: middle;
      }
      .icon {
        margin-bottom: 2px;
        width: 10px;
        height: 6px;
        background: url("../../assets/images/newUI/operate/sjx-white.svg")
          no-repeat;
        cursor: pointer;
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
        // border: 1px solid #253a5e;
        .label.focus {
          color: #5977b1 !important;
        }
        &.input_disabled:hover {
          input {
            border: 1px solid transparent;
          }
        }
        &.input_disabled {
          input {
            border: none;
            background: #ecf0f7;
          }
          .label {
            color: #7889a9;
          }
        }
        input {
          width: 100%;
          height: 100%;
          padding-left: 70px;
          border: 1px solid #dee6f3;
          // border-style: solid;
          border-radius: 2px;
          background: @boxBgColor;
          color: @tradeOperateTitleFontColor;
          font-size: 12px;
          text-align: left;
          .placeholder({color: #6c85ae; font-size: 12px;});
          &:focus {
            // border-color: #B9C7E2!important;
            border-color: #b9c7e2;
          }
          &.en {
            padding-left: 90px !important;
          }
          &.cn {
            padding-left: 70px;
          }
          &.ko {
            padding-left: 70px;
          }
          &.ru {
            padding-left: 90px;
          }
          &.ja {
            padding-left: 100px;
          }
          &.input_disabled {
            border: none;
            background: #ecf0f7;
          }
          &:hover {
            border-color: #b9c7e2;
          }
        }
        .borderTransparent {
          border-color: #dee6f3;
        }
        .borderActive {
          border-color: #b9c7e2 !important;
        }
        .borderRed {
          border-color: #e12961 !important;
        }
        span {
          position: absolute;
          margin-left: 10px;
          right: 0;
          top: 0;
          display: block;
          width: 32px;
          // background: #243b63;
          line-height: 32px;
          font-size: 12px;
          color: #666b93;
          text-align: right;
          height: 100%;
          &.amount_lot {
            position: absolute;
            right: 35px;
            display: inline-block;
            width: auto;
          }
        }
        .label {
          left: 0;
          width: 50px;
          text-align: left;
          color: #7889a9;
          &.en {
            width: 70px;
          }
          &.cn {
            width: 50px;
          }
          &.ko {
            width: 50px;
          }
          &.ru {
            width: 70px;
          }
          &.ja {
            width: 80px;
          }
        }
        .long-label {
          width: 60px !important;
        }
        .unit {
          margin-right: 10px;
          color: #7889a9;
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
    .move {
      margin-top: 1px;
      width: 100%;
    }
    .info {
      p {
        height: 20px;
      }
      .label {
        color: #7889a9;
      }
      .num {
        color: @normalFontColor;
      }
      span {
        color: @tradeOperateFontColor;
        font-size: 12px;
      }
      .cost {
        width: 246px;
        span {
          color: #7889a9;
        }
      }
      .fund {
        margin-top: 16px;
        div {
          width: 246px;
          &:nth-child(2) {
            margin-top: 8px;
          }
        }
        span {
          display: inline-block;
        }
      }
      .turn {
        width: 100%;
        position: relative;
        padding-right: 16px;
        padding-bottom: 18px;
        text-align: right;
        .text {
          width: 100%;
          text-align: right;
          cursor: pointer;
          a {
            color: @normalFontColor;
            font-size: 12px;
          }
        }
        .change {
          // position: absolute;
          display: inline-block;
          // top: 8px;
          // right: 56px;
          width: 15px;
          height: 12px;
          background-image: url("../../assets/images/change-light.png");
          background-repeat: no-repeat;
          cursor: pointer;
        }
      }
    }
  }
  .buttons {
    margin-top: 5px;
    &.btns_2 {
      margin-top: 10px;
    }
    a {
      width: 50%;
      height: 36px;
      font-size: 16px;
      line-height: 36px;
      text-align: center;
      color: #fff;
      background-color: #1b2c4a;
    }
    .uselessBuy {
      background-color: #579f8b;
      &:hover {
        background-color: #579f8b;
      }
    }
    .uselessSell {
      background-color: #b25f7b;
      &:hover {
        background-color: #b25f7b;
      }
    }
    .buy {
      background-color: #0ab480;
      &:hover {
        background-color: @buyButtonHoverColor;
      }
    }
    .sell {
      background-color: #e12961;
      &:hover {
        background-color: @sellButtonHoverColor;
      }
    }
  }
  .cover {
    position: absolute;
    top: 32px;
    width: 270px;
    height: 282px;
    // opacity: 0.5;
    background-color: rgba(0, 0, 0, 0.5);
    .text {
      margin-top: 80px;
      p {
        text-align: center;
        font-size: 14px;
        color: #fff;
        a {
          color: @tradeListBlueFontColor;
        }
      }
    }
  }
}
.error-color {
  border: solid 1px #d32f2f !important;
}
</style>
