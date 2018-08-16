<template>
  <div>
    <top :img="urls"></top>
     <alinkword :tar="links"></alinkword>
    <router-view></router-view>
  </div>
</template>

<script>
  import Top from'./Top.vue'
  import alinkword from'./Link.vue'
  export default {
    name: 'Style',
    components:{
      alinkword,
      Top
    },
    data(){
      return{
        urls:'../../static/img/ios/banner1_1.jpg',
        links:[{link:'/style_footer/1',title:'文体活动'}
          ,{link:'/style_footer/2',title:'全民阅读'}
          ,{link:'/style_footer/3',title:'社区教育'}]
      }
    }
  }
</script>
<style scoped>

</style>
