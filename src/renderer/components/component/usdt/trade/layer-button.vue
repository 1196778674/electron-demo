<template>
  <div :class="{'layer-button': themeValue === 'black', 'layer-button-white': themeValue === 'white'}">
    <div class="buttons">
      <a class="cancel" @click="close">{{$t('message.layerButton.cancel')}}</a>
      <a class="confirm" style="background-color: #7e9efd;color: #fff;" @click="confirm">{{!btnText.length ? $t('message.layerButton.confirm') : btnText}}</a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'layer-button',
    props: {
      close: {
        type: Function,
        required: true
      },
      confirm: {
        type: Function,
        required: true
      },
      btnText: {
        type: String,
        default: ''
      }
    },
    computed: {
      // 主题
      themeValue () {
        return this.$store.state.dictionary.theme
      }
    },
    data () {
      return {}
    }
  }
</script>

<style lang="less" scoped>
  @import url("../../assets/css/theme");
  .layer-button {
    .themeBlack();
    width: 100%;
    height: 50px;
    background-color: @layerButtonBgColor;
    color: @layerButtonFontColor;
    .buttons {
      padding-top: 10px;
      margin-right: 20px;
      text-align: right;
      a {
        display: inline-block;
        min-width: 56px;
        padding: 0px 6px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 12px;
        color: @layerButtonFontColor;
        border-radius: 3px;
        border: solid 1px #7e9efd;
        &:nth-child(2) {
          margin-left: 12px;
        }
        &:hover {
          border: 1px solid #6080E0;
          background: #6080E0;
          color: #fff;
        }
      }
      .confirm {
        background-color: #7e9efd!important;
        color: #fff!important;
        &:hover {
          border: 1px solid #6080E0;
          background: #6080E0!important;
        }
      }
    }
  }
  .layer-button-white {
    .themeWhite();
    width: 100%;
    height: 50px;
    background-color: #F3F7FE;
    color: @layerButtonFontColor;
    .buttons {
      padding-top: 10px;
      margin-right: 20px;
      text-align: right;
      a {
        display: inline-block;
        min-width: 56px;
        padding: 0px 6px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        font-size: 12px;
        color: #597AB9;
        border-radius: 3px;
        border: solid 1px #597AB9;
        &:nth-child(2) {
          margin-left: 12px;
        }
        &:hover {
          border: 1px solid #4B6AA5;
          background: #4B6AA5;
          color: #fff;
        }
      }
      .confirm {
        border-color: transparent;
        background-color: #597AB9!important;
        color: #FFFFFF!important;
        &:hover {
          border: 1px solid #4B6AA5;
          background: #4B6AA5!important;
        }
      }
    }

  }
</style>

//&:hover {
//background-color: #7e9efd;
//color: #fff;
//}
