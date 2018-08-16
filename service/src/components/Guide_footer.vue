<template>
  <div>
  <test :data="pages[$route.params.id-1]"></test>

 </div>
</template>
<script>
  import test from './test.vue'
  export default {
    name: 'Guide_footer',
    props:{
      titles:String
    },
    components:{test},
    data(){
      return{
        pages:[{title:"湖北中盛汇金项目管理有限公司", content:"江岸区胜利街128号新源大夏4楼江岸区胜利街128号新源大夏4楼江岸区胜利街128号新源大夏4楼江岸区胜利街128号",url:"./../static/img/ios/1.png"}
          ,{title:"湖北中盛汇金项目管理有限公司", content:"江江岸区胜利街128号新源大夏4楼江岸区胜利街128号",url:"./../static/img/ios/1.png"}
          ,{title:"湖北中盛汇金项目管理有限公司", content:"江岸区胜利街1sdadsa十大大所多所多所所大撒128号新源大夏4楼江岸区胜利街128号",url:"http://imgsrc.baidu.com/image/c0%3Dshijue1%2C0%2C0%2C294%2C40/sign=daf79f3d6a59252db71a15475cf2694e/d52a2834349b033b58bb81fd1fce36d3d539bde1.jpg"}]
      }
    }
  }
</script>
<style scoped>

</style>





