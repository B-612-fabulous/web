<template>
  <div class="main-index">
    <!-- 主体 -->
    <div class="main-body-child">
      <div v-for="(item,index) in dataList" :key="index" class="main-body-child-item">
        <div class="left">
          <img :src="getImgUrl(item)">
          <div class="price">
            <span class="left">￥{{ item.price }}</span><span class="right">/{{ item.unit }}</span>
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
            <div v-if="item.isSeckill" class="tag-box-item">
              秒杀
            </div>
            <div v-if="item.preferentialRules !=='' " class="tag-box-item">
              <img :src="quan">满20减3
            </div>
          </div>
          <div class="btn">
            <img :src="addCart" @click="addCartVegetable(item)">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CommunityVegetables',
  data() {
    return {
      tdImg: require('@/assets/index/td.jpeg'),
      fqImg: require('@/assets/index/fq.png'),
      addCart: require('@/assets/index/addCart.png'),
      quan: require('@/assets/index/quan.png'),
      dataList: [
        {
          fmImg: require('@/assets/index/td.jpeg'),
          price: '5.88',
          unit: '500g',
          title: '刚摘的鲜番茄',
          commodityDesc: '刚摘的新鲜番茄，甘甜可口，生吃做菜煲汤都是很可口',
          isSeckill: true,
          preferentialRules: '满20减3'
        }
      ]
    }
  },
  created() {
    this.getCommunityVegetablesList()
  },
  methods: {
    addCartVegetable(item) {
      console.log('22')
    },
    getCommunityVegetablesList() {
      let param = {}
      this.$server.getCommunityVegetablesList(param).then(res => {
        console.log(res)
        if (res.state === 'success') { // 请求成功
          this.dataList = res.data
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
    }
  }
}
</script>

<style lang="less" scoped>
 .main-index{
   width: 100%;
   height: 100%;
   position: absolute;
   input{
      outline: none;
   }
  .main-body-box{
    .main-body-child{
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
      .main-body-child-item:hover{
        border: 1px solid #1abc9c;
      }
    }
  }
 }
</style>
