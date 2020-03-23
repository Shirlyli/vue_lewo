<template>
  <div>
    <div class="main" v-for="item in data" :key="item.id">
      <input type="checkbox" name id />
      <img :src="item.img" alt />
      <div class="box">
        <p>{{item.title}}</p>
        <div class="box1">
          <span class="price">{{item.price}}</span>
          <span class="count">
            <button @click="subCount">-</button>
            <span class="count1">{{getCount}}</span>
            <button @click="addCount">+</button>
          </span>
        </div>
      </div>
    </div>
    <div class="bottom">
      <div>
        <button class="del" @click="delall">删除</button>
        <button class="sale" @click="buyall">结算</button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
  name: 'goodcart',
  computed: mapGetters(['getCount']),
  data () {
    return {
      data: ''
    }
  },
  async created () {
    this.data = await this.$http.get('/js/InfoCon.json')
    console.log(this.data)
  },
  methods: {
    ...mapActions(['addCount', 'subCount', 'delall', 'buyall'])
  }
}
</script>

<style lang="scss" scoped>
$pink: rgb(240, 66, 217);
.main {
  display: flex;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid #dbd7d7;
  background-color: white;
  input {
    flex: 1;
    margin-top: 1.6rem;
  }
  img {
    flex: 2;
    width: 2rem;
  }
  .box {
    flex: 7;
    padding: 0.3rem 0.6rem;
    font-size: 0.9rem;
    font-weight: 300;
    p {
      margin-bottom: 0.6rem;
    }
    .box1 {
      display: flex;
      .price {
        margin-right: 6rem;
        flex: 6;
      }
      .count {
        flex: 4;
        display: flex;
        button,
        span {
          display: block;
          flex: 1;
          background-color: rgb(228, 218, 218);
          text-align: center;
          outline: none;
        }
      }
    }
  }
}
.bottom {
  position: fixed;
  bottom: 4rem;
  left: 0;
  button {
    width: 11rem;
    height: 2rem;
    border: none;
    font-size: 0.8rem;
    color: white;
    outline: none;
  }
  .del {
    background-color: red;
  }
  .sale {
    background-color: $pink;
  }
}
</style>
