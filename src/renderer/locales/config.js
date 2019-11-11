// 语言配置
import Cookie from '@/assets/js/config/cookie'
let LangConfig = {
  // 获取语言格式
  getLang: () => {
    if (Cookie.getCookie('locale')) {
      return Cookie.getCookie('locale')
    }
    return 'cn'
  }
}

export default LangConfig
