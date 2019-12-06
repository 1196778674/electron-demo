<template>
	<div class="tv-chart-warp">
		<div id="tv_chart_container_full"></div>
    <!-- 止盈止损弹框 -->
		<stop-loss-layer-box
			:layer-box-data="layerBoxData"
			:box-type="stopLossType"
      source="fullKline"
			v-model="showStopLossLayerBox"
			@resetList="alertcallback"
		></stop-loss-layer-box>
	</div>
</template>

<script>
  import DataFeeds from '@/data/datafeed'
  import CreateSub from '@/data/sub'
  import Utils from '@/utils/utils'
  import {dataMixin, systemMixin, userMixin} from '@/mixins'
  import swapsApi from '@/api/swapsApi'
  import StopLossLayerBox from './ListTable/StopLossLayerBox'
  import { DELETE_STOPLOSSLINE } from '@/data/noTip'
  import apiConfig from '@/myConfig/api.config'

  export default {
    name: 'KLineView',
    mixins: [systemMixin, dataMixin, userMixin],
    data() {
      return {
        // K线实例
        widget: null,
        // 订阅数据
        sub: CreateSub(this.$store),
        // 路由切换开关
        routeChangeSwitch: false,
	      // 主题切换数组
	      themeList: [],
	      // 是否切换过主题
        isThemeChange: false,
        // k线的iframe
        tvFullIframe: null,
        // 轮训仓位
        positiontimer: null,
        // 多单持仓均价
        morePosition: null,
        // 多单可用
        moreAvailable: null,
        // 空单持仓均价
        lessPosition: null,
        // 空单可用
        lessAvailable: null,
        // 是否滑动过
        cross: false,
        // 防抖处理
        timer: null,
        // 存储画过线的名字
        linesNameArr: null,
        // 是否第一次请求数据
        isFIrstData: false,
        moreObjData: {},
        lessObjData: {},
        position: null, // 多仓均线
        position1: null, // 空仓均线
        layerBoxData: {},
        // 止盈止损弹框
        showStopLossLayerBox: false,
        // 止盈止损类型
        stopLossType: 1
      }
    },
    components: {
      StopLossLayerBox
    },
    computed: {
      indexPriceFloat(){
        return this.figure.indexPriceFloat || 4
      },
      // 黑色配置
      themeBlackOption() {
        return {
          baseUrl: 'base.css',
          bgColor: '#0e1524',
          horzGridPropertiesColor: '#192134',
          vertGridPropertiesColor: '#192134',
          scalesPropertiesTextColor: '#506488',
          crossHairPropertiesColor: '#CBD7F0',
          upColor: this.themeColor.tradeGreen,
          downColor: this.themeColor.tradeRed,
          borderColor: '#192134'
        }
      },
      // 白色配置
      themeWhiteOption() {
        return {
          baseUrl: 'base-white.css',
          bgColor: '#fff',
          horzGridPropertiesColor: '#f5f6fa',
          vertGridPropertiesColor: '#f5f6fa',
          scalesPropertiesTextColor: '#24324c',
          crossHairPropertiesColor: '#506488',
          upColor: this.themeColor.tradeGreen,
          downColor: this.themeColor.tradeRed,
          borderColor: '#ECF1FA'
        }
      },
      // 当前使用的主题配置
      currentThemeOptions() {
        if (this.theme === 'white') {
          return this.themeWhiteOption
        } else {
          return this.themeBlackOption
        }
      },
      // 背景主题
      chartTheme() {
        if (this.theme === 'white') {
          return 'Light'
        } else {
          return 'Dark'
        }
      },
      // K线需要的语言
      KLineLocale() {
        let lang = {
          cn: 'zh'
        }
        return lang[this.locale] || this.locale
      },
      // k 线字典
      kLineType() {
        return this.$dictionary.kLineType(this.$i18n)
      },
      //k 线字典更多
      kLineTypeMore() {
        return this.$dictionary.kLineTypeMore(this.$i18n)
      }
    },
    watch: {
      '$store.state.keyOrder': {
        handler(v){
          if (process.client){
            if (v) {
              window.sessionStorage.setItem('58_space', v)
              this.tvFullIframe && this.tvFullIframe.sessionStorage.setItem('58_space', v)
            } else {
              window.sessionStorage.setItem('58_space', v)
              this.tvFullIframe && this.tvFullIframe.sessionStorage.setItem('58_space', v)
            }
          }
        },
        immediate: true
      },
      // 监听 socket 的链接状态
      socketConnectState(val) {
        if (val && this.KLineIsInitFull) {
          setTimeout(() => {
            this.sub.subK(this.currentContract.id)
          }, 1000)
        }
      },
      // 监听 K 线的配置重新订阅
      // kTimeOptions() {
      //   // 必须在 k 线初始化完成后才可以重新订阅,定时器保证缓存数据先追加
      //   if (this.KLineIsInitFull && this.socketConnectState) {
      //     setTimeout(() => {
      //       this.sub.subK(this.currentContract.id)
      //     }, 1000)
      //   }
      // },
      'currentContract.id'() {
        if(this.KLineIsInitFull) {
          // 切换合约时,刷新 K 线
          this.widget.setSymbol(this.currentContract.id + '', this.kTimeStorage || '5')
        }
      },
      // 当前语言切换
      locale() {
        this.themeList = []
        this.reInit()
      },
      // 切换主题
      theme() {
        if (this.widget && this.KLineIsInitFull) {
					this.changeKLineTheme()
	        this.isThemeChange = false
        }else {
          this.isThemeChange = true
        }
      },
	    // 监听K线初始化,如果切换了主题  那么重新加载主题
      KLineIsInitFull() {
				if (this.isThemeChange) {
					this.changeKLineTheme()
					this.isThemeChange = false
				}
      },
      morePosition (val, old) {
        if (val && this.widget){
          if (!this.position){
            this.position = this.drawPosition(this.widget.chart(), this.$t('message.full.moreAvePrice'), this.morePosition, 1)
          } else {
            this.position = this.drawPosition(this.widget.chart(), this.$t('message.full.moreAvePrice'), this.morePosition, 1)
            this.setOrderTitle(val, this.position)
          }
        } else if (this.widget) {
          old && this.setOrderTitle(old, this.position)
          this.widget.chart().removeEntity(this.position['_line']['_id'])
          // this.linesNameArr = this.initHistrotyLines()
        }
      },
      lessPosition (val,old) {
        if (val && this.widget) {
          if (!this.position1) {
            this.position1 = this.drawPosition(this.widget.chart(), this.$t('message.full.lessAvePrice'), this.lessPosition, 2)
          } else {
            this.position1 = this.drawPosition(this.widget.chart(), this.$t('message.full.lessAvePrice'), this.lessPosition, 2)
            this.setOrderTitle(val, this.position1)
          }
        } else if (this.widget) {
          old && this.setOrderTitle(old, this.position1)
          this.widget.chart().removeEntity(this.position1['_line']['_id'])
          // this.linesNameArr = this.initHistrotyLines()
        }
      },
      isFIrstData (val) {
        if(val){
          this.linesNameArr = this.initHistrotyLines()
        }
      },
      '$route': {
        handler () {
          this.position && this.widget.chart().removeEntity(this.position['_line']['_id'])
          this.position1 && this.widget.chart().removeEntity(this.position1['_line']['_id'])
          this.getCurrencyPosition()
        },
        deep: true
      }
    },
    methods: {
      // 获取仓位
      getCurrencyPosition () {
        if (!this.userInfo){
					return
				}
        swapsApi.getPositionList(this.$route.params.id)
          .then(res => {
            if (res.data && res.data.positionTotal && res.data.positionTotal.positionList && res.data.positionTotal.positionList.length){
                let positionList = res.data.positionTotal.positionList
                this.morePosition = null
                this.moreAvailable = null
                this.moreObjData = {}
                this.lessPosition = null
                this.lessAvailable = null
                this.lessObjData = {}
                positionList.map(item => {
                  if(item.side === 1) {
                    // 多单持仓均价
                    this.morePosition = this.$filter.splitFormat(item.entryPrice, this.indexPriceFloat)
                    this.moreObjData = item
                    // 多单可用
                    this.moreAvailable = item.availablePositionQty
                  } else {
                    // 空单持仓均价
                    this.lessPosition = this.$filter.splitFormat(item.entryPrice, this.indexPriceFloat)
                    this.lessObjData = item
                    // 空单可用
                    this.lessAvailable = item.availablePositionQty
                  }
                })
            } else {
              this.morePosition = null
                this.moreAvailable = null
                this.moreObjData = {}
                this.lessPosition = null
                this.lessAvailable = null
                this.lessObjData = {}
            }
            if (!this.isFIrstData) {
              this.isFIrstData = true
            }
          })
      },
      // 切换 k 线主题
      changeKLineTheme() {
        if (!this.themeList.includes(this.chartTheme)) {
          this.themeList.push(this.chartTheme)
          this.widget.addCustomCSSFile(this.currentThemeOptions.baseUrl)
        }
        this.widget.changeTheme(this.chartTheme)
        this.widget.applyOverrides({
          volumePaneSize: 'medium',
          'paneProperties.background': this.currentThemeOptions.bgColor, // 整个背景
          'paneProperties.horzGridProperties.color': this.currentThemeOptions.horzGridPropertiesColor, // grid 横线
          'paneProperties.vertGridProperties.color': this.currentThemeOptions.vertGridPropertiesColor, // grid 竖线
          'paneProperties.crossHairProperties.color': this.currentThemeOptions.crossHairPropertiesColor, // 交叉轴
          'paneProperties.topMargin': 30,
          'paneProperties.legendProperties.showSeriesTitle': false, // 显示币种时间交易所
          // // Candles styles
          'mainSeriesProperties.candleStyle.drawBorder': true,
          'mainSeriesProperties.candleStyle.borderUpColor': this.currentThemeOptions.upColor, // 蜡烛边框 也是开高低收的颜色
          'mainSeriesProperties.candleStyle.borderDownColor': this.currentThemeOptions.downColor, // 蜡烛边框
          'mainSeriesProperties.candleStyle.upColor': this.currentThemeOptions.upColor, // 蜡烛 升
          'mainSeriesProperties.candleStyle.downColor': this.currentThemeOptions.downColor, // 蜡烛 降
          'mainSeriesProperties.candleStyle.wickUpColor': this.currentThemeOptions.upColor, // 蜡烛成交上线颜色
          'mainSeriesProperties.candleStyle.wickDownColor': this.currentThemeOptions.downColor, // 蜡烛成交下颜色
          'mainSeriesProperties.candleStyle.barColorsOnPrevClose': false,
          'paneProperties.legendProperties.showLegend': false,
          'scalesProperties.lineColor': this.currentThemeOptions.borderColor, // 内部 边框线
          'scalesProperties.fontSize': 12,
          'scalesProperties.textColor': this.currentThemeOptions.scalesPropertiesTextColor, // 字母和数字
          'mainSeriesProperties.barStyle.downColor': '#ffff00' //#d32f2f
        })
      },
      // 刷新 k 线
      reInit() {
        try {
          this.widget.remove && this.widget.remove()
          // 卸载 k 线
          this.$store.commit('market/SET_K_LINE_IS_INIT', false)
        } catch (error) {
        }
        window.tvWidget1 = null
        this.init()
      },
      // 绘制仓位均线
      drawPosition (charts, text, price, type) {
        // 画线
        // type 1 多单；2 空单
        let color = 'rgba(250, 196, 29, 1)'
        let bgColor = 'rgba(255,255,255, 1)'
        let qBgColor = 'rgba(250, 196, 29, 1)'
        let position = charts.createPositionLine()
            .setText(text) // 空单持仓均价 //多单持仓均价
            .onModify(() => {
              this.mouseDownOrderLine(type === 1?this.$t('message.full.moreStopLossProfit'):this.$t('message.full.lessStopLossProfit'), price, type)
            })
            .onReverse(() => {
              this.mouseDownOrderLine(type === 1?this.$t('message.full.moreStopLossProfit'):this.$t('message.full.lessStopLossProfit'), price, type)
            })
            .setQuantity(price)
            .setPrice(price)
            .setLineStyle(2)
            .setLineLength(type === 1?80: 10)
            .setLineColor(color)
            .setBodyBorderColor(color)
            .setReverseButtonIconColor(color)
            .setBodyTextColor(color)
            .setQuantityBorderColor(color)
            .setQuantityBackgroundColor(qBgColor)
            .setBodyBackgroundColor(bgColor)
            .setReverseButtonBackgroundColor(bgColor)
            .setReverseButtonBorderColor(color)
        return position
      },
      // 按下鼠标开始画线方法
			mouseDownOrderLine (title, indexPrice, type) {
        var orderName = this.widget.chart().createOrderLine()
              .setText(indexPrice)
              .setPrice(indexPrice)
              .setQuantity(title)
              .setLineStyle(1)
              .setLineLength(type === 1? 70 :5)
              .onCancel(() => {
                deleteOrderLine(orderName)
              });
        this.widget.chart().crossHairMoved(({time, price}) => {
          this.cross = true
          this.moveOrderLine(title, this.$filter.splitFormat(price, this.indexPriceFloat), orderName, indexPrice, type);
        })
        this.widget.subscribe('mouse_up', v => {
          // 如果没有移动，取消画线
          if (orderName.getPrice() === indexPrice && !this.cross) {
            this.widget.chart().removeEntity(orderName['_line']['_id'])
          }
          this.widget.unsubscribe('mouse_up', v => {})
        })
      },
      // 判断类型
      getTypeMessage (price, indexPrice, type) {
        let text = ''
        let hue = ''
        let tipText = ''
        let bgColor = 'rgba(255,255,255,1)'
        let qBgColor = ''
        let alertMessage = ''
        if (type === 1) {
          if (Number(price) < Number(indexPrice)) {
            text = this.$t('message.full.moreLoss')
            tipText =  this.$t('message.full.loss') + '：' + this.getEarnings(price, type) 
              + ' USDT\n' + this.$t('message.full.positions') + '：' + this.moreObjData.availablePositionQty
            hue = 'rgb(241, 75, 79)'
            qBgColor = 'rgba(241, 75, 79, 1)'
            alertMessage = this.$t('message.full.deleteMoreStopLoss')
          } else {
            text = this.$t('message.full.moreProfit')
            tipText = this.$t('message.full.profit') + '：' + this.getEarnings(price, type) 
              + ' USDT\n' + this.$t('message.full.positions') + '：' + this.moreObjData.availablePositionQty
            hue = 'rgb(10, 180, 128)'
            qBgColor = 'rgba(10, 180, 128, 1)'
            alertMessage = this.$t('message.full.deleteMoreStopProfit')
          }
        } else {
          if(Number(price) < Number(indexPrice)) {
            text = this.$t('message.full.lessProfit')
            tipText = this.$t('message.full.profit') + '：' + this.getEarnings(price, type) 
              + ' USDT\n' + this.$t('message.full.positions') + '：' + this.lessObjData.availablePositionQty
            hue = 'rgb(10, 180, 128)'
            qBgColor = 'rgba(10, 180, 128, 1)'
            alertMessage = this.$t('message.full.deleteLessStopProfit')
          } else {
            text = this.$t('message.full.lessLoss')
            tipText = this.$t('message.full.loss') + '：' + this.getEarnings(price, type) 
              + ' USDT\n' + this.$t('message.full.positions') + '：' + this.lessObjData.availablePositionQty
            hue = 'rgb(241, 75, 79)'
            qBgColor = 'rgba(241, 75, 79, 1)'
            alertMessage = this.$t('message.full.deleteLessStopLoss')
          }
        }
        return {
          text, 
          hue, 
          tipText, 
          bgColor, 
          qBgColor, 
          alertMessage
        }
      },
      // 删除的弹出框
      async deleteAlertBox (text, alertMessage, orderName) {
        try {
          if ( !this.promptBoxShowInfo[DELETE_STOPLOSSLINE]) {
            await this.$alert({
              type: 'line',
              contentType: 1,
              content: this.$t('message.full.delete') + text,
              prompt: alertMessage
            })
          }
          this.deleteOrderLine(orderName)

        } catch (error) {
        }
      },
      // 移动线实时更新
      moveOrderLine (title, price, orderName, indexPrice, type ) {
        let {
          text, 
          hue, 
          tipText, 
          bgColor, 
          qBgColor, 
          alertMessage
        } = this.getTypeMessage(price, indexPrice, type)
        
        var title = text  //+ this.$filter.splitFormat(Math.abs(Number(price) - Number(indexPrice)),this.indexPriceFloat)
        let color = hue
        var back = false
        orderName.setText(price)
          .setPrice(price)
          .setQuantity(title)
          .setLineStyle(1)
          .setLineLength(type === 1? 70 :5)
          .setLineColor(color)
          .setBodyBorderColor(color)
          .setBodyTextColor(color)
          .setQuantityBorderColor(color)
          .setCancelButtonBorderColor(color)
          .setCancelButtonIconColor(color)
          .setBodyBackgroundColor(bgColor)
          .setQuantityBackgroundColor(qBgColor)
          .setCancelButtonBackgroundColor(bgColor)
          .setTooltip(tipText)
          .onModify(v => {
            setTimeout(() => {
              this.editLineData(price, orderName, type)
            });
          })
          .onMove(v => {
            this.moveUpdata(title, price, orderName,indexPrice, type)
          })
          .onCancel(async () => {
            this.deleteAlertBox(text, alertMessage, orderName)
            // try {
            //   if ( !this.promptBoxShowInfo[DELETE_STOPLOSSLINE]) {
            //     await this.$alert({
            //       type: 'line',
            //       contentType: 1,
            //       content: '删除' + text,
            //       prompt: alertMessage
            //     })
            //   }
            //   this.deleteOrderLine(orderName)

            // } catch (error) {
            // }
            
          })
        this.widget.subscribe('mouse_up', v => {
          back = true
          // 执行回调
          clearTimeout(this.timer)
          this.timer = setTimeout(() => {
            if (!!back && !!this.cross) {
              this.callbackFun(price, orderName['_line']['_id'], type)
              back = false
            }
          });
          // 取消订阅
          this.widget.chart().uncrossHairMoved()
          this.widget.unsubscribe('mouse_up', v => {})
        })
      },
      // 编辑数据
      async editLineData (price, orderName, type) {
        this.updataId(price, orderName, type)
        let id = orderName['_line']['_id']
        if (price < 0) {
          this.$notify({
            title: '价格不能小于0',
            type: 'error'
          })
          return
        }
        if (type === 1){
          this.layerBoxData = this.moreObjData
          if (Number(price) > Number(this.morePosition)) {
            this.stopLossType = 1
          } else {
            this.stopLossType = 2
          }
        } else {
          this.layerBoxData = this.lessObjData
          if (Number(price) > Number(this.lessPosition)) {
            this.stopLossType = 2
          } else {
            this.stopLossType = 1
          }
        }
        this.layerBoxData['triggerPrice'] = price
        this.layerBoxData['orderNameCallback'] = orderName
        this.layerBoxData['typeCallback'] = type
        this.layerBoxData.name = this.currentContract.name
        this.layerBoxData.contractValue = this.currentContract.value

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
        this.showStopLossLayerBox = true
        // let setPrice = window.prompt()
        // if (setPrice!=null && setPrice!=""){
        // 	this.moveOrderLine ('', setPrice, orderName)
        // 	this.callbackFun(setPrice, orderName['_line']['_id'], type)
        // }
      },
      // 止盈止损回掉函数
      alertcallback(data){
        this.getCurrencyPosition()
        this.moveOrderLine ('', 
          data.price, 
          data.orderName,
          data.type === 1 ? this.morePosition:this.lessPosition, 
          data.type
        )
        this.callbackFun(data.price, data.orderName['_line']['_id'], data.type)
      },
      // 移动线段实时更新数据
      moveUpdata (title, price, orderName, indexPrice, type) {
        // 更新数据id
        this.updataId(price, orderName)
        !this.cross && this.widget.chart().crossHairMoved(({time, price}) => {
          this.cross = true
          this.moveOrderLine(title, this.$filter.splitFormat(price,this.indexPriceFloat), orderName, indexPrice, type);
        })
        this.widget.subscribe('mouse_up', v => {
          this.widget.chart().uncrossHairMoved()
          this.widget.unsubscribe('mouse_up', v => {})
        })
      },
      // 停止画线的回调事件
      callbackFun(price, id, type) {
        // 数据存储
        this.saveData (this.$filter.splitFormat(price, this.indexPriceFloat), id, type)
        // 要执行方法
        // this.doSomeThing(price)
      },
      // doSomeThing
      // doSomeThing (price) {
      //   console.log('====================================');
      //   console.log('callback: ', price);
      //   console.log('====================================');
      // },
      // 数据存储
      saveData (price, id,type) {
        let same = false
        // 存储已画线数据
        let lineArr = JSON.parse(window.sessionStorage.getItem('priceArr')) || {}
        let symbol = this.widget.chart().symbolExt()['symbol']
        let symbolArr = lineArr[symbol] || []
        !!symbolArr && symbolArr.forEach(item => {
          if(item.id === id){
            same = true
            item['price'] = this.$filter.splitFormat(price, this.indexPriceFloat)
          }
        })
        !same && symbolArr.push({price: price, amount: 1, id: id, type: type})
        lineArr = Object.assign(lineArr, {[symbol]: symbolArr})
        // 数据暂时存储本地
        window.sessionStorage.setItem('priceArr', JSON.stringify(lineArr))
        this.cross = false
      },
      // 更新数据id
      updataId(price, orderName) {
        let lineArr = JSON.parse(window.sessionStorage.getItem('priceArr')) || {}
        let symbol = this.widget.chart().symbolExt()['symbol']
        let symbolArr = lineArr[symbol] || []
        !!symbolArr && symbolArr.forEach(item => {
          if(item.price === price){
            item.id = orderName['_line']['_id']
          }
        })
        let newArr = Object.assign(lineArr, {[symbol]: symbolArr})
        window.sessionStorage.setItem('priceArr', JSON.stringify(newArr))
      },
      // 删除线
      deleteOrderLine (orderName) {
        // 临时读取本地
        let arr = JSON.parse(window.sessionStorage.getItem('priceArr')) || {}
        let symbol = this.widget.chart().symbolExt()['symbol']
        arr[symbol] = arr[symbol].filter(item => item['id'] !== orderName['_line']['_id']);
        window.sessionStorage.setItem('priceArr', JSON.stringify(arr))
        this.widget.chart().removeEntity(orderName['_line']['_id'])
      },
      // 数据更新执行计算盈亏
      setOrderTitle (indexPrice, position) {
        if (!this.widget.chart().symbolExt()['symbol']) return
        let arr = JSON.parse(window.sessionStorage.getItem('priceArr')) || {}
        let symbol = this.widget.chart().symbolExt()['symbol']
        let symbolArr = arr[symbol] || []
        // 如果存储的数据大于已画线数据，说明有新添加的线，更新时候清除
        if (symbolArr.length > this.linesNameArr.length) {
          for(let i = 0; i < symbolArr.length; i++) {
            this.widget.chart().removeEntity(symbolArr[i]['id'])
          }
        }
        position.setQuantity(indexPrice).setPrice(indexPrice)
        // 删除旧线，重新画线
        !!this.linesNameArr && this.linesNameArr.forEach(orderName => {
          this.updataId(orderName.getPrice(), orderName)
          setTimeout(() => {
            this.widget.chart().removeEntity(orderName['_line']['_id'])
          });
        });
        this.linesNameArr = this.initHistrotyLines()
      },
      // 如果有历史数据，画出历史数据
      initHistrotyLines () {
        let namesArr = []
        let arr = JSON.parse(window.sessionStorage.getItem('priceArr')) || {}
        let symbol = this.widget.chart().symbolExt()['symbol']
        let symbolArr = arr[symbol] || []
        !!symbolArr && symbolArr.forEach((item, k) => {
            // 画历史数据
            // var orderName = 'order' + k
            let indexPrice = item.type === 1 ? this.morePosition : this.lessPosition
            let {
              text, 
              hue, 
              tipText, 
              bgColor, 
              qBgColor, 
              alertMessage
            } = this.getTypeMessage(item.price, indexPrice, item.type)
            let title =  text
            let color = hue
            var orderName = this.widget.chart().createOrderLine()
                .setPrice(this.$filter.splitFormat(item['price'],this.indexPriceFloat))
                .setText(this.$filter.splitFormat(item['price'],this.indexPriceFloat))
                .setQuantity(title)
                .setLineStyle(1)
                .setLineLength(item.type === 1? 70 :5)
                .setLineColor(color)
                .setBodyBorderColor(color)
                .setBodyTextColor(color)
                .setQuantityBorderColor(color)
                .setCancelButtonBorderColor(color)
                .setCancelButtonIconColor(color)
                .setBodyBackgroundColor(bgColor)
                .setQuantityBackgroundColor(qBgColor)
                .setCancelButtonBackgroundColor(bgColor)
                .setTooltip(tipText)
                .onMove(v => {
                  this.moveUpdata(title, this.$filter.splitFormat(item['price'],this.indexPriceFloat), orderName, indexPrice, item.type)
                })
                .onModify(v => {
                  setTimeout(() => {
                    this.editLineData(this.$filter.splitFormat(item['price'],this.indexPriceFloat), orderName, item.type)
                  });
                })
                .onCancel(() => {
                  this.updataId(this.$filter.splitFormat(item['price'],this.indexPriceFloat), orderName)
                  setTimeout(() => {
                    // this.deleteOrderLine(orderName)
                    this.deleteAlertBox(text, alertMessage, orderName)
                  });
                });
            // 存储已画数据
            if (!indexPrice) {
              // 删除没有仓位保存过的画线
              this.updataId(this.$filter.splitFormat(item['price'],this.indexPriceFloat), orderName)
              setTimeout(() => {
                this.deleteOrderLine(orderName)
              })
            } else {
              namesArr.push(orderName) 
            }
        });
        return namesArr;
      },
      // 计算盈亏
      getEarnings(price = 0, type) {
        let data = {}
        if (type === 1) {
          data = this.moreObjData
        } else {
          data = this.lessObjData
        }
        if (!price) {
          return 0
        }
        if (data && data.side === 1) {
          // 多仓
          return this.$filter.splitFormat(Utils.mul(
            price - data.entryPrice,
            data.availablePositionQty * this.currentContract.value
          ), this.indexPriceFloat)
        } else if (data) {
          // 空仓
          return  this.$filter.splitFormat(Utils.mul(
            data.entryPrice - price,
            data.availablePositionQty * this.currentContract.value
          ), this.indexPriceFloat)
        }
      },
      // 存储点击次数
      saveClick (type) {
        // if (this.userInfo) {
        this.setShortcut({
          type: type,
          data: {
            userId:  this.userInfo ? this.userInfo.id : '',
            event: type,
            eventType: 2,
            pageUrl: window.location.href,
            site: apiConfig.site,
            osType: 1,
            times: this.shortcut[type]?this.shortcut[type].times + 1: 1,
          }
        })
        // }
      },
      // k线按钮
      createdbutton (widget) {
        // 操作图标header
        widget.headerReady().then(() => {
          const createHeaderButton = (
            time,
            text,
            title,
            clickHandler,
            options
          ) => {
            var button = widget.createButton(options)
	          button.classList.add('min')
            if (this.kTimeStorage === time) {
              button.classList.add('selected')
            } else if (!this.kTimeStorage && time === '5') {
              button.classList.add('selected')
            }
            button.setAttribute('time', time)
            button.textContent = text
            button.addEventListener('click', clickHandler)
          }
          this.kLineType.map((item, i) => {
            // 创建分钟选择按钮
            createHeaderButton(
              item.time,
              item.buttonName,
              item.buttonName,
              function () {
                if (item.id === 0 && item.name === '1') {
                  widget.chart().setChartType(3)
                  widget.chart().setResolution('1')
                  let ifreamName = document
                    .getElementById('tv_chart_container_full')
                    .children[0].id

                } else {
                  widget.chart().setChartType(1)
                  widget.chart().setResolution(item.name)
                }
                // 给分时按钮上添加 class
                let ifreamName = document
                  .getElementById('tv_chart_container_full')
                  .children[0].id
                let minButton = document.getElementById(ifreamName).contentWindow.document.getElementsByClassName('min')
                for (let i = 0; i < minButton.length; i++) {
                  if (minButton[i] === this) {
                    this.classList.add('selected')
                    continue
                  }
                  minButton[i].classList.remove('selected')
                }
								// 给更多的分时加 class
                let moreButton = document.getElementById(ifreamName).contentWindow.document.getElementsByClassName('more-time')
                for (let i = 0; i < moreButton.length; i++) {
                  if (i === item.id) {
                    moreButton[i].classList.add('more-selected')
                    continue
                  }
                  moreButton[i].classList.remove('more-selected')
                }
              }
            )
          })
          // 更多时间按钮
          let button2 = widget.createButton({align: 'left'})
          button2.textContent = this.$t('message.version3.more')
	        button2.classList.add('min-more')
	        let div = document.createElement('div')
	        div.classList.add('more-list-warp')
          let html = document.createElement('ul')
	        html.classList.add('more-list')
          this.kLineTypeMore.map((item, i) => {
            let ss = document.createElement('li')
            ss.setAttribute('time', item.time)
            ss.textContent = item.buttonName
	          ss.classList.add('more-time')
            if (this.kTimeStorage && this.kTimeStorage === item.time) {
	            ss.classList.add('more-selected')
            } else if (!this.kTimeStorage && item.time === '5') {
              ss.classList.add('more-selected')
            }
            ss.addEventListener('click', function () {
              if (item.id === 0 && item.name === '1') {
                widget.chart().setChartType(3)
                widget.chart().setResolution('1')
              } else {
                widget.chart().setChartType(1)
                widget.chart().setResolution(item.name)
              }
              // 给分时按钮上添加 class
              let ifreamName = document
                .getElementById('tv_chart_container_full')
                .children[0].id
              let minButton = document.getElementById(ifreamName).contentWindow.document.getElementsByClassName('min')
              for (let i = 0; i < minButton.length; i++) {
                if (i === item.id) {
                  minButton[i].classList.add('selected')
                  continue
                }
                minButton[i].classList.remove('selected')
              }
              // 给更多的分时加 class
              let moreButton = document.getElementById(ifreamName).contentWindow.document.getElementsByClassName('more-time')
              for (let i = 0; i < moreButton.length; i++) {
                if (moreButton[i] === this) {
                  this.classList.add('more-selected')
                  continue
                }
                moreButton[i].classList.remove('more-selected')
              }
            })
            html.appendChild(ss)
          })
	        div.appendChild(html)
	        button2.appendChild(div)
          // 分割线
          let button1 = widget.createButton({align: 'left'})
          button1.setAttribute('title', '')
	        button1.innerHTML = '<span class="indicator"></span>'

          // 创建指标线按钮
          function createHeaderButton1(
            text,
            title,
            clickHandler,
            options,
            isfirst
          ) {
            var button = widget.createButton(options)
            if (isfirst) {
              button.classList.add('norm-first')
            }
            button.classList.add('norm')
            button.textContent = text
            button.addEventListener('click', clickHandler)
          }

          createHeaderButton1(
            'MA',
            'MA',
            function () {
              widget
                .chart()
                .createStudy(
                  'Moving Average',
                  false,
                  false,
                  [70],
                  function (guid) {
                  },
                  {'plot.color.0': '#FF0000'}
                )
            },
            {align: 'left'},
            true
          )
          createHeaderButton1(
            'BIOLL',
            'BIOLL',
            function () {
              widget
                .chart()
                .createStudy('Bollinger Bands', false, false, [15, 5], function (
                  guid
                ) {
                })
            },
            {align: 'left'}
          )
          createHeaderButton1(
            'SAR',
            'SAR',
            function () {
              widget
                .chart()
                .createStudy('Parabolic SAR', false, false, [0.02, 0.02, 0.2])
            },
            {align: 'left'}
          )
          createHeaderButton1(
            'EMA',
            'EMA',
            function () {
              widget
                .chart()
                .createStudy(
                  'Moving Average Exponential',
                  false,
                  false,
                  [9],
                  null
                )
            },
            {align: 'left'}
          )
          // 更多时间按钮
          let button3 = widget.createButton({align: 'left'})
          button3.textContent = this.$t('message.version3.more')
	        button3.classList.add('min-more')
          button3.addEventListener('click', function () {
            widget.chart().executeActionById('insertIndicator')
          })
          // 分割线
          let button4 = widget.createButton({align: 'left'})
          button4.setAttribute('title', '')
	        button4.innerHTML = '<span class="indicator"></span>'
          // 设置
          let setStyle = widget.createButton({align: 'left'})
          setStyle.innerHTML = '<span class="icon-beK_KS0k-setStyle"><svg xmlns="http://www.w3.org/2000/svg" viewBox="4 4 20 20" width="17" height="17"><g fill="currentColor" fill-rule="evenodd"><path fill-rule="nonzero" d="M14 17a3 3 0 1 1 0-6 3 3 0 0 1 0 6zm0-1a2 2 0 1 0 0-4 2 2 0 0 0 0 4z"></path><path d="M5.005 16A1.003 1.003 0 0 1 4 14.992v-1.984A.998.998 0 0 1 5 12h1.252a7.87 7.87 0 0 1 .853-2.06l-.919-.925c-.356-.397-.348-1 .03-1.379l1.42-1.42a1 1 0 0 1 1.416.007l.889.882A7.96 7.96 0 0 1 12 6.253V5c0-.514.46-1 1-1h2c.557 0 1 .44 1 1v1.253a7.96 7.96 0 0 1 2.06.852l.888-.882a1 1 0 0 1 1.416-.006l1.42 1.42a.999.999 0 0 1 .029 1.377s-.4.406-.918.926a7.87 7.87 0 0 1 .853 2.06H23c.557 0 1 .447 1 1.008v1.984A.998.998 0 0 1 23 16h-1.252a7.87 7.87 0 0 1-.853 2.06l.882.888a1 1 0 0 1 .006 1.416l-1.42 1.42a1 1 0 0 1-1.415-.007l-.889-.882a7.96 7.96 0 0 1-2.059.852v1.248c0 .56-.45 1.005-1.008 1.005h-1.984A1.004 1.004 0 0 1 12 22.995v-1.248a7.96 7.96 0 0 1-2.06-.852l-.888.882a1 1 0 0 1-1.416.006l-1.42-1.42a1 1 0 0 1 .007-1.415l.882-.888A7.87 7.87 0 0 1 6.252 16H5.005zm3.378-6.193l-.227.34A6.884 6.884 0 0 0 7.14 12.6l-.082.4H5.005C5.002 13 5 13.664 5 14.992c0 .005.686.008 2.058.008l.082.4c.18.883.52 1.71 1.016 2.453l.227.34-1.45 1.46c-.004.003.466.477 1.41 1.422l1.464-1.458.34.227a6.959 6.959 0 0 0 2.454 1.016l.399.083v2.052c0 .003.664.005 1.992.005.005 0 .008-.686.008-2.057l.399-.083a6.959 6.959 0 0 0 2.454-1.016l.34-.227 1.46 1.45c.003.004.477-.466 1.422-1.41l-1.458-1.464.227-.34A6.884 6.884 0 0 0 20.86 15.4l.082-.4h2.053c.003 0 .005-.664.005-1.992 0-.005-.686-.008-2.058-.008l-.082-.4a6.884 6.884 0 0 0-1.016-2.453l-.227-.34 1.376-1.384.081-.082-1.416-1.416-1.465 1.458-.34-.227a6.959 6.959 0 0 0-2.454-1.016L15 7.057V5c0-.003-.664-.003-1.992 0-.005 0-.008.686-.008 2.057l-.399.083a6.959 6.959 0 0 0-2.454 1.016l-.34.227-1.46-1.45c-.003-.004-.477.466-1.421 1.408l1.457 1.466z"></path></g></svg></span>'
          setStyle.addEventListener('click', function () {
            widget.chart().executeActionById('chartProperties')
          })
          // 全屏
          let fullscreen = widget.createButton({align: 'left'})
          fullscreen.addEventListener('click', () => {
            var elem = document.getElementById('tv_chart_container_full')
            this.$fullscreen.toggle(elem, {
              wrap: false
            })
          })
	        fullscreen.innerHTML = '<span class="icon-beK_KS0k-fullscreen"><svg xmlns="http://www.w3.org/2000/svg" viewBox="6 5 18 18" width="23" height="23"><g fill="currentColor"><path d="M21 7v4h1V6h-5v1z"></path><path d="M16.854 11.854l5-5-.708-.708-5 5zM7 7v4H6V6h5v1z"></path><path d="M11.146 11.854l-5-5 .708-.708 5 5zM21 21v-4h1v5h-5v-1z"></path><path d="M16.854 16.146l5 5-.708.708-5-5z"></path><g><path d="M7 21v-4H6v5h5v-1z"></path><path d="M11.146 16.146l-5 5 .708.708 5-5z"></path></g></g></svg></span>'

          // logo
          let logoButton = widget.createButton({align: 'right'})
          logoButton.setAttribute('title', '')
          logoButton.innerHTML = '<span class="logo"></span>'
        })
      },
      chartReady (widget) {
        /* ----------------------------展示画图 start------------------------------------------------- */
        function replaceCurrency (t, e, n) {
          return e ? /\/index\//.test(n) ? t.replace(/-\w+$/, "-".concat(e)) : t.replace(/-\w+-/, "-".concat(e, "-")) : t
        }
        function Yg(t) {
          return "line" === t && (t = "1"),
          /m/.test(t) ? t.replace(/m/, "") : /h/.test(t) ? "".concat(60 * parseInt(t, 10)) : t.toUpperCase()
        }

        var t, e = widget,
            n = widget._options,
            i = n.interval,
            u = n.symbol,
            c = n.currency;
        var draw = sessionStorage.getItem('58ex-drawing');
        if (draw) {
          t = JSON.parse(draw);
          try {
              var f = t.panes[0].sources[0].state;
              f.symbol = replaceCurrency(u, c, s),
              f.interval = Yg(i)
          } catch(t) {}
          n.saved_data = t
          window[widget._id].chartContent = {
            json: n.saved_data
          };
        }
        /* ----------------------------展示画图 end---------------------------- */
        // 订阅图表事件
        widget.onChartReady(() => {
          let that = this
          this.widget && this.changeKLineTheme()
          this.widget && this.widget.setSymbol(this.currentContract.id + '', this.kTimeStorage || '5')
          /* --------------------------保存画图 start---------------------------- */
					widget.subscribe('undo_redo_state_changed', (v) => {
						widget.save(function(t) {
							t && t.charts && 0 !== t.charts.length && sessionStorage.setItem('58ex-drawing', JSON.stringify(t.charts[0]))
						})
					})
          /* --------------------------保存画图 end ---------------------------- */
          this.getCurrencyPosition()
          this.positiontimer = setInterval(()=>{
            this.getCurrencyPosition()
          }, 3000)
          // this.linesNameArr = this.initHistrotyLines()

					// // 切换币种
					// widget.chart().onSymbolChanged().subscribe(null, (symbol) => {
					// 	// widget.chart().removeEntity(this.position['_line']['_id'])
          //   // widget.chart().removeEntity(this.position1['_line']['_id'])
          //   // setTimeout(()=>{
          //   //   this.position = this.drawPosition(charts, '多单持仓均价', this.morePosition, 1)
          //   //   this.position1 = this.drawPosition(charts, '空单持仓均价', this.lessPosition, 2)
          //   //   this.setOrderTitle(this.morePosition, this.position)
          //   //   this.setOrderTitle(this.lessPosition, this.position1)
          //   // },3000)
          // });
          
          that.tvFullIframe = document.getElementById("tv_chart_container_full").getElementsByTagName('iframe')[0].contentWindow;
          that.tvFullIframe.addEventListener("keydown",function(e){
            console.log(e)
            if (e.keyCode === 32) {
              e.preventDefault()              
              console.log('ifream----键盘事件：-----tradingview----', window.sessionStorage.getItem('58_space'))
              if (window.sessionStorage.getItem('58_space') === 'false'){
                that.$store.commit('SET_KEY_ORDER', false)
              } else if (window.sessionStorage.getItem('58_space') === 'true') {
                that.$store.commit('SET_KEY_ORDER', true)
              }
              that.saveClick(e.code)
            }
            if (e.keyCode === 9) {
              e.preventDefault()
              console.log('ifream----tab事件：------tradingview----', window.sessionStorage.getItem('58_tab'))
              if (window.sessionStorage.getItem('58_tab') === 'true'){
                that.$store.commit('SET_TAB_STATUS', true)
              } else if (window.sessionStorage.getItem('58_tab') === 'false') {
                that.$store.commit('SET_TAB_STATUS', false)
              }
              that.saveClick(e.code)
            }
          },false)
          // 添加键盘空格事件
          that.tvFullIframe.addEventListener('dblclick',function(e){
            e.preventDefault()
            that.$router.push('/trade/' + that.$route.params.id || '1001')
          })
          window.addEventListener('keydown', function(e) {
            console.log(e)
            if (e.keyCode === 32) {
              e.preventDefault()
              window.sessionStorage.setItem('58_space', window.sessionStorage.getItem('58_space') === 'true' ? false : true)
              console.log('键盘事件：_______space______', window.sessionStorage.getItem('58_space'))
              if (window.sessionStorage.getItem('58_space') === 'false'){
                that.$store.commit('SET_KEY_ORDER', false)
              } else if (window.sessionStorage.getItem('58_space') === 'true') {
                that.$store.commit('SET_KEY_ORDER', true)
              }
              that.saveClick(e.code)
            }
            if (e.keyCode === 9) {
              e.preventDefault()
              window.sessionStorage.setItem('58_tab', window.sessionStorage.getItem('58_tab') === 'true' ? false : true)
              console.log('tab事件：_________tab___________', window.sessionStorage.getItem('58_tab'))
              if (window.sessionStorage.getItem('58_tab') === 'true'){
                that.$store.commit('SET_TAB_STATUS', true)
              } else if (window.sessionStorage.getItem('58_tab') === 'false') {
                that.$store.commit('SET_TAB_STATUS', false)
              }
              that.saveClick(e.code)
            }
          })

          /* ------------------------------------------------------------------------------------ */
          // 初始化 K 线完成
          // 初始化完成后重新订阅 K 线,向 vuex 中存储初始化完成的状态
          console.log('TradingView---初始化成功')
          setTimeout(() => {
            this.$store.commit('market/SET_K_LINE_IS_INIT_FULL', true)
            // if (this.socketConnectState) {
            //   this.sub.subK(this.currentContract.id)
            // }
          }, 1000)

          if (!draw) {
            /* 没有存储过画图再画4条均线-------存储画图会把均线存上 */
            widget.chart().createStudy('Moving Average', false, false, [5], null, {
              'Plot.color.0': '#ff9500',
              'Plot.linewidth': 2
            })
            widget.chart().createStudy('Moving Average', false, false, [10], null, {
              'Plot.color.0': '#d32f2f',
              'Plot.linewidth': 2
            })
            widget.chart().createStudy('Moving Average', false, false, [20], null, {
              'Plot.color.0': '#b4ad14',
              'Plot.linewidth': 2
            })
            widget.chart().createStudy('Moving Average', false, false, [60], null, {
              'Plot.color.0': '#107efa',
              'Plot.linewidth': 2
            })
          }

          // widget.chart() => 返回图表对象
          // onIntervalChanged 周期变化
          widget
            .chart()
            .onIntervalChanged()
            .subscribe(null, (interval, obj) => {
              // // 取消订阅
              // if (this.socketConnectState) {
              //   this.sub.cancelK(this.currentContract.id)
              // }
              this.setKTimeStorage(interval)

              if (interval !== '1') {
                widget.chart().setChartType(1)
              }
              let ifreamName = document
                .getElementById('tv_chart_container_full')
                .children[0].id
	            let minButton = document.getElementById(ifreamName).contentWindow.document.getElementsByClassName('min')
              for (let i = 0; i < minButton.length; i++) {
                if (
                  minButton[i].getAttribute('time') === interval &&
                  widget.chart().chartType() === 1
                ) {
                  minButton[i].classList.add('selected')
                } else if (
                  minButton[i].getAttribute('time') === interval &&
                  widget.chart().chartType() === 3
                ) {
                  minButton[0].classList.add('selected')
                } else {
                  minButton[i].classList.remove('selected')
                }
              }

              let minButton1 = document.getElementById(ifreamName).contentWindow.document.getElementsByClassName('more-time')
              for (let i = 0; i < minButton1.length; i++) {
                if (
                  minButton1[i].getAttribute('time') === interval &&
                  widget.chart().chartType() === 1
                ) {
                  minButton1[i].classList.add('more-selected')
                } else if (
                  minButton1[i].getAttribute('time') === interval &&
                  widget.chart().chartType() === 3
                ) {
                  minButton1[0].classList.add('more-selected')
                } else {
                  minButton1[i].classList.remove('more-selected')
                }
              }
            })
        })
      },
      // 初始化 K 线
	    init() {
        let TradingView = window.TradingView
        let klinePriceFloat = (this.figure && this.figure.klinePriceFloat) || 4
        let dataFeeds = new DataFeeds(
          this.currentContract.id,
          klinePriceFloat,
	        this.$store
        )
        console.log("-0-0-0-0-0-0-0-tradingView",this.kTimeStorage)
        let widget = (this.widget = window.tvWidget1 = new TradingView.widget({
          width: '100%',
          height: '100%',
          // timeframe:  '1D',
          autosize: true,
          symbol: this.currentContract.id,
          interval: this.kTimeStorage,
          allow_symbol_change: true,
          timezone: 'Asia/Hong_Kong',
          container_id: 'tv_chart_container_full',
          datafeed: dataFeeds,
          library_path: '/tradingview/charting_library/',
          locale: this.KLineLocale,
          custom_css_url: this.currentThemeOptions.baseUrl,
          debug: false,
          drawings_access: {
            type: 'black',
            tools: [{name: 'Regression Trend'}]
          },
          // toolbar_bg: this.currentThemeOptions.bgColor,
          customFormatters: {
            timeFormatter: {
              format: function (date) {
                var _format_str = '%h:%m'
                let hour =
                  date.getUTCHours() < 10
                    ? '0' + date.getUTCHours()
                    : date.getUTCHours()
                let min =
                  date.getUTCMinutes() < 10
                    ? '0' + date.getUTCMinutes()
                    : date.getUTCMinutes()
                let sec =
                  date.getUTCSeconds() < 10
                    ? '0' + date.getUTCSeconds()
                    : date.getUTCSeconds()
                return _format_str
                  .replace('%h', hour, 2)
                  .replace('%m', min, 2)
                  .replace('%s', sec, 2)
              }
            },
            dateFormatter: {
              format: function (date) {
                let month =
                  date.getUTCMonth() + 1 < 10
                    ? '0' + (date.getUTCMonth() + 1)
                    : date.getUTCMonth() + 1
                let Dates =
                  date.getUTCDate() < 10
                    ? '0' + date.getUTCDate()
                    : date.getUTCDate()
                return date.getUTCFullYear() + '-' + month + '-' + Dates
              }
            }
          },
          theme: this.chartTheme,
          // 隐藏列表
          disabled_features: [
            'legend_context_menu',
            'volume_force_overlay',
            'timeframes_toolbar',
            'items_favoriting',
            'compare_symbol',
            'go_to_date',
            'header_chart_type',
            'header_compare',
            'header_symbol_search',
            'header_undo_redo',
            'show_hide_button_in_legend',
            'symbol_info',
            'border_around_the_chart',
            'remove_library_container_border',
            'header_saveload',
            'header_widget_dom_node',
            'symbol_search_hot_key',
            'header_interval_dialog_button',
            'show_interval_dialog_on_key_press', // 禁止弹出输入时间3
            'header_resolutions', // 周期设置
            'display_market_status',// 正在加载的标示
            'header_screenshot', // 快照
            'header_indicators', // 指标线,
            'header_fullscreen_button',
            'header_settings', // 设置
            'save_chart_properties_to_local_storage',
            // 'chart_zoom',
            'move_logo_to_main_pane',
          ],
          enabled_features: [
            // 'lock_visible_time_range_on_resize',
            'show_dialog_on_snapshot_ready',
            'adaptive_logo', // 小屏隐藏tradingview logo
            'disable_resolution_rebuild', // 显示完全由datafeed提供的K线时间而不进行任何调整。
            'dont_show_boolean_study_arguments',
            'hide_last_na_study_output',
            'side_toolbar_in_fullscreen_mode',
            'study_templates',
          ],
          charts_storage_api_version: '1.14',
          client_id: 'tradingview.com',
          user_id: 'public_user_id',
          loading_screen: {
            backgroundColor: this.currentThemeOptions.bgColor
          },
          overrides: {
            volumePaneSize: 'medium',
            'paneProperties.background': this.currentThemeOptions.bgColor, // 整个背景
            'paneProperties.horzGridProperties.color': this.currentThemeOptions.horzGridPropertiesColor, // grid 横线
            'paneProperties.vertGridProperties.color': this.currentThemeOptions.vertGridPropertiesColor, // grid 竖线
            'paneProperties.crossHairProperties.color': this.currentThemeOptions.crossHairPropertiesColor, // 交叉轴
            'paneProperties.topMargin': 30,
            'paneProperties.legendProperties.showSeriesTitle': false, // 显示币种时间交易所
            // // Candles styles
            'mainSeriesProperties.candleStyle.drawBorder': true,
            'mainSeriesProperties.candleStyle.borderUpColor': this.currentThemeOptions.upColor, // 蜡烛边框 也是开高低收的颜色
            'mainSeriesProperties.candleStyle.borderDownColor': this.currentThemeOptions.downColor, // 蜡烛边框
            'mainSeriesProperties.candleStyle.upColor': this.currentThemeOptions.upColor, // 蜡烛 升
            'mainSeriesProperties.candleStyle.downColor': this.currentThemeOptions.downColor, // 蜡烛 降
            'mainSeriesProperties.candleStyle.wickUpColor': this.currentThemeOptions.upColor, // 蜡烛成交上线颜色
            'mainSeriesProperties.candleStyle.wickDownColor': this.currentThemeOptions.downColor, // 蜡烛成交下颜色
            'mainSeriesProperties.candleStyle.barColorsOnPrevClose': false,
            'paneProperties.legendProperties.showLegend': false,
            'scalesProperties.lineColor': this.currentThemeOptions.borderColor, // 内部 边框线
            'scalesProperties.fontSize': 12,
            'scalesProperties.textColor': this.currentThemeOptions.scalesPropertiesTextColor, // 字母和数字
            'mainSeriesProperties.barStyle.downColor': '#ffff00' //#d32f2f
          },
          studies_overrides: {
            'volume.volume.color.0': '#F14B4F', // 倒影
            'volume.volume.color.1': '#0AB480', // 倒影
            'volume.volume.transparency': 70,
            'volume.show ma': true,
            'volume.volume ma.color': '#4977FF',
            'volume.volume ma.plottype': 'line',
            'volume.volume ma.linewidth': 2,
            'Moving Average.precision': 4 // 加号中的位数
          }
        }))
        this.themeList.push(this.chartTheme)
        // 操作图标header
        this.createdbutton(widget)
        // 图标订阅
        this.chartReady(widget)
      }
    },
    mounted() {
      this.reInit()
    },
    destroyed () {
      try {
        this.widget.remove && this.widget.remove()
      } catch (error) {
        console.log(error)
      }
      clearInterval(this.positiontimer)
    }
  }
</script>

<style lang='less' scoped>
	#tv_chart_container_full {
		height: 100%;
		width: 100%;
	}

	.tv-chart-warp {
		height: 100%;
	}

	@media screen and (max-width: 1440px) {
		.tv-chart-warp {
			height: 100% !important;
		}
	}
	@media screen and (max-height: 850px) {
		.tv-chart-warp {
			height: 100% !important;
		}
	}
	@media screen and (max-height: 750px) {
		.tv-chart-warp {
			height: 100% !important;
		}
	}
</style>
