<template>
  <div>
    <div class="containers" v-if="$route.params.id==1">
    <div class="left">
      <div class="touxiang" :style="'background-image: url('+Person[1].urls+')'">
      </div>
    </div>
    <div class="right">
      <p>姓名：{{Person[1].name}}</p>
      <p>单位：{{Person[1].unit}}</p>
      <p>职务：{{Person[1].position}}</p>
      <p>电话：{{Person[1].tel}}</p>
      <p>服务时间：{{Person[1].time}}</p>
    </div>
  </div>
    <div class="containers" v-if="$route.params.id==2">
      <div class="left">
        <div class="touxiang" :style="'background-image: url('+Person[0].urls+')'">
        </div>
      </div>
      <div class="right">
        <p>姓名：{{Person[0].name}}</p>
        <p>单位：{{Person[0].unit}}</p>
        <p>职务：{{Person[0].position}}</p>
        <p>电话：{{Person[0].tel}}</p>
        <p>服务时间：{{Person[0].time}}</p>
      </div>
    </div>
    <div class="bottom_footer" v-if="$route.params.id==3">
      <test :data="Person[2]"></test>

    </div>
  </div>
</template>

<script>
  import test from'./test.vue'
  export default {
    name: 'law_bottom_footer',
    components:{
      test
    },
    data(){
      return{
      Person:
     [{urls:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534584272840&di=c734001b2e00fcbbe362c142a49fcc08&imgtype=0&src=http%3A%2F%2Fp.store.itangyuan.com%2Fp%2Fchapter%2Fattachment%2F4gAu4BIv%2FEgfuEtMUe_-w4g-Ue_fuelUWhmMTGVuMiNyWKHmHEb5n9NHv7uaRG_j.jpg",name:"陈武"
       ,unit:"单位：湖北中国（西桥社区）",position:"合伙人律师",tel:"12313123132",time:"服务时间：每周四-早上 8:30-12:00 下午14：30-17:30"},
     {urls:"http://d.paper.i4.cn/max/2017/03/23/14/1490249222986_905517.jpg",
       name:"晨曦与",unit:"单位：湖北魏晨律师事务所（西桥社区）",position:"合伙人律师",tel:"138718152123121",
       time:"服务时间：每周四-早上 8:30-12:00 下午14：30-17:30"},
     {title:"湖北中盛汇金项目管理有限公司", content:"江岸区胜利街1sdadsa十大大所多所多所所大撒128号新源大夏4楼江岸区胜利街128号"
       ,url:"https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534584333945&di=8c85662e59e753e9c6889b179d33740a&imgtype=0&src=http%3A%2F%2Fimg5q.duitang.com%2Fuploads%2Fitem%2F201506%2F10%2F20150610153043_8LzPk.jpeg" }]
      }
    }

  }
</script>
<style>

  .containers{
    height: 200px;
    display: flex;
    border-bottom: 1px solid #e0e0e0;
  }
  .left{
    flex: 1;
  }
  .left .touxiang{
    height: 80px;
    width: 80px;
    border-radius: 100px;
    background-size: cover;
    margin: 0 auto;
    margin-top: 50px;
  }
  .right{
    flex: 3;
  }

</style>
