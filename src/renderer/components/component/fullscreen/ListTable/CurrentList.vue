<template>
  <div class="current-list">
    <div
	    class="table-wrapper"
    >
      <el-table
	      :data="list"
	      class="el-table-content"
	      ref="table"
	      empty-text=" "
        border
        height="350"
      >
        <!-- 币种 -->
        <el-table-column
	        prop="contractName"
	        width="140"
	        :label="$t('message.transactionList.currency')"
	        label-class-name="first-filter"
	        :render-header="header"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span :class="[scope.row.side === 1 ? 'buyColor' : 'sellColor']">
              {{
                scope.row.side === 1
                  ? $t('message.transactionList.more')
                  : $t('message.transactionList.less')
              }}
            </span>
            <span>{{ scope.row.contractName }}</span>
          </template>
        </el-table-column>
        <!-- 开平 -->
        <el-table-column
	        sortable
	        width="140"
	        prop="close"
	        align="right"
	        :label="$t('message.transactionList.openLeve')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span>{{ openLabel[scope.row.close] }}</span>
          </template>
        </el-table-column>
        <!-- 委托价格 -->
        <el-table-column
	        width="140"
	        align="right"
	        :label="$t('message.transactionList.commissionPrice')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span>{{ scope.row.price | splitFormat(4) }}</span>
          </template>
        </el-table-column>
        <!-- 委托量 -->
        <el-table-column
	        width="120"
	        align="right"
	        :label="$t('message.transactionList.commissionAmount')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span>{{ scope.row.size }}</span>
          </template>
        </el-table-column>
        <!-- 可撤 -->
        <el-table-column
	        width="120"
	        align="right"
	        :label="$t('message.transactionList.retractable')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span>{{ utils.sub(scope.row.size, scope.row.executedSize) }}</span>
          </template>
        </el-table-column>
        <!-- 已成交 -->
        <el-table-column
	        width="120"
	        align="right"
	        :label="$t('message.transactionList.dealDone')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span>{{ scope.row.executedSize }}</span>
          </template>
        </el-table-column>
        <!-- 止盈触发价 -->
        <el-table-column
	        width="180"
	        align="right"
	        :label="$t('message.version3.stopTrigger2')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span>{{ scope.row.targetProfitPrice || '-' }}</span>
          </template>
        </el-table-column>
        <!-- 止盈执行价 -->
        <el-table-column
	        width="180"
	        align="right"
	        :label="$t('message.version3.stopExecute2')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span>{{ scope.row.targetProfitExecutePrice ? scope.row.targetProfitExecutePrice : scope.row.targetProfitPrice ?  $t('message.createdEntrust.market') : '-' }}</span>
          </template>
        </el-table-column>
        <!-- 止损触发价 -->
        <el-table-column
	        width="180"
	        align="right"
	        :label="$t('message.version3.lossTrigger2')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span>{{ scope.row.stopLossPrice || '-'}}</span>
          </template>
        </el-table-column>
        <!-- 止损执行价 -->
        <el-table-column
	        width="180"
	        align="right"
	        :label="$t('message.version3.lossExecute2')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span>{{ scope.row.stopLossExecutePrice ? scope.row.stopLossExecutePrice : scope.row.stopLossPrice ?  $t('message.createdEntrust.market') : '-' }}</span>
          </template>
        </el-table-column>
        <!-- 状态 -->
        <el-table-column
	        min-width="160"
	        align="center"
	        :label="$t('message.transactionList.status')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span>{{ statusFilter[scope.row.status] }}</span>
          </template>
        </el-table-column>
        <!-- 时间 -->
        <el-table-column
	        class-name="time-column"
	        width="170"
	        align="center"
	        :label="$t('message.transactionList.time')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span>{{ scope.row.createdDate | timeFormat() }}</span>
          </template>
        </el-table-column>
        <!-- 操作 -->
        <el-table-column
	        align="center"
	        fixed="right"
	        prop=""
	        min-width="200"
	        :width="['ru', 'en', 'ja'].includes(locale) ? 290 : 200"
	        :label="$t('message.transactionList.operate')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <v-button
	            @click="revert(scope.row)"
	            type="text"
            >{{
              $t('message.filter.undo')
              }}
            </v-button>
            <v-button
	            v-if="!scope.row.close"
	            @click="preset(scope.row)"
	            type="text"
            >{{ $t('message.version3.preset') }}</v-button>
          </template>
        </el-table-column>
      </el-table>
      <no-data v-if="!saveList.length"></no-data>
    </div>
	  <!--  预设止盈止损  -->
    <presetStopLossLayerBox
	    :layer-box-data="layerBoxData"
	    v-model="showPresetStopLossLayerBox"
	    @resetList="getList"
    ></presetStopLossLayerBox>
  </div>
</template>

<script>
  import SwapsApi from '@/api/swapsApi'
  import Utils from '@/utils/utils'
  import NoData from './NoData'
  import presetStopLossLayerBox from '@/components/ListTable/presetStopLossLayerBox'
  import { dataMixin, systemMixin, userMixin } from '@/mixins'
  import { ALERT_PROMPT_UNDO, ALERT_BUYSELL_PRESET } from '@/data/noTip'

  export default {
    name: 'CurrentList',
    mixins: [systemMixin, dataMixin, userMixin],
    components: {
      NoData,
      presetStopLossLayerBox
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
        showPopover: false,
        // 是否打开预设止盈止损弹框
        showPresetStopLossLayerBox: false,
        // 需要传入预设止盈止损中的数据
        layerBoxData: {}
      }
    },
    computed: {
      // 状态值
      statusFilter() {
        return {
          '0': this.$t(`message.transactionList.S_Unfilled`),
          '1': this.$t(`message.transactionList.S_PartialDeal`),
          '2': this.$t(`message.transactionList.S_DealDone`),
          '3': this.$t(`message.transactionList.S_Revoked`),
          '4': this.$t(`message.transactionList.S_failure`)
        }
      },
      // 开平状态
      openLabel() {
        return {
          '0': this.$t(`message.transactionList.S_openPosition`),
          '1': this.$t(`message.transactionList.S_closePosition`)
        }
      },
      /**
       * 类型筛选数组
       * 当前数组的 value 是根据列表数组中的 空/多字段 + 开/平字段 去匹配的
       */
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
      },
      // 合约名字信息
      contractInfo() {
        let tmp = {}
        this.$store.state.market.contract.forEach(item => {
          tmp[item.id] = item.name
        })
        return tmp
      },
    },
    watch: {
      $route: {
        handler(val) {
          this.getCurrentList()
        },
        immediate: true
      },
      userInfo(value) {
        if ( !value ) {
          this.list = []
          this.saveList = []
        } else {
          this.getCurrentList()
        }
      },
      wsOrder() {
        this.getCurrentList()
      },
      // 监控列表
      currentList() {
        this.getList()
      },
      // 监听筛选框显示或者隐藏,显示多选框正确的值
      showPopover(value) {
        if ( value ) {
          if ( this.isCheck ) {
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
      },
      list(val){
        console.log(val)
      }
    },
    methods: {
      // 币种头部渲染
      header(h, { column, $index }) {
        h = this.$createElement
        return (
          <div
            class="currency-cell"
            ref="box"
          >
            <el-popover
              placement="bottom-start"
              popper-class="pop-filters tooltip-content"
              ref="popover"
              width="300"
              on-show={ () => (this.showPopover = true) }
              on-hide={ () => (this.showPopover = false) }
              offset={ - 16 }
            >
            <span
              class="span-filter"
              slot="reference"
            >
              { this.$t('message.transactionList.currency') }
              <i
                class={ [
                  'HyIconFont',
                  'hyicon-filter',
                  this.isCheck ? 'active' : ''
                ] }
              />
            </span>
              <div class="content">
                <div class="filter-type">
                  <el-checkbox-group
                    value={ this.checkTypeList }
                    on-input={ value => (this.checkTypeList = value) }
                  >
                    { this.filterTypeList.map(item => {
                      return (
                        <el-checkbox label={ item.value }>{ item.text }</el-checkbox>
                      )
                    }) }
                  </el-checkbox-group>
                </div>
                <div class="filter-content">
                  <div class="check-all">
                    <el-checkbox
                      label="all"
                      on-change={ this.handleCheckAll }
                      value={ this.checkAll }
                      on-input={ value => (this.checkAll = value) }
                    >
                      { this.$t('message.transactionList.all') }
                    </el-checkbox>
                  </div>
                  <el-checkbox-group
                    value={ this.checkList }
                    on-input={ value => {
                      this.checkList = value
                    } }
                  >
                    { this.filtersList.map(item => {
                      return (
                        <el-checkbox label={ item.value }>{ item.text }</el-checkbox>
                      )
                    }) }
                  </el-checkbox-group>
                </div>
                <div class="filter-footer">
                  <v-button
                    plain
                    size="medium"
                    on-click={ this.reset }
                  >
                    { this.$t('message.transactionList.chongzhi') }
                  </v-button>
                  <v-button
                    size="medium"
                    on-click={ this.confirm }
                  >
                    { this.$t('message.transactionList.queding') }
                  </v-button>
                </div>
              </div>
            </el-popover>
          </div>
        )
      },
      // 获取列表
      getList() {
        this.saveList = this.currentList
        // 为了保证筛选准确,执行一次
        this.handleFilterList()
        this.$emit('changeLength', this.saveList.length)
        this.$emit('dataEnd', true)
      },
      // 撤单确定事件
      async revert({ contractId, id }) {
        try {
          if ( !this.promptBoxShowInfo[ALERT_PROMPT_UNDO] ) {
            await this.$alert({
              type: 'prompt',
              contentType: 1,
              content: this.$t('message.version3.undo'),
              prompt: `*${ this.$t('message.version3.undoTitle') }`
            })
          }
          this.reverApi(contractId, id)
        } catch (error) {
        }
      },
      // 撤单请求 API
      async reverApi(contractId, id) {
        try {
          let re = await SwapsApi.cancelOrder(contractId, id)
          this.$notify({
            title: this.$t('message.errorCode.' + re.code),
            type: 'success'
          })
          this.getList()
        } catch (error) {
          this.$notify({
            title: this.$t('message.errorCode.' + error.data.code),
            type: 'warning'
          })
          console.error(error)
        }
      },
      // 预设止盈止损点击事件
      async preset(data) {
        if (!this.promptBoxShowInfo[ALERT_BUYSELL_PRESET]) {
          await this.$alert({
            type: 'buysell',
            content: this.$t('message.version3.prompt'),
            contentType: 3,
            promptHTMLString: true,
            prompt: this.$t('message.version3.promptContent'),
            promptAlign: 'left',
            isShowCancel: false
          })
        }
        this.layerBoxData = data
        this.layerBoxData.name = this.contractInfo[data.contractId]
        this.showPresetStopLossLayerBox = true
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
        if ( !this.checkConfirmList.length && !this.checkConfirmTypeList.length ) {
          this.isCheck = false
        }
        this.handleFilterList()
        this.$refs.popover.showPopper = false
      },
      // 筛选数据, 使用两个数组在进行筛选,否则在列表更新时,会替换掉筛选的数据
      handleFilterList() {
        if ( !this.checkConfirmTypeList.length && !this.checkConfirmList.length ) {
          this.list = this.saveList
          return
        }
        let typeList = this.saveList.reduce((current, next) => {
          this.checkConfirmTypeList.forEach(item => {
            if ( '' + next.side + next.close === item ) {
              current = [...current, next]
            }
          })
          return current
        }, [])
        if ( !this.checkConfirmList.length ) {
          this.list = typeList
          return
        }
        typeList =
          typeList.length || this.checkConfirmTypeList.length
            ? typeList
            : this.saveList
        let currencyList = typeList.reduce((current, next) => {
          this.checkConfirmList.forEach(item => {
            if ( item === next.contractId ) {
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
    }
  }
</script>

<style
	lang="less"
	scoped
>
   @import (reference) '~@/assets/css/index';

   .table-wrapper {
	   position: relative;
   }

   .black {
	   .themeBlack();

	   .current-list {
		   /deep/ .currency-cell {
			   .flex-box();
			   align-items: center;
			   padding: 0;

			   & > span {
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
					   color: @iconColor;
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

	   .current-list {
		   /deep/ .currency-cell {
			   .flex-box();
			   align-items: center;
			   padding-left: 0;

			   & > span {
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
					   color: @iconColor;
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
