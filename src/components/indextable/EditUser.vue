<template>
  <div class="main-content">
    <el-form ref="form" label-width="80px">
      <el-form-item label="用户名">
        <el-input v-model="commodityObj.userName" placeholder="请输入用户名" />
      </el-form-item>
      <el-form-item label="用户密码">
        <el-input v-model="commodityObj.passWord" placeholder="请输入密码" />
      </el-form-item>
      <el-form-item label="商品封面">
        <el-upload
          class="avatar-uploader"
          action="http://localhost:8888/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="commodityObj.showFmImg" :src="commodityObj.showFmImg" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>
      <el-form-item label="手机号">
        <el-input v-model="commodityObj.phone"  placeholder="请输入手机号" />
      </el-form-item>
    
      <el-form-item label="地址">
        <el-input v-model="commodityObj.address"  placeholder="请输入地址" />
      </el-form-item>
      <el-form-item label="真实姓名">
        <el-input v-model="commodityObj.trueName" placeholder="请输入真实姓名" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'CommunityVegetables',
  props: {
    usertables: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      commodityObj: {
        userName: '',
        passWord: '',
        pic: '',
        phone: '',
        address: '',
        showpic: '',
        trueName:''
      },
      
    }
  },
  created() {
    if (this.usertables && this.usertables.id) { // 修改
      this.commodityObj = this.usertables
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      let host = 'http://localhost:8888'
      this.commodityObj.pic = '/download/image?filePath=' + res.data
      this.commodityObj.showpic = host + '/download/image?filePath=' + res.data
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
      if (this.usertables && this.usertables.id) { // 修改
        this.commodityObj.id = this.usertables.id
      }
     
      return this.commodityObj
    },
 
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
