<template>
<div>
  <div v-if="$route.params.id==1">
  <div v-for="(items,indexs) in pages" >
    <test  v-if="indexs===0" v-for="(item,index) in items" :data="item" :key="index" ></test>
  </div>
  </div>
  <div v-if="$route.params.id==2">
    <div v-for="(items,indexs) in pages" >
      <test  v-if="indexs===1" v-for="(item,index) in items" :data="item" :key="index" ></test>
    </div>
  </div>
  <div v-if="$route.params.id==3">
    <div v-for="(items,indexs) in pages" >
      <test  v-if="indexs===2" v-for="(item,index) in items" :data="item" :key="index" ></test>
    </div>
  </div>
</div>
</template>

<script>
  import test from './test.vue'
  export default {
    name: 'Guide_footer',
    props: {
      titles: String
    },
    components: {
      test
    },
    data() {
      return {
        pages: [
          [{url:'./../static/img/ios/1.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'1.1与军运同行，开展全民健身。为了丰富社区居民十九大阿斯达删掉倒计时第三季度赛欧'},
          {url:'./../static/img/ios/3.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'1.2与军运同行，开展全民健身。为了丰富社区居民十九大阿斯达删掉倒计时第三季度赛欧'},
          {url:'./../static/img/ios/2.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'1.3与军运同行，开展全民健身。为了丰富社区居民十九大阿斯达删掉倒计时第三季度赛欧'}
        ],
          [{url:'./../static/img/ios/2.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'2.1与军运同行，开展全民健身。为了丰富社区居民十九大阿斯达删掉倒计时第三季度赛欧'}
           ,{url:'./../static/img/ios/2.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'2.2与军运同行，开展全民健身。为了丰富社区居民十九大阿斯达删掉倒计时第三季度赛欧'}
            ,{url:'./../static/img/ios/2.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'2.3与军运同行，开展全民健身。为了丰富社区居民zzzzzzzzzzzzzzzzz十九大阿斯达删掉倒计时第三季度赛欧'}

          ],
          [{url:'./../static/img/ios/2.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'3.1与军运同行，开展全民健身。为了丰富社区居民十九大阿斯达删掉倒计时第三季度赛欧'},
            {url:'./../static/img/ios/3.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'3.2与军运同行，开展全民健身。为了丰富社区居民十九大阿斯达删掉倒计时第三季度赛欧'},
            {url:'./../static/img/ios/1.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'3.3与军运同行，开展全民健身。为了丰富社区居民十九大阿斯达删掉倒计时第三季度赛欧'}
          ]]
      }
    }
  }
</script>

<style scoped>

</style>





