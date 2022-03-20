<template>
  <div class="main-content">
    <el-form ref="form" label-width="80px">

      <el-form-item label="商品描述">
        <el-input v-model="idleZoneObj.commodityDesc" type="textarea" rows="3" placeholder="请输入商品描述" />
      </el-form-item>

      <el-form-item label="商品价格">
        <el-input v-model="idleZoneObj.price" placeholder="请输入商品价格" />
      </el-form-item>
      <el-form-item label="商品封面">
        <el-upload
          class="avatar-uploader"
          action="http://localhost:8888/upload"
          :show-file-list="false"
          :on-success="handleAvatarSuccess"
          :before-upload="beforeAvatarUpload"
        >
          <img v-if="idleZoneObj.showFmImg" :src="idleZoneObj.showFmImg" class="avatar">
          <i v-else class="el-icon-plus avatar-uploader-icon" />
        </el-upload>
      </el-form-item>
   
    
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'IdleZone',
  props: {
    idleZone: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      idleZoneObj: {
        price: '',
        fmImg: '',
        commodityDesc: '',
        showFmImg: ''
      },
    }
  },
  created() {
    if (this.idleZone && this.idleZone.id) { // 修改
      this.idleZoneObj = this.idleZone
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      let host = 'http://localhost:8888'
      this.idleZoneObj.fmImg = '/download/image?filePath=' + res.data
      this.idleZoneObj.showFmImg = host + '/download/image?filePath=' + res.data
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
      if (this.idleZone && this.idleZone.id) { // 修改
        this.idleZoneObj.id = this.idleZone.id
      }
      return this.idleZoneObj
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
