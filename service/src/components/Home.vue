<template>

  <div class="wfw">
    <div class="wfw-banner">
      <div class="wfw-ul" id="test">
        <router-link to='/guide'>

          <div class="wfw-texts">
            <h4 class="wfw-djyl">党建引领</h4>
            <p class="wfw-text-banner wfw_a"></p>
          </div>

          </router-link>
        <router-link to='/party'>
          <div class="wfw-texts">
            <h4 class="wfw-djyl">党员服务</h4>
            <p class="wfw-text-banner wfw_b"></p>
          </div>
        </router-link>
        <router-link to='/government'>
          <div class="wfw-texts">
            <h4 class="wfw-djyl">政务服务</h4>
            <p class="wfw-text-banner wfw_c"></p>
          </div>
        </router-link>
        <router-link to='/law'>
          <div class="wfw-texts">
            <h4 class="wfw-djyl">法律服务</h4>
            <p class="wfw-text-banner wfw_d"></p>
          </div>
        </router-link>
        <router-link to='/life'>
          <div class="wfw-texts">
            <h4 class="wfw-djyl">生活服务</h4>
            <p class="wfw-text-banner wfw_e"></p>
          </div>
        </router-link>
        <router-link to='/style'>
          <div class="wfw-texts">
            <h4 class="wfw-djyl">文体服务</h4>
            <p class="wfw-text-banner wfw_f"></p>
          </div>
        </router-link>
        <router-link to='/volunteer'>
          <div class="wfw-texts">
            <h4 class="wfw-djyl">志愿服务</h4>
            <p class="wfw-text-banner wfw_g"></p>
          </div>
        </router-link>
      </div>
    </div>
  </div>

</template>

<script>

export default {
  name: 'Home',
  data () {
    return {
      msg: ''
    }
  }

}
</script>

<style scoped>
  /*.wfw-texts:first-child .wfw_a*/
  /*{*/

    /*background: url(../../static/img/ios/active-1.png) no-repeat center center;*/
    /*background-size: cover;*/
    /**/
  /*}*/
  /*.wfw-texts:first-child {*/
    /*background-color: red;*/
  /*}*/

   .wfw-texts:hover .wfw_a
  {
     background: url(../../static/img/ios/active-1.png) no-repeat center center;
     background-size: cover;
  }
   .wfw-texts:hover .wfw_b
   {

     background: url(../../static/img/ios/active-2.png) no-repeat center center;
     background-size: cover;
   }
   .wfw-texts:hover .wfw_c
   {

     background: url(../../static/img/ios/active-3.png) no-repeat center center;
     background-size: cover;
   }
   .wfw-texts:hover .wfw_d
   {

     background: url(../../static/img/ios/active-4.png) no-repeat center center;
     background-size: cover;
   }
   .wfw-texts:hover .wfw_e
   {

     background: url(../../static/img/ios/active-5.png) no-repeat center center;
     background-size: cover;
   }
   .wfw-texts:hover .wfw_f
   {

     background: url(../../static/img/ios/active-6.png) no-repeat center center;
     background-size: cover;
   }
   .wfw-texts:hover .wfw_g
   {

     background: url(../../static/img/ios/active-7.png) no-repeat center center;
     background-size: cover;
   }
   .wfw-texts:hover
   {

     color: #FFFFFF;
     background-color: red;
   }

</style>
