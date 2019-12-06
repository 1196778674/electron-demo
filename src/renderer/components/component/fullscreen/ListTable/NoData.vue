<template>
  <div class="no-data">
    <p
      v-if="!userInfo"
      v-html="
        $t('message.version3.noLogin', {
          login: `${apiConfig.mainDomain}manage/login?position=usdt`,
          registered: `${apiConfig.mainDomain}manage/register?position=usdt`
        })
      "
    >
      <!-- 请
      <a :href="`${apiConfig.mainDomain}manage/login?position=usdt`">{{
        $t('message.header.login')
      }}</a>
      或
      <a :href="`${apiConfig.mainDomain}manage/register?position=usdt`">{{
        $t('message.header.register')
      }}</a>
      后查看仓位
    </p> -->
    </p>

    <p v-else>{{ $t('message.transactionList.noData') }}</p>
  </div>
</template>

<script>
import { userMixin } from '@/mixins'
import apiConfig from '@/config/api.config'
export default {
  name: 'ListNoData',
  mixins: [userMixin],
  data() {
    return {
      apiConfig
    }
  }
}
</script>

<style lang="less" scoped>
 @import (reference) '~@/assets/css/index';
.black {
  .themeBlack();
  .no-data {
    background: url('../../../assets/images/newUI/table-default-bg-black.png')
      no-repeat center 50px;
    background-size: 190px 108px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 150px;
    p {
      padding-top: 170px;
      font-size: 12px;
      color: @darkFontColor;
      text-align: center;
      /deep/ a {
        color: @iconColor;
      }
    }
  }
}
.white {
  .themeWhite();
  .no-data {
    background: url('../../../assets/images/newUI/table-default-bg-white.png')
      no-repeat center 50px;
    background-size: 190px 108px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%);
    width: 150px;
    p {
      padding-top: 170px;
      font-size: 12px;
      color: @darkFontColor;
      text-align: center;
      /deep/ a {
        color: @iconColor;
      }
    }
  }
}
</style>
