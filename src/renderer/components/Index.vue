<template>
  <div id="view">
    <!-- <lf-header></lf-header>
    <router-view id="container"></router-view>
    <lf-footer :product="product"></lf-footer> -->
    <button @click="changeFun">切换IP</button>
  </div>
</template>

<script>
import SetHosts from '../assets/plugins/sethosts';
const ipcRenderder = require("electron").ipcRenderer;
export default {
  name: "Index",
  data() {
    return {
      hosts: new SetHosts(),
    };
  },
  watch: {
    
  },
  methods: {
    changeFun: function () {
      this.hosts.GET_HOSTS().then(data => {
        let ip = data.indexOf('47.52.165.55') === -1 ? '47.52.165.55' : '47.52.28.46'
        this.hosts.SET_HOSTS(ip);
      })
    }
  }
};
</script>


<style lang="less" scoped>
@import "../assets/css/base.less";
</style>
