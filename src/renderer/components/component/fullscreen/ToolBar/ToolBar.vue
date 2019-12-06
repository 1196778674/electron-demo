<template>
	<div class="toolbar-content" v-if="fullIsToolBarShow">
		<!-- <div @click="hideToolBar" id="spread-button" class="spread-button"
		     :class="isToFooterPositon? 'spread-button-footer' : 'spread-button-fixed'" v-if="fullIsToolBarShow">
			<span :class="{ rotate: fullIsToolBarShow }"></span>
		</div> -->
		<!-- 上部分按钮 -->
		<div class="top">
			<el-tooltip placement="left">
				<div slot="content">{{ $t(`message.toolbar.userCenter`) }}</div>
				<div class="icon-item" @click="itemClick('userCenter')">
					<span class="HyIconFont hyicon-wallet"></span>
				</div>
			</el-tooltip>

			<el-tooltip placement="left">
				<div slot="content">{{ $t(`message.toolbar.announcement`) }}</div>
				<div class="icon-item" @click="itemClick('announcement')">
					<span class="HyIconFont hyicon-notice"></span>
					<tool-bar-announcement
						v-model="announcement"
					></tool-bar-announcement>
				</div>
			</el-tooltip>

			<el-tooltip placement="left">
				<div slot="content">{{ $t(`message.toolbar.jsq`) }}</div>
				<div class="icon-item" @click="itemClick('calculator')">
					<span class="HyIconFont hyicon-jisuanqi1"></span>
				</div>
			</el-tooltip>
		</div>

		<!-- 下部分按钮 -->
		<div :class="isToFooterPositon? 'bottom-footer' : 'bottom'">
			<div
				class="icon-item"
				@mouseenter="ewmHover(true)"
				@mouseleave="ewmHover(false)"
			>
				<span class="HyIconFont hyicon-qr_code"></span>
				<tool-bar-ewm :is-show="ewm"></tool-bar-ewm>
			</div>

			<el-tooltip placement="left">
				<div slot="content">{{ $t(`message.toolbar.hyzn`) }}</div>
				<div class="icon-item" @click="itemClick('help')">
					<span class="HyIconFont hyicon-wenhao"></span>
				</div>
			</el-tooltip>

			<el-tooltip placement="left">
				<div slot="content">{{ $t(`message.toolbar.lxkf`) }}</div>
				<div class="icon-item" @click="itemClick('lxkf')">
					<span class="HyIconFont hyicon-lianxikefu"></span>
				</div>
			</el-tooltip>

			<back-top-component></back-top-component>
		</div>
	</div>
</template>


<script>
  // 计算器
  import ApiConfig from '@/config/api.config'
  import ToolBarAnnouncement from './ToolBarAnnouncement'
  import ToolBarEwm from './ToolBarEwm'

  import {systemMixin, userMixin} from '@/mixins'
  import _ from 'lodash'
  import BackTopComponent from '@/components/BackTopComponent/BackTopComponent'
  // 底部高度
  let footerHeight = 0

  export default {
    name: 'ToolBar',
    mixins: [systemMixin, userMixin],
    components: {
      BackTopComponent,
      ToolBarAnnouncement,
      ToolBarEwm
    },
    data() {
      return {
        // 公告是否显示
        announcement: false,
        // 二维码是否显示
        ewm: false,
        // 是否显示客服
        kfShow: false,
        apiConfig: ApiConfig,
        // 是否到底
        isToFooterPositon: false
      }
    },
    watch: {
      // screenWidth() {
      //   if (this.barHeight) {
      //     this.getToolIsToFooterPoitions()
      //   }
      // },
      // screenHeight() {
      //   if (this.barHeight) {
      //     this.getToolIsToFooterPoitions()
      //   }
      // },
      // fullIsToolBarShow: {
      //   handler(val) {
      //     if (!process.client) return
      //     let throttle = _.throttle(this.getToolIsToFooterPoitions, 100)
      //     if (val) {
      //       document.addEventListener('scroll', throttle)
      //     } else {
      //       this.setFullIsToolBarShow(false)
      //       document.removeEventListener('scroll', throttle)
      //     }
      //   },
      //   immediate: true
      // }
    },
    methods: {
      // // 判断是否显示
      // judgeThisIsShow() {
      //   if (this.screenWidth < 1920) {
      //     this.setFullIsToolBarShow(false)
      //   }
      // },
      // 隐藏 toolbar
      hideToolBar() {
        this.setFullIsToolBarShow(false)
      },
      // 每个图标的点击事件
      itemClick(type) {
        let typeMap = {
          // 个人账户
          userCenter: () => {
            if (!this.userInfo) {
              location.href = `${this.apiConfig.mainDomain}manage/login?position=usdt`
              return
            }
            location.href = this.apiConfig.userDomain + 'account'
          },
          // 公告
          announcement: () => (this.announcement = true),
          // 计算器
          calculator: () => {
            this.setCalculatorIsShow(true)
          },
          // 合约指南
          help: () => {
            this.$router.push('/handbook/usdtContract#1')
          },
          // 联系客服
          lxkf: () => {
            this.kfShow = !this.kfShow
            this.showKf()
          }
        }
        typeMap[type]()
      },
      // 二维码鼠标滑过事件
      ewmHover(status) {
        this.ewm = status
      },
      // 显示客服
      showKf() {
        if (this.kfShow) {
          if (!this.once) {
            (function (a, h, c, b, f, g) {
              a['UdeskApiObject'] = f
              a[f] =
                a[f] ||
                function () {
                  (a[f].d = a[f].d || []).push(arguments)
                }
              g = h.createElement(c)
              g.async = 1
              g.charset = 'utf-8'
              g.src = b
              c = h.getElementsByTagName(c)[0]
              c.parentNode.insertBefore(g, c)
            })(
              window,
              document,
              'script',
              '//assets-cli.udesk.cn/im_client/js/udeskApi.js',
              'ud'
            )
            ud({
              code: '22ab1akk',
              link: '//58btc.udesk.cn/im_client/?web_plugin_id=38854'
            })
            this.once = true
          } else {
            document.getElementById('udesk_container').style.display = 'block'
            document.getElementById('udesk_btn').style.display = 'block'
          }
        } else {
          document.getElementById('udesk_container').style.display =
            'none !important'
          document.getElementById('udesk_btn').style.display = 'none'
        }
      },
      // //  适配 footer 底部
      // getToolIsToFooterPoitions() {
      //   if (!this.fullIsToolBarShow) return
      //   !footerHeight && (footerHeight = document.getElementById('parent-footer').offsetHeight)
      //   let scrollTop = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop
      //   let scrollHeight = document.documentElement.scrollHeight
      //   let height = scrollHeight - scrollTop - innerHeight
      //   this.isToFooterPositon = height < footerHeight
      // }
    },
	  mounted() {
      // this.judgeThisIsShow()
    }
  }
</script>

<style lang="less" scoped>
	 @import (reference) '~@/assets/css/index';


	.toolbar-content {
		z-index: 8000;
		width: 36px;
		flex: 0 0 36px;
		position: relative;
		margin-left: 2px;

		.icon-item {
			position: relative;
			width: 36px;
			height: 36px;
			cursor: pointer;
			text-align: center;
			line-height: 36px;
		}
	}

	.spread-button {
		transform: translateY(-50%);
		right: 30px;
		width: 6px;
		height: 60px;
		cursor: pointer;
		text-align: center;
		border-radius: 2px;
		z-index: 10;
		box-sizing: border-box;

		span {
			position: absolute;
			top: 50%;
			transform: translateY(-50%);
			width: 6px;
			height: 3px;
			border-top: 3px solid transparent;
			border-bottom: 3px solid transparent;
			left: 2px;
		}
	}

	.spread-button-fixed {
		position: fixed;
		top: 50%;
	}

	.spread-button-footer {
		position: absolute;
		bottom: 348px;
	}

	.top {
		position: fixed;
	}

	.bottom {
		position: fixed;
		bottom: 20px;
	}

	.bottom-footer {
		position: absolute;
		bottom: 20px;
	}

	.black {
		.themeBlack();


		.spread-button {
			background: @auxiliaryColor;

			span {
				border-left: 3px solid @darkFontColor;
			}

			&:hover {
				background: @inputBorderActiveColor;

				span {
					border-right-color: @fontActiveColor;
				}
			}
		}

		.toolbar-content {
			background-color: @navBgColor;

			.icon-item {
				color: @middleFontColor;

				&:hover {
					background: @inputColor;
				}
			}

			.item-active {
				background-color: @inputColor !important;
			}
		}
	}

	.white {
		.themeWhite();


		.spread-button {
			background: @navBgColor;
			border: 1px solid #7e9efd;

			span {
				border-left: 3px solid @darkFontColor;
				left: 1px;
			}
		}

		.toolbar-content {
			background-color: @navBgColor;

			.icon-item {
				color: @lightFontColor;

				&:hover {
					background: @inputColor;
				}
			}

			.item-active {
				background-color: @inputColor !important;
			}
		}
	}
</style>
