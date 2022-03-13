<template>
  <div class="main-content">
    <el-form ref="form" label-width="80px">
      <el-form-item label="标题">
        <el-input v-model="announceObj.title" placeholder="请输入标题" />
      </el-form-item>

      <el-form-item label="内容">
        <el-input v-model="announceObj.announcement" type="textarea" rows="3" placeholder="请输入内容" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'EditAnnouncetables',
  props: {
    editAnnounceTables: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      announceObj: {
        title: '',
        announcement: ''
      }
    }
  },
  created() {
    if (this.editAnnounceTables && this.editAnnounceTables.id) { // 修改
      this.announceObj = this.editAnnounceTables
    }
  },
  methods: {
    getParam() {
      if (this.editAnnounceTables && this.editAnnounceTables.id) { // 修改
        this.announceObj.id = this.editAnnounceTables.id
      }
      return this.announceObj
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
