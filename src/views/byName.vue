<template>
  
<div class="cls-allByName">
      
      <div class="cls-top">
          <!-- 左侧按钮 -->
          <div class="cls-button">
              <div id="id_inputend" v-if="inputName == ``">{{prompt}}</div>
              <input id="id_inpu t" type="text" v-model="inputName"/>
              <button v-on:click="btinput()">录入</button>
              <button v-on:click="randomstar()" >随机点名开始</button>
              <button v-on:click="randomend()">随机点名结束</button>
              
          </div>
          <!-- 右侧展示 -->
          <div id="id_show" class="cls-show">{{showright}}</div>
          
      </div>

      <!-- 展示数据库 -->
      <div id="id_showarray" class="cls-showarray">{{namearr}}</div>
  </div>
  
</template>

<script>

  export default {
    data(){
      return{
        namearr:[],
        // 录入框内容
        inputName:"",
        //右侧展示内容
        showright:"",
        //随机点名
        si:null,
        prompt:"请先输入姓名",
      }
    },

    methods: {

      // 录入按钮
      btinput(){
        console.log(this.inputName)
        if(this.inputName!= ""){
          this.namearr.push(this.inputName);
          this.inputName= "";
        }
      },
      // 点名开始按钮
      randomstar(){
        if(this.namearr != undefined){
            this.si = setInterval(()=>{
              let len = this.namearr.length;
              let randomnumber = Math.random()*len;
              // // 生成随机数向下取整
              let randomInt = Math.floor(randomnumber);
              console.log(randomInt);
              this.showright = this.namearr[randomInt];
          },300);
        }
        
      },
      // 停止按钮
      randomend(){
        clearInterval(this.si);
      }
    }
  }


</script>

<style>
  .cls-allByName{
      width: 600px;
      height: auto;
      background-color: #eeeeee;
  }

  .cls-top{
      display: flex;
      flex-flow: row;
      justify-content: center;
      align-items: center;
  }

  .cls-button{
      height: 200px;
      display: flex;
      flex-flow: column;
      justify-content: space-around;
      align-items: center;
  }

  .cls-show{
      width: 300px;
      height: 300px;
      background-color: #ffffff;
      border-radius: 150px;
      line-height: 300px;
      text-align: center;
  }

  .cls-showarray{
      width: 600px;
      height: 300px;
      background-color: #dddddd;
      /* overflow: hidden; */
      word-wrap: wrap;
  }
</style>
