// axios配置
import axios from 'axios'
import qs from 'qs'
import apiConfig from '../api.config'

let zendeskAxios = axios.create()

// 请求延迟
// axios.defaults.timeout = 5000
zendeskAxios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
// 请求baseURL
zendeskAxios.defaults.baseURL = apiConfig.zendeskURL

// POST传参序列化
zendeskAxios.interceptors.request.use((config) => {
  // post方法并且数据不是formData，序列化参数
  if (config.method === 'post' && config.headers['Content-Type'] !== 'multipart/form-data') {
    config.data = qs.stringify(config.data)
  }
  try {
    delete config.headers['ACCESS_TOKEN']
  } catch (err) {}
  return config
}, (error) => {
  console.log('错误的传参')
  return Promise.reject(error)
});

// code状态码200判断
zendeskAxios.interceptors.response.use((res) => {
  if (parseInt(res.status) !== 200) return Promise.reject(res)
  return res.data
}, (error) => {
  return Promise.reject(error)
});

export default zendeskAxios
