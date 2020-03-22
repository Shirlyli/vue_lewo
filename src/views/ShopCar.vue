<template>
  <div>
    <mt-header fixed title="购物车"></mt-header>
    <div class="img" v-if="emptyCartIsShow">
      <img src="../../public/image/emptyCart.jpg" alt />
      <div>
        <span>空空如也</span>
        <span>随便逛逛></span>
      </div>
    </div>
    <div class="cart" :isShow="cartIsShow">
      <GoodCart></GoodCart>
    </div>
  </div>
</template>

<script>
import GoodCart from './Cart/GoodCart'
export default {
  name: 'shopcar',
  components: {
    GoodCart
  },
  data () {
    return {
      emptyCartIsShow: true,
      cartIsShow: false
    }
  }
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
  span {
    font-size: 0.6rem;
    font-weight: 300;
    margin-right: 0.8rem;
  }
  span:nth-child(2) {
    color: $pink;
  }
}
.cart {
  margin-top: 4rem;
}
</style>
