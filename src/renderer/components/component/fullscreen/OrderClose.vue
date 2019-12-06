<template>
	<!-- 下单区平仓 -->
	<div class="order-buy">
		<!--	市价限价切换按钮	-->
		<!-- <div class="btns">
			<v-button-group
				size="small"
				v-model="groupValue"
				:group="[{value: 1, key: 'left'}, {value: 2, key: 'right'}]"
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
					slot="right"
					placement="top"
				></v-tip>
			</v-button-group>
		</div> -->
		<div class="content-warp">
			<order-close-market-and-price></order-close-market-and-price>
      <!-- <component
	      :is="currentComponent"
	      :groupValue="groupValue"
      ></component> -->
    </div>
	</div>
</template>

<script>
  import OrderCloseMarketAndPrice from './OrderCloseMarketAndPrice'
  import { dataMixin, systemMixin, userMixin } from '@/mixins'
  import { ALERT_PROMPT_MARKET } from '@/data/noTip'

  export default {
    name: 'OrderBuy',
    mixins: [systemMixin, dataMixin, userMixin],
    props: {
      // 开仓平仓切换值  1: 开仓  2: 平仓
      tableValue: Number
    },
    components: {
      OrderCloseMarketAndPrice
    },
    data() {
      return {
        groupValue: 1
      }
    },
    // computed: {
    //   // 当前使用的组件
    //   currentComponent() {
    //     let componentMap = {
    //       1: OrderCloseMarketAndPrice,
    //       2: OrderCloseMarketAndPrice
    //     }
    //     return componentMap[this.groupValue]
    //   }
    // },
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
      }
    }
  }
</script>

<style
	lang="less"
	scoped
>
	 @import (reference) '~@/assets/css/index';
	 /* 通用 */
	 .content-warp {
		 margin-top: 10px;
	 }
	 .btns {
		 margin-top: 10px;
		 .flex-box();
		 align-items: center;
		 justify-content: space-between;

		 .leverage-select {
			 width: auto !important;
		 }
	 }
	 .order-buy {
		 margin-top: 9px;
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

