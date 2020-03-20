import Vue from 'vue'

// 引入vuex管理包
import Vuex from 'vuex'
import App from './App.vue'
import router from './router'
import Router from 'vue-router'

// 引入字体样式js
import './assets/js/rem'

// 引入 mintui的js文件
import './plugins/mint.js'

// 引入 symbol 字体图标并封装成一个组件
import IconSvg from './views/IconSvg.vue'

// 引入ajax请求
import axios from './api/axios'
Vue.prototype.$http = axios

Vue.component('icon-svg', IconSvg)
Vue.use(Vuex)
Vue.config.productionTip = false

// 解决路由产生的 Uncaught (in promise) NavigationDuplicated 问题
const originalPush = Router.prototype.push
Router.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
