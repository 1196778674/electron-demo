<template>
	<div :class="{ active }" class="menu-item" @click="change">
		<p class="product">
      <span class="cn" v-if="locale === 'cn' && contractInfo.nameZH">
				{{
					contractInfo.nameZH
				}}
			</span>
			<span>{{ contractInfo.name }}</span>
		</p>
		<div ref="ratio" class="ratio">
			<p :class="{ red: thisTicker.change < 0 }">
				{{ thisTicker.last | splitFormat(figure.indexPriceFloat) || 0 }}
			</p>
			<p :class="{ red: thisTicker.change < 0 }">
				{{ thisTicker.change || 0 }}%
			</p>
		</div>
		<div class="label">
			<p>
				{{ $t('message.tradeList.latestPrice') }}
			</p>
			<p>{{ $t('message.tradeList.gains') }}</p>
		</div>
	</div>
</template>

<script>
  import {dataMixin, systemMixin} from '@/mixins'

  export default {
    name: 'TradeMenuItem',
    mixins: [dataMixin, systemMixin],
    props: {
      contractInfo: {
        type: Object
      }
    },
    computed: {
      // 当前 ticker 数据
      thisTicker() {
        return this.$store.state.market.tickers[this.contractInfo.id] || {}
      },
      // 小数位数要求
      figure() {
        return this.contractInfo.contractParam
      },
      // 是否是选中
      active() {
        return this.currentContract.id == this.contractInfo.id
      }
    },
    methods: {
      // 菜单点击事件---切换
      change() {
        this.setCurrentContract(this.contractInfo)
        this.$router.push('/fullscreen/' + this.contractInfo.id)
      }
    }
  }
</script>

<style lang="less" scoped="">
	@import '../../assets/css/index';


	.menu-item {
		height: 76px;
		padding: 8px 20px;
		cursor: pointer;
		width: 100%;

		.product {
			font-size: 16px;

			.cn {
				margin-right: 4px;
			}
		}

		.ratio {
			width: 100%;
			.flex-box();
			justify-content: space-between;

			p {
				font-size: 14px;
			}
		}

		.label {
			width: 100%;
			.flex-box();
			justify-content: space-between;

			p {
				line-height: 12px;
				font-size: 12px;
			}
		}
	}

	.black {
		.themeBlack();

		.menu-item {
			border-bottom: 1px solid @lineColor;

			&:hover:not(.active) {
				background-color: #171F34;
			}

			.product {
				color: @darkFontColor;
			}

			.ratio {

				p {
					color: @tradeGreen;
				}

				.red {
					color: @tradeRed;
				}
			}

			.label {

				p {
					color: @middleFontColor;
				}
			}

			&.active {
				background-color: #19233C;

				.product {
					color: @fontActiveColor;
				}

				.label {
					color: @fontActiveColor;
				}
			}
		}
	}

	.white {
		.themeWhite();

		.menu-item {
			border-bottom: 1px solid @lineColor;

			&:hover:not(.active) {
				box-shadow: 0 0 8px 0 rgba(207, 217, 255, 0.50);
			}

			.product {
				color: @darkFontColor;
			}

			.ratio {

				p {
					color: @tradeGreen;
				}

				.red {
					color: @tradeRed;
				}
			}

			.label {

				p {
					color: @middleFontColor;
				}
			}

			&.active {
				box-shadow: 0 0 14px 0 rgba(207, 217, 255, 0.50);

				.product {
					color: @iconColor;
				}
			}
		}
	}
</style>
