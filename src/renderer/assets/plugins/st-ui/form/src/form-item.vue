<template>
  <div :class="message ? 'st-form-item error' : 'st-form-item'" :style="{ minHeight: minHeight }">
    <p class="label" :style="{'padding-right': labelSpace, lineHeight: labelLineHeight}">{{ label }}</p>
    <slot></slot>
    <p class="tips" v-show="tips && !message" :style="{paddingLeft: paddingLeft}">{{ tips }}</p>
    <p :class="message ? 'message error' : 'message'" v-show="message">{{ message }}</p>
  </div>
</template>

<script>
  export default {
    name: 'StFormItem',
    props: {
      limitName: String,
      ruleName: String,
      label: String,
      labelLineHeight: String,
      minHeight: {
        type: String
        // default: '70px'
      },
      labelSpace: {
        type: String,
        default: '16px'
      },
      tips: String,
      paddingLeft: String
    },
    provide () {
      return {
        stFormItem: this
      }
    },
    inject: {
      stForm: {
        default: null
      }
    },
    data () {
      return {
        required: '',
        message: ''
      }
    },
    watch: {
      'stForm.message' (obj) {
        if (!obj) return
        if (obj.name !== this.ruleName) return
        this.message = obj.message
      }
    },
    methods: {
      validate (value) {
        let validateArray = this.stForm.rules ? this.stForm.rules[this.ruleName] : null
        if (validateArray && validateArray.length) {
          for (let i = 0; i < validateArray.length; i++) {
            if (validateArray[i].required && !value) {
              this.message = validateArray[i].message
              return false
            } else if (validateArray[i].validator) {
              if (!validateArray[i].validator(value)) {
                this.message = validateArray[i].message
                return false
              }
            }
          }
        }
        return true
      },
      clearMessage () {
        this.message = ''
      }
    },
    mounted () {
      if (this.ruleName) {
        if (this.stForm.rules && this.stForm.rules[this.ruleName] && this.stForm.rules[this.ruleName].length) {
          let validateArray = this.stForm.rules[this.ruleName]
          let required = validateArray.filter(item => {
            return item.required
          })
          this.required = Boolean(required.length)
          this.$on('blur', this.validate)
          this.$on('check', this.validate)
          this.$on('input', this.clearMessage)
          this.$on('select', this.validate)
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../src/css/theme";
  .st-form-item {
    position: relative;
    /*margin-bottom: 30px;*/
    min-height: 70px ;
    padding-bottom: 0.1px;
    .label {
      position: absolute;
      top: 0;
      left: 0;
      line-height: 40px;
      font-size: 14px;
      .transform(translate(-100%));
    }
    .tips {
      line-height: 28px;
      color: #999999;
      font-size: 12px;
    }
    .message {
      /*position: absolute;*/
      /*bottom: -30px;*/
      /*left: 0;*/
      line-height: 30px;
      font-size: 12px;
      color: @inputErrorColor;
      &.error {
        margin-bottom: 10px;
      }
    }
    * {
      vertical-align: middle;
    }
    &.error {
      min-height: 80px ;
    }
  }
</style>
