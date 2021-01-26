'use strict'

import { app, BrowserWindow, ipcMain, Notification, Tray, Menu } from 'electron'
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
  const appTray = new Tray('static/image/favicon_main.ico')
  const trayMenuTemplate = [
    {
      label: '显示/隐藏',
      icon: 'static/image/favicon_main.ico',
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

ipcMain.on('sd', () => {
  console.log('sss')
  console.log(Notification.isSupported())
  let notification = new Notification({
    title: 's',
    body: 'Have a good day~'
  })
  notification.show()
})
