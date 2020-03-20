<template>
  <div id="app">
    <router-view></router-view>
    <TabbBar></TabbBar>
  </div>
</template>

<script>
import TabbBar from './components/TabbBar'
export default {
  name: 'app',
  components: {
    TabbBar
  }
}
</script>

<style>
*{
  margin:0;
  padding: 0;
}
</style>
