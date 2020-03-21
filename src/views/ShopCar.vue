<template>
  <div>
    <mt-header fixed title="购物车"></mt-header>
    <div class="img">
      <img src="../../public/image/emptyCart.jpg" alt />
      <div>
        <span>空空如也</span>
        <span>随便逛逛></span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'shopcar'
}
</script>

<style lang="scss" scoped>
$pink: rgb(240, 66, 217);
.mint-header {
  background-color: white;
  color: $pink;
  font-size: 1rem;
}
.img {
  position: fixed;
  left: 50%;
  top: 50%;
  margin-left: -4rem;
  margin-top: -8rem;
  img {
    max-width: 8rem;
  }
  span{
    font-size: .6rem;
    font-weight: 300;
    margin-right: .8rem;
  }
  span:nth-child(2){
    color: $pink;
  }
}
</style>
