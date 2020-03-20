<template>
  <div>
    <!-- 头部搜索栏 -->
    <Header>
      <icon-svg icon-class="Search" />
      <input type="text" placeholder="请输入搜索内容" v-on:input="inputFunc" />
    </Header>
    <div class="conten">
      <!-- 轮播图区域 -->
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <img src="../../public/swiper/aaa.jpeg" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../public/swiper/bbb.jpeg" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../public/swiper/ccc.jpg" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../public/swiper/ddd.jpeg" alt />
          </div>
          <div class="swiper-slide">
            <img src="../../public/swiper/eee.jpeg" alt />
          </div>
        </div>
        <div class="swiper-pagination"></div>
        <!--分页器。如果放置在swiper-container外面，需要自定义样式。-->
      </div>
      <!-- 小导航条 -->
      <div class="litNav">
        <img src="../../public/image/home/0.png" alt />
      </div>
      <!-- 中间导航 -->
      <div class="midNavBox">
        <MidItem txt="新人专享" class="midNavItem">
          <img src="../../public/image/home/1.png" alt slot="midImg" />
        </MidItem>
        <MidItem txt="品牌直供" class="midNavItem">
          <img src="../../public/image/home/2.png" alt slot="midImg" />
        </MidItem>
        <MidItem txt="严选优品" class="midNavItem">
          <img src="../../public/image/home/3.png" alt slot="midImg" />
        </MidItem>
        <MidItem txt="超值爆款" class="midNavItem">
          <img src="../../public/image/home/4.png" alt slot="midImg" />
        </MidItem>
        <MidItem txt="黑卡特权" class="midNavItem">
          <img src="../../public/image/home/5.png" alt slot="midImg" />
        </MidItem>
        <MidItem txt="淘宝天猫" class="midNavItem">
          <img src="../../public/image/home/6.png" alt slot="midImg" />
        </MidItem>
        <MidItem txt="淘宝特惠" class="midNavItem">
          <img src="../../public/image/home/7.png" alt slot="midImg" />
        </MidItem>
        <MidItem txt="京东特惠" class="midNavItem">
          <img src="../../public/image/home/8.png" alt slot="midImg" />
        </MidItem>
      </div>
      <!-- 宣传图区域 -->
      <div class="advertBox">
        <div class="one">
          <img src="../../public/image/home/vip.png" alt />
          <img src="../../public/image/home/library.png" alt />
        </div>
        <div class="two">
          <img src="../../public/swiper/111.png" alt />
          <img src="../../public/swiper/222.png" alt />
        </div>
      </div>
      <!-- 底部详情区域 -->
      <div class="mainBox">
        <MainItem littxt="严选优品" more="更多">
          <icon-svg icon-class="1201youjiantou" slot="mainImg" />
        </MainItem>
        <div
          v-infinite-scroll="getData"
          infinite-scroll-disabled="loading"
          infinite-scroll-distance="10"
        >
          <div v-for="item in MainData" :key="item.id" class="mainItem">
            <MainContent :topTitle="item.title" :midPrice="item.price" :botmTxt="item.share">
              <img :src="item.img" alt slot="ConImg" />
            </MainContent>
          </div>
        </div>
        <MainItem littxt="超值爆款" more="更多爆款">
          <icon-svg icon-class="1201youjiantou" slot="mainImg" />
        </MainItem>
        <div v-for="item in MainData" :key="item.id" class="mainItem">
          <MainContent :topTitle="item.title" :midPrice="item.price" :botmTxt="item.share">
            <img :src="item.img" alt slot="ConImg" />
          </MainContent>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// 引入swiper文件
import Swiper from 'swiper'
// 引入swiper 样式
import 'swiper/css/swiper.min.css'
import 'swiper/js/swiper.min.js'
// 引入midNav组件
import MidItem from './Home/MidItem'
// 引入 MainItem 组件
import MainItem from './Home/MainItem'
// 引入 MainContent 组件
import MainContent from './Home/MainContent'
export default {
  name: 'home',
  components: {
    MidItem,
    MainItem,
    MainContent
  },
  data () {
    return {
      MainData: []
      // loading: false,
      // start: 0,
      // count: 2
    }
  },
  methods: {
    inputFunc () {
      this.$router.push('/zhixuan')
    },
    async getData () {
      // this.loading = true
      this.MainData = await this.$http.get('/js/HomeConYan.json')
      // console.log(this.MainData)
      this.start++
    }
  },
  mounted () {
    // eslint-disable-next-line no-unused-vars
    var mySwiper = new Swiper('.swiper-container', {
      autoplay: true, // 可选选项，自动滑动
      pagination: {
        el: '.swiper-pagination'
      }
    })
  }
}
</script>

<style lang="scss" scoped>
// 引入home组件的scss样式
@import '../assets/scss/home.scss';
</style>
