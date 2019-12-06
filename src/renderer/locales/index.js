import Vue from 'vue'
import VueI18n from 'vue-i18n'
import Dictionary from './dictionary'

import CommonCH from './common/cn.json'
import CommonEN from './common/en.json'
import CommonKO from './common/ko.json'
import CommonRU from './common/ru.json'
import CommonJA from './common/ja.json'

import CN from './cn'
import EN from './en'
import KO from './ko'
import JA from './ja'
import RU from './ru'

import enLocale from 'element-ui/lib/locale/lang/en'
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
import koLocale from 'element-ui/lib/locale/lang/ko'
import jaLocale from 'element-ui/lib/locale/lang/ja'
import ruLocale from 'element-ui/lib/locale/lang/ru-RU'
import ElementLocale from 'element-ui/lib/locale'

Vue.use(VueI18n)

const messages = {
  en: {
    message: EN,
    // ...StEN,
    ...CommonEN,
    ...enLocale
  },
  cn: {
    message: CN,
    // ...StCN,
    ...CommonCH,
    ...zhLocale
  },
  ko: {
    message: KO,
    // ...StKO,
    ...CommonKO,
    ...koLocale
  },
  ja: {
    message: JA,
    // ...StCN,
    ...CommonJA,
    ...jaLocale
  },
  ru: {
    message: RU,
    // ...StRU,
    ...CommonRU,
    ...ruLocale
  }
};

// 获取语言格式
const getLang = (store) => {
  return store.state.dictionary.locale
};
const hasLanguage = function(lang, obj) {
  let localeList = Object.keys(obj)
  return localeList.some(item => item === lang) ? lang : 'en'
};

ElementLocale.i18n((key, value) => i18n.t(key, value))

export default function (store) {
  const i18n = new VueI18n({
    locale: hasLanguage(getLang(store), messages), // 语言标识
    messages
  });
  Vue.use(Dictionary, i18n)
  return i18n
}
