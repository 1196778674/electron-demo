import Language from './src/index'

Language.install = Vue => {
  Vue.component(Language.name, Language)
}

export default Language
