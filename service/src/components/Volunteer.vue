<template>
  <div>
    <top :img="urls"></top>
    <div v-for="(item,index) in pages">
    <test :data="pages[index]"></test>
    </div>
  </div>
</template>

<script>
  import Top from'./Top.vue'
  import test from'./test.vue'
  export default {
    name: 'Volunteer',
    components:{
      Top,
      test
    },
    data(){
      return {
        urls:'../../static/img/ios/banner1_4.jpg',
        pages: [{
          title: "湖北中盛汇金项目管理有限公司",
          content: "江岸区胜利街128号新源大夏4楼江岸区胜利街128号新源大夏4楼江岸区胜利街128号新源大夏4楼江岸区胜利街128号",
          url: "./../static/img/ios/1.png"
        }
          , {title: "湖北中盛汇金项目管理有限公司", content: "江江岸区胜利街128号新源大夏4楼江岸区胜利街128号", url: "./../static/img/ios/1.png"}
          , {
            title: "湖北中盛汇金项目管理有限公司",
            content: "江岸区胜利街1sdadsa十大大所多所多所所大撒128号新源大夏4楼江岸区胜利街128号",
            url: "http://pic24.photophoto.cn/20120923/0005018332564487_b.jpg"
          }]

      }
    }
  }
</script>
<style scoped>

</style>
