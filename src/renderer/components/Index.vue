<template>
  <div id="view">
    <lf-header></lf-header>
    <router-view id="container"></router-view>
    <lf-footer :product="product"></lf-footer>
  </div>
</template>

<script>
import MenuItem from '../assets/plugins/menuItem'
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
    
  },
  mounted() {
    MenuItem()

  },  
};
</script>


<style lang="less" scoped>
@import "../assets/css/base.less";
</style>
