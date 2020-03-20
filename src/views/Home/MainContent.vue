<template>
  <div>
    <div class="ConBox">
      <div class="left">
        <slot name="ConImg"></slot>
      </div>
      <div class="right">
        <p class="title">{{topTitle}}</p>
        <div>
          <span>{{midPrice}}</span>
          <mt-button type="danger" size="small">立即购买</mt-button>
        </div>
        <p class="bot">{{botmTxt}}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['topTitle', 'midPrice', 'botmTxt']
}
</script>

<style lang="scss" scoped>
.ConBox {
  display: flex;
  height: 8.6rem;
  background-color: white;
  margin-bottom: .6rem;
  .left {
    flex: 3;
    padding: .4rem;
  }
  .right {
    flex: 7;
    display: flex;
    flex-direction: column;
    padding: .6rem;
    .title {
      font-size: 1rem;
      font-weight: 400;
      flex: 6;
    }
    div {
      flex: 2;
      display: flex;
      align-content: center;
      span{
        flex:7;
        line-height: 1.2rem;
        font-size: .9rem;
        color: rgb(240, 44, 44);
      }
      .mint-button{
        flex:3;
        height: 1.2rem;
        border-radius: 1rem;
        font-size: .6rem;
      }
    }
    .bot {
      flex: 2;
      font-size: .8em;
      text-align: right;
      color: #999999;
      font-weight: 200;
      border-radius: 1rem;
      margin-left: 4rem;
      line-height: 1.4rem;
      background-color: rgb(255, 232, 170);
    }
  }
}
</style>
