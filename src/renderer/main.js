import Vue from 'vue'

import App from './App'
import router from './router'
import store from './store'

// api
import Api from './assets/plugins/api'
Vue.use(Api)

// cookie
import Cookies from "js-cookie";
Vue.prototype.$cookie = Cookies

// 多语言
import VueI18n from 'vue-i18n'
import LangConfig from './assets/locales/language'
Vue.use(VueI18n)


import StCN from '@/locales/lang/cn'
import StEN from '@/locales/lang/en'
import StKO from '@/locales/lang/ko'
import StRU from '@/locales/lang/ru'

import CommonCH from '@/locales/common/cn.json'
import CommonEN from '@/locales/common/en.json'
import CommonKO from '@/locales/common/ko.json'
import CommonRU from '@/locales/common/ru.json'
import CommonJA from '@/locales/common/ja.json'

import CN from '@/locales/cn'
import EN from '@/locales/en'
import KO from '@/locales/ko'
import JA from '@/locales/ja'
import RU from '@/locales/ru'

// import enLocale from 'element-ui/lib/locale/lang/en'
// import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
// import koLocale from 'element-ui/lib/locale/lang/ko'
// import jaLocale from 'element-ui/lib/locale/lang/ja'
// import ruLocale from 'element-ui/lib/locale/lang/ru-RU'

// 多语言配置
const messages = {
  en: {
    message: EN,
    ...StEN,
    ...CommonEN,
    // ...enLocale
  },
  cn: {
    message: CN,
    ...StCN,
    ...CommonCH,
    // ...zhLocale
  },
  ko: {
    message: KO,
    ...StKO,
    ...CommonKO,
    // ...koLocale
  },
  ja: {
    message: JA,
    ...StCN,
    ...CommonJA,
    // ...jaLocale
  },
  ru: {
    message: RU,
    ...StRU,
    ...CommonRU,
    // ...ruLocale
  }
}
// 设置多语言
const hasLanguage = function (lang, obj) {
  let localeList = Object.keys(obj)
  return localeList.some(item => item === lang) ? lang : 'cn'
}

const i18n = new VueI18n({
  locale: hasLanguage(LangConfig.getLang(), messages),    // 语言标识
  messages
})

// 公共组建
import Row from '../renderer/assets/plugins/st-ui/row'
Vue.use(Row)

// 初始化请求
import axios from '../renderer/assets/plugins/axiosConfig'

let token = Cookies.get('token')
if (token) {
  store.commit('SET_COOKIE', {
    token: token
  })
  HeaderApi.getUserInfo()
    .then(res => {
      commit('SAVE_USERINFO', {
        data: res.data.info
      })
    })
    .catch((e) => {
      commit('SET_COOKIE', {
        token: null
      })
      delete axios.defaults.headers['ACCESS_TOKEN']
    })
  axios.defaults.headers['ACCESS_TOKEN'] = store.state.auth.token
  store.dispatch('getUserInfo')
  // store.dispatch('getUserProfile')
} else {
  store.commit('SET_COOKIE', {
    token: null
  })
  axios.defaults.headers['ACCESS_TOKEN'] = ""
}


if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
window.v = new Vue({
  components: { App },
  router,
  store,
  i18n,
  template: '<App/>'
}).$mount('#app')
