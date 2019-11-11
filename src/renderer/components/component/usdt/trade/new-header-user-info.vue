<template>
  <div class="user-info" :class="[themeValue === 'white' && 'user-info-white']">
    <div style="width: 100%;">
      <div class="arrow"></div>
    </div>
    <st-row class="content" direction="column">
      <st-row class="info">
        <span class="portrait"></span>
        <st-row style="margin-left: 8px;" direction="column">
          <span class="name">{{ userInfo.nickName }}</span>
          <span class="site">{{ $t(`message.header.lastLogin`) }}：{{userInfo.lastLoginAddress}}</span>
        </st-row>
      </st-row>
      <!--<st-row class="property" direction="column">-->
      <!--<p>净资产折合(BTC)</p>-->
      <!--<p>{{totalAssets | splitFormat(8)}}≈{{totalCnyAssets | splitFormat(2)}}{{unit}}</p>-->
      <!--</st-row>-->
      <st-row class="others" direction="column">
        <st-row class="item">
          <span class="HyIconFont hyicon-account_safe"></span>
          <a class="text" :href="apiConfig.userDomain + 'users'">{{ $t(`message.header.userSafe`) }}</a>
        </st-row>
        <st-row class="item">
          <span class="HyIconFont hyicon-account_card"></span>
          <a
            class="text"
            :href="apiConfig.userDomain + 'users/info'"
          >{{ $t(`message.header.userAuth`) }}</a>
        </st-row>
        <st-row class="item">
          <span class="HyIconFont hyicon-account_imvite"></span>
          <a
            class="text"
            :href="apiConfig.userDomain + 'users/invite'"
          >{{ $t(`message.header.invite`) }}</a>
        </st-row>
        <st-row class="item">
          <span class="HyIconFont hyicon-account_devtool"></span>
          <a
            class="text"
            :href="apiConfig.userDomain + 'users/tool'"
          >{{ $t(`message.header.devTool`) }}</a>
        </st-row>
        <st-row class="item">
          <span class="HyIconFont hyicon-account_quit"></span>
          <a class="text" @click="logout">{{ $t(`message.header.logout`) }}</a>
        </st-row>
      </st-row>
    </st-row>
  </div>
</template>

<script>
import ApiConfig from "@/assets/js/config/api.config";
import Cookie from "@/assets/js/config/cookie";
import AccountApi from "@/assets/js/api/accountApi";
import UserApi from "@/assets/js/api/userApi";
export default {
  name: "user-info",
  components: {
    UserApi
  },
  data() {
    return {
      apiConfig: ApiConfig,
      rateAsset: null,
      totalAssets: 0,
      totalCnyAssets: 0,
      local: 0,
      unit: "cny",
      isLogouting: false
    };
  },
  computed: {
    // 主题
    themeValue() {
      return this.$store.state.dictionary.theme;
    },
    userInfo() {
      return this.$store.state.user.userInfo;
    }
  },
  methods: {
    logout() {
      if (this.isLogouting) return false;
      this.isLogouting = true;
      UserApi.logout()
        .then(() => {
          this.isLogouting = false;
          Cookie.clearCookie("token", ApiConfig.domain);
          this.$store.commit("SET_COOKIE", { token: null });
          this.$store.commit("user/SET_USERINFO", { data: null });
          window.location.reload();
        })
        .catch(() => {
          this.isLogouting = false;
        });
    },
    getSitesAll(local) {
      AccountApi.getSitesAll(local)
        .then(res => {
          // console.log(res)
          this.rateAsset = res.data.assets;
          this.unit = res.data.assets[0].currencyName || "CNY";
          this.totalAssets = 0;
          this.totalCnyAssets = 0;
          for (let i = 0; i < res.data.assets.length; i++) {
            this.totalAssets += Number(res.data.assets[i].assets);
            this.totalCnyAssets += Number(res.data.assets[i].cnyAssets);
          }
          // console.log(this.totalAssets, this.totalCnyAssets)
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.local =
      this.$i18n.locale === "en"
        ? 1
        : this.$i18n.locale === "ko"
        ? 3
        : this.$i18n.locale === "ja"
        ? 2
        : this.$i18n.locale === "ru"
        ? 4
        : 0;
    this.getSitesAll(this.local);
  }
};
</script>

<style lang="less" scoped="">
@import "../../assets/css/theme";
.user-info {
  .themeBlack();
  display: none;
  position: absolute;
  right: -73px;
  top: 30px;
  z-index: 9;
  .arrow {
    position: absolute;
    top: -12px;
    right: 70px;
    display: inline-block;
    margin-top: 6px;
    margin-left: 8px;
    width: 0;
    height: 0;
    border-bottom: 7px solid @headerUserInfoPopupBgColor;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    cursor: pointer;
    // .transition(.5s)
  }
  .content {
    width: 240px;
    height: 234px;
    border-radius: 4px;
    background-color: @headerUserInfoPopupBgColor;
    .info {
      margin-top: 20px;
      padding-left: 20px;
      width: 100%;
      height: 46px;
      // background-color: #eee;
      .portrait {
        width: 32px;
        height: 32px;
        background-image: url("../../assets/images/newUI/header/portrait.png");
        background-size: cover;
      }
      .name {
        line-height: 18px;
        font-size: 14px;
        color: @headerUserInfoPopupFontColor;
      }
      .site {
        line-height: 14px;
        font-size: 12px;
        color: @headerUserInfoPopupFontShallowColor;
      }
    }
    .property {
      padding-left: 20px;
      width: 100%;
      height: 50px;
      p {
        font-size: 14px;
        color: @headerUserInfoPopupFontColor;
      }
      &:last-child {
        font-size: 16px;
      }
    }
    .others {
      width: 100%;
      /*height: 140px;*/
      .item {
        padding-left: 22px;
        width: 100%;
        height: 32px;
        .HyIconFont {
          line-height: 32px;
          font-size: 14px;
          color: #cbd7f0;
        }
        .text {
          display: block;
          width: 100%;
          padding-left: 8px;
          font-size: 12px;
          line-height: 32px;
          color: @headerUserInfoPopupFontColor;
        }
        &:hover {
          background-color: @headerUserInfoPopupActiveColor;
        }
      }
    }
  }
}
.user-info-white {
  .themeWhite();
  display: none;
  position: absolute;
  right: -73px;
  top: 30px;
  z-index: 9;
  .arrow {
    position: absolute;
    top: -12px;
    right: 70px;
    display: inline-block;
    margin-top: 6px;
    margin-left: 8px;
    width: 0;
    height: 0;
    border-bottom: 7px solid @boxBgColor;
    border-left: 7px solid transparent;
    border-right: 7px solid transparent;
    cursor: pointer;
    // .transition(.5s)
  }
  .content {
    width: 240px;
    height: 234px;
    border-radius: 4px;
    background-color: @boxBgColor;
    box-shadow: 0 4px 10px 0 rgba(89, 122, 185, 0.15);
    .info {
      margin-top: 20px;
      padding-left: 20px;
      width: 100%;
      height: 46px;
      // background-color: #eee;
      .portrait {
        width: 32px;
        height: 32px;
        background-image: url("../../assets/images/newUI/header/portrait.png");
        background-size: cover;
      }
      .name {
        line-height: 18px;
        font-size: 14px;
        color: #24324c;
      }
      .site {
        line-height: 14px;
        font-size: 12px;
        color: #7889a9;
      }
    }
    .property {
      padding-left: 20px;
      width: 100%;
      height: 50px;
      p {
        font-size: 14px;
        color: #24324c;
      }
      &:last-child {
        font-size: 16px;
      }
    }
    .others {
      width: 100%;
      .item {
        padding-left: 22px;
        width: 100%;
        height: 32px;
        .text {
          display: block;
          font-size: 12px;
          color: #24324c;
        }
        .HyIconFont {
          color: #24324c;
        }
        &:hover {
          background-color: #f3f7fe;
          .text {
            color: #597ab9;
          }
          .HyIconFont {
            color: #597ab9;
          }
        }
      }
    }
  }
}
</style>
