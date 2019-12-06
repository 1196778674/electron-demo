<template>
  <div class="usdt-fullscreen" id='usdt-fullscreen'>
    <h1>{{$t('message.header.usdtTrade')}}</h1>
    <Header></Header>
  </div>
</template>

<script>
import Header from '../component/fullscreen/Header'
export default {
  name: "usdt",
  data() {
    return {
      list: []
    };
  },
  components: {
    Header,
  },
  created() {
    
  },
  methods: {
    
  }
};
</script>

<style lang="less" scoped>
</style>
