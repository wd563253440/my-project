import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'
import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import Loading from './components/navTab/index'
Vue.use(Element)
Vue.use(Loading)
if (!process.env.IS_WEB) Vue.use(require('vue-electron'))
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  components: { App },
  router,
  store,
  template: '<App/>'
}).$mount('#app')

const ipcRenderer = require('electron').ipcRenderer

ipcRenderer.on('maximize', () => {
  console.log('窗口最大化')
})

ipcRenderer.on('minimize', () => {
  console.log('窗口最小化')
})
