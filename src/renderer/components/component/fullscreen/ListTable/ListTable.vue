<template>
  <div class="list-table" ref="table">
    <div class="table-nav" id="table-nav">
      <v-tab
        :tab-data="tabData"
        v-model="tabValue"
        type="bread"
        @input="hangeTabValue"
      >
        <div class="nav-button" slot="right">
          <div
            class="positions"
            v-if="tabValue === 1 && listLength && userInfo"
            @click="closeAll"
          >
            {{ $t('message.transactionList.closeAll') }}
            <el-popover
              placement="top"
              popper-class="w188 index"
              trigger="hover"
              :content="$t('message.transactionList.prompt')"
            >
              <i
                class="hyicon-yijianpingcangtishi HyIconFont"
                slot="reference"
              ></i>
            </el-popover>
          </div>
          <div
            class="current"
            v-if="tabValue === 2 && listLength && userInfo"
            @click="undoAll"
          >
            {{ $t('message.transactionList.batchCancel') }}
          </div>
          <nuxt-link
            class="history"
            v-if="tabValue === 4 || (tabValue === 5 && userInfo)"
            :to="`/history/${$route.params.id}`"
          >{{ $t('message.header.tradeHistory') }}
          </nuxt-link
          >
        </div>
      </v-tab>
    </div>
    <div class="table-content">
      <component
        :is="currentComponent"
        @changeLength="value => (listLength = value)"
        @dataEnd="value => isDataEnd = value"
      ></component>
    </div>
  </div>
</template>

<script>
import PositionsList from './PositionsList'
import CurrentList from './CurrentList'
import EntrustList from './EntrustList'
import DoneList from './DoneList'
import CancelList from './CancelList'
import LossList from './LossList'
import {dataMixin, systemMixin, userMixin} from '@/mixins'
import SwapsApi from '@/api/swapsApi'
import apiConfig from '@/config/api.config'
import { ALERT_BUYSELL_ALL, ALERT_PROMPT_ALLUNDO } from '@/data/noTip'

export default {
  mixins: [systemMixin, userMixin, dataMixin],
  components: {
    PositionsList,
    CurrentList,
    EntrustList,
    DoneList,
    CancelList,
    LossList
  },
  data() {
    return {
      // 表单值
      tabValue: 1,
      // 表单数据个数
      listLength: 0,
      // tab 距离顶部高度
      tabOffsetTop: 0,
      // 数据是否请求完成
      isDataEnd: false,
      // 是否回到列表位置
      isGoTablePosition: true
    }
  },
  computed: {
    // 表单数据
    tabData() {
      return [
        {
          label: 1,
          name: this.$t('message.transactionList.positions')
        },
        {
          label: 2,
          name: this.$t('message.transactionList.currentEntrustment'),
          badgeValue: this.currentList.length
        },
        {
          label: 3,
          name: this.$t('message.version3.entrust')
        },
        {
          label: 4,
          name: this.$t('message.transactionList.excuted')
        },
        {
          label: 5,
          name: this.$t('message.transactionList.records')
        },
        {
          label: 6,
          name: this.$t('message.transactionList.profitDeficit')
        }
      ]
    },
    // 动态组件映射
    currentComponent() {
      let componentMap = {
        1: PositionsList,
        2: CurrentList,
        3: EntrustList,
        4: DoneList,
        5: CancelList,
        6: LossList
      }
      return componentMap[this.tabValue]
    }
  },
  methods: {
    // 切换菜单
    hangeTabValue() {
      if (!this.userInfo) {
        location.href = `${apiConfig.mainDomain}manage/login?position=usdt`
      }
    },
    // 一件全平
    async closeAll() {
      try {
        if (!this.promptBoxShowInfo[ALERT_BUYSELL_ALL]) {
          await this.$alert({
            type: 'buysell',
            content: this.$t('message.version3.closeAll'),
            contentType: 0,
            promptHTMLString: true,
            prompt: this.$t('message.version3.closeAllInfo', {
              color: this.themeColor.tradeRed
            })
          })
        }
        this.closeAllApi()
      } catch (error) {
        console.error(error)
      }
    },
    // 一件全平接口
    async closeAllApi() {
      try {
        let re = await SwapsApi.closeAll()
        this.$notify({
          title: this.$dictionary.error(re.code),
          type: 'success'
        })
      } catch (error) {
        this.$notify({
          title: this.$dictionary.error(error.data.code),
          type: 'warning'
        })
      }
    },
    // 批量撤单
    async undoAll() {
      try {
        if (!this.promptBoxShowInfo[ALERT_PROMPT_ALLUNDO]) {
          await this.$alert({
            type: 'prompt',
            content: this.$t('message.version3.undoAll', {
              color: this.themeColor.tradeRed
            }),
            contentType: 0,
            prompt: `*${this.$t('message.version3.undoTitle')}`,
            promptHTMLString: true
          })
        }
        this.undoAllApi()
      } catch (error) {
        console.error(error)
      }
    },
    // 批量撤单接口
    async undoAllApi() {
      try {
        let re = await SwapsApi.cancelOrderAll()
        this.$notify({
          title: this.$t('message.errorCode.' + re.code),
          type: 'success'
        })
      } catch (error) {
        console.log(error)
        this.$notify({
          title: this.$t('message.errorCode.' + error.data.code),
          type: 'warning'
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
   @import (reference) '~@/assets/css/index';

  .black {
    .themeBlack();

    .list-table {
      margin-top: 2px;
    }

    .table-nav {
      background-color: @navBgColor;

      /deep/ .tab-bread {
        border: none;
      }
    }

    .table-content {
      background-color: @listBgColor;
    }

    .positions {
      color: @iconColor;

      i {
        font-size: 14px;
        color: @middleFontColor;
      }
      &:hover {
        color: @iconHoverColor;
      }
    }

    .current {
      color: @iconColor;
      font-size: 14px;

      &:hover {
        color: @iconHoverColor;
      }
    }

    .history {
      color: @iconColor;

      &:hover {
        color: @iconHoverColor;
      }
    }
  }

  .white {
    .themeWhite();

    .list-table {
      margin-top: 2px;
    }

    .table-nav {
      background-color: @navBgColor;
      box-shadow: 0 2px 10px 0 rgba(89, 122, 185, 0.1);
      position: relative;
      z-index: 99;

      /deep/ .tab-bread {
        border: none;
      }
    }

    .table-content {
      background-color: @listBgColor;
    }

    .positions {
      color: @iconColor;

      i {
        font-size: 14px;
        color: #BFCAE0;
      }

      &:hover {
        color: @iconHoverColor;
      }
    }

    .current {
      color: @iconColor;

      &:hover {
        color: @iconHoverColor;
      }
    }

    .history {
      color: @iconColor;

      &:hover {
        color: @iconHoverColor;
      }
    }
  }
</style>
