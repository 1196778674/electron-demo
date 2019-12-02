import { remote, ipcRenderer } from 'electron'
const { Menu, MenuItem } = remote
import SetHosts from './sethosts';
export default NenuItem => {
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
      changeFun()
      ipcRenderer.send('message', 'changeIp')
    } }))
    // menu.append(new MenuItem({ label: '重启应用', click() { 
    //   ipcRenderer.send('message', 'restart')
    // } }))
    
    window.addEventListener('contextmenu', (e) => {
      e.preventDefault()
      menu.popup({ window: remote.getCurrentWindow() })
    }, false)
}

function changeFun () {
  const hosts = new SetHosts()
  hosts.GET_HOSTS().then(data => {
    let ip = data.indexOf('47.52.165.55') === -1 ? '47.52.165.55' : '47.52.28.46'
    hosts.SET_HOSTS(ip);
  })
}