<template>
  <st-row
    class="swaps-header scroll"
    :class="[themeValue === 'white' && 'swaps-header-white']"
    align="center"
  >
    <span :class="['logo', $i18n.locale]"></span>
    <st-row class="nav" align="center">
      <st-row class="item" align="center">
        <a
          href="javascript:;"
          :class="[hash === 'usdt' && 'active']"
          @click="GO('usdt')"
        >{{ $t('message.header.usdtTrade') }}</a>
      </st-row>
      <st-row class="item" align="center">
        <a
          href="javascript:;"
          :class="[hash === 'swaps' && 'active']"
          @click="GO('swaps')"
        >{{ $t('message.header.trade') }}</a>
      </st-row>
      <st-row class="item" align="center">
        <a
          href="javascript:;"
          :class="[hash === 'half' && 'active']"
          @click="GO('half')"
        >{{ $t('message.header.regularContract') }}</a>
      </st-row>
    </st-row>
    <div class="blank"></div>
    <!-- 登录 -->
    <template>
      <st-row class="login_user">
        <a class="normal" href="javascript:;" @click="GO('login')">{{ $t('message.header.login')}}</a>
        <div class="line line-10"></div>
        <a
          class="normal"
          href="javascript:;"
          @click="GO('register')"
        >{{ $t('message.header.register') }}</a>
      </st-row>
    </template>
    <!-- 语言选择 -->
    <st-language style="margin: 10px 0 0 20px;"></st-language>
  </st-row>
</template>

<script>
const ipcRenderder = require("electron").ipcRenderer;
import { Toast } from "../../../assets/plugins/toast";
export default {
  name: "new-header",
  data() {
    return {
      themeValue: "block",
      // 判断是在哪个页面
      hash: null,
      title: [
        { name: "swaps", title: "58Coin-数字合约" },
        { name: "usdt", title: "58Coin-USDT合约" },
        { name: "half", title: "58Coin-交割合约" }
      ]
    };
  },
  created() {
    let hash = this.$route.name || "swaps";
    this.hash = hash;
  },
  mounted() {
    this.SET_TITLE();
  },
  methods: {
    // 页面跳转
    GO(name) {
      this.hash = name;
      this.$router.push({ path: `${name}` });
      this.SET_TITLE();
    },
    // 设置header
    SET_TITLE() {
      this.title.map(v => {
        v.name === this.hash && (document.title = v.title);
      });
    }
  }
};
</script>

<style lang="less" scoped>
@import "../../../assets/css/theme.less";
.swaps-header {
  .themeBlack();
  padding-left: 30px;
  padding-right: 30px;
  // min-width: 1366px;
  height: 50px;
  background: @headerBgColor;
  box-shadow: 0 2px 10px 0 #090d17;
  .logo {
    display: block;
    .flex-shrink(@val: 0);
    /*margin-right: 30px;*/
    width: 134px;
    height: 36px;
    background: url("../../../../../static/images/usdt/58COIN_wc.png") no-repeat;
    background-size: 100% 100%;
    &.en {
      background-image: url(../../../../../static/images/usdt/58COIN_we.png);
    }
    &.ko {
      background-image: url(../../../../../static/images/usdt/58COIN_we.png);
    }
    &.ja {
      background-image: url(../../../../../static/images/usdt/58COIN_we.png);
    }
    &.ru {
      background-image: url(../../../../../static/images/usdt/58COIN_we.png);
    }
  }
  .line {
    width: 1px;
    background: @headerLoginLineColor;
  }
  .line-30 {
    height: 30px;
  }
  .line-10 {
    height: 10px;
  }
  .login_user {
    .line-10 {
      margin: 10px;
    }
    .normal {
      padding-top: 4px;
      font-size: 14px;
      color: #7889a9;
      padding-bottom: 2px;
      &:hover {
        color: #7e9efd;
      }
    }
  }
  .nav {
    margin-left: 36px;
    height: 100%;
    .item {
      position: relative;
      margin-right: 36px;
      height: 100%;
      &:last-child {
        margin-right: 0;
      }
      a {
        padding-top: 4px;
        font-size: 14px;
        color: @headerTagsNormalFontColor;
        padding-bottom: 2px;
        &:hover {
          color: #7e9efd;
        }
        &.active {
          border-bottom: 2px solid @headerTagsActiveBorderColor;
          color: #fff; // border-bottom: 2px solid #6c85ae;
        }
      }
      span {
        font-size: 14px;
        color: @fontColor;
        &:hover {
          color: #7e9efd;
        }
        &.active {
          // color: #6c85ae;
          // border-bottom: 2px solid #6c85ae;
        }
      } // 产品列表
      &.product1 {
        display: none;
      }
      &.product2 {
        margin-left: 20px;
      }
      .usdt {
        position: relative;
        .hot {
          display: inline-block;
          position: absolute;
          top: 0;
          right: -14px;
          width: 14px;
          height: 16px;
        }
      }
    }
  }
  .nav-right {
    margin-left: 40px;
    height: 100%;
    .item {
      position: relative;
      margin-left: 48px;
      height: 100%;
      &:last-child {
        margin-right: 0;
      }
      a {
        font-size: 14px;
        color: @fontColor;
        &:hover {
          color: #7e9efd;
        }
      }
    }
  }
  .blank {
    .flex-grow();
  }
  .user {
    .line {
      margin: 0 15px;
    }
    a {
      font-size: 14px;
      color: @headerTagsNormalFontColor;
      &:hover {
        color: #7e9efd;
      }
    }
    .HyIconFont {
      margin-right: 4px;
      color: #7889a9;
    }
    .asset {
      margin-top: 10px;
      padding-bottom: 10px;
      position: relative;
      /*margin-right: 20px;*/
      .asset_pic {
        width: 16px;
        height: 16px;
        margin-top: 3px;
        margin-right: 4px;
        background-image: url("../../../../../static/images/usdt/newUI/toolbar/zc.svg");
        background-size: 100% 100%;
        fill: @headerUserInfoPopupFontShallowColor;
      }
      .link {
        font-size: 14px;
        font-weight: 400;
        color: @headerUserInfoPopupFontShallowColor;
      }
      .arrow {
        display: inline-block;
        margin-top: 6px;
        margin-left: 8px;
        width: 0;
        height: 0;
        border-top: 4px solid @headerUserInfoPopupFontShallowColor;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        cursor: pointer;
        .transition(0.5s);
      }
      &:hover {
        cursor: pointer;
        fill: @headerUserInfoPopupFontColor;
        .asset_pic {
          background-image: url("../../../../../static/images/usdt/newUI/toolbar/zc_hover.svg");
          background-size: 100% 100%;
        }
        .HyIconFont {
          color: @headerUserInfoPopupFontColor;
        }
        .link {
          color: @headerUserInfoPopupFontColor;
        }
        .asset-info {
          display: block;
        }
        .asset-info-white {
          display: block;
        }
        .arrow {
          border-top: 4px solid @headerUserInfoPopupFontColor;
          .transform(rotate(180deg));
        }
      }
    }
    .userInfo {
      margin-top: 10px;
      padding-bottom: 10px;
      position: relative;
      a {
        color: @headerUserInfoPopupFontShallowColor;
      }
      .arrow {
        display: inline-block;
        margin-top: 6px;
        margin-left: 8px;
        width: 0;
        height: 0;
        border-top: 4px solid @headerUserInfoPopupFontShallowColor;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        cursor: pointer;
        .transition(0.5s);
      }
      .arrow-white {
        display: inline-block;
        margin-top: 6px;
        margin-left: 8px;
        width: 0;
        height: 0;
        border-top: 4px solid #fff;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        cursor: pointer;
        .transition(0.5s);
      }
      &:hover {
        a {
          color: @headerUserInfoPopupFontColor;
        }
        .HyIconFont {
          color: @headerUserInfoPopupFontColor;
        }
        .user-info {
          display: block;
        }
        .user-info-white {
          display: block;
        }
        .arrow {
          border-top: 4px solid @headerUserInfoPopupFontColor;
          .transform(rotate(180deg));
        }
      }
    }
  }
  .change-version {
    margin-left: 20px;
    min-width: 70px;
    padding: 0 10px;
    height: 24px;
    line-height: 24px;
    font-size: 12px;
    text-align: center;
    color: @headerChangeVersionFontColor;
    border: 1px solid @headerLoginLineColor;
    border-radius: 100px;
    cursor: pointer;
    &:hover {
      border-color: #6c85ae;
      color: #6c85ae;
    }
  }
}
</style>
