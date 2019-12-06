import {AxiosInit} from '@/config/axios/config'
import apiConfig from '../api.config'

let axios = AxiosInit({
  url: apiConfig.swapsURL,
  contentType: 'application/x-www-form-urlencoded;charset=UTF-8'
});

let newswapApi = {
  getContractList () {
    return axios.post('/contract/list')
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
export default newswapApi
