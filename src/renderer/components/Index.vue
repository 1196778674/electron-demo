<template>
  <div id="view">
    <lf-header></lf-header>
    <router-view id="container"></router-view>
    <lf-footer :product="product"></lf-footer>
  </div>
</template>

<script>
import { remote } from 'electron'
const { Menu, MenuItem, BrowserWindow, app } = remote
import SetHosts from '../assets/plugins/sethosts';
import LfHeader from "./component/header/header";
import LfFooter from "./component/footer/footer";
import createWindow from '../../../static/js/CreateWindow'
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
    // 添加右键事件
    const _self = this;
    const menu = new Menu()
    const CurrentWindow = remote.getCurrentWebContents()
    menu.append(new MenuItem({ label: 'remote', click() { console.log(remote) } }))
    menu.append(new MenuItem({ label: '自带方法', click() { console.log(CurrentWindow) } }))
    menu.append(new MenuItem({ label: '切换线路', click() { _self.changeFun() } }))
    menu.append(new MenuItem({ label: '刷新', click() { CurrentWindow.reload() } }))
    menu.append(new MenuItem({ label: '方法', click() { 
      // setTimeout(() => {
      //   CurrentWindow.destroy()
      // }, 1000);
      let win = new createWindow();
      app.on('ready', win.create(CurrentWindow.getURL()))
      app.on('window-all-closed', () => {
        if (process.platform !== 'darwin') {
          app.quit();
        }
      })

    } }))
    
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      menu.popup({ window: remote.getCurrentWindow() })
    }, false)
  },  
};
</script>


<style lang="less" scoped>
@import "../assets/css/base.less";
</style>
