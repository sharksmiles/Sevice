<template>
  <div >
    <top :img="urls"></top>
    <alinkword :tar="links"></alinkword>
    <router-view></router-view>
  </div>
</template>

<script>
  import Top from'./Top.vue'
  import alinkword from'./Link.vue'
  export default {
    name: 'Party',
    components:{
      alinkword,
      Top
    },
    data(){
      return{
        urls:'../../static/img/ios/banner1_3.jpg',
        links:[{link:'/Party_footer/1',title:'网上党校'}
          ,{link:'/Party_footer/2',title:'党政廉政'}
          ,{link:'/government/details/2',title:'党组织转接'}]
      }
    }
  }
</script>
<style scoped>

</style>
