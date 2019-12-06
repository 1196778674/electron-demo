import axios from 'axios'
import apiConfig from '../api.config'

let axioss = axios.create({
  baseURL: apiConfig.zendeskURL,
  headers: {'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'}
})
let commonApi = {
  // 获取公告
  getAnnounce(data) {
    return axioss.get(
      'api/v2/help_center/' +
      data.locale +
      '/sections/' +
      data.id +
      '/articles.json?per_page=' +
      data.pageSize
    )
  }
}
export default commonApi
