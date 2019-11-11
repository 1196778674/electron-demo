import Form from './src/form.vue'
import FormItem from './src/form-item.vue'

import Input from './src/element/input.vue'
import Select from './src/element/select.vue'
import Option from './src/element/option.vue'
import GoogleCode from './src/element/google-code.vue'
import Checkbox from './src/element/checkbox.vue'
import Textarea from './src/element/textarea.vue'

Form.install = Vue => {
  Vue.component(Form.name, Form)
}

FormItem.install = Vue => {
  Vue.component(FormItem.name, FormItem)
}

Input.install = Vue => {
  Vue.component(Input.name, Input)
}
Select.install = Vue => {
  Vue.component(Select.name, Select)
}
Option.install = Vue => {
  Vue.component(Option.name, Option)
}
GoogleCode.install = Vue => {
  Vue.component(GoogleCode.name, GoogleCode)
}
Checkbox.install = Vue => {
  Vue.component(Checkbox.name, Checkbox)
}
Textarea.install = Vue => {
  Vue.component(Textarea.name, Textarea)
}

export { Form }
export { FormItem }

export { Input }
export { Select }
export { Option }
export { GoogleCode }
export { Checkbox }
export { Textarea }
