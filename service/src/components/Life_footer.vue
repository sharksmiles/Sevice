<template>
   <div>
     <div v-if="$route.params.id==1">
       <div class="prat_1" v-for="items in person1">
         <h4>{{items.title}}</h4>
         <p>联系电话：{{items.tel}}</p>
       </div>
     </div>

    <div class="bottom_footer" v-if="$route.params.id==2">
      <div v-for="(item,index) in person2">
        <test :data="person2[index]"></test>

      </div>
    </div>
  </div>
</template>

<script>
  import test from'./test.vue'
  export default {
    name: 'life_footer',
    components:{
      test
    },
    data(){
      return{
        person2:[{url:"http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=daf79f3d6a59252db" +
        "71a15475cf2694e/d52a2834349b033b58bb81fd1fce36d3d539bde1.jpg",title:"湖北中盛汇金项目管理有限公司",content:"江岸区胜利街1sdadsa十大大所多所多所所大撒128号新源大夏4楼江岸区胜利街128号"}
        ,{url:"http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=daf79f3d6a59252db" +
          "71a15475cf2694e/d52a2834349b033b58bb81fd1fce36d3d539bde1.jpg",title:"湖北中盛汇金项目管理有限公司",content:"江岸区胜利街1sdadsa十大大所多所多所所大撒128号新源大夏4楼江岸区胜利街128号"}
       ,{url:"http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=daf79f3d6a59252db" +
          "71a15475cf2694e/d52a2834349b033b58bb81fd1fce36d3d539bde1.jpg",title:"湖北中盛汇金项目管理有限公司",content:"江岸区胜利街1sdadsa十大大所多所多所所大撒128号新源大夏4楼江岸区胜利街128号"}
        ],
        person1:[{title:'公馆KTV唐家墩店(八古墩社区)',tel:'855552326'},{title:'公馆KTV唐家墩店(八古墩社区)',tel:'855552326'},{title:'公馆KTV唐家墩店(八古墩社区)',tel:'855552326'}]
      }
    }
  }
</script>
<style scoped>

  .prat_1{
    margin: 0 auto;
    width: 90%;
    background-color: bisque;
    margin-top: 10px;
    height: 60px;
    padding-top: 10px;
    padding-left: 20px;
    border-radius: 10px;

  }
</style>
