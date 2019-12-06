<template>
  <v-layer-box
    class="tool-bar-announcement"
    :title="$t('message.version3.announcement')"
    :value="value"
    @input="close"
    size="medium"
    :is-mark="false"
    :append-body="false"
  >
    <div class="announcement-content">
      <div class="content">
        <div class="item" v-for="item in list" :key="item.id">
          <p class="icon"></p>
          <div class="main">
            <p
              class="text"
              :class="{
                clicked: clickedList.indexOf(item.id) > -1
              }"
              @click="clickItem(item.html_url, item.id)"
            >
              {{ item.name }}
            </p>
            <p
              class="data"
              :class="{
                clicked: clickedList.indexOf(item.id) > -1
              }"
              @click="clickItem(item.html_url, item.id)"
            >
              {{ item.created_at.substr(2, 8) }}
            </p>
          </div>
        </div>
      </div>
      <div class="more">
        <v-button
          @click="more"
          type="weird"
          icon="hyicon-arrow_crumbs"
          icon-position="right"
          >{{ $t('message.common.more') }}</v-button
        >
      </div>
    </div>
  </v-layer-box>
</template>

<script>
  import CommonApi from '@/api/commonApi'
  import {systemMixin} from '@/mixins'

  export default {
  name: 'ToolBarAnnouncement',
  mixins: [systemMixin],
  model: {
    prop: 'value',
    event: 'input'
  },
  props: {
    value: Boolean
  },
  data() {
    return {
      id: '360002511854', // USDT
      list: [],
      clickedList: []
    }
  },
  computed: {
    // 跳转地址
    moreUrl() {
      return `https://58coin-support.zendesk.com/hc/${
        this.currentLocale
      }/sections/${this.id}`
    },
    // 当前语言
    currentLocale() {
      if (this.locale === 'cn') {
        return 'zh-cn'
      } else if (this.locale === 'en') {
        return 'en-us'
      } else {
        return this.locale
      }
    }
  },
  watch: {
    locale(value) {
      this.getAnnounceData()
    }
  },
  methods: {
    close() {
      this.$emit('input', false)
    },
    // 获取公告
    getAnnounceData() {
      CommonApi.getAnnounce({
        id: this.id,
        locale: this.currentLocale,
        pageSize: 9
      }).then(res => {
        this.list = res.data.articles
      })
    },
    // 点击操作
    clickItem(url, id) {
      this.clickedList.push(id)
      location.href = url
    },
    // 查看更多
    more() {
      location.href = this.moreUrl
    }
  },
  created() {
    this.getAnnounceData()
  }
}
</script>

<style lang="less" scoped="">
 @import (reference) '~@/assets/css/index';
.black {
  .themeBlack();
  .tool-bar-announcement {
    .content {
      width: 300px;
      .item {
        .flex-box();
        p {
          font-size: 12px;
          line-height: 23px;
          color: @darkFontColor;
          cursor: pointer;
        }
        .icon {
          margin: 7px 10px 0 0;
          width: 4px;
          height: 4px;
          border: 1px solid transparent;
          border-radius: 100%;
          background-color: #7889a9;
        }
        .main {
          .flex-box();
          width: 100%;
          justify-content: space-between;
          &:hover {
            p {
              color: @iconHoverColor;
            }
          }
          .text {
            max-width: 220px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .clicked {
            color: @iconColor !important;
          }
        }
      }
    }
    .more {
      text-align: center;
      margin-top: 16px;
    }
  }
}

.white {
  .themeWhite();
  .tool-bar-announcement {
    .content {
      width: 300px;
      .item {
        .flex-box();
        p {
          font-size: 12px;
          line-height: 23px;
          color: @darkFontColor;
          cursor: pointer;
        }
        .icon {
          margin: 7px 10px 0 0;
          width: 4px;
          height: 4px;
          border: 1px solid transparent;
          border-radius: 100%;
          background-color: #7889a9;
        }
        .main {
          .flex-box();
          width: 100%;
          justify-content: space-between;
          &:hover {
            p {
              color: @iconHoverColor;
            }
          }
          .text {
            max-width: 220px;
            overflow: hidden;
            white-space: nowrap;
            text-overflow: ellipsis;
          }
          .clicked {
            color: @iconColor !important;
          }
        }
      }
    }
    .more {
      text-align: center;
      margin-top: 16px;
    }
  }
}
</style>
