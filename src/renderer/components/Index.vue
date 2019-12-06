<template>
  <div id="view">
    <router-view id="container"></router-view>
  </div>
</template>

<script>
import MenuItem from '../assets/plugins/menuItem'
export default {
  name: "Index",
  components: {
    
  },
  data() {
    return {
      
    }
  },
  watch: {
    
  },
  methods: {
    
  },
  mounted() {
    MenuItem()

  },  
};
</script>


<style lang="less" scoped>
@import "../assets/css/base.less";
</style>
