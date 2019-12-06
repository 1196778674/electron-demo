<template>
  <div class="fixed" id="entrust-fixed" ex-show-drag="ex-show-drag" :style="{width: width ? width :''}" v-ex-drag="{header:'.drag-header'}">
    <contract-assets class="drag-header" ></contract-assets>
    <div class="content-move-order"  ex-none-drag>
      <place-order v-if='!orderRightOrLeft'></place-order>
      <div class="list-entrust-order" :class="addClass">
        <list-table></list-table>
      </div>
      <place-order v-if='orderRightOrLeft'></place-order>
    </div>
  </div>
</template>
<script>
import ContractAssets from './ContractAssets'
import PlaceOrder from './PlaceOrder'
import ListTable from './ListTable/ListTable'
import {systemMixin} from '@/mixins'

export default {
  mixins: [systemMixin],
  data () {
    return {
      width: null,
      orderRightOrLeft: true,
      addClass: ''
    }
  },
  components: {
    PlaceOrder,
    ContractAssets,
    ListTable
  },
  watch: {
    orderRight:{ 
      handler(val) {
        if (process.client){
          setTimeout(()=>{
            if (val) {
              this.addClass = 'list-entrust-order-mr'
              this.orderRightOrLeft = val
            } else {
              this.addClass = ''
              this.orderRightOrLeft = val
            }
          })
        }
      },
      immediate: true,
    },
    fullIsToolBarShow :{
      handler(v) {
        console.log(v)
        if (!v) {
          this.width = null
        } else {
          this.width = 'calc(100% - 40px)'
        }
      },
      immediate: true
    }
  }
}
</script>
<style lang="less" scoped>
@import (reference) '../../assets/css/index';

.fixed{
  width: 100%;
  // height: 450px;
  overflow: hidden;
  position: absolute;
  left: 0;
  top: 100%;
  transform: translateY(-100%);
  z-index: 1000;
  background:  #0D121D;
  box-shadow: 0 -4px 14px 2px rgba(9,13,23,0.76);
  .content-move-order{
    display: flex;
    .list-entrust-order{
      &.list-entrust-order-mr{
        margin-left: 0;
        margin-right: 4px;
      }
      margin-left: 4px;
      width: calc(~'100% - 422px');
      /deep/.list-table{
        margin-top: 0;
      }
    }
  }
}
.black{
  .themeBlack();
  .fixed{
    background: @bgColor;
    box-shadow: 0 2px 10px 0 rgba(9, 13, 23, 0.6);
  }
}
.white{
  .themeWhite();
  .fixed{
    background: @bgColor;
    box-shadow: 0 2px 10px 0 rgba(9, 13, 23, 0.6);
  }
}
</style>