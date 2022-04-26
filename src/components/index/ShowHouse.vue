<template>
  <el-container>
    <div class="bd" :style="{ 'backgroundImage':'url('+ bodyImg +')'}">
      <div class="userInfo">
        <div class="letf">
          欢迎来到家政服务专区。
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
            <img :src="addbg" class="imgt">
          </div>
          <div class="tb-item-info-r">
            <div class="tb-title">
              <h3>{{ commvegtObj.title }}</h3>
            </div>

            <div class="address">
              <span>服务地点</span>:{{ commvegtObj.address }}
            </div>

            <div class="price">
              <span>服务价格</span>:<span>{{ commvegtObj.price }}</span>/<span>时</span>
            </div>

            

            <div class="commodityDesc">
              <span>服务时间</span>: {{ commvegtObj.dotime }}
            </div>

            <el-button type="success" round class="el" @click="addShoppingCart">
              加入购物车
            </el-button>
          </div>

          <div class="phone">
            <span>联系电话</span>:<span>{{ commvegtObj.phone }}</span>
          </div>
        </div>
      </div>


           <el-drawer
        title="购物车"
        :visible.sync="drawer"
        direction="rtl"
      >
        <div  class="cart-list-box">
          <div class="cart-list-box-top">


            <div class="cart-list-box-item">
              <div class="goods-lable-left">
                <img :src="addbg">
              </div>
              <div class="goods-lable-center">
                <div class="text-tit">
                  {{ commvegtObj.title }}
                </div>
                <div class="text-desc">
                  {{ commvegtObj.commodityDesc }}
                </div>
              </div>
              <div class="goods-lable-right">
                <el-input-number v-model="commvegtObj.cartNumber" size="mini" @change="changeCartVegetable(commvegtObj)" />
              </div>
            </div>
          </div>
          <div class="cart-list-box-bottom">
            <div class="custom-addr">
              旅游地址&nbsp;&nbsp;:&nbsp;&nbsp;{{ commvegtObj.sendAddr }}
            </div>
            <div class="pay-way">
              支付方式&nbsp;&nbsp;:&nbsp;&nbsp;人到付款
            </div>
            <!-- <el-button type="warning" @click="changeAddress">
              更改地址
            </el-button> -->
            <el-button type="primary" @click="subOrder">
              提交订单
            </el-button>
          </div>
        </div>
      </el-drawer>
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
      bodyImg: require('@/assets/index/body.png'),
      addbg: require('@/assets/index/house.jpg'),
      sendAddr:'',
      drawer:false
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
    },
    addShoppingCart() {

      this.drawer = true
      this.sendAddr = this.commvegtObj.address
    },
     subOrder() {
      this.cartList=this.commvegtObj
      console.log(this.commvegtObj);
        let param = { userId: this.userInfo.id, sendAddr: this.sendAddr, orderList: JSON.stringify([this.commvegtObj]) }
        console.log(param.orderList);
        this.$server.addOrderhouse(param).then(res => {
          console.log(res.state);
          if (res.state === 'success') {
            this.$message.success('订单提交成功')
            this.drawer = false
      
          } else {
            this.$message.success('订单提交失败')
            this.drawer = false
          }
        })
    },


  }
}
</script>

<style lang="less" scoped>
.addCartTotalBox{
   position: fixed;
   right: 10px;
   top:50vh;
   z-index: 1111;
   img{
     width: 50px;
     height: 50px;
     cursor: pointer;
   }
   .cartListNumber{
     background: red;
     color: #fff;
     display: block;
     width: 20px;
     height: 20px;
     line-height: 20px;
     text-align: center;
     position: relative;
     border-radius:30px;
     top: 20px;
     right: 10px;
   }
 }
 .addCartTotalBox{
   position: fixed;
   right: 10px;
   top:50vh;
   z-index: 1111;
   img{
     width: 50px;
     height: 50px;
     cursor: pointer;
   }
   .cartListNumber{
     background: red;
     color: #fff;
     display: block;
     width: 20px;
     height: 20px;
     line-height: 20px;
     text-align: center;
     position: relative;
     border-radius:30px;
     top: 20px;
     right: 10px;
   }
 }
 .cart-list-box{
   .cart-list-box-top{
     height: 76vh;
     overflow: auto;
     .cart-list-box-item{
       display: flex;
       .goods-lable-left{
         padding-top: 5px;
         padding-left: 10px;
            img{
              width: 60px;
              height: 60px;
              border-radius: 6px;
            }
       }
       .goods-lable-center{
         width: 270px;
         margin-left: 10px;
          .text-tit{
            text-align: left;
            height: 40px;
            line-height: 40px;
            font-size: 16px;
            font-weight: 600;
          }
          .text-desc{
            font-size: 12px;
            color: #726969;
            line-height: 1.5em;
            height: 32px;
            overflow: hidden;
          }
       }
       .goods-lable-right{
         padding-top: 5px;
         text-align: right;
       }
     }
   }
   .cart-list-box-bottom{
     text-align: center;
     .custom-addr{
       text-align: left;
       font-size: 14px;
       color: #726969;
       padding-left: 20px;
     }
     .pay-way{
       text-align: left;
       font-size: 14px;
       color: #726969;
       padding-left: 20px;
       margin-top: 10px;
       margin-bottom: 10px;
     }
   }
 }
.el{
  margin-top: 100px;
}
.phone{
  width: 300px;
  height: 120px;
  text-align: center;
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
    //  color: #409EFF;
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
    // background-color: #ab00ff42;
  }
  .tb-item-info-l {
    float: left;
    padding: 20px 0 20px 20px;
    width: 400px;
    position: relative;
    // background-color: blanchedalmond;
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
    height: 360px;
    // background-color: blue;
}
 .tb-title {
    padding: 20px 0 10px;
    width: 420px;
    height: 56px;
    // background-color: pink;
    margin-top: 13px;

}
.price{
  padding: 20px 0 10px;
    width: 420px;
    height: 16px;
    // background-color: pink;
    margin-top: 13px;
}
.address{
  padding: 20px 0 10px;
    width: 420px;
    height: 16px;
    // background-color: pink;
    margin-top: 13px;
}
.commodityDesc{
  padding: 20px 0 10px;
    width: 420px;
    height: 16px;
    // background-color: pink;
    margin-top: 13px;
}

</style>
