<template>
  <div
    :class="{'asset-information':'black' === themeValue, 'asset-information-white': 'white' === themeValue}"
  >
    <p
      class="title"
    >{{ $t('message.asset.contractAsset') }}({{contractInfo.unit && contractInfo.unit.toUpperCase()}})</p>
    <div
      class="box"
      :class="[utils.splitFormat(utils.editE(utils.mul(walletAsset.risk || 0, 100)), 0) < 50 && 'safe_color']"
    >
      <span>{{ $t('message.asset.riskDegree')+` ${utils.splitFormat(utils.editE(utils.mul(walletAsset.risk || 0, 100)), 0) || 0}%`}}</span>
      <el-popover
        trigger="manual"
        v-model="popoverStatus3"
        popper-class="tooltip-content"
        :content=" $t('message.asset.riskDegreeInfo')"
        placement="top"
      >
        <span
          slot="reference"
          id="riskDegree"
          class="tooltipinfo iconfont icon-wenhaofill"
          style="margin-right: 10px;cursor: pointer;font-size:14px;"
        ></span>
      </el-popover>
    </div>
    <st-row class="content" direction="column">
      <st-row class="transfer" justify="center" align="center">
        <st-row>
          <span class="icon"></span>
          <span
            class="text"
            style="cursor: pointer;"
            @click="showTransform"
          >{{ $t('message.asset.transform') }}</span>
        </st-row>
      </st-row>
      <st-row class="info" direction="column">
        <st-row class="item" justify="between">
          <p class="label">{{ $t('message.asset.currentAssets') }}</p>
          <p
            class="value"
            v-if="userInfo"
          >{{ utils.editE(walletAsset.current) | splitFormat(figure.fundFloat) || 0 }}</p>
          <p class="value" v-else>-</p>
        </st-row>
        <st-row class="item" justify="between">
          <p class="label">{{ $t('message.asset.availableAssets') }}</p>
          <p
            class="value"
            v-if="userInfo"
          >{{ utils.editE(walletAsset.balance) | splitFormat(figure.fundFloat) || 0 }}</p>
          <p class="value" v-else>-</p>
        </st-row>
        <st-row class="item" justify="between">
          <p class="label">{{ $t('message.asset.margin') }}</p>
          <p
            class="value"
            v-if="userInfo"
          >{{ utils.editE(walletAsset.positionFrozen) | splitFormat(figure.fundFloat) || 0 }}</p>
          <p class="value" v-else>-</p>
        </st-row>
        <st-row class="item" justify="between">
          <p class="label">{{ $t('message.asset.frozenDeposit') }}</p>
          <p
            class="value"
            v-if="userInfo"
          >{{ utils.editE(walletAsset.orderFrozen) | splitFormat(figure.fundFloat) || 0 }}</p>
          <p class="value" v-else>-</p>
        </st-row>
        <st-row class="item" justify="between">
          <p class="label">{{ $t('message.asset.unRelease') }}</p>
          <p
            :class="{'value': true,'buyColor': utils.editE(!!unrealised ? unrealised : walletAsset.unRealised) > 0, 'sellColor': utils.editE(!!unrealised ? unrealised : walletAsset.unRealised) < 0 }"
            v-if="userInfo"
          >{{ utils.editE(!!unrealised ? unrealised : walletAsset.unRealised) | splitFormat(figure.fundFloat) || 0 }}</p>
          <p class="value" v-else>-</p>
        </st-row>
        <!-- 资金杠杆 (∑[持仓均价i*净头寸量i*乘数])/当前资产 -->
        <st-row class="item" justify="between">
          <p class="label">{{ $t('message.asset.fundLeverage') }}</p>
          <p class="value" v-if="userInfo">{{ fundLeverage | splitFormat(2) || 0 }}</p>
          <p class="value" v-else>-</p>
        </st-row>
        <!-- 资金使用率 =（占用保证金+冻结保证金）/当前资产 -->
        <st-row class="item" justify="between">
          <p class="label">{{ $t('message.asset.fundUtilizationRate') }}</p>
          <p class="value" v-if="userInfo">
            {{ (fundUtilizationRate * 100) | splitFormat(2) || 0 }}
            <font
              v-if="fundUtilizationRate"
            >%</font>
          </p>
          <p class="value" v-else>-</p>
        </st-row>

        <!-- <st-row class="item" justify="between">
          <p class="label">{{ $t('message.asset.alreadyRealized') }}</p>
          <p :class="{'value': true,'buyColor': utils.editE(walletAsset.realised) > 0, 'sellColor': utils.editE(walletAsset.realised) < 0 }" v-if="userInfo">{{ utils.editE(walletAsset.realised) | splitFormat(figure.fundFloat) || 0 }}</p>
          <p class="value" v-else>-</p>
        </st-row>
        <st-row class="item" justify="between">
          <p class="label">{{ $t('message.asset.commissionFee') }}</p>
          <p class="value" v-if="userInfo">{{ utils.editE(walletAsset.free) | splitFormat(figure.fundFloat) || 0 }}</p>
          <p class="value" v-else>-</p>
        </st-row>-->
      </st-row>
      <!--<p class="col-1">{{ marginBalance | splitFormat(figure.coinInputFloat) }}</p>-->
      <!--<p class="col-3" style="text-align: center">{{ available | splitFormat(figure.coinInputFloat) }}</p>-->
      <!--<p class="col-4">{{ positionMarginValue | splitFormat(figure.coinInputFloat) }}</p>-->
    </st-row>
    <!--转账弹窗-->
    <popup
      :title="contractInfo.unit.toUpperCase() +' ' + $t('message.asset.transfer')"
      boxWidth="340px"
      :callback="closeLayerClosed"
      :bottomB="bottomB"
      v-if="showTransfer"
    >
      <layer-transfer @closeTransfer="closeTransfer"></layer-transfer>
    </popup>
  </div>
</template>

<script>
import Utils from "@/assets/js/utils";
import Cookie from "@/assets/js/config/cookie";
import Popup from "@/components/trade/popup";
import LayerTransfer from "@/components/trade/layer-transfer";
import SwapsApi from "@/assets/js/api/swapsApi";

export default {
  name: "trade-detail-information",
  components: {
    Popup,
    LayerTransfer
  },
  data() {
    return {
      utils: Utils,
      showTransfer: false,
      option: {
        barColor: "#3d5681",
        barWidth: 6,
        railColor: "#1f3050",
        railWidth: 6,
        barMarginRight: 0,
        barOpacityMin: 0.3,
        zIndex: "200",
        autohidemode: true,
        horizrailenabled: false
      },
      walletAsset: {},
      timer: null,
      popoverStatus3: false,
      bottomB: "",
      s: true,
      // 钱包轮询次数
      walletTimers: 0,
      // 资金杠杆
      fundLeverage: 0,
      // 资金使用率
      fundUtilizationRate: 0
    };
  },
  computed: {
    // 未实现盈亏
    unrealised() {
      return this.$store.state.market.unrealised;
    },
    // 用户信息
    userInfo() {
      let userInfo = this.$store.state.user.userInfo;
      return userInfo;
    },
    themeValue() {
      return this.$store.state.dictionary.theme;
    },
    contractInfo() {
      let tmp = this.$store.state.market.contract.filter(item => {
        return Number(item.id) === Number(this.$route.params.id);
      });
      return tmp[0] || {};
    },
    // 位数要求
    figure() {
      let tmp = this.$store.state.market.contract.filter(item => {
        return Number(item.id) === Number(this.contractInfo.id);
      });
      return (tmp[0] && tmp[0].contractParam) || {};
    },
    // 所有仓位
    storePositionList() {
      return this.$store.state.market.storePositionList;
    },
    // 所有币种信息
    contract() {
      return this.$store.state.market.contract;
    }
  },
  watch: {
    "$store.state.user.walletAsset": {
      handler(val) {
        this.walletAsset = val || {};
      },
      immediate: true,
      deep: true
    },
    "$store.state.market.popoverStatus3"() {
      this.popoverStatus3 = this.$store.state.market.popoverStatus3;
    }
  },
  mounted() {
    document.addEventListener("click", this.fun, false);
  },
  methods: {
    fun(event) {
      const e = window.event || event;
      const path = event.path || (event.composedPath && event.composedPath()); // 火狐和safari获取event.path问题
      for (let i = 0; i < path.length; i++) {
        if (!this.s) {
          this.s = false;
          break;
        } else if (path[i].id === "riskDegree") {
          this.popoverFun3();
          break;
        } else if (path[i].id === "amount1") {
          this.$store.commit(
            "market/SET_POPOVER_STATUS2",
            !this.$store.state.market.popoverStatus2
          );
          this.$store.commit("market/SET_POPOVER_STATUS1", false);
          this.$store.commit("market/SET_POPOVER_STATUS", false);
          this.$store.commit("market/SET_POPOVER_STATUS3", false);
          break;
        } else if (path[i].id === "type3") {
          this.$store.commit("market/SET_POPOVER_STATUS2", false);
          this.$store.commit("market/SET_POPOVER_STATUS1", false);
          this.$store.commit(
            "market/SET_POPOVER_STATUS",
            !this.$store.state.market.popoverStatus
          );
          this.$store.commit("market/SET_POPOVER_STATUS3", false);
          break;
        } else if (path[i].id === "leverage3") {
          this.$store.commit("market/SET_POPOVER_STATUS2", false);
          this.$store.commit(
            "market/SET_POPOVER_STATUS1",
            !this.$store.state.market.popoverStatus1
          );
          this.$store.commit("market/SET_POPOVER_STATUS", false);
          this.$store.commit("market/SET_POPOVER_STATUS3", false);
          break;
        } else {
          if (path[i].id !== "type3" || path[i].id !== "leverage3") {
            this.$store.commit("market/SET_POPOVER_STATUS3", false);
            this.$store.commit("market/SET_POPOVER_STATUS1", false);
            this.$store.commit("market/SET_POPOVER_STATUS2", false);
            this.$store.commit("market/SET_POPOVER_STATUS", false);
          } else {
            break;
          }
        }
      }
    },
    popoverFun3() {
      this.$store.commit(
        "market/SET_POPOVER_STATUS3",
        !this.$store.state.market.popoverStatus3
      );
      this.$store.commit("market/SET_POPOVER_STATUS1", false);
      this.$store.commit("market/SET_POPOVER_STATUS2", false);
      this.$store.commit("market/SET_POPOVER_STATUS", false);
    },
    closeTransfer() {
      this.showTransfer = false;
    },
    // 计算资金杠杆/资金使用率
    fundleverageUtilizationRate(obj) {
      // 资金使用率 =（占用保证金+冻结保证金）/当前资产   fundUtilizationRate
      // 资金杠杆 (∑[持仓均价i*净头寸量i*乘数])/当前资产  fundLeverage
      this.fundUtilizationRate =
        Number(obj.current) !== 0
          ? (Number(obj.positionFrozen) + Number(obj.orderFrozen)) /
            Number(obj.current)
          : 0;

      // 计算资金杠杆
      let lists = this.storePositionList;
      let list_arr = [];
      let list_obj_arr = {};
      let sub_number = 0;
      lists.length > 0 &&
        lists.forEach(v => {
          list_arr.indexOf(v.contractId) < 0 && list_arr.push(v.contractId);
        });
      list_arr.forEach(v => {
        list_obj_arr[v] = [];
        lists.forEach(val => {
          if (val.contractId == v) {
            this.contract.forEach(v => {
              v.id == val.contractId && (val.contractValue = v.value);
            });
            list_obj_arr[v].push(val);
          }
        });
      });
      for (let id in list_obj_arr) {
        let arr = list_obj_arr[id];
        let number;
        if (arr.length == 1) {
          number =
            Number(arr[0].entryPrice) *
            Number(arr[0].positionQty) *
            Number(arr[0].contractValue);
        } else {
          let index =
            Number(arr[0].positionQty) >= Number(arr[1].positionQty) ? 0 : 1;
          number =
            (Number(arr[index].positionQty) -
              Number(arr[index == 0 ? 1 : 0].positionQty)) *
            Number(arr[index].entryPrice) *
            Number(arr[index].contractValue);
        }
        sub_number += number;
      }
      this.fundLeverage =
        Number(obj.current) !== 0 ? sub_number / Number(obj.current) : 0;
    },
    showTransform() {
      if (this.userInfo) {
        this.showTransfer = true;
        if (this.themeValue === "white") {
          this.bottomB = "1px solid #ECF0F7";
        } else {
          this.bottomB = "";
        }
      } else this.showTransfer = false;
    },
    closeLayerClosed() {
      this.showTransfer = false;
    },
    getWallet() {
      SwapsApi.getWalletAsset(this.contractInfo.currencyId)
        .then(res => {
          let asset = (res.data && res.data.asset) || {};
          this.$store.commit("user/SET_WALLETASSET", asset);
          // 计算资金杠杆/资金使用率
          this.fundleverageUtilizationRate(asset);
        })
        .catch(err => {
          // this.$store.commit('SET_WALLET', wallet)
        });
      SwapsApi.getWallet(this.contractInfo.currencyId)
        .then(res => {
          let wallet = (res.data && res.data.wallet) || {};
          this.$store.commit("user/SET_WALLET", wallet);
        })
        .catch(err => {
          // this.$store.commit('SET_WALLET', wallet)
        });
      // 默认请求次数为0，如果请求次数大于3次，并且没有用户信息，表示用户未登录，不再轮询请求
      this.walletTimers++;
      if (
        (!this.userInfo || !Cookie.getCookie("token")) &&
        this.walletTimers >= 3
      ) {
        clearTimeout(this.timer);
        return;
      }
      clearTimeout(this.timer);
      this.timer = setTimeout(this.getWallet, 2000);
    }
  },
  created() {
    this.$store.commit("market/SET_POPOVER_STATUS2", false);
    this.$store.commit("market/SET_POPOVER_STATUS1", false);
    this.$store.commit("market/SET_POPOVER_STATUS", false);
    this.$store.commit("market/SET_POPOVER_STATUS3", false);
    this.getWallet();
  },
  destroyed() {
    this.walletTimers = 0;
    clearTimeout(this.timer);
    document.removeEventListener("click", this.fun, false);
  }
};
</script>

<style lang="less" scoped="">
@import "../../assets/css/theme";
.box {
  height: 32px;
  line-height: 32px;
  font-size: 12px;
  padding-left: 10px;
  background: rgba(185, 46, 93, 0.13);
  color: #c12252;
  font-family: PingFangSC-Regular;
  .flex-box(row, space-between, center);
  &.safe_color {
    background: rgba(10, 180, 128, 0.14);
    color: #0ab480;
    .tooltipinfo {
      opacity: 0.5;
      color: #0ab480;
      &:hover {
        opacity: 1;
      }
    }
  }
}
.asset-information {
  .themeBlack();
  margin: 0 0 0 10px;
  min-width: 240px;
  height: 314px;
  background-color: @assetBgColor;
  border-radius: 3px;
  .tooltipinfo {
    opacity: 0.5;
    color: #c12252;
  }
  .tooltipinfo:hover {
    opacity: 1;
  }
  .title {
    width: 100%;
    height: 36px;
    padding-left: 10px;
    font-size: 14px;
    line-height: 36px;
    color: @assetFontColor;
    background-color: @assetTitleBgColor;
  }
  .content {
    width: 100%;
    padding: 10px 10px 12px 10px;
    .risk {
      position: relative;
      width: 100%;
      p {
        font-size: 12px;
      }
      .string {
        width: 100%;
        p {
          color: @assetStringFontColor;
        }
      }
      .number {
        width: 100%;
        p {
          color: @assetFontColor;
        }
      }
      .pic {
        width: 100%;
        height: 10px;
        background: linear-gradient(to right, #32b28f, #b92e5d);
      }
      .icon {
        display: block;
        position: absolute;
        top: 18px;
        left: 0;
        width: 5px;
        height: 10px;
        background-image: url("../../assets/images/newUI/slide.png");
      }
    }
    .transfer {
      // padding: 20px 0 22px 0;
      padding: 17px 0px 17px 0;
      width: 100%;
      border-bottom: 1px solid #181e2f;
      div {
        span {
          display: block;
        }
      }
      .icon {
        margin-top: 3px;
        width: 18px;
        height: 16px;
        background: url("../../assets/images/newUI/asset/transfer.svg")
          no-repeat;
      }
      .text {
        margin-left: 4px;
        color: #7e9efd;
        font-size: 14px;
      }
      &:hover {
        .icon {
          background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTggMTQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzYwODBFMDt9Cjwvc3R5bGU+Cjx0aXRsZT7ovazlhaU8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KPGcgaWQ9Iui9rOWFpSI+Cgk8cGF0aCBpZD0iUmVjdGFuZ2xlLTIiIGNsYXNzPSJzdDAiIGQ9Ik0yLDEwLjFoMVYxMWMwLDEuMSwwLjksMiwyLDJoMTBjMS4xLDAsMi0wLjksMi0yVjNjMC0xLjEtMC45LTItMi0ySDVDMy45LDEsMywxLjksMywzdjEuMUgyCgkJVjNjMC0xLjcsMS40LTMsMy0zaDEwYzEuNywwLDMsMS4zLDMsM3Y4YzAsMS43LTEuNCwzLTMsM0g1Yy0xLjcsMC0zLTEuMy0zLTNWMTAuMXogTTYuNyw0LjNDNi41LDQsNi41LDMuNSw2LjcsMy4yCgkJYzAuMy0wLjMsMC43LTAuMywxLDBsMi45LDMuM2MwLjMsMC4zLDAuMywwLjgsMCwxLjFsLTIuOSwzLjFjLTAuMSwwLjEtMC4zLDAuMi0wLjUsMC4yYy0wLjIsMC0wLjQtMC4xLTAuNS0wLjIKCQljLTAuMS0wLjEtMC4yLTAuMy0wLjItMC41YzAtMC4yLDAuMS0wLjQsMC4yLTAuNWwxLjgtMkgwLjdDMC4zLDcuNywwLDcuNSwwLDcuMWMwLTAuNCwwLjMtMC43LDAuNy0wLjdoNy44TDYuNyw0LjN6Ii8+CjwvZz4KPC9zdmc+Cg==)
            no-repeat;
        }
        .text {
          color: #6080e0;
        }
      }
    }
    .info {
      width: 100%;
      .item {
        width: 100%;
        height: 25px;
        // height: 30px;
        border-bottom: 1px solid #181e2f;
        .label {
          line-height: 26px;
          // line-height: 31px;
          color: @assetLowFontColor;
          font-size: 12px;
        }
        .value {
          line-height: 26px;
          // line-height: 31px;
          color: @assetFontColor;
          font-size: 12px;
        }
      }
      .item:nth-child(7) {
        border-bottom: 0;
      }
    }
  }
  .buyColor {
    color: #0ab480 !important;
  }
  .sellColor {
    color: #e12961 !important;
  }
}
.asset-information-white {
  .themeWhite();
  margin: 0 0 0 10px;
  min-width: 240px;
  height: 314px;
  background-color: @assetBgColor;
  border-radius: 3px;
  .tooltipinfo {
    opacity: 0.5;
    color: #c12252;
  }
  .tooltipinfo:hover {
    opacity: 1;
  }
  .title {
    width: 100%;
    height: 36px;
    padding-left: 10px;
    font-size: 14px;
    line-height: 36px;
    color: @assetFontColor;
    background-color: @assetTitleBgColor;
    box-shadow: 0 2px 10px 0 rgba(89, 122, 185, 0.1);
  }
  .content {
    width: 100%;
    padding: 10px 10px 12px 10px;
    .risk {
      position: relative;
      width: 100%;
      p {
        font-size: 12px;
      }
      .string {
        width: 100%;
        p {
          color: @assetStringFontColor;
        }
      }
      .number {
        width: 100%;
        p {
          color: @assetFontColor;
        }
      }
      .pic {
        width: 100%;
        height: 10px;
        background: linear-gradient(to right, #32b28f, #b92e5d);
      }
      .icon {
        display: block;
        position: absolute;
        top: 18px;
        left: 0;
        width: 5px;
        height: 10px;
        background-image: url("../../assets/images/newUI/slide.png");
      }
    }
    .transfer {
      padding: 10px 0 12px 0;
      width: 100%;
      border-bottom: 1px solid @assetBorderColor;
      div {
        span {
          display: block;
        }
      }
      .icon {
        margin-top: 3px;
        width: 18px;
        height: 16px;
        background: url("../../assets/images/newUI/asset/transfer.svg")
          no-repeat;
      }
      .text {
        margin-left: 4px;
        color: #7e9efd;
        font-size: 14px;
      }
      &:hover {
        .icon {
          background: url(data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCEtLSBHZW5lcmF0b3I6IEFkb2JlIElsbHVzdHJhdG9yIDIyLjEuMCwgU1ZHIEV4cG9ydCBQbHVnLUluIC4gU1ZHIFZlcnNpb246IDYuMDAgQnVpbGQgMCkgIC0tPgo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IuWbvuWxgl8xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB4PSIwcHgiIHk9IjBweCIKCSB2aWV3Qm94PSIwIDAgMTggMTQiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDE4IDE0OyIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSI+CjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+Cgkuc3Qwe2ZpbGw6IzYwODBFMDt9Cjwvc3R5bGU+Cjx0aXRsZT7ovazlhaU8L3RpdGxlPgo8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KPGcgaWQ9Iui9rOWFpSI+Cgk8cGF0aCBpZD0iUmVjdGFuZ2xlLTIiIGNsYXNzPSJzdDAiIGQ9Ik0yLDEwLjFoMVYxMWMwLDEuMSwwLjksMiwyLDJoMTBjMS4xLDAsMi0wLjksMi0yVjNjMC0xLjEtMC45LTItMi0ySDVDMy45LDEsMywxLjksMywzdjEuMUgyCgkJVjNjMC0xLjcsMS40LTMsMy0zaDEwYzEuNywwLDMsMS4zLDMsM3Y4YzAsMS43LTEuNCwzLTMsM0g1Yy0xLjcsMC0zLTEuMy0zLTNWMTAuMXogTTYuNyw0LjNDNi41LDQsNi41LDMuNSw2LjcsMy4yCgkJYzAuMy0wLjMsMC43LTAuMywxLDBsMi45LDMuM2MwLjMsMC4zLDAuMywwLjgsMCwxLjFsLTIuOSwzLjFjLTAuMSwwLjEtMC4zLDAuMi0wLjUsMC4yYy0wLjIsMC0wLjQtMC4xLTAuNS0wLjIKCQljLTAuMS0wLjEtMC4yLTAuMy0wLjItMC41YzAtMC4yLDAuMS0wLjQsMC4yLTAuNWwxLjgtMkgwLjdDMC4zLDcuNywwLDcuNSwwLDcuMWMwLTAuNCwwLjMtMC43LDAuNy0wLjdoNy44TDYuNyw0LjN6Ii8+CjwvZz4KPC9zdmc+Cg==)
            no-repeat;
        }
        .text {
          color: #6080e0;
        }
      }
    }
    .info {
      width: 100%;
      .item {
        width: 100%;
        height: 27px;
        border-bottom: 1px solid @assetBorderColor;
        .label {
          line-height: 28px;
          color: @entrustListDeepFontColor;
          font-size: 12px;
        }
        .value {
          line-height: 28px;
          color: @assetFontColor;
          font-size: 12px;
        }
      }
      .item:nth-child(7) {
        border-bottom: 0;
      }
    }
  }
  .buyColor {
    color: #0ab480 !important;
  }
  .sellColor {
    color: #e12961 !important;
  }
}
</style>
