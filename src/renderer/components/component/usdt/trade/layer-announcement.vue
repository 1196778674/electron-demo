<template>
  <div :class="{'layer-announcement': 'black' === themeValue, 'layer-announcement-white': 'white' === themeValue}">
    <div class="title">
      <span class="text">{{ $t('message.toolbar.announcement') }}</span>
      <span class="icon-close" @click.stop="close"></span>
    </div>
    <st-row class="content" direction="column">
      <st-row class="item" v-for="item in list" :key="item.id">
        <p class="icon"></p>
        <st-row class="main" justify="between">
          <p :class="{'text': true, 'clicked': clickedList.indexOf(item.id) > -1 }" @click="clickItem(item.html_url, item.id)">{{item.name}}</p>
          <p :class="{'date': true, 'clicked': clickedList.indexOf(item.id) > -1 }" @click="clickItem(item.html_url, item.id)">{{item.created_at.substr(2,8)}}</p>
        </st-row>
      </st-row>
    </st-row>
    <div class="more">
      <p class="bg" @click="more">
        {{$t('message.common.more')}} >
      </p>
    </div>
  </div>
</template>

<script>
  import axios from 'axios'
  import Cookie from '@/assets/js/config/cookie'
  import CommonApi from '@/assets/js/api/commonApi'
  export default {
    name: 'layer-announcement',
    data() {
      return {
        locale: this.$i18n.locale,
        // id: '360000879053', // 币本位合约
        id: '360002511854', // USDT
        list: null,
        // url: 'https://58coin-support.zendesk.com/hc/zh-cn/sections/360000879053', // 币本位合约
        url: 'https://58coin-support.zendesk.com/hc/zh-cn/sections/360002511854', // USDT
        clickedList: [],
      }
    },
    computed: {
      // 主题
      themeValue () {
        return this.$store.state.dictionary.theme
      }
    },
    watch: {
      '$i18n.locale' () {
        if (this.locale === 'cn') {
          this.locale = 'zh-cn'
        } else if (this.locale === 'en') {
          this.locale = 'en-us'
        } else {
          this.locale = this.$i18n.locale
        }
        this.getAnnounceData()
      }
    },
    methods: {
      close() {
        this.$emit('closeAnnouncement')
      },
      // 获取公告
      getAnnounceData () {
        // if (!this.locale) {
        //   this.locale = 'zh-cn'
        // }
        if (this.locale === 'cn') this.locale = 'zh-cn'
        if (this.locale === 'en') this.locale = 'en-us'
        // return
        CommonApi.getAnnounce({id: this.id, locale: this.locale || 'cn', pageSize: 9})
          .then(res => {
            this.list = res.data.articles
            // console.log('annnnnnn', this.list);
          })
      },
      // 点击操作
      clickItem (url, id) {
        this.clickedList.push(id)
        // console.log(this.clickedList)
        window.open(url)
      },
      more () {
        window.open(this.url)
      }
    },
    mounted() {
      this.getAnnounceData()
    }
  }
</script>

<style lang="less" scoped="">
  @import "../../assets/css/theme";
  .layer-announcement {
    .themeBlack();
    position: absolute;
    top: 0;
    right: 36px;
    width: 342px;
    // height: 254px;
    background-color: @layerAnnouncementBgColor;
    z-index: 299;
    .title {
      position: relative;
      width: 342px;
      height: 36px;
      // background: red;
      background: @calculateTitleBgColor;
      .text {
        display: inline-block;
        margin-left: 20px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 14px;
        color: @layerAnnouncementFontColor;
        background-color: @layerAnnouncementTitleBgColor;
      }
      .icon-close {
        position: absolute;
        top: 10px;
        right: 12px;
        display: inline-block;
        width: 22px;
        height: 22px;
        background-image: url("../../assets/images/wrong.png");
        background-size: 50% 50%;
        background-repeat: no-repeat;
        background-position: 5px 5px;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
        &:hover {
          transform: rotate(90deg);
        }
      }
    }
    .content {
      width: 100%;
      padding: 20px 14px 15px 20px;
      .item {
        width: 100%;
        p {
          font-size: 12px;
          line-height: 23px;
          color: @layerAnnouncementFontColor;
        }
        .icon {
          margin: 7px 10px 0 0;
          width: 4px;
          height: 4px;
          border: 1px solid transparent;
          border-radius: 100%;
          background-color: #7889A9;
        }
        .main {
          width: 100%;
          &:hover {
            p {
              color: @layerAnnouncementActiveFontColor;
            }
          }
          .text {
            max-width: 230px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .date {

          }
          .clicked {
            color: @layerAnnouncementActiveFontColor!important;
          }
        }
      }
    }
    .more {
      width: 100%;
      .bg {
        margin: 0 auto;
        width: 96px;
        height: 22px;
        font-size: 12px;
        color: @layerAnnouncementActiveFontColor;
        text-align: center;
        line-height: 22px;
        background-image: url("../../assets/images/newUI/more-bg.png");
        background-size: cover;
      }
    }
  }
  .layer-announcement-white {
    .themeWhite();
    position: absolute;
    top: 0;
    right: 36px;
    width: 342px;
    // height: 254px;
    background-color: @boxBgColor;
    z-index: 299;
    box-shadow: 0 4px 10px 0 rgba(89,122,185,0.15);
    .title {
      position: relative;
      width: 342px;
      height: 36px;
      // background: red;
      background: @boxBgColor;
      box-shadow: 0 1px 10px 0 rgba(89,122,185,0.07);
      .text {
        display: inline-block;
        margin-left: 20px;
        height: 36px;
        line-height: 36px;
        text-align: center;
        font-size: 14px;
        color: @layerAnnouncementFontColor;
      }
      .icon-close {
        position: absolute;
        top: 10px;
        right: 12px;
        display: inline-block;
        width: 22px;
        height: 22px;
        background-image: url("../../assets/images/wrong1.jpg");
        background-size: 50% 50%;
        background-repeat: no-repeat;
        background-position: 5px 5px;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;
        &:hover {
          transform: rotate(90deg);
        }
      }
      .arrow {
        position: absolute;
        right: -4px;
        bottom: 14px;
        width: 4px;
        height: 4px;
        border-top: 4px solid transparent;
        border-left: 4px solid #fff;
        border-bottom: 4px solid transparent;
      }
    }
    .content {
      width: 100%;
      padding: 20px 14px 15px 20px;
      .item {
        width: 100%;
        p {
          font-size: 12px;
          line-height: 23px;
          color: @layerAnnouncementFontColor;
        }
        .icon {
          margin: 7px 10px 0 0;
          width: 4px;
          height: 4px;
          border: 1px solid transparent;
          border-radius: 100%;
          background-color: #7889A9;
        }
        .main {
          width: 100%;
          &:hover {
            p {
              color: @layerAnnouncementActiveFontColor;
            }
          }
          .text {
            max-width: 230px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .date {

          }
          .clicked {
            color: @layerAnnouncementActiveFontColor!important;
          }
        }
      }
    }
    .more {
      width: 100%;
      .bg {
        margin: 0 auto;
        width: 96px;
        height: 22px;
        font-size: 12px;
        color: @layerAnnouncementActiveFontColor;
        text-align: center;
        line-height: 22px;
        background-image: url("../../assets/images/newUI/juxing-white.png");
        background-size: cover;
      }
    }
  }
</style>
