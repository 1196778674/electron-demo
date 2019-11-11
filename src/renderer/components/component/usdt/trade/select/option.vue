<template>
  <li class="st-option" @click="select(value, label, text)">{{ label }}</li>
</template>

<script>
  export default {
    name: 'st-option',
    props: {
      label: {
        type: [String, Number],
        required: true
      },
      value: {
        required: true
      },
      text: String
    },
    methods: {
      select (value, label, text) {
        this.$parent.select(value, label, text)
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  .st-option {
    width: 100%;
    height: 40px;
    padding: 0 10px;
    line-height: 40px;
    border-bottom: 1px solid #2a3f67;
    font-size: 14px;
    color: #899dbe;
    text-align: center;
    cursor: pointer;
    &:last-child {
      border-bottom: 0;
    }
    &:hover {
      background: #152c55;
    }
  }
</style>
