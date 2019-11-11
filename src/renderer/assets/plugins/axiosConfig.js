import Vue from 'vue'
import axios from 'axios'
import qs from 'qs'
import apiConfig from '../../assets/myConfig/api.config'
import Cookie from '../../assets/myConfig/cookie'
import ApiConfig from '../../assets/myConfig/api.config'

function getCookie(cookie, cookieName) {
  let cookiePos = cookie.indexOf(cookieName)
  // 如果找到了索引，就代表cookie存在，
  // 反之，就说明不存在。
  if (cookiePos > -1) {
    // 把cookie_pos放在值的开始，只要给值加1即可。
    cookiePos += cookieName.length + 1
    let cookieEnd = cookie.indexOf(';', cookiePos)

    if (cookieEnd === -1) {
      cookieEnd = cookie.length
    }
    return unescape(cookie.substring(cookiePos, cookieEnd))
  }
  return null
}

const service = axios.create({
  baseURL: apiConfig.futureURL
})

// 拦截器
service.interceptors.request.use(config => {
  // post方法并且数据不是formData，序列化参数
  if (config.method === 'post' && config.headers['Content-Type'] !== 'multipart/form-data') {
    config.data = qs.stringify(config.data)
  }
  try {
    // myConfig.headers['ACCESS_TOKEN'] = getCookie(document.cookie, 'token')
    // 无token时，尝试重新获取token
    if (!config.headers['ACCESS_TOKEN'] && getCookie(document.cookie, 'token')) {
      config.headers['ACCESS_TOKEN'] = getCookie(document.cookie, 'token')
    }
    // token不统一时
    if (getCookie(document.cookie, 'token') && config.headers['ACCESS_TOKEN'] !== getCookie(document.cookie, 'token')) {
      config.headers['ACCESS_TOKEN'] = getCookie(document.cookie, 'token')
    }
    if (!getCookie(document.cookie, 'token') && config.headers['ACCESS_TOKEN']) {
      try {
        delete config.headers['ACCESS_TOKEN']
      } catch (err) { }
    }
  } catch (err) { }
  return config
}, error => {
  return Promise.reject(error)
})

service.interceptors.response.use(res => {
  if (parseInt(res.status) !== 200) return Promise.reject(res)
  /*
   * 状态码0判断，成功返回，失败则根据error.status判断是请求成功还是请求失败
   * error.status为true，则表示请求成功，此时根据后台返回状态码编写回调逻辑
   * error.status不存在，则表示请求失败（网络原因、请求状态不为200等原因）
   */
  if (res.data.code === 0) return res.data
  // 本地token失效时，清除token并不弹Toast
  if (res.data.code === 105) {
    Cookie.clearCookie('token', ApiConfig.domain)
    return Promise.reject(res.data)
  }
  // 请求时没有带ticket
  if (res.data.code === 112) return Promise.reject(res.data)
  // 登录密码错误
  if (res.data.code === 107) return res.data
  // 登录密码错误次数超限
  if (res.data.code === 108) {
    // 添加锁定状态
    res.data.data.lock = true
    return res.data
  }
  // 登录密码错误次数超限
  if (res.data.code === 109) {
    // 添加锁定状态
    res.data.data.lock = true
    return res.data
  }
  if (res.data.code === 170) {
    return Promise.reject(res.data)
  }
  if (res.data.code === 171) {
    return Promise.reject(res.data)
  }
  if (res.data.code === 172) {
    return Promise.reject(res.data)
  }
  // 302 短信验证码错误  还有 lastCount 次
  if (res.data.code === 302) {
    if (res.data.data.lastCount && res.data.data.lastCount >= 1) {
      alert(Vue.$dictionary.error('errorDesc1') + res.data.data.lastCount + Vue.$dictionary.error('errorDesc2'))
    }
    return Promise.reject(res.data)
  }
  alert(Vue.$dictionary.error(res.data.code))
  return Promise.reject(res.data)
}, error => {
  return Promise.reject(error)
})

export default service
