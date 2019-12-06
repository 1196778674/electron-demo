<template>
  <div class="cancel-list">
    <div class="table-wrapper" style="width: 100%;">
      <el-table
        :data="list"
        border
        class="el-table-content"
        empty-text=" "
        height="350"
      >
        <!-- 币种 -->
        <el-table-column
          :render-header="header"
          prop="contractName"
          width="160"
          :label="$t('message.transactionList.currency')"
          label-class-name="first-filter"
        >
          <template v-if="scope.row.contractName" slot-scope="scope">
            <span :class="[scope.row.side === 1 ? 'buyColor' : 'sellColor']">
              {{
                scope.row.side === 1
                  ? $t('message.transactionList.more')
                  : $t('message.transactionList.less')
              }}
            </span>
            <span style="font-weight: bold;">{{ scope.row.contractName }}</span>
          </template>
        </el-table-column>
        <!-- 类型 -->
        <el-table-column
          align="right"
          :label="$t('message.transactionList.type')"
        >
          <template v-if="scope.row.contractName" slot-scope="scope">
            <span>{{ priceType[scope.row.priceType] }}</span>
          </template>
        </el-table-column>
        <!-- 开平 -->
        <el-table-column
          sortable
          prop="close"
          min-width="100"
          align="right"
          :label="$t('message.transactionList.openLeve')"
        >
          <template v-if="scope.row.contractName" slot-scope="scope">
            <span>{{ openLabel[scope.row.close] }}</span>
          </template>
        </el-table-column>
        <!-- 委托价格 -->
        <el-table-column
          align="right"
          :label="$t('message.transactionList.commissionPrice')"
        >
          <template v-if="scope.row.contractName" slot-scope="scope">
            <span>{{ scope.row.price | splitFormat(4) }}</span>
          </template>
        </el-table-column>
        <!-- 委托量 -->
        <el-table-column
          align="right"
          :label="$t('message.transactionList.commissionAmount')"
        >
          <template v-if="scope.row.contractName" slot-scope="scope">
            <span>{{ scope.row.size }}</span>
          </template>
        </el-table-column>
        <!-- 剩余量 -->
        <el-table-column
          min-width="100"
          align="right"
          :label="$t('message.transactionList.reamaining')"
        >
          <template v-if="scope.row.contractName" slot-scope="scope">
            <span>{{ utils.sub(scope.row.size, scope.row.executedSize) }}</span>
          </template>
        </el-table-column>
        <!-- 状态 -->
        <el-table-column
          min-width="120"
          align="center"
          :label="$t('message.transactionList.status')"
        >
          <template v-if="scope.row.contractName" slot-scope="scope">
            <span>{{ statusFilter[scope.row.status] }}</span>
          </template>
        </el-table-column>
        <!-- 时间 -->
        <el-table-column
          min-width="128"
          align="center"
          :label="$t('message.transactionList.time')"
        >
          <template v-if="scope.row.contractName" slot-scope="scope">
            <span>{{ scope.row.createdDate | timeFormat() }}</span>
          </template>
        </el-table-column>
      </el-table>
      <no-data v-if="!saveList.length"></no-data>
    </div>
  </div>
</template>

<script>
  import SwapsApi from '@/api/swapsApi'
  import NoData from './NoData'
  import Utils from '@/utils/utils'
  import {dataMixin, systemMixin, userMixin} from '@/mixins'

  export default {
    name: 'CancelList',
    mixins: [systemMixin, dataMixin, userMixin],
    components: {
      NoData
    },
    data() {
      return {
        // 筛选选中数组,只用来存 groupcheckbox 的值
        checkList: [],
        // 筛选类型选中数组,只用来存 groupcheckbox 的值
        checkTypeList: [],
        // 筛选确定后的数组,实际用来筛选的数组
        checkConfirmList: [],
        checkConfirmTypeList: [],
        // 是否在筛选
        isCheck: false,
        // 工具函数
        utils: Utils,
        // 表单数据
        list: [],
        // 存一个原数组,供筛选使用
        saveList: [],
        // 定时器
        timer: null,
        // 是否全选
        checkAll: false,
        // 是否打开筛选
        showPopover: false
      }
    },
    computed: {
      // 状态
      statusFilter() {
        return {
          '0': this.$t(`message.transactionList.S_Unfilled`),
          '1': this.$t(`message.transactionList.S_PartialDeal`),
          '2': this.$t(`message.transactionList.S_DealDone`),
          '3': this.$t(`message.transactionList.S_Revoked`),
          '4': this.$t(`message.transactionList.S_failure`)
        }
      },
      // 开平
      openLabel() {
        return {
          '0': this.$t(`message.transactionList.S_openPosition`),
          '1': this.$t(`message.transactionList.S_closePosition`)
        }
      },
      // 类型
      priceType() {
        return {
          '1': this.$t('message.transactionList.S_LimitPrice'),
          '2': this.$t('message.transactionList.S_MarketPrice')
        }
      },
      // 类型筛选数组
      filterTypeList() {
        return [
          {
            text: this.$t('message.createdEntrust.closeshort'),
            value: '11'
          },
          {
            text: this.$t('message.createdEntrust.closelong'),
            value: '21'
          },
          {
            text: this.$t('message.createdEntrust.openlong'),
            value: '10'
          },
          {
            text: this.$t('message.createdEntrust.openshort'),
            value: '20'
          }
        ]
      },
      // 币种筛选列表
      filtersList() {
        return this.contractList.map(item => {
          return {
            text: item.name.replace(/USDT/gi, ''),
            value: item.id
          }
        })
      }
    },
    watch: {
      $route() {
        this.getlist()
      },
      userInfo(value) {
        if (!value) {
          this.list = []
          this.saveList = []
        } else {
          this.getList()
        }
      },
      wsOrder() {
        this.getList()
      },
      // 监听筛选框显示或者隐藏,显示多选框正确的值
      showPopover(value) {
        if (value) {
          if (this.isCheck) {
            this.checkList = this.checkConfirmList
            this.checkTypeList = this.checkConfirmTypeList
          } else {
            this.checkList = []
            this.checkTypeList = []
          }
        }
      },
      // 监听单选列表,确定全部选中
      checkList(value) {
        this.checkAll = value.length === this.filtersList.length
      }
    },
    methods: {
      // 币种头部渲染
      header(h, {column, $index}) {
        h = this.$createElement
        return (
          <div class="currency-cell" ref="box">
            <el-popover
              placement="bottom-start"
              trigger="click"
              popper-class="pop-filters tooltip-content"
              ref="popover"
              width="300"
              on-show={() => (this.showPopover = true)}
              on-hide={() => (this.showPopover = false)}
              offset={-16}
            >
            <span class="span-filter" slot="reference">
              {this.$t('message.transactionList.currency')}
              <i
                class={[
                  'HyIconFont',
                  'hyicon-filter',
                  this.isCheck ? 'active' : ''
                ]}
              />
            </span>
              <div class="content">
                <div class="filter-type">
                  <el-checkbox-group
                    value={this.checkTypeList}
                    on-input={value => (this.checkTypeList = value)}
                  >
                    {this.filterTypeList.map(item => {
                      return (
                        <el-checkbox label={item.value}>{item.text}</el-checkbox>
                      )
                    })}
                  </el-checkbox-group>
                </div>
                <div class="filter-content">
                  <div class="check-all">
                    <el-checkbox
                      label="all"
                      on-change={this.handleCheckAll}
                      value={this.checkAll}
                      on-input={value => (this.checkAll = value)}
                    >
                      {this.$t('message.transactionList.all')}
                    </el-checkbox>
                  </div>
                  <el-checkbox-group
                    value={this.checkList}
                    on-input={value => {
                      this.checkList = value
                    }}
                  >
                    {this.filtersList.map(item => {
                      return (
                        <el-checkbox label={item.value}>{item.text}</el-checkbox>
                      )
                    })}
                  </el-checkbox-group>
                </div>
                <div class="filter-footer">
                  <v-button plain size="medium" on-click={this.reset}>
                    {this.$t('message.transactionList.chongzhi')}
                  </v-button>
                  <v-button size="medium" on-click={this.confirm}>
                    {this.$t('message.transactionList.queding')}
                  </v-button>
                </div>
              </div>
            </el-popover>
          </div>
        )
      },
      // 获取列表
      getList() {
        SwapsApi.getOrderList({
          status: '3',
          page: 1,
          pageSize: 200
        })
          .then(res => {
            this.saveList = (res.data && res.data.orderList) || []
            // 为了保证筛选准确,执行一次
            this.handleFilterList()
          })
          .catch(err => {
            this.list = []
            this.saveList = []
          })
          .finally(() => {
            this.$emit('changeLength', this.saveList.length)
            this.$emit('dataEnd', true)
          })
      },
      // 选择全部
      handleCheckAll(value) {
        this.checkList = value ? this.filtersList.map(item => item.value) : []
      },
      // 重置
      reset() {
        this.checkList = []
        this.checkTypeList = []
      },
      /**
       * @content 筛选确认点击按钮
       */
      confirm() {
        this.checkConfirmList = this.checkList
        this.checkConfirmTypeList = this.checkTypeList
        this.isCheck = true
        if (!this.checkConfirmList.length && !this.checkConfirmTypeList.length) {
          this.isCheck = false
        }
        this.handleFilterList()
        this.$refs.popover.showPopper = false
      },
      // 筛选数据, 使用两个数组在进行筛选,否则在列表更新时,会替换掉筛选的数据
      handleFilterList() {
        if (!this.checkConfirmTypeList.length && !this.checkConfirmList.length) {
          this.list = this.saveList
          return
        }
        let typeList = this.saveList.reduce((current, next) => {
          this.checkConfirmTypeList.forEach(item => {
            if ('' + next.side + next.close === item) {
              current = [...current, next]
            }
          })
          return current
        }, [])
        if (!this.checkConfirmList.length) {
          this.list = typeList
          return
        }
        typeList =
          typeList.length || this.checkConfirmTypeList.length
            ? typeList
            : this.saveList
        let currencyList = typeList.reduce((current, next) => {
          this.checkConfirmList.forEach(item => {
            if (item === next.contractId) {
              current = [...current, next]
            }
          })
          return current
        }, [])
        this.list = currencyList
      },
      // 清空全部筛选条件
      clearAllCheck() {
        this.checkTypeList = []
        this.checkList = []
        this.checkConfirmList = []
        this.checkConfirmTypeList = []
        this.list = this.saveList
      }
    },
    mounted() {
      this.getList()
      this.timer = setInterval(() => {
        this.getList()
      }, 3000)
    },
    destroyed() {
      clearInterval(this.timer)
    }
  }
</script>

<style lang="less" scoped>
   @import (reference) '~@/assets/css/index';

  .table-wrapper {
    position: relative;
  }

  .black {
    .themeBlack();

    .cancel-list {
      /deep/ .currency-cell {
        .flex-box();
        align-items: center;
        padding-left: 0;
        &>span {
          width: 100%;
          display: inline-block;
        }
        .span-filter {
          width: 100%;
          display: inline-block;
        }

        .HyIconFont {
          font-size: 12px;
          margin-left: 3px;
          transform: scale(0.8);
          display: inline-block;

          &.active {
            color: @darkFontColor;
          }
        }
      }

      .buyColor {
        color: @tradeGreen !important;
      }

      .sellColor {
        color: @tradeRed !important;
      }

      .buyColorBg {
        background: @tradeGreen !important;
      }

      .sellColorBg {
        background: @tradeRed !important;
      }
    }
  }

  .white {
    .themeWhite();

    .cancel-list {
      /deep/ .currency-cell {
        .flex-box();
        align-items: center;
        padding-left: 0;
        &>span {
          width: 100%;
          display: inline-block;
        }
        .span-filter {
          width: 100%;
          display: inline-block;
        }

        .HyIconFont {
          font-size: 12px;
          margin-left: 3px;
          transform: scale(0.8);
          display: inline-block;

          &.active {
            color: @darkFontColor;
          }
        }
      }

      .buyColor {
        color: @tradeGreen !important;
      }

      .sellColor {
        color: @tradeRed !important;
      }

      .buyColorBg {
        background: @tradeGreen !important;
      }

      .sellColorBg {
        background: @tradeRed !important;
      }
    }
  }
</style>
