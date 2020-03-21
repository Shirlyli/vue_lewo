<template>
  <div>
    <div class="main">
      <img src="../../public/image/rank/rank_1.jpg" alt />
      <img src="../../public/image/rank/rank_2.jpg" alt />
      <img src="../../public/image/rank/rank_3.jpg" alt />
      <img src="../../public/image/rank/rank_4.jpg" alt />
      <img src="../../public/image/rank/rank_5.jpg" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: 'rank'
}
</script>

<style lang="scss" scoped>
.main {
  width: 100%;
  height: calc(100vh - 4rem);
  overflow: scroll;
  img {
    width: 100%;
    display: block;
  }
}
</style>
