<template>
  <div class="main">
    <div class="top">
      <mt-header fixed title="我的"></mt-header>
      <div class="topbox">
        <img src="../../public/image/icon/icon_head.png" alt />
        <div>
          <p style="color:white">18507173847</p>
          <span>W8712052</span>
          <span>复制邀请码</span>
        </div>
      </div>
    </div>
    <div class="mid_one">
      <div>
        <p>¥0.00</p>
        <p>累计</p>
      </div>
      <div>
        <p>¥0.00</p>
        <p>可提现</p>
      </div>
      <div>
        <p>¥0.00</p>
        <p>待发放</p>
      </div>
      <div>
        <p>0</p>
        <p>金币</p>
      </div>
    </div>
    <div class="mid_two">
      <div>
        <img src="../../public/image/my/1.png" alt />
        <p>全部订单</p>
      </div>
      <div>
        <img src="../../public/image/my/2.png" alt />
        <p>待付款</p>
      </div>
      <div>
        <img src="../../public/image/my/3.png" alt />
        <p>待收货</p>
      </div>
      <div>
        <img src="../../public/image/my/4.png" alt />
        <p>退换/售后</p>
      </div>
    </div>
    <div class="bottom">
      <div class="botcon"></div>
      <div class="botmain">
        <p>我的服务</p>
        <div class="botitem">
          <div v-for="item in minedata" :key="item.id">
            <img :src="item.img" alt />
            <p>{{item.txt}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'mine',
  data () {
    return {
      minedata: []
    }
  },
  async created () {
    this.minedata = await this.$http.get('/js/MineCon.json')
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/mine.scss';
</style>
