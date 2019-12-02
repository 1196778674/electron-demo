<template>
  <div id="view">
    <lf-header></lf-header>
    <router-view id="container"></router-view>
    <lf-footer :product="product"></lf-footer>
  </div>
</template>

<script>
import MenuItem from '../assets/plugins/menuItem'
import SetHosts from '../assets/plugins/sethosts';
import LfHeader from "./component/header/header";
import LfFooter from "./component/footer/footer";
export default {
  name: "Index",
  components: {
    LfHeader,
    LfFooter
  },
  data() {
    return {
      hosts: new SetHosts(),
      product: [
        { name: this.$t("message.header.usdtTrade"), href: "javascript:;" },
        { name: this.$t("message.header.trade"), href: "javascript:;" },
        { name: this.$t("message.header.regularContract"), href: "javascript:;" }
      ]
    }
  },
  watch: {
      "$i18n.locale": {
          handler(val) {
            this.product = [
              { name: this.$t("message.header.usdtTrade"), href: "javascript:;" },
              { name: this.$t("message.header.trade"), href: "javascript:;" },
              { name: this.$t("message.header.regularContract"), href: "javascript:;"}
            ]; 
        }
      }
  },
  methods: {
    changeFun: function () {
      const CurrentWindow = remote.getCurrentWebContents()
      this.hosts.GET_HOSTS().then(data => {
        let ip = data.indexOf('47.52.165.55') === -1 ? '47.52.165.55' : '47.52.28.46'
        this.hosts.SET_HOSTS(ip);
      })
    }
  },
  mounted() {
    MenuItem()

  },  
};
</script>


<style lang="less" scoped>
@import "../assets/css/base.less";
</style>
