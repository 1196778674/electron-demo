<template>
  <div
    :class="{'layer-ewm': 'black' === themeValue,'layer-ewm-white': 'white' === themeValue}"
    class="layer-ewm"
  >
    <div class="code" ref="code"></div>
    <p class="text">{{$t('message.toolbar.ewm')}}</p>
  </div>
</template>

<script>
// import QRCode from "qrcodejs2";
import LangConfig from "@/assets/js/i18n/config";
import ApiConfig from "@/assets/js/config/api.config";
export default {
  name: "layer-ewm",
  data() {
    return {
      code: "",
      lang: LangConfig.getLang()
    };
  },
  methods: {
    initCode() {
      let self = this;
      this.code = new this.$qrcode(this.$refs.code, {
        text: `https://wap.${ApiConfig.domain}?locale=${this.lang}`,
        width: 128,
        height: 128,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: self.$qrcode.CorrectLevel.L
      });
    }
  },
  watch: {
    "$i18n.locale"() {
      let lang = LangConfig.getLang();
      this.code.makeCode(`https://wap.${ApiConfig.domain}?locale=${lang}`);
    }
  },
  computed: {
    // 主题
    themeValue() {
      return this.$store.state.dictionary.theme;
    }
  },
  mounted() {
    this.initCode();
  }
};
</script>

<style lang="less" scoped="">
@import "../../assets/css/theme";
.layer-ewm {
  .themeBlack();
  position: absolute;
  // width: 172px;
  height: 195px;
  padding: 20px;
  background-color: @ewmBgColor;
  .code {
    width: 138px;
    height: 138px;
    padding: 5px;
    background-color: #fff;
    background-size: cover;
  }
  .text {
    margin-top: 8px;
    width: 100%;
    height: 17px;
    line-height: 17px;
    text-align: center;
    font-size: 12px;
    color: #fff;
  }
}
.layer-ewm-white {
  .themeWhite();
  box-shadow: 0 4px 10px 0 rgba(89, 122, 185, 0.15);
  position: absolute;
  width: 172px;
  height: 195px;
  padding: 20px;
  background-color: @boxBgColor;
  .code {
    width: 128px;
    height: 128px;
    background-size: cover;
  }
  .text {
    margin-top: 8px;
    width: 100%;
    height: 17px;
    line-height: 17px;
    text-align: center;
    font-size: 12px;
    color: #24324c;
  }
}
</style>
