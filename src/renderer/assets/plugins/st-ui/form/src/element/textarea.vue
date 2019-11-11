<template>
  <textarea :type="type"
         :maxlength="maxLength"
         :placeholder="placeholder"
         :value="currentValue"
         @input="handleInput"
         @blur="handleBlur"
         :class="stFormItem.message ? 'st-input error' : 'st-input'"
  >
  </textarea>
</template>

<script>
  export default {
    name: 'st-textarea',
    props: {
      type: {
        default: 'text'
      },
      maxLength: Number,
      placeholder: String,
      value: [String, Number],
      limits: {
        type: Array,
        default () {
          return []
        }
      }
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
        currentValue: this.value
      }
    },
    watch: {
      value (value) {
        this.setCurrentValue(value)
      }
    },
    methods: {
      handleInput (e) {
        for (let i = 0; i < this.limits.length; i++) {
          let value = this.limits[i](e.target.value)
          if (e.target.value !== value) {
            e.target.value = value
            break
          }
        }
        this.$emit('input', e.target.value)
        this.stFormItem.$emit('input')
      },
      handleBlur () {
        this.stFormItem.$emit('blur', this.currentValue)
      },
      // 切换时重新验证
      toggle (value) {
        this.stFormItem.$emit('input')
        this.stFormItem.$emit('blur', value)
      },
      setCurrentValue (value) {
        if (value === this.currentValue) return
        this.currentValue = value
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../../src/css/theme";
  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none !important;
    margin: 0;
  }
  .st-input {
    width: 350px;
    height: 40px;
    border: 1px solid @inputColor;
    .border-radius();
    padding: 0 10px;
    font-size: 14px;
    .placeholder({color: @placeholderColor});
    &.error {
      border-color: @inputErrorColor !important;
    }
  }
</style>
