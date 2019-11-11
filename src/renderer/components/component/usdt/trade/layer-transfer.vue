<template>
  <div
    :class="{'layer-transfer':'black' === themeValue, 'layer-transfer-white': 'white' === themeValue}"
  >
    <st-row class="form" direction="column">
      <st-row class="item" @click="showChangeSite" style="margin-top: 0;">
        <span class="label">{{ $t(`message.transform.from`) }}</span>
        <input
          type="text"
          class="firstInput"
          readonly
          v-model="presentSiteName"
          @click="showChangeSite"
          unselectable="on"
          @blur="onBlur()"
          :placeholder="$t(`message.transform.turnOutAccount`)"
          style="padding-right: 22px;cursor:pointer;"
        />
        <span class="icon"></span>
        <!--<layer-select v-show="showSupportSite"-->
        <!--width="280px"-->
        <!--height="24px"-->
        <!--lineHeight="24px"-->
        <!--left="0"-->
        <!--top="36px"-->
        <!--bgColor="bgColor"-->
        <!--:list="supportSite[contractInfo.currencyId]"-->
        <!--@selection="changeSite"></layer-select>-->
        <layer-select-site
          v-show="showSupportSite"
          width="280px"
          height="24px"
          lineHeight="24px"
          left="0"
          top="36px"
          bgcolor="bgColor"
          :list="supportSite[contractInfo.quoteCurrencyId]"
          @selection="changeSite"
        ></layer-select-site>
        <prompt :message="selectSiteErrorMessage" v-show="selectSiteErrorMessage"></prompt>
      </st-row>
      <st-row class="item" v-if="themeValue === 'white'">
        <span class="label" style="color: #7889A9;">{{ $t(`message.transform.transferTo`) }}</span>
        <input
          type="text"
          class="noHover"
          readonly
          :placeholder="$t(`message.transform.swapAccount`)"
          style="padding-right: 7px;background-color: #ECF0F7;"
        />
      </st-row>
      <st-row class="item" v-else>
        <span class="label" style="color: #7889A9;">{{ $t(`message.transform.transferTo`) }}</span>
        <input
          type="text"
          disabled
          class="noHover"
          readonly
          :placeholder="$t(`message.transform.swapAccount`)"
          style="padding-right: 7px;"
        />
      </st-row>
      <st-row class="item">
        <span class="label">{{ $t(`message.transform.transferAccount`) }}</span>
        <input
          type="text"
          v-model="amount"
          @input="inputFn"
          @blur="blurFn"
          :class="{'error' : amountError}"
          :placeholder="$t(`message.transform.inputAccount`)"
        />
        <prompt :message="amountError" v-show="amountError"></prompt>
      </st-row>
      <st-row class="item text" justify="between">
        <p>
          {{ $t(`message.transform.maxTransform`) }}：
          <span
            class="num"
          >{{maxAmount | splitFormat(figure.indexPriceFloat)}}</span>
        </p>
        <p class="all" @click="transferAll">{{ $t(`message.transform.allTransform`) }}</p>
      </st-row>
      <st-row class="item button">
        <a @click="submit">{{ $t(`message.transform.transform`) }}</a>
      </st-row>
      <st-row class="item tips">
        <span>{{ $t(`message.transform.internalTransfer`) }}</span>
      </st-row>
      <st-row class="item notice" v-show="triggerSiteId === 11">
        <span>
          <!-- {{ $t(`message.transform.internalTransfer`) }},
          <span v-if="themeValue === 'black'" style="color: #fff;">{{ $t(`message.transform.strongLevel`) }}</span>
          <span v-else style="color: #121400;">{{ $t(`message.transform.strongLevel`) }}</span>-->
          {{ $t(`message.transform.transferUsdtTip`, {percentage: percentage}) }}
          <!-- tipsContent -->
        </span>
      </st-row>
      <!-- <st-row class="item notice" v-show="triggerSiteId === 12">
        <span>
          {{ $t(`message.transform.transferRegularTip`, {percentage: percentage}) }}
        </span>
      </st-row>-->
    </st-row>
  </div>
</template>

<script>
import LayerSelect from "./layer-select";
import LayerSelectSite from "./layer-select";
import Cookie from "@/assets/js/config/cookie";
import AccountApi from "../../assets/js/api/accountApi";
import Prompt from "../../components/trade/prompt.vue";
import ToolsApi from "@/assets/js/api/toolsApi";
export default {
  name: "layer-transfer",
  components: {
    LayerSelect,
    Prompt,
    LayerSelectSite
  },
  data() {
    return {
      showSupportSite: false,
      presentSiteName: null,
      presentSiteId: null,
      thisSite: 11, // swaps 站点ID = 7
      triggerSiteId: 1, // 币币账户
      triggerComment: "",
      triggerError: "",
      targetSiteId: 11, // 融资融币账户
      targetComment: "",
      targetError: "",
      amount: "",
      amountError: "",
      labsAccountId: 9,
      swapsAccountId: 11,
      regularAccountId: 12,
      onceClick: false,
      swapsMaxAmount: 0,
      selectVal: 0,
      selectSiteErrorMessage: "",
      showNotice: false,
      bgColor: "#181E2F",
      // 百分比
      percentage: "80%"
    };
  },
  computed: {
    contractInfo() {
      let tmp = this.$store.state.market.contract.filter(item => {
        return Number(item.id) === Number(this.$route.params.id);
      });
      return tmp[0] || {};
    },
    // 站点名称key
    localeName() {
      if (/(zh)|(cn)/.test(this.$i18n.locale)) return "name";
      else
        return `name${this.$i18n.locale[0].toUpperCase()}${this.$i18n.locale.slice(
          1
        )}`;
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
      let res = this.$store.state.dictionary.theme;
      if (res === "black") {
        // this.bgColor = '#20283B'
      } else {
        // this.bgColor = '#fff'
      }
      return this.$store.state.dictionary.theme;
    },
    // 币种支持站点账户
    supportSite() {
      // console.log('所有站点', this.$store.state.dictionary.supportSite)
      return this.$store.state.dictionary.supportSite;
    },
    // 主站点
    mainSite() {
      return this.$store.state.dictionary.mainSite;
    },
    // 主账户资产
    mainAssets() {
      // console.log('主账户资产', this.$store.state.account.mainAssets)
      return this.$store.state.account.mainAssets;
    },
    // 其他各账户资产
    detailAssets() {
      // console.log('其他各账户资产', this.$store.state.account.detailAssets)
      return this.$store.state.account.detailAssets;
    },
    // 融资融币账户资产
    labsAssets() {
      let assets = this.$store.state.account.labsAssets;
      let list = (assets && assets.assetsDetails) || [];
      return list.find(item => item.productId === this.triggerComment);
    },
    // 最大可转
    maxAmount() {
      if (!Cookie.getCookie("token")) return 0;
      if (this.selectVal === 0) return "--";
      // 是否是主账户
      // console.log('选择的账户',this.contractInfo.currencyId, this.triggerSiteId, this.mainSite.id)
      let max =
        this.triggerSiteId === this.mainSite.id
          ? this.mainAssets[this.contractInfo.quoteCurrencyId].available
          : // 是否是融资融币账户
          this.triggerSiteId === this.labsAccountId
          ? // 是否有借款
            this.labsAssets &&
            !(
              this.labsAssets.borrow.baseBorrow ||
              this.labsAssets.borrow.quoteBorrow
            )
            ? this.labsAssets.assetsInfo[
                this.contractInfo.unit.toUpperCase() ===
                this.labsAssets.assetsInfo.baseName
                  ? "baseAvailable"
                  : "quoteAvailable"
              ]
            : 0
          : // 是否是掉期账户
          this.triggerSiteId === this.swapsAccountId
          ? this.getSwapsAvailable(this.contractInfo.quoteCurrencyId)
          : this.triggerSiteId === this.regularAccountId
          ? this.getRegularAvailable(this.contractInfo.quoteCurrencyId)
          : this.detailAssets[this.contractInfo.quoteCurrencyId][
              this.triggerSiteId
            ].available;
      if (
        this.triggerSiteId === 2 &&
        this.contractInfo.unit.toUpperCase() === "BTC"
      )
        max = Math.min(5, max);
      return max;
    }
  },
  watch: {
    themeValue(val) {
      if (val === "black") {
        this.bgColor = "#20283B";
      } else {
        this.bgColor = "#fff";
      }
    }
  },
  methods: {
    onBlur() {
      setTimeout(() => {
        this.showSupportSite = false;
      }, 150);
    },
    //      onFocus () {
    //        this.showSupportSite = true
    //      },
    showChangeSite() {
      if (this.showSupportSite) {
        this.showSupportSite = false;
      } else {
        this.showSupportSite = true;
      }
    },
    changeSite(val) {
      // 清除错误提示
      this.amountError = false;
      this.amount = null;
      // console.log('选择的账户',val)
      if (val.id === this.swapsAccountId) {
        this.selectSiteErrorMessage = this.$t("message.transform.same");
        this.showNotice = true;
      } else {
        this.selectSiteErrorMessage = "";
        this.showNotice = false;
      }
      this.selectTriggerSite(val.id);
      this.presentSiteId = val.id;
      if (this.$i18n.locale === "cn") this.presentSiteName = val.name;
      else if (this.$i18n.locale === "en") this.presentSiteName = val.nameEn;
      else if (this.$i18n.locale === "ko") this.presentSiteName = val.nameKo;
      else if (this.$i18n.locale === "ja") this.presentSiteName = val.nameJa;
      else if (this.$i18n.locale === "ru") this.presentSiteName = val.nameRu;
    },
    // 选择转出账户
    selectTriggerSite(id) {
      this.selectVal = 1;
      this.triggerSiteId = id;
      this.triggerComment =
        id === this.labsAccountId ? this.contractInfo.id : "";
    },
    // 选择转出二级账户
    selectTriggerComment(id) {
      this.triggerComment = id;
    },
    // 选择转入账户
    selectTargetSite(id) {
      this.targetSiteId = id;
      this.targetComment =
        id === this.labsAccountId ? this.contractInfo.id : "";
    },
    // 选择全部转账
    transferAll() {
      this.amountError = "";
      if (!this.presentSiteId) {
        this.targetError = this.$t(`message.errorMessage.turnIntoAccount`);
        return;
      }
      // this.amount = `${this.maxAmount} * 1`.result(this.figure ? this.figure.coinInputFloat : 8)
      this.amount = this.$filter.splitFormat(
        this.maxAmount,
        this.figure.indexPriceFloat
      );
    },
    // 获取掉期用户的最多可转出
    getSwapsAvailable(currencyId) {
      // 转出账户和转入账户相同时候不再请求
      if (!!this.selectSiteErrorMessage) {
        return this.swapsMaxAmount;
      }
      AccountApi.swapsAvailable(currencyId)
        .then(res => {
          if (res.data) {
            this.swapsMaxAmount = res.data.swapsAvailable;
          }
        })
        .catch();
      return this.swapsMaxAmount;
    },
    getRegularAvailable(currencyId) {
      // 转出账户和转入账户相同时候不再请求
      if (!!this.selectSiteErrorMessage) {
        return this.swapsMaxAmount;
      }
      AccountApi.regularAvailable(currencyId)
        .then(res => {
          if (res.data) {
            this.swapsMaxAmount = res.data.available;
          }
        })
        .catch();
      return this.swapsMaxAmount;
    },
    inputFn() {
      this.amountError = "";
      this.amount = this.numberLimit(
        this.amount,
        this.figure ? this.figure.coinInputFloat : 8
      );
    },
    blurFn() {
      if (this.amount === "" || !this.amount) return;
      // this.amountError = this.$t(`message.errorMessage.transferAmount`)
      else if (Number(this.amount) <= 0)
        this.amountError = this.$t("message.createdEntrust.positiveInteger");
      else if (Number(this.amount) > Number(this.maxAmount))
        this.amountError = this.$t(`message.errorMessage.amount2`);
    },
    submit() {
      if (this.presentSiteId === this.thisSite) return false;
      if (!this.presentSiteId || this.amountError) return false;
      if (this.onceClick) return false;
      if (!this.amount || this.amount === "0") return;
      if (Number(this.amount) > Number(this.maxAmount)) {
        this.amountError = this.$t(`message.errorMessage.amount2`);
        return;
      }
      this.onceClick = true;
      let params = {
        currencyId: this.contractInfo.quoteCurrencyId,
        triggerSiteId: this.triggerSiteId,
        targetSiteId: this.targetSiteId,
        amount: this.amount
      };
      AccountApi.transfer(params)
        .then(res => {
          this.onceClick = false;
          if (res.code) {
            this.$toast(this.$dictionary.error(res.code));
          } else {
            this.$emit("closeTransfer");
            this.$toast(this.$t(`message.common.success`));
          }
          setTimeout(() => {
            this.$store.dispatch("account/getAssetsMain").catch(er => {
              console.log(er);
            });
            this.$store.dispatch("account/getAssetsDetail").catch(er => {
              console.log(er);
            });
            this.$store.dispatch("account/getAssetsLabs").catch(er => {
              console.log(er);
            });
          }, 300);
        })
        .catch(e => {
          console.log(e.data);
          this.$toast(this.$dictionary.error(e.data.code));
          this.onceClick = false;
        });
    },
    numberLimit(val, len = 8) {
      if (typeof val === "number") return `${val} * 1`.result(len);
      val = val.replace(/。/g, ".");
      let nums = /(\d+)(\.?)(\d*)/.exec(val);
      if (!nums) return "";
      else val = nums[1].slice(0, 10) + nums[2] + nums[3].slice(0, len);
      return val;
    }
  },
  created() {
    this.$store.dispatch("account/getAssetsMain").catch(er => {
      console.log(er);
    });
    this.$store.dispatch("account/getAssetsDetail").catch(er => {
      console.log(er);
    });
    this.$store.dispatch("account/getAssetsLabs").catch(er => {
      console.log(er);
    });
    ToolsApi.getCurrencyAll()
      .then(res => {
        this.$store.commit(
          "dictionary/SAVE_SUPPOERTSITE",
          res.data.siteCurrencyAll
        );
      })
      .catch(err => {});
    ToolsApi.getMainSite()
      .then(res => {
        this.$store.commit("dictionary/SAVE_MAINSITE", res.data.site);
      })
      .catch(err => {});
  }
};
</script>

<style lang="less" scoped="">
@import "../../assets/css/theme";
.layer-transfer {
  .themeBlack();
  width: 340px;
  // height: 258px;
  padding: 20px 30px 0 30px;
  background-color: @layerTransferBgColor;
  .form {
    width: 100%;
    font-size: 12px;
    .item {
      position: relative;
      width: 100%;
      margin-top: 10px;
      .label {
        position: absolute;
        top: 8px;
        left: 10px;
        color: @layerTransferActiveFontColor;
      }
      .icon {
        position: absolute;
        right: 10px;
        top: 14px;
        display: inline-block;
        width: 8px;
        height: 5px;
        background-image: url("../../assets/images/newUI/operate/sjx.svg");
        background-size: cover;
        cursor: pointer;
      }
      input {
        background-color: @layerTransferInputBgColor;
        color: #cbd7f0;
        width: 100%;
        height: 32px;
        line-height: 32px;
        padding-right: 10px;
        text-align: right;
        border: 1px solid transparent;
        border-radius: 3px;
        &:hover {
          border: 1px solid #39425e;
        }
      }
      .error {
        border: 1px solid #e12961;
      }
      .noHover:hover {
        border: 1px solid transparent;
      }
    }
    .text {
      p {
        color: @layerTransferFontColor;
      }
      .num {
        color: @layerTransferActiveFontColor;
      }
      .all {
        color: @layerTransferBlueColor;
        cursor: pointer;
      }
    }
    .button {
      a {
        display: block;
        width: 100%;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        text-align: center;
        color: #fff;
        background-color: @layerTransferBlueColor;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 3px;
        &:hover {
          background-color: #6080e0;
        }
      }
    }
    .tips {
      margin-top: 16px;
      margin-bottom: 16px;
      span {
        display: block;
        width: 100%;
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        text-align: center;
        color: @layerTransferFontColor;
      }
    }
    .notice {
      margin-top: 0;
      margin-bottom: 26px;
      span {
        font-size: 12px;
        color: @layerTransferFontColor;
      }
    }
  }
  input.firstInput {
    caret-color: rgba(0, 0, 0, 0) !important;
  }
  input::-webkit-input-placeholder {
    font-weight: 350;
    color: @layerTransferFontColor;
  }
  input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    font-weight: 350;
    color: @layerTransferFontColor;
  }
  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    font-weight: 350;
    color: @layerTransferFontColor;
  }
  input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    font-weight: 350;
    color: @layerTransferFontColor;
  }
}
.layer-transfer-white {
  .themeWhite();
  width: 340px;
  // height: 258px;
  padding: 20px 30px 0 30px;
  background-color: @boxBgColor;
  .form {
    width: 100%;
    font-size: 12px;
    font-weight: 350;
    .item {
      position: relative;
      width: 100%;
      margin-top: 10px;
      .label {
        position: absolute;
        top: 8px;
        left: 10px;
        color: #24324c;
      }
      .icon {
        position: absolute;
        right: 10px;
        top: 14px;
        display: inline-block;
        width: 8px;
        height: 5px;
        background-image: url("../../assets/images/newUI/operate/sjx-white.svg");
        background-size: cover;
        cursor: pointer;
      }
      input {
        background-color: @boxBgColor;
        color: #24324c;
        width: 100%;
        height: 32px;
        line-height: 32px;
        padding-right: 10px;
        text-align: right;
        border: 1px solid #dee6f3;
        border-radius: 3px;
        &:hover {
          border: 1px solid #b9c7e2;
        }
      }
      .noHover:hover {
        border: 1px solid #dee6f3;
      }
      .error {
        border: 1px solid #e12961;
      }
      .noBorder {
        border: none;
      }
    }
    .text {
      p {
        color: @layerTransferFontColor;
      }
      .num {
        color: #24324c;
      }
      .all {
        color: @layerTransferBlueColor;
        cursor: pointer;
      }
    }
    .button {
      a {
        display: block;
        width: 100%;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        text-align: center;
        color: #fff;
        background: #597ab9;
        cursor: pointer;
        border: 1px solid transparent;
        border-radius: 3px;
        &:hover {
          background-color: #4b6aa5;
        }
      }
    }
    .tips {
      margin-top: 16px;
      margin-bottom: 16px;
      span {
        display: block;
        width: 100%;
        height: 16px;
        line-height: 16px;
        font-size: 12px;
        text-align: center;
        color: @layerTransferFontColor;
      }
    }
    .notice {
      margin-top: 0;
      margin-bottom: 26px;
      span {
        font-size: 12px;
        color: @layerTransferFontColor;
      }
    }
  }
  input::-webkit-input-placeholder {
    font-weight: 350;
    color: @layerTransferFontColor;
  }
  input::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    font-weight: 350;
    color: @layerTransferFontColor;
  }
  input:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    font-weight: 350;
    color: @layerTransferFontColor;
  }
  input:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    font-weight: 350;
    color: @layerTransferFontColor;
  }
  input.firstInput {
    caret-color: rgba(0, 0, 0, 0) !important;
  }
  input.firstInput::-webkit-input-placeholder {
    font-weight: 350;
    color: #24324c;
  }
  input.firstInput::-moz-placeholder {
    /* Mozilla Firefox 19+ */
    font-weight: 350;
    color: #24324c;
  }
  input.firstInput:-moz-placeholder {
    /* Mozilla Firefox 4 to 18 */
    font-weight: 350;
    color: #24324c;
  }
  input.firstInput:-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    font-weight: 350;
    color: #24324c;
  }
}
</style>
