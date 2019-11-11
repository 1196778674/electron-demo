<template>
  <div :style="{height: boxHeight}" :class="{'trade-list':'black' === themeValue, 'trade-list-white': 'white' === themeValue}">
    <st-row class="tags">
      <p :class="{'active': show == 'entrust'}" @click="change('entrust')">{{ $t('message.tradeList.latestDeal') }}</p>
      <p :class="{'active': show == 'history'}" @click="change('history')">{{ $t('message.tradeList.timeDeal') }}</p>
    </st-row>
    <entrust-list v-if="show == 'entrust'"></entrust-list>
    <history-list v-else></history-list>
  </div>
</template>

<script>
  import EntrustList from '@/components/trade/entrust-list'
  import HistoryList from '@/components/trade/history-list'
  export default {
    name: 'trade-list',
    components: {
      EntrustList,
      HistoryList,
    },
    data() {
      return {
        show: 'entrust',
        showHistory: false,
        boxHeight: ''
      }
    },
    computed: {
      themeValue () {
        return this.$store.state.dictionary.theme
      },
      screenWidth () {
        return this.$store.state.dictionary.screenWidth
      },
      screenHeight () {
        return this.$store.state.dictionary.screenHeight
      }
    },
    watch: {
      '$store.state.dictionary.screenWidth': {
        handler (val) {
          if ( this.screenHeight <= 760 || this.screenWidth <= 1366 ) {
            this.boxHeight = '374px'
          } else {
            this.boxHeight = '506px'
          }
        },
        immediate: true
      },
      '$store.state.dictionary.screenHeight': {
        handler (val) {
          if ( this.screenHeight <= 760 || this.screenWidth <= 1366 ) {
            this.boxHeight = '374px'
          } else {
            this.boxHeight = '506px'
          }
        },
        immediate: true
      }
    },
    methods: {
      change(index) {
        // this.show = !this.show
        this.show = index;
      },
    }
  }
</script>

<style lang="less" scoped="">
  @import "../../assets/css/theme";
  .trade-list {
    .themeBlack();
    min-width: 270px;
    height:506px;
    background: #121723;
    border-radius: 3px;
    .tags {
      width: 100%;
      height: 36px;
      background: @entrustListTagsBgColor;
      p {
        margin-left: 10px;
        height: 36px;
        line-height: 36px;
        font-size: 14px;
        color: #CBD7F0;
        cursor: pointer;
        &:last-child {
          margin-left: 20px;
        }
      }
      .active {
        color: @entrustListActiveColor;
        border-bottom: 2px solid @entrustListActiveColor;
      }
    }
  }
  .trade-list-white {
    .themeWhite();
    min-width: 270px;
    height:506px;
    background: @positionBgColor;
    border-radius: 3px;
    .tags {
      position: relative;
      z-index: 5;
      width: 100%;
      height: 36px;
      background: @positionTitleBgColor;
      box-shadow: 0 2px 10px 0 rgba(89, 122, 185, 0.1);
      margin-bottom: 2px;
      p {
        margin-left: 10px;
        height: 36px;
        line-height: 36px;
        font-size: 14px;
        color: #24324C;
        cursor: pointer;
        &:last-child {
          margin-left: 20px;
        }
      }
      .active {
        color: @entrustListActiveColor;
        border-bottom: 2px solid @entrustListActiveColor;
      }
    }
  }
  // @media screen and (max-width: 1366px) {
  //   .trade-list {
  //     height: 374px;
  //   }
  //   .trade-list-white {
  //     height: 374px;
  //   }
  // }
  // @media screen and ( max-height: 760px) {
  //   .trade-list {
  //     height: 374px;
  //   }
  //   .trade-list-white {
  //     height: 374px;
  //   }
  // }
</style>
