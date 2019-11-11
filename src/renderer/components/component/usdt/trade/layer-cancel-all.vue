<template>
  <div
    :class="{'layer-cancel-all':'black' === themeValue, 'layer-cancel-all-white': 'white' === themeValue}"
  >
    <div class="content">
      <div class="text" style="padding-left: 65px;padding-right:45px;">
        <span class="icon"></span>
        <!--<span class="text1">{{text1}}</span><br>-->
        <span class="text2">{{title}}</span>
        <br />
        <span class="text3">{{info}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import LayerButton from "./layer-button.vue";
export default {
  name: "layer-cancel-all",
  props: {
    title: String,
    info: String
  },
  components: {
    LayerButton
  },
  //    props: {
  //      closedData: {
  //        type: Object,
  //        required: true
  //      }
  //    },
  data() {
    return {
      text1: "",
      text2: "",
      text3: "",
      type: "",
      side: ""
    };
  },
  computed: {
    contractInfo() {
      return this.$store.state.dictionary.contract.filter(item => {
        return Number(this.$route.params.id) === Number(item.id);
      })[0];
    },
    // 此合约的币种
    contractCoin() {
      return this.contractInfo.unit.toUpperCase();
    },
    // 主题
    themeValue() {
      return this.$store.state.dictionary.theme;
    }
  },
  methods: {
    //      changeLeverage (contractId, newLeverage, newPositionType) {
    //        this.swapsApi.changePositionLeverage({contractId, newLeverage, newPositionType})
    //          .then(res => {
    //            // this.$toast(this.$t('message.common.success'))
    //            this.$emit('showLayerCancelALlToastSuccess')
    //          })
    //          .catch(e => {
    //            this.$emit('showLayerCancelALlToastError', e.code)
    //          })
    //      },
  },
  mounted() {}
};
</script>

<style lang="less" scoped>
@import url("../../assets/css/theme");
.layer-cancel-all {
  .themeBlack();
  width: 320px;
  background-color: @layerCloseBgColor;
  color: @fontColor;
  .content {
    position: relative;
    margin: 0 auto;
    text-align: center;
    padding-top: 0px;
    .text {
      padding-bottom: 28px;
      span {
        color: @fontColor;
      }
      .text1 {
        font-size: 14px;
        color: @downColor;
      }
      .text2 {
        width: 100%;
        text-align: left;
        display: inline-block;
        font-size: 16px;
      }
      .text3 {
        display: inline-block;
        width: 100%;
        text-align: left;
        font-size: 12px;
        color: #7889a9 !important;
      }
      .icon {
        position: absolute;
        top: 0px;
        left: 26px;
        width: 42px;
        height: 42px;
        background: url("../../assets/images/newUI/sell.png") no-repeat;
        // background-color: #F6A217;
        background-size: cover;
        border: 1px solid transparent;
        border-radius: 100%;
        display: block;
      }
    }
  }
}
.layer-cancel-all-white {
  .themeWhite();
  background-color: @boxBgColor;
  color: @fontColor;
  .content {
    position: relative;
    margin: 0 auto;
    text-align: center;
    padding-top: 10px;
    .text {
      padding-bottom: 28px;
      span {
        color: #24324c;
      }
      .text1 {
        font-size: 14px;
        color: @downColor;
      }
      .text2 {
        width: 100%;
        text-align: left;
        display: inline-block;
        font-size: 16px;
      }
      .text3 {
        display: inline-block;
        width: 100%;
        text-align: left;
        font-size: 12px;
        color: #7889a9 !important;
      }
      .icon {
        position: absolute;
        top: 20px;
        left: 20px;
        width: 42px;
        height: 42px;
        background: url("../../assets/images/newUI/sell.png") no-repeat;
        // background-color: #F6A217;
        background-size: cover;
        border: 1px solid transparent;
        border-radius: 100%;
        display: block;
      }
    }
  }
}
</style>
