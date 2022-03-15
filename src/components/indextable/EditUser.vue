<template>
  <div class="main-content">
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="userObj.userName" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="用户密码">
        <el-input v-model="userObj.passWord" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item label="用户头像">
        <el-upload
          class="avatar-uploader"
          action="http://localhost:8888/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="userObj.showpic" :src="userObj.showpic" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="userObj.phone" placeholder="请输入手机号" />
      </el-form-item>

      <el-form-item label="地址">
        <el-input v-model="userObj.address" placeholder="请输入地址" />
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input v-model="userObj.trueName" placeholder="请输入真实姓名" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Usertables',
  props: {
    userTables: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      userObj: {
        userName: '123',
        passWord: '123',
        pic: '',
        phone: '',
        address: '',
        showpic: '',
        trueName: ''
      }
    }
  },
  created() {
    if (this.userTables && this.userTables.id) { // 修改
      this.userObj = this.userTables
      console.log('00000000' + this.userObj)
      // console.log("00000000"+this.userTables.id)
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      let host = 'http://localhost:8888'
      this.userObj.pic = '/download/image?filePath=' + res.data
      this.userObj.showpic = host + '/download/image?filePath=' + res.data
    },
    beforeAvatarUpload(file) {
      // const isJPG = file.type === 'image/jpeg'
      // const isLt2M = file.size / 1024 / 1024 < 2

      // if (!isJPG) {
      //   this.$message.error('上传头像图片只能是 JPG 格式!')
      // }
      // if (!isLt2M) {
      //   this.$message.error('上传头像图片大小不能超过 2MB!')
      // }
      // return isJPG && isLt2M
    },
    getParam() {
      if (this.userTables && this.userTables.id) { // 修改
        this.userObj.id = this.userTables.id
        console.log('000011' + this.userObj.id)
      }
      return this.userObj
    }
  }
}
</script>

<style lang="less" scoped>
.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }
  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }
</style>
