<template>
  <div class="guide" @click="hideGuide">
    <guide-select-currency v-if="show > 0" :lock-scroll="lockScroll"></guide-select-currency>
    <guide-bar v-if="show > 1" :lock-scroll="lockScroll"></guide-bar>
    <guide-trade v-if="show > 2" :lock-scroll="lockScroll"></guide-trade>
    <guide-order-right v-if="show > 3" :lock-scroll="lockScroll"></guide-order-right>
    <guide-drag v-if="show > 4" :lock-scroll="lockScroll"></guide-drag>
    <!-- <guide-switch v-if="show > 0" :lock-scroll="lockScroll"></guide-switch>
    <guide-tool-bar v-if="show > 1" :lock-scroll="lockScroll"></guide-tool-bar>
    <guide-contract-assets v-if="show > 2" :lock-scroll="lockScroll"></guide-contract-assets>
    <guide-list-nav v-if="show > 3" :lock-scroll="lockScroll"></guide-list-nav> -->
    <div class="start" v-if="show > 5">
      <p>{{ $t('message.version3.start') }}</p>
      <v-button @click.stop="hideGuide" size="medium">{{ $t('message.version3.know') }}</v-button>
    </div>
  </div>
</template>

<script>
  import {systemMixin} from '@/mixins'
  import GuideSelectCurrency from './GuideSelectCurrency'
  import GuideBar from './GuideTab'
  import GuideTrade from './GuideTrade'
  import GuideDrag from './GuideDrag'
  import GuideOrderRight from './GuideOrderRight'
  export default {
    components: {
      GuideSelectCurrency,
      GuideOrderRight,
      GuideBar,
      GuideTrade,
      GuideDrag
    },
    mixins: [systemMixin],
    data() {
      return {
        show: 0,
        lockScroll: true
      }
    },
    methods: {
      showGuide() {
        this.timer = setTimeout(() => {
          this.show++
          if (this.show < 6) {
            this.showGuide()
          } else {
            // document.body.classList.remove('lock-scroll')
            this.lockScroll = false
          }
        }, 1000)
      },
      hideGuide() {
        if (this.show > 5) {
          this.setGuideFull(false)
        }
      }
    },
    mounted() {
      // scrollTo(0,0)
      this.showGuide()
      document.body.classList.add('lock-scroll')
    },
    destroyed() {
      document.body.classList.remove('lock-scroll')
    }
  }
</script>

<style lang="less" scoped>
   @import (reference) '~@/assets/css/index';

  .guide {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 9999;
  }

  .black {
    .themeBlack();

    .start {
      position: absolute;
      bottom: 200px;
      width: 100%;
      text-align: center;

      p {
        margin-bottom: 30px;
        color: @darkFontColor;
      }
    }
  }

  .white {
    .themeWhite();
    .guide {
      background-color: rgba(0, 0, 0, 0.7);
    }

    .start {
      position: absolute;
      bottom: 200px;
      width: 100%;
      text-align: center;

      p {
        margin-bottom: 30px;
        color: #fff;
      }
    }
  }
</style>
