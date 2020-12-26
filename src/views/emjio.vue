<template>
  <div id="app">
    <!-- 微信表情 -->
    <div>
      最近使用:
      <a v-for="(item,index) in useemoji" :key="index">{{"-"+item+"-"}}</a>
    </div>

    <div>
      所有表情:
      <button @click="btemoji(item)" v-for="(item,index) in allemoji" :key="index">{{item}}</button>
    </div>

    


  </div>
</template>

<script>

export default {

  data(){
    return{
      allemoji:["微笑","大笑","哭笑","抽烟","生气","发怒"],
      useemoji:["微笑","大笑","哭笑","抽烟","生气","发怒"],

      
    };
  },

  methods:{
    btemoji(e){
      this.useemoji = this.useemoji.filter((i)=>{
        return i!=e;
      });
      this.useemoji.unshift(e);
    },

    
  }


}
</script>

<style>
  

</style>
