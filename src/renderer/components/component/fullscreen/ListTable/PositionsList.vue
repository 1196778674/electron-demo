<template>
	<div class="positons-list">
		<div class="table-wrapper">
			<el-table
				:data="listData"
				id="table"
				class="el-table-content table"
				empty-text=" "
				:header-cell-style="headerCellStyle"
				ref="table"
				height="350"
				border
			>
				<div slot="empty"></div>
				<!-- 币种 -->
				<el-table-column
					prop="name"
					min-width="130"
					:label="$t('message.transactionList.currency')"
				>
					<template slot-scope="scope">
						<div v-if="scope.row.id !== 'last'">
              <span :class="[scope.row.side === 1 ? 'buyColor' : 'sellColor']">
                {{
                  scope.row.side === 1
                    ? $t('message.transactionList.more')
                    : $t('message.transactionList.less')
                }}
              </span>
							<span>{{ contractInfo[scope.row.contractId] }}</span>
						</div>
						<div v-else>
							<span>{{ $t('message.transactionList.total') }}</span>
						</div>
					</template>
				</el-table-column>
				<!-- 总仓 -->
				<el-table-column
					prop="positionQty"
					min-width="134"
					align="right"
					:label="$t('message.transactionList.totalPosition')"
				>
					<div class="tip-warp" slot="header" slot-scope="scope">
						<v-tip
							class="table-tip"
							:label="$t('message.transactionList.totalPosition')"
							:tipText="$t('message.usdtTips.totalPosition')"
							:width="306"
							placement="top"
						></v-tip>
					</div>
				</el-table-column>
				<!-- 可用 -->
				<el-table-column
					prop="availablePositionQty"
					min-width="160"
					align="right"
				>
					<div class="tip-warp" slot="header" slot-scope="scope">
						<v-tip
							class="table-tip"
							:label="$t('message.transactionList.available')"
							:tipText="$t('message.usdtTips.totalPosition')"
							:width="306"
							placement="top"
						></v-tip>
					</div>
				</el-table-column>
				<!-- 持仓均价 -->
				<el-table-column
					min-width="170"
					align="right"
				>
					<template slot-scope="scope">
						<span>{{ scope.row.entryPrice | splitFormat(4) }}</span>
					</template>
					<div class="tip-warp" slot="header" slot-scope="scope">
						<v-tip
							class="table-tip"
							:label="$t('message.transactionList.avgPrice')"
							:tipText="$t('message.usdtTips.positionAverage', {
								color: themeColor.tradeRed
							})"
							:width="306"
							placement="top"
						></v-tip>
					</div>
				</el-table-column>
				<!-- 占用保证金 -->
				<el-table-column
					min-width="160"
					align="right"
					:label="$t('message.transactionList.occupationMargin')"
				>
					<template slot-scope="scope">
						<span>{{ scope.row.positionMargin | splitFormat(2) }}</span>
					</template>
					<div class="tip-warp" slot="header" slot-scope="scope">
						<v-tip
							class="table-tip"
							:label="$t('message.transactionList.occupationMargin')"
							:tipText="$t('message.usdtTips.cashDeposit')"
							:width="306"
							placement="top"
						></v-tip>
					</div>
				</el-table-column>
				<!-- 未实现盈亏 -->
				<el-table-column
					min-width="170"
					align="right"
				>
					<template slot-scope="scope">
            <span
	            v-if="scope.row.id !== 'last'"
	            :class="{
                buyColor: getUnrealized(scope.row) > 0,
                sellColor: getUnrealized(scope.row) < 0
              }"
            >{{ getUnrealized(scope.row) | splitFormat(2) }}</span
            >
						<span v-else>{{ scope.row.totalUnRealised | splitFormat(2) }}</span>
					</template>
					<div class="tip-warp" slot="header" slot-scope="scope">
						<v-tip
							class="table-tip"
							:label="$t('message.transactionList.unrealisedPNL')"
							:tipText="$t('message.usdtTips.profitAndLoss')"
							:width="306"
							placement="top"
						></v-tip>
					</div>
				</el-table-column>
				<!-- 实际杠杆 -->
				<el-table-column
					min-width="150"
					align="right"
					:label="$t('message.transactionList.actualLeverage')"
				>
					<template slot-scope="scope">
						<span>{{ scope.row.leverage | splitFormat(2) }}</span>
					</template>
					<div class="tip-warp" slot="header" slot-scope="scope">
						<v-tip
							class="table-tip"
							:label="$t('message.transactionList.actualLeverage')"
							:tipText="$t('message.usdtTips.actualLever')"
							:width="306"
							placement="top"
						></v-tip>
					</div>
				</el-table-column>
				<!-- 收益率 -->
				<el-table-column
					min-width="160"
					align="right"
					:label="$t('message.transactionList.profitability')"
				>
					<template slot-scope="scope">
            <span
	            style="padding-right: 11px;"
	            :class="{
                buyColor: getRate(scope.row) > 0,
                sellColor: getRate(scope.row) < 0
              }"
	            v-show="scope.row.id !== 'last'"
            >{{ getRate(scope.row) + '%' }}</span>
					</template>
					<div class="tip-warp" slot="header" slot-scope="scope">
						<v-tip
							class="table-tip"
							:label="$t('message.createdEntrust.A_ror')"
							:tipText="$t('message.usdtTips.rate')"
							:width="306"
							placement="top"
						></v-tip>
					</div>
				</el-table-column>
				<!-- 预估强平价 -->
				<el-table-column
					min-width="170"
					align="right"
				>
					<template slot-scope="scope">
            <span>{{
              (Number(scope.row.liquidationPrice) > 0
                ? scope.row.liquidationPrice
                : 0) | splitFormat(4)
            }}</span>
					</template>
					<div class="tip-warp" slot="header" slot-scope="scope">
						<v-tip
							class="table-tip"
							:label="$t('message.transactionList.strongParity')"
							:tipText="$t('message.usdtTips.strongParity')"
							:width="306"
							placement="top"
						></v-tip>
					</div>
				</el-table-column>
				<!-- 维持保证金率-->
        <el-table-column
          prop=""
          min-width="140"
          align="right"
          :label="$t('message.transactionList.maintain')"
        >
          <template slot-scope="scope">
            <span>{{ maintain }}</span>
          </template>
        </el-table-column>
				<!-- 止盈 -->
				<el-table-column
					prop="planProfitQty"
					min-width="140"
					align="right"
					:label="
            `${$t('message.transactionList.stopProfit')} (${$t(
              'message.transactionList.A_Hand'
            )})`
          "
				>
				</el-table-column>
				<!-- 止损 -->
				<el-table-column
					prop="planLossQty"
					min-width="120"
					align="right"
					:label="
            `${$t('message.transactionList.stopLoss')} (${$t(
              'message.transactionList.A_Hand'
            )})`
          "
				>
				</el-table-column>
				<!-- 操作 -->
				<el-table-column
					fixed="right"
					align="center"
					min-width="200"
					:width="locale === 'ru' ? 280 : 200"
					:label="$t('message.transactionList.operate')"
				>
					<template slot-scope="scope">
						<v-button @click="submit(scope.row, 0)" type="text">{{
							$t('message.transactionList.closePosition')
							}}
						</v-button>
						<v-button @click="submit(scope.row, 1)" type="text">{{
							$t('message.transactionList.stopProfit')
							}}
						</v-button>
						<v-button @click="submit(scope.row, 2)" type="text">{{
							$t('message.transactionList.stopLoss')
							}}
						</v-button>
					</template>
				</el-table-column>
			</el-table>
			<no-data v-if="!listData.length"></no-data>
		</div>
		<!-- 平仓弹框 -->
		<close-layer-box
			:layer-box-data="layerBoxData"
			v-model="closeLayerBox"
			@resetList="getPositionList"
		></close-layer-box>
		<!-- 止盈止损弹框 -->
		<stop-loss-layer-box
			:layer-box-data="layerBoxData"
			:box-type="stopLossType"
			v-model="showStopLossLayerBox"
			@resetList="getPositionList"
		></stop-loss-layer-box>
	</div>
</template>

<script>
  import CloseLayerBox from './CloseLayerBox'
  import StopLossLayerBox from './StopLossLayerBox'
  import NoData from './NoData'
  import SwapsApi from '@/api/swapsApi'
  import Utils from '@/utils/utils'
  import {dataMixin, systemMixin, userMixin} from '@/mixins'
  import { ALERT_PROMPT_STOPLOSSBTN } from '@/data/noTip'

  export default {
    name: 'PositionsList',
    mixins: [systemMixin, dataMixin, userMixin],
    components: {
      CloseLayerBox,
      StopLossLayerBox,
      NoData
    },
    data() {
      return {
        // 列表数据
        listData: [],
        // 弹框数据
        layerBoxData: {},
        // 平仓弹框
        closeLayerBox: false,
        // 止盈止损弹框
        showStopLossLayerBox: false,
        // 未实现盈亏统计
        totalUnRealised: 0,
        // 占用保证金统计
        totalPositionMargin: 0,
        // 仓位定时器
        timer: null,
        // 止盈止损摊款类型
        stopLossType: 1
      }
    },
    computed: {
			maintain () {
				return this.$store.state.market.contract.filter(item => {
					return item.id === Number(this.$route.params.id)
				})[0].maintenanceMarginRate.toFixed(8) * 100 + '%'
			},
      // 合约名字信息
      contractInfo() {
        let tmp = {}
        this.$store.state.market.contract.forEach(item => {
          tmp[item.id] = item.name
        })
        return tmp
      },
	    // 使用指南当前语言信息
      currentLocale() {
        if (this.locale === 'cn') {
          return 'zh-cn'
        } else if (this.locale === 'en') {
          return 'en-us'
        } else {
          return this.locale
        }
      }
    },
    watch: {
      // 监听所有指数价格
      indexPrice() {
        // 计算未实现盈亏
        this.setUnrealiset()
      },
      $route() {
        this.getPositionList()
      },
      userInfo(value) {
        clearInterval(this.timer)
        if (!value) {
          this.listData = []
        } else {
          this.getPositionList()
          this.queryPositionList()
        }
      },
      wsOrder() {
        this.getPositionList()
      }
    },
    methods: {
      // 头部样式
      headerCellStyle({row, column, rowIndex, columnIndex}) {
        if (columnIndex === 7) {
          return {'padding-right': '15px !important'}
        }
      },
      // 获取合约
      getContract(id, contract) {
        let curent =
          contract.filter(item => {
            return item.id.toString() === id.toString()
          })[0] || {}
        return curent
      },
      // 计算为实现盈亏
      getUnrealized(item) {
        let currentIndexPrice = this.indexPrice[item.contractId]
        if (!currentIndexPrice) return 0
        let curentContract = this.getContract(item.contractId, this.contractList)
        if (item.side === 1) {
          return this.$filter.splitFormat(
            Utils.mul(
              Utils.mul(
                Utils.sub(currentIndexPrice.indexPrice, item.entryPrice),
                item.positionQty
              ),
              curentContract.value
            ),
            2
          )
        } else {
          return this.$filter.splitFormat(
            Utils.mul(
              Utils.mul(
                Utils.sub(item.entryPrice, currentIndexPrice.indexPrice),
                item.positionQty
              ),
              curentContract.value
            ),
            2
          )
        }
      },
      // 获取盈利率
	    /**
	    * 公式:
	     * side === 1 多仓收益率: (指数价格 - 持仓价格) / 持仓价格 * 杠杆 * 100%
	     * side === 2 空仓收益率: (持仓价格 - 指数价格) / 持仓价格 * 杠杆 * 100%
	    */
      getRate(item) {
        let currentIndexPrice = this.indexPrice[item.contractId]
        if (!currentIndexPrice) return 0
        let curentContract = this.getContract(item.contractId, this.contractList)
        if (item.side === 1) {
          return Utils.splitFormat(
            Utils.mul(
              Utils.mul(
                Utils.div(
                  Utils.sub(currentIndexPrice.indexPrice, item.entryPrice),
                  item.entryPrice
                ),
	              item.leverage
              ),
              100
            ),
            curentContract.contractParam.profitRateFloat
          )
        } else {
          return Utils.splitFormat(
            Utils.mul(
              Utils.mul(
                Utils.div(
                  Utils.sub(item.entryPrice, currentIndexPrice.indexPrice),
                  item.entryPrice
                ),
	              item.leverage
              ),
              100
            ),
            curentContract.contractParam.profitRateFloat
          )
        }
      },
      // 获取列表
      getPositionList() {
        SwapsApi.getPositionList()
          .then(res => {
            this.listData = []
            if (
              res &&
              res.data &&
              res.data.positionTotal &&
              res.data.positionTotal.positionList
            ) {
              let data = res.data.positionTotal.positionList
	            this.listData = data.map(item => {
								let contract = this.contractList.find(e => e.id === item.contractId)
                return Object.assign(item, {
									contractValue: contract.value,
									contractParam: contract.contractParam
	              })
	            })
              this.setUnrealiset()
              this.$nextTick(()=> {
                this.$refs.table && this.$refs.table.doLayout()
              })
            }
          })
          .catch(err => {
            this.listData = []
          })
          .finally(() => {
            this.$emit('changeLength', this.listData.length)
            this.$emit('dataEnd', true)
            this.setAllPositionsList(this.listData)
          })
      },
      // 计算未实现盈亏,并在store中存储
      setUnrealiset() {
        let unrealised = 0
        this.listData.forEach(v => {
          unrealised = Utils.add(
            unrealised,
            this.$filter.splitFormat(this.getUnrealized(v), 2) * 100
          )
        })
        this.$store.commit('market/SET_UNREALISED', (unrealised / 100).toFixed(2))
      },
	    /**
	    * @content: 操作事件
	    * @params type <Number>  0:平仓 1: 止盈 2: 止损
	    * @returns any
	    */
      async submit(item, type) {
        if (!item.availablePositionQty) {
          this.$notify({
            title: this.$t('message.version3.part'),
            message: this.$t('message.version3.inadequate'),
            type: 'warning'
          })
          return
        }
        this.layerBoxData = item
        this.layerBoxData.name = this.contractInfo[item.contractId]
	      if (type) {
          if (!this.promptBoxShowInfo[`alert-prompt-4`]) {
            await this.$alert({
              type: 'prompt',
              content: this.$t('message.usdtTips.priceTitle'),
              contentType: 4,
              promptHTMLString: true,
							prompt: '<div style="text-align: left;">' + 
							this.$t('message.usdtTips.priceTipInfo', {
                href: `https://58coin-support.zendesk.com/hc/${this.currentLocale}/articles/360034270853`,
	              color: this.themeColor.tradeRed
              }) + '</div>',
              isShowCancel: false
            })
          }
          this.stopLossType = type
          this.showStopLossLayerBox = true
	      }else {
          this.closeLayerBox = true
	      }
      },
	    // 轮训仓位列表
	    queryPositionList() {
        if (!this.userInfo) return
        this.timer = setInterval(() => {
          this.getPositionList()
        }, 3000)
	    }
    },
    mounted() {
      this.getPositionList()
      this.queryPositionList()
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

		.positons-list {
			float: left;
			width: 100%;
			min-width: 620px;

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
		}
	}

	.white {
		.themeWhite();

		.positons-list {
			float: left;
			width: 100%;
			min-width: 620px;

			/deep/ .tip-warp {
				padding: 0;
				.flex-box();
				align-items: center;
				justify-content: flex-end;

				.tooltipinfo {
					display: block;
					padding: 0;
					border-bottom: 1px dotted @middleFontColor;
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
		}
	}
</style>
