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
    name: 'Law',
    components:{
      alinkword,
      Top
    },
    data(){
      return{
        urls:'../../static/img/ios/banner1_2.jpg',
        links:[{link:'/law_bottom_footer/1',title:'社区律师'}
          ,{link:'/law_bottom_footer/2',title:'万警进社区'}
          ,{link:'/law_bottom_footer/3',title:'七五普法'}]
      }
    }


  }
</script>
<style>

</style>
