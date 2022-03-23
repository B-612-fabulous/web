<template>
  <el-container>
    <div class="bd" :style="{ 'backgroundImage':'url('+ bodyImg +')'}">
      <div class="userInfo">
        <div class="letf">
          欢迎来到送菜专区。
        </div>
        <div v-if="!userInfo.id || userInfo.id === ''" class="right">
          <span @click="jumpLogin">登录</span>|<span @click="jumpRegister">注册</span>
        </div>
        <div v-else class="right">
          <img :src="getImgUrll(userInfo)" class="pic">
          <span>{{ userInfo.trueName }}</span>|
          <span @click="loginOut">退出</span>
        </div>
      </div>
      <div id="detail">
        <div class="tb-item-info tb-clear">
          <div class="tb-item-info-l">
            <img :src="getImgUrl(commvegtObj)" class="imgt">
          </div>
          <div class="tb-item-info-r">
            <div class="tb-title">
              <h3>{{ commvegtObj.title }}</h3>
            </div>
            <div class="price">
              <span>单价</span>: {{ commvegtObj.price }}
            </div>

            <div class="rules">
              <span>商品描述</span>:{{ commvegtObj.commodityDesc }}
            </div>

            <div class="commodityDesc">
              <span>促销折扣</span>:{{ commvegtObj.preferentialRules }}
            </div>
            <el-button type="success" round class="el" @click="addShoppingCart">
              加入购物车
            </el-button>
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
        title: '',
        price: '',
        commodityDesc: '刚摘的新鲜番茄，甘甜可口，生吃做菜煲汤都是很可口',
        isSeckill: true,
        preferentialRules: '满20减3',
        fmImg: require('@/assets/index/td.jpeg')

      },
      userInfo: {},
      bodyImg: require('@/assets/index/body.png')
    }
  },
  created() {
    let userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      this.userInfo = JSON.parse(userInfo)
    }
    let param = this.$route.query.param
    let commvegtObj = JSON.parse(param)
    this.commvegtObj = commvegtObj
  },
  methods: {
    getImgUrl(commvegtObj) {
      let host = 'http://localhost:8888'
      commvegtObj.showFmImg = host + commvegtObj.fmImg
      return commvegtObj.showFmImg
    },
    getImgUrll(userInfo) {
      let host = 'http://localhost:8888'
      userInfo.showFmImg = host + userInfo.pic
      return userInfo.showFmImg
    },
    loginOut() {
      localStorage.removeItem('userInfo')
      this.$router.push('/login')
    },

    jumpLogin() {
      this.$router.push('/login')
    },
    jumpRegister() {
      this.$router.push('/register')
    }

  }
}
</script>

<style lang="less" scoped>
.el{
      margin-top: 70px;
}
.userInfo{
      // background-color: #fff;
    width: 80%;
    position: relative;
    color: black;
    left: 11%;

       margin-bottom: 17px;
       height: 40px;
       line-height: 40px;
       display: flex;
       font-size: 14px;
       .left{
         flex: 1;
       }
       .right{
         flex: 1;
         text-align: right;
         padding-right: 10px;
         .el-dropdown-link {
      cursor: pointer;
     color: #409EFF;
         }
        .el-icon-arrow-down {
          font-size: 12px;
           }
         .pic{
              height: 40px;
              margin-right: 10px;
              border-radius: 10px;
              margin-top: 5px;
         }
         span{
           cursor: pointer;
           padding: 0 20px;
         }

       }
     }

   .bd{
      width: 100%;
      height: 800px;
      // background-color: skyblue;
    }
    .tb-item-info-r{
      text-align: center;
    }
    #detail {
    position: relative;
    margin: 20px auto 0;
    height: 500px;
    width: 1140px;
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
    // background-color: blue;
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
