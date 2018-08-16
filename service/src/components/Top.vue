<template>
  <div class="top_bj" :style="'background-image: url('+img+')'"></div>
</template>
<script>
  export default {
    name: 'Top',
    props:['img']
  }
</script>
<style scoped>
  .top_bj {
    height: 185px;
    width: 100%;
    background:no-repeat center center;
    background-size: cover;
  }
</style>
