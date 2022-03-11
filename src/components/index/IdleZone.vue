<template>
  <div class="main-index">
    <!-- 主体 -->
    <div class="main-body-child">
      <div class="main-body-child-item">
        <div class="top">
          <img :src="pld">
        </div>
        <div class="desc">
          <div class="tit">
            富士拍立得hello kitty一次成像相机，功能正常成色如 品牌:富士 型号:其他数码型号
          </div>
          <div class="user-box">
            <div class="head-pic">
              <img :src="userPic">
            </div>
            <div class="price">
              <span>￥</span>456
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

      pld: require('@/assets/index/pld.jpg'),
      userPic: require('@/assets/index/user.jpg'),
        dataList: [
        {
          fmImg: require('@/assets/index/td.jpeg'),
          commodityDesc: '刚摘的新鲜番茄，甘甜可口，生吃做菜煲汤都是很可口',
          price:456,
          preferentialRules: '满20减3'
        }
      ]
    }
  },
  created() {

  },
  methods: {
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
