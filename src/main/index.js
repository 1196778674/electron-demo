import { app, BrowserWindow, ipcMain } from 'electron'
import '../renderer/store'
import SetHosts from '../renderer/assets/plugins/sethosts';

const hosts = new SetHosts()
// hosts.SET_HOSTS();
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

// 禁用缓存
// app.commandLine.appendSwitch("--disable-http-cache");
// 设置解析地址
// app.commandLine.appendSwitch('proxy-bypass-list', '<local>;*.baidu.com;*.aliyun.com;0.0.0.0:9080')
app.commandLine.appendSwitch('proxy-server', '182.61.200.7:443');
// app.commandLine.appendSwitch('host-rules', 'MAP *.58ex.com proxy');

let mainWindow;
// const winURL = process.env.NODE_ENV === 'development'
//   ? `http://0.0.0.0:9080`
//   : `file://${__dirname}/index.html`
const winURL = 'https://58ex.com'

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    height: 563,
    useContentSize: true,
    width: 1000,
    show: true
  })


  mainWindow.loadURL(winURL)

  mainWindow.on('closed', () => {
    mainWindow = null
  })
  mainWindow.once('ready-to-show', () => {
    mainWindow.show()
  })
  // 屏幕最大化
  setTimeout(() => {
    mainWindow.maximize();
  }, 0);
  // 禁止缩放
  const webContents = mainWindow.webContents;
  webContents.on('did-finish-load', () => {
    webContents.setZoomFactor(1);
    webContents.setVisualZoomLevelLimits(1, 1);
    webContents.setLayoutZoomLevelLimits(0, 0);
  })
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})


// 自添加方法
ipcMain.on('openList', function (event, args) {
  console.log('args', args);
})


/**
 * Auto Updater
 *
 * Uncomment the following code below and install `electron-updater` to
 * support auto updating. Code Signing with a valid certificate is required.
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-electron-builder.html#auto-updating
 */

/*
import { autoUpdater } from 'electron-updater'

autoUpdater.on('update-downloaded', () => {
  autoUpdater.quitAndInstall()
})

app.on('ready', () => {
  if (process.env.NODE_ENV === 'production') autoUpdater.checkForUpdates()
})
 */
