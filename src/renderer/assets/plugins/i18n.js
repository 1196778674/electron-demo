import Vue from 'vue'
import VueI18n from 'vue-i18n'

import CN from '../locales/cn.json'
import EN from '../locales/en.json'
import KO from '../locales/ko.json'
import RU from '../locales/ru.json'
import JA from '../locales/ja.json'

// import CNCommon from '../../locales/cn.json'
import StCN from '../../node_modules/st-ui/src/locale/lang/cn'
import StEN from '../../node_modules/st-ui/src/locale/lang/en'
import StKO from '../../node_modules/st-ui/src/locale/lang/ko'
import StRU from '../../node_modules/st-ui/src/locale/lang/ru'
import StJA from '../../node_modules/st-ui/src/locale/lang/ja'

Vue.use(VueI18n)

const messages = {
  'en': {...EN, ...StEN},
  'cn': {...CN, ...StCN},
  'ko': {...KO, ...StKO},
  'ja': {...JA, ...StJA},
  'ru': {...RU, ...StRU}
}

const hasLanguage = function (lang, obj) {
  let localeList = Object.keys(obj)
  return localeList.some(item => item === lang) ? lang : 'en'
}

export default ({ app, store, req }) => {
  // Set i18n instance on app
  // This way we can use it in middleware and trade asyncData/fetch
  if (req && req.locale) {
    store.commit('auth/SET_LOCALE', {
      locale: req.locale
    })
  }
  let locale = hasLanguage(store.state.auth.locale, messages)
  app.i18n = new VueI18n({
    locale: locale,
    messages
  })
}
