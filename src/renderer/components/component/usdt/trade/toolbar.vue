<template>
  <st-row
    :class="{'toolbar': 'black' === themeValue,'toolbar-white': 'white' === themeValue}"
    :style="{height: boxHeight}"
  >
    <div class="spread-button" @click="spread">
      <span :class="{'rotate': showToolbar}"></span>
    </div>
    <st-row
      id="toolbar-content"
      :class="{'content': true, 'min-content': minContent}"
      direction="column"
      justify="between"
      v-if="showToolbar"
    >
      <!--{{presentType}}-->
      <st-row class="top" direction="column">
        <div
          :class="{'item': true, 'wb': true, 'item-active wb-active': 'wb' === presentType}"
          @click="changeType('wb')"
        >
          <span class="float">{{ $t(`message.toolbar.ztqh`) }}</span>
        </div>
        <div
          :class="{'item': true, 'qb': true, 'item-active qb-active': 'qb' === presentType }"
          @click="changeType('qb')"
        >
          <span class="float">{{ $t(`message.toolbar.userCenter`) }}</span>
        </div>
        <div
          :class="{'item': true, 'gg': true, 'item-active gg-active': 'gg' === presentType }"
          @click="changeType('gg')"
        >
          <span
            :class="{'float':true,'none':'gg' === presentType}"
          >{{ $t(`message.toolbar.announcement`) }}</span>
          <layer-announcement v-show="'gg' === presentType" @closeAnnouncement="closeLayer('gg')"></layer-announcement>
        </div>
        <div
          :class="{'item': true, 'jsq': true, 'item-active jsq-active': 'jsq' === presentType }"
          @click="changeType('jsq')"
        >
          <span :class="{'float':true,'none':'jsq' === presentType}">{{ $t(`message.toolbar.jsq`) }}</span>
          <!--计算器-->
          <trade-calculate v-if="'jsq' === presentType" @closeCal="closeLayer('jsq')"></trade-calculate>
        </div>
      </st-row>
      <st-row class="bottom" direction="column">
        <!--<div :class="{'item': true, 'fk': true, 'item-active fk-active': 'fk' === presentType }" @click="changeType('fk')">-->
        <!--<span class="float">{{ $t(`message.toolbar.yhfk`) }}</span>-->
        <!--&lt;!&ndash;<feedback v-if="'fk' === presentType" @closeFeedback="closeLayer('fk')"></feedback>&ndash;&gt;-->
        <!--&lt;!&ndash;<a v-if="'fk' === true" href="http://58btc.udesk.cn/im_client/feedback_tab/new.html"></a>&ndash;&gt;-->
        <!--</div>-->
        <div
          :class="{'item': true, 'ewm': true, 'item-active ewm-active': 'ewm' === presentType }"
          @click="changeType('ewm')"
        >
          <span
            :class="{'float':true,'none':'ewm' === presentType}"
          >{{ $t(`message.toolbar.ewCode`) }}</span>
          <layer-ewm v-if="'ewm' === presentType"></layer-ewm>
        </div>
        <div
          :class="{'item': true, 'help': true, 'item-active help-active': 'help' === presentType }"
          @click="changeType('help')"
        >
          <span class="float">{{ $t(`message.toolbar.hyzn`) }}</span>
        </div>
        <div
          :class="{'item': true, 'lxkf': true, 'item-active lxkf-active': 'lxkf' === presentType }"
          @click="changeType('lxkf')"
        >
          <span class="float">{{ $t(`message.toolbar.lxkf`) }}</span>
        </div>
      </st-row>
    </st-row>
    <!--悬浮框-->
  </st-row>
</template>


<script>
import TradeCalculate from "./trade-calculate.vue";
import LayerAnnouncement from "./layer-announcement.vue";
import LayerEwm from "./layer-ewm.vue";
import Feedback from "./feedback.vue";
import ApiConfig from "@/myConfig/api.config";
import Cookie from "@/myConfig/cookie";
export default {
  name: "toolbar",
  components: {
    TradeCalculate,
    LayerAnnouncement,
    LayerEwm,
    Feedback
  },
  data() {
    return {
      showToolbar: true,
      presentType: "",
      minContent: false,
      kfShow: false,
      FkShow: false,
      apiConfig: ApiConfig,
      once: false,
      first: false,
      boxHeight: ""
    };
  },
  computed: {
    // 主题
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
    "$store.state.dictionary.screenWidth": {
      handler(val) {
        if (this.screenHeight <= 760 || this.screenWidth <= 1366) {
          this.boxHeight = "718px";
        } else {
          this.boxHeight = "850px";
        }
      },
      immediate: true
    },
    "$store.state.dictionary.screenHeight": {
      handler(val) {
        if (this.screenHeight <= 760 || this.screenWidth <= 1366) {
          this.boxHeight = "718px";
        } else {
          this.boxHeight = "850px";
        }
      },
      immediate: true
    }
  },
  methods: {
    spread() {
      this.showToolbar = !this.showToolbar;
      if (!this.showToolbar) {
        this.$emit("watchRight", "rightOff");
      } else {
        this.$emit("watchRight", "");
      }
    },
    changeType(type) {
      if (type === "ewm" && this.presentType === "ewm") {
        this.presentType = "";
        return;
      }
      if (type === "wb") {
        this.changeTheme();
      }
      if (type === "lxkf") {
        this.kfShow = !this.kfShow;
        this.showKf();
      }
      if (type === "fk") {
        this.FkShow = !this.FkShow;
        this.showFk();
      }
      if (type === "qb") {
        window.location.href = this.apiConfig.userDomain + "account";
      }
      if (type === "help") {
        // this.$router.push('handbook/instructions')
        this.$router.push("/handbook/usdtContract#1");
      }
      this.presentType = type;

      if (type === "lxkf") {
        if (!this.kfShow) {
          this.presentType = "";
        }
      }
    },
    // 关闭弹窗
    closeLayer(type) {
      this.presentType = "";
    },
    initTheme() {
      if (Cookie.getCookie("theme") === "black") {
        this.$store.commit("dictionary/SET_THEME", "black");
      }
      if (Cookie.getCookie("theme") === "white") {
        this.$store.commit("dictionary/SET_THEME", "white");
      }
      if (Cookie.getCookie("theme")) {
        this.$store.commit("dictionary/SET_THEME", Cookie.getCookie("theme"));
      } else {
        Cookie.setCookie("theme", "black", 1, "/", this.apiConfig.domain);
      }
    },
    // 切换主题色彩
    changeTheme() {
      if (this.themeValue === "black") {
        this.$store.commit("dictionary/SET_THEME", "white");
        Cookie.setCookie("theme", "white", 1, "/", this.apiConfig.domain);
      } else {
        this.$store.commit("dictionary/SET_THEME", "black");
        Cookie.setCookie("theme", "black", 1, "/", this.apiConfig.domain);
      }
    },
    // 显示客服
    showKf() {
      if (this.kfShow) {
        if (!this.once) {
          (function(a, h, c, b, f, g) {
            a["UdeskApiObject"] = f;
            a[f] =
              a[f] ||
              function() {
                (a[f].d = a[f].d || []).push(arguments);
              };
            g = h.createElement(c);
            g.async = 1;
            g.charset = "utf-8";
            g.src = b;
            c = h.getElementsByTagName(c)[0];
            c.parentNode.insertBefore(g, c);
          })(
            window,
            document,
            "script",
            "//assets-cli.udesk.cn/im_client/js/udeskApi.js",
            "ud"
          );
          ud({
            code: "22ab1akk",
            link: "//58btc.udesk.cn/im_client/?web_plugin_id=38854"
          });
          this.once = true;
        } else {
          document.getElementById("udesk_container").style.display = "block";
          document.getElementById("udesk_btn").style.display = "block";
        }
      } else {
        document.getElementById("udesk_container").style.display =
          "none !important";
        document.getElementById("udesk_btn").style.display = "none";
      }
    },
    showFk() {
      if (this.FkShow) {
        document.getElementById("udesk-feedback-tab").style.display = "block";
      } else {
        document.getElementById("udesk-feedback-tab").style.display = "none";
      }
    }
  },
  mounted() {
    this.initTheme();
  }
};
</script>

<style lang="less" scoped>
@import "../../assets/css/theme";
.toolbar {
  position: relative;
  z-index: 999;
  .themeBlack();
  .spread-button {
    margin: 400px auto 0;
    width: 8px;
    height: 100px;
    background: #262e43;
    cursor: pointer;
    text-align: center;
    border-radius: 2px;
    span {
      display: block;
      margin-top: 48px;
      /*margin-left: 1px;*/
      width: 6px;
      height: 3px;
      border-top: 4px solid transparent;
      border-right: 4px solid #637391;
      border-bottom: 4px solid transparent;
      /*text-align: center;*/
      /*background-image: url("../../assets/images/newUI/spread.png");*/
      /*background-size: cover;*/
      /*transition: .8s;*/
    }
    .rotate {
      margin-left: 2px;
      transform: rotate(180deg);
    }
    &:hover {
      background: #637391;
      span {
        border-top: 4px solid transparent;
        border-right: 4px solid #fff;
        border-bottom: 4px solid transparent;
      }
    }
  }
  .content {
    height: 100%;
    background: @toolbarBgColor;
    .item {
      width: 36px;
      height: 36px;
      cursor: pointer;
      &:hover {
        background: @toolbarActiveBgColor;
      }
    }
    .item-active {
      background-color: @toolbarActiveBgColor!important;
    }
    .wb {
      position: relative;
      background: url("../../assets/images/newUI/toolbar/heiyemoshi.svg")
        no-repeat 50% 50%;
      background-size: 50%;
      .float {
        display: none;
      }
      &:hover {
        background-color: @toolbarActiveBgColor;
        background-image: url("../../assets/images/newUI/toolbar/heiyemoshi2.svg");
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        .float {
          padding: 0 10px;
          white-space: nowrap;
          background: #181e2f;
          position: absolute;
          right: 36px;
          display: block;
          /*width: 76px;*/
          height: 36px;
          text-align: center;
          line-height: 36px;
          color: #cbd7f0;
          font-size: 12px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
          z-index: 999;
        }
      }
    }
    .qb {
      background: url("../../assets/images/newUI/toolbar/qianbao.svg") no-repeat
        50% 50%;
      background-size: 50%;
      .float {
        display: none;
      }
      &:hover {
        background-color: @toolbarActiveBgColor;
        background-image: url("../../assets/images/newUI/toolbar/qianbao-white.svg");
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        .float {
          padding: 0 10px;
          white-space: nowrap;
          background: #181e2f;
          position: absolute;
          right: 36px;
          display: block;
          /*width: 76px;*/
          height: 36px;
          text-align: center;
          line-height: 36px;
          color: #cbd7f0;
          font-size: 12px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
          z-index: 999;
        }
      }
    }
    .gg {
      position: relative;
      background: url("../../assets/images/newUI/toolbar/gonggao.svg") no-repeat
        50% 50%;
      background-size: 50%;
      .float {
        display: none;
      }
      .none {
        display: none !important;
      }
      &:hover {
        background: @toolbarActiveBgColor;
        background-image: url("../../assets/images/newUI/toolbar/gonggao-white.svg");
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        .float {
          padding: 0 10px;
          background: #181e2f;
          position: absolute;
          right: 36px;
          display: block;
          /*width: 76px;*/
          height: 36px;
          text-align: center;
          line-height: 36px;
          color: #cbd7f0;
          font-size: 12px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
          z-index: 999;
          white-space: nowrap;
        }
      }
    }
    .jsq {
      position: relative;
      background: url("../../assets/images/newUI/toolbar/jisuanqi.svg")
        no-repeat 50% 50%;
      background-size: 50%;
      .float {
        display: none;
      }
      .none {
        display: none !important;
      }
      .trade-calculate {
        position: absolute;
        top: 0;
        left: -370px;
      }
      &:hover {
        background: @toolbarActiveBgColor;
        background-image: url("../../assets/images/newUI/toolbar/jisuanqi-white.svg");
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        .float {
          padding: 0 10px;
          white-space: nowrap;
          background: #181e2f;
          position: absolute;
          right: 36px;
          display: block;
          /*width: 76px;*/
          height: 36px;
          text-align: center;
          line-height: 36px;
          color: #cbd7f0;
          font-size: 12px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
          z-index: 999;
        }
      }
    }
    .fk {
      position: relative;
      background: url("../../assets/images/newUI/toolbar/fankui.svg") no-repeat
        50% 50%;
      background-size: 50%;
      .float {
        display: none;
      }
      &:hover {
        background: @toolbarActiveBgColor;
        background-image: url("../../assets/images/newUI/toolbar/fankui-white.svg");
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        .float {
          padding: 0 10px;
          white-space: nowrap;
          background: #181e2f;
          position: absolute;
          right: 36px;
          display: block;
          /*width: 76px;*/
          height: 36px;
          text-align: center;
          line-height: 36px;
          color: #cbd7f0;
          font-size: 12px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        }
      }
    }
    .lxkf {
      background: url("../../assets/images/newUI/toolbar/lianxikefu.svg")
        no-repeat 50% 50%;
      background-size: 50%;
      .float {
        display: none;
      }
      &:hover {
        background: @toolbarActiveBgColor;
        background-image: url("../../assets/images/newUI/toolbar/lianxikefu-white.svg");
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        .float {
          padding: 0 10px;
          position: absolute;
          right: 36px;
          display: block;
          /*width: 76px;*/
          height: 36px;
          font-size: 12px;
          line-height: 36px;
          text-align: center;
          color: #cbd7f0;
          background: #181e2f;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
          white-space: nowrap;
        }
      }
    }
    .ewm {
      position: relative;
      background: url("../../assets/images/newUI/toolbar/erweima.svg") no-repeat
        50% 50%;
      background-size: 50%;
      .float {
        display: none;
      }
      .layer-ewm {
        right: 36px;
        bottom: 0;
      }
      .none {
        display: none !important;
      }
      &:hover {
        background: @toolbarActiveBgColor;
        background-image: url("../../assets/images/newUI/toolbar/erweima-white.svg");
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        .float {
          padding: 0 10px;
          white-space: nowrap;
          background: #181e2f;
          position: absolute;
          right: 36px;
          display: block;
          /*width: 76px;*/
          height: 36px;
          text-align: center;
          line-height: 36px;
          color: #cbd7f0;
          font-size: 12px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        }
      }
    }
    .help {
      background: url("../../assets/images/newUI/toolbar/help.svg") no-repeat
        50% 50%;
      background-size: 50%;
      .float {
        display: none;
      }
      &:hover {
        background: @toolbarActiveBgColor;
        background-image: url("../../assets/images/newUI/toolbar/help-white.svg");
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        .float {
          padding: 0 10px;
          background: #181e2f;
          position: absolute;
          right: 36px;
          display: block;
          /*width: 76px;*/
          height: 36px;
          text-align: center;
          line-height: 36px;
          color: #cbd7f0;
          font-size: 12px;
          white-space: nowrap;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        }
      }
    }
  }
}
.toolbar-white {
  position: relative;
  z-index: 999;
  .themeWhite();
  .spread-button {
    margin: 400px auto 0;
    width: 8px;
    height: 100px;
    background: #fff;
    border: 0.5px solid rgba(120, 137, 169, 0.5);
    cursor: pointer;
    text-align: center;
    border-radius: 2px;
    span {
      display: block;
      margin-top: 48px;
      margin-left: -1px;
      width: 6px;
      height: 3px;
      border-top: 4px solid transparent;
      border-right: 4px solid #7889a9;
      border-bottom: 4px solid transparent;
    }
    .rotate {
      margin-left: 2px;
      transform: rotate(180deg);
    }
    &:hover {
      border: 0.5px solid #7e9efd;
      span {
        border-top: 4px solid transparent;
        border-right: 4px solid #7e9efd;
        border-bottom: 4px solid transparent;
      }
    }
  }
  .content {
    height: 100%;
    background: @boxBgColor;
    .item {
      width: 36px;
      height: 36px;
      cursor: pointer;
      &:hover {
        background: @toolbarActiveBgColor;
      }
    }
    .item-active {
      background-color: @toolbarActiveBgColor!important;
    }
    .wb {
      background: url("../../assets/images/newUI/toolbar/baitian.svg") no-repeat
        50% 50%;
      background-size: 50%;
      .float {
        display: none;
      }
      &:hover {
        background-color: @toolbarActiveBgColor;
        background-image: url("../../assets/images/newUI/toolbar/baitian-white.svg");
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        .float {
          padding: 0 10px;
          white-space: nowrap;
          background: #fff;
          position: absolute;
          right: 36px;
          display: block;
          /*width: 76px;*/
          height: 36px;
          text-align: center;
          line-height: 36px;
          color: #24324c;
          font-size: 12px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
          z-index: 999;
        }
      }
    }
    .wb-active {
      background-color: @toolbarActiveBgColor;
      background-image: url("../../assets/images/newUI/toolbar/baitian-white.svg");
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
    .qb {
      background: url("../../assets/images/newUI/toolbar/qianbao.svg") no-repeat
        50% 50%;
      background-size: 50%;
      .float {
        display: none;
      }
      &:hover {
        background-color: @toolbarActiveBgColor;
        background-image: url("../../assets/images/newUI/toolbar/qianbao-white.svg");
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        .float {
          padding: 0 10px;
          white-space: nowrap;
          background: #fff;
          position: absolute;
          right: 36px;
          display: block;
          /*width: 76px;*/
          height: 36px;
          text-align: center;
          line-height: 36px;
          color: #24324c;
          font-size: 12px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
          z-index: 999;
        }
      }
    }
    .qb-active {
      background-color: @toolbarActiveBgColor;
      background-image: url("../../assets/images/newUI/toolbar/qianbao-white.svg");
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
    .gg {
      position: relative;
      background: url("../../assets/images/newUI/toolbar/gonggao.svg") no-repeat
        50% 50%;
      background-size: 50%;
      .float {
        display: none;
      }
      .none {
        display: none !important;
      }
      &:hover {
        background-color: @toolbarActiveBgColor;
        background-image: url("../../assets/images/newUI/toolbar/gonggao-white.svg");
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        .float {
          padding: 0 10px;
          background: #fff;
          position: absolute;
          right: 36px;
          display: block;
          /*width: 76px;*/
          height: 36px;
          text-align: center;
          line-height: 36px;
          color: #24324c;
          font-size: 12px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
          z-index: 999;
          white-space: nowrap;
        }
      }
    }
    .gg-active {
      background-color: @toolbarActiveBgColor;
      background-image: url("../../assets/images/newUI/toolbar/gonggao-white.svg");
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
    .jsq {
      position: relative;
      background: url("../../assets/images/newUI/toolbar/jisuanqi.svg")
        no-repeat 50% 50%;
      background-size: 50%;
      .float {
        display: none;
      }
      .none {
        display: none !important;
      }
      &:hover {
        background-color: @toolbarActiveBgColor;
        background-image: url("../../assets/images/newUI/toolbar/jisuanqi-white.svg");
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        .float {
          padding: 0 10px;
          white-space: nowrap;
          background: #fff;
          position: absolute;
          right: 36px;
          display: block;
          /*width: 76px;*/
          height: 36px;
          text-align: center;
          line-height: 36px;
          color: #24324c;
          font-size: 12px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
          z-index: 999;
        }
      }
      .trade-calculate {
        position: absolute;
        top: 0;
        left: -370px;
      }
    }
    .jsq-active {
      background-color: @toolbarActiveBgColor;
      background-image: url("../../assets/images/newUI/toolbar/jisuanqi-white.svg");
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
    .fk {
      position: relative;
      background: url("../../assets/images/newUI/toolbar/fankui.svg") no-repeat
        50% 50%;
      background-size: 50%;
      .float {
        display: none;
      }
      &:hover {
        background-color: @toolbarActiveBgColor;
        background-image: url("../../assets/images/newUI/toolbar/fankui-white.svg");
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        .float {
          padding: 0 10px;
          white-space: nowrap;
          background: #fff;
          position: absolute;
          right: 36px;
          display: block;
          /*width: 76px;*/
          height: 36px;
          text-align: center;
          line-height: 36px;
          color: #24324c;
          font-size: 12px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        }
      }
    }
    .fk-active {
      background-color: @toolbarActiveBgColor;
      background-image: url("../../assets/images/newUI/toolbar/fankui-white.svg");
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
    .lxkf {
      background: url("../../assets/images/newUI/toolbar/lianxikefu.svg")
        no-repeat 50% 50%;
      background-size: 50%;
      .float {
        display: none;
      }
      &:hover {
        background-color: @toolbarActiveBgColor;
        background-image: url("../../assets/images/newUI/toolbar/lianxikefu-white.svg");
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        .float {
          padding: 0 10px;
          position: absolute;
          right: 36px;
          display: block;
          /*width: 76px;*/
          height: 36px;
          line-height: 36px;
          font-size: 12px;
          text-align: center;
          color: #24324c;
          background: #fff;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
          white-space: nowrap;
        }
      }
    }
    .lxkf-active {
      background-color: @toolbarActiveBgColor;
      background-image: url("../../assets/images/newUI/toolbar/lianxikefu-white.svg");
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
    .ewm {
      position: relative;
      background: url("../../assets/images/newUI/toolbar/erweima.svg") no-repeat
        50% 50%;
      background-size: 50%;
      .float {
        display: none;
      }
      .none {
        display: none !important;
      }
      &:hover {
        background-color: @toolbarActiveBgColor;
        background-image: url("../../assets/images/newUI/toolbar/erweima-white.svg");
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        .float {
          padding: 0 10px;
          white-space: nowrap;
          background: #fff;
          position: absolute;
          right: 36px;
          display: block;
          /*width: 76px;*/
          height: 36px;
          text-align: center;
          line-height: 36px;
          color: #24324c;
          font-size: 12px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
        }
      }
      .layer-ewm {
        right: 36px;
        bottom: 0;
      }
    }
    .ewm-active {
      background-color: @toolbarActiveBgColor;
      background-image: url("../../assets/images/newUI/toolbar/erweima-white.svg");
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
    .help {
      background: url("../../assets/images/newUI/toolbar/help.svg") no-repeat
        50% 50%;
      background-size: 50%;
      .float {
        display: none;
      }
      &:hover {
        background-color: @toolbarActiveBgColor;
        background-image: url("../../assets/images/newUI/toolbar/help-white.svg");
        background-size: 50%;
        background-repeat: no-repeat;
        background-position: 50% 50%;
        .float {
          padding: 0 10px;
          background: #fff;
          position: absolute;
          right: 36px;
          display: block;
          /*width: 76px;*/
          height: 36px;
          text-align: center;
          line-height: 36px;
          color: #24324c;
          font-size: 12px;
          box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
          white-space: nowrap;
        }
      }
    }
    .help-active {
      background-color: @toolbarActiveBgColor;
      background-image: url("../../assets/images/newUI/toolbar/help-white.svg");
      background-repeat: no-repeat;
      background-position: 50% 50%;
    }
  }
}
</style>
