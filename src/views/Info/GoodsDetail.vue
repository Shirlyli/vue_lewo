<template>
  <div class="box">
    <div class="main">
      <img src="../../../public/image/home/WechatIMG77_14.png" alt />
      <div>
        <p>维生素固体饮料（买一送一）</p>
        <p>¥48</p>
        <p>库存:9998</p>
      </div>
      <span>*</span>
    </div>
    <div class="count">
      <span>购买数量</span>
      <div>
        <button>-</button>
        <span></span>
        <button>+</button>
      </div>
    </div>
    <button class="sure">确定</button>
  </div>
</template>

<script>
export default {
  name: 'gooddetail'
}
</script>

<style lang="scss" scoped>
$pink: rgb(240, 66, 217);
.box {
  height: 30rem;
  background-color: white;
}
.main {
  display: flex;
  width: 100%;
  padding: 0.6rem;
  border-bottom: 1px solid #ccc;
  img {
    flex: 2;
    width: 3rem;
    padding-right: 0.6rem;
  }
  div {
    flex: 7;
    p {
      margin-bottom: 0.3rem;
    }
    p:nth-child(1) {
      font-size: 1rem;
      font-weight: 300;
    }
    p:nth-child(2) {
      font-size: 0.9rem;
      font-weight: 300;
      color: $pink;
    }
    p:nth-child(3) {
      font-size: 0.9rem;
      font-weight: 300;
      color: #999;
    }
  }
  span {
    flex: 1;
  }
}
.count {
  margin-top: 0.4rem;
  padding: 0.6rem;
  display: flex;
  span:nth-child(1) {
    font-size: 0.9rem;
    color: rgb(153, 147, 147);
    flex: 7;
  }
  div{
    flex:3;
    display: flex;
    button,span{
      display: block;
      flex:1;
      background-color: rgb(153, 147, 147);
    }
  }
}
.sure{
  width: 90%;
  background-color: $pink;
  border-radius: 2rem;
  color: white;
  height: 2rem;
  font-size: .8rem;
  font-weight: 300;
  position: fixed;
  bottom: .6rem;
  left: 1rem;
}
</style>
