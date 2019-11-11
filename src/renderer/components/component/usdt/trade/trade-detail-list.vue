<template>
  <div :class="{'trade-detail-list':'black' === themeValue, 'trade-detail-list-white': 'white' === themeValue}">
    <st-row class="tags">
      <a v-for="item in showTags" :key="item.id" @click="changeTag(item.id)">
        <span :class="{'active': item.id === tag}">{{ item.name }}</span>
      </a>
      <a v-if="tag === 1" class="cancel-batch">
        <span :class="{'disabled': closeAllStatus === false}" @click="showCancelAllLayer()">{{ $t('message.transactionList.closeAll') }}</span>
        <el-tooltip popper-class="tooltip-content" :content="$t('message.transactionList.prompt')" placement="top">
          <el-button style="background:none;border:none;padding:0;" class="tooltipinfo iconfont icon-wenhaofill"></el-button>
        </el-tooltip>
        <!-- <span class="iconfont icon-wenhaofill"></span>
        <prompt class="tip" :message="'一键全平仅支持市价报单方式，可能会产生较大的风险'"></prompt> -->
      </a>
      <a v-if="tag === 2" class="cancel-batch" @click="showCancelAllLayer1()">
        <span :class="{'disabled': batchWithdrawal === false}" >{{$t('message.transactionList.batchCancel')}}</span>
      </a>
      <a v-if="tag === 3 || tag===4" class="cancel-batch" @click="$router.push('/history/'+$route.params.id)">
        <span>{{$t('message.header.tradeHistory')}}</span>
      </a>
      <!-- <router-link v-if="tag === 3 || tag === 4" class="cancel-batch" :to="'/information/tradeHistory/'+$route.params.id">
        <span>{{$t('message.common.more')}}</span>
      </router-link> -->
    </st-row>
    <st-row class="content" direction="column" v-if="true">
      <trade-detail-position v-if="tag === 1"></trade-detail-position>
      <trade-detail-current v-if="tag === 2"></trade-detail-current>
      <trade-detail-done v-if="tag === 3"></trade-detail-done>
      <trade-detail-cancel v-if="tag === 4"></trade-detail-cancel>
      <!-- 止盈止损 -->
      <trade-detail-loss v-if="tag === 5"></trade-detail-loss>
    </st-row>
    <popup :title="' '"
           :bgColor="bgColor"
           :boxWidth="'320px'"
           :borderB="borderB"
           :callback="closeLayerClosedNormal" v-if="showCancelNormal">
      <layer-cancel-all
        :showLayerCancelALlToastError="showLayerError"
        :info="$t('message.transactionList.A_All_FullFlat_Info')"
        :title="$t(`message.transactionList.A_All_FullFlat_Title`)"
        :showLayerCancelALlToastSuccess="showLayerSuccess"></layer-cancel-all>
      <!--<layer-normal :text="$t('message.layerPositionClosed.tip1')"></layer-normal>-->
      <layer-button :close="closeLayerClosedNormal" :confirm="close"></layer-button>
    </popup>
    <popup :title="' '"
           :bgColor="bgColor"
           :boxWidth="'320px'"
           :borderB="borderB"
           :callback="closeLayerClosedNormal1" v-if="showCancelNormal1">
      <layer-cancel-all
        :info="$t('message.transactionList.A_All_Cancel_Info')"
        :title="$t(`message.transactionList.A_All_Cancel_Title`)"
        :showLayerCancelALlToastError="showLayerError1"
        :showLayerCancelALlToastSuccess="showLayerSuccess1"></layer-cancel-all>
      <!--<layer-normal :text="$t('message.layerPositionClosed.tip1')"></layer-normal>-->
      <layer-button :close="closeLayerClosedNormal1" :confirm="cancelBatchOrder"></layer-button>
    </popup>
    <Toast v-show="showToast" :message="toastMessage"></Toast>
  </div>
</template>

<script>
  // import Cookie from '@/assets/js/config/cookie'
  import Toast from '../../components/trade/toast.vue'
  import TradeDetailPosition from "./trade-detail-position.vue"
  import TradeDetailCurrent from "./trade-detail-current.vue"
  import TradeDetailDone from "./trade-detail-done.vue"
  import TradeDetailCancel from "./trade-detail-cancel.vue"
  import LayerCancelAll from './layer-cancel-all.vue'
  import LayerButton from './layer-button.vue'
  import Popup from './popup.vue'
  import Prompt from './prompt.vue'
  import SwapsApi from '@/assets/js/api/swapsApi'
  import TradeDetailLoss from "./trade-detail-loss.vue";

  export default {
    name: 'trade-detail-list',
    components: {
      TradeDetailPosition,
      TradeDetailCurrent,
      TradeDetailDone,
      TradeDetailCancel,
      LayerCancelAll,
      TradeDetailLoss,
      Popup,
      Prompt,
      LayerButton,
      Toast
    },
    data () {
      return {
        tag: 1,
        canClick: true,
        price: null,
        showCancelNormal: false,
        showCancelNormal1: false,
        bgColor: '#20283B',
        borderB: '',
        showToast: false,
        toastMessage: '',
        batchWithdrawal: true
      }
    },
    computed: {
      // position () {
      //   return this.$store.state.market.position || {}
      // },
      // positionList () {
      //   return this.position ? this.position['contractId' + this.$route.params.id] : {}
      // },
      showTags () {
        return [
          {
            id: 1,
            name: this.$t('message.transactionList.positions')
          },
          {
            id: 2,
            name: this.$t('message.transactionList.currentEntrustment')
          },
          {
            id: 3,
            name: this.$t('message.transactionList.excuted')
          },
          {
            id: 4,
            name: this.$t('message.transactionList.records')
          },
          {
            id: 5,
            name: this.$t('message.transactionList.profitDeficit')
          }
        ]
      },
      themeValue () {
        return this.$store.state.dictionary.theme
      },
      closeAllStatus () {
        return this.$store.state.market.positionList
      }
    },
    watch: {
      themeValue: {
        handler (val) {
          if (val === 'black') {
            this.bgColor = '#20283B'
            this.borderBottom = ''
          } else {
            this.bgColor = '#fff'
            this.borderBottom = 'none'
          }
        },
        immediate: true
      },
      "$store.state.market.positionList" () {
        // console.log(this.$store.state.market.positionList)
      },
      "$store.state.market.batchWithdrawal" () {
        this.batchWithdrawal = this.$store.state.market.batchWithdrawal
      }
    },
    methods: {
      showToastFunc (message) {
        if (!message) return
        this.showToast = true
        this.toastMessage = message
        setTimeout( () => {
          this.showToast = false
        }, 2000)
      },
      showLayerError (code) {
        this.showToastFunc(this.$dictionary.error(code))
      },
      showLayerSuccess () {
        this.showToastFunc(this.$t('message.common.success'))
      },
      closeLayerClosedNormal () {
        this.showCancelNormal = false
      },
      showCancelAllLayer () {
        // if (!(this.list && this.list.length)) return
        if (this.closeAllStatus) {
          this.showCancelNormal = true
        } else {
          return
        }
      },
      showLayerError1 (code) {
        this.showToastFunc(this.$dictionary.error(code))
      },
      showLayerSuccess1 () {
        this.showToastFunc(this.$t('message.common.success'))
      },
      closeLayerClosedNormal1 () {
        this.showCancelNormal1 = false
      },
      showCancelAllLayer1 () {
        // if (!(this.list && this.list.length)) return
        if (this.$store.state.market.batchWithdrawal) {
          this.showCancelNormal1 = true
        } else {
          return
        }
      },
      // 更改tag
      changeTag (tag) {
        this.tag = tag
      },
      // 批量撤单
      cancelBatchOrder () {
        // alert('全撤')
        this.showCancelNormal1 = false
        SwapsApi.cancelOrderAll()
          .then(res => {
            this.showToastFunc(this.$t('message.errorCode.'+res.code))
          })
          .catch(e => {
            this.showToastFunc(this.$t('message.errorCode.'+e.data.code))
          })
        // if (!this.canClick) {
        //   return
        // }
        // this.canClick = false
        // this.swapsApi.cancelBatchOrder(this.$route.params.id)
        //   .then(res => {
        //     this.$toast(this.$t('message.common.success'))
        //     clearTimeout(this.$refs.current.timeout)
        //     this.$refs.current.timeout = null
        //     this.$refs.current.getOrderList(this.$route.params.id, '0,1')
        //     this.canClick = true
        //   })
        //   .catch(e => {
        //     this.canClick = true
        //   })
      },
      close () {
        this.showCancelNormal = false
        SwapsApi.closeAll().then(res => {
          this.showLayerError(res.code)
        }).catch(err => {
          this.showLayerError(err.data.code)
        })
      }
    }
  }
</script>

<style lang="less" scoped>
  @import '../../assets/css/theme';
  .disabled:hover{
    cursor: not-allowed !important;
  }
  .tip {
    width: 188px!important;
    height: 62px!important;
    text-align: left!important;
    line-height: 22px!important;
    color: #CBD7F0!important;
    padding: 10px!important;
    top: -60px!important;
    right: -6px!important;
    display: none!important;
  }
  .iconfont:hover + .tip {
    display: block;
  }

  .trade-detail-list {
    .themeBlack();
    position: relative;
    width: 100%;
    min-width: 620px;
    // overflow-y: scroll;
    // overflow-x: hidden;
    overflow: hidden;
    // height: 426px;
    background: @positionBgColor;
    .toast {
      position: absolute;
    }
    .tooltipinfo{
      opacity: 0.5;
      color: #7E9EFD;
    }
    .tooltipinfo:hover{
      opacity: 1;
    }
    .scroll-bar();
    .tags {
      height: 36px;
      position: relative;
      z-index: 5;
      width: 100%;
      min-width: 620px;
      background-color: @positionTitleBgColor;
      a {
        position: relative;
        margin-left: 30px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 14px;
        span {
          display: inline-block;
          height: 36px;
          color: @fontColor;
        }
        &:first-child {
          margin-left: 10px;
        }
        .active {
          display: inline-block;
          color: #7e9efd;
          //border-bottom: 2px solid #7e9efd;
          line-height: 36px;
          &:after {
            position: absolute;
            width: 100%;
            right: 0;
            bottom:0;
            content: '';
            display: inline-block;
            height:2px;
            background-color: #7e9efd;
          }
        }
      }
      .cancel-batch {
        margin-right: 10px;
        position: absolute;
        right: 0;
        cursor: pointer;
        span:hover {
          color: #7e9efd;
        }
      }
    }
    .content {
      position: relative;
      width: 100%;
      min-width: 620px;
      // display: flex;
      // float: left;
      /*overflow-x: scroll;*/
      /*overflow-y: hidden;*/
      height: 278px;
    }
  }
  .trade-detail-list-white {
    .themeWhite();
    position: relative;
    width: 100%;
    min-width: 620px;
    // overflow-y: scroll;
    // overflow-x: hidden;
    overflow: hidden;
    // height: 426px;
    background: @positionBgColor;
    .toast {
      position: absolute;
    }
    .tooltipinfo{
      opacity: 0.5;
      color: #597AB9;
    }
    .tooltipinfo:hover{
      opacity: 1;
    }
    .scroll-bar();
    .tags {
      position: relative;
      z-index: 5;
      width: 100%;
      min-width: 620px;
      background: @positionTitleBgColor;
      box-shadow: 0 2px 10px 0 rgba(89,122,185,0.10);
      a {
        position: relative;
        margin-left: 30px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 14px;
        span {
          display: inline-block;
          height: 34px;
          color: @assetFontColor;
        }
        &:first-child {
          margin-left: 10px;
        }
        .active {
          display: inline-block;
          color: #7e9efd;
          //border-bottom: 2px solid #7e9efd;
          line-height: 36px;
          &:after {
            position: absolute;
            width: 100%;
            right: 0;
            bottom:0;
            content: '';
            display: inline-block;
            height:2px;
            background: #7e9efd;
          }
        }
      }

      .cancel-batch {
        margin-right: 10px;
        position: absolute;
        right: 0;
        cursor: pointer;
        span {
          color: #597AB9;
          &:hover {
            color: #4B6AA5;
          }
        }
      }
    }
    .content {
      position: relative;
      width: 100%;
      min-width: 620px;
      // display: flex;
      // float: left;
      /*overflow-x: scroll;*/
      /*overflow-y: hidden;*/
      height: 278px;
    }
  }
</style>
