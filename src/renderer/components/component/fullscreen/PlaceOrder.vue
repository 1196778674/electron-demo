<template>
  <div class="place-order">
    <v-tab :tab-data="tabData" v-model="tabValue" type="bread">
      <el-tooltip
        :content="$t('message.toolbar.jsq')"
        placement="top"
        slot="right"
      >
        <span
          class="hyicon-jisuanqi1 HyIconFont"
          @click="showCalculator"
        ></span>
      </el-tooltip>
      <span
        id="full-move-order"
        class="move-order"
        slot="right"
        @click="setOrderRight(!orderRight)"
      >
        <img :src="imgSrc" alt="" srcset="">
      </span>
    </v-tab>
    <div class="content-warp">
      <component
        :is="currentComponent"
        :tabValue="tabValue"
      ></component>
    </div>
  </div>
</template>

<script>
  import OrderOpen from './OrderOpen'
  import OrderClose from './OrderClose'
  import {dataMixin, systemMixin} from '@/mixins'

  export default {
  name: 'PlaceOrder',
  mixins: [systemMixin, dataMixin],
  components: {
    OrderOpen,
    OrderClose
  },
  data: () => ({
    // tab 当前选中值
    tabValue: 1,
    imgSrc: ''
  }),
  computed: {
    // imgSrc () {
    //   if (!process.client) {
    //     return ''
    //   }
    //   if (this.orderRight) {
    //     return this.imgSrc1
    //   } else {
    //     return this.imgSrc2
    //   }
    // },
    // 当前使用的动态组件
    currentComponent() {
      let componentMap = {
        1: OrderOpen,
        2: OrderClose,
        3: OrderOpen
      };
      return componentMap[this.tabValue]
    },
    // tab 数据
    tabData() {
      return [
        {
          name: this.$t('message.trade.openPosition'),
          label: 1
        },
        {
          name: this.$t('message.trade.closePosition'),
          label: 2
        },
        {
          name: this.$t('message.version3.entrust'),
          label: 3
        }
      ]
    }
  },
  watch: {
    orderRight:{ 
      handler(val) {
        if (process.client){
          setTimeout(() => {
            if (val) {
              this.imgSrc = require('../../assets/images/to_left.png')
            } else {
              this.imgSrc = require('../../assets/images/to_right.png')
            }
          },0)
        }
      },
      immediate: true,
    },
    tabValue() {
      // this.groupValue = 1
      // this.leverageValue = {name: '100X', value: 100}
      this.setOperatePrice('')
    },

  },
  methods: {
    // 显示计算器
    showCalculator() {
      this.setCalculatorIsShow(true)
    }
  }
}
</script>

<style lang="less" scoped>
 @import (reference) '~@/assets/css/index';
 /deep/.right-slot{
   display: flex;
   align-items: center;
   .move-order{
     margin-left: 20px;
     img{
       width: 14px;
     }
   }
 }
.black {
  .themeBlack();
  .place-order {
    // height: 292px;
    width: 418px;
    padding-bottom: 20px;
    background-color: @fulltradeBgColor;
  }
  .content-warp {
    padding: 0 16px;
    margin-top: 20px;
  }

}
.white {
  .themeWhite();
  .place-order {
    // height: 292px;
    width: 418px;
    background-color: @fulltradeBgColor;
  }
  .content-warp {
    padding: 0 16px;
    margin-top: 20px;
  }
  .btns {
    margin-top: 10px;
    .flex-box();
    align-items: center;
    justify-content: space-between;
    .leverage-select {
      width: auto;
    }
  }
}
</style>
