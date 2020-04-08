<template>
  <div class="main">
    <mt-header fixed title="乐屋精选"></mt-header>
    <div class="container">
      <div class="containItem" v-for="item in data" :key="item.id">
        <div class="imgLeft">
          <img src="../../public/image/icon/icon_head.png" alt />
        </div>
        <div class="right">
          <div class="top">
            <span>乐屋精选</span>
            <span>一键保存</span>
            <span>分享</span>
          </div>
          <p class="time">{{item.time}}</p>
          <p class="txt">{{item.content}}</p>
          <img class="img1" :src="item.img1" />
          <div class="bottom">
            <img class="img2" :src="item.img2" alt />
            <div>
              <p>{{item.content2}}</p>
              <span>{{item.sale1}}</span>
              <span>{{item.sale}}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'circles',
  data () {
    return {
      data: []
    }
  },
  async created () {
    this.data = await this.$http.get('/js/CircleConXuan.json')
    const list = await this.$http.get('/qishitong/h5web/index')
    console.log(list.data)
  }
}
</script>

<style lang="scss" scoped>
@import '../assets/scss/circle.scss';
</style>
