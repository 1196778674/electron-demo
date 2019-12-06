<template>
  <div class="tool-bar-ewm" v-show="isShow">
    <div class="code" ref="code"></div>
    <p class="text">{{ $t('message.toolbar.ewm') }}</p>
  </div>
</template>

<script>
  import ApiConfig from '@/config/api.config'
  import {systemMixin} from '@/mixins'

  export default {
  name: 'ToolBarEwm',
  mixins: [systemMixin],
  props: {
    isShow: Boolean
  },
  data() {
    return {
      code: ''
    }
  },
  methods: {
    initCode() {
      this.code = new this.$qrcode(this.$refs.code, {
        text: `https://wap.${ApiConfig.domain}?locale=${this.locale}`,
        width: 120,
        height: 120,
        colorDark: '#000000',
        colorLight: '#ffffff',
        correctLevel: this.$qrcode.CorrectLevel.L
      })
    }
  },
  watch: {
    locale(value) {
      this.code.makeCode(`https://wap.${ApiConfig.domain}?locale=${value}`)
    }
  },
  mounted() {
    this.initCode()
  }
}
</script>

<style lang="less" scoped="">
 @import (reference) '~@/assets/css/index';
.black {
  .themeBlack();

  .tool-bar-ewm {
    position: absolute;
    width: 172px;
    height: 195px;
    padding: 20px;
    background-color: @inputColor;
    right: 36px;
    z-index: 999;
    bottom: 0;
    &::after {
      content: '';
      position: absolute;
      border: 6px solid transparent;
      border-left-color: @inputColor;
      right: -12px;
      bottom: 12px;
    }
    .code {
      width: 128px;
      height: 128px;
      background-size: cover;
      /deep/ img {
        border: 4px solid #fff;
      }
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
}
.white {
  .themeWhite();

  .tool-bar-ewm {
    position: absolute;
    width: 168px;
    height: 195px;
    padding: 20px;
    background-color: @inputColor;
    right: 36px;
    z-index: 999;
    bottom: 0;
    box-shadow: 0 4px 10px 0 #d2d9e5;
    &::after {
      content: '';
      position: absolute;
      border: 6px solid transparent;
      border-left-color: @inputColor;
      right: -12px;
      bottom: 12px;
    }
    .code {
      width: 128px;
      height: 128px;
      background-size: cover;
      /deep/ img {
        border: 4px solid #fff;
      }
    }
    .text {
      margin-top: 8px;
      width: 100%;
      height: 17px;
      line-height: 17px;
      text-align: center;
      font-size: 12px;
      color: @darkFontColor;
    }
  }
}
</style>
