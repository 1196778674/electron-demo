<template>
  <el-tooltip
    placement="top-end"
    :value="tipShow"
    :content="$t('message.full.guideOrderRight')"
    class="guide-tip"
    popper-class="guide-tip"
    :manual="true"
    :hide-after="0"
  >
    <div class="move-ordet-html" id="guide-move-order" :style="switchStyle" v-show="position.top">
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
        let dom = document.getElementById('full-move-order')
        let dom1 = document.getElementById('entrust-fixed')
        var node = document.getElementById("full-move-order").cloneNode(true);
        document.getElementById("guide-move-order").appendChild(node);
        console.log(dom.offsetTop,'----------order-right')
        this.position.top = this.$utils.getPosition(dom) - dom1.clientHeight
        this.position.left = this.$utils.getPosition(dom,'left')
        console.log(this.position.top, this.position.left)
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

    .move-ordet-html {
      position: absolute;
      padding: 5px 10px;
      border: 2px dashed @middleFontColor;
      // border-radius: 5px;
      background-color: @navBgColor;
      transform: translate(-8px, -18px);
      /deep/.move-order{
        img{
          width: 14px;
        }
      }
    }
  }

  .white {
	  .themeWhite();
	  .move-ordet-html {
		  position: absolute;
		  padding: 5px 10px;
		  border: 2px dashed @middleFontColor;
      // border-radius: 5px;
      background-color: @navBgColor;
      transform: translate(-8px, -18px);
      /deep/.move-order{
        img{
          width: 14px;
        }
      }
    }
  }
</style>

