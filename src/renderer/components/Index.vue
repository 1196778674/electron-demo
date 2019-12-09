<template>
  <div id="view" :class="themes">
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
      themes: 'black'
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
