<template>
  <div class="box" :style="{top: `${top}px`,left: `${left}px`, width: `${width}px`}">
    <div @click="selected(item, index)" class="item" :class="{active: activeNum === index}" v-for="(item, index) in list" :key="index">{{ item.name }}</div>
  </div>
</template>

<script>
  export default {
    name: 'left-select',
    data() {
      return {
        activeNum: 0
      }
    },
    props: ['list','left','top','width'],
    computed: {
      
    },
    methods: {
      selected (item, index) {
        this.activeNum = index
        this.$emit('selection', item)
      }
    }
  }
</script>

<style lang="less" scoped="">
  @import url("../../assets/css/theme");
  .themeBlack();
  .box {
    position: absolute;
    background: @tradeSelectBgColor;
    color: @tradeOperateFontColor;
    font-size: 12px;
    border-radius: 3px;
    z-index: 99;
  }
  .active {
    color: #CBD7F0!important;
  }
  .item {
    height: 26px;
    line-height: 26px;
    text-align: center;
    margin: 3px 0;
    color: #7889A9;
    cursor: pointer;
  }
  .item:hover {
    background: #161B2A;
    color: #7E9EFD;
  }
</style>