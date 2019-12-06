<template>
  <div class="entrust-list">
    <div
	    class="table-wrapper"
	    style="width: 100%;"
    >
      <el-table
	      :data="list"
	      class="el-table-content"
	      ref="table"
	      empty-text=" "
        height="350"
        border
      >
        <!-- 币种 -->
        <el-table-column
	        prop="contractName"
	        width="140"
	        :label="$t('message.transactionList.currency')"
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
        <!-- 执行价格 -->
        <el-table-column
	        min-width="100"
	        align="right"
	        :label="$t('message.transactionList.commissionPrice')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span v-if="scope.row.priceType === 1">{{ scope.row.price | splitFormat(4) }}</span>
            <span v-else>{{ $t('message.trade.market') }}</span>
          </template>
        </el-table-column>
        <!-- 触发价格 -->
        <el-table-column
	        min-width="100"
	        align="right"
	        :label="$t('message.transactionList.triggerPrice')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span>{{ scope.row.triggerPrice | splitFormat(4) }}</span>
          </template>
        </el-table-column>
        <!-- 类型 -->
        <el-table-column
	        align="right"
	        :label="$t('message.transactionList.type')"
        >
          <template
	          v-if="scope.row.contractName"
	          slot-scope="scope"
          >
            <span>{{ priceType[scope.row.priceType] }}</span>
          </template>
        </el-table-column>
        <!-- 数量 -->
        <el-table-column
	        min-width="80"
	        align="right"
	        :label="$t('message.transactionList.number')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span>{{ scope.row.size }}</span>
          </template>
        </el-table-column>
        <!-- 实际杠杆 -->
        <el-table-column
	        align="right"
	        :label="$t('message.transactionList.actualLeverage')"
        >
          <template
	          v-if="scope.row.contractName"
	          slot-scope="scope"
          >
            <span>{{ scope.row.leverage | splitFormat(4) }}</span>
          </template>
        </el-table-column>
        <!--    设置时间    -->
        <el-table-column
	        prop="status"
	        min-width="100"
	        align="right"
	        :label="$t('message.usdtTips.setTime')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span >{{ scope.row.createdDate | timeFormat}}</span>
          </template>
        </el-table-column>
        <!-- 状态 -->
        <el-table-column
	        min-width="100"
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
	        min-width="110"
	        align="center"
	        :label="$t('message.transactionList.time')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span v-if="scope.row.status != 1 ">{{ scope.row.modifyDate | timeFormat}}</span>
            <span v-else>-</span>
          </template>
        </el-table-column>
        <!-- 操作 -->
        <el-table-column
	        align="center"
	        prop=""
	        min-width="110"
	        :label="$t('message.transactionList.operate')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <v-button
	            @click="revert(scope.row)"
	            type="text"
	            v-if="scope.row.status === 1"
            >{{ $t('message.filter.undo') }}
            </v-button>
          </template>
        </el-table-column>
      </el-table>
      <no-data v-if="!list.length"></no-data>
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
    name: 'EntrustList',
    mixins: [systemMixin, dataMixin, userMixin],
    components: {
      NoData,
      presetStopLossLayerBox
    },
    data() {
      return {
        // 工具函数
        utils: Utils,
        // 表单数据
        list: [],
        // 定时器
        timer: null,
        // 是否打开预设止盈止损弹框
        showPresetStopLossLayerBox: false,
        // 需要传入预设止盈止损中的数据
        layerBoxData: {}
      }
    },
    computed: {
      // 价格类型 1限价,2 市价
      priceType() {
        return {
          '1': this.$t('message.transactionList.S_LimitPrice'),
          '2': this.$t('message.transactionList.S_MarketPrice')
        }
      },
      // 状态值
      statusFilter() {
        return {
          '1': this.$t(`message.transactionList.newOrder`),
          '2': this.$t(`message.transactionList.SuccTrigger`),
          '3': this.$t(`message.transactionList.canceled`),
          '4': this.$t(`message.version3.entrustStatus4`),
          '5': this.$t(`message.version3.entrustStatus5`),
          '6': this.$t('message.transactionList.Expired')
        }
      },
      // 开平状态
      openLabel() {
        return {
          '0': this.$t(`message.transactionList.S_openPosition`),
          '1': this.$t(`message.transactionList.S_closePosition`)
        }
      },
      // 合约名字信息
      contractInfo() {
        let tmp = {}
        this.$store.state.market.contract.forEach(item => {
          tmp[item.id] = item.name
        })
        return tmp
      }
    },
    watch: {
      $route: {
        handler() {
          this.getList()
        },
        immediate: true
      },
      userInfo(value) {
        clearInterval(this.timer)
        if (!value) {
          this.list = []
        } else {
          this.getList()
          this.queryPositionList()
        }
      },
      wsOrder() {
        this.getList()
      }
    },
    methods: {
      // 初始化列表
      getList() {
        SwapsApi.getEarningsList()
          .then(res => {
            this.list = (res.data && res.data.list) || []
          })
          .catch(e => {
            console.log(e)
          })
	        .finally(() => {
	          this.$emit('dataEnd', true)
	        })
      },
      // 撤单确定事件
      async revert({ id }) {
        try {
          if ( !this.promptBoxShowInfo[ALERT_PROMPT_UNDO] ) {
            await this.$alert({
              type: 'prompt',
              contentType: 1,
              content: this.$t('message.version3.undo'),
              prompt: `*${ this.$t('message.version3.undoTitle') }`
            })
          }
          this.reverApi(id)
        } catch (error) {
        }
      },
      // 撤单请求 API
      async reverApi(id) {
        try {
          let re = await SwapsApi.earningCancelOrder(id)
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
        if ( !this.promptBoxShowInfo[ALERT_BUYSELL_PRESET] ) {
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
      // 轮训计划委托列表
      queryEntrustList() {
        if (!this.userInfo) return
        this.timer = setInterval(() => {
          this.getList()
        }, 3000)
      }
    },
    mounted() {
      this.getList()
      this.queryEntrustList()
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

	   .entrust-list {
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

	   .entrust-list {
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
