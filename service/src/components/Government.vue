<template>
  <div>
    <div class="box" v-for="item in containers">
      {{item.message}}
    </div>
  </div>

</template>

<script>

  export default {
    name: 'Government',
    data(){
      return{
        containers:[{message:'人口计生服务'},{message: '党员服务'},{message:'劳动就业'},{message:'民政救助'},
          {message:'社会保障'},{message:'住房保障'},{message:'老年服务'},{message:'残疾人服务'},{message:'税务服务'},
          {message:'生活服务'}]
      }
    }
  }
</script>
<style scoped>
.box{
  width: 88%;
  border-left: 10px solid skyblue;
  border-radius: 10px;
  height: 50px;
  line-height: 50px;
  background-color: lightgrey;
  margin: 0 auto;
  padding-left: 10px;
  margin-top: 10px;
}
</style>
