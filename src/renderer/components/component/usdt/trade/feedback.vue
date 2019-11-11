<template>
  <div :class="{'feedback': 'black' === themeValue,'feedback-white': 'white' === themeValue}">
    <div class="title">
      <span class="text">用户反馈</span>
      <span class="icon-close" @click.stop="close"></span>
    </div>
    <st-row class="content" direction="column">
      <p class="tips">
        亲，您好，以下是您对58COIN的意见反馈
      </p>
      <textarea class="text" name="" id="" cols="30" rows="10" v-model="text"></textarea>
      <div class="button">
        <a @click="submit">提交</a>
      </div>
    </st-row>
  </div>
</template>

<script>
  export default {
    name: 'feedback',
    data() {
      return {
        text: null
      }
    },
    computed: {
      // 主题
      themeValue () {
        return this.$store.state.dictionary.theme
      }
    },
    methods: {
      close() {
        this.$emit('closeFeedback')
      },
      submit () {
        this.text = null
      }
    }
  }
</script>

<style lang="less" scoped="">
  @import "../../assets/css/theme";
  .feedback {
    z-index: 299;
    .themeBlack();
    position: absolute;
    bottom: 0;
    right: 36px;
    width: 338px;
    height: 264px;
    background-color: @feedbackBgColor;
    .title {
      position: relative;
      width: 338px;
      height: 36px;
      // background: red;
      background: @calculateTitleBgColor;
      .text {
        display: inline-block;
        margin-left: 20px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 14px;
        color: @layerAnnouncementFontColor;
        background-color: @layerAnnouncementTitleBgColor;
      }
      .icon-close {
        position: absolute;
        top: 10px;
        right: 12px;
        display: inline-block;
        width: 22px;
        height: 22px;
        background-image: url("../../assets/images/wrong.png");
        background-size: 50% 50%;
        background-repeat: no-repeat;
        background-position: 5px 5px;
        cursor: pointer;
        &:hover {
          transform: rotate(90deg);
        }
      }
    }
    .content {
      width: 100%;
      padding: 18px 20px 0 20px;
      .tips {
        color: @feedbackTipsColor;
        font-size: 12px;
      }
      .text {
        margin-top: 8px;
        width: 298px;
        height: 124px;
        padding: 10px;
        color: @feedbackTextFontColor;
        font-size: 12px;
        background-color: @feedbackTextBgColor;
        border: 1px solid transparent;
        border-radius: 2px;
      }
    }
    .button {
      margin-top: 16px;
      width: 100%;
      a {
        margin: 0 auto;
        display: block;
        width: 60px;
        height: 30px;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        border: 1px solid transparent;
        border-radius: 3px;
        background-color: @feedbackButtonBgColor;
      }
    }
  }
  .feedback-white {
    z-index: 299;
    box-shadow: 0 4px 10px 0 rgba(89,122,185,0.15);
    .themeWhite();
    position: absolute;
    bottom: 0;
    right: 36px;
    width: 338px;
    height: 264px;
    background-color: @boxBgColor;
    .title {
      position: relative;
      width: 338px;
      height: 36px;
      // background: red;
      background: @boxBgColor;
      box-shadow: 0 0 10px 0 rgba(89,122,185,0.10);
      .text {
        display: inline-block;
        margin-left: 20px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 14px;
        color: @feedbackTextFontColor;
      }
      .icon-close {
        position: absolute;
        top: 10px;
        right: 12px;
        display: inline-block;
        width: 22px;
        height: 22px;
        background-image: url("../../assets/images/wrong.png");
        background-size: 50% 50%;
        background-repeat: no-repeat;
        background-position: 5px 5px;
        cursor: pointer;
      }
    }
    .content {
      width: 100%;
      padding: 18px 20px 0 20px;
      .tips {
        color: @feedbackTipsColor;
        font-size: 12px;
      }
      .text {
        margin-top: 8px;
        width: 298px;
        height: 124px;
        padding: 10px;
        color: @feedbackTextFontColor;
        font-size: 12px;
        background-color: @boxBgColor;
        border: 1px solid #DEE6F3;
        border-radius: 3px;
      }
    }
    .button {
      margin-top: 16px;
      width: 100%;
      a {
        margin: 0 auto;
        display: block;
        width: 60px;
        height: 30px;
        font-size: 14px;
        line-height: 30px;
        text-align: center;
        color: #fff;
        border: 1px solid transparent;
        border-radius: 3px;
        background-color: @feedbackButtonBgColor;
      }
    }
  }
</style>