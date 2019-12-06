<template>
  <div class="menu">
    <EasyScrollbar
      :barOption="option"
      :style="{ height: '100%' }"
      v-if="list.length"
    >
      <TradeMenuItem
        v-for="item in list.length ? list : contractList"
        :key="item.id"
        :contractInfo="item"
      ></TradeMenuItem>
    </EasyScrollbar>
  </div>
</template>

<script>
  import TradeMenuItem from './TradeMenuItem'
  import {dataMixin, systemMixin} from '@/mixins'
  import ToolsApi from '@/api/toolsApi'

  export default {
  name: 'TradeMenu',
  mixins: [systemMixin, dataMixin],
  components: {
    TradeMenuItem
  },
  data() {
    return {
      // 合约中文时列表
      zhNameList: [],
      // 合约需要的列表
      list: []
    }
  },
  computed: {
    // 配置
    option() {
      return {
        barColor: this.themeColor.lineColor,
        barWidth: 6,
        railColor: this.themeColor.navBgColor,
        railWidth: 6,
        barMarginRight: 0,
        barOpacityMin: 0.3,
        zIndex: '200',
        autohidemode: true,
        horizrailenabled: false
      }
    }
  },
  methods: {
    // 获取合约中文需要的描述列表
    async getZhNameList() {
      try {
        let re = await ToolsApi.getCurrencyList()
        if (re.data && re.data.currencyList) {
          this.list = this.handleList(re.data.currencyList)
        } else {
          this.list = this.contractList
        }
      } catch (error) {
        console.error(error)
      }
    },
    // 处理列表数据
    handleList(list) {
      return this.contractList.reduce((current, next) => {
        list.some(item => {
          if (next.currencyId === item.id) {
            current = [...current, Object.assign(next, {nameZH: item.nameZH})]
            return true
          }
        });
        return current
      }, [])
    }
  },
  mounted() {
    this.getZhNameList()
  }
}
</script>

<style lang="less" scoped>
	 @import (reference) '~@/assets/css/index';
.black {
  .themeBlack();
  .menu {
    width: 240px;
    height: 100%;
    background-color: @navBgColor;
    // margin-right: 2px;
    flex: 0 0 auto;
    //===Chrome滚动条===
    ::-webkit-scrollbar {
      width: 6px !important;
      height: 6px !important;
      bottom: 0 !important;
    }
    // 滚动条轨道
    ::-webkit-scrollbar-track {
      border-radius: 0;
      background: @navBgColor;
    }
    // 滚动条上的滚动滑块
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: @inputBorderColor;
    }
    // 当同时有垂直滚动条和水平滚动条时交汇的部分
    ::-webkit-scrollbar-corner {
      background-color: @navBgColor;
    }
    // 浏览器失去焦点
    ::-webkit-scrollbar-thumb:window-inactive {
      opacity: 0.3;
      background: @navBgColor;
    }
    /deep/.easy-scrollbar__wrap{
      height: 100%;
      .el-scrollbar__view{
        height: 100%;
      }
    }
  }
}
.white {
  .themeWhite();
  .menu {
    width: 240px;
    height: 100%;
    background-color: @navBgColor;
    // margin-right: 2px;
    flex: 0 0 auto;
    //===Chrome滚动条===
    ::-webkit-scrollbar {
      width: 6px !important;
      height: 6px !important;
      bottom: 0 !important;
    }
    // 滚动条轨道
    ::-webkit-scrollbar-track {
      border-radius: 0;
      background: @navBgColor;
    }
    // 滚动条上的滚动滑块
    ::-webkit-scrollbar-thumb {
      border-radius: 10px;
      background: @inputBorderColor;
    }
    // 当同时有垂直滚动条和水平滚动条时交汇的部分
    ::-webkit-scrollbar-corner {
      background-color: @navBgColor;
    }
    // 浏览器失去焦点
    ::-webkit-scrollbar-thumb:window-inactive {
      opacity: 0.3;
      background: @navBgColor;
    }
    /deep/.easy-scrollbar__wrap{
      height: 100%;
      .el-scrollbar__view{
        height: 100%;
      }
    }
  }
}

	// @media screen and (max-width: 1440px) {
	// 	.menu {
	// 		height: 730px !important;
	// 	}
	// }
  // @media screen and (max-height: 850px) {
  //   .menu {
  //     height: 690px !important;
  //   }
  // }
  // @media screen and (max-height: 750px) {
  //   .menu {
  //     height: 640px !important;
  //     overflow-y: auto;
  //   }
  // }
</style>

<style lang="less">
   @import (reference) '~@/assets/css/index';
  .black {
    .themeBlack();
    .menu {
      //===Chrome滚动条===
      &::-webkit-scrollbar {
        width: 6px !important;
        height: 6px !important;
        bottom: 0 !important;
      }
      // 滚动条轨道
      &::-webkit-scrollbar-track {
        border-radius: 0;
        background: @navBgColor;
      }
      // 滚动条上的滚动滑块
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: @inputBorderColor;
      }
      // 当同时有垂直滚动条和水平滚动条时交汇的部分
      &::-webkit-scrollbar-corner {
        background-color: @navBgColor;
      }
      // 浏览器失去焦点
      &::-webkit-scrollbar-thumb:window-inactive {
        opacity: 0.3;
        background: @navBgColor;
      }
    }
  }
  .white {
    .themeWhite();
    .menu {
      //===Chrome滚动条===
      &::-webkit-scrollbar {
        width: 6px !important;
        height: 6px !important;
        bottom: 0 !important;
      }
      // 滚动条轨道
      &::-webkit-scrollbar-track {
        border-radius: 0;
        background: @navBgColor;
      }
      // 滚动条上的滚动滑块
      &::-webkit-scrollbar-thumb {
        border-radius: 10px;
        background: @inputBorderColor;
      }
      // 当同时有垂直滚动条和水平滚动条时交汇的部分
      &::-webkit-scrollbar-corner {
        background-color: @navBgColor;
      }
      // 浏览器失去焦点
      &::-webkit-scrollbar-thumb:window-inactive {
        opacity: 0.3;
        background: @navBgColor;
      }
    }
  }
</style>
