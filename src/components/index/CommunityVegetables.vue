<template>
  <div class="main-index">
    <input v-model="keyword" type="text" class="input-box" placeholder="请输入关键词">
    <!-- <el-button class="searchbtn" @click="search">搜索</el-button> -->
    <button class="search-input-btn" @click="search">
      搜&nbsp;&nbsp;&nbsp;&nbsp;索
      <span class="hot">HOT</span>
    </button>
    <!-- 主体 -->
    <div :key="timer" class="main-body-child">
      <div v-for="(item,index) in addlist" :key="index" class="main-body-child-item" @click="jumpcommvegDetail(item)">
        <div class="left">
          <img :src="getImgUrl(item)">
          <div class="price">
            <span class="left">￥{{ item.price }}</span><span class="right">/500g</span>
          </div>
        </div>
        <div class="right">
          <div class="text-tit">
            {{ item.title }}
          </div>
          <div class="text-desc">
            {{ item.commodityDesc }}
          </div>
          <div class="tag-box">
            <div v-if="item.isSeckill || item.seckill" class="tag-box-item">
              秒杀
            </div>
            <div v-if="item.preferentialRules !=='' " class="tag-box-item">
              <img :src="quan">{{ item.preferentialRules }}
            </div>
          </div>
          <div class="btn" @click.stop>
            <img v-if="item.cartNumber < 1 || !item.cartNumber" :src="addCart" @click.stop="addCartVegetable(item)">
            <el-input-number v-if="item.cartNumber > 0" v-model="item.cartNumber" size="mini" @change="changeCartVegetable(item)" />
          </div>
        </div>
      </div>
    </div>
    <div class="addCartTotalBox">
      <span v-if="cartListNumber>0" class="cartListNumber">{{ cartListNumber }}</span>
      <img :src="addCartTotal" @click="showCartTotalList">
    </div>
    <el-drawer
      title="购物车"
      :visible.sync="drawer"
      direction="rtl"
    >
      <el-empty v-if="cartList.length<1" description="购物车空空如也,快去选购喜欢的东西吧" />
      <div v-else class="cart-list-box">
        <div class="cart-list-box-top">
          <div v-for="(item,index) in cartList" :key="index" class="cart-list-box-item">
            <div class="goods-lable-left">
              <img :src="getImgUrl(item)">
            </div>
            <div class="goods-lable-center">
              <div class="text-tit">
                {{ item.title }}
              </div>
              <div class="text-desc">
                {{ item.commodityDesc }}
              </div>
            </div>
            <div class="goods-lable-right">
              <el-input-number v-model="item.cartNumber" size="mini" @change="changeCartVegetable(item)" />
            </div>
          </div>
        </div>
        <div class="cart-list-box-bottom">
          <div class="custom-addr">
            配送地址&nbsp;&nbsp;:&nbsp;&nbsp;{{ sendAddr }}
          </div>
          <div class="pay-way">
            支付方式&nbsp;&nbsp;:&nbsp;&nbsp;货到付款
          </div>
          <el-button type="warning" @click="changeAddress">
            更改地址
          </el-button>
          <el-button type="primary" @click="subOrder">
            提交订单
          </el-button>
        </div>
      </div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  name: 'CommunityVegetables',
  props: {
    userInfo: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      dataList: [
        {
          fmImg: require('@/assets/index/td.jpeg'),
          price: '5.88',
          unit: '500g',
          title: '刚摘的鲜番茄',
          commodityDesc: '刚摘的新鲜番茄，甘甜可口，生吃做菜煲汤都是很可口',
          isSeckill: true,
          preferentialRules: '满20减3',
          cartNumber: 0,
          shopCart: require('@/assets/index/td.jpeg')
        }
      ],
      quan: require('@/assets/index/quan.png'),
      addCart: require('@/assets/index/addCart.png'),
      addCartTotal: require('@/assets/index/addCartTotal.png'),
      addlist: '',
      cartList: [],
      keyword: '',
      timer: '',
      cartListNumber: 0,
      drawer: false,
      sendAddr: ''

    }
  },
  created() {
    this.getCommunityVegetablesList()
  },
  methods: {
    addCartVegetable(item) {
      this.dataList.find(obj => {
        if (obj.id === item.id) {
          obj.cartNumber = 1
          this.cartList.push(obj)
          this.cartListNumber = this.cartList.length
        }
      })
      this.timer = new Date().getTime()
    },
    getCommunityVegetablesList() {
      let param = {}
      this.$server.getCommunityVegetablesList(param).then(res => {
        if (res.state === 'success') { // 请求成功
          this.dataList = res.data
          this.addlist = this.dataList
          this.showAddVegetables = false
        } else {
          this.$message.error('系统异常')
        }
      })
    },
    getImgUrl(item) {
      let host = 'http://localhost:8888'
      item.showFmImg = host + item.fmImg
      return item.showFmImg
    },
    search() {
      var keyword = this.keyword
      if (keyword) {
        this.addlist = this.dataList.filter(function(dataList) {
          return Object.keys(dataList).some(function(key) {
            return String(dataList[key]).toLowerCase().indexOf(keyword) > -1
          })
        })
      } else {
        this.addlist = this.dataList
      }
    },
    jumpcommvegDetail(obj) {
      let routerJump = this.$router.resolve({ path: '/ShowCommunityVegtables',
        query: { param: JSON.stringify(obj)
        }})
      window.open(routerJump.href, '_blank')
    },
    changeCartVegetable(item) {
      if (item.cartNumber < 1) {
        for (let i = 0; i < this.cartList.length; i++) {
          let curObject = this.cartList[i]
          if (curObject.id === item.id) {
            this.cartList.splice(i, 1)
            this.cartListNumber = this.cartList.length
          }
        }
      }
      this.timer = new Date().getTime()
    },
    showCartTotalList() {
      this.sendAddr = this.userInfo.address
      this.drawer = true
    },
    changeAddress() {
      this.$prompt('请输入配送地址', '', {
        confirmButtonText: '确定',
        cancelButtonText: '取消'
      }).then(({ value }) => {
        this.sendAddr = value
      }).catch(() => {
      })
    },
    subOrder() {
      if (this.sendAddr === '') {
        this.$prompt('请输入配送地址', '', {
          confirmButtonText: '确定',
          cancelButtonText: '取消'
        }).then(({ value }) => {
          this.sendAddr = value
        }).catch(() => {
        })
      } else { // 提交订单
        let param = { userId: this.userInfo.id, sendAddr: this.sendAddr, orderList: JSON.stringify(this.cartList) }
        this.$server.addOrder(param).then(res => {
          if (res.state === 'success') {
            this.getCommunityVegetablesList()
            this.cartList = []
            this.drawer = false
            this.$message.success('订单提交成功')
          } else {
            this.$message.success('订单提交失败')
          }
        })
      }
    }
  }
}
</script>

<style lang="less" scoped>
.search-input-btn{
   float: left;
   margin-top: -117px;
   margin-left: 1010px;
   background:#1abc9c;
   background-size: 100% 100%;
   display: inline-block;
   vertical-align: middle;
   line-height: 48px;
   width: 160px;
   font-size: 18px;
   color: #fff;
   padding-left: 49px;
   text-align: left;
   position: relative;
   cursor: pointer;
   overflow: visible;
   border-top-right-radius: 24px;
   border-bottom-right-radius: 24px;
   border: none;
   height: 52px;
}
.hot{
    width: 36px;
    height: 20px;
    background: #ff4d4f;
    border-radius: 2px;
    font-size: 14px;
    font-family: DINPro;
    font-weight: 400;
    color: #fff;
    line-height: 20px;
    text-align: center;
    position: absolute;
    right: -10px;
    top: -10px;
  }
  .hot:after{
    content: "";
    width: 0;
    height: 0;
    border: 2px solid #ff4d4f;
    border-right-color: rgba(0,0,0,0);
    border-bottom-color: rgba(0,0,0,0);
    position: absolute;
    left: 6px;
    bottom: 0;
    -webkit-transform: translateY(100%);
    -ms-transform: translateY(100%);
    transform: translateY(100%);
 }
.input-box{
    float: left;
    margin-top: -117px;
    margin-left: 327px;
    height: 48px;
    background: #fff;
    width: 46%;
    border: 2px solid #1abc9c;
    padding: 0 15px;
    font-size: 14px;
    border-top-left-radius: 24px;
    border-bottom-left-radius: 24px;
}
 .main-index{
   width: 100%;
   height: 100%;
   position: absolute;
   input{
      outline: none;
   }
  .main-body-box{
    .main-body-child{
      flex-wrap:wrap;
      display: flex;
      width: 80%;
      margin-left: 10%;
      .main-body-child-item{
        border: 1px solid #f2f2f2;
        background: #fff;
        margin-right: 10px;
        width: 300px;
        height: 160px;
        margin-top: 10px;
        cursor: pointer;
        border-radius: 8px;
        border: 1px solid rgba(233, 233, 233, 1);
        box-shadow: 0px 0px 4px rgb(0 0 0 / 15%);
        display: flex;
        .left{
          width: 100px;
          height: 160px;
          padding-left: 10px;
          img{
            width: 100px;
            height: 100px;
          }
          .price{
            margin-top: 16px;
            .left{
                color: #d30303;
                font-weight: 700;
                font-size: 16px;
            }
            .right{
              color: #8b7777;
              font-size: 12px;
              padding-left: 0px;
            }
          }
        }
        .right{
          flex: 1;
          height: 160px;
          padding-left: 10px;
          padding-right: 10px;
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
          .tag-box{
            height: 40px;
            display: flex;
            .tag-box-item{
                font-size: 12px;
                border: 1px solid #e63333;
                color: #e63333;
                margin-right: 6px;
                border-radius: 4px;
                padding-left: 4px;
                padding-right: 4px;
                height: 22px;
                line-height: 22px;
                margin-top: 10px;
                display: flex;
                font-weight: 400;
                img{
                  margin-right: 4px;
                }
            }
          }
          .btn{
            height: 40px;
            line-height: 40px;
            text-align: right;
          }
        }
      }
      .box {
        display: flex  inline-flex;
      }
      .main-body-child-item:hover{
        border: 1px solid #1abc9c;
      }
    }
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
</style>
