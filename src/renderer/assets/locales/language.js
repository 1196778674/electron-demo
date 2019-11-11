import Cookie from '../myConfig/cookie'
import ApiConfig from '../myConfig/api.config'
// 语言配置
let LangConfig = {
  // 获取语言格式
  getLang: () => {

    if (Cookie.getCookie('locale')) {
      return Cookie.getCookie('locale')
    } else {
      return 'cn'
    }
  }
}
/* else if (ApiConfig.domain.indexOf('58ex') > -1) {
  Cookie.setCookie('locale', 'en', '', '/', ApiConfig.domain)
  return 'en'
}  */
export default LangConfig