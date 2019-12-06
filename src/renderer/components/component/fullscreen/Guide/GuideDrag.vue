<template>
  <el-tooltip
    placement="top"
    :value="tipShow"
    :content="$t('message.full.guideDrag')"
    class="guide-tip"
    popper-class="guide-tip"
    :manual="true"
    :hide-after="0"
  >
    <div class="drag-guide" id="guide-drag" :style="switchStyle" v-show="position.top">
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
        let dom = document.getElementById('entrust-fixed')
        console.log(this.$utils.getPosition(dom),dom.offsetTop,'----------drag')
        this.position.top = this.$utils.getPosition(dom)  - dom.clientHeight + 15
        this.position.left = '50%'
      },
    },
    computed: {
      switchStyle() {
        return {
          top: this.position.top + 'px',
          left: '50%'
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

    .drag-guide {
      position: absolute;
      // padding: 5px;
      // border: 2px dashed @middleFontColor;
      // border-radius: 5px;
      // background-color: @navBgColor;
      // transform: translate(-8px, -10px);
    }
  }

  .white {
	  .themeWhite();
	  .drag-guide {
		  position: absolute;
		  // padding: 5px;
		  // border: 2px dashed @middleFontColor;
      // border-radius: 5px;
      // background-color: @navBgColor;
      // transform: translate(-8px, -10px);
    }
  }
</style>

