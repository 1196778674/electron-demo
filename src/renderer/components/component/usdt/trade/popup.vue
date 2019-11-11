<template>
  <st-row :class="{'popup': themeValue === 'black', 'popup-white': themeValue === 'white' ,'colorType':true, 'popup_position': showBg}"
          class="" justify="center" align="center">
    <div class="popup-box" :class="{'popup_box_position': !showBg}" :style="{'width': boxWidth}">
      <st-row class="header" justify="between" align="center" :style="{'background-color': bgColor,'border-bottom':bottomB}">
        <h3>{{ title }}</h3>
        <a @click="close"></a>
      </st-row>
      <slot></slot>
    </div>
  </st-row>
</template>

<script>
  export default {
    name: 'popup',
    props: {
      bgColor: {
        type: String
      },
      boxWidth: {
        type: String
      },
      bottomB: {
        type: String
      },
      colorType: {
        type: String
      },
      title: {
        type: String
      },
      callback: {
        type: Function,
        required: true
      },
      // 是否显示浮层背景
      showBg: {
        type: Boolean,
        default: true
      }
    },
    computed: {
      // 主题
      themeValue () {
        return this.$store.state.dictionary.theme
      }
    },
    methods: {
      close () {
        this.callback()
      }
    },
    mounted() {}
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../assets/css/theme";
  .popup_position {
    position: fixed;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1000;
  }
  .popup_box_position {
    position: fixed;
    top: 50%;
    left: 50%;
    margin-left: -160px;
    margin-top: -150px;
    z-index: 6;
  }
  .popup {
    .themeBlack();
    // position: fixed;
    // left: 0;
    // top: 0;
    // width: 100%;
    // height: 100%;
    // background: rgba(0, 0, 0, 0.5);
    // z-index: 1000;
    .popup-box {
      width: 420px;
      .border-radius();
      overflow: hidden;
      .header {
        height: 40px;
        padding: 0 13px 0 18px;
        background: @popupBgColor;;
        border-top-left-radius: 3px;
        border-top-right-radius: 3px;
        h3 {
          line-height: 40px;
          font-size: 14px;
          color: @popupFontColor;

        }
        a {
          display: block;
          /*width: 8px;*/
          /*height: 8px;*/
          /*// background: url("../../assets/images/icon-popupclose.png") no-repeat;*/
          /*background: url("../../assets/images/icon-popupclose1.svg") no-repeat;*/
          width: 22px;
          height: 22px;
          background-image: url("../../assets/images/wrong.png");
          background-size: 50% 50%;
          background-repeat: no-repeat;
          background-position: 5px 5px;
          transition: transform 0.2s ease-in-out;
          &:hover {
            transform: rotate(90deg);
          }
        }
      }
    }
  }
  .popup-white {
    .themeWhite();
    // position: fixed;
    // left: 0;
    // top: 0;
    // width: 100%;
    // height: 100%;
    // background: rgba(0, 0, 0, 0.5);
    // z-index: 1000;
    .popup-box {
      width: 420px;
      .border-radius();
      overflow: hidden;
      .header {
        height: 40px;
        padding: 0 13px 0 18px;
        background: @boxBgColor;
        // border-top-left-radius: 3px;
        // border-top-right-radius: 3px;
        // border-bottom: 1px solid #ECF0F7;
        box-shadow: 0 2px 10px 0 rgba(89,122,185,0.15);
        h3 {
          line-height: 40px;
          font-size: 14px;
          color: #24324C;
        }
        a {
          display: block;
          /*width: 8px;*/
          /*height: 8px;*/
          /*// background: url("../../assets/images/icon-popupclose.png") no-repeat;*/
          /*background: url("../../assets/images/icon-popupclose1.svg") no-repeat;*/
          width: 22px;
          height: 22px;
          background-image: url("../../assets/images/wrong1.jpg");
          background-size: 50% 50%;
          background-repeat: no-repeat;
          background-position: 5px 5px;
          transition: transform 0.2s ease-in-out;
          &:hover {
            transform: rotate(90deg);
          }
        }
      }
    }
  }
  .popup.hui {
    .popup-box {
      .header {
        background: #e9e9e9;
        h3 {
          color: #333;
        }
        a {
          background: url("../../assets/images/close-hui.jpg") no-repeat;
          background-size: 100%;
        }
      }
    }
  }
</style>
