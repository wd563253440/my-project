// 引入组件
import LoadingComponent from './navTab'
// 定义 Loading 对象
const navTab = {
  // install 是默认的方法。当外界在 use 这个组件的时候，就会调用本身的 install 方法，同时传一个 Vue 这个类的参数。
  install: function (Vue) {
    Vue.component('navTab', LoadingComponent)
  }
}
// 导出
export default navTab
