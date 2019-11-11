<template>
  <div>
    <st-row>
      <div>234</div>
      <div>234</div>
      <div @click="ccc">{{ 234 }}</div>
    </st-row>
    <div>{{ ddd(aaa, 7) }}</div>
  </div>
</template>
<script>
import Utils from '@/assets/js/utils'
import bigdecimal from 'bigdecimal'
export default {
  data () {
    return {
      showPop: false,
      bbb: '',
      aaa: []
    }
  },
  created () {
    let a = new bigdecimal.BigDecimal('123.123')
    let b = new bigdecimal.BigDecimal('456.456')
    console.log(a)
    console.log(b)
    let c = a.add(b)
    console.log(c)
    for(let i = 0;i<10;i++){
      this.aaa.push(123)
    }
  },
  components: {
  },
  methods: {
    closeLayer () {
      this.showPop = false
    },
    ccc () {
      this.aaa[7] = 456
      this.aaa = JSON.parse(JSON.stringify(this.aaa))
    },
    ddd (arr, index) {
      return arr[index]
    }
  }
}
</script>
