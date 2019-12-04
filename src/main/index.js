import { app, BrowserWindow, ipcMain, session } from 'electron'
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
    width: 1280,
    height: 760,
    title:'58COIN交易平台',
    center: true
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
    // mainWindow.maximize();
  }, 0);
  // 禁止缩放
  const webContents = mainWindow.webContents;
  webContents.on('did-finish-load', (event) => {
    webContents.setZoomFactor(1);
    webContents.setVisualZoomLevelLimits(1, 1);
    webContents.setLayoutZoomLevelLimits(0, 0);
  })
  
}

// 监听客户端信息
let index = 0
ipcMain.on('message', (event, arg) => {
  const ips = ['23.102.75.168:443']
  if(arg === 'setProxy') {
    const ses = session.defaultSession
    ses.setProxy(`https=${ips[index]}`, function() {
        console.log('加速成功！');
    });
    if(index === ips.length - 1) {
      index = 0
    } else {
      index++
    }
  } else {
    app.relaunch();
    app.exit();
  }
})

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
