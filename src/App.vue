<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> -->
          <div class="cls-div" @click="divClick(`/`)">主页</div>---
          <div class="cls-div" @click="divClick(`/byname`)">点名系统</div>---
          <div class="cls-div" @click="divClick(`/friendsNew`)">朋友圈</div>---
          <div class="cls-div" @click="divClick(`/zhuxingtu`)">柱形图</div>---
          <div class="cls-div" @click="divClick(`/emjio`)">微信表情</div>
    </div>
    <router-view/>
  </div>
</template>

<script>
export default {
  methods:{
    divClick(str){
      this.$router.push(str)
    },
  }
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */

#nav {
  display: flex;
  flex-flow: row;
  justify-content: center;
  align-items: center;
  padding: 30px;
}

</style>
