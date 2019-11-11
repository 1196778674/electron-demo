<template>
  <div :style="{height: `${widgetHeight}px`}" id="tv_chart_container"></div>
</template>

<script>
import DataFeeds from "@/assets/js/datafeed/jsApi/datafeed";
import ApiConfig from "@/assets/js/config/api.config";
import Sub from "@/assets/js/sub";

export default {
  name: "trading-view",
  data() {
    return {
      widget: {},
      sub: new Sub(),
      widgetHeight: 0,
      themeColor: {},
      chartTheme: "Dark",
      kLineType: this.$dictionary.kLineType1(this.$i18n),
      themeBlackOption: {
        baseUrl: "base.css",
        bgColor: "#121723",
        horzGridPropertiesColor: "#181e2f",
        vertGridPropertiesColor: "#141625",
        scalesPropertiesTextColor: "#5D6588",
        // calesPropertiesTextColor: 'red',
        upColor: "#30AC8A",
        downColor: "#C12252",
        borderColor: "#212340"
      },
      themeWhiteOption: {
        baseUrl: "base-white.css",
        bgColor: "#fff",
        horzGridPropertiesColor: "#ECF0F7",
        vertGridPropertiesColor: "#fff",
        scalesPropertiesTextColor: "#5D6588",
        upColor: "#03C2A0",
        downColor: "#DA1378",
        borderColor: "#fff"
      }
    };
  },
  computed: {
    // 主题
    themeValue() {
      return this.$store.state.dictionary.theme;
    },
    screenWidth() {
      return this.$store.state.dictionary.screenWidth;
    },
    screenHeight() {
      return this.$store.state.dictionary.screenHeight;
    },
    contractInfo() {
      let tmp = this.$store.state.market.contract.filter(item => {
        return Number(item.id) === Number(this.$route.params.id);
      });
      return tmp[0] || {};
    }
  },
  watch: {
    themeValue(val) {
      if (val === "white") {
        this.themeColor = this.themeWhiteOption;
        this.chartTheme = "Light";
      } else {
        this.themeColor = this.themeBlackOption;
        this.chartTheme = "Dark";
      }
      this.reInit();
    },
    "$store.state.market.connect": {
      handler(val) {
        if (val) {
          // 如果不是由于切换重连，则重新刷新k线
          if (this.$store.state.market.kDieState) {
            this.reInit();
          } else {
            this.$store.commit("market/SET_KDIESTATE", true);
          }
        }
      }
    },
    $route(route) {
      // 处理k线断网重连，设置拦截使正常跳转时k线不刷新两次
      this.$store.commit("market/SET_KDIESTATE", false);
      this.reInit();
    },
    "$store.state.dictionary.screenWidth": {
      handler(val) {
        if (
          (val <= 1366 || this.screenHeight <= 760) &&
          this.widgetHeight !== 328
        ) {
          this.reInit();
        }
        if (
          val > 1366 &&
          this.screenHeight > 760 &&
          this.widgetHeight !== 460
        ) {
          this.reInit();
        }
      }
    },
    "$store.state.dictionary.screenHeight"(val) {
      if (val < 760 && this.screenWidth < 1367 && this.widgetHeight !== 328) {
        this.reInit();
      }
      if (val > 760 && this.screenWidth < 1367 && this.widgetHeight !== 328) {
        this.reInit();
      }
      if (val < 760 && this.screenWidth > 1366 && this.widgetHeight !== 328) {
        this.reInit();
      }
      if (val > 760 && this.screenWidth > 1366 && this.widgetHeight !== 460) {
        this.reInit();
      }
    },
    "$i18n.locale"() {
      this.kLineType = this.$dictionary.kLineType1(this.$i18n);
      this.reInit();
    }
  },
  created() {
    // 处理k线断网重连，设置拦截使正常跳转时k线不刷新两次
    this.$store.commit("market/SET_KDIESTATE", false);
    let res = this.$store.state.dictionary.theme;
    if (res === "white") {
      this.themeColor = this.themeWhiteOption;
      this.chartTheme = "Light";
    } else {
      this.themeColor = this.themeBlackOption;
      this.chartTheme = "Dark";
    }
  },
  mounted() {
    this.reInit();
  },
  methods: {
    reInit() {
      try {
        this.widget.remove && this.widget.remove();
      } catch (error) {
        console.log(error);
      }
      this.init();
    },
    changeLocale() {
      let lang = {
        cn: "zh"
      };
      return lang[this.$i18n.locale] || this.$i18n.locale;
    },
    init() {
      localStorage.clear();
      if (this.screenWidth < 1367 || this.screenHeight < 760) {
        this.widgetHeight = 328;
      } else {
        this.widgetHeight = 460;
      }
      let TradingView = window.TradingView;
      let klinePriceFloat = !!this.contractInfo.contractParam
        ? this.contractInfo.contractParam.klinePriceFloat
        : 4;
      let dataFeeds = new DataFeeds(
        this.$route.params.id,
        klinePriceFloat,
        this.$store
      );
      let that = this;
      let widget = (this.widget = window.tvWidget = new TradingView.widget({
        width: "100%",
        height: this.widgetHeight,
        symbol: this.$route.params.id,
        interval: "5",
        allow_symbol_change: true,
        timezone: "Asia/Hong_Kong",
        container_id: "tv_chart_container",
        datafeed: dataFeeds,
        library_path: "/js/charting_library/",
        locale: this.changeLocale() || "zh",
        custom_css_url: this.themeColor.baseUrl,
        debug: false,
        drawings_access: {
          type: "black",
          tools: [{ name: "Regression Trend" }]
        },
        toolbar_bg: this.themeColor.bgColor,
        // theme: this.chartTheme,
        disabled_features: [
          "legend_context_menu",
          "volume_force_overlay",
          "timeframes_toolbar",
          "display_market_status",
          "compare_symbol",
          "go_to_date",
          "header_chart_type",
          "header_compare",
          "header_screenshot",
          "header_symbol_search",
          "header_undo_redo",
          "show_hide_button_in_legend",
          "snapshot_trading_drawings",
          "symbol_info",
          "border_around_the_chart",
          "remove_library_container_border",
          "header_saveload",
          "adaptive_logo"
        ],
        enabled_features: [
          "move_logo_to_main_pane",
          "dont_show_boolean_study_arguments",
          "hide_last_na_study_output",
          "hide_left_toolbar_by_default",
          "side_toolbar_in_fullscreen_mode",
          "save_chart_properties_to_local_storage"
        ],
        charts_storage_api_version: "1.1",
        client_id: "tradingview.com",
        user_id: "public_user_id",
        loading_screen: {
          backgroundColor: this.themeColor.bgColor
        },
        overrides: {
          volumePaneSize: "medium",
          "paneProperties.background": this.themeColor.bgColor, // 整个背景
          "paneProperties.horzGridProperties.color": this.themeColor
            .horzGridPropertiesColor, // grid 横线
          "paneProperties.vertGridProperties.color": this.themeColor
            .vertGridPropertiesColor, // grid 竖线
          "paneProperties.crossHairProperties.color": "#d4e0f9", // 交叉轴
          "paneProperties.topMargin": 30,
          "paneProperties.legendProperties.showSeriesTitle": false,
          // Candles styles
          "mainSeriesProperties.candleStyle.drawBorder": true,
          "mainSeriesProperties.candleStyle.borderUpColor": this.themeColor
            .upColor, // 蜡烛边框 也是开高低收的颜色
          "mainSeriesProperties.candleStyle.borderDownColor": this.themeColor
            .downColor, // 蜡烛边框
          "mainSeriesProperties.candleStyle.upColor": this.themeColor.upColor, // 蜡烛 升
          "mainSeriesProperties.candleStyle.downColor": this.themeColor
            .downColor, // 蜡烛 降
          "mainSeriesProperties.candleStyle.wickUpColor": this.themeColor
            .upColor, // 蜡烛成交上线颜色
          "mainSeriesProperties.candleStyle.wickDownColor": this.themeColor
            .downColor, // 蜡烛成交下颜色
          "mainSeriesProperties.candleStyle.barColorsOnPrevClose": false,
          "paneProperties.legendProperties.showLegend": false,
          "scalesProperties.lineColor": this.themeColor.borderColor, // 内部 边框线
          "scalesProperties.fontSize": 12,
          // 'scalesProperties.textColor': '#666b93', // 字母和数字
          "scalesProperties.textColor": this.themeColor
            .scalesPropertiesTextColor, // 字母和数字
          "mainSeriesProperties.barStyle.downColor": "#ffff00" //#d32f2f
        },
        studies_overrides: {
          "volume.volume.color.0": "#874755", // 倒影
          "volume.volume.color.1": "#0a6b61", // 倒影
          "volume.volume.transparency": 50,
          "volume.show ma": true,
          "volume.volume ma.color": "#7e9efd",
          "volume.volume ma.plottype": "line",
          "volume.volume ma.linewidth": 2,
          "Moving Average.precision": 4 // 加号中的位数
        }
      }));
      widget.onChartReady(() => {
        widget
          .chart()
          .onIntervalChanged()
          .subscribe(null, function(interval, obj) {
            // interval 当前周期
            // widget.chart().resolution() 获取当前的周期
            // widget.chart().chartType() 获取当前的图标类型
            // widget.chart().setChartType(1) 设置图表类型
            if (that.$store.state.market.connect) {
              that.sub.cancelK(that.$route.params.id);
            }
            // 改变K线时间
            that.$store.commit("market/SET_CHANGEKTIME", true);
            buttonList.map(item => {
              item.removeClass("selected");
            });
            if (widget.chart().chartType() === 3 && interval === "1") {
              // 表示点击的是分时
              // widget.chart().chartType() === 3 表示分时的面积图 && interval === '1'
              buttonList[0].addClass("selected"); // 高亮分时的按钮
            } else {
              widget.chart().setChartType(1);
              buttonList.map(item => {
                if (item.data("interval") === widget.chart().resolution()) {
                  if (widget.chart().resolution() === "1") {
                    // chartType为1时表示的是K线，widget.chart().resolution() === '1'表示的是1分钟
                    buttonList[1].addClass("selected"); //高亮1分钟的按钮
                  } else {
                    item.addClass("selected");
                  }
                }
              });
            }
            // that.sub.cancelK(that.$route.params.id)
            // that.$store.commit('SET_CHANGEKTIME', true)
            // buttonList.map(item => {
            //   item.removeClass('selected')
            // })
            // buttonList.map(item => {
            //   if (item.data('interval') === widget.chart().resolution()) {
            //     item.addClass('selected')
            //   }
            // })
          });
        widget.chart().createStudy("Moving Average", false, false, [5], null, {
          "Plot.color.0": "#ff9500",
          "Plot.linewidth": 2
        });
        widget.chart().createStudy("Moving Average", false, false, [10], null, {
          "Plot.color.0": "#d32f2f",
          "Plot.linewidth": 2
        });
        widget.chart().createStudy("Moving Average", false, false, [20], null, {
          "Plot.color.0": "#b4ad14",
          "Plot.linewidth": 2
        });
        widget.chart().createStudy("Moving Average", false, false, [60], null, {
          "Plot.color.0": "#107efa",
          "Plot.linewidth": 2
        });
        let buttonList = this.kLineType.map((item, i) => {
          return widget
            .createButton()
            .data("interval", item.name)
            .on("click", e => {
              buttonList.map(item => {
                item.removeClass("selected");
              });
              buttonList[i].addClass("selected");
              widget.chart().setChartType(item.name === "1" ? 3 : 1);
              widget
                .chart()
                .getAllStudies()
                .map(items => {
                  if (items.name === "Moving Average") {
                  }
                });
              if (item.name === "1") {
                // 点击分时
                widget.chart().setResolution(item.name);
              } else {
                if (item.name === "1.1") {
                  // 点击1分钟
                  widget.chart().setResolution("1");
                } else {
                  widget.chart().setResolution(item.name);
                }
              }
              // if (item.name === '0' || item.name === '1') { // 点击分时
              //   if (widget.chart().resolution() !== '0' && widget.chart().resolution() !== '1') widget.chart().setResolution(item.name)
              // } else {
              //   widget.chart().setResolution(item.name)
              // }
            })
            .append(
              $(
                '<a class="time-interval" id=interval' +
                  item.name +
                  ">" +
                  item.buttonName +
                  "</a>"
              )
            );
        });
        buttonList.map(item => {
          if (item.data("interval") === widget.chart().resolution()) {
            item.addClass("selected");
          }
        });

        widget
          .createButton({ align: "left" })
          .attr("title", "")
          .append('<span class="indicator">|</span>');

        widget
          .createButton({ align: "left" })
          .attr("title", "MA")
          .on("click", function(e) {
            widget
              .chart()
              .createStudy(
                "Moving Average",
                false,
                false,
                [70],
                function(guid) {},
                { "plot.color.0": "#FF0000" }
              );
          })
          .append('<span class="indicator">MA</span>');

        widget
          .createButton()
          .attr("title", "BIOLL")
          .on("click", function(e) {
            widget
              .chart()
              .createStudy("Bollinger Bands", false, false, [15, 5], function(
                guid
              ) {
                // console.log(guid);
              });
          })
          .append('<span class="indicator">BIOLL</span>');

        widget
          .createButton({ align: "left" })
          .attr("title", "SAR")
          .on("click", function(e) {
            widget
              .chart()
              .createStudy("Parabolic SAR", false, false, [0.02, 0.02, 0.2]);
          })
          .append('<span class="indicator">SAR</span>');

        widget
          .createButton({ align: "left" })
          .attr("title", "EMA")
          .on("click", function(e) {
            widget
              .chart()
              .createStudy(
                "Moving Average Exponential",
                false,
                false,
                [9],
                null
              );
          })
          .append('<span class="indicator">EMA</span>');

        widget
          .createButton({ align: "right" })
          .attr("title", "")
          .append('<span class="logo"></span>');
      });
    }
  }
};
</script>

<!-- Add 'scoped' attribute to limit CSS to this component only -->
<style lang='less'>
</style>
