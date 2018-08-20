<template>
  <div>
       <ul>
      <router-link tag="li" v-for="(item,index) in tar" :to='item.link' :key="index"><li>{{item.title}}</li></router-link>
    </ul>

  </div>
</template>
<script>
  export default {
    name: 'alinkword',
    data(){
      return{
      }
    },
    props:['tar']

  }
</script>
<style scoped>
  ul{
    display: flex;
    height: 50px;

    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  li{
    flex: 3;
    text-align: center;
    line-height: 50px;
    border-right: 1px solid #e0e0e0;
  }
  li:last-child{
    border-right: none;
  }
  li:hover{
    background-color: #eaeaea;
  }

</style>
