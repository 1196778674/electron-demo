<template>
  <st-row id="trade-list" class="trade-list" direction="column" justify="center" align="center">
    <div class="bg" ref="edge"></div>
    <st-row class="text dis-selected" justify="between">
      <p>0%</p>
      <p>100%</p>
    </st-row>
    <div id="button" class="button" :style="{'left': leftPosition + 'px'}">
      <span id="percent">{{percentage}}%</span>
    </div>
  </st-row>
</template>

<script>
  export default {
    name: 'trade-list',
    data() {
      return {
        leftPosition: 0,
        drag: false,
        percentage: 0,
        mark: false
      }
    },
    watch: {
      leftPosition (val) {
        let tmp = (val / 237) * 100
        this.percentage = Math.floor(tmp)
        if (this.percentage >= 50) {
          // this.mark = true
          document.getElementById('percent').style.left = '-14px'
        }
        if (this.percentage < 50) {
          document.getElementById('percent').style.left = '14px'
        }
        this.$emit('sliderPercentage', this.percentage)
      }
    },
    methods: {

    },
    mounted() {
//      document.getElementById('button').addEventListener('mousemove', (event)=>{
//        // console.log(document.getElementById('button').offsetLeft)
//        console.log('ha', this.$refs['edge'].getBoundingClientRect().left)
//        console.log('hb',event.clientX)
//        if (this.drag) {
//          this.leftPosition = event.clientX - this.$refs['edge'].getBoundingClientRect().left - 8
//          if (this.leftPosition < 0) {
//            this.leftPosition = 0
//          }
//          if (this.leftPosition > 250) {
//            this.leftPosition = 250
//          }
//        }
//      })
      window.addEventListener('mousemove', (event) => {
        if (this.drag) {
          this.leftPosition = event.clientX - this.$refs['edge'].getBoundingClientRect().left - 8
          if (this.leftPosition < 0) {
            this.leftPosition = 0
          }
          if (this.leftPosition > 237) {
            this.leftPosition = 237
          }
        }
      })
      document.getElementById('button').addEventListener('mousedown', ()=>{
        this.drag = true
      })
      document.getElementById('button').addEventListener('mouseup', ()=>{
        // console.log(444)
        this.drag = false
      })
      document.getElementById('trade-list').addEventListener('mouseleave', ()=>{
        this.drag = false
      })
    }
  }
</script>

<style lang="less" scoped="">
  @import "../../assets/css/theme";
  .themeBlack();
  .trade-list {
    position: relative;
    width: 100%;
    // height: 40px;
    padding-top: 20px;
    .bg {
      width: 100%;
      height: 4px;
      background-color: @tradeOperateSliderBgColor;
    }
    .text {
      margin-top: 6px;
      width: 100%;
      p {
        height: 12px;
        line-height: 12px;
        font-size: 12px;
        color: @tradeOperateFontColor;
      }
    }
    .button {
      position: absolute;
      top: 13px;
      left: 40px;
      width: 13px;
      height: 17px;
      background-image: url("../../assets/images/newUI/operate/huakuai.png");
      background-size: cover;
      cursor: pointer;
      span {
        position: absolute;
        top: -11px;
        left: 14px;
        font-size: 12px;
        color: @tradeOperateFontColor;
      }
    }
  }
</style>