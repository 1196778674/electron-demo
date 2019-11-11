<template>
	<div :class="{'trade-detail-loss':'black' === themeValue, 'trade-detail-loss-white': 'white' === themeValue}">
		<div class="table-wrapper" style="width: 100%;">
			<el-table :data="list" max-height="278" class="el-table-content" v-if="filterlists.length > 0" :header-cell-class-name="cellName">
				<!-- <el-table-column prop="contractName" width="140" :label="$t('message.transactionList.currency')" :render-header='header'> -->
				<el-table-column prop="contractName" width="140" :label="$t('message.transactionList.currency')">
          <template v-if="scope.row.side" slot-scope="scope">
            <span :class="[scope.row.side === 1 ? 'buyColorBg point' : 'sellColorBg point']"></span>
            <span style="font-weight: bold;">{{ scope.row.contractName }}</span>
            <span :class="[scope.row.side === 1 ? 'buyColor' : 'sellColor']">
              {{ scope.row.side === 1 ? $t('message.transactionList.more') : $t('message.transactionList.less') }}
            </span>
          </template>
        </el-table-column>
        <el-table-column  prop="mode" min-width="90" sortable align="right" :label="$t('message.transactionList.profitLoss')" >
          <template v-if="scope.row.side"  slot-scope="scope">
            <span :class="[scope.row.mode === 1 ? 'buyColor' : 'sellColor']">{{ scope.row.mode | toBool({1: $t('message.transactionList.stopProfit'), 2: $t('message.transactionList.stopLoss'),3: $t('message.transactionList.triggerOrder')}) }}</span>
          </template>
        </el-table-column>
        <el-table-column  prop="triggerPrice" min-width="110"  align="right" :label="$t('message.transactionList.triggerPrice')" >
          <template v-if="scope.row.side"  slot-scope="scope">
            <span>{{ scope.row.triggerPrice }}</span>
          </template>
        </el-table-column>
        <el-table-column  prop="priceType" min-width="100"  align="right" :label="$t('message.transactionList.mode')" >
          <template v-if="scope.row.side" slot-scope="scope">
            <span>{{ scope.row.priceType | toBool({1: $t(`message.transactionList.S_LimitPrice`), 2: $t(`message.transactionList.S_MarketPrice`)}) }}</span>
          </template>
        </el-table-column>
        <el-table-column  prop="price" min-width="110"  align="right" :label="$t('message.transactionList.executionPrice')" >
          <template v-if="scope.row.side"  slot-scope="scope">
            <span v-if="scope.row.priceType === 1">{{ scope.row.price }}</span>
            <span v-if="scope.row.priceType === 2">{{ $t(`message.transactionList.S_MarketPrice`) }}</span>
          </template>
        </el-table-column>
        <el-table-column  prop="size" min-width=""  align="right" :label="$t('message.transactionList.number')" >
          <template v-if="scope.row.side"  slot-scope="scope">
            <span>{{ scope.row.size }}</span>
          </template>
        </el-table-column>
        <el-table-column  prop="status" min-width="120"  align="right" :label="$t('message.transactionList.status')" >
          <template v-if="scope.row.side"  slot-scope="scope">
            <span>{{ scope.row.status | toBool({
              1: $t('message.transactionList.newOrder'), 
              2: $t('message.transactionList.SuccTrigger'), 
              3: $t('message.transactionList.canceled'), 
              4: $t('message.transactionList.triggerFailed'), 
              5: $t('message.transactionList.liquidationCancel')
              })
            }}</span>
          </template>
        </el-table-column>
        <el-table-column  prop="" width="90"  align="center" :label="$t('message.transactionList.operate')" >
          <template v-if="scope.row.side"  slot-scope="scope">
            <span v-if="scope.row.status=== 1" @click="cancel(scope.row)" class="operate">{{ $t('message.transactionList.A_Cancel') }}</span>
            <!-- <span v-if="scope.row.status=== 3" class="operate">{{ $t('message.transactionList.reorder') }}</span> -->
          </template>
        </el-table-column>
			</el-table>
			<!-- 当前数据为空 -->
			<st-row class="no-data" justify="center" v-if="showN">
        <p>{{ $t('message.transactionList.noData') }}</p>
      </st-row>
		</div>
    <toast v-show="showToast" :message="toastMessage"></toast>
	</div>
</template>

<script>
import SwapsApi from '@/assets/js/api/swapsApi'
import Utils from '../../assets/js/utils.js'
import Toast from '../../components/trade/toast.vue'
export default {

  name: 'trade-detail-loss',
  components: {
    Toast
  },
  data() {
    return {
    	// 列表数据
      list: [],
      // 所有币种列表
      filtersList: [],
      // list数据列表
      filterlists: [],
      // 空平多平 显示数组
      manyEmpty: [{text: this.$t('message.createdEntrust.closeshort'),val: 1,status: false,name: 'many'},{text: this.$t('message.createdEntrust.closelong'),val: 2,status: false,name: 'empty'}],
    	// 是否显示空数组icon
      showN: true,
      // 选择多平空平
      checked: [],
      // 选择的币种
      selectCurrency: [],
      // 选择了多少个币种
      selectNumber: 0,
      // 筛选漏斗高亮
      isactive: false,
      // 显示筛选弹出层
      showpop: false,
      showToast: false,
      toastMessage: '',
      pageSize: 200,
      page:1
    };
  },
  computed: {
  	// 主题
  	themeValue: function () {
      if (this.$store.state.dictionary.theme === 'black') {
        document.getElementsByTagName("body")[0].classList.add("black");
        document.getElementsByTagName("body")[0].classList.remove("white");
      } else {
        document.getElementsByTagName("body")[0].classList.add("white");
        document.getElementsByTagName("body")[0].classList.remove("black");
      }
  		return this.$store.state.dictionary.theme;
  	}
  },
  watch: {
    "$store.state.user.userInfo" () {
      if (!this.$store.state.user.userInfo) {
        this.list= []
        this.showN = true
      } else {
        this.getList()
      }
    },
    '$store.state.market.wsOrder' () {
      let that = this
      setTimeout(function(){
        that.getList()
      },200)
    }
  },
  created () {
    this.setfiltersList()
    if (!this.$store.state.user.userInfo) {
      this.list= []
      this.showN = true
    } else {
      this.getList()
    }
  },
  methods: {
    // 初始化币种列表
    setfiltersList () {
      if (this.$store.state.market.contract) {
        this.filtersList.push({text: this.$t('message.transactionList.all'),value: 'all',click: false,name: "all"})
        this.$store.state.market.contract.filter(item => {
          let reg = /^([\w]*)USDT$/
          if (reg.test(item.name)) {
            this.filtersList.push({ text: item.name.match(reg)[1], value: item.name ,click: false,name: item.name})
          }
        })
      }
    },
    // 第一列name
    cellName ({row, column, rowIndex, columnIndex}) {
      if (columnIndex === 0) {
        return 'first-filter'
      } else {
        return ''
      }
    },
    // 初始化列表
    getList () {
      SwapsApi.getPlanOrder({pageSize: this.pageSize,page: this.page}).then(res => {
        this.filterlists = res.data && res.data.list || []
        this.showN = this.filterlists.length === 0 ? true : false
        this.dataList()
      }).catch(e => {
        console.log(e)
      })
    },
    // 取消
    cancel(row){
      SwapsApi.planCancel({planId: row.id}).then(res => {
        this.showToastFunc(this.$t('message.errorCode.'+res.code))
        this.getList()
      })
      .catch(e => {
        this.showToastFunc(this.$t('message.errorCode.'+e.data.code))
      })
    },
    // 展示toast提示
    showToastFunc (message) {
      if (!message) return
      this.showToast = true
      this.toastMessage = message
      setTimeout( () => {
        this.showToast = false
      }, 2000)
    },
    // 根据筛选条件显示列表
    dataList () {
      // 根据筛选条件查询显示列表
      let that = this
      let lists = []
      let listArr = []
      that.checked = Utils.transReArr(that.checked)
      that.selectCurrency = Utils.transReArr(that.selectCurrency)
      if (that.selectCurrency.length >0) {
        that.selectCurrency.map( item1 => {
          that.filterlists.map(item => {
            if (item1 === item.contractName) {
              lists.push(item)
            }
          })
        })
        if (that.checked.length > 0){
          that.checked.map( item1 => {
            lists.map(item => {
              if (Number(item1) === Number(item.side)) {
                listArr.push(item)
              }
            })
          })
          that.list = listArr
        } else {
          that.list = lists
        }
      } else {
        if (that.checked.length > 0){
          that.checked.map( item1 => {
            that.filterlists.map(item => {
              if (Number(item1) === Number(item.side)) {
                listArr.push(item)
              }
            })
          })
          that.list = listArr
        } else {
          that.list = that.filterlists
        }
      }
      if (!that.list.length && that.filterlists.length) {
        that.list.push({})
      }
    },
    // 筛选
    header (h, { column, $index }) {
      // 筛选
      let that = this
      return h('div',{
          class: 'first-cell',
          style: {
            float: 'left',
            lineHeight: '32px',
            paddingLeft: '0px'
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
              'popper-class': 'pop-filters tooltip-content four-column',
              width: '152',
              placement: 'bottom-start',
              value: that.showpop
            }
          },[
            h("div",{
              style: {
                width: '100%'
              }
            },[
              h('div',{
                class: 'many-empty',
                style: {
                  marginBottom: '10px'
                }
              },that.manyEmpty.map(function (item) {
                return h('label',{
                  class: 'labels-input input-labels'
                },[
                  h('input',{
                    class: item.status ? "input-checkbox-active" : '',
                    attrs: {
                      type: 'checkbox',
                      name: item.name,
                      value: item.val,
                      checked: item.status ? true : false
                    },
                    on: {
                      change (e) {
                        if (that.checked.indexOf(e.target.value) === -1) {
                          that.checked.push(e.target.value)
                          that.manyEmpty.map(item => {
                            if (item.val === Number(e.target.value)){
                              item.status = true
                            }
                          })
                        } else {
                          let checkeds = new Set(that.checked)
                          checkeds.delete(e.target.value)
                          that.checked = Array.from(checkeds)
                          that.manyEmpty.map(item => {
                            if (item.val === Number(e.target.value)){
                              item.status = false
                            }
                          })
                        }
                      }
                    }
                  }),
                  h('span',{
                    class: item.status ? "span-label ischeckeds" : 'span-label',
                    attrs: {
                      for: item.name
                    },
                    domProps: {
                      innerHTML: item.val === 1 ? that.$t('message.createdEntrust.closeshort') : that.$t('message.createdEntrust.closelong')
                    }
                  })
                ])
              })),
              h('div',{
                class: 'currency-list'
              },that.filtersList.map(function (item) {
                return h('label',{
                  class: 'labels-input input-labels'
                },[
                  h('input',{
                    class: item.click ? "input-checkbox-active" : '',
                    attrs: {
                      type: 'checkbox',
                      name: item.name,
                      value: item.value,
                      checked: item.click ? true : false
                    },
                    on: {
                      change (e) {
                        console.log(e.target.value)
                        if (e.target.value !== 'all') {
                          if (that.selectCurrency.indexOf(e.target.value) === -1){
                            // 选中
                            that.selectCurrency.push(e.target.value)
                            that.filtersList.map(item => {
                              if (item.value === e.target.value){
                                item.click = true
                                that.selectNumber ++
                              }
                            })
                          } else {
                            // 取消选择
                            let checkeds = new Set(that.selectCurrency)
                            checkeds.delete(e.target.value)
                            that.selectCurrency = Array.from(checkeds)
                            that.filtersList.map(item => {
                              if (item.value === e.target.value){
                                item.click = false
                                that.selectNumber --
                              }
                            })
                          }
                          console.log(that.selectNumber)
                          // 判断是否需要选中全部
                          if (that.selectNumber === that.filtersList.length - 1){
                            that.filtersList[0].click = true
                          } else {
                            that.filtersList[0].click = false
                          }
                        } else {
                          // 点击全选
                          if (that.filtersList[0].click) {
                            // 全选选中时
                            that.selectCurrency = []
                            that.selectNumber = 0
                            that.filtersList.map(item => {
                              item.click = false
                            })
                          } else {
                            // 全选未选中时
                            that.selectNumber = that.filtersList.length - 1
                            that.selectCurrency = []
                            that.filtersList.map(item => {
                              if (item.value !== 'all'){
                                that.selectCurrency.push(item.value)
                              }
                              item.click = true
                            })
                          }
                        }
                        console.log(that.selectCurrency)
                      }
                    }
                  }),
                  h('span',{
                    class: item.click ? "span-label ischeckeds" : 'span-label',
                    attrs: {
                      for: item.name
                    },
                    domProps: {
                      innerHTML: item.value === 'all'?that.$t('message.transactionList.all'):item.text
                    }
                  })
                ])
              }))
            ]),
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
                    that.selectCurrency = []
                    that.selectNumber = 0
                    that.filtersList.map( cl => {
                      cl.click = false
                    })
                    that.manyEmpty.map( item => {
                      item.status = false
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
                    that.dataList()
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
    // 点击弹层之外关闭弹出层
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
    },
  },
  mounted () {
    document.addEventListener('click', this.fun,false)
  },
  destroyed () {
    document.removeEventListener('click',this.fun,false)
  }
};
</script>

<style lang="less" scoped>
@import '../../assets/css/theme';
// 黑色主题
.trade-detail-loss {
  .themeBlack();
  float: left;
  width: 100%;
  min-width: 620px;
  /deep/.first-filter{
    .el-table__column-filter-trigger{
      float: left;
    }
    .first-cell{
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
  /deep/.operate{
    font-family: PingFangSC-Regular;
    font-size: 12px !important;
    color: #7E9EFD !important;
    letter-spacing: 0; 
    &:hover{
      background: #7E9EFD;
      border-radius: 3px;
      color: #fff !important;
      padding: 3px 5px;
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
// 白色主题
.trade-detail-loss-white{
  .themeWhite();
  float: left;
  width: 100%;
  min-width: 620px;
   /deep/.first-filter{
    .el-table__column-filter-trigger{
      float: left;
    }
    .first-cell{
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
  /deep/.operate{
    font-family: PingFangSC-Regular;
    font-size: 12px !important;
    color: #597AB9 !important;
    letter-spacing: 0; 
    &:hover{
      background: #597AB9;
      border-radius: 3px;
      color: #fff !important;
      padding: 3px 5px;
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
