'use strict'

import { app, BrowserWindow, Notification, Tray, Menu } from 'electron'
/**
 * Set `__static` path to static files in production
 * https://simulatedgreg.gitbooks.io/electron-vue/content/en/using-static-assets.html
 */
if (process.env.NODE_ENV !== 'development') {
  global.__static = require('path').join(__dirname, '/static').replace(/\\/g, '\\\\')
}

let mainWindow
const winURL = process.env.NODE_ENV === 'development'
  ? `http://localhost:9080`
  : `file://${__dirname}/index.html`

let appTray = null

function createWindow () {
  /**
   * Initial window options
   */
  mainWindow = new BrowserWindow({
    width: 1376,
    height: 900,
    x: 10,
    y: 10,
    useContentSize: true,
    icon: 'static/image/favicon_main.ico'
    // frame: false
  })
  mainWindow.loadURL(winURL)
  mainWindow.on('closed', () => {
    mainWindow = null
  })
  mainWindow.setMenu(null)
  // mainWindow.addDevToolsExtension('node_modules/vue-devtools/vender')
  appTray = new Tray('static/image/favicon_main.ico')
  const trayMenuTemplate = [
    {
      label: '显示/隐藏',
      // icon: 'static/image/favicon_main.ico',
      click: function () {
        return mainWindow.isVisible() ? mainWindow.hide() : mainWindow.show()
      }
    },
    {
      label: '退出',
      click: function () {
        app.quit()
      }
    }
  ]
  const contextMenu = Menu.buildFromTemplate(trayMenuTemplate)
  appTray.setContextMenu(contextMenu)
  if (process.platform === 'win32') {
    app.setAppUserModelId('www.baomutech.com')
  }
  let notification = new Notification({
    title: '宝牧科技',
    body: '终端检测与安全防护API',
    icon: 'static/image/favicon_main.ico',
    silent: false
  })
  notification.show()
}

app.on('ready', createWindow)

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow()
  }
})
