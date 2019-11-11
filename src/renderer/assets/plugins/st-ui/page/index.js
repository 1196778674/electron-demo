import StPage from './src/page.vue'

StPage.install = Vue => {
  Vue.component(StPage.name, StPage)
}

export default StPage
