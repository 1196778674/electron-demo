<template>
  <div :class="{'trade-detail-done':'black' === themeValue, 'trade-detail-done-white': 'white' === themeValue}">
    <div class="table-wrapper" style="width: 100%;">
      <el-table :data="list" max-height="278" class="el-table-content" v-if="filterlists.length > 0"
        :header-cell-class-name="cellName"
      >
        <el-table-column  prop="contractName" 
          width="135" 
          :label="$t('message.transactionList.currency')" 
          :render-header='header'
          sortable
        >
          <template v-if="scope.row.contractName" slot-scope="scope">
            <span :class="[scope.row.side === 1 ? 'buyColorBg point' : 'sellColorBg point']"></span>
            <span style="font-weight: bold;">{{ scope.row.contractName }}</span>
            <span :class="[scope.row.side === 1 ? 'buyColor' : 'sellColor']">
              {{ scope.row.side === 1 ? $t('message.transactionList.more') : $t('message.transactionList.less') }}
            </span>
          </template>
        </el-table-column>
        <el-table-column  prop="" :width="columnWidth" align="right" :label="$t('message.transactionList.type')" >
          <template v-if="scope.row.contractName" slot-scope="scope">
            <span v-if="scope.row.liquidation === 1">{{$t('message.transactionList.qpwt') }}</span>
            <span v-else-if="scope.row.liquidation === 2">{{ $t('message.transactionList.zdjc')}}</span>
            <span v-else>{{ priceType[scope.row.priceType] }}</span>
          </template>
        </el-table-column>
        <el-table-column sortable prop="close" min-width="100" align="right" :label="$t('message.transactionList.openLeve')" >
          <template v-if="scope.row.contractName"  slot-scope="scope">
            <span>{{ openLabel[scope.row.close] }}</span>
          </template>
        </el-table-column>
        <el-table-column  prop="" min-width=""  align="right" :label="$t('message.transactionList.excutedPrice')" >
          <template v-if="scope.row.contractName"  slot-scope="scope">
            <span>{{ scope.row.price | splitFormat(4) }}</span>
          </template>
        </el-table-column>
        <!-- 成交数量 -->
        <el-table-column  prop="" min-width="" align="right" :label="$t('message.transactionList.excutedAmount')" >
          <template v-if="scope.row.contractName"  slot-scope="scope">
            <span>{{ scope.row.size }}</span>
          </template>
        </el-table-column>
        <!-- 实际杠杆 -->
        <el-table-column  prop="" min-width="" align="right" :label="$t('message.transactionList.actualLeverage')" >
          <template v-if="scope.row.contractName"  slot-scope="scope">
            <span>{{ scope.row.leverage | splitFormat(4) }}</span>
          </template>
        </el-table-column>
        <!-- 盈亏 -->
        <el-table-column  prop="" min-width="100" align="right" :label="$t(`message.transactionList.pnl`)" >
          <template v-if="scope.row.contractName"  slot-scope="scope">
            <span :class="[Number(scope.row.profit) > 0 && 'buyColor', Number(scope.row.profit) < 0 && 'sellColor']">{{Number(scope.row.profit) > 0 && '+' || ''}}{{ scope.row.profit || '--' | splitFormat(4) }}</span>
          </template>
        </el-table-column>
        <!-- 手续费 -->
        <el-table-column  prop="" min-width="100" align="right" :label="$t('message.transactionList.fee')" >
          <template v-if="scope.row.contractName"  slot-scope="scope">
            <span>{{ Number(scope.row.fee).toFixed(4) }}</span>
          </template>
        </el-table-column>
        <el-table-column  prop="" min-width="128" align="center" :label="$t('message.transactionList.time')" >
          <template v-if="scope.row.contractName"  slot-scope="scope">
            <span>{{scope.row.createdDate | timeFormat()}}</span>
          </template>
        </el-table-column>
      </el-table>
      <st-row class="no-data" justify="center" v-if="showN">
        <p>{{ $t('message.transactionList.noData') }}</p>
      </st-row>
    </div>
  </div>
</template>

<script>
  import SwapsApi from '@/assets/js/api/swapsApi'
  import Utils from '../../assets/js/utils.js'

  export default {
    name: 'trade-detail-done',
    data () {
      return {
        list: [],
        showN: false,
        priceType: {
          '1': this.$t('message.transactionList.S_LimitPrice'),
          '2': this.$t('message.transactionList.S_MarketPrice')
        },
        openLabel: {
          '0': this.$t(`message.transactionList.S_openPosition`),
          '1': this.$t(`message.transactionList.S_closePosition`)
        },
        columnWidth: '130',
        filtersList: [{text: this.$t('message.transactionList.all'),value: 'all',click: false}],
        checked: [],
        filterlists: [],
        isactive: false,
        showpop:false
      }
    },
    computed: {
      themeValue () {
         if (this.$store.state.dictionary.theme === 'black') {
          document.getElementsByTagName("body")[0].classList.add("black");
          document.getElementsByTagName("body")[0].classList.remove("white");
        } else {
          document.getElementsByTagName("body")[0].classList.add("white");
          document.getElementsByTagName("body")[0].classList.remove("black");
        }
        return this.$store.state.dictionary.theme
      },
      // columnWidth () {
      //   if (this.$store.state.dictionary.screenWidth >1366) {
      //     return '130'
      //   } else {
      //     return '100'
      //   }
      // }
    },
    watch: {
      '$store.state.dictionary.screenWidth' () {
        if (this.$store.state.dictionary.screenWidth > 1366) {
          this.columnWidth = '130'
        } else {
          this.columnWidth = "100"
        }
      },
      '$i18n.locale' () {
        this.priceType= {
          '1': this.$t('message.transactionList.S_LimitPrice'),
          '2': this.$t('message.transactionList.S_MarketPrice')
        }
        this.openLabel= {
          '0': this.$t(`message.transactionList.S_openPosition`),
          '1': this.$t(`message.transactionList.S_closePosition`)
        }
      },
      '$route': {
        handler(val) {
          let that =this
          setTimeout(function(){
            that.getlist()
          },200)
        },
        immediate: true
      },
      "$store.state.user.userInfo" () {
        if (!this.$store.state.user.userInfo) {
          this.list= []
          this.showN = true
        } else {
          this.getlist()
        }
      },
      '$store.state.market.wsOrder' : {
        handler () {
          this.getlist()
        },
        immediate: true
      }
    },
    created () {
      this.setfiltersList()
    },
    methods: {
      cellName ({row, column, rowIndex, columnIndex}) {
        if (columnIndex === 0) {
          return 'first-filter'
        } else {
          return ''
        }
      },
      setfiltersList () {
        if (this.$store.state.market.contract) {
          this.$store.state.market.contract.filter(item => {
            let reg = /^([\w]*)USDT$/
            if (reg.test(item.name)) {
              this.filtersList.push({ text: item.name.match(reg)[1], value: item.name ,click: false})
            }
          })
        }
      },
      getlist () {
        let that = this
        SwapsApi.getOrderFill({
          // contractIds: val.params.id
          page: 1,
          pageSize: 200
        }).then((res) => {
          // this.list = res.data && res.data.orderFillList || []
          this.filterlists = res.data && res.data.orderFillList || []
          this.showN = this.filterlists.length === 0 ? true : false

          // 兼容后端返回null处理
          this.filterlists.forEach((v) => {
            v.leverage = v.leverage || '';
            v.profit = v.profit || ''
          })

          let lists = []
          that.checked = Utils.transReArr(that.checked)
          if (that.checked.length >0) {
            this.list = []
            setTimeout(()=>{
              that.checked.map( item1 => {
                that.filterlists.map(item => {
                  if (item1 === item.contractName) {
                    lists.push(item)
                  }
                })
              })
              if (lists.length === 0) {
                lists.push({})
              }
              that.list = Utils.deepCopy(lists)
            },100)
          } else if (that.checked.length === 0) {
            setTimeout(()=>{
              that.list = Utils.deepCopy(that.filterlists)
            },100)
          }
        }).catch(err => {
          this.showN = true
        })
        
      },
      header (h, { column, $index }) {
        let that = this;
        return h('div', {
            'class': 'currency-cell',
            style: {
              padding: '0px',
              paddingRight: '7px'
            }
          },
          [
            h('span', {
              'class': "span-filter",
              style: {
                color: '#5d6588'
              },
              domProps: {
                innerHTML: that.$t('message.transactionList.currency')
              }
            }),
            h('el-popover',{
              attrs: {
                placement: "bottom",
                trigger: 'manual',
                'popper-class': 'pop-filters tooltip-content',
                width: '152',
                placement: 'bottom-start',
                value: that.showpop
              }
            },[
              h('div',{
                style: {
                  width:'100%'
                }
              },that.filtersList.map(function (item) {
                return h("label",{
                  'class':"input-labels"
                },[
                  h('input',{
                    class: that.checked.indexOf(item.value) >=0 ? "input-checkbox-active" : '',
                    attrs: {
                      type: 'checkbox',
                      name: item.text,
                      value: item.value,
                      checked: that.checked.indexOf(item.value) >=0 ? true : false
                    },
                    on: {
                      change (e) {
                        if (e.target.value === 'all'){
                          if (!item.click) {

                            that.filtersList.map( cl => {
                              cl.click = true
                            })
                            that.filtersList.map( val => {
                              that.checked.push(val.value)
                            })
                          } else {
                            that.filtersList.map( cl => {
                              cl.click = false
                            })
                            that.checked=[]
                          }
                        } else {
                          if (!item.click) {
                            let s = 0
                            that.filtersList.map( cl => {
                              if (e.target.value === cl.value) {
                                cl.click = true
                                that.checked.push(e.target.value)
                                that.filtersList.map( cl => {
                                  if (cl.value!=='all') {
                                    if (cl.click) {
                                      s++
                                    }
                                  }
                                })
                              }
                            })
                            if (s === that.filtersList.length -1) {
                              that.checked.push('all')
                            }
                          } else {
                            that.filtersList.map( cl => {
                              if (e.target.value === cl.value) {
                                cl.click = false
                                let s =[]
                                for (let i=0;i<that.checked.length;i++){
                                  if(that.checked[i] !== e.target.value){
                                    if (that.checked[i] !== 'all'){
                                      s.push(that.checked[i])
                                    } else {
                                      cl.click = false
                                    }
                                  }
                                }
                                that.checked = s
                              }
                            })
                            that.filtersList[0].click = false
                          }
                        }
                      }
                    }
                  }),
                  h('span',{
                    class: that.checked.indexOf(item.value) >=0 ? "span-label ischeckeds" : 'span-label',
                    attrs: {
                      for: item.text
                    },
                    domProps: {
                      innerHTML: item.value === 'all'?that.$t('message.transactionList.all'):item.text
                    }
                  })
                ])
              })),
              h('div',{
                class: 'filter-footer'
              },[
                h("button",{
                  class:'button chongzhi-button',
                  domProps: {
                    innerHTML: that.$t('message.transactionList.chongzhi')
                  },
                  on: {
                    click () {
                      that.checked = []
                      that.filtersList.map( cl => {
                        cl.click = false
                      })
                    }
                  }
                }),
                h('button',{
                  class:'button queding-button',
                  domProps: {
                    innerHTML: that.$t('message.transactionList.queding')
                  },
                  on: {
                    click () {
                      let lists = []
                      that.checked = Utils.transReArr(that.checked)
                      if (that.checked.length >0) {
                        that.checked.map( item1 => {
                          that.filterlists.map(item => {
                            if (item1 === item.contractName) {
                              lists.push(item)
                            }
                          })
                        })
                        if (lists.length === 0) {
                          lists.push({})
                        }
                      } else {
                        lists = that.filterlists
                      }
                      
                      that.list = lists
                      that.showpop = false
                      that.isactive = false
                    }
                  }
                })
              ]),
              h('span',{
                attrs: {
                  id: 'filterButton'
                },
                'class': {
                  "shaixuan": true,
                  "isactive": that.isactive
                },
                slot: 'reference',
                style: {
                  outline: 'none'
                },
                on: {
                  click () {
                    that.showpop = true
                    that.isactive = true
                  }
                }
              })
            ])
          ]
        )
      },
      fun (event) {
        const e = window.event || event;
        const path = event.path || (event.composedPath && event.composedPath()); // 火狐和safari获取event.path问题
        for (let i=0;i<path.length;i++){
          if (path[i].id === 'filterButton') {
            this.showpop = true
            break
          } else {
            this.showpop =false
            this.isactive = false
          }
        }
      }
    },
    mounted () {
      document.addEventListener('click', this.fun,false)
    },
    destroyed () {
      document.removeEventListener('click',this.fun,false)
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
  @import '../../assets/css/theme';

  .trade-detail-done {
    .themeBlack();
    /deep/.first-filter{
      .el-table__column-filter-trigger{
        float: left;
      }
      .currency-cell{
        float: left;
        // margin-right: 7px;
        height: 34px;
        line-height: 32px;
        text-overflow: clip !important;
      }
      .el-icon-arrow-down{
        vertical-align: middle;
      }
      .el-icon-arrow-down::before{
        content: "" !important;
        display: inline-block;
        width: 8px;
        height: 10px;
        background: url('../../assets/images/svg/select2.svg') no-repeat;
        background-size: 100% 100%;
        transform: scale(1.4);
      }
      .el-icon-arrow-down.el-icon-arrow-up::before{
        background: url('../../assets/images/svg/select.svg') no-repeat;
      }
      .shaixuan{
        display: inline-block;
        width: 8px;
        height: 10px;
        background: url('../../assets/images/svg/select2.svg') no-repeat;
        background-size: 100% 100%;
        position: relative;
        top: 2px;
        left: 7px;
      }
      .isactive{
        background: url('../../assets/images/svg/select.svg') no-repeat;
      }
    }
    /deep/.ascending{
      .ascending{
        border-bottom-color: #fff !important;
      }
    }
    /deep/.descending{
      .descending{
        border-top-color: #fff !important;
      }
    }
    /deep/.el-table .sort-caret.ascending{
      border-bottom-color: #555B77;
      &:hover{
        border-bottom-color: #fff;
      }
    }
    /deep/.el-table .sort-caret.descending{
      border-top-color: #555B77;
      &:hover{
        border-top-color: #fff;
      }
    }
    float: left;
    width: 100%;
    min-width: 620px;
    .toast {
      position: absolute;
    }
    .table {
      width: 100%;
      table {
        width: 100%;
        /*cellspacing: "0";//表示单元格之间间隙为0。*/
        /*cellpadding: "0";*/
        border-collapse: collapse;
        thead {
          tr {
            th {
              height: 30px;
              line-height: 30px;
              color: @tradeListTheadColor;
              text-align: right;
              font-size: 12px;
              &:first-child {
                text-align: left;
                padding-left: 10px;
              }
              &:last-child {
                text-align: center;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              height: 32px;
              line-height: 32px;
              color: @tradeListFontColor;
              font-size: 12px;
              text-align: right;
              border-top: 1px solid @tradeListBorderColor;
              border-bottom: 1px solid @tradeListBorderColor;
              &:first-child {
                text-align: left;
                padding-left: 10px;
              }
              &:last-child {
                text-align: center;
              }
            }
            .button {
              display: inline-block;
              // width: 56px;
              padding: 0 4px;
              height: 22px;
              line-height: 22px;
              font-size: 12px;
              color: @tradeListBlueFontColor;
              text-align: center;
              background-color: transparent;
              border: 1px solid transparent;
              border-radius: 3px;
            }
            .button1 {
              // background-color: #313151;
            }
            .button2 {
              // margin-left: 8px;
              // background-color: #d64172;
            }
            &:hover {
              background-color: @tradeListHoverColor;
              .button {
                background-color: @tradeListButtonHoverColor;

              }
            }
          }
        }
      }
    }
    .title {
      //width: 100%;
      height: 40px;
      padding: 0 10px;
      border-bottom: 1px solid @tableBorderColor;
      p {
        font-size: 12px;
        color: @normalFontColor;
        text-align: right;
        &:first-child {
          text-align: left;
        }
      }
    }
    .wrap {
      position: relative;
      // width: 100%;
      height: 40px;
      padding: 0 10px;
      border-bottom: 1px solid @tableBorderColor;
      p {
        font-size: 12px;
        color: @fontColor;
        text-align: right;
        &:first-child {
          text-align: left;
        }
        /*&.margin {*/
        /*cursor: pointer;*/
        /*&:hover {*/
        /*color: #7e9efd;*/
        /*}*/
        /*}*/
      }
      .before {
        position: absolute;
        left: 1px;
        top: 0;
        width: 4px;
        height: 100%;
      }
      .input {
        margin-right: 6px;
        width: 122px;
        height: 32px;
        padding-left: 8px;
        border: solid 1px @tradeInputBorderColor;
        border-radius: 3px;
        color: @fontColor;
        background-color: @tradeInputColor;
      }
      .button {
        display: inline-block;
        // width: 110px;
        // width: 56px;
        padding:0 4px;
        height: 22px;
        line-height: 22px;
        font-size: 12px;
        color: @tradeListBlueFontColor;
        text-align: center;
        background-color: #fff;
      }
      .button1 {
        // background-color: #313151;
      }
      .button2 {
        // margin-left: 8px;
        // background-color: #d64172;
      }
      .closed {
        color: #fff;
        background-color: #d64172;
      }
      .cancelButton {
        span {
          color: #7e9efd;
          &:hover {
            color: #666b93;
            cursor: pointer;
          }
        }
      }
      .useless {
        display: inline-block;
        width: 64px;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        color: #fff;
        text-align: center;
        background-color: #313451;
        &:hover {
          background-color: #313451;
        }
      }
    }
    .tip {
      position: relative;
      display: inline-block;
      vertical-align: text-top;
      color: @normalFontColor;
      cursor: pointer;
      span {
        display: none;
      }
      &:hover {
        span {
          display: inline-block;
          width: 160px;
          height: 24px;
          line-height: 24px;
          .border-radius(2px);
          position: absolute;
          left: 58px;
          top: 0px;
          background-color: #646890;
          color: @fontColor;
          text-align: center;
          z-index: 999;
          &::after {
            content: '';
            position: absolute;
            left: -8px;
            bottom: 10px;
            width: 0;
            height: 0;
            border: 4px solid transparent;
            border-right: 4px solid @normalFontColor;
          }
        }
      }
    }
    .tipAuto {
      position: relative;
      display: inline-block;
      vertical-align: text-top;
      color: @normalFontColor;
      cursor: pointer;
      span {
        display: none;
      }
      &:hover {
        span {
          display: inline-block;
          width: 160px;
          line-height: 24px;
          .border-radius(2px);
          position: absolute;
          left: 58px;
          top: 0px;
          background-color: #646890;
          color: @fontColor;
          text-align: center;
          z-index: 999;
          &::after {
            content: '';
            position: absolute;
            left: -8px;
            bottom: 108px;
            width: 0;
            height: 0;
            border: 4px solid transparent;
            border-right: 4px solid @normalFontColor;
          }
        }
      }
    }
    .tipWidth {
      position: relative;
      display: inline-block;
      vertical-align: text-top;
      color: @normalFontColor;
      cursor: pointer;
      span {
        display: none;
      }
      &:hover {
        span {
          display: inline-block;
          width: 370px;
          line-height: 24px;
          .border-radius(2px);
          position: absolute;
          left: 58px;
          top: 0px;
          background-color: #646890;
          color: @fontColor;
          text-align: center;
          z-index: 999;
          &::after {
            content: '';
            position: absolute;
            left: -8px;
            bottom: 108px;
            width: 0;
            height: 0;
            border: 4px solid transparent;
            border-right: 4px solid @normalFontColor;
          }
        }
      }
    }
    .tipValue {
      position: relative;
      display: inline-block;
      vertical-align: text-top;
      color: @normalFontColor;
      cursor: pointer;
      span {
        display: none;
      }
      &:hover {
        span {
          display: inline-block;
          width: 320px;
          line-height: 24px;
          .border-radius(2px);
          position: absolute;
          left: 48px;
          top: 0px;
          background-color: #646890;
          color: @fontColor;
          text-align: center;
          z-index: 999;
          &::after {
            content: '';
            position: absolute;
            left: 2px;
            bottom: 108px;
            width: 0;
            height: 0;
            border: 4px solid transparent;
            border-right: 4px solid @normalFontColor;
          }
        }
      }
    }
    /*.contract-name {*/
    /*position: relative;*/
    /*.point {*/
    /*position: absolute;*/
    /*top: 1px;*/
    /*left: 1px;*/
    /*display: inline-block;*/
    /*width: 4px;*/
    /*height: 4px;*/
    /*line-height: 18px;*/
    /*border-radius: 2px;*/
    /*background-color: #fff;*/
    /*}*/
    /*}*/
    .point {
      display: inline-block;
      margin-bottom: 2px;
      width: 4px;
      height: 4px;
      line-height: 18px;
      border-radius: 2px;
      background-color: #fff;
    }
    
    .buyColor {
      color: #0ab480 !important;
    }
    .sellColor {
      color: @downColor !important;
    }
    .buyColorBg {
      background: #0ab480 !important;
    }
    .sellColorBg {
      background: @downColor !important;
    }
    .no-data {
      height: 100%;
      padding-top: 170px;
      background: url("../../assets/images/newUI/table-default-bg-black.png") no-repeat center 50px;
      background-size: 190px 108px;
      p {
        font-size: 12px;
        color: @fontColor;
        // color: @noDataFontColor;
      }
    }
  }
  .trade-detail-done-white {
    .themeWhite();
    /deep/.first-filter{
      .el-table__column-filter-trigger{
        float: left;
      }
      .currency-cell{
        float: left;
        // margin-right: 7px;
        height: 34px;
        line-height: 32px;
        text-overflow: clip !important;
      }
      .el-icon-arrow-down{
        vertical-align: middle;
      }
      .el-icon-arrow-down::before{
        content: "" !important;
        display: inline-block;
        width: 8px;
        height: 10px;
        background: url('../../assets/images/svg/select1.svg') no-repeat;
        background-size: 100% 100%;
        transform: scale(1.4);
      }
      .shaixuan{
        display: inline-block;
        width: 8px;
        height: 10px;
        background: url('../../assets/images/svg/select1.svg') no-repeat;
        background-size: 100% 100%;
        position: relative;
        top: 2px;
        left: 7px;
      }
      .isactive{
        background: url('../../assets/images/svg/select3.svg') no-repeat;
      }
    }
    /deep/.el-table .sort-caret.ascending{
      border-bottom-color: #8998B6;
    }
    /deep/.el-table .sort-caret.descending{
      border-top-color: #8998B6;
    }
    /deep/.ascending{
      .ascending{
        border-bottom-color: #7E9EFD !important;
      }
    }
    /deep/.descending{
      .descending{
        border-top-color: #7E9EFD !important;
      }
    }
    float: left;
    width: 100%;
    min-width: 620px;
    .toast {
      position: absolute;
    }
    .table {
      width: 100%;
      table {
        width: 100%;
        /*cellspacing: "0";//表示单元格之间间隙为0。*/
        /*cellpadding: "0";*/
        border-collapse: collapse;
        thead {
          tr {
            th {
              height: 30px;
              line-height: 30px;
              color: @tradeListTheadColor;
              text-align: right;
              font-size: 12px;
              &:first-child {
                text-align: left;
                padding-left: 10px;
              }
              &:last-child {
                text-align: center;
              }
            }
          }
        }
        tbody {
          tr {
            td {
              height: 32px;
              line-height: 32px;
              color: @tradeListFontColor;
              font-size: 12px;
              text-align: right;
              border-top: 1px solid @tradeListBorderColor;
              border-bottom: 1px solid @tradeListBorderColor;
              &:first-child {
                text-align: left;
                padding-left: 10px;
              }
              &:last-child {
                text-align: center;
              }
            }
            .button {
              display: inline-block;
              // width: 56px;
              padding: 0 4px;
              height: 22px;
              line-height: 22px;
              font-size: 12px;
              color: @tradeListBlueFontColor;
              text-align: center;
              background-color: transparent;
              border: 1px solid transparent;
              border-radius: 3px;
              &:hover {
                background-color: #597AB9;
              }
            }
            .button1 {
            }
            .button2 {
              // margin-left: 8px;
            }
            &:hover {
              background-color: @tradeListHoverColor;
              //.button {
                //background-color: @tradeListButtonHoverColor;
              //}
            }
          }
        }
      }
    }
    .title {
      //width: 100%;
      height: 40px;
      padding: 0 10px;
      border-bottom: 1px solid @tableBorderColor;
      p {
        font-size: 12px;
        color: @normalFontColor;
        text-align: right;
        &:first-child {
          text-align: left;
        }
      }
    }
    .wrap {
      position: relative;
      // width: 100%;
      height: 40px;
      padding: 0 10px;
      border-bottom: 1px solid @tableBorderColor;
      p {
        font-size: 12px;
        color: @fontColor;
        text-align: right;
        &:first-child {
          text-align: left;
        }
        /*&.margin {*/
        /*cursor: pointer;*/
        /*&:hover {*/
        /*color: #7e9efd;*/
        /*}*/
        /*}*/
      }
      .before {
        position: absolute;
        left: 1px;
        top: 0;
        width: 4px;
        height: 100%;
      }
      .input {
        margin-right: 6px;
        width: 122px;
        height: 32px;
        padding-left: 8px;
        border: solid 1px @tradeInputBorderColor;
        border-radius: 3px;
        color: @fontColor;
        background-color: @tradeInputColor;
      }
      .button {
        display: inline-block;
        // width: 110px;
        // width: 56px;
        padding: 0 4px;
        height: 22px;
        line-height: 22px;
        font-size: 12px;
        color: @tradeListBlueFontColor;
        text-align: center;
        background-color: #fff;
        &:hover {
          background-color: #597AB9;
        }
      }
      .button1 {
        // background-color: #313151;
      }
      .button2 {
        // margin-left: 8px;
        // background-color: #d64172;
      }
      .closed {
        color: #fff;
        background-color: #d64172;
      }
      .cancelButton {
        span {
          color: #7e9efd;
          &:hover {
            color: #666b93;
            cursor: pointer;
          }
        }
      }
      .useless {
        display: inline-block;
        width: 64px;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        color: #fff;
        text-align: center;
        background-color: #313451;
        &:hover {
          background-color: #313451;
        }
      }
    }
    .tip {
      position: relative;
      display: inline-block;
      vertical-align: text-top;
      color: @normalFontColor;
      cursor: pointer;
      span {
        display: none;
      }
      &:hover {
        span {
          display: inline-block;
          width: 160px;
          height: 24px;
          line-height: 24px;
          .border-radius(2px);
          position: absolute;
          left: 58px;
          top: 0px;
          background-color: #646890;
          color: @fontColor;
          text-align: center;
          z-index: 999;
          &::after {
            content: '';
            position: absolute;
            left: -8px;
            bottom: 10px;
            width: 0;
            height: 0;
            border: 4px solid transparent;
            border-right: 4px solid @normalFontColor;
          }
        }
      }
    }
    .tipAuto {
      position: relative;
      display: inline-block;
      vertical-align: text-top;
      color: @normalFontColor;
      cursor: pointer;
      span {
        display: none;
      }
      &:hover {
        span {
          display: inline-block;
          width: 160px;
          line-height: 24px;
          .border-radius(2px);
          position: absolute;
          left: 58px;
          top: 0px;
          background-color: #646890;
          color: @fontColor;
          text-align: center;
          z-index: 999;
          &::after {
            content: '';
            position: absolute;
            left: -8px;
            bottom: 108px;
            width: 0;
            height: 0;
            border: 4px solid transparent;
            border-right: 4px solid @normalFontColor;
          }
        }
      }
    }
    .tipWidth {
      position: relative;
      display: inline-block;
      vertical-align: text-top;
      color: @normalFontColor;
      cursor: pointer;
      span {
        display: none;
      }
      &:hover {
        span {
          display: inline-block;
          width: 370px;
          line-height: 24px;
          .border-radius(2px);
          position: absolute;
          left: 58px;
          top: 0px;
          background-color: #646890;
          color: @fontColor;
          text-align: center;
          z-index: 999;
          &::after {
            content: '';
            position: absolute;
            left: -8px;
            bottom: 108px;
            width: 0;
            height: 0;
            border: 4px solid transparent;
            border-right: 4px solid @normalFontColor;
          }
        }
      }
    }
    .tipValue {
      position: relative;
      display: inline-block;
      vertical-align: text-top;
      color: @normalFontColor;
      cursor: pointer;
      span {
        display: none;
      }
      &:hover {
        span {
          display: inline-block;
          width: 320px;
          line-height: 24px;
          .border-radius(2px);
          position: absolute;
          left: 48px;
          top: 0px;
          background-color: #646890;
          color: @fontColor;
          text-align: center;
          z-index: 999;
          &::after {
            content: '';
            position: absolute;
            left: 2px;
            bottom: 108px;
            width: 0;
            height: 0;
            border: 4px solid transparent;
            border-right: 4px solid @normalFontColor;
          }
        }
      }
    }
    .point {
      display: inline-block;
      margin-bottom: 2px;
      width: 4px;
      height: 4px;
      line-height: 18px;
      border-radius: 2px;
      background-color: #fff;
    }
    .buyColor {
      color: #0AB480 !important;
    }
    .sellColor {
      color: #E12961 !important;
    }
    .buyColorBg {
      background: #0AB480 !important;
    }
    .sellColorBg {
      background: #E12961 !important;
    }
    .no-data {
      height: 100%;
      padding-top: 170px;
      background: url("../../assets/images/newUI/table-default-bg-white.png") no-repeat center 50px;
      background-size: 190px 108px;
      p {
        font-size: 12px;
        color: @noDataFontColor;
      }
    }
  }
</style>
