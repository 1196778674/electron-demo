import { app, BrowserWindow, ipcMain } from 'electron'
import '../renderer/store'

/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}


let mainWindow;
const winURL = process.env.NODE_ENV === 'development'
  ? `http://0.0.0.0:9080`
  : `file://${__dirname}/index.html`

function createWindow() {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    title:'58COIN交易平台',
    center: true,
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
  webContents.on('did-finish-load', (event) => {
    webContents.setZoomFactor(1);
    webContents.setVisualZoomLevelLimits(1, 1);
    webContents.setLayoutZoomLevelLimits(0, 0);

  })
}

// 代理
function SET_PROXY () {
  const ip = `23.102.75.168:443`
  app.commandLine.appendSwitch('proxy-server', ip)
  app.commandLine.appendSwitch('proxy-bypass-list', '<local>;0.0.0.0:9080')
}

// SET_PROXY()

setTimeout(() => {
  app.on('ready', createWindow)
}, 0);

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


ipcMain.on('message', (event, arg) => {
  app.relaunch();
  app.exit(0);
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
