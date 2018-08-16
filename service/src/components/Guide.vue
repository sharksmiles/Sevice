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
    name: 'Guide',
    components:{
      alinkword,
      Top
    },
    data(){
      return{
        urls:'../../static/img/ios/banner1.png',
        links:[{link:'/guide_footer/1',title:'区域化党建'}
          ,{link:'/guide_footer/2',title:'红色之星'}
          ,{link:'/guide_footer/3',title:'网格故事'}]
      }
    }
  }
</script>
<style>

</style>
