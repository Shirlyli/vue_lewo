import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: 'home' },
  { path: '/home', name: 'home', component: Home, meta: { title: '首页' } },
  { path: '/circles', name: 'circles', component: () => import('../views/Circle.vue'), meta: { title: '圈子' } }
]

const router = new VueRouter({
  routes
})

export default router
