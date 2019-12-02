import { remote, ipcRenderer } from 'electron'
const { Menu, MenuItem } = remote
export default NenuItem => {
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
}