<template>
  <el-tooltip
    placement="top-start"
    :value="tipShow"
    :content="$t('message.full.guideTab')"
    class="guide-tip"
    popper-class="guide-tip"
    :manual="true"
    :hide-after="0"
  >
    <div class="show-bar-but" id="guid-show-bar" :style="switchStyle" v-show="position.top">
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
        let dom = document.getElementById('full-show-bar-button')
        var node = document.getElementById("full-show-bar-button").cloneNode(true);
        document.getElementById("guid-show-bar").appendChild(node);
        console.log(node,'-------')
        this.position.top = this.$utils.getPosition(dom)
        this.position.left = this.$utils.getPosition(dom,'left')
        console.log(this.$utils.getPosition(dom),this.$utils.getPosition(dom,'left'))
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

    .show-bar-but {
      position: absolute;
      padding: 5px;
      border: 2px dashed @middleFontColor;
      // border-radius: 5px;
      transform: translate(-7px, -50%);
      /deep/.show-bar-button{
        position: relative !important;
        top: 0 !important;
        transform: translateY(0) !important;
      }
    }
  }

  .white {
	  .themeWhite();
	  .show-bar-but {
		  position: absolute;
		  padding: 5px;
		  border: 2px dashed @middleFontColor;
      // border-radius: 5px;
      transform: translate(-7px, -50%);
      /deep/.show-bar-button{
        position: relative !important;
        top: 0 !important;
        transform: translateY(0) !important;
      }
    }
  }
</style>

