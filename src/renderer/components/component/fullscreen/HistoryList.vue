<template>
  <div
	  class="history-list-order-book"
  >
	  <!-- :class="{ 'margin-left': screenWidth >= 1920 }" -->
    <div class="title">
      {{ $t('message.version3.historyPrice') }}
    </div>
    <div class="list">
      <div class="table">
        <div class="tr">
          <div class="left th">
            {{ $t('message.historyList.date') }}
          </div>
          <div class="th">
            {{ $t('message.historyList.price') }}
          </div>
          <div class="th">
            {{ $t('message.historyList.size') }}
          </div>
        </div>
      </div>
      <EasyScrollbar
	      :barOption="option"
	      :style="{ height: barHeight }"
	      v-if="list.length"
      >
        <div class="wrapper">
          <div class="table">
            <div class="tbody">
              <div class="tr" v-for="item in listData" :key="item.id">
                <div class="left td">
                  <span v-if="item.createdDate">{{
                   Number(item.createdDate) | timeFormat('HMS')
                  }}</span>
                  <span v-else>-</span>
                </div>
                <div class="td">
                  <span
	                  class="type1"
	                  :class="item.side === 1 ? 'green' : 'red'"
                  >{{
                      item.price
                        ? item.price
                        : '-' | splitFormat(figure.indexPriceFloat)
                    }}</span
                  >
                </div>
                <div class="td">
                  <span :class="item.side === 1 ? 'green' : 'red'">{{
                    item.size ? item.size.toFixed(0) : '-'
                  }}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </EasyScrollbar>
    </div>
  </div>
</template>

<script>
import { systemMixin, dataMixin } from '@/mixins'
export default {
  name: 'HistoryListOrderBook',
  mixins: [systemMixin, dataMixin],
  data() {
    return {
      // 列表数据
      list: [],
      // 滚动条高度
      barHeight: "calc(100% - 72px)"
    }
  },
  watch: {
    '$store.state.market.historyList': {
      handler: function(val, oldVal) {
        this.list = val
      },
      immediate: true
    }
  },
  computed: {
    // 取 100 条数据
    listData() {
      return this.list.filter((item, index) => index < 100)
    },
    // 配置
    option() {
      return {
        barColor: this.themeColor.lineColor,
        barWidth: 6,
        railColor: this.themeColor.navBgColor,
        railWidth: 6,
        barMarginRight: 0,
        barOpacityMin: 0.3,
        zIndex: '200',
        autohidemode: true,
        horizrailenabled: false
      }
    }
  }

}
</script>

<style lang="less" scoped>
@import (reference) '~@/assets/css/index';
.black {
	.themeBlack();
	.history-list-order-book {
		height: 33%;
		width: 300px;
		margin: 0;
		padding-bottom: 10px;
		background: @navBgColor;
		overflow-y: hidden;
		.scroll-bar();
		.title {
			height: 36px;
			padding: 0 20px;
			border-bottom: 1px solid @lineColor;
			border-top: 1px solid @lineColor;
			color: @darkFontColor;
			font-size: 14px;
			line-height: 36px;
		}
		.list {
			position: relative;
			height: 100%;
			padding-left: 20px;
			.table {
				width: 100%;
				border-collapse: collapse;
				border-spacing: 0;
				padding-right: 20px;
				.tr {
					height: 36px;
					color: @middleFontColor;
					.flex-box();
					width: 100%;
					.th {
						font-size: 12px;
						text-align: right;
						line-height: 36px;
						width: 32%;
						&.left {
							min-width: 40px;
							text-align: left;
						}
					}
				}
				.tbody {
					.tr {
						height: 22px;
						.td {
							font-size: 12px;
							text-align: right;
							font-weight: 500;
						}
					}
				}
				span {
					display: inline-block;
					width: 75px;
					color: @middleFontColor;
				}
			}
			/deep/.easy-scrollbar__wrap{
				height: 100%;
				.el-scrollbar__view{
					height: 100%;
				}
			}
			.wrapper {
				width: 100%;
				border-collapse: collapse;
				border-spacing: 0;
				height: 100%;
				.table {
					width: 100%;
					height: 100%;
				}
				.tbody {
					width: 100%;
					height: 100%;
					.tr {
						height: 26px;
						.td {
							font-size: 12px;
							text-align: right;
							font-weight: 500;
							width: 32%;
							&.left {
								min-width: 40px;
								text-align: left;
							}
						}
					}
					.red {
						color: @tradeRed;
					}
					.green {
						color: @tradeGreen;
					}
				}
				span {
					display: inline-block;
					width: 75px;
					color: @darkFontColor;
				}
			}
		}
	}
}

.white {
	.themeWhite();
	.history-list-order-book {
		height: 33%;
		width: 300px;
		margin: 0;
		padding-bottom: 10px;
		background: @navBgColor;
		overflow-y: hidden;
		.scroll-bar();
		.title {
			height: 36px;
			padding: 0 20px;
			border-bottom: 1px solid @lineColor;
			border-top: 1px solid @lineColor;
			color: @darkFontColor;
			font-size: 14px;
			line-height: 36px;
		}
		.list {
			position: relative;
			height: 100%;
			padding-left: 20px;
			.table {
				width: 100%;
				border-collapse: collapse;
				border-spacing: 0;
				padding-right: 20px;
				.tr {
					height: 36px;
					color: @middleFontColor;
					.flex-box();
					width: 100%;
					.th {
						font-size: 12px;
						text-align: right;
						line-height: 36px;
						width: 32%;
						&.left {
							min-width: 40px;
							text-align: left;
						}
					}
				}
				.tbody {
					.tr {
						height: 22px;
						.td {
							font-size: 12px;
							text-align: right;
							font-weight: 500;
						}
					}
				}
				span {
					display: inline-block;
					width: 75px;
					color: @middleFontColor;
				}
			}
			/deep/.easy-scrollbar__wrap{
				height: 100%;
				.el-scrollbar__view{
					height: 100%;
				}
			}
			.wrapper {
				width: 100%;
				border-collapse: collapse;
				border-spacing: 0;
				height: 100%;
				.table {
					width: 100%;
					height: 100%;
				}
				.tbody {
					width: 100%;
					height: 100%;
					.tr {
						height: 26px;
						.td {
							font-size: 12px;
							text-align: right;
							font-weight: 500;
							width: 32%;
							&.left {
								min-width: 40px;
								text-align: left;
							}
						}
					}
					.red {
						color: @tradeRed;
					}
					.green {
						color: @tradeGreen;
					}
				}
				span {
					display: inline-block;
					width: 75px;
					color: @darkFontColor;
				}
			}
		}
	}
}

//  @media screen and (max-width: 1440px) {
// 	 .list {
// 		 height: 648px !important;
// 	 }
// 	 .wrapper {
// 		 height: 580px !important;
// 	 }
//  }
//  @media screen and (max-height: 850px) {
// 	 .list {
// 		 height: 607px !important;
// 	 }
// 	 .wrapper {
// 		 height: 540px !important;
// 	 }
//  }
//  @media screen and (max-height: 750px) {
// 	 .list {
// 		 height: 557px !important;
// 	 }
// 	 .wrapper {
// 		 height: 490px !important;
// 	 }
//  }
</style>
