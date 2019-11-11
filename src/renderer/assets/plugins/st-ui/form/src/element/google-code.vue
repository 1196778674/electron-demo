<!--google验证码组件-->
<template>
  <div class="google-code" @click="divClick">
    <input
      :class="'real-input'"
      @focus="onFocus"
      @blur="onBlur"
      @keyup.enter="handleEnter"
      :maxlength="maxLength"
      :value="currentValue"
      @input="change"
      ref="input"
    />
    <div :class="stFormItem.message ? 'input-item error' : 'input-item'">
      <span v-for="item in maxLength" ref="pwd" :key="item.id"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'google-code',
    props: {
      value: [String, Number],
      maxLength: {
        type: Number,
        default: 6
      },
      judgment: Function,
      autofocus: {
        type: [Boolean, String, Number],
        default: false
      }
    },
    model: {
      event: 'changeGoogleCode'
    },
    inject: ['stForm', 'stFormItem'],
    data () {
      return {
        currentValue: this.value,
        focus: false
      }
    },
    watch: {
      value (value) {
        this.setCurrentValue(value)
      }
    },
    methods: {
      change (e) {
        this.$nextTick(() => {
          for (let i = 0; i < this.maxLength; i++) {
            if (e.target.value[i]) {
              if (Number(e.target.value[i])) {
                this.$refs['pwd'][i].innerText = e.target.value[i]
                this.cursorPosition(e.target.value)
              } else if (e.target.value[i] === '0') {
                this.$refs['pwd'][i].innerText = e.target.value[i]
              } else {
                e.target.value = e.target.value.slice(0, -1)
              }
            } else {
              this.cursorPosition(e.target.value)
              this.$refs['pwd'][i].innerText = ''
            }
          }
          this.$emit('changeGoogleCode', e.target.value)
        })
        this.stFormItem.$emit('input')
      },
      handleEnter () {
        this.$emit('enter')
      },
      divClick () {
        this.cursorPosition(this.currentValue)
      },
      cursorPosition (data, index) {
        let len = data.length
        for (let i = 0; i < 6; i++) {
          this.$refs['pwd'][i].className = ''
        }
        if (len === 0) {
          this.$refs['pwd'][0].className = 'active'
        } else if (len === 6) {
          this.$refs['pwd'][5].className = ''
        } else if (len > 0 && len < 6) {
          this.$refs['pwd'][len].className = 'active'
        }
      },
      onFocus (event) {
        this.cursorPosition(this.currentValue)
      },
      onBlur (event) {
        for (let i = 0; i < 6; i++) {
          if (!this.$refs['pwd'] || !this.$refs['pwd'].length) return
          this.$refs['pwd'][i].className = ''
        }
        // this.judgment()
        this.stFormItem.$emit('blur', this.currentValue)
      },
      setCurrentValue (value) {
        if (value === this.currentValue) return
        this.currentValue = value
        if (!value) {
          for (let i = 0; i < 6; i++) {
            this.$refs['pwd'][i].innerText = ''
          }
        }
      }
    },
    mounted () {
      if (this.autofocus) {
        this.$refs.input.focus()
        this.cursorPosition(this.value)
      }
    }
  }
</script>

<style lang="less" scoped>
  @import "../../../../src/css/theme";
  .google-code {
    position: relative;
    display: inline-block;
    width: 350px;
    height: 40px;
    vertical-align: middle;
  }
  .real-input {
    position: absolute;
    top:0;
    left: 0;
    z-index: 1;
    padding-left: 0;
    width: 100%;
    height: 100%;
    filter: alpha(opacity=0);
    -moz-opacity:0;
    opacity:0;
  }
  .input-item {
    position: absolute;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;
    border: 1px solid #ced0da;
    overflow: hidden;
    line-height: 40px;
    border-radius: 4px;
    z-index: 0;
    &.error {
      border-color: @inputErrorColor !important;
    }
    span {
      display: inline-block;
      padding-left: 0;
      width: 58px;
      height: 24px !important;
      line-height: 24px;
      text-align: center;
      // background: #fff;
      border: none !important;
      border-right: 1px solid #ced0da !important;
      &:last-child {
        border-right: none !important;
      }
    }
  }
 /* .active {
    background-image: url("https://t.alipayobjects.com/images/rmsweb/T1nYJhXalXXXXXXXXX.gif")!important;
    background-repeat: no-repeat!important;
    background-position: center center!important;
  } */
   @keyframes blink {
    0%, 100% {
      background-color: white;
      color: white;
    }
    50% {
      background-color: black; /* not #aaa because it's seem there is Google Chrome bug */
      color: black;
    }
  }
   .active {
     position:relative;
   }
  .active::after {
    content: '';
    position: absolute;
    top: 2px;
    width: 1px;
    height: 20px;
    background: black;
    animation: blink 1s infinite steps(1, start);
  }
</style>
