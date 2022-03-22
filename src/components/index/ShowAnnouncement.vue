<template>
<div class="main-top">
  <div class="userInfo">
        <div class="letf">
          公告详情
        </div>
        <div v-if="!userInfo.id || userInfo.id === ''" class="right">
          <span @click="jumpLogin">登录</span>|<span @click="jumpRegister">注册</span>
        </div>
        <div v-else class="right">
          <img :src="getImgUrl(userInfo)"  class="pic" >
           <span>{{ userInfo.trueName }}</span>|
         <span @click="loginOut">退出</span>
        </div>
        
      </div>
      <div class="bgc" :style="{ 'backgroundImage':'url('+ bodyImg +')'}">
        <h1 class="center">
        {{ annoucementObj.title }}
      </h1>
      <p>{{ annoucementObj.announcement }}</p>

      <div class="tim">
        {{ annoucementObj.createDate }}
      </div>
       

      </div>
      

       <el-container>
    <!-- <el-header>{{ annoucementObj.title }}</el-header> -->
    <!-- <el-main>{{ annoucementObj.announcement }}</el-main> -->
      </el-container>
      </div>
      

</template>

<script>
export default {
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }],
      bodyImg: require('@/assets/index/body.png'),
      annoucementObj: {},
      userInfo: {},
    }
  },
  created() {
    let userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      this.userInfo = JSON.parse(userInfo)
    }

    let param = this.$route.query.param
    let annoucementObj = JSON.parse(param)
    this.annoucementObj = annoucementObj
    
  },
  methods:{

    getImgUrl(userInfo) {
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
    },
  }
}
</script>

<style lang="less" scoped>
p{
  text-indent: 2em;
}
.tim{
    margin-top: 320px;
    margin-left: 1060px;
}
.center{
  text-align: center;
}
.bgc{
  height: 500px;
}
.main-top{
  background-color: #fff;
    height: 398px;
    width: 80%;
    position: relative;
    left: 10%;
}
 .userInfo{
       margin-bottom: 17px;
       height: 40px;
       line-height: 40px;
       display: flex;
       font-size: 14px;
       color: #8c8c8c;
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
 
  
</style>
