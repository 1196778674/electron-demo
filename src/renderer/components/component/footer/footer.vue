<template>
  <footer class="st-footer">
    <st-row class="footer" justify="between">
      <st-row class="footer-left" justify="between">
        <ul>
          <li>合约产品</li>
          <li v-for="item in product" :key="item.id">
            <a :href="item.href">{{ item.name }}</a>
          </li>
        </ul>
        <ul>
          <li>服务支持</li>
          <li>
            <a @click="GO_BOWER('https://github.com/58COIN/58coin-api')" target="_blank">费率说明</a>
          </li>
          <li>
            <a
              @click="GO_BOWER('https://58coin-support.zendesk.com/hc/zh-cn/categories/360000082253-%E5%B8%AE%E5%8A%A9%E4%B8%AD%E5%BF%83')"
              target="_blank"
            >API</a>
          </li>
          <li>
            <a
              @click="GO_BOWER('https://58coin-support.zendesk.com/hc/zh-cn/sections/360000123013-%E6%95%B0%E5%AD%97%E8%B5%84%E4%BA%A7%E4%BB%8B%E7%BB%8D')"
              target="_blank"
            >帮助中心</a>
          </li>
          <li>
            <a
              @click="GO_BOWER('https://58coin-support.zendesk.com/hc/zh-cn/articles/360000836973-%E4%B8%8A%E5%B8%81%E7%94%B3%E8%AF%B7%E8%AF%B4%E6%98%8E')"
              target="_blank"
            >上币申请及说明</a>
          </li>
        </ul>
        <ul>
          <li>官方社群</li>
          <li style="position: relative">
            <a @mouseenter="showErcode('wechat')" @mouseleave="hideErcode('wechat')">微信群</a>
            <div v-if="erCode.wechat">
              <em></em>
              <img src="../../../../../static/images/footer/wechat_ercode.png" alt />
              <span>扫码加入微信群</span>
            </div>
          </li>
          <li>
            <a
              @click="GO_BOWER('https://58coin-support.zendesk.com/hc/zh-cn/articles/360000812354-%E5%A6%82%E4%BD%95%E5%8A%A0%E5%85%A558COIN%E5%AE%98%E6%96%B9Telegram%E7%BE%A4')"
              target="_blank"
            >Telegram</a>
          </li>
          <li style="position: relative">
            <a @mouseenter="showErcode('api')" @mouseleave="hideErcode('api')">API交流群</a>
            <div v-if="erCode.api">
              <em></em>
              <img src="../../../../../static/images/footer/api.png" alt />
              <span>扫码加入API交流群</span>
            </div>
          </li>
        </ul>
        <ul>
          <li>相关下载</li>
          <li style="position: relative">
            <a
              @mouseenter="showErcode('AndroidDown')"
              @mouseleave="hideErcode('AndroidDown')"
            >Android App</a>
            <div v-show="erCode.AndroidDown" style="left: 84px">
              <em></em>
              <img src="../../../../../static/images/footer/android.png" alt />
              <span>Android App</span>
            </div>
          </li>
          <li style="position: relative">
            <a @mouseenter="showErcode('IOSDown')" @mouseleave="hideErcode('IOSDown')">IOS App</a>
            <div v-show="erCode.IOSDown" style="left: 84px">
              <em></em>
              <img src="../../../../../static/images/footer/android.png" alt />
              <span>IOS App</span>
            </div>
          </li>
        </ul>
      </st-row>
      <st-row class="footer-right">
        <ul>
          <li>关注我们</li>
          <li>58COIN GLOBAL</li>
          <li>
            <a
              @click="GO_BOWER('https://www.facebook.com/coin.wuba.7')"
              href="javascript:;"
              target="_blank"
            ></a>
            <a @click="GO_BOWER('https://twitter.com/58_coin')" href="javascript:;" target="_blank"></a>
            <a
              @click="GO_BOWER('https://weibo.com/6357500607/profile?topnav=1&wvr=6')"
              href="javascript:;"
              target="_blank"
            ></a>
          </li>
          <li>Copyright © 2019 58COIN. All rights reserved.</li>
        </ul>
      </st-row>
    </st-row>
  </footer>
</template>
<script>
const shell = require("electron").shell;
export default {
  name: "new-footer",
  props: ["product"],
  data() {
    return {
      erCode: {
        wechat: false,
        api: false,
        ios: false,
        android: false,
        AndroidDown: false,
        IOSDown: false
      }
    };
  },
  watch: {
    product(val) {}
  },
  created: function() {},
  methods: {
    showErcode(name) {
      this.erCode[name] = true;
    },
    hideErcode(name) {
      this.erCode[name] = false;
    },
    GO_BOWER(url) {
      shell.openExternal(url);
    }
  },
  mounted() {
    let rnd = Math.floor(Math.random() * 10 + 1);
    this.rnd = rnd;
  }
};
</script>
<style lang="less" scoped>
.st-footer {
  position: absolute;
  width: 100%;
  background-color: #121723;
  box-sizing: border-box;
  /*height: 338px;*/
  /*footer*/
  .footer {
    /*padding-top: 37px;*/
    padding: 37px 12% 0 13%;
    width: 100%;
    height: 266px;
    background: #121723;
    box-sizing: border-box;
  }

  .footer-left {
    width: 90%;

    div {
      position: absolute;
      top: -14px;
      left: 74px;
      z-index: 1;
      border: 12px solid #26294d;
      border-bottom: none;
      border-radius: 3px;

      img {
        width: 114px;
        height: 114px;
      }

      em {
        position: absolute;
        top: 12px;
        left: -24px;
        border-top: 10px solid transparent;
        border-right: 16px solid #26294d;
        border-bottom: 10px solid transparent;
      }

      span {
        padding: 10px 0;
        display: inline-block;
        width: 100%;
        font-size: 12px;
        color: #cbd7f0;
        text-align: center;
        background: #26294d;
      }
    }
  }

  .footer-left,
  .footer-right {
    ul {
      li {
        list-style: none;
        font-size: 12px;
        line-height: 1em;
        color: #7183a9;
        white-space: nowrap;
        padding-right: 10px;

        a {
          display: inline-block;
          margin-top: 14px;
          line-height: 1em;
          color: #9da5c8;

          &:hover {
            color: #cbd7f0;
          }
        }
      }
    }
  }

  .footer-right {
    margin-left: 23%;
    width: 500px;

    ul {
      li {
        &:nth-child(2) {
          margin-top: 14px;
        }

        &:nth-child(3) {
          margin-top: 21px;

          a {
            margin-right: 20px;
            width: 36px;
            height: 36px;
            border-radius: 100%;
            background: #7183a9;
            background-repeat: no-repeat;
            background-position: 50%;
            background-image: url("../../../../../static/images/footer/facebook.png");
            background-size: 20px 20px;

            &:nth-child(2) {
              background-image: url("../../../../../static/images/footer/twitter.png");
            }

            &:last-child {
              margin-right: 0;
              background-image: url("../../../../../static/images/footer/sina.png");
            }

            &:hover {
              background-color: #cbd7f0;
              background-repeat: no-repeat;
              background-position: 50%;
            }
          }
        }

        &:last-child {
          margin-top: 81px;
        }
      }
    }
  }
}

@media screen and (max-width: 1366px) {
  .st-footer {
    /*footer*/
    .footer {
      /*padding-top: 37px;*/
      padding: 24px 11% 0 11%;
      width: 100%;
      height: 210px;
      background: #121723;
    }

    .footer-left {
      width: 90%;

      div {
        position: absolute;
        top: -40px;
        left: 76px;
        border: 12px solid #26294d;
        border-bottom: none;
        border-radius: 3px;

        img {
          width: 114px;
          height: 114px;
        }

        em {
          position: absolute;
          left: -24px;
          top: 34px;
          border-top: 10px solid transparent;
          border-right: 16px solid #26294d;
          border-bottom: 10px solid transparent;
        }

        span {
          padding: 10px 0;
          display: inline-block;
          width: 100%;
          font-size: 12px;
          color: #cbd7f0;
          text-align: center;
          background: #26294d;
        }
      }
    }

    .footer-left,
    .footer-right {
      ul {
        li {
          list-style: none;
          font-size: 12px;
          color: #7183a9;
          white-space: nowrap;
          padding-right: 10px;

          a {
            display: inline-block;
            margin-top: 10px;
            color: #9da5c8;
          }
        }
      }
    }

    .footer-right {
      margin-left: 20%;
      width: 500px;

      ul {
        li {
          &:nth-child(2) {
            margin-top: 10px;
          }

          &:nth-child(3) {
            margin-top: 12px;

            a {
              margin-right: 14px;
              width: 28px;
              height: 28px;
              border-radius: 100%;
              background: #7183a9;
              background-repeat: no-repeat;
              background-position: 50%;
              background-image: url("../../../../../static/images/footer/facebook.png");
              background-size: 20px 20px;

              &:nth-child(2) {
                background-image: url("../../../../../static/images/footer/twitter.png");
              }

              &:last-child {
                margin-right: 0;
                background-image: url("../../../../../static/images/footer/sina.png");
              }

              &:hover {
                background-color: #cbd7f0;
                background-repeat: no-repeat;
                background-position: 50%;
              }
            }
          }

          &:last-child {
            margin-top: 64px;
          }
        }
      }
    }
  }
}
</style>
