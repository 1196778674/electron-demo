<template>
  <div class="st-select" :style="{width: width}" tabindex="0" @blur="toggle(false)">
    <st-row class="box" justify="center" align="center" @callback="toggle(!visible)">
      <p :style="{lineHeight: lineHeight,fontSize: fs}">{{ text || initText }}</p>
      <span :class="[ visible && 'active']"></span>
    </st-row>
    <ul :style="{width: width, top: top, left: left}" v-show="visible">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
  export default {
    name: 'st-select',
    props: {
      initText: {
        type: [String, Number],
        default: '请选择'
      },
      width: {
        type: String,
        default: '140px'
      },
      top: {
        type: String
      },
      left: {
        type: String
      },
      lineHeight: {
        type: String
      },
      fs: {
        type: String
      },
      value: [String, Number],
      showFlag: [String, Boolean],
      confirm: [String]
    },
    inject: {
      stForm: {
        default: null
      },
      stFormItem: {
        default: null
      }
    },
    data () {
      return {
        text: '',
        visible: false
      }
    },
    methods: {
      toggle (bool) {
        if (this.confirm) {
          if (this.showFlag) {
            this.visible = bool
          } else {
            this.visible = false
          }
        } else {
          this.visible = bool
        }
//        if (!bool) {
//          this.stFormItem.$emit('input')
//          this.$nextTick(() => {
//            this.stFormItem.$emit('select', this.value)
//          })
//        }
      },
      select (value, label, text) {
        this.text = text || label
        this.$emit('onSelect', value, label, text)
        this.toggle(false)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../st-ui/theme";
  @import '../../../assets/css/theme';
  .themeBlack();
  .st-select {
    position: relative;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    outline: none;
    height: 100%;
    &.trade {
      p {
        font-size: 14px !important;
        line-height: 36px !important;
        color: #6c85ae !important;
      }
      &.active {
        p {
          color: #6594e3 !important;
        }
      }
    }
    .box {
      width: 100%;
      height: 100%;
      cursor: pointer;
      p {
        margin-right: 10px;
        height: 100%;
        font-size: 20px;
        color: @fontColor;
      }
      span {
        display: block;
        width: 12px;
        height: 8px;
        background: url("../../../assets/images/icon-xj.png") no-repeat;
        .transition(transform ease-in-out .3s);
        &.active {
          .transform(rotate(180deg));
        }
      }
    }
    ul {
      position: absolute;
      margin-top: 3px;
      min-height: 80px;
      /*max-height: 200px;*/
      border:1px solid #2a3f67;
      background: #1a3463;
      /*overflow: scroll;*/
      /*overflow-x: hidden;*/
      z-index: 99;
    }
  }
</style>
