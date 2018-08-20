<template>
  <div>
    <div v-if="$route.params.id==1">
      <router-link to="/Details_container" tag="div">
      <div v-for="(item,index) in page[0]">
      <test :data="item">
        <button>我要加入</button>
      </test>
      </div>
      </router-link>
    </div>
    <div v-if="$route.params.id==2">
      <div v-for="(item,index) in page[1]">
        <test :data="item"></test>
      </div>

    </div>
    <div v-if="$route.params.id==3">
      <div v-for="(item,index) in page[2]">
        <test :data="item"></test>
      </div>
    </div>

  </div>
</template>
<script>
  import test from'./test.vue'
  export default {
    name: 'Style_footer',
    components:{
      test
    },
    data(){
      return{
        page:[
        [{url:'./../static/img/ios/1.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'与军运同行，开展全民健身。为了丰富社区居民十九大阿斯达删掉倒计时第三季度赛欧'},
          {url:'./../static/img/ios/3.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'与军运同行，开展全民健身。为了丰富社区居民十九大阿斯达删掉倒计时第三季度赛欧'},
          {url:'./../static/img/ios/2.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'与军运同行，开展全民健身。为了丰富社区居民十九大阿斯达删掉倒计时第三季度赛欧'}
        ],
       [{url:'./../static/img/ios/2.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'与军运同行，开展全民健身。为了丰富社区居民十九大阿斯达删掉倒计时第三季度赛欧'}

        ],
        [{url:'./../static/img/ios/2.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'与军运同行，开展全民健身。为了丰富社区居民十九大阿斯达删掉倒计时第三季度赛欧'},
          {url:'./../static/img/ios/3.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'与军运同行，开展全民健身。为了丰富社区居民十九大阿斯达删掉倒计时第三季度赛欧'},
          {url:'./../static/img/ios/1.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'与军运同行，开展全民健身。为了丰富社区居民十九大阿斯达删掉倒计时第三季度赛欧'}
        ]]
      }
    }
  }
</script>
<style scoped>

</style>
