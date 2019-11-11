<template>
  <div :class="{'layer-select':'black' === themeValue, 'layer-select-white': 'white' === themeValue}"
       :style="{'left': left, 'right': right, 'top': top, 'bottom': bottom}">
    <div class="main" :style="{'width': width, 'background-color':bgColor}">
      <p :style="{'height': height, 'line-height': lineHeight}" v-for="item in list" :key="item.value" @click="selected($event, item)">
        {{ item[localeName] || item.name }}
      </p>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'layer-select',
    data() {
      return {
        levergeData: {
          contractId: this.$route.params.id,
          newLeverage: null,
          newPositionType: 0, // 全仓
        }
      }
    },
    props: ['list','left','right','top','bottom','width','bgColor','height', 'lineHeight'],
    computed: {
      // 仓位
      position() {
        return this.$store.state.market.position || {}
      },
      // 主题
      themeValue () {
        return this.$store.state.dictionary.theme
      },
      // 站点名称key
      localeName () {
          if (/(zh)|(cn)/.test(this.$i18n.locale)) return 'name'
          else return `name${this.$i18n.locale[0].toUpperCase()}${this.$i18n.locale.slice(1)}`
      }
    },
    methods: {
      selected (e, item) {
        // console.log(item)
        e.stopPropagation()
        this.$emit('selection', item)
      },
      toggle(console) {
        console.log(boolean)
      }
    },
    mounted () {
        // console.log(this.list);
    }
  }
</script>

<style lang="less" scoped="">
  @import "../../assets/css/theme";
  .layer-select {
    .themeBlack();
    position: absolute;
    top: 70px;
    z-index: 1000001;
    /*&::after {*/
    /*content: '';*/
    /*position: absolute;*/
    /*right: 25px;*/
    /*top: -8px;*/
    /*width: 0;*/
    /*height: 0;*/
    /*border: 4px solid transparent;*/
    /*border-bottom: 4px solid #313451;*/
    /*}*/
    .main {
      // padding: 4px 0;
      min-width: 80px;
      border-radius: 2px;
      padding: 6px 0;
      /*border: solid 1px #2b2c58;*/
      box-shadow: 0 10px 10px 0 rgba(21,22,39,0.40);
      background: #181E2F;
      p {
        height: 20px;
        line-height: 20px;
        text-align: left;
        padding:0 10px;
        font-size: 12px;
        color: @fontColor;
        cursor: pointer;
        /*border-bottom: 1px solid #313451;*/
        &:last-child {
          border-bottom: 0;
        }
        &:hover {
          cursor: pointer;
          background: #161B2A;
          color: @layerTransferBlueColor;
        }
      }
      .active {
        color: #7e9efd;
      }
      &:after {
        position: absolute;
        right: 10px;
        top: -5px;
        content: '';
        display: inline-block;
        // border-top: 4px solid red;@tradeSelectBgColor
        border-bottom: 5px solid @tradeSelectBgColor;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
      }
    }
  }
  .layer-select-white {
    .themeWhite();
    position: absolute;
    top: 70px;
    z-index: 1000001;
    box-shadow: 0 2px 8px 0 rgba(89,122,185,0.15);
    /*&::after {*/
    /*content: '';*/
    /*position: absolute;*/
    /*right: 25px;*/
    /*top: -8px;*/
    /*width: 0;*/
    /*height: 0;*/
    /*border: 4px solid transparent;*/
    /*border-bottom: 4px solid #313451;*/
    /*}*/
    .main {
      // padding: 4px 0;
      min-width: 80px;
      border-radius: 2px;
      border: solid 1px @boxBgColor;
      background-color: @boxBgColor;
      p {
        padding: 0 10px;
        height: 20px;
        line-height: 20px;
        text-align: left;
        font-size: 12px;
        color: @layerSelectFontColor;
        cursor: pointer;
        border-bottom: 1px solid @boxBgColor;
        &:last-child {
          border-bottom: 0;
        }
        &:hover {
          color: #7e9efd;
          background-color: @layerSelectHoverColor;
        }
      }
      .active {
        color: #7e9efd;
      }
      &:after {
        position: absolute;
        right: 10px;
        top: -5px;
        content: '';
        display: inline-block;
        // border-top: 4px solid red;@tradeSelectBgColor
        border-bottom: 5px solid @boxBgColor;
        border-left: 5px solid transparent;
        border-right: 5px solid transparent;
      }
    }
  }
</style>