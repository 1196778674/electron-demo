<template>
 <!-- @mouseleave="changeMoreContentStatus(false)" -->
		<div class="contract-assets" id="contract-assets"
		>
			<div
				class="title"
				:class="{ 'show-more': moreContentIsShow }"
			>
				<!-- @mouseenter="changeMoreContentStatus(true)" -->
				<div id="show-order-span" @click="showOrder(2,'交易按钮')">
					<span class="arrow-show">
						<img :src="$store.state.keyOrder?require('../../assets/images/full_order_down.png'):require('../../assets/images/full_order_top.png')" />
					</span>
					<span class="title-assets-text">{{$t('message.full.trade')}}</span>
				</div>

				<span class="eyes-style" @click="eyes">
					<img :src="imgSrc" alt="" srcset="">
				</span>
				<span>
					{{ $t('message.asset.contractAsset') }}({{
						currentContract.unit && currentContract.unit.toUpperCase()
					}})
				</span>
			</div>
			<div class="content">
				<!-- 信息 -->
				<div class="info">
					<!-- 风险度 -->
					<div class="info-item">
						<p
							class="value"
							:class="[userInfo ? (risk < 50 ? 'green' : 'red') : '']"
						>
							{{ iseyes?userInfo ? `${risk}%` : '-':'****' }}
						</p>
						<p class="label">
							<v-tip
								class="tip"
								:label="$t('message.asset.riskDegree')"
								:tipText="$t('message.usdtTips.risk', {color: themeColor.tradeRed})"
								:width="306"
							></v-tip>
						</p>
					</div>
					<!-- 当前资产 -->
					<div class="info-item">
						<p class="value">
							{{ iseyes?userInfo ? current : '-': '****' }}
						</p>
						<p class="label">
							<v-tip
								class="tip"
								:label="$t('message.asset.currentAssets')"
								:tipText="$t('message.usdtTips.currentAssets')"
								:width="306"
							></v-tip>
						</p>
					</div>
					<!-- 可用资产 -->
					<div class="info-item">
						<p class="value">
							{{ iseyes?userInfo ? balance : '-':'****' }}
						</p>
						<p class="label">
							<v-tip
								class="tip"
								:label="$t('message.asset.availableAssets')"
								:tipText="$t('message.usdtTips.availableCapital')"
								:width="306"
							></v-tip>
						</p>
					</div>
					<!-- 为实现盈亏 -->
					<div class="info-item">
						<p
							class="value"
							:class="[
								userInfo
									? {
											buyColor: unRealised > 0,
											sellColor: unRealised < 0
										}
									: ''
							]"
						>
							{{ iseyes?userInfo ? unRealised : '-':'****' }}
						</p>
						<p class="label">
							<v-tip
								class="tip"
								:label="$t('message.asset.unRelease')"
								:tipText="$t('message.usdtTips.profitAndLoss')"
								:width="306"
							></v-tip>
						</p>
					</div>
					<!-- 冻结保证金 -->
					<div class="info-item">
						<p class="value" v-if="userInfo">
							{{ iseyes?userInfo ? orderFrozen : '-':'****' }}
						</p>
						<p class="value" v-else>-</p>
						<p class="label">
							<v-tip
								class="tip"
								:label="$t('message.asset.frozenDeposit')"
								:tipText="$t('message.usdtTips.frozenDeposit')"
								:width="306"
							></v-tip>
						</p>
					</div>
					<!-- 资金杠杆 (∑[持仓均价i*净头寸量i*乘数])/当前资产 -->
					<div class="info-item">
						<p class="value" v-if="userInfo">
							{{ iseyes? fundLeverage ? $filter.splitFormat(fundLeverage, 2) : 0:'****' }}
						</p>
						<p class="value" v-else>-</p>
						<p class="label">
							<v-tip
								class="tip"
								:label="$t('message.asset.fundLeverage')"
								:tipText="$t('message.usdtTips.leverage')"
								:width="306"
							></v-tip>
						</p>
					</div>
					<!-- 占用保证金 -->
					<div class="info-item">
						<p class="value">
							{{ iseyes?userInfo ? positionFrozen : '-':'****' }}
						</p>
						<p class="label">
							<v-tip
								class="tip"
								:label="$t('message.asset.margin')"
								:tipText="$t('message.usdtTips.cashDeposit')"
								:width="306"
							></v-tip>
						</p>
					</div>
					<!-- 资金使用率 =（占用保证金+冻结保证金）/当前资产 -->
					<div class="info-item">
						<p class="value" v-if="userInfo">
							{{ iseyes? (fundUtilizationRate * 100) ?$filter.splitFormat((fundUtilizationRate * 100), 2) + '%' : 0:'****'
							}}
						</p>
						<p class="value" v-else>-</p>
						<p class="label">
							<v-tip
								class="tip"
								:label="$t('message.asset.fundUtilizationRate')"
								:tipText="$t('message.usdtTips.utilizationRate')"
								:width="306"
							></v-tip>
						</p>
					</div>
				</div>
				<!-- 转账按钮 -->
				<div class="transfer">
					<v-button @click="showTransferBox" type="text" icon="hyicon-fund_in">{{
						$t('message.asset.transform')
						}}
					</v-button>
				</div>
			</div>
			<!-- 转账弹框 -->
			<v-layer-box
				:title="`USDT ${$t('message.transform.transform')}`"
				v-model="transferBox"
			>
				<transfer-box @close="close"></transfer-box>
			</v-layer-box>
		</div>
</template>

<script>
  import Utils from '@/utils/utils'
  import Cookie from '@/utils/cookie'
  import SwapsApi from '@/api/swapsApi'
  import TransferBox from './TransferBox'
  import {dataMixin, systemMixin, userMixin} from '@/mixins'
  import _ from 'lodash'
  import apiConfig from '@/config/api.config'
  export default {
    name: 'ContractAssets',
    mixins: [userMixin, dataMixin, systemMixin],
    components: {
      TransferBox
    },
    data() {
      return {
        // 更多消息是否显示
        moreContentIsShow: false,
        // 转账弹框
        transferBox: false,
        // 轮训定时器
        timer: null,
        // 钱包轮询次数
        walletTimers: 0,
        // 资金杠杆
        fundLeverage: 0,
        // 资金使用率
        fundUtilizationRate: 0,
				Utils: Utils,
				imgSrc: require('../../assets/images/eyes_close.png')
      }
		},
		watch:{
			isShowAssets:{ 
				handler(val) {
					if (process.client){
						setTimeout(()=>{
							if (val) {
								this.imgSrc = require('../../assets/images/eyes_open.png')
							} else {
								this.imgSrc = require('../../assets/images/eyes_close.png')
							}
						})
					}
				},
				immediate: true,
			}
		},
    computed: {
			// 资金是否可看
			iseyes () {
				return this.isShowAssets
			},
      // 当前资产
      current() {
        return (
          Utils.splitFormat(
            Utils.editE(this.walletAsset.current),
            this.figure.fundFloat
          ) || 0
        )
      },
      // 可用资产
      balance() {
        return (
          Utils.splitFormat(
            Utils.editE(this.walletAsset.balance),
            this.figure.fundFloat
          ) || 0
        )
      },
      // 冻结保证金
      orderFrozen() {
        return (
          Utils.splitFormat(
            Utils.editE(this.walletAsset.orderFrozen),
            this.figure.fundFloat
          ) || 0
        )
      },
      // 为实现盈亏
      unRealised() {
        let {unrealised} = this.$store.state.market
        return (
          Utils.splitFormat(
            Utils.editE(unrealised || this.walletAsset.unRealised),
            this.figure.fundFloat
          ) || 0
        )
      }
    },
    methods: {
			eyes(){ 
				if (!this.userInfo){
					return
				}
				this.setIsShowAssets(!this.iseyes)
			},
			showOrder (id, text) {
				this.$store.commit('SET_KEY_ORDER', !this.$store.state.keyOrder)
				// if (this.userInfo) {
				this.setShortcut({
					type: id + '_' + text,
					data: {
						remark: text,
						userId: this.userInfo ? this.userInfo.id : '',
						event: id,
						eventType: 2,
						pageUrl: window.location.href,
						site: apiConfig.site,
						osType: 1,
						times: this.shortcut[id + '_' + text]?this.shortcut[id + '_' + text].times + 1: 1,
					}
				})
        // }
			},
      // 计算资金杠杆/资金使用率
      fundleverageUtilizationRate(asset) {
        // 资金使用率 =（占用保证金+冻结保证金）/当前资产   fundUtilizationRate
        this.fundUtilizationRate =
          Number(asset.current) !== 0
            ? (Number(asset.positionFrozen) + Number(asset.orderFrozen)) /
            Number(asset.current)
            : 0

        // 计算资金杠杆
        // 资金杠杆 (∑[持仓均价i*净头寸量i*乘数])/当前资产  fundLeverage
        let positionList = this.allPositionsList
        let list_obj_arr = _.groupBy(positionList, value => {
          return value.contractId
        })
        let sub_number = 0
        Object.values(list_obj_arr).forEach(item => {
          let number
          if (item.length == 1) {
            number =
              Number(item[0].entryPrice) *
              Number(item[0].positionQty) *
              Number(item[0].contractValue)
          } else {
            let index =
              Number(item[0].positionQty) >= Number(item[1].positionQty) ? 0 : 1
            number =
              (Number(item[index].positionQty) -
                Number(item[index == 0 ? 1 : 0].positionQty)) *
              Number(item[index].entryPrice) *
              Number(item[index].contractValue)
          }
          sub_number += number
				})
        this.fundLeverage =
					Number(asset.current) !== 0 ? sub_number / asset.current : 0
      },
      // 显示转账盒子
      showTransferBox() {
        if (!this.userInfo) {
          location.href = `${apiConfig.mainDomain}manage/login?position=usdt`
          return
        }
        this.transferBox = true
      },
      // 取消按钮事件监听
      close() {
        this.transferBox = false
      },
      // 获取资产轮训
      getWallet() {
        SwapsApi.getWalletAsset(this.currentContract.currencyId)
          .then(res => {
            let asset = (res.data && res.data.asset) || {}
            this.$store.commit('user/SET_WALLETASSET', asset)
            // 计算资金杠杆/资金使用率
            this.fundleverageUtilizationRate(asset)
          })
          .catch(err => {
          })
        SwapsApi.getWallet(this.currentContract.currencyId)
          .then(res => {
            let wallet = (res.data && res.data.wallet) || {}
            this.$store.commit('user/SET_WALLET', wallet)
          })
          .catch(err => {
          })
        // 默认请求次数为0，如果请求次数大于3次，并且没有用户信息，表示用户未登录，不再轮询请求
        this.walletTimers++
        if (
          (!this.userInfo || !Cookie.getCookie('token')) &&
          this.walletTimers >= 3
        ) {
          clearTimeout(this.timer)
          return
        }
        clearTimeout(this.timer)
        this.timer = setTimeout(this.getWallet, 2000)
      },
      // 修改显示更多状态
      changeMoreContentStatus(type) {
        this.moreContentIsShow = type
      }
    },
    created() {
      this.getWallet()
    },
    destroyed() {
      this.walletTimers = 0
      clearTimeout(this.timer)
    }
  }
</script>

<style lang="less" scoped="">
	@import (reference) '~@/assets/css/index';
	.arrow-show{
		display: inline-block;
		width: 12px;
		height: 8px;
		img{
			width: 100%;
			
		}
	}
	.title-assets-text{
		margin: 0 40px 0 6px;
	}
	.eyes-style{
		margin-right: 6px;
		display: inline-block;
		width: 16px;
		height: 14px;
		img{
			width: 100%;
		}
	}
	.black {
		.themeBlack();

		.contract-assets {
			width: 100%;
			height: 62px;
			background-color: @navBgColor;
			.flex-box();
			padding: 0 20px;
			position: relative;
			// margin-top: 1px;
			box-shadow: 0 4px 12px 0 rgba(9, 13, 23, 0.4);

			.title {
				// width: 300px;
				margin-right: 40px;
				height: 62px;
				font-size: 14px;
				color: @darkFontColor;
				flex: 0 0 auto;
				.flex-box();
				cursor: pointer;
				align-items: center;

				i {
					display: inline-block;
					margin-right: 10px;
					font-size: 12px;
					transform: scale(0.8);
				}

				&.show-more {
					i {
						transform: rotate(-180deg) scale(0.8);
					}
				}
			}

			.content {
				width: 100%;
				height: 100%;
				.flex-box();
			}
			.center {
				.value {
					text-align: center;
				}
			}

			.info {
				width: 100%;
				height: 100%;
				.flex-box();
				align-items: center;
				justify-content: space-between;
			}

			.info-item {
				min-width: 70px;
				flex: 0 0 auto;
			}

			.label {
				color: @middleFontColor;
				font-size: 12px;

				.tip {
					padding: 0;
					color: @middleFontColor;
				}
			}

			.value {
				color: @darkFontColor;
				font-size: 14px;

				&.green {
					color: @tradeGreen;
				}

				&.red {
					color: @tradeRed;
				}
			}

			.transfer {
				// width: 150px;
				height: 62px;
				margin-left: 40px;
				.flex-box();
				justify-content: flex-end;
				align-items: center;
				text-align: right;
				flex: 0 0 auto;
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

		.contract-assets {
			width: 100%;
			height: 62px;
			background-color: @navBgColor;
			.flex-box();
			padding: 0 20px;
			position: relative;
			margin-top: 1px;
			box-shadow: 0 4px 12px 0 #ecf0f7;

			.title {
				// width: 300px;
				height: 62px;
				margin-right: 40px;
				font-size: 14px;
				color: @darkFontColor;
				flex: 0 0 auto;
				.flex-box();
				align-items: center;
				cursor: pointer;

				i {
					display: inline-block;
					margin-right: 10px;
					font-size: 12px;
					transform: scale(0.8);
				}

				&.show-more {
					i {
						transform: rotate(-180deg) scale(0.8);
					}
				}
			}

			.content {
				width: 100%;
				height: 100%;
				.flex-box();
			}
			.center {
				.value {
					text-align: center;
				}
			}

			.info {
				width: 100%;
				height: 100%;
				.flex-box();
				align-items: center;
				justify-content: space-between;
			}

			.info-item {
				min-width: 70px;
				flex: 0 0 auto;
			}

			.label {
				color: @lightFontColor;
				font-size: 12px;

				.tip {
					padding: 0;
					color: @lightFontColor;
				}
			}

			.value {
				color: @darkFontColor;
				font-size: 14px;

				&.green {
					color: @tradeGreen;
				}

				&.red {
					color: @tradeRed;
				}
			}

			.transfer {
				// width: 150px;
				height: 62px;
				margin-left: 40px;
				.flex-box();
				justify-content: flex-end;
				align-items: center;
				text-align: right;
				flex: 0 0 auto;
			}

			.buyColor {
				color: @tradeGreen !important;
			}

			.sellColor {
				color: @tradeRed !important;
			}
		}
	}
	@media screen and (max-width: 1440px) {
		.title-assets-text{
			margin-right: 20px;
		}
		.title{
			margin-right: 20px !important;
		}
		.transfer{
			margin-left: 20px !important;
		}
	}
</style>
