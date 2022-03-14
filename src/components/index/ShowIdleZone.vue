<template>
  <el-container>
    <!-- <el-header>{{ commvegtObj.title }}</el-header>
    <el-main>{{ commvegtObj.price }}</el-main> -->
      <div class="bd">
    <div id="detail">
      <div class="tb-item-info tb-clear">
        <div class="tb-item-info-l">
          <!-- <img src="https://gd1.alicdn.com/imgextra/i3/0/T1Qy39FiJbXXXXXXXX_!!0-item_pic.jpg_400x400.jpg"  class="imgt"> -->
          <img :src="getImgUrl(commvegtObj)"  class="imgt" >
        </div>
        <div class="tb-item-info-r">
          <div class="tb-title">
              <h3>{{ commvegtObj.title }}</h3>
          </div>
          <div class="price">
            {{ commvegtObj.price }}
          </div>
          
          <div class="rules">
          {{ commvegtObj.commodityDesc }}
          </div>

          <div class="commodityDesc">
          {{ commvegtObj.preferentialRules }}
          </div>

        </div>

      </div>
      
    </div>

  </div>
  </el-container>
  
</template>

<script>
export default {
  data() {
    return {
      commvegtObj: {
        title:'',
        price:'',
        commodityDesc: '刚摘的新鲜番茄，甘甜可口，生吃做菜煲汤都是很可口',
        isSeckill: true,
        preferentialRules: '满20减3',
        fmImg: require('@/assets/index/td.jpeg'),


      }
    }
  },
  created() {
    let param = this.$route.query.param
    let commvegtObj = JSON.parse(param)
    this.commvegtObj = commvegtObj
  },
  methods:{
     getImgUrl(commvegtObj) {
      let host = 'http://localhost:8888'
      commvegtObj.showFmImg = host + commvegtObj.fmImg
      return commvegtObj.showFmImg
    },
  }
}
</script>

<style lang="less" scoped>
 .el-header, .el-footer {
    background-color: #B3C0D1;
    color: #333;
    text-align: center;
    line-height: 60px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    text-align: center;
    line-height: 160px;
  }
   .bd{
      width: 100%;
      height: 800px;
      background-color: skyblue;
    }
    .tb-item-info-r{
      text-align: center;
    }
    #detail {
    position: relative;
    margin: 20px auto 0;
    height: 500px;
    width: 1140px;
    background-color: pink;
    }
    .tb-item-info {
      width: 940px;
      height: 500px;
    margin-right: 198px;
    border-right: 1px solid #E8E8E8;
    background-color: #ab00ff42;
  }
  .tb-item-info-l {
    float: left;
    padding: 20px 0 20px 20px;
    width: 400px;
    position: relative;
    background-color: blanchedalmond;
    height: 300px;
}
.tb-item-info-l .imgt{
  height: 300px;
  width: 300px;
}
.tb-item-info-r{
  float: left;
    padding: 0 20px 20px 0;
    width: 400px;
    height: 300px;
    background-color: blue;
}
 .tb-title {
    padding: 20px 0 10px;
    width: 420px;
    height: 56px;
    background-color: pink;
    margin-top: 13px;

}
.price{
  padding: 20px 0 10px;
    width: 420px;
    height: 16px;
    background-color: pink;
    margin-top: 13px;
}
.rules{
  padding: 20px 0 10px;
    width: 420px;
    height: 16px;
    background-color: pink;
    margin-top: 13px;
}
.commodityDesc{
  padding: 20px 0 10px;
    width: 420px;
    height: 16px;
    background-color: pink;
    margin-top: 13px;
}

 

  
</style>
