<template>
  <li class="st-option" @click="select(value, label)">{{ label }}</li>
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
      }
    },
    methods: {
      select (value, label) {
        this.$parent.select(value, label)
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
    border-bottom: solid 1px #ced0da;
    font-size: 14px;
    cursor: pointer;
    &:last-child {
      border-bottom: 0;
    }
    &:hover {
      color: #597ab9;
    }
  }
</style>
