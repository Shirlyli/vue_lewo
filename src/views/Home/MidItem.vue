<template>
  <div>
    <div>
      <slot name="midImg"></slot>
      <p>{{txt}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mid',
  props: ['txt']
}
</script>

<style lang="scss" scoped>
p {
  font-size: 0.4rem;
  text-align: center;
  color: rgba(102, 101, 101, 0.952);
}
</style>
