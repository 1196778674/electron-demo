<template>
  <div class="prompt">
    {{message}}
  </div>
</template>

<script>
  export default {
    name: 'prompt',
    props: {
      message: {
        default: ''
      }
    },
    data() {
      return {}
    }
  }
</script>

<style lang="less" scoped="">
  @import "../../assets/css/theme";
  .prompt {
    z-index: 8;
    .themeBlack();
    position: absolute;
    padding: 5px 10px;
    bottom: 38px;
    right: 0;
    // min-height: 28px;
    // line-height: 28px;
    line-height: 20px;
    font-size: 12px;
    text-align: center;
    color: @promptFontColor;
    background-color: @promptBgColor;
    border-radius: 4px;
    box-shadow: 0 10px 10px 0 rgba(21,22,39,0.40);
    &:after {
      position: absolute;
      bottom: -5px;
      right: 10px;
      content: '';
      border-top: 5px solid @promptBgColor;
      border-left: 5px solid transparent;
      border-right: 5px solid transparent;
    }
  }
</style>