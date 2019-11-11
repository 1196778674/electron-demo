<template>
  <div class="stop-profit">
    <div class="box" style="padding-top: 20px;">
      <st-row justify="between" align="center">
        <div class="tab" :class="{active: type === 0}" @click="tabChange(0)">限价</div>
        <div class="tab" :class="{active: type === 1}" @click="tabChange(1)">市价</div>
      </st-row>
    </div>
    <div class="box" style="margin-top: 14px;">
      <st-row class="input" style="margin-top: 14px;">
        <st-row class="item">
          <div class="left-icon" @click="showPriceSelected">
            <div class="name">{{ '大于' }}</div>
            <div class="triangle-up" :class="{trans: priceSelected}"></div>
          </div>
          <left-select
            v-if="priceSelected"
            :top="32"
            :width="80"
            :left="4"
            :list="[{name: '你好'},{name: '你好'}]"
            @selection="priceSelectedCallback"
          ></left-select>
          <input type="text"
                    id="entrustPlanOrderForm_price"
                    autofocus="autofocus">
          <prompt :message="'请输入'+$t('message.trade.executePrice')" v-show="priceTip"></prompt>
        </st-row>
      </st-row>
    </div>
    <div class="box" style="margin-top: 10px;">
      <st-row class="input">
        <st-row class="item">
          <span class="label">{{ '价格' }}</span>
          <input type="text"
                  id="entrustPlanOrderForm_price"
                  autofocus="autofocus">
          <span class="unit">手</span>
        </st-row>
        <prompt :message="'请输入'+$t('message.trade.executePrice')" v-show="priceTip"></prompt>
      </st-row>
    </div>
    <div class="box" style="margin-top: 10px;">
      <st-row class="input">
        <st-row class="item">
          <span class="label">{{ '平仓数量' }}</span>
          <input type="text"
                  id="entrustPlanOrderForm_price"
                  autofocus="autofocus">
          <span class="unit">手</span>
        </st-row>
        <prompt :message="'请输入'+$t('message.trade.executePrice')" v-show="priceTip"></prompt>
      </st-row>
    </div>
    <div class="box" style="padding: 5px 0 15px 0;">
      <slider @sliderPercentage="sliderSize"></slider>
    </div>
  </div>
</template>
<script>
import Prompt from './prompt.vue'
import Slider from './trade-slider.vue'
import LeftSelect from './left-select.vue'
export default {
  name: 'stop-profit',
  components: {
    Prompt,
    Slider,
    LeftSelect
  },
  data () {
    return {
      type: 0,
      priceTip: false,
      numTip: false,
      priceSelected: false
    }
  },
  computed: {
    contractInfo() {
      let tmp = this.$store.state.market.contract.filter(item => {
        return Number(item.id) === Number(this.$route.params.id)
      })
      return tmp[0] || {}
    },
    figure () {
      let tmp = this.$store.state.market.contract.filter(item => {
        return Number(item.id) === Number(this.contractInfo.id)
      })
      return tmp[0] && tmp[0].contractParam || {}
    }
  },
  watch: {
    
  },
  methods: {
    tabChange (val) {
      this.type = val
    },
    sliderSize (val) {
      
    },
    priceSelectedCallback (val) {
      this.priceSelected = false
    },
    showPriceSelected () {
      this.priceSelected = !this.priceSelected
    }
  }
}
</script>
<style lang="less" scoped>
  @import url("../../assets/css/theme");
  .themeBlack();
  .stop-profit{
    background-color: @promptBgColor;
  }
  .box {
    width: 250px;
    margin: 0 auto;
  }
  .trans {
    transform: rotate(-180deg);
  }
  .tab {
    width: 125px;
    height: 32px;
    line-height: 32px;
    text-align: center;
    background: @popupBgColor;
    font-size: 12px;
    cursor: pointer;
  }
  .active {
    border: solid 1px @headerTagsActiveBorderColor;
    border-radius: 3px;
    color: @layerOperateClosedButtonActiveColor;
  }
  .input {
    position: relative;
    width: 100%;
    .item {
      .left-icon {
        .flex-box(row,flex-start,center);
        position: absolute;
        left: 0;
        width: 50px;
        height: 32px;
        cursor: pointer;
        .name {
          width: 38px;
          font-size: 12px;
          color: #666b93;
          padding-left: 10px;
        }
      }
      position: relative;
      width: 100%;
      // .flex-grow();
      height: 32px;
      // border: 1px solid #253a5e;
      input {
        width: 100%;
        height: 100%;
        padding-left: 70px;
        // border-style: solid;
        border-radius: 2px;
        background: @popupBgColor;
        color: @fontColor;
        font-size: 12px;
        text-align: left;
        .placeholder({color: #6c85ae; font-size: 12px;});
        &:focus {
          border: 1px solid @layerOperateClosedInputActiveBorderColor;
        }
      }
      span {
        position: absolute;
        margin-left: 10px;
        right: 0;
        top: 0;
        display: block;
        width: 32px;
        // background: #243b63;
        line-height: 32px;
        font-size: 12px;
        color: #666b93;
        text-align: center;
        height: 100%;
      }
      .label {
        left: 0;
        width: 50px;
        text-align: left;
      }
    }
    .error {
      position: absolute;
      bottom: -18px;
      left: 0px;
      width: 100%;
      text-align: right;
      font-size: 12px;
      color: #d32f2f;
    }
  }
</style>

