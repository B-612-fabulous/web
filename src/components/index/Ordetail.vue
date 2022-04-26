<template>
  <div class="manager-box">
    <div class="manger-box-top">
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
            <div class="bak_tit">
              个人中心
            </div>

            <span @click="jumpUserInfo">{{ userInfo.trueName }}</span>|
            <span @click="goindex">进入首页</span>|<span @click="loginOut">退出</span>
          </div>
        </div>
      </div>
    </div>
    <div class="manger-box-body">
      <div class="manger-box-body-left">
        <el-tabs tab-position="left">
          <!-- </div> -->
          <!-- 送菜管理 -->
          <!-- <el-tab-pane label="个人订单管理中心">
            <div class="manger-box-body-right">
              <el-table
                :data="tableData"
                border
                height="550"
                style="width: 100%"
              >
                <el-table-column
                  prop="title"
                  label="商品标题"
                  width="180"
                />
                <el-table-column
                  prop="commodityDesc"
                  label="商品描述"
                />
                <el-table-column
                  prop="price"
                  label="商品价格"
                  width="180"
                />

                <el-table-column
                  prop="fmImg"
                  label="封面图片"
                  width="180"
                >
                  <template slot-scope="scope">
                    <img :src="getImgUrl(scope.row)" style="width:80px;height:80px;">
                  </template>
                </el-table-column>
                <el-table-column
                  label="是否秒杀"
                  width="180"
                >
                  <template slot-scope="scope">
                    <el-tag v-if="scope.row.seckill" type="danger">
                      是
                    </el-tag>
                    <el-tag v-else type="danger">
                      否
                    </el-tag>
                  </template>
                </el-table-column>
                <el-table-column
                  prop="preferentialRules"
                  label="折扣描述"
                  width="180"
                />
                <el-table-column
                  label="操作"
                  width="200"
                >
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="updateData(scope.row)">
                      编辑
                    </el-button>
                    <el-button type="text" size="small" @click="deleteData(scope.row)">
                      删除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane> -->

          <el-tab-pane label="我的待送菜">
            <div class="manger-box-body-right">
              <el-table
                :data="orderDate"
                border
                height="550"
                style="width: 100%"
              >
                <el-table-column
                  prop="title"
                  label="商品标题"
                  width="180"
                />
                <el-table-column
                  prop="commodityDesc"
                  label="商品描述"
                   width="180"
                />
                <el-table-column
                  prop="price"
                  label="商品价格"
                  width="180"
                />

                <el-table-column
                  prop="fmImg"
                  label="封面图片"
                  width="180"
                >
                  <template slot-scope="scope">
                    <img :src="getImgUrl(scope.row)" style="width:80px;height:80px;">
                  </template>
                </el-table-column>
                <el-table-column
                  prop="preferentialRules"
                  label="折扣描述"
                  width="180"
                />
                <el-table-column
                  label="操作"
                  width="200"
                >
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="deleteData(scope.row)">
                      删除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
<!-- 闲置物品 -->
          <el-tab-pane label="购买的闲置">
            <div class="manger-box-body-right">
              <el-table
                :data="orderidleDate"
                border
                height="550"
                style="width: 100%"
              >
            
                <el-table-column
                  prop="commodityDesc"
                  label="商品描述"
                />
                <el-table-column
                  prop="price"
                  label="商品价格"
                  width="180"
                />

                <el-table-column
                  prop="fmImg"
                  label="封面图片"
                  width="180"
                >
                  <template slot-scope="scope">
                    <img :src="getImgUrl(scope.row)" style="width:80px;height:80px;">
                  </template>
                </el-table-column>
                <el-table-column
                  label="操作"
                  width="200"
                >
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="deleteOrderidleList(scope.row)">
                      删除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>

          <!-- 家政服务 -->
          <el-tab-pane label="购买的家政服务">
            <div class="manger-box-body-right">
              <el-table
                :data="orderhouseDate"
                border
                height="550"
                style="width: 100%"
              >
                <el-table-column
                  prop="title"
                  label="服务标题"
                  width="180"
                />
                <el-table-column
                  prop="price"
                  label="服务价格"
                  width="180"
                />
                 
                <el-table-column
                  prop="dotime"
                  label="服务时间"
                  width="180"
                />
                <el-table-column
                  prop="address"
                  label="服务地点"
                  width="180"
                />
                <el-table-column
                  prop="dotime"
                  label="联系方式"
                  width="180"
                />
                <el-table-column
                  label="操作"
                  width="200"
                >
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="deletehouseData(scope.row)">
                      删除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>

             <!-- 旅游服务 -->
          <el-tab-pane label="购买的旅游服务">
            <div class="manger-box-body-right">
              <el-table
                :data="ordertravelDate"
                border
                height="550"
                style="width: 100%"
              >
                <el-table-column
                  prop="title"
                  label="服务标题"
                  width="180"
                />
                <el-table-column
                  prop="price"
                  label="服务价格"
                  width="180"
                />
                <el-table-column
                  prop="commodityDesc"
                  label="商品描述"
                   width="180"
                />
                <el-table-column
                  prop="dotime"
                  label="服务时间"
                  width="180"
                />
                <el-table-column
                  prop="address"
                  label="服务地点"
                  width="180"
                />
                <el-table-column
                  prop="dotime"
                  label="联系方式"
                  width="180"
                />
                <el-table-column
                  label="操作"
                  width="200"
                >
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="deleteOrderholidleList(scope.row)">
                      删除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>




        </el-tabs>
      </div>
    </div>
  </div>
</template>

<script>
import AddCommunityVegetables from '@/components/index/AddCommunityVegetables'
import EditUser from '@/components/indextable/EditUser'
import EditAnnouncement from '@/components/indextable/EditAnnouncement'
import EditHousekeepingServices from '@/components/indextable/EditHousekeepingServices'
import EdittHolidayTravel from '@/components/indextable/EdittHolidayTravel'
import EditIdleZone from '@/components/indextable/EditIdleZone'
export default {
  name: 'Indextable',
  // components: {
  //   AddCommunityVegetables,
  //   EditUser,
  //   EditAnnouncement,
  //   EditHousekeepingServices,
  //   EdittHolidayTravel,
  //   EditIdleZone

  // },
  data() {
    return {
      tableData: [],
      orderDate: [],
      orderhouseDate:[],
      ordertravelDate:[],
      orderidleDate:[],
      userInfo: {},
      showAddVegetables: false,

      communityVegetables: {},
      travelTables: {},
      userTables: {},
      idleZone: {},
      houseTables: {},
      editAnnounceTables: {},
      title: '增加商品'
    }
  },
  created() {
    // this.getDataList()
    let userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      this.userInfo = JSON.parse(userInfo)
      // if (this.userInfo.id !== 1) {
      //   this.jumpLogin()
      // }
    }
    this.getOrderDetailList()
    this.getOrderidleList()
    this.getOrderDetailHouseList()
    this.getOrderDetailHolidayList()
  },
  methods: {
    // getDataList() {
    //   let param = {}
    //   this.$server.getCommunityVegetablesList(param).then(res => {
    //     if (res.state === 'success') { // 请求成功
    //       this.tableData = res.data
    //       this.showAddVegetables = false
    //     } else {
    //       this.$message.error('系统异常')
    //     }
    //   })
    // },
  getOrderDetailHolidayList() {
      let param = { createPeople: this.userInfo.id
      }
      this.$server.getOrderDetailHolidayList(param).then(res => {
        if (res.state === 'success') { // 请求成功
          this.ordertravelDate = res.data
        } else {
          this.$message.error('系统异常')
        }
      })
    },
    deleteOrderholidleList(item) {
      let param = { id: item.id }
      this.$server.deleteOrderholidleList(param).then(res => {
        if (res.state === 10000) {
          this.getOrderDetailHolidayList()
          this.$message.success('删除成功')
        } else {
          this.$message.error('操作失败')
        }
      })
    },

  getOrderDetailHouseList() {
      let param = { createPeople: this.userInfo.id
      }
      this.$server.getOrderDetailHouseList(param).then(res => {
        if (res.state === 'success') { // 请求成功
          this.orderhouseDate = res.data
        } else {
          this.$message.error('系统异常')
        }
      })
    },
    deletehouseData(item) {
      let param = { id: item.id }
      this.$server.deleteorderhouse(param).then(res => {
        if (res.state === 10000) {
          this.getOrderDetailHouseList()
          this.$message.success('删除成功')
        } else {
          this.$message.error('操作失败')
        }
      })
    },


    getOrderidleList() {
      let param = { createPeople: this.userInfo.id
      }
      this.$server.getOrderidleList(param).then(res => {
        if (res.state === 'success') { // 请求成功
          this.orderidleDate = res.data
        } else {
          this.$message.error('系统异常')
        }
      })
    },
    getOrderDetailList() {
      let param = { createPeople: this.userInfo.id
      }
      this.$server.getOrderDetailList(param).then(res => {
        if (res.state === 'success') { // 请求成功
          this.orderDate = res.data
        } else {
          this.$message.error('系统异常')
        }
      })
    },
    deleteData(item) {
      let param = { id: item.id }
      this.$server.deleteOrderDetailList(param).then(res => {
        if (res.state === 10000) {
          this.getOrderDetailList()
          this.$message.success('删除成功')
        } else {
          this.$message.error('操作失败')
        }
      })
    },
    deleteOrderidleList(item){
      let param = { id: item.id }
      this.$server.deleteOrderidleList(param).then(res => {
        if (res.state === 10000) {
          this.getOrderidleList()
          this.$message.success('删除成功')
        } else {
          this.$message.error('操作失败')
        }
      })

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
    },
    goindex() {

      this.$router.push('/index')
    },

    handleClose() {
      this.showAddVegetables = false
    },
    getImgUrl(item) {
      let host = 'http://localhost:8888'
      item.showFmImg = host + item.fmImg
      return item.showFmImg
    },
    getpicUrl(item) {
      let host = 'http://localhost:8888'
      item.showpic = host + item.pic
      return item.showpic
    },

    deleteHousekeepingServices(item) {
      let param = { id: item.id }
      alert('112')
      this.$server.deleteHousekeepingServices(param).then(res => {
        if (res.state === 10000) {
          this.getHousekeepingServicesList()
          alert('进入')
        } else {
          this.$message.error('操作失败')
          alert('出去')
        }
      })
    },
    deleteHolidaTtravel(item) {
      let param = { id: item.id }
      alert('112')
      this.$server.deleteHolidaTtravel(param).then(res => {
        if (res.state === 10000) {
          this.getHolidaTtravelList()
          alert('进入')
        } else {
          this.$message.error('操作失败')
          alert('出去')
        }
      })
    }

  }
}
</script>
<style scoped lang="less">
.cell2{
      overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;

}
.manager-box{
  position: absolute;
  width: 100%;
  height: 100%;
  .manger-box-top{
    background: rgb(30, 156, 156);
    .main-top{
        background-color: rgb(30, 156, 156);
        height: 98px;
        width: 80%;
        position: relative;
        left: 10%;
        .userInfo{
          height: 40px;
          line-height: 40px;
          display: flex;
          font-size: 14px;
          color: #fff;
          .left{
            flex: 1;
          }
          .right{
            flex: 1;
            text-align: right;
            padding-right: 10px;
            .bak_tit{
              color: #fff;
              font-size: 36px;
              font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
              font-weight: 700;
              text-align: left;
              margin-left: 20%;
              position: absolute;
              height: 90px;
              line-height: 90px;
            }
            span{
              cursor: pointer;
              padding: 0 20px;
            }

          }
        }
     }
  }
  .manger-box-body{
     height: ~"calc(100% - 100px)";
    .manger-box-body-left{
      position: relative;
      height: 100%;
      .el-tabs{
        position: relative;
        height: 100%;
        .el-tabs__content{
          position: relative;
          height: 100%;
          .opera-btn-box{
              margin-left: 1280px;
              margin-bottom: 10px;
              margin-top: 10px;
            // width: 100%;
            // text-align: right;
            // height: 60px;
            // line-height: 60px;
            // padding-right: 20px;
          }
          .manger-box-body-right{
            overflow: auto;
          }
        }
      }
    }
  }
}
</style>