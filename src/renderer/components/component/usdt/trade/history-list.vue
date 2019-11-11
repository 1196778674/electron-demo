<template>
  <div :class="{'history-list':'black' === themeValue,
   'history-list-white': 'white' === themeValue, height: boxHeight}">
    <div class="list">
      <table style="margin-right: 20px;">
        <thead>
          <tr>
            <th style="min-width: 40px; padding-left: 16px; text-align: left"><span>{{$t('message.historyList.date')}}</span></th>
            <th><span class="type1">{{$t('message.historyList.price')}}</span></th>
            <th style="padding-right: 36px"><span>{{$t('message.historyList.size')}}</span></th>
          </tr>
        </thead>
      </table>
      <div class="bg"></div>
      <EasyScrollbar :barOption="option" :style="{height: barHeight}" v-if="list.length">
        <div class="wrapper" style="height: 430px; padding-right: 20px;">
          <table>
            <tbody>
              <tr v-for="(item, index) in list" v-if="index < 100" :key="item.id">
                <td style="padding-left: 16px; color: #cbd7f0;; text-align: left"><span :style="{'color': themeValue ==='white' ?'#24324c':'#cbd7f0'}">{{Number(item.createdDate)|timeFormat('HMS')}}</span></td>
                <td><span class="type1" :style="{color: item.side === 1 ? '#0AB480' : '#E12961'}">{{item.price ?item.price: '-' | splitFormat(figure.indexPriceFloat)}}</span></td>
                <td style="padding-right: 16px">
                  <span :style="{color: item.side === 1 ? '#0AB480' : '#E12961'}" v-html="item.size ? item.size.toFixed(0): '-' "></span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </EasyScrollbar>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'history-list',
    data () {
      return {
        list: [],
        open: true,
        option: {
          barColor: '#3b3b63',
          barWidth: 6,
          railColor: '#1d1f35',
          railWidth: 6,
          barMarginRight: 0,
          barOpacityMin: 0.3,
          zIndex: '200',
          autohidemode: true,
          horizrailenabled: false
        },
        boxHeight: '',
        barHeight: ''
      }
    },
    computed: {
      figure () {
        let tmp = this.$store.state.market.contract.filter(item => {
          return Number(item.id) === Number(this.$route.params.id)
        })
        return tmp[0] && tmp[0].contractParam
      },
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
      '$route': {
        handler () {
          this.init()
        },
        immediate: true
      },
      '$store.state.market.historyList': {
        handler: function(val, oldVal){
          this.list = val
        },
        deep: true,
        immediate: true
      },
      themeValue () {
        if (this.themeValue === 'white') {
          this.option.railColor = '#fff'
          this.option.barColor = '#DEE6F3'
        } else {
          this.option.railColor = '#1d1f35'
          this.option.barColor = '#3b3b63'
        }
      },
      '$store.state.dictionary.screenWidth': {
        handler (val) {
          if ( this.screenHeight <= 760 || this.screenWidth <= 1366 ) {
            this.boxHeight = '330px'
            this.barHeight = '300px'
          } else {
            this.boxHeight = '462px'
              this.barHeight = '432px'
          }
        },
        immediate: true
      },
      '$store.state.dictionary.screenHeight': {
        handler (val) {
          if ( this.screenHeight <= 760 || this.screenWidth <= 1366 ) {
            this.boxHeight = '330px'
            this.barHeight = '300px'
          } else {
            this.boxHeight = '462px'
              this.barHeight = '432px'
          }
        },
        immediate: true
      },
    },
    created () {
      if (this.themeValue === 'white') {
        this.option.railColor = '#fff'
        this.option.barColor = '#DEE6F3'
      } else {
        this.option.railColor = '#1d1f35'
        this.option.barColor = '#3b3b63'
      }
    },
    methods: {
      init () {
        this.list = []
        this.open = true
      },
      toggle () {
        this.open = !this.open
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../../assets/css/theme';
  .history-list {
    .themeBlack();
    margin: 0;
    background: @boxBgColor;
    overflow-y: hidden;
    .transition(height ease-in-out .15s);
    .scroll-bar();
    &.show {
      height: 470px;
    }
    &.hide {
      height: 40px;
    }
    .title {
      height: 40px;
      background-color: @titleBgColor;
      .arrow {
        width: 36px;
        height: 40px;
        cursor: pointer;
        a {
          display: block;
          width: 10px;
          height: 6px;
          background: url(../../assets/images/jiantou.png);
          .transition(transform ease-in-out .15s);
          &.rotate {
            .transform(rotate(-90deg));
          }
        }
      }
      h3 {
        font-size: 14px;
        color: @fontColor;
      }
    }
    .list {
      position: relative;
      padding-top: 6px;
      background: #121723;
      table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        thead {
          tr {
            height: 32px;
            th {
              font-size: 12px;
              text-align: right;
              font-weight: 420;
            }
          }
        }
        tbody {
          tr {
            height: 22px;
            td {
              font-size: 12px;
              text-align: right;
              font-weight: 500;
            }
          }
        }
        span {
          display: inline-block;
          // width: 50px;
          width: 75px;
          color: #5D6588;
          &.type1 {
            // width: 100px;
          }
        }
      }
      .bg {
        position: absolute;
        right: 0;
        top: 62px;
        width: 20px;
        height: 380px;
        background-color: @boxBgColor;
        z-index: 99;
      }
    }
  }
  .history-list-white {
    .themeWhite();
    margin: 0;
    background: @boxBgColor;
    overflow-y: hidden;
    .transition(height ease-in-out .15s);
    .scroll-bar();
    &.show {
      height: 470px;
    }
    &.hide {
      height: 40px;
    }
    .title {
      height: 40px;
      background-color: @titleBgColor;
      .arrow {
        width: 36px;
        height: 40px;
        cursor: pointer;
        a {
          display: block;
          width: 10px;
          height: 6px;
          background: url(../../assets/images/jiantou.png);
          .transition(transform ease-in-out .15s);
          &.rotate {
            .transform(rotate(-90deg));
          }
        }
      }
      h3 {
        font-size: 14px;
        color: @fontColor;
      }
    }
    .list {
      position: relative;
      padding-top: 6px;
      table {
        width: 100%;
        border-collapse: collapse;
        border-spacing: 0;
        thead {
          tr {
            height: 32px;
            th {
              font-size: 12px;
              text-align: right;
              font-weight: 420;
            }
          }
        }
        tbody {
          tr {
            height: 22px;
            td {
              font-size: 12px;
              text-align: right;
              font-weight: 500;
            }
          }
        }
        span {
          display: inline-block;
          width: 50px;
          color: #5D6588;
          &.type1 {
            // width: 100px;
          }
        }
      }
      .bg {
        position: absolute;
        right: 0;
        top: 62px;
        width: 20px;
        height: 380px;
        background-color: @boxBgColor;
        z-index: 199;
      }
    }
  }
  // @media screen and (max-width: 1366px) {
  //   .history-list {
  //     height: 330px !important;
  //   }
  //   .history-list-white {
  //     height: 330px !important;
  //   }
  //   .wrapper {
  //     height: 300px !important;
  //   }
  //   .bg {
  //     height: 270px !important;
  //   }
  //   .easy-scrollbar {
  //     height: 300px !important;
  //   }
  // }
</style>
