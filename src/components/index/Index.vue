<template>
  <div class="main-index">
    <!-- 头部 -->
    <div class="main-top">
      <div class="userInfo">
        <div class="letf">
          客服电话&nbsp;:&nbsp;4009991762
        </div>
        <div v-if="!userInfo.id || userInfo.id === ''" class="right">
          <span @click="jumpLogin">登录</span>|<span @click="jumpRegister">注册</span>
        </div>
        <div v-else class="right">
          <span @click="jumpUserInfo">{{ userInfo.trueName }}</span>|<span @click="loginOut">退出</span>
        </div>
      </div>
      <div class="top-search">
        <div class="left">
          <img :src="logoImg" class="logo">
        </div>
        <div class="center">
          <div class="search-input">
            <input type="text" class="input-box" placeholder="请输入求助关键词">
            <button class="search-input-btn">
              搜寻求助
              <span class="hot">HOT</span>
            </button>
          </div>
        </div>
        <div class="right">
          <button class="qz-btn">
            发布求助信息
          </button>
        </div>
      </div>
      <div class="top-nav">
        <div v-for="(item,index) in navData" :key="index" class="top-nav-item" @click="loadItemData(item)">
          <div class="show-tit" :class="{'on':item.id===curNav}">
            {{ item.name }}
          </div>
          <div class="bottom-line" :class="{'on-line':item.id===curNav}" />
        </div>
      </div>
    </div>
    <!-- 主体 -->
    <div class="main-body" :style="{ 'backgroundImage':'url('+ bodyImg +')' }">
      <!-- 社区送菜 -->
      <div v-if="curNav == 1" class="main-body-box">
        <CommunityVegetables />
      </div>
      <!-- 闲置专区 -->
      <div v-if="curNav == 2" class="main-body-box">
        <IdleZone />
      </div>
    </div>
  </div>
</template>

<script>
import CommunityVegetables from '@/components/index/CommunityVegetables'
import IdleZone from '@/components/index/IdleZone'
export default {
  name: 'Index',
  components: {
    CommunityVegetables,
    IdleZone
  },
  data() {
    return {
      logoImg: require('@/assets/index/logo.png'),
      navData: [
        {
          name: '送菜上门',
          id: '1'
        },
        {
          name: '闲置专区',
          id: '2'
        },
        {
          name: '假期出游',
          id: '3'
        },
        {
          name: '假期出游',
          id: '4'
        },
        {
          name: '家政服务',
          id: '6'
        },
        {
          name: '社区公告',
          id: '7'
        }

      ],
      curNav: '1',
      bodyImg: require('@/assets/index/body.png'),
      tdImg: require('@/assets/index/td.jpeg'),
      fqImg: require('@/assets/index/fq.png'),
      addCart: require('@/assets/index/addCart.png'),
      quan: require('@/assets/index/quan.png'),
      userInfo: {}
    }
  },
  created() {
    let userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      this.userInfo = JSON.parse(userInfo)
    }
  },
  methods: {
    loadItemData(obj) {
      this.curNav = obj.id
    },
    jumpLogin() {
      this.$router.push('/login')
    },
    jumpRegister() {
      this.$router.push('/register')
    },
    jumpUserInfo() {

    },
    loginOut() {
      localStorage.removeItem('userInfo')
      this.$router.push('/login')
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
   .main-top{
     background-color: #fff;
     height: 98px;
     width: 80%;
     position: relative;
     left: 10%;
     .userInfo{
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
         span{
           cursor: pointer;
           padding: 0 20px;
         }

       }
     }
     .top-search{
       display: flex;
       width: 100%;
       height: 80px;
       line-height: 80px;
       margin-top: -20px;
       .left{
         width: 200px;
         .logo{
            width: 160px;
            display: -webkit-inline-box;
            display: -ms-inline-flexbox;
            display: inline-flex;
            cursor: pointer;
            margin-top: 22px;
         }
       }
       .center{
         flex: 1;
         display: flex;
         padding-top: 22px;
         .search-input{
              -webkit-box-flex: 1;
              -ms-flex: 1 1 auto;
              flex: 1 1 auto;
              height: 48px;
              z-index: 9;
              position: relative;
              display: flex;
              .input-box{
                width: 80%;
                height: 48px;
                background: #fff;
                border: 2px solid #1abc9c;
                padding: 0 15px;
                font-size: 14px;
                border-top-left-radius: 24px;
                border-bottom-left-radius: 24px;
              }
              .search-input-btn{
                    background-color: #1abc9c;
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
                }
                .search-input-btn:before{
                      position: absolute;
                      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwEAYAAAAHkiXEAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAgY0hSTQAAeiYAAICEAAD6AAAAgOgAAHUwAADqYAAAOpgAABdwnLpRPAAAAAZiS0dEAAAAAAAA+UO7fwAAAAlwSFlzAAAASAAAAEgARslrPgAABKxJREFUeNrtW01IVFEYvVdNScvMSM0WJRaWBuoqQxcGgVLQpkUEBa1atCkohQhEsCAXgkVuhaBFtIggKFdRG4nsx4KgJiIN/CkocEqSxPu1OH7COPe9edOb975xemdzuHdm3jvf+e67v2+UihAhQoQIESKIQEsLYBAREdXWKlKk6NAhpZVWev9+fLpnD+orK1G/YQPKv36h/PMnyrEYyuPj+N3jx+Dnz7XWWmtjpOMUBxkyZAoKwCdPwvjRUQoUk5Pgnh5webm0D0LGd3TAgFgsWMNTIR6Hnq4u8Lp1Ur4E1gUh0PXrURocBJ854+3Xs7PoUh48QJfy7t1KvVJKqa9fwaWl4O3bwTt2gDs7wY2N3u738iX4+HF0VZ8+BeVL4IDxW7agZT175q1F3rsHPnAAnJeXGR01NeCrV8Hz8+46fvwAt7ZK+/iPAZeVgd+8cYzRkCHz6hUbHq6+6mrwrVvuieBErYFErAyqRET05Il7YHfugIuLxXUTEdHZs+A/f+x6v38H19ZK600RSF+fu/GDg2CdNdPeRP2dne6JePFCerB2EN7Q4C58ZAScny+t11s8/EQ4dZ1dXdI6Vwl+9MiudmICgnmWsnbgPkbE42DBdQQENDW5t5RTp6SN9BcfD9ZOs6aeHmGBN2/ahfHsx/80UhqIg6evlic87Dh5EAXPztqFnTsnbVxm4+V1hNOTzntVoQniQdcJO3dKGxdM3E7rmkuX/F4/zUeoqSlZoSJF799jCT8xIW1YMBgZscfd3Oz3ymkmYNeupCqttMpZ4xmfP3v2I02kmYDNm+31U1NhWxIupqeTqrTSSjv54R1pJqCoKKmKFCmKx+XMCQNzc/b6wkK/V/aeAFKkaH4+qV4rrXRlpZw5YaCqyu7Ht29+r5zmE8D78KuFVFfLmRMGtm1LqtJKKx1mArTSSsdi9vq9e3NlAWbHvn1JVaRI0eRkaBKw8KioWF6FGPu8OLz9/cDjXW5Q4JkZe7wnTggJGx+3C7p2Tdq4zMbZ2mqPc2kJDXLrViFh3d12YXyA4X96Jg3Ecf++Pc6nT+WELWceQpx2C/v7pQ30F19bm/uWy5Ej0jqXhQ4M2AX+/g32v1QPLR4iIiopce9ieU8oC072+MAFgqam7IK5PnunqWwomM+sLX0+EREdPCit1yGAw4fBltmRIUNmbAwFy4JGVHd+PvjGDfcuZw10qRDa2+seyJcv0l0T7s+vzzgdqTIWF8E1NdL+phng0JB7YDxG9PeDg5s14fo8nz99OrEheAW/Spm9XalD4PxEOC3cGDx95YT8+xty3GLB58+D3771ZvSHDzmaCB4jnFaUTuCjT37h6/btxNnX8DDKDx96M3A1Fhbw+4sXOeHgy5dzLxGGDJlNmxINTPWuZqbBK9i7d1Gur3dvODmYiMSE8N4Sr6x5/p2qy/IKNuj6ddxv9+60dQacCPkFhTUx/E+YlhbU1tVh97GiAvUbN6I8N4fyzAy+x9vlo6OZPqPmRKB05Yr9Wx8/gtvbcX/LSVoEf1j5Y4enJ4L/txAh40jZNRkyZF6/ltaZ87Anghdwx45J6/tvAMMvXAAfPSqtJ0KECBEiZD/+AuwGUF4cdtlFAAAAJXRFWHRkYXRlOmNyZWF0ZQAyMDIxLTA1LTE0VDIxOjU5OjAyKzA4OjAwlTirKgAAACV0RVh0ZGF0ZTptb2RpZnkAMjAyMS0wNS0xNFQyMTo1OTowMiswODowMORlE5YAAABMdEVYdHN2ZzpiYXNlLXVyaQBmaWxlOi8vL2hvbWUvYWRtaW4vaWNvbi1mb250L3RtcC9pY29uX3RlY25yOGw1bG8vZmFuZ2RhamluZy5zdmdshKB0AAAAAElFTkSuQmCC) no-repeat 50%;
                      background-size: 100% 100%;
                      content: "";
                      width: 20px;
                      height: 20px;
                      top: 14px;
                      left: 21px;
                }
         }
       }
       .right{
         width: 200px;
         height: 96px;
         line-height: 96px;
         .qz-btn{
              background-color: #1abc9c;
              display: inline-block;
              vertical-align: middle;
              line-height: 48px;
              width: 162px;
              margin-left: 24px;
              font-size: 18px;
              color: #fff;
              cursor: pointer;
              position: relative;
              border-radius: 24px;
              border: none;
         }
       }
     }
     .top-nav{
       display: flex;
       .top-nav-item{
         cursor: pointer;
         margin-right: 60px;
         height: 60px;
         line-height: 60px;
         text-align: center;
         .show-tit{
              font-family: PingFangSC-Semibold,PingFang SC;
              color: #000;
              font-weight: 600;
              font-size: 14px;
         }
         .on{
              color: #19bc9c;
         }
         .on-line{
           border-bottom: 2px solid #19bc9c;
         }
       }
     }
   }
   .main-body{
       background-size: 100%;
       background-repeat: no-repeat;
       height: ~"calc(100% - 160px)";
       margin-top: 62px;
   }
 }
</style>
