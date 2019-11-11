<template>
  <div
    :class="{'contract-deep-black': themeValue === 'black', 'contract-deep-white': themeValue === 'white'}"
  >
    <st-row class="title" align="center">
      <h3>{{ '深度' }}</h3>
    </st-row>
    <div class="deep-canvas">
      <canvas ref="deep"></canvas>
      <canvas class="tool-tips" ref="toolTips" @mousemove="mouseMove" @mouseout="mouseOut"></canvas>
    </div>
  </div>
</template>

<script>
import Deep from "@/assets/js/deep";
export default {
  name: "deep",
  data() {
    return {
      // 数字位数
      // bits: this.$store.state.dictionary.bits,
      deep: null
    };
  },
  computed: {
    contractInfo() {
      let tmp = this.$store.state.market.contract.filter(item => {
        return Number(item.id) === Number(this.$route.params.id);
      });
      return tmp[0] || {};
    },
    bits() {
      return this.$store.state.dictionary.bits;
    },
    sell() {
      return (
        (this.$store.state.market.order[this.contractInfo.id] &&
          this.$store.state.market.order[this.contractInfo.id].asks) ||
        []
      );
    },
    buy() {
      return (
        (this.$store.state.market.order[this.contractInfo.id] &&
          this.$store.state.market.order[this.contractInfo.id].bids) ||
        []
      );
    },
    priceLabel() {
      return 123;
    },
    themeValue() {
      return this.$store.state.dictionary.theme;
    }
  },
  watch: {
    $route() {
      this.init();
    },
    buy(val) {
      this.deep.dataChange(this.buy, this.sell);
    },
    priceLabel() {
      this.deep.priceLabel = 123;
      this.deep.sumLabel = 123;
    }
  },
  methods: {
    init() {
      this.deep = new Deep(
        this.$refs.deep,
        this.$refs.toolTips,
        this.buy,
        this.sell,
        123,
        123,
        this.bits
      );
    },
    mouseMove(e) {
      this.deep.mouseMove(e.offsetX);
    },
    mouseOut() {
      this.deep.clearTool();
    },
    resize() {
      this.deep.resize();
    }
  },
  mounted() {
    this.init();
    window.addEventListener("resize", this.resize, false);
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.resize);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
@import "../../assets/css/theme";
.contract-deep-black {
  .themeBlack();
  height: 330px;
  background-color: @boxBgColor;
  overflow-y: hidden;
  margin: 10px 0 0 10px;
  .transition(height ease-in-out 0.15s);
  &.show {
    height: 330px;
  }
  &.hide {
    height: 40px;
  }
  .title {
    padding-left: 10px;
    height: 36px;
    background-color: @deepTitleBgColor;
    h3 {
      font-size: 14px;
      color: @titleFontColor;
    }
  }
  .deep-canvas {
    background: @deepBgColor;
    position: relative;
    height: 294px;
    width: 100%;
    canvas {
      width: 100%;
      height: 100%;
      &.tool-tips {
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
}
.contract-deep-white {
  .themeWhite();
  height: 330px;
  background-color: @boxBgColor;
  overflow-y: hidden;
  margin: 10px 0 0 10px;
  .transition(height ease-in-out 0.15s);
  &.show {
    height: 330px;
  }
  &.hide {
    height: 40px;
  }
  .title {
    position: relative;
    box-shadow: 0 2px 10px 0 rgba(89, 122, 185, 0.1);
    z-index: 99;
    padding-left: 10px;
    height: 36px;
    background-color: @deepTitleBgColor;
    h3 {
      font-size: 14px;
      color: @titleFontColor;
    }
  }
  .deep-canvas {
    background: @deepBgColor;
    position: relative;
    height: 294px;
    width: 100%;
    canvas {
      width: 100%;
      height: 100%;
      &.tool-tips {
        position: absolute;
        left: 0;
        top: 0;
      }
    }
  }
}
</style>
