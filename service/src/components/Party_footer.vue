<template>
  <div>
    <div class="bottom_footer" v-if="$route.params.id==2">
      <div v-for="(items,indexs) in pages" >
        <test  v-if="indexs===1" v-for="(item,index) in items" :data="item" :key="index" ></test>
      </div>

    </div>
  </div>

</template>
<script>
  import test from'./test.vue'
  export default {
    data(){
      return{
        pages: [
          [{url:'./../static/img/ios/1.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'1.1与军运同行，开展全民健身。为了丰富社区居民十九大阿斯达删掉倒计时第三季度赛欧'},
            {url:'./../static/img/ios/3.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'1.2与军运同行，开展全民健身。为了丰富社区居民十九大阿斯达删掉倒计时第三季度赛欧'},
            {url:'./../static/img/ios/2.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'1.3与军运同行，开展全民健身。为了丰富社区居民十九大阿斯达删掉倒计时第三季度赛欧'}
          ],
          [{url:'./../static/img/ios/2.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'2.1与军运同行，开展全民健身。为了丰富社区居民十九大阿斯达删掉倒计时第三季度赛欧'}
            ,{url:'./../static/img/ios/2.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'2.2与军运同行，开展全民健身。为了丰富社区居民十九大阿斯达删掉倒计时第三季度赛欧'}
            ,{url:'./../static/img/ios/2.png',title:'"与军运同行"全民健身--八股墩社区少时诵诗书所所所',content:'2.3与军运同行，开展全民健身。为了丰富社区居民zzzzzzzzzzzzzzzzz十九大阿斯达删掉倒计时第三季度赛欧'}

          ]
          ],
        ok:null
      }
    },
    components:{
      test
    },
    methods:{
      openDom(index){
        if(this.ok===index){
          this.ok=null;
        }else{
          this.ok=index;
        }
//       this.ok= this.ok===index?null:index
      }
    }
  }
</script>
<style scoped>


</style>
