<template>
  <div id="app">
    <transition>
      <router-view></router-view>
    </transition>
    <TabbBar></TabbBar>
  </div>
</template>

<script>
import TabbBar from './components/TabbBar'
export default {
  name: 'app',
  components: {
    TabbBar
  },
  beforeCreate () {
    this.$router.push('/')
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
.v-enter{
  opacity: 0;
  transform: translateX(100%);
}

.v-leave-to{
  opacity: 0;
  transform: translateX(-100%);
  position: absolute;
}

.v-enter-active,
.v-leave-active{
  transition: all 0.5s ease;
}
</style>
