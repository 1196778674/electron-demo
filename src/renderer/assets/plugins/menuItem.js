import { remote, ipcRenderer } from 'electron'
const { Menu, MenuItem } = remote
import os from 'os'
import SetHosts from './sethosts';
import Cookie from "../myConfig/cookie";
export default NenuItem => {
    const menu = new Menu()
    const CurrentWindow = remote.getCurrentWebContents()
    const langs = [{label: '中文简体', lang: 'cn'}, {label: 'English', lang: 'en'}, {label: '한국어', lang: 'ko'}, {label: '日本語', lang: 'ja'}, {label: 'Русский', lang: 'ru'}]
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
    // 设置多语言
    menu.append(new MenuItem({ label: '多语言切换', submenu: langs.map(v => {
      return {'click': function(){
        Cookie.setCookie("locale", v.lang, "", "/")
        this.v.$i18n.locale = v.lang
      }, 'label': v.label}
    }) }))
    // 添加右键
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      menu.popup({ window: remote.getCurrentWindow() })
    }, false)
}

function changeFun () {
  const hosts = new SetHosts()
  hosts.GET_HOSTS().then(data => {
    let ip = !data.includes('47.52.165.55') ? '47.52.165.55' : '47.52.28.46'
    hosts.SET_HOSTS(ip);
  })
}