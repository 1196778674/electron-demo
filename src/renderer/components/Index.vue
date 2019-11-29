<template>
  <div id="view">
    <lf-header></lf-header>
    <router-view id="container"></router-view>
    <lf-footer :product="product"></lf-footer>
  </div>
</template>

<script>
import { remote, ipcRenderer } from 'electron'
const { Menu, MenuItem } = remote
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
    // 添加右键事件 start
    const _self = this;
    const menu = new Menu()
    const CurrentWindow = remote.getCurrentWebContents()
    menu.append(new MenuItem({ label: '返回', click() { 
      CurrentWindow.goBack(-1)
    } }))
    menu.append(new MenuItem({ label: '重新加载', click() { 
      CurrentWindow.reload()
    } }))
    menu.append(new MenuItem({ label: '一键加速', click() { 
      ipcRenderer.send('message', 'setProxy')
      setTimeout(() => {
        CurrentWindow.reload()
      }, 0);
    } }))
    menu.append(new MenuItem({ label: '切换线路IP', click() { 
      _self.changeFun()
      ipcRenderer.send('message', 'changeIp')
    } }))
    menu.append(new MenuItem({ label: '重启应用', click() { 
      ipcRenderer.send('message', 'restart')
    } }))
    
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      menu.popup({ window: remote.getCurrentWindow() })
    }, false)
    // 添加右键事件 end

  },  
};
</script>


<style lang="less" scoped>
@import "../assets/css/base.less";
</style>
