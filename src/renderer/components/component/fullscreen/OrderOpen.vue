<template>
	<!-- 下单区开仓 -->
	<div class="order-buy">
		<div class="btns">
			<!-- <v-button-group
				size="small"
				v-model="groupValue"
				:group="[
					{value: 1, key: 'left'},
					{value: 2, key: 'middle'},
					{value: 3, key: 'right'}
				]"
			>
				<v-tip
					:label="$t('message.createdEntrust.limit')"
					:tipText="$t('message.usdtTips.price')"
					slot="left"
					placement="top"
				></v-tip>
				<v-tip
					:label="$t('message.createdEntrust.market')"
					:tipText="$t('message.createdEntrust.marketInfo')"
					slot="middle"
					placement="top"
				></v-tip>
        <v-tip
					:label="$t('message.version3.entrust')"
					:tipText="$t('message.usdtTips.planEntrust')"
					slot="right"
					placement="top"
				></v-tip>
			</v-button-group> -->
			<v-select
				class="leverage-select"
				:label="$t('message.createdEntrust.A_leverage')"
				:tipText="$t('message.createdEntrust.leverageInfo')"
				v-model="leverageValue"
				:select-data="leverageData"
				content-key="name"
				value-key="value"
				:tip="true"
				type="transverse"
			></v-select>
		</div>
		<div class="content-warp">
			<!-- <market-and-price v-if="tabValue === 1" :leverageValue="leverageValue.value"></market-and-price> -->
			<!-- <OrderOpenEntrust></OrderOpenEntrust> -->
			<component
				:is="currentComponent"
				:leverageValue="leverageValue.value"
				:tabValue="tabValue"
			>
			</component>
    </div>
	</div>
</template>

<script>
  import MarketAndPrice from './OrderOpenMarketAndPrice'
  import OrderOpenEntrust from './OrderOpenEntrust'
  import { dataMixin, systemMixin, userMixin } from '@/mixins'
  import { ALERT_PROMPT_MARKET } from '@/data/noTip'

  export default {
    name: 'OrderBuy',
    mixins: [systemMixin, dataMixin, userMixin],
    components: {
      OrderOpenEntrust,
      MarketAndPrice
    },
    props: {
      tabValue: {
        type: Number
      }
    },
    data() {
      return {
        // 杠杆数据
        leverageData: [
          { name: '2X', value: 2 },
          { name: '3X', value: 3 },
          { name: '5X', value: 5 },
          { name: '10X', value: 10 },
          { name: '20X', value: 20 },
          { name: '33X', value: 33 },
          { name: '50X', value: 50 },
          { name: '100X', value: 100 }
        ],
        // 杠杆的值
        leverageValue: { name: '100X', value: 100 }
      }
		},
		computed: {
			// 当前使用的动态组件
			currentComponent() {
				let componentMap = {
					1: MarketAndPrice,
					3: OrderOpenEntrust
				};
				return componentMap[this.tabValue]
			},
		},
    watch: {
      groupValue(value) {
        if ( value === 2 ) {
          // 弹框不在提示说明去 alert 组件找
          if ( !this.promptBoxShowInfo[ALERT_PROMPT_MARKET] ) {
            this.$alert({
              type: 'prompt',
              content: this.$t('message.trade.market'),
              contentType: 2,
              promptHTMLString: true,
              prompt: this.$t('message.usdtTips.markekPrice', {
                color: this.themeColor.tradeRed
              }),
              isShowCancel: false
            })
          }
        }
      },
      'leverageValue.value'(value) {
        if ( this.tabValue === 1 ) {
          this.$notify({
            title: this.$t('message.usdtTips.leverageTip'),
            type: 'success'
          })
        }
      }
    }
  }
</script>

<style lang="less" scoped>
	@import (reference) '~@/assets/css/index';

	/* 通用 */
	.content-warp {
		width: 100%;
		margin-top: 10px;
	}
	.btns {
		margin-top: 10px;
		/* .flex-box();
		align-items: center;
		justify-content: space-between; */

		.leverage-select {
			margin-bottom: 20px;
			width: auto !important;
			/deep/.label{
				width: 30px;
				.el-tooltip{
					padding: 0;
				}
			}
			/deep/.select-box{
				.default{
					margin-left: 7px;
				}
			}
		}
	}
	.order-buy {
		width: 100%;
		// margin-top: 9px;
	}

	/* 黑版 */
	.black {
		.themeBlack();
		.order-buy {
			/deep/ input[disabled] {
				background-color: @inputColor;
			}
		}
	}

	/* 白版 */
	.white {
		.themeWhite();
		.order-buy {
			/deep/ input[disabled] {
				background-color: @inputColor;
			}
		}
	}
</style>

