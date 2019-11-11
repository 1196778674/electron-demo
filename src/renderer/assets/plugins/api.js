// import Vue from 'vue'
import HeaderApi from '../js/api/headerApi'

export default {
    install(Vue) {
        Vue.prototype.toolsApi = HeaderApi
    }
}

