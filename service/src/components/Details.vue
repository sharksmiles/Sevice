<template>

  <div>
    <div v-if="$route.params.id===1">
      <Details_li :person="person1" ></Details_li>
    </div>
    <div v-if="$route.params.id===2">
      <Details_li :person="person2"></Details_li>
    </div>
    <div v-if="$route.params.id===3">
      <Details_li :person="person3"></Details_li>
    </div>
    <div v-if="$route.params.id===4">
      <Details_li :person="person4"></Details_li>
    </div>
    <div v-if="$route.params.id===5">
      <Details_li :person="person5"></Details_li>
    </div>
    <div v-if="$route.params.id===6">
      <Details_li :person="person6"></Details_li>
    </div>
    <div v-if="$route.params.id===7">
      <Details_li :person="person7"></Details_li>
    </div>
    <div v-if="$route.params.id===8">
      <Details_li :person="person8"></Details_li>
    </div>
    <div v-if="$route.params.id===9">
      <Details_li :person="person9"></Details_li>
    </div>
    <div v-if="$route.params.id===10">
      <Details_li :person="person10"></Details_li>
    </div>
  </div>
</template>
<script>
import Details_li from './Details_li.vue'
export default{
  name: 'Details',
  data () {
    return {
      person1: [{
        values: '一孩、二孩《生育服务证》登记',
        content: '中共中央组织部关于印发《关于进一步加强党员组织关系管理意见的通知（中组发[2004]10号）》'
      }, {values: '办理《独生子女父母光荣证》'}, {values: '办理《流动人口婚育证明》'}, {values: '免费避孕药具领取'}, {values: '城乡居民免费婚检咨询'}, {values: '中国共产党党员组织关系临时转出'}],
      person2: [{values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}],
      person3: [{values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}],
      person4: [{values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '免费避孕药具领取'}],
      person5: [{values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '城乡居民免费婚检咨询'}],
      person6: [{values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '城乡居民免费婚检咨询'}],
      person7: [{values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '城乡居民免费婚检咨询'}],
      person8: [{values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}],
      person9: [{values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '免费避孕药具领取'}],
      person10: [{values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '中国共产党党员组织关系临时转出'}, {values: '城乡居民免费婚检咨询'}],
      ok: null
    }
  },
  components: {
    Details_li
  },
  methods: {
    openDom (index) {
      if (this.ok === index) {
        this.ok = null
      } else {
        this.ok = index
      }
      //       this.ok= this.ok===index?null:index
    }
  }

}
</script>
<style scoped>

</style>
