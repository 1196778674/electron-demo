<template>
  <div class="loss-list">
    <div
	    class="table-wrapper"
	    style="width: 100%;"
    >
      <el-table
	      :data="list"
        border
	      class="el-table-content"
	      empty-text=" "
        height="350"
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
            <span style="font-weight: bold;">{{ scope.row.contractName }}</span>
          </template>
        </el-table-column>
        <!-- 盈损 -->
        <el-table-column
	        prop="mode"
	        min-width="80"
	        sortable
	        align="right"
	        :label="$t('message.transactionList.profitLoss')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span :class="[scope.row.mode === 1 ? 'buyColor' : 'sellColor']">{{
              scope.row.mode
                | toBool({
                  1: $t('message.transactionList.stopProfit'),
                  2: $t('message.transactionList.stopLoss'),
                  3: $t('message.transactionList.triggerOrder')
                })
            }}</span>
          </template>
        </el-table-column>
        <!-- 触发价格 -->
        <el-table-column
	        prop="triggerPrice"
	        min-width="110"
	        align="right"
	        :label="$t('message.transactionList.triggerPrice')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span>{{ scope.row.triggerPrice }}</span>
          </template>
        </el-table-column>
        <!-- 方式 -->
        <el-table-column
	        prop="priceType"
	        min-width="80"
	        align="right"
	        :label="$t('message.transactionList.mode')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span>{{
              scope.row.priceType
                | toBool({
                  1: $t(`message.transactionList.S_LimitPrice`),
                  2: $t(`message.transactionList.S_MarketPrice`)
                })
            }}</span>
          </template>
        </el-table-column>
        <!-- 执行价格 -->
        <el-table-column
	        prop="price"
	        min-width="80"
	        align="right"
	        :label="$t('message.transactionList.executionPrice')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span v-if="scope.row.priceType === 1">{{ scope.row.price }}</span>
            <span v-if="scope.row.priceType === 2">{{
              $t(`message.transactionList.S_MarketPrice`)
            }}</span>
          </template>
        </el-table-column>
        <!-- 数量 -->
        <el-table-column
	        prop="size"
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
        <!-- 状态 -->
        <el-table-column
	        prop="status"
	        min-width="120"
	        align="right"
	        :label="$t('message.transactionList.status')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <span>{{ scope.row.status | toBool({
              1: $t('message.transactionList.newOrder'),
              2: $t('message.transactionList.SuccTrigger'),
              3: $t('message.transactionList.canceled'),
              4: $t('message.transactionList.triggerFailed'),
              5: $t('message.transactionList.Expired'),
              6: $t('message.transactionList.cancel')
              }) }}</span>
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
        <!--    时间    -->
        <el-table-column
	        prop="status"
	        min-width="100"
	        align="right"
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
	        width="90"
	        align="center"
	        :label="$t('message.transactionList.operate')"
        >
          <template
	          v-if="scope.row.side"
	          slot-scope="scope"
          >
            <v-button
	            @click="cancel(scope.row)"
	            type="text"
	            v-if="scope.row.status === 1"
            >{{ $t('message.transactionList.A_Cancel') }}</v-button
            >
          </template>
        </el-table-column>
      </el-table>
      <no-data v-if="!list.length"></no-data>
    </div>
  </div>
</template>

<script>
  import SwapsApi from '@/api/swapsApi'
  import NoData from './NoData'

  export default {
    name: 'LossList',
    components: {
      NoData
    },
    data() {
      return {
        // 列表数据
        list: [],
        // 定时器
        timer: null
      }
    },
    watch: {
      userInfo(value) {
        clearInterval(this.timer)
        if (!value) {
          this.list = []
        } else {
          this.getList()
          this.queryLossList()
        }
      },
      wsOrder() {
        this.getList()
      }
    },
    methods: {
      // 初始化列表
      getList() {
        SwapsApi.getPlanOrder({ pageSize: 200, page: 1 })
          .then(res => {
            this.list = (res.data && res.data.list) || []
            this.$emit('dataEnd', true)
          })
          .catch(e => {
            console.log(e)
          })
      },
      // 取消
      cancel(row) {
        SwapsApi.planCancel({ planId: row.id })
          .then(re => {
            this.$notify({
              title: this.$t('message.errorCode.' + re.code),
              type: 'success'
            })
            this.getList()
          })
          .catch(error => {
            this.$notify({
              title: this.$t('message.errorCode.' + error.data.code),
              type: 'warning'
            })
          })
      },
      // 轮训止盈止损列表
      queryLossList() {
        if (!this.userInfo) return
        this.timer = setInterval(() => {
          this.getList()
        }, 3000)
      }
    },
    mounted() {
      this.getList()
      this.queryLossList()
    },
    destroyed() {
      clearInterval(this.timer)
    }
  }
</script>

<style
	lang="less"
	scoped
>
@import (reference) '../../../assets/css/index';

.table-wrapper {
	position: relative;
}

.black {
	.themeBlack();

	.loss-list {
		/deep/ .currency-cell {
			.flex-box();
			align-items: center;
			padding-left: 0;

			.HyIconFont {
				font-size: 12px;
				margin-left: 3px;
				transform: scale(0.8);
				display: inline-block;
			}
		}

		/deep/ .el-table th div {
			line-height: 1;

			i {
				font-size: 14px;
				cursor: pointer;
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

	.loss-list {
		/deep/ .currency-cell {
			.flex-box();
			align-items: center;
			padding-left: 0;

			.HyIconFont {
				font-size: 12px;
				margin-left: 3px;
				transform: scale(0.8);
				display: inline-block;
			}
		}

		/deep/ .el-table th div {
			line-height: 1;

			i {
				font-size: 14px;
				cursor: pointer;
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

		/* // .no-data {
		//   height: 100%;
		//   padding-top: 170px;
		//   background: url('../../../assets/images/newUI/table-default-bg-black.png')
		//     no-repeat center 50px;
		//   background-size: 190px 108px;
		//   p {
		//     font-size: 12px;
		//     color: @darkFontColor;
		//     // color: @noDataFontColor;
		//   }
		// } */
	}
}
</style>
