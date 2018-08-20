<template>
  <div>
    <div class="top"><span>武天</span><div class="touxiang"></div></div>
    <div class="top_bottom">
      <div class="top_footer">
        <div class="footer_logo"><img src="../../static/images/工具.png" alt=""></div>
        <p class="footer_title">物管服务</p>
      </div>
      <div class="top_footer">
        <div class="footer_logo"><img src="../../static/images/人物.png" alt=""></div>
        <p class="footer_title">物管人员</p>
      </div>
      <div class="top_footer">
        <div class="footer_logo"><img src="../../static/images/文件.png" alt=""></div>
        <p class="footer_title">我要报事</p>
      </div>
    </div>
    <p class="title">小区公告</p>
    <div class="contianer" v-for="item in page">
      <div class="contianer_left"><div class="renwu"></div></div>
      <div class="contianer_right">
        <h4>唐家墩街公共服务站</h4>
        <p>"红色物业"维修服务人工收费标准
          25、更换室内排气扇 市场价：50元/台 收费标准：40元/台 26、拆换门锁、调门合叶（防盗门）市场价：50元/把
          25、更换室内排气扇 市场价：50元/台 收费标准：40元/台 26、拆换门锁、调门合叶（防盗门）市场价：50元/把
          25、更换室内排气扇 市场价：50元/台 收费标准：40元/台 26、拆换门锁、调门合叶（防盗门）市场价：50元/把
          25、更换室内排气扇 市场价：50元/台 收费标准：40元/台 26、拆换门锁、调门合叶（防盗门）市场价：50元/把
          联系电话：131231231321321321
        </p>
        <img src="http://pic39.photophoto.cn/20160420/0017030288788435_b.jpg" alt="">
        <p>2018年08月15日 16:04</p>
      </div>
    </div>
  </div>
</template>
<script>
  export default{
      data(){
        return{
          page:[1,2,3]
        }
      }
  }
</script>
<style scoped>
  .top{
    background-image: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1534761390546&di=195cb5fc1150feab02fc72be7ea5defc&imgtype=0&src=http%3A%2F%2Fpic34.photophoto.cn%2F20150104%2F0017030294126456_b.jpg);
    background-size: 100% 100%;
    height: 200px;
    position: relative;
  }
  .top span{
    color: #FFFFFF;
    position: absolute;
    bottom: 20px;
    right:70px;
    /*margin-right: 20px;*/
    /*margin-bottom: 20px;*/
  }
  .touxiang{
    height: 50px;
    width: 50px;
    background-image: url(http://pic.58pic.com/58pic/16/19/64/13R58PICpEr_1024.jpg);
    background-size: cover;
    position: absolute;
    bottom: 0;
    right: 0;
    margin-right: 10px;
    margin-bottom: 10px;
  }
  .top_bottom{
    display: flex;
    background-color: #e5e5e5;

  }
  .top_footer{
    flex: 1;
    text-align: center;
  }
  .footer_logo img{
    padding-top: 5px;
    height: 25px;

  }
  .top_footer p{
    margin-bottom: 5px;
    color: #6e6e6e;
    font-size: 12px;
  }
  .title{
    padding: 5px 15px;
    border-bottom: 1px solid #e0e0e0;
  }
  .contianer{
    display: flex;
    border-bottom: 1px solid #e0e0e0;
    padding-bottom: 10px;
    padding-top: 10px;
  }
  .contianer_left{
    flex: 2;

  }
  .contianer_left .renwu{
    width: 80%;
    background-image: url(http://pic32.photophoto.cn/20140828/0005018309352435_b.jpg);
    background-size: cover;
    margin: 20px auto;
    height: 50px;
  }
  .contianer_right{
    flex: 8;
    padding-right: 20px;
  }
  .contianer_right p{
    font-size: 13px;
    color: #6e6e6e;
    margin-top: 5px;
    margin-bottom: 10px;
  }
  .contianer_right img{
    width: 90%;
  }
</style>
