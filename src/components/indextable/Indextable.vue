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
              社区众包后台管理系统
            </div>
            <span @click="jumpUserInfo">{{ userInfo.trueName }}</span>|<span @click="loginOut">退出</span>
          </div>
        </div>
      </div>
    </div>
    <div class="manger-box-body">
      <div class="manger-box-body-left">
        <el-tabs tab-position="left">
          <div class="opera-btn-box">
            <el-button type="primary" @click="addVegetablesPop">
              新增商品
            </el-button>
          </div>
          <!-- 送菜管理 -->
          <el-tab-pane label="社区送菜管理">
            <div class="manger-box-body-right">
              <el-table
                :data="tableData"
                border
                height="700"
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
          </el-tab-pane>

          <!-- 角色管理" -->
          <el-tab-pane label="角色管理">
            <div class="manger-box-body-right">
              <el-table
                :data="userDate"
                border
                height="700"
                style="width: 100%"
              >
                <el-table-column
                  prop="id"
                  label="用户id"
                  width="180"
                />

                <el-table-column
                  prop="userName"
                  label="用户名"
                  width="180"
                />
                <el-table-column
                  prop="passWord"
                  label="用户密码"
                  width="180"
                />

                <el-table-column
                  prop="phone"
                  label="手机号"
                  width="180"
                />

                <el-table-column
                  prop="fmImg"
                  label="封面图片"
                  width="180"
                >
                  <template slot-scope="scope">
                    <img :src="getpicUrl(scope.row)" style="width:80px;height:80px;">
                  </template>
                </el-table-column>

                <el-table-column
                  prop="address"
                  label="用户地址"
                  width="180"
                />
                <el-table-column
                  prop="trueName"
                  label="真实姓名"
                  width="180"
                />
                <el-table-column
                  label="操作"
                  width="200"
                >
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="updateDatauser(scope.row)">
                      编辑
                    </el-button>
                    <el-button type="text" size="small" @click="deleteDatauser(scope.row)">
                      删除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>

          <el-tab-pane label="定时任务补偿">
            定时任务补偿
          </el-tab-pane>
          <!-- 家政服务 -->
          <el-tab-pane label="家政服务">
            <div class="manger-box-body-right">
              <el-table
                :data="HouservicesData"
                border
                height="700"
                style="width: 100%"
              >
                <el-table-column
                  prop="title"
                  label="服务标题"
                  width="180"
                />
                <el-table-column
                  prop="phone"
                  label="联系电话"
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
                  label="操作"
                  width="200"
                >
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="updateDatahourse(scope.row)">
                      编辑
                    </el-button>
                    <el-button type="text" size="small" @click="deleteHousekeepingServices(scope.row)">
                      删除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <!-- 假期出行 -->

          <el-tab-pane label="假期出行">
            <div class="manger-box-body-right">
              <el-table
                :data="HolidayData"
                border
                height="700"
                style="width: 100%"
              >
                <el-table-column
                  prop="title"
                  label="出行标题"
                  width="180"
                />
                <el-table-column
                  prop="phone"
                  label="联系电话"
                  width="180"
                />
                <el-table-column
                  prop="address"
                  label="出行地点"
                  width="180"
                />
                <el-table-column
                  prop="commodityDesc"
                  label="出行描述"
                  width="180"
                />
                <el-table-column
                  prop="price"
                  label="服务价格"
                  width="180"
                />
                <el-table-column
                  prop="dotime"
                  label="出行时间"
                  width="180"
                />

                <el-table-column
                  label="操作"
                  width="200"
                >
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="updatetravelData(scope.row)">
                      编辑
                    </el-button>
                    <el-button type="text" size="small" @click="deleteHolidaTtravel(scope.row)">
                      删除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <!-- 公告管理 -->
          <el-tab-pane label="公告管理">
            <div class="manger-box-body-right">
              <el-table
                :data="announceDate"
                border
                height="700"
                style="width: 100%"
              >
                <el-table-column
                  prop="title"
                  label="公告标题"
                  width="180"
                />

                <el-table-column
                  prop="announcement"
                  label="内容"
                  width="280"
                />
                <el-table-column
                  prop="createDate"
                  label="创建时间"
                  width="180"
                />
                <el-table-column
                  label="操作"
                  width="200"
                >
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="updateDataannounce(scope.row)">
                      编辑
                    </el-button>
                    <el-button type="text" size="small" @click="deleteDataannounce(scope.row)">
                      删除
                    </el-button>
                  </template>
                </el-table-column>
              </el-table>
            </div>
          </el-tab-pane>
          <!-- 闲置专区 -->
           <el-tab-pane label="闲置专区">
            <div class="manger-box-body-right">
              <el-table
                :data="IdleZonetableData"
                border
                height="700"
                style="width: 100%"
              >
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
                  label="操作"
                  width="200"
                >
                  <template slot-scope="scope">
                    <el-button type="text" size="small" @click="updateIdleZoneData(scope.row)">
                      编辑
                    </el-button>
                    <el-button type="text" size="small" @click="deleteIdleZone(scope.row)">
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
    <!-- 送菜 -->
    <el-dialog
      v-if="showAddVegetables"
      :title="title"
      :visible.sync="showAddVegetables"
      width="60%"
      :before-close="handleClose"
    >
      <AddCommunityVegetables ref="addCommunityVegetables" :community-vegetables="communityVegetables" />

      <span slot="footer" class="dialog-footer">
        <el-button @click="showAddVegetables = false">取 消</el-button>
        <el-button type="primary" @click="addVegetables">确 定</el-button>
      </span>
    </el-dialog>

    <!-- user -->

    <el-dialog
      v-if="showUser"
      :title="title"
      :visible.sync="showUser"
      width="60%"
      :before-close="handleClose"
    >
      <EditUser ref="updateUserByid" :user-tables="userTables" />

      <span slot="footer" class="dialog-footer">
        <el-button @click="showUser = false">取 消</el-button>
        <el-button type="primary" @click="updateUserid">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 公告 -->

    <el-dialog
      v-if="showAnnouncement"
      :title="title"
      :visible.sync="showAnnouncement"
      width="60%"
      :before-close="handleClose"
    >
      <EditAnnouncement ref="updateCommunityAnnounce" :editAnnounceTables="editAnnounceTables" />

      <span slot="footer" class="dialog-footer">
        <el-button @click="showAnnouncement = false">取 消</el-button>
        <el-button type="primary" @click="updateAnnounce">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 家政服务 -->
    <el-dialog
      v-if="showHouse"
      :title="title"
      :visible.sync="showHouse"
      width="60%"
      :before-close="handleClose"
    >
      <EditHousekeepingServices ref="upadteIdHousekeepingServices" :houseTables="houseTables" />

      <span slot="footer" class="dialog-footer">
        <el-button @click="showHouse = false">取 消</el-button>
        <el-button type="primary" @click="upadteIdHousekeepingServices">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 假期出行 -->
    <el-dialog
      v-if="showTravel"
      :title="title"
      :visible.sync="showTravel"
      width="60%"
      :before-close="handleClose"
    >
      <EdittHolidayTravel ref="upadteIdHolidaTtravel" :travelTables="travelTables" />

      <span slot="footer" class="dialog-footer">
        <el-button @click="showTravel = false">取 消</el-button>
        <el-button type="primary" @click="upadteIdHolidaTtravel">确 定</el-button>
      </span>
    </el-dialog>
    <!-- 闲置物品 -->
 <el-dialog
      v-if="showIdleZone"
      :title="title"
      :visible.sync="showIdleZone"
      width="60%"
      :before-close="handleClose"
    >
      <EditIdleZone ref="updateIdleZone" :idleZone="idleZone" />

      <span slot="footer" class="dialog-footer">
        <el-button @click="showIdleZone = false">取 消</el-button>
        <el-button type="primary" @click="updateIdleZone">确 定</el-button>
      </span>
    </el-dialog>

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
  components: {
    AddCommunityVegetables,
    EditUser,
    EditAnnouncement,
    EditHousekeepingServices,
    EdittHolidayTravel,
    EditIdleZone

  },
  data() {
    return {
      tableData: [],
      userDate: [],
      IdleZonetableData:[],
      announceDate: [],
      HouservicesData: [],
      HolidayData: [],
      userInfo: {},
      showAddVegetables: false,
      showUser: false,
      showHouse: false,
      showTravel:false,
      showIdleZone:false,
      showAnnouncement: false,
      communityVegetables: {},
      travelTables:{},
      userTables: {},
      idleZone:{},
      houseTables: {},
      editAnnounceTables: {},
      title: '增加商品'
    }
  },
  created() {
    let userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      this.userInfo = JSON.parse(userInfo)
    }
    this.getDataList()
    this.getUserDataList()
    this.getCommunityAnnounceList()
    this.getHousekeepingServicesList()
    this.getHolidaTtravelList()
    this.getIdleZoneList()
  },
  methods: {
    getDataList() {
      let param = {}
      this.$server.getCommunityVegetablesList(param).then(res => {
        if (res.state === 'success') { // 请求成功
          this.tableData = res.data
          this.showAddVegetables = false
        } else {
          this.$message.error('系统异常')
        }
      })
    },
    //  获取用户列表
    getUserDataList() {
      let param = {}
      this.$server.getUserList(param).then(res => {
        if (res.state === 'success') { // 请求成功
          this.userDate = res.data
          this.showAddVegetables = false
        } else {
          this.$message.error('系统异常')
        }
      })
    },
    // 获取闲置物品列表
    getIdleZoneList(){
      let param = {}
      this.$server.getIdleZoneList(param).then(res => {
        if (res.state === 'success') { // 请求成功
          this.IdleZonetableData = res.data
          // this.showAddVegetables = false
        } else {
          this.$message.error('系统异常')
        }
      })
    },


    getCommunityAnnounceList() {
      let param = {}
      this.$server.getCommunityAnnounceList(param).then(res => {
        if (res.state === 'success') { // 请求成功
          this.announceDate = res.data
          // this.showAddVegetables = false
        } else {
          this.$message.error('系统异常')
        }
      })
    },
    getHousekeepingServicesList() {
      let param = {}
      this.$server.getHousekeepingServicesList(param).then(res => {
        if (res.state === 'success') { // 请求成功
          this.HouservicesData = res.data
          // this.showAddVegetables = false
        } else {
          this.$message.error('系统异常')
        }
      })

    },
    getHolidaTtravelList() {
      let param = {}
      this.$server.getHolidaTtravelList(param).then(res => {
        if (res.state === 'success') { // 请求成功
          this.HolidayData = res.data
          // this.showAddVegetables = false
        } else {
          this.$message.error('系统异常')
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
    addVegetables() {
      let param = this.$refs.addCommunityVegetables.getParam()
      param.createPeople = this.userInfo.id
      if (param.id) { // 修改
        this.$server.updateCommunityVegetablesList(param).then(res => {
          if (res.state === 10000) {
            this.$message.success('操作成功')
            this.getDataList()
            this.showAddVegetables = false
          } else {
            this.$message.error('系统异常')
          }
        })
      } else { // 新增
        this.$server.addCommunityVegetables(param).then(res => {
          if (res.state === 'success') { // 请求成功
            this.$message.success('操作成功')
            this.getDataList()
            this.showAddVegetables = false
          } else {
            this.$message.error('系统异常')
          }
        })
      }
    },

    addVegetablesPop() {
      this.title = '增加商品'
      this.showAddVegetables = true
    },
    handleClose() {
      this.showAddVegetables = false
      this.showUser = false
      this.showAnnouncement = false
      this.showHouse = false
      this.showTravel=false
      this.showIdleZone=false
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
    // 删除用户信息
    deleteData(item) {
      let param = { id: item.id }
      this.$server.deleteCommunityVegetablesList(param).then(res => {
        if (res.state === 10000) {
          this.getDataList()
        } else {
          this.$message.error('操作失败')
        }
      })
    },
    // 删除闲置物品信息
    deleteIdleZone(item){
      let param = { id: item.id }
      this.$server.deleteIdleZone(param).then(res => {
        if (res.state === 10000) {
          this.getIdleZoneList()
        } else {
          this.$message.error('操作失败')
        }
      })

    },
    updateData(item) {
      this.title = '修改商品'
      this.communityVegetables = item
      this.showAddVegetables = true
    },
    updateIdleZoneData(item){
      this.title = '修改闲置商品'
      this.idleZone=item
      this.showIdleZone=true
    },

     updatetravelData(item) {
      this.title = '修改出行信息'
      console.log(item)
      this.travelTables = item
      this.showTravel = true
    },

    // 删除用户
    deleteDatauser(item) {
      let param = { id: item.id }
      this.$server.deleteUserByid(param).then(res => {
        if (res.state === 10000) {
          this.getUserDataList()
        } else {
          this.$message.error('操作失败')
        }
      })
    },
    // 删除公告
    deleteDataannounce(item) {
      let param = { id: item.id }
      alert('112')
      this.$server.deleteCommunityAnnounce(param).then(res => {
        if (res.state === 10000) {
          this.getCommunityAnnounceList()
          alert('进入')
        } else {
          this.$message.error('操作失败')
          alert('出去')
        }
      })
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
    },

    updateDatauser(item) {
      this.title = '修改信息'
      this.userTables = item
      this.showUser = true
    },

    updateDatahourse(item) {
      this.title = '修改家政信息'
      this.houseTables = item
      console.log(item)
      this.showHouse = true

    },
    updateDataannounce(item) {
      console.log(item)
      this.title = '修改公告信息'
      this.editAnnounceTables = item
      this.showAnnouncement = true

    },
    // 修改用户信息
    updateUserid() {
      let param = this.$refs.updateUserByid.getParam()
      this.$server.updateByid(param).then(res => {
        if (res.state === 10000) {
          this.$message.success('操作成功')
          this.getUserDataList()
          this.showUser = false
        } else {
          this.$message.error('系统异常')
          console.log(res.state)
        }
      })

    },
    // 修改
     updateIdleZone() {
      let param = this.$refs.updateIdleZone.getParam()
      this.$server.updateIdleZone(param).then(res => {
        if (res.state === 10000) {
          this.$message.success('操作成功')
          this.getIdleZoneList()
          this.showIdleZone = false
        } else {
          this.$message.error('系统异常')
          console.log(res.state)
        }
      })

    },


    
    updateAnnounce() {
      let param = this.$refs.updateCommunityAnnounce.getParam()
      this.$server.updateCommunityAnnounce(param).then(res => {
        if (res.state === 10000) {
          this.$message.success('操作成功')
          this.getCommunityAnnounceList()
          this.showAnnouncement = false
        } else {
          this.$message.error('系统异常')
        }
      })
    },
    upadteIdHousekeepingServices(){
      let param = this.$refs.upadteIdHousekeepingServices.getParam()
      this.$server.upadteIdHousekeepingServices(param).then(res => {
        if (res.state === 10000) {
          this.$message.success('操作成功')
          this.getHousekeepingServicesList()
          this.showHouse = false
        } else {
          this.$message.error('系统异常')
        }
      })
    },
     upadteIdHolidaTtravel(){
      let param = this.$refs.upadteIdHolidaTtravel.getParam()
      this.$server.upadteIdHolidaTtravel(param).then(res => {
        if (res.state === 10000) {
          this.$message.success('操作成功')
          this.getHolidaTtravelList()
          this.showTravel = false
        } else {
          this.$message.error('系统异常')
        }
      })
    }

  }
}
</script>
<style scoped lang="less">
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
            width: 100%;
            text-align: right;
            height: 60px;
            line-height: 60px;
            padding-right: 20px;
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