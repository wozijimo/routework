<template>
  <div id="app">
    
    <!-- 朋友圈界面 默认展示-->
    <div id="id_friends" v-if="show">
        

        <div class="cls-allfriendsNew">

            <!-- 左箭头 相机 -->
            <div class="cls-title">
                <img class="cls-left" src="../assets/back.png" alt="">
                <img class="cls-camera" v-on:click="cameraclick" src="../assets/back.png" alt="">
            </div>

            <!-- 背景  昵称   头像 -->
            <div class="cls-background">
                <img class="cls-bgimg" src="../assets/back.png" alt="">
                <div class="cls-myself">
                    <span class="cls-name">星空</span>
                    <img class="cls-headimg" src="../assets/head.png" alt="">
                </div>
            </div>

        <!-- item接收器 -->
            <div class="cls-item" v-for="(item,index) in friends" :key="index">
                <img class="cls-itemhead" src="../assets/head.png" alt="">
                <div class="cls-itemright">
                    <div class="cls-itemname">{{item.itemname}}</div>
                    <div class="cls-itemtitle">{{item.itemtitle}}</div>
                    <div class="cls-manyimg">
                    <!-- 一张图片 -->
                        <img v-if="item.arrimg != 0" v-for="(i,index) in item.arrimg" :key="index" v-bind:class="[item.arrimg.length == 1?`cls-img1`:`cls-img2`]" src="../assets/back.png" alt="">
                    </div>
                    <div class="cls-itembot">
                        <div class="cls-itemtime">{{item.itemtime}}</div>
                        <div class="cls-itemmore">··</div>
                    </div>
                </div>
            </div>
            <div class="cls-itemline"></div>
        </div>
    </div>

        <!-- 发布界面 默认隐藏-->
        <div id="id_page2" class="cls-page2" v-if="!show">
            
            <!-- 取消 发表 -->
            <div class="cls-title2">
                <div class="cls-cancle2" v-on:click="cancleclick">取消</div>
                <div @click="pubclick" v-bind:class="[inputText != ``?`cls-pub3`:`cls-pub2`]" >发表</div>
            </div>
            
            <div class="cls-all2">
                <!-- 输入框 contenteditable 设置div输入可以输入文字-->
                <textarea type="text" v-model="inputText" class="cls-textarea" placeholder="请输入你的想法"/>
                <!-- <div id="id_input2" class="cls-input2" contenteditable="true"></div> -->

                <!-- 图片 -->
                <div class="cls-imgall2">
                    <img class="cls-itemimg22" src="../assets/back.png" alt="">
                    <img class="cls-itemimg22" src="../assets/back.png" alt="">
                    <img class="cls-itemimg22" src="../assets/back.png" alt="">
                </div>


                <div class="cls-line2 cls-linemargin"></div>

                <!-- item -->
                <div class="cls-item2">
                    <img class="cls-itemimg2" src="../assets/back.png" alt="">
                    <div class="cls-itemtitle2">所在位置</div>
                    <img class="cls-rightimg2" src="../assets/back.png" alt="">
                </div>

                <div class="cls-line2"></div>

                <div class="cls-item2">
                    <img class="cls-itemimg2" src="../assets/back.png" alt="">
                    <div class="cls-itemtitle2">提醒谁看</div>
                    <img class="cls-rightimg2" src="../assets/back.png" alt="">
                </div>
                
                <div class="cls-line2"></div>

                <div class="cls-item2">
                    <img class="cls-itemimg2" src="../assets/back.png" alt="">
                    <div class="cls-itemtitle2">谁可以看</div>
                    <div class="cls-lastitem2">
                        <div class="cls-choose2">公开</div>
                        <img class="cls-rightimg2" src="../assets/back.png" alt="">
                    </div>
                </div>

                <div class="cls-line2"></div>

        </div>
        

    </div>
    <!-- 发布界面结束 -->


  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
    return{
      // 页面是否隐藏
      show:true,
      //发布界面输入的文字
      inputText:"",


      // 朋友圈默认展示数据
      friends:[{
                headimg:"./assets/head.png",
                itemname:"item1",
                itemtitle:"我是朋友圈内容,我非常有趣,不信你来刷我,我是朋友圈内容,我非常有趣,不信你来刷我",
                arrimg:[],
                itemtime:"1小时前",
            },{
                headimg:"./assets/head.png",
                itemname:"item2",
                itemtitle:"item2我是朋友圈内容,我非常有趣,不信你来刷我,我是朋友圈内容,我非常有趣,不信你来刷我",
                arrimg:["../img/demoimg1.jpg"],
                itemtime:"2小时前",
            },{
                headimg:"./assets/head.png",
                itemname:"item10",
                itemtitle:"item10我是朋友圈内容,我非常有趣,不信你来刷我,我是朋友圈内容,我非常有趣,不信你来刷我",
                arrimg:["../img/demoimg1.jpg","../img/demoimg1.jpg","../img/demoimg1.jpg","../img/demoimg1.jpg","../img/demoimg1.jpg","../img/demoimg1.jpg","../img/demoimg1.jpg","../img/demoimg1.jpg","../img/demoimg1.jpg"],
                itemtime:"10小时前",
          }],
    }
  },

  methods:{
    // 相机按钮
    cameraclick(){
      this.show = false;
    },

    // 发布按钮
    pubclick(){
        if(this.inputText != ""){
            let newFriend = {
                headimg:"./assets/head.png",
                itemname:"星空",
                itemtitle:this.inputText,
                arrimg:[],
                itemtime:"当前",
            };
            this.friends.unshift(newFriend);
            this.show = true;
            this.inputText = "";
        }
    },

    //取消按钮
    cancleclick(){
      this.show = true;
    }
  },
}


</script>

<style>

/* 发布界面 */
      .cls-textarea{
        width: 350px;
        min-height: 100px;
        max-height: 300px;
        margin-bottom: 15px;
        background-color: #eeeeee;
        outline: none;
        border: none;
      }

    .cls-page2{
        height: 1000px;
        width: 400px;
        background-color: #eeeeee;
    }
    .cls-all2{
        display: flex;
        flex-flow: column;
        justify-content: start;
        align-items: center;
        /* margin: 0px 40px; */
    }

    .cls-input2{
        width: 320px;
        /* min-height: 70px; */
        /* 问题 div的最大高度无效 */
        /* max-height: 200px; */
        height: 200px;
        /* background-color: #ffffff; */
        margin-bottom: 30px;
    }

    /* div取消输入边框 */
    .cls-input2:focus{
    border:none;outline:none;
    }

    /* 伪类设置div未输入时候的文字提示 */
    .cls-input2:empty:before{ 
        content: "这一刻的想法..."; 
        color: gray; 
    } 
    .cls-input2:focus:before{
        content:none;
    }

    .cls-title2{
        display: flex;
        flex-flow: row;
        justify-content: space-between;
        align-items: center;
    }

    .cls-cancle2{
        margin:10px 20px;
    }

    .cls-pub2{
        background-color: #cccccc;
        color: #ffffff;
        padding: 3px 8px;
        margin:10px 20px;
        border-radius: 3px;
    }

    .cls-pub3{
        background-color: #0bf04f;
        color: #ffffff;
        padding: 3px 8px;
        margin:10px 20px;
        border-radius: 3px;
    }

    .cls-imgall2{
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        align-items: center;
    }

    .cls-itemimg22{
        width: 105px;
        height: 105px;
        margin: 1px;
    }

    .cls-line2{
        height: 1px;
        width: 320px;
        background-color: #cccccc;
        z-index: 100;
    }

    .cls-linemargin{
        margin-top: 100px;
    }
    
    .cls-item2{
        width: 320px;
        display: flex;
        flex-flow: row;
        /* justify-content: space-around; */
        align-items: center;
    }

    .cls-itemimg2{
        height: 24px;
        width: 24px;
        margin: 15px 0px;
    }
    .cls-itemtitle2{
        margin-left: 16px;
        flex: 1;
    }

    .cls-rightimg2{
        height: 15px;
        width: 15px;
    }

    .cls-lastitem2{
        display: flex;
        flex-flow: row;
        justify-content: space-around;
        align-items: center;
    }

    .cls-choose2{
        margin-right: 3px;
    }




/* 朋友圈界面 */

.cls-allfriendsNew{
    width: 400px;
    height: auto;
    background-color: #eeeeee;
    display: flex;
    flex-flow: column;
    justify-content: start;
    align-items: center;
}

.cls-title{
    width: 400px;
    height: 50px;
    display: flex;
    flex-flow: row;
    justify-content:space-between;
    align-items: center;
    /* div透明度 */
    /* opacity:0.5; */
}

.cls-left{
    width: 25px;
    height: 25px;
    margin: 0px 10px;
}
.cls-camera{
    width: 30px;
    height: 25px;
    margin: 5px 10px;
}

.cls-background{
    width: 400px;
    height: 300px;
    position: relative;
}

.cls-bgimg{
    width: 400px;
    height: 240px;
}    

.cls-myself{
    width: 400xp;
    position: relative;
    z-index:10 ;
}

.cls-headimg{
    width: 80px;
    height: 80px;
    margin-top: -50px;
    position: absolute;
    right: 0;
    margin-right: 10px;
}

.cls-name{
    position: absolute;
    right: 0;
    margin-top: -30px;
    margin-right: 90px;
}

.cls-item{
    width: 400px;
    background-color: #eeeeee;
}

.cls-item{
    display: flex;
    flex-flow: row;
    justify-content: start;
    align-items: flex-start;
}

.cls-itemhead{
  width: 35px;
  height: 35px;
  margin: 5px;
  border-radius: 3px;
}

.cls-itemright{
    margin-top: 5px;
    display: flex;
    flex-flow: column;
    justify-content: start;
    align-items: flex-start;
}

.cls-itemname{
    font-size: 14px;
}
.cls-itemtitle{
    font-size: 14px;
}

.cls-itembot{
    width: 320px;
    display: flex;
    flex-flow: row;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;
    /* padding-top: 10px; */
    padding-bottom: 15px;
}

.cls-itemtime{
    flex: 1;
    font-size: 12px;
    color: #999999;
}

.cls-itemmore{
    margin-right: 5px;
    background-color: #cccccc;
    line-height: 15px;
    padding: 0px 7px;
    border-radius: 5px;
}

.cls-itemline{
    height: 1px;
    width: 400px;
    background-color: #cccccc;
    /* margin-top: 15px; */
}

.cls-img1{
    width: 120px;
    height: 200px;
    margin-top: 10px;
}

.cls-manyimg{
    display: flex;
    flex-flow: row;
    justify-content: start;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    margin-top: 10px;
}
.cls-img2,.cls-img3,.cls-img4,.cls-img5,.cls-img6,.cls-img7,.cls-img8,.cls-img9,.cls-img10{
    width: 95px;
    height: 95px;
    margin: 2px;
}
</style>
