import {AxiosInit} from '@/config/axios/config'
import apiConfig from '../api.config'

let axios = AxiosInit({
  // 交割合约指南资金历史
  url: apiConfig.regularURL,
  contentType: 'application/x-www-form-urlencoded;charset=UTF-8'
});

let regularApi = {
  getContractList () {
    return axios.post('/contract/with/param/list')
  },
  getFundingRateList ({contractId, page, pageSize}) {
    return axios.post('/guide/funding/rate/list', {
      contractId: contractId,
      page: page,
      pageSize: pageSize
    })
  },
  getInsuranceFundList ({contractId, page, pageSize}) {
    return axios.post('/guide/insurance/fund/list', {
      contractId: contractId,
      page: page,
      pageSize: pageSize
    })
  },
};
export default regularApi
