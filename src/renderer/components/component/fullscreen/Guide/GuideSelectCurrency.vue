<template>
  <el-tooltip
    placement="bottom-start"
    :value="tipShow"
    :content="$t('message.full.guideSelectCurrency')"
    class="guide-tip"
    popper-class="guide-tip"
    :manual="true"
    :hide-after="0"
  >
    <div class="select-currency" id="guid-select" :style="switchStyle" v-show="position.top">
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
        let dom = document.getElementById('full-select-currency')
        var node = document.getElementById("full-select-currency").lastChild.cloneNode(true);
        document.getElementById("guid-select").appendChild(node);
        console.log(node,'-------')
        this.position.top = this.$utils.getPosition(dom)
        this.position.left = this.$utils.getPosition(dom,'left')
        console.log(this.$utils.getPosition(dom),this.$utils.getPosition(dom,'left'))
      },
    },
    computed: {
      switchStyle() {
        return {
          top: this.position.top - 3 + 'px',
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

    .select-currency {
      position: absolute;
      padding: 5px;
      border: 2px dashed @middleFontColor;
      // border-radius: 5px;
      padding-top: 2px;
      background: @navBgColor;
      /deep/.select-default{
        .select-input{
          border: none !important;
          background-color: unset;
          font-size: 20px;
        }
        .hyicon-triangle_down{
          width: 14.5px;
          height: 8.4px;
          background: url('../../../assets/images/bi_down.png') no-repeat;
          background-size: 100%;
          right: 2px;
          &::before{
            content: "";
          }
        }
        .select-box{
          z-index: 999;
          background: @tipColor;
          .select-item{
            height: 30px;
            line-height: 30px;
          }
        }
      }
    }
  }

  .white {
	  .themeWhite();
	  .select-currency {
		  position: absolute;
		  padding: 5px;
		  border: 2px dashed @middleFontColor;
      // border-radius: 5px;
      padding-top: 2px;
      background: @navBgColor;
       /deep/.select-currency{
        .select-input{
          border: none !important;
          background-color: unset;
          font-size: 20px;
        }
        .hyicon-triangle_down{
          width: 14.5px;
          height: 8.4px;
          background: url('../../../assets/images/bi_down.png') no-repeat;
          background-size: 100%;
          right: 2px;
          &::before{
            content: "";
          }
        }
        .select-box{
          z-index: 999;
          background: @tipColor;
          .select-item{
            height: 30px;
            line-height: 30px;
          }
        }
      }
    }
  }
</style>

