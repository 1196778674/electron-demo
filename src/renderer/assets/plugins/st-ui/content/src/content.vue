<template>
  <div class="st-content" :style="{marginTop: top || 0}">
    <h2 v-if="title">{{ title }}</h2>
    <slot name="title"></slot>
    <div class="line"></div>
    <div :style="{paddingTop: paddingTop || 0, paddingBottom: paddingBottom || 0}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'st-content',
    props: {
      // 传入title，如不传则需写入具名slot="title"
      title: {
        type: String
      },
      // margin-top设置，很有可能会改，推荐直接定义组件样式
      top: {
        type: String
      },
      paddingTop: {
        type: String
      },
      paddingBottom: {
        type: String
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import "../../../src/css/theme";
  .st-content {
    padding: 0 40px;
    background: #fff;
    h2 {
      line-height: 70px;
      font-size: 16px;
    }
    .line {
      height: 2px;
      background: @borderColor;
    }
  }
</style>
