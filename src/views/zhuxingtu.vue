<template>
  <div id="app">

    <!-- 柱形图 -->

    <div class="cls-zhuxingtu">
      <div class="cls-zhuitem" v-for="(item,index) in peoplearr" :key="index">
        <div class="cls-zhu" v-bind:style="{height:item.h+`px`}"></div>
        <div>{{item.name}}</div>
      </div>
    </div>

    <div>
      <a>姓名</a>
      <input type="text" name="" value="" v-model="iptname">
      <a>身高</a>
      <input type="text" name="" value="" v-model="iptheight">
      <button @click="pushpeople">录入</button>
    </div>


  </div>
</template>

<script>

export default {

  data(){
    return{

      //柱形图
      peoplearr:[{
        name:"张三",
        h:150,
      },{
        name:"李四",
        h:180,
      }],
      iptname:"",
      iptheight:0,
    };
  },

  methods:{

    pushpeople(){
      let itempeo = {
        name:this.iptname,
        h:this.iptheight
      }
      this.peoplearr.push(itempeo);
    }
  }


}
</script>

<style>
  .cls-zhuxingtu{
    display: flex;
    flex-flow: row;
    justify-content: start;
    align-items: flex-end;
  }

  .cls-zhu{
    width: 30px;
    height: 100px;
    margin: 3px;
    background-color: #eeeeee;
  }
</style>
