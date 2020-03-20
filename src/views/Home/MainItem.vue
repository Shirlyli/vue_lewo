<template>
  <div>
    <div class="Itembox">
      <span class="littxt">{{littxt}}</span>
      <span class="more">{{more}}</span>
      <span>
        <slot name="mainImg"></slot>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  props: ['littxt', 'more']
}
</script>
<style lang="scss" scoped>
.Itembox {
  display: flex;
  line-height: 3rem;
  .littxt {
    font-size: 1rem;
    font-weight: 400;
    margin-left: 0.6rem;
    flex: 7;
  }
  .more {
    font-size: 0.6rem;
    color: #777777;
    text-align: center;
    flex: 2;
  }
  span {
    flex: 1;
    font-size: .7rem;
  }
}
</style>
