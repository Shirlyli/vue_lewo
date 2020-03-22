<template>
  <div>
    <div class="contain">
      <mt-swipe :auto="4000">
        <mt-swipe-item>
          <img src="../../../public/image/icon/a_02.png" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../../public/image/icon/b_02.png" alt />
        </mt-swipe-item>
        <mt-swipe-item>
          <img src="../../../public/image/icon/c_02.png" alt />
        </mt-swipe-item>
      </mt-swipe>
      <div class="main">
        <p class="title">维生素固体饮料（买一送一）</p>
        <mt-header class="one">
          <mt-button slot="left">¥48</mt-button>
          <mt-button slot="right">立即分享</mt-button>
        </mt-header>
        <mt-header class="two">
          <mt-button slot="left">库存:9998</mt-button>
          <mt-button slot="right">销量:3241</mt-button>
        </mt-header>
        <div class="bb"></div>
        <p class="sever">
          <span>服务</span>
          <span>正品保障 品牌直销 七天无理由退货</span>
        </p>
        <div class="bb"></div>
      </div>
      <img src="../../../public/image/icon/d_02.png" alt />
      <img src="../../../public/image/icon/e_02.png" alt />
      <img src="../../../public/image/icon/f_02.png" alt />
      <img src="../../../public/image/icon/g_02.png" alt />
      <img src="../../../public/image/icon/h_02.png" alt />
      <img src="../../../public/image/icon/j_02.png" alt />
      <img src="../../../public/image/icon/k_02.png" alt />
    </div>
    <div class="foot">
      <div class="cart">
        <icon-svg icon-class="shop-car" />
        <p>购物车</p>
      </div>
      <div class="slove">
        <icon-svg icon-class="homepagefill" />
        <p>收藏</p>
      </div>
      <div class="now">
        <span @click="toGoodsDetail">加入购物车</span>
        <span>立即购买</span>
      </div>
    </div>
    <div class="goodsdetail">
      <GoodsDetail v-if="ishow"></GoodsDetail>
    </div>
  </div>
</template>

<script>
import GoodsDetail from './GoodsDetail'
export default {
  name: 'goodsinfo',
  components: {
    GoodsDetail
  },
  data () {
    return {
      ishow: false
    }
  },
  methods: {
    toGoodsDetail () {
      this.ishow = true
    }
  }
}
</script>
<style lang="scss">
@import '../../assets/scss/info.scss';
</style>
