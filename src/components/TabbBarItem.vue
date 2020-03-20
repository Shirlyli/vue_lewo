<template>
  <!-- 底部tabber单组件 -->
  <div>
    <div class="tabitem" @click="change()">
      <span v-if="!bol">
        <slot name="grayIcon"></slot>
      </span>
      <span v-if="bol">
        <slot name="redIcon"></slot>
      </span>
      <!-- 底部导航栏 标题 -->
      <p :class="{active:bol}">{{title}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tabbbaritem',
  props: ['title', 'mark', 'active'],
  methods: {
    change () {
      // 传递this.mark属性，判断是否与active相等
      this.$emit('changeactive', this.mark)
      this.$router.push('/' + this.mark)
    }
  },
  computed: {
    bol () {
      if (this.mark === this.active) {
        return true
      } else {
        return false
      }
    }
  }
}
</script>

<style scoped lang="sass">
.tabitem
  flex: 1
  text-align: center
  & p
    font-size: .7rem
    margin: 2px

.active
  color: #d81e06
</style>
