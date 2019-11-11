<!--create by zcy-->
<template>
  <st-row
    :style="{height: $store.state.dictionary.boxHeight + 'px', top: top + 'px', left: left + 'px'}"
    direction="row"
    :class="{'new-trade-tags':'black' === themeValue, 'new-trade-tags-white': 'white' === themeValue}"
  >
    <st-row
      :style="{height: $store.state.dictionary.boxHeight + 'px'}"
      class="content"
      direction="column"
      v-if="!isSpread"
    >
      <tags-template-spread
        v-for="item in contractList"
        @click="a()"
        :key="item.id"
        :contractInfo="item"
      ></tags-template-spread>
    </st-row>
    <st-row
      :style="{height: $store.state.dictionary.boxHeight + 'px'}"
      class="another-content"
      direction="column"
      v-else
    >
      <tags-template-tiny v-for="item in contractList" :key="item.id" :contractInfo="item"></tags-template-tiny>
    </st-row>
    <div
      :style="{left: (left + $store.state.dictionary.boxWidth - 10) + 'px'}"
      class="spread-button"
      @click="change"
    >
      <span :class="{'icon': true, 'rotate': !isSpread}"></span>
    </div>
  </st-row>
</template>

<script>
import TagsTemplateSpread from "./tags-template-spread.vue";
import TagsTemplateTiny from "./tags-template-tiny.vue";
export default {
  name: "new-trade-tags",
  components: {
    TagsTemplateSpread,
    TagsTemplateTiny
  },
  data() {
    return {
      isSpread: false,
      nowProductId: this.$route.params.id,
      top: 50,
      left: 0
    };
  },
  created() {},
  watch: {
    $route() {
      this.nowProductId = this.$route.params.id;
    },
    "$store.state.dictionary.screenWidth": {
      handler(val) {
        if (!process.client) return;
        if (val <= 1366) {
          this.isSpread = true;
        } else {
          this.isSpread = false;
        }
        if (this.screenHeight <= 760 || this.screenWidth <= 1366) {
          this.$store.commit("dictionary/SET_BOXHEIGHT", 718);
        } else {
          this.$store.commit("dictionary/SET_BOXHEIGHT", 850);
        }
      },
      immediate: true
    },
    "$store.state.dictionary.screenHeight": {
      handler(val) {
        if (this.screenHeight <= 760 || this.screenWidth <= 1366) {
          this.$store.commit("dictionary/SET_BOXHEIGHT", 718);
        } else {
          this.$store.commit("dictionary/SET_BOXHEIGHT", 850);
        }
      },
      immediate: true
    },
    // '$store.state.dictionary.scrollTop': {
    //   handler (val) {
    //     let boxLength = this.isSpread ? 40 : 70
    //     let marginLength = 60
    //     let marginTop = 50
    //     if (val + boxLength * this.contractList.length + marginLength >= this.$store.state.dictionary.boxHeight) {
    //       this.top = marginTop - (val + boxLength * this.contractList.length + marginLength - this.$store.state.dictionary.boxHeight)
    //     } else {
    //       this.top = marginTop
    //     }
    //   },
    //   immediate: true
    // },
    "$store.state.dictionary.scrollLeft": {
      handler(val) {
        this.left = -val;
      },
      immediate: true
    },
    isSpread: {
      handler(val) {
        if (!process.client) return;
        if (val) {
          this.$store.commit("dictionary/SET_BOXWIDTH", 50);
        } else {
          this.$store.commit("dictionary/SET_BOXWIDTH", 170);
        }
      },
      immediate: true
    }
  },
  computed: {
    contractList() {
      return this.$store.state.market.contract || [];
    },
    themeValue() {
      return this.$store.state.dictionary.theme;
    },
    screenWidth() {
      return this.$store.state.dictionary.screenWidth;
    },
    screenHeight() {
      return this.$store.state.dictionary.screenHeight;
    }
  },
  methods: {
    change() {
      this.isSpread = !this.isSpread;
    }
  }
};
</script>

<style lang="less" scoped="">
@import "../../assets/css/theme";
.new-trade-tags {
  .themeBlack();
  // position: fixed;
  .content {
    width: 160px;
    height: 850px;
    padding-top: 12px;
    background-color: @tagsBgColor;
    .item {
      width: 100%;
      height: 70px;
      padding: 8px 0 0 10px;
      border-bottom: 1px solid @tagsBorderColor;
      .product {
        font-size: 14px;
        color: @tagsProductFontColor;
      }
      .ratio {
        width: 100%;
        p {
          width: 50%;
          font-size: 12px;
          color: @tagsFontColorGreen;
        }
      }
      .label {
        width: 100%;
        p {
          width: 50%;
          line-height: 12px;
          font-size: 12px;
          color: @tagsNormalFontColor;
        }
      }
    }
  }
  .another-content {
    // margin-left: 4px;
    width: 40px;
    height: 850px;
    padding-top: 12px;
    background-color: @tagsBgColor;
    .item {
      width: 100%;
      height: 44px;
      padding: 6px 0 0 6px;
      border-bottom: 1px solid @tagsBorderColor;
      .product {
        width: 26px;
        height: 28px;
        font-size: 12px;
        line-height: 14px;
        color: @tagsProductFontColor;
        word-break: break-all;
        word-wrap: break-word;
      }
    }
  }
  .spread-button {
    margin: 400px 1px 0 1px;
    width: 8px;
    height: 100px;
    background: #262e43;
    cursor: pointer;
    text-align: center;
    border-radius: 2px;
    span {
      display: block;
      margin-top: 48px;
      margin-left: 0;
      /*height: 100px;*/
      /*line-height: 100px;*/
      /*text-align: center;*/
      /*background: #637391;*/
      width: 6px;
      height: 3px;
      border-top: 4px solid transparent;
      border-right: 4px solid #637391;
      border-bottom: 4px solid transparent;
      /*background-image: url("../../assets/images/newUI/spread.png");*/
      /*background-size: cover;*/
      /*transition: .2s;*/
    }
    .icon {
      margin-left: 2px;
      transform: rotate(180deg);
    }
    .rotate {
      margin-left: 0px;
      transform: rotate(0);
    }
    &:hover {
      background: #637391;
      span {
        border-top: 4px solid transparent;
        border-right: 4px solid #fff;
        border-bottom: 4px solid transparent;
      }
    }
  }
}
.new-trade-tags-white {
  .themeWhite();
  // position: fixed;
  .content {
    width: 160px;
    height: 850px;
    padding-top: 12px;
    background-color: @tagsBgColor;
    .item {
      width: 100%;
      height: 70px;
      padding: 8px 0 0 10px;
      border-bottom: 1px solid @tagsBorderColor;
      .product {
        font-size: 14px;
        color: @tagsProductFontColor;
      }
      .ratio {
        width: 100%;
        p {
          width: 50%;
          font-size: 12px;
          color: @tagsFontColorGreen;
        }
      }
      .label {
        width: 100%;
        p {
          width: 50%;
          line-height: 12px;
          font-size: 12px;
          color: @tagsNormalFontColor;
        }
      }
    }
  }
  .another-content {
    // margin-left: 4px;
    width: 40px;
    height: 850px;
    padding-top: 12px;
    background-color: @tagsBgColor;
    .item {
      width: 100%;
      height: 44px;
      padding: 6px 0 0 6px;
      border-bottom: 1px solid @tagsBorderColor;
      .product {
        width: 26px;
        height: 28px;
        font-size: 12px;
        line-height: 14px;
        color: @tagsProductFontColor;
        word-break: break-all;
        word-wrap: break-word;
      }
    }
  }
  .spread-button {
    margin: 400px 1px 0 1px;
    width: 8px;
    height: 100px;
    background: #fff;
    border: 0.5px solid rgba(120, 137, 169, 0.5);
    cursor: pointer;
    text-align: center;
    border-radius: 2px;
    span {
      display: block;
      margin-top: 48px;
      margin-left: -1px;
      /*height: 100px;*/
      /*line-height: 100px;*/
      /*text-align: center;*/
      width: 6px;
      height: 3px;
      border-top: 4px solid transparent;
      border-right: 4px solid #7889a9;
      border-bottom: 4px solid transparent;
    }
    .icon {
      margin-left: 1px;
      transform: rotate(180deg);
    }
    .rotate {
      margin-left: -1px;
      transform: rotate(0);
    }
    // .rotate {
    //   transform: rotate(180deg);
    //   margin-left: 1px;
    // }
    &:hover {
      border: 0.5px solid #7e9efd;
      span {
        border-top: 4px solid transparent;
        border-right: 4px solid #7e9efd;
        border-bottom: 4px solid transparent;
      }
    }
  }
}
@media screen and (max-width: 1366px) {
  .new-trade-tags,
  .new-trade-tags-white {
    .content {
      height: 720px;
    }
  }
}
@media screen and (max-height: 760px) {
  .new-trade-tags,
  .new-trade-tags-white {
    .content {
      height: 720px;
    }
  }
}
</style>
