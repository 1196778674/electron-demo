<template>
    <div class="full-header">
      <a
        :class="['logo', $i18n.locale]"
        href="javascript:;"
      ></a>
      <div class="market-item">
        <!-- <k-line-title-bar></k-line-title-bar> -->
      </div>
    </div>
</template>

<script>
import apiConfig from '../../../assets/myConfig/api.config'
export default {
  name: 'fullscreen',
  data() {
    return {
      apiConfig: apiConfig
    }
  },
}
</script>

<style lang="less" scoped>
@import (reference) '../../../assets/css/index';
.themeBlack();
.full-header{
  background: @navBgColor;
}
.black .full-header{
  .themeBlack();
  height: 50px;
  width: 100%;
  background: @navBgColor;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  box-shadow: 0 2px 10px 0 rgba(9, 13, 23, 0.6);
  position: relative;
  padding: 0 30px;
  z-index: 99;
  &>div{
    height: 100%;
  }
  .line {
    width: 1px;
    background: @tipColor;
  }

  .line-10 {
    height: 10px;
  }
  .logo {
    display: block;
    // .flex-shrink(@val: 0);
    width: 134px;
    min-width: 134px;
    height: 36px;
    background: url(../../../assets/images/58COIN_wc.png) no-repeat;
    background-size: 100% 100%;

    &.en {
      background-image: url(../../../assets/images/58COIN_we.png);
    }

    &.ko {
      background-image: url(../../../assets/images/58COIN_we.png);
    }

    &.ja {
      background-image: url(../../../assets/images/58COIN_we.png);
    }

    &.ru {
      background-image: url(../../../assets/images/58COIN_we.png);
    }
  }
  .market-item{
    flex: 1;
  }
  .user-info-full{
    display: flex;
    justify-content: space-around;
    align-items: center;
    .line {
      margin: 0 15px;
    }
    a {
      font-size: 14px;
      color: @middleFontColor;
      &:hover {
        color: @iconColor;
      }
    }

    .HyIconFont {
      margin-right: 4px;
      color: @middleFontColor;
    }
    .asset {
      margin-top: 10px;
      padding-bottom: 10px;
      position: relative;

      .asset_pic {
        width: 16px;
        height: 16px;
        margin-top: 3px;
        margin-right: 4px;
        background-image: url('../../../assets/images/newUI/toolbar/zc.svg');
        background-size: 100% 100%;
        fill: @middleFontColor;
      }

      .link {
        font-size: 14px;
        font-weight: 400;
        color: @middleFontColor;
      }

      .arrow {
        display: inline-block;
        margin-left: 8px;
        width: 0;
        height: 0;
        border-top: 4px solid @middleFontColor;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        cursor: pointer;
        .transition(0.5s);
      }

      &:hover {
        cursor: pointer;
        fill: @iconColor;

        .asset_pic {
          background-image: url('../../../assets/images/newUI/toolbar/zc_hover.svg');
          background-size: 100% 100%;
        }

        .HyIconFont {
          color: @iconColor;
        }

        .link {
          color: @iconColor;
        }

        .asset-info {
          display: block;
        }

        .asset-info-white {
          display: block;
        }

        .arrow {
          border-top: 4px solid @iconColor;
          .transform(rotate(180deg));
        }
      }
    }

    .userInfo {
      margin-top: 10px;
      padding-bottom: 10px;
      position: relative;

      a {
        color: @middleFontColor;
      }

      .arrow {
        display: inline-block;
        margin-left: 8px;
        width: 0;
        height: 0;
        border-top: 4px solid @middleFontColor;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        cursor: pointer;
        .transition(0.5s);
        vertical-align: middle;
      }

      .arrow-white {
        display: inline-block;
        margin-left: 8px;
        width: 0;
        height: 0;
        border-top: 4px solid #fff;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        cursor: pointer;
        .transition(0.5s);
      }

      &:hover {
        a {
          color: @iconColor;
        }

        .HyIconFont {
          color: @iconColor;
        }

        .user-info {
          display: block;
        }

        .user-info-white {
          display: block;
        }

        .arrow {
          border-top: 4px solid @iconColor;
          .transform(rotate(180deg));
        }
      }
    }
    .to-old {
      font-size: 12px !important;
      color: @iconColor !important;
      margin-left: 10px;
      display: inline-block;
    }
  }
}
.white .full-header{
  .themeWhite();
  height: 50px;
  width: 100%;
  background: @navBgColor;
  display: flex;
  justify-content:flex-start;
  align-items: center;
  box-shadow: 0 2px 10px 0 rgba(9, 13, 23, 0.6);
  position: relative;
  padding: 0 30px;
  z-index: 99;
  &>div{
    height: 100%;
  }
  .line {
    width: 1px;
    background: @tipColor;
  }

  .line-10 {
    height: 10px;
  }
  .logo {
    display: block;
    // .flex-shrink(@val: 0);
    width: 134px;
    min-width: 134px;
    height: 36px;
    background: url(../../../assets/images/58COIN_bc.png) no-repeat;
    background-size: 100% 100%;

    &.en {
      background-image: url(../../../assets/images/58COIN_be.png);
    }

    &.ko {
      background-image: url(../../../assets/images/58COIN_be.png);
    }

    &.ja {
      background-image: url(../../../assets/images/58COIN_be.png);
    }

    &.ru {
      background-image: url(../../../assets/images/58COIN_be.png);
    }
  }
  .market-item{
    flex: 1;
  }
  .user-info-full{
    display: flex;
    justify-content: space-around;
    align-items: center;
    .line {
      margin: 0 15px;
    }
    a {
      font-size: 14px;
      color: @middleFontColor;
      &:hover {
        color: @iconColor;
      }
    }

    .HyIconFont {
      margin-right: 4px;
      color: @middleFontColor;
    }
    .asset {
      margin-top: 10px;
      padding-bottom: 10px;
      position: relative;

      .asset_pic {
        width: 16px;
        height: 16px;
        margin-top: 3px;
        margin-right: 4px;
        background-image: url('../../../assets/images/newUI/toolbar/zc.svg');
        background-size: 100% 100%;
        fill: @middleFontColor;
      }

      .link {
        font-size: 14px;
        font-weight: 400;
        color: @middleFontColor;
      }

      .arrow {
        display: inline-block;
        margin-left: 8px;
        width: 0;
        height: 0;
        border-top: 4px solid @middleFontColor;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        cursor: pointer;
        .transition(0.5s);
      }

      &:hover {
        cursor: pointer;
        fill: @iconColor;

        .asset_pic {
          background-image: url('../../../assets/images/newUI/toolbar/zc_hover.svg');
          background-size: 100% 100%;
        }

        .HyIconFont {
          color: @iconColor;
        }

        .link {
          color: @iconColor;
        }

        .asset-info {
          display: block;
        }

        .asset-info-white {
          display: block;
        }

        .arrow {
          border-top: 4px solid @iconColor;
          .transform(rotate(180deg));
        }
      }
    }

    .userInfo {
      margin-top: 10px;
      padding-bottom: 10px;
      position: relative;

      a {
        color: @middleFontColor;
      }

      .arrow {
        display: inline-block;
        margin-left: 8px;
        width: 0;
        height: 0;
        border-top: 4px solid @middleFontColor;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        cursor: pointer;
        .transition(0.5s);
        vertical-align: middle;
      }

      .arrow-white {
        display: inline-block;
        margin-left: 8px;
        width: 0;
        height: 0;
        border-top: 4px solid #fff;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        cursor: pointer;
        .transition(0.5s);
      }

      &:hover {
        a {
          color: @iconColor;
        }

        .HyIconFont {
          color: @iconColor;
        }

        .user-info {
          display: block;
        }

        .user-info-white {
          display: block;
        }

        .arrow {
          border-top: 4px solid @iconColor;
          .transform(rotate(180deg));
        }
      }
    }
    .to-old {
      font-size: 12px !important;
      color: @iconColor !important;
      margin-left: 10px;
      display: inline-block;
    }
  }
}
</style>
