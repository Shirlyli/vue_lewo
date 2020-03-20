<template>
  <div>
    <div class="tabBox">
      <TabbBarItem title="首页" mark="home" :active="receive" @changeactive="doChange">
        <img src="../../public/image/01-1.png" alt slot="grayIcon" />
        <img src="../../public/image/01-2.png" alt slot="redIcon" />
      </TabbBarItem>
      <TabbBarItem title="圈子" mark="circle" :active="receive" @changeactive="doChange">
        <img src="../../public/image/05-1.png" alt slot="grayIcon" />
        <img src="../../public/image/05-2.png" alt slot="redIcon" />
      </TabbBarItem>
      <TabbBarItem title="超级榜" mark="super" :active="receive" @changeactive="doChange">
        <img src="../../public/image/02-1.png" alt slot="grayIcon" />
        <img src="../../public/image/02-2.png" alt slot="redIcon" />
      </TabbBarItem>
      <TabbBarItem title="购物车" mark="shopcar" :active="receive" @changeactive="doChange">
        <img src="../../public/image/03-1.png" alt slot="grayIcon" />
        <img src="../../public/image/03-2.png" alt slot="redIcon" />
      </TabbBarItem>
      <TabbBarItem title="我的" mark="mine" :active="receive" @changeactive="doChange">
        <img src="../../public/image/04-1.png" alt slot="grayIcon" />
        <img src="../../public/image/04-2.png" alt slot="redIcon" />
      </TabbBarItem>
    </div>
  </div>
</template>

<script>
import TabbBarItem from './TabbBarItem'
export default {
  name: 'home',
  data () {
    return {
      receive: 'home'
    }
  },
  components: {
    TabbBarItem
  },
  methods: {
    doChange (data) {
      this.receive = data
    }
  }
}
</script>

<style scoped lang="sass">
.tabBox
  width: 100%
  height: 4rem
  position: fixed
  bottom: 0
  left: 0
  display: flex
  align-items: center
  justify-content: space-around
  background-color: white
  border-top: 1px solid #cccccc
img
  width: 22px
</style>
