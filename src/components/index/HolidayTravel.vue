<template>
  <div class="main-index">
    <input v-model="keyword" type="text" class="input-box" placeholder="请输入求助关键词">
    <!-- <el-button class="searchbtn" @click="search">搜索</el-button> -->
    <button class="search-input-btn" @click="search">
      搜寻求助
      <span class="hot">HOT</span>
    </button>
    <!-- 主体 -->
    <div class="main-body-child">
      <!-- @click="jumpcommvegDetail(item)" -->
      <div v-for="(item,index) in addlist" :key="index" class="main-body-child-item" @click="jumptravelDetail(item)">
        <div class="left">
          <!-- getImgUrl(item) -->
          <img :src="addbg">
          <div class="price">
            <span class="left">￥{{ item.price }}</span><span class="right">/人</span>
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
            <div class="do-time">
              {{ item.dotime }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HousekeepingServices',
  data() {
    return {
      dataList: [
        {
          fmImg: require('@/assets/index/td.jpeg'),
          price: '5.88',
          title: '刚摘的鲜番茄',
          commodityDesc: '刚摘的新鲜番茄，甘甜可口，生吃做菜煲汤都是很可口',
          preferentialRules: '满20减3'
        }
      ],
      addbg: require('@/assets/index/travel.jpg'),
      addlist: ''
    }
  },
  created() {
    this.getHolidaTtravelList()
  },
  methods: {
    // addCartVegetable(item) {
    //   console.log('22')
    // },
    getHolidaTtravelList() {
      let param = {}
      this.$server.getHolidaTtravelList(param).then(res => {
        if (res.state === 'success') { // 请求成功
          this.dataList = res.data
          this.addlist = this.dataList
          this.showAddVegetables = false
        } else {
          this.$message.error('系统异常')
        }
      })
    },
    // getImgUrl(item) {
    //   let host = 'http://localhost:8888'
    //   item.showFmImg = host + item.fmImg
    //   return item.showFmImg
    // },
    // jumpcommvegDetail(obj){
    //   let routerJump = this.$router.resolve({ path: '/ShowCommunityVegtables',
    //    query: { param: JSON.stringify(obj)
    //    }})
    //   window.open(routerJump.href, '_blank')
    // }

    jumptravelDetail(obj) {
      let routerJump = this.$router.resolve({ path: '/ShowTravel',
        query: { param: JSON.stringify(obj)
        }})
      window.open(routerJump.href, '_blank')
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
    width: 43%;
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
            height: 60px;
            font-size: 12px;
            color: #726969;
            line-height: 1.5em;
          }
          .tag-box{
            height: 40px;
            display: flex;
            margin-top: 20px;
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
</style>
