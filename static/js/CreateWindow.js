import { remote } from 'electron'
const { Menu, MenuItem, BrowserWindow, app } = remote

export default class createWindow {
    create(url) {
        let mainWindow = new BrowserWindow({
            title:'58COIN交易平台',
            center: true,
        })
        mainWindow.loadURL(url)

        mainWindow.on('closed', () => {
            mainWindow = null
        })
        mainWindow.once('ready-to-show', () => {
            mainWindow.show()
        })
    }
}