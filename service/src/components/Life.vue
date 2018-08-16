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
    name: 'Life',
    components:{
      alinkword,
      Top
    },
    data(){
      return{
        urls:'../../static/img/ios/b3.jpg',
        links:[{link:'/life_footer/1',title:'便民服务'}
          ,{link:'/life_footer/2',title:'居家养老'}
          ,{link:'/life_footer/3',title:'红色物业'}]
      }
    }
  }
</script>
<style>

</style>
