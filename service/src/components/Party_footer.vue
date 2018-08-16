<template>
  <div>
    <div class="bottom_footer" v-if="$route.params.id==2">
        <test :data="person2"></test>

    </div>
    <div class="part3" v-if="$route.params.id==3">

      <div class="total" v-for="(item,index) of person3">
        <div class="one_boss" >
          <p class="ones">{{item.values}}</p>
          <p class="ones_right" @click="openDom(index)"><img src="../../static/img/ios/web_down.png" ><span>展开</span></p>
        </div>

        <div  v-if="ok===index">
        <div class="one_boss1">
          <div class="two_1">
            <img src="../../static/img/ios/benzi.png" class="two_2_1" alt="">
            <p>政府政策</p>
          </div>
          <div class="two_1">
            <img src="../../static/img/ios/liucheng.png" class="two_2"alt="">
            <p>办事流程</p>
          </div>
          <div class="two_1">
            <img src="../../static/img/ios/renwu.png" class="two_2" alt="">
            <p>预约办事</p>
          </div>
          <div class="two_1">
            <img src="../../static/img/ios/dianhua.png" class="two_2_1" alt="">
            <p>电话咨询</p>
          </div>
        </div>
          <div class="one_boss2">中共中央组织部关于印发《关于进一步加强党员组织关系管理意见的通知（中组发[2004]10号）》</div>
        </div>
      </div>
    </div>
  </div>

</template>
<script>
  import test from'./test.vue'
  export default {
    data(){
      return{
        person2:{url:"http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=daf79f3d6a59252db" +
        "71a15475cf2694e/d52a2834349b033b58bb81fd1fce36d3d539bde1.jpg",title:"湖北中盛汇金项目管理有限公司",content:"江岸区胜利街1sdadsa十大大所多所多所所大撒128号新源大夏4楼江岸区胜利街128号"},
        person3:[{values:"中国共产党党员组织关系临时转出"},{values:"中国共产党党员组织关系临时转出"},{values:"中国共产党党员组织关系临时转出"},{values:"中国共产党党员组织关系临时转出"}]
        ,ok:null
      }
    },
    components:{
      test
    },
    methods:{
      openDom(index){
        if(this.ok===index){
          this.ok=null;
        }else{
          this.ok=index;
        }
//       this.ok= this.ok===index?null:index
      }
    }
  }
</script>
<style scoped>
  .bottom_footer{
    height: 300px;
    background-color: #fff;
  }
  .bottom_container{
    display: flex;
    padding-top: 10px;
  }
  .bottom_container_left{
    width: 30%;
    height: 100px;
  }
  .bottom_container_left img{
    width: 80%;
    height: 80%;
    padding: 10px;
  }
  .bottom_container_right{
    width: 70%;
  }
  .bottom_container_right p{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  .total{
    width: 90%;
    margin: 0px auto;
    margin-top: 20px;
    padding-left: 10px;
    border-left: 10px solid blueviolet;
    border-radius: 5px;
    background-color: #e0e0e0;
    padding-right: 10px;

  }

  .one_boss{
    display: flex;
    height: 50px;
    line-height: 50px;
    border-bottom: 1px solid silver;
  }
  .ones{
    flex: 7;
  }
  .ones_right{
    flex: 2;
    text-align: right;
    padding-right: 10px;
  }
  .ones_right img{
    width: 15px;
  }
  .ones_right span{
    margin-left: 10px;

  }
  .one_boss1{
    border-bottom: 1px solid silver;
    display: flex;
  }
  .one_boss1 .two_1{
   flex: 1;

    text-align: center;
  }
  .two_2{
    width: 30px;
    padding-top: 10px;
   }
  .two_2_1{
    width: 23px;
    padding-top: 10px;
  }

  .one_boss1 p{
    font-size: 14px;
  }

  .one_boss2{
    font-size: 15px;
    padding-bottom: 10px;
    padding-top: 10px;
  }

</style>
