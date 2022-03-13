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
                      编辑11
                    </el-button>
                    <el-button type="text" size="small" @click="deleteDataannounce(scope.row)">
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
      <EditAnnouncement ref="updateCommunityAnnounce" :edit-tables="editAnnounceTables" />

      <span slot="footer" class="dialog-footer">
        <el-button @click="showAnnouncement = false">取 消</el-button>
        <el-button type="primary" @click="updateAnnounce">确 定</el-button>
      </span>
    </el-dialog>


  </div>
</template>

<script>
import AddCommunityVegetables from '@/components/index/AddCommunityVegetables'
import EditUser from '@/components/indextable/EditUser'
import EditAnnouncement from '@/components/indextable/EditAnnouncement'
export default {
  name: 'Indextable',
  components: {
    AddCommunityVegetables,
    EditUser,
    EditAnnouncement
  },
  data() {
    return {
      tableData: [],
      userDate: [],
      announceDate: [],
      userInfo: {},
      showAddVegetables: false,
      showUser: false,
      showAnnouncement:false,
      communityVegetables: {},
      userTables: {},
      editAnnounceTables:{},
      title: '增加商品'
    }
  },
  created() {
    let userInfo = localStorage.getItem('userInfo')
    if (userInfo) {
      this.userInfo = JSON.parse(userInfo)
    }
    this.getDataList(),
    this.getUserDataList(),
    this.getCommunityAnnounceList()
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
      this.showAnnouncement=false
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
    updateData(item) {
      this.title = '修改商品'
      this.communityVegetables = item
      this.showAddVegetables = true
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
      alert("112")
      this.$server.deleteCommunityAnnounce(param).then(res => {
        if (res.state === 10000) {
          this.getCommunityAnnounceList();
          alert("进入")
        } else {
          this.$message.error('操作失败')
          alert("出去")
        }
      })
    },

    updateDatauser(item) {
      this.title = '修改信息'
      this.userTables = item
      this.showUser = true
    },
    updateDataannounce(item){
      this.title = '修改公告信息'
      this.editAnnounceTables = item
      console.log(this.editAnnounceTables);
      this.showAnnouncement = true

    },
// 修改用户信息
    updateUserid() {
      let param = this.$refs.updateUserByid.getParam()
      // this.axios.post('/updateByid', param)
      //   .then(resp => {
      //     if (resp.data.state === 10000) {
      //       alert('进入')
      //       this.getUserDataList()
      //       this.showUser = false
      //       // this.userDate = resp.data
      //       console.log(this.userInfo)
      //     } else {
      //       this.$message.error('系统异常')
      //       console.log(resp.data.state)
      //     }
      //   })
      this.$server.updateByid(param).then(res => {
        if (res.state === 10000) {
          this.$message.success('操作成功')
          this.getUserDataList()
          this.showUser = false
           console.log(param);
        } else {
          this.$message.error('系统异常')
          console.log(res.state );
        }
      })

    },
    updateAnnounce(){

      let param = this.$refs.updateCommunityAnnounce.getParam()
      alert("1")
      this.$server.updateCommunityAnnounce(param).then(res => {
        if (res.state === 10000) {
          this.$message.success('操作成功')
          this.getCommunityAnnounceList()
          this.showAnnouncement = false
          //  console.log(param);
        } else {
          this.$message.error('系统异常')
          console.log(res.state );
        }
      })

    },

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
