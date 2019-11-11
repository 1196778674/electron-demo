<!--create by zcy-->
<template>
  <st-row :class="{'tags-template-tiny': 'black' === themeValue, 'tags-template-tiny-white': 'white' === themeValue,
  'activeBgColor':active &&  'black' === themeValue, 'activeBgColor-white':active &&  'white' === themeValue}" @click="change">
    <p :class="{'product': true, 'productActive': active}"
       @click="change"><span>{{contractInfo.tableName.toUpperCase()}}</span><span>{{contractInfo.unit.toUpperCase()}}</span></p>
  </st-row>
</template>

<script>
  export default {
    name: 'tags-template-tiny',
    props: {
      contractInfo: {
        type: Object
      }
    },
    watch: {
      '$route' () {
        this.nowProductId = this.$route.params.id;
      }
    },
    computed: {
      // 是否是选中
      active () {
        if (Number(this.$route.params.id) === Number(this.contractInfo.id)) {
          return true
        } else {
          return false
        }
      },
      themeValue () {
        return this.$store.state.dictionary.theme
      }
    },
    methods: {
      change () {
        this.$router.push(`/trade/${this.contractInfo.id}`)
      }
    }
  }
</script>

<style lang="less" scoped="">
  @import "../../assets/css/theme.less";
  .tags-template-tiny{
    .themeBlack();
    width: 100%;
    height: 44px;
    padding: 6px 0 0 4px;
    border-bottom: 1px solid @tagsBorderColor;
    .product {
      /*width: 32px;*/
      height: 28px;
      font-size: 12px;
      line-height: 14px;
      color: @tagsProductFontColor;
      word-break: break-all;
      word-wrap:break-word;
      cursor: pointer;
      span {
        display: block;
        font-size: 12px;
        line-height: 14px;
        color: @tagsProductFontColor;
        word-break: break-all;
        word-wrap:break-word;
        cursor: pointer;
      }
    }
    .productActive {
      color: @tagsProductActiveFontColor;
      span {
        color: @tagsProductActiveFontColor;
      }
    }
    &:hover {
      border-bottom: 1px solid @tagsActiveBorderColor;
    }
  }
  .activeBgColor {
    .themeBlack();
    background-color: @tagsActiveBgColor;
  }
  .tags-template-tiny-white{
    .themeWhite();
    width: 100%;
    height: 44px;
    padding: 6px 0 0 4px;
    border-bottom: 1px solid @tagsBorderColor;
    .product {
      /*width: 32px;*/
      height: 28px;
      font-size: 12px;
      line-height: 14px;
      color: @tagsProductFontColor;
      word-break: break-all;
      word-wrap:break-word;
      cursor: pointer;
      span {
        display: block;
        font-size: 12px;
        line-height: 14px;
        color: @tagsProductFontColor;
        word-break: break-all;
        word-wrap:break-word;
        cursor: pointer;
      }
    }
    .productActive {
      color: @tagsProductActiveFontColor;
      span {
        color: @tagsProductActiveFontColor;
      }
    }
    &:hover {
      border-bottom: 1px solid @tagsActiveBorderColor;
    }
  }
  .activeBgColor-white {
    .themeWhite();
    background-color: @tagsActiveBgColor;
  }
</style>
