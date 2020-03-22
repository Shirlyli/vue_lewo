
import Vue from 'vue'
import Vuex from 'vuex'
// import axios from 'axios'
Vue.use(Vuex)

const state = {
  count: 1,
  cart: []
}

const getters = {
  getCount (state) {
    return state.count
  }
}

const actions = {
  subCount ({ commit }, id) {
    commit('subCount', id)
  },
  addCount ({ commit }, id) {
    commit('addCount', id)
  }
}

const mutations = {
  subCount (state, id) {
    if (state.count <= 1) {
      state.count = 1
    } else {
      state.count--
    }
    // // id在cart中对应的对象
    // const cartobj = state.cart.find((item) => item.id === id)
    // // 判断购物车中是否存在该商品，如果存在数量++，如果不存在。将该商品push到购物车中
    // cartobj.count--
  },
  addCount (state, id) {
    state.count++
    // const cartobj = state.cart.find((item) => item.id === id)
    // // 判断购物车中是否存在该商品，如果存在数量++，如果不存在。将该商品push到购物车中
    // if (cartobj) {
    //   cartobj.count++
    // } else {
    //   state.cart.push({
    //     count: 1
    //   }
    //   )
    // }
  }
}
export default new Vuex.Store({
  state, getters, actions, mutations
})
