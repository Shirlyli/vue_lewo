import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
Vue.use(VueRouter)

const routes = [
  { path: '/', redirect: 'home' },
  { path: '/home', name: 'home', component: Home, meta: { title: '首页' } },
  { path: '/circle', name: 'circles', component: () => import('../views/Circle.vue'), meta: { title: '圈子' } },
  { path: '/super', name: 'super', component: () => import('../views/Super.vue'), meta: { title: '超级榜' } },
  { path: '/shopcar', name: 'shopcar', component: () => import('../views/ShopCar.vue'), meta: { title: '购物车' } },
  { path: '/mine', name: 'mine', component: () => import('../views/Mine.vue'), meta: { title: '我的' } }
]

const router = new VueRouter({
  routes
})

export default router
