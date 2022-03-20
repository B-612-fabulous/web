<template>
  <div class="main-content">
    <el-form ref="form" label-width="80px">
      <el-form-item label="服务标题">
        <el-input v-model="userObj.title" placeholder="请输入服务标题" />
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="userObj.phone" placeholder="请输入联系电话" />
      </el-form-item>
      <el-form-item label="价格">
        <el-input v-model="userObj.price" placeholder="请输入服务价格" />
      </el-form-item>
      <el-form-item label="时间">
        <el-input v-model="userObj.dotime" placeholder="请输入服务时间" />
      </el-form-item>
      <el-form-item label="服务地点">
        <el-input v-model="userObj.address" placeholder="请输入服务地点" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'HouseTables',
  props: {
    houseTables: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      userObj: {
        title: '',
        phone: '',
        price: '',
        dotime: '',
        address: ''
      }
    }
  },
  created() {
    if (this.houseTables && this.houseTables.id) { // 修改
      this.userObj = this.houseTables
      console.log("00000000"+this.userObj);
      // console.log("00000000"+this.userTables.id)
    }
  },
  methods: {
    getParam() {
      if (this.houseTables && this.houseTables.id) { // 修改
        this.userObj.id = this.houseTables.id
        console.log("000011"+this.userObj.id);
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
