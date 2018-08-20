<template>
  <div class="bottom_footer">
    <div class="bottom_container">
      <div class="bottom_container_left" :style="'background-image: url('+data.url+')'">

     </div>
     <div class="bottom_container_right">
      <h4>{{data.title}}</h4>
      <p>{{data.content}}</p>
      <slot></slot>
     </div>
     </div>
  </div>
</template>

<script>
  export default {
    props:['data']
  }
</script>
<style scoped>
  .bottom_footer{
    background-color: #fff;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 5px;
  }
  .bottom_container{
    display: flex;
    padding-top: 10px;
  }
  .bottom_container_left{
    width: 30%;
    height: 100px;
    background-size: cover;
    background-repeat:no-repeat;
    background-origin:content-box;
    padding-left: 5px;

  }

  .bottom_container_right{
    width: 70%;
    padding-left: 10px;
    padding-top: 10px;
  }
  .bottom_container_right h4{
    display: -webkit-box;
    -webkit-line-clamp: 1;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 10px;
  }
  .bottom_container_right p{
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    padding-right: 10px;
  }

  .bottom_footer button{
    float: right;
    height: 30px;
    width: 90px;
    border-radius: 5px;
    border: 1px solid rgba(0,0,0,.2);
    display: inline-block;
    margin-right:10px;
    background-color: #FFD31C;
    color: #FFFFFF;
    margin-top: 10px;
  }
</style>
