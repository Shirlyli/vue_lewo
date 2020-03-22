<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
    <div v-if="isShow">
      <TabbBar></TabbBar>
    </div>
  </div>
</template>

<script>
import TabbBar from './components/TabbBar'
export default {
  name: 'app',
  components: {
    TabbBar
  },
  data () {
    return {
      isShow: true
    }
  },
  // 刷新页面时跳转到home组件
  beforeCreate () {
    this.$router.push('/')
  },
  // 监听路由变化，判断哪些组件需要tabbar，哪些不需要
  watch: {
    $route (to, from) {
      if (this.$route.path === '/togoodsinfo') {
        this.isShow = false
      } else {
        this.isShow = true
      }
      if (this.$route.path === '/') {
        this.isShow = true
      }
    }
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.v-enter {
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active {
  transition: all 0.5s ease;
}
</style>
