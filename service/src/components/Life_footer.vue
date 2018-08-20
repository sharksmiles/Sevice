<template>
   <div>
     <div v-if="$route.params.id==1">
       <div class="prat_1" v-for="items in page[0]">
         <h4>{{items.title}}</h4>
         <p>联系电话：{{items.tel}}</p>
       </div>
     </div>

    <div class="bottom_footer" v-if="$route.params.id==2">
      <div v-for="(item,index) in page[1]">
        <test :data="item"></test>

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
        page:[
          [{title:'公馆KTV唐家墩店(八古墩社区)',tel:'855552326'},{title:'公馆KTV唐家墩店(八古墩社区)',tel:'855552326'},{title:'公馆KTV唐家墩店(八古墩社区)',tel:'855552326'}],
         [{url:"http://pic13.photophoto.cn/20091016/0005018301756746_b.jpg" ,title:"湖北中盛汇金项目管理有限公司",content:"江岸区胜利街1sdadsa十大大所多所多所所大撒128号新源大夏4楼江岸区胜利街128号"}
        ,{url:"http://pic13.photophoto.cn/20091016/0005018301756746_b.jpg",title:"湖北中盛汇金项目管理有限公司",content:"江岸区胜利街1sdadsa十大大所多所多所所大撒128号新源大夏4楼江岸区胜利街128号"}
       ,{url:"http://pic13.photophoto.cn/20091016/0005018301756746_b.jpg",title:"湖北中盛汇金项目管理有限公司",content:"江岸区胜利街1sdadsa十大大所多所多所所大撒128号新源大夏4楼江岸区胜利街128号"}
        ]
           ]
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
    box-shadow: 0px 0px 10px   #888;

  }
</style>
