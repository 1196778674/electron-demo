<template>
  <div class="st-select" :style="{width: width}" tabindex="0" @blur="toggle(false)">
    <st-row class="box" justify="between" align="center" @callback="toggle(!visible)" :style="{paddingLeft: paddingLeft}">
      <p>{{ text || initText }}</p>
      <span :class="[ visible && 'active']"></span>
    </st-row>
    <ul :style="{width: width}" v-show="visible">
      <slot></slot>
    </ul>
  </div>
</template>
<script>
  import StRow from '../../../row/src/row'

  export default {
    name: 'st-select',
    components: {
      StRow
    },
    props: {
      initText: {
        type: [String, Number],
        default: '请选择'
      },
      width: {
        type: String,
        default: '350px'
      },
      paddingLeft: [String],
      value: [String, Number]
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
        this.visible = bool
        if (!bool) {
          this.stFormItem.$emit('input')
          this.$nextTick(() => {
            this.stFormItem.$emit('select', this.value)
          })
        }
      },
      select (value, label) {
        this.text = label
        this.$emit('onSelect', value, label)
        this.toggle(false)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../../src/css/theme";
  .st-select {
    position: relative;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
    -khtml-user-select: none;
    user-select: none;
    outline: none;
    .box {
      width: 100%;
      height: 40px;
      border: solid 1px #ced0da;
      .border-radius(@radius: 4px);
      padding: 0 10px;
      background: -moz-linear-gradient(top, #fefeff 0%, #f3f5f8 100%);
      background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#fefeff), color-stop(100%,#f3f5f8));
      background: -webkit-linear-gradient(top, #fefeff0%, #f3f5f8 100%);
      background: -o-linear-gradient(top, #fefeff 0%, #f3f5f8 100%);
      background: -ms-linear-gradient(top, #fefeff 0%, #f3f5f8 100%);
      background: linear-gradient(to bottom, #fefeff 0%, #f3f5f8 100%);
      cursor: pointer;
      p {
        font-size: 14px;
      }
      span {
        display: block;
        width: 8px;
        height: 5px;
        background: url("images/icon-tkxl.png");
        .transition(transform ease-in-out .3s);
        &.active {
          .transform(rotate(180deg));
        }
      }
    }
    ul {
      position: absolute;
      margin-top: 4px;
      max-height: 180px;
      border: solid 1px #ced0da;
      .border-radius(@radius: 4px);
      background-color: #f9fafc;
      overflow: scroll;
      z-index: 99;
      overflow-x: hidden;
    }
  }
</style>
