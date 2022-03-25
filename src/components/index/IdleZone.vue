<template>

  <div class="main-index">
    <input type="text" class="input-box" placeholder="请输入求助关键词" v-model="keyword">
     <!-- <el-button class="searchbtn" @click="search">搜索</el-button> -->
     <button class="search-input-btn" @click="search" >
              搜寻求助
              <span class="hot">HOT</span>
            </button>
    <!-- 主体 -->
    <div class="main-body-child">
      <div v-for="(item,index) in addlist" :key="index" class="main-body-child-item" @click="jumpidleDetail(item)">
        <div class="top">
          <img :src="getImgUrl(item)">
        </div>
        <div class="desc">
          <div class="tit">
            {{ item.commodityDesc }}
          </div>
          <div class="user-box">
            <div class="head-pic">
              <img :src="getuserUrl(item)">
            </div>
            
            <div class="price">
              <span>￥</span>{{ item.price }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IdleZone',
  data() {
    return {
      dataList: [
        {
          fmImg: require('@/assets/index/td.jpeg'),
          commodityDesc: '刚摘的新鲜番茄，甘甜可口，生吃做菜煲汤都是很可口',
          price: 456,
          preferentialRules: '满20减3',
          pic: ''

        },  
      ],
      addlist:''
      
    }
  },
  created() {
    // this.getIdleZoneList();

  },
  mounted() {
    this.getIdleZoneList()

  },
  methods: {

    // getIdleZoneList() {
    //   let param = {}
    //   this.axios.post('/getIdleZoneList', param)
    //     .then(resp => {

    //       if (resp.data.state === 'success') {
    //         this.dataList = resp.data.data
    //         // console.log(this.dataList)
    //         console.log(resp.data)
    //       } else {
    //         this.$message.error('系统异常')
    //       }

    //     })

    // },

    getIdleZoneList() {
      let param = {}
      this.$server.getIdleZoneList(param).then(res => {
        if (res.state === 'success') { // 请求成功
          this.dataList = res.data
          this.addlist=this.dataList
          // this.showAddVegetables = false
        } else {
          this.$message.error('系统异常')
        }
      })
    },
     search(){
   var keyword = this.keyword;
   if (keyword) {
           this.addlist =  this.dataList.filter(function(dataList) {
              return Object.keys(dataList).some(function(key) {
                   return String(dataList[key]).toLowerCase().indexOf(keyword) > -1
               })
           })
   }else{
       this.addlist =  this.dataList;
                }
            },
    getImgUrl(item) {
      let host = 'http://localhost:8888'
      item.showFmImg = host + item.fmImg
      return item.showFmImg
    },
    getuserUrl(item) {
      let host = 'http://localhost:8888'
      item.showUserImg = host + item.pic
      return item.showUserImg
    },
    jumpidleDetail(obj) {
      let routerJump = this.$router.resolve({ path: '/ShowIdleZone',
        query: { param: JSON.stringify(obj)
        }})
      window.open(routerJump.href, '_blank')
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
        width: 200px;
        height: 300px;
        margin-top: 10px;
        cursor: pointer;
        border-radius: 8px;
        border: 1px solid rgba(233, 233, 233, 1);
        box-shadow: 0px 0px 4px rgb(0 0 0 / 15%);
        display: flex;
        flex-wrap: wrap;
        .top{
           width: 200px;
           height: 180px;
           overflow: hidden;
          img{
            width: 200px;
            height: 180px;
            border-radius: 6px;
          }
        }
        .desc{
          flex: 1;
          height: 120px;
          .tit{
            word-break: break-all;
            height: 34px;
            line-height: 1.2;
            font-size: 14px;
            color: #4F5055;
            padding-top: 10px;
            overflow: hidden;
            -o-text-overflow: ellipsis;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
          }
          .user-box{
            height: 60px;
            display: flex;
            .head-pic{
              height: 40px;
              width: 40px;
              border-radius:40px;
              overflow: hidden;
              border: 1px solid #f2f2f2;
              margin-top: 20px;
              margin-left: 10px;
              img{
                 height: 40px;
                 width: 40px;
              }
            }
            .price{
              margin-top: 25px;
              font-weight: bold;
              font-size: 22px;
              color: #ff5959;
              text-align: right;
              flex: 1;
              padding-right: 10px;
              span{
                font-size: 10px;
              }
            }
          }
        }
      }
      .main-body-child-item:hover{
        border: 1px solid #1abc9c;
      }
    }
  }
 }
</style>
