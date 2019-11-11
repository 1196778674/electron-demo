<template>
  <form class="st-form" @submit.prevent="submit" v-if="isForm">
    <slot></slot>
  </form>
  <div class="st-form" v-else>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'StForm',
    props: {
      value: Object,
      rules: Object,
      isForm: {
        type: Boolean,
        default: true
      }
    },
    provide () {
      return {
        stForm: this
      }
    },
    data () {
      return {
        message: null
      }
    },
    methods: {
      submit () {
        let validateArray = this.$slots.default.filter(item => {
          return item.componentOptions && item.componentOptions.tag === 'st-form-item'
        })
        for (let i = 0; i < validateArray.length; i++) {
          if (!validateArray[i].componentInstance.validate(this.value[validateArray[i].componentInstance.ruleName])) return false
        }
        this.message = null
        this.$emit('submit')
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../src/css/theme";

  .st-form {
    input[type=submit] {
      margin-top: 6px;
      width: 350px;
      height: 40px;
      font-size: 16px;
      color: #fff;
      background-color: @buttonColor;
      border: none;
      .border-radius();
      &:hover {
        background: @hoverColor;
        cursor: pointer;
      }
    }
  }
</style>
