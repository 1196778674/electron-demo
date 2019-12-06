<template>
  <el-tooltip
    placement="bottom-start"
    :value="tipShow"
    :content="$t('message.full.guideTrade')"
    class="guide-tip"
    popper-class="guide-tip"
    :manual="true"
    :hide-after="0"
  >
    <div class="show-order-html" id="guide-order-span" :style="switchStyle" v-show="position.top">
      <!-- <span class="switch-core">{{ theme === 'balck'? $t('message.version3.black') : $t('message.version3.white')  }}</span> -->
    </div>
  </el-tooltip>
</template>


<script>
  import {systemMixin} from '@/mixins'

  export default {
    props: {
      show: Boolean,
      lockScroll: Boolean
    },
    mixins: [systemMixin],
    data() {
      return {
        position: {
          left: 0,
          top: 0
        },
        tipShow: false
      }
    },
    methods: {
      getStyle() {
        let dom = document.getElementById('show-order-span')
        let dom1 = document.getElementById('entrust-fixed')
        var node = document.getElementById("show-order-span").cloneNode(true);
        document.getElementById("guide-order-span").appendChild(node);
        console.log(this.$utils.getPosition(dom),dom.offsetTop)
        this.position.top = this.$utils.getPosition(dom)  - dom1.clientHeight
        this.position.left = this.$utils.getPosition(dom,'left')
      },
    },
    computed: {
      switchStyle() {
        return {
          top: this.position.top + 'px',
          left: this.position.left + 'px'
        }
      }
    },
    watch: {
    },
    mounted() {
      setTimeout(() => {
        this.getStyle()
        this.tipShow = true
      }, 60)
    }
  }
</script>

<style lang="less" scoped>
   @import (reference) '~@/assets/css/index';
   .black {
    .themeBlack();

    .show-order-html {
      position: absolute;
      padding: 5px;
      border: 2px dashed @middleFontColor;
      // border-radius: 5px;
      background-color: @navBgColor;
      transform: translate(-8px, -10px);
      /deep/.title-assets-text{
        margin-right: 20px !important;
        color: @darkFontColor;
      }
    }
  }

  .white {
	  .themeWhite();
	  .show-order-html {
		  position: absolute;
		  padding: 5px;
		  border: 2px dashed @middleFontColor;
      // border-radius: 5px;
      background-color: @navBgColor;
      transform: translate(-8px, -10px);
      /deep/.title-assets-text{
        margin-right: 20px !important;
        color: @darkFontColor;
      }
    }
  }
</style>

