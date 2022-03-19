<template>
  <div class="main-content">
    <el-form ref="form" label-width="80px">
      <el-form-item label="出行标题">
        <el-input v-model="userObj.title" placeholder="请输入出行标题" />
      </el-form-item>
      <el-form-item label="联系电话">
        <el-input v-model="userObj.phone" placeholder="请输入联系电话" />
      </el-form-item>
       <el-form-item label="出行地点">
        <el-input v-model="userObj.address" placeholder="请输入服务地点" />
      </el-form-item>
      <el-form-item label="出行价格">
        <el-input v-model="userObj.price" placeholder="请输入出行价格" />
      </el-form-item>
        <el-form-item label="出行描述">
        <el-input v-model="userObj.commodityDesc" placeholder="请输入出行价格" />
      </el-form-item>
      <el-form-item label="时间">
        <el-input v-model="userObj.dotime" placeholder="请输入出行时间" />
      </el-form-item>
     
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'TravelTables',
  props: {
    travelTables: {
      type: Object,
      default: function() {
        return {}
      }
    }
  },
  data() {
    return {
      userObj: {
        title: '123',
        phone: '123',
        price: '',
        commodityDesc:'',
        dotime: '',
        address: ''
      }
    }
  },
  created() {
    if (this.travelTables && this.travelTables.id) { // 修改
      this.userObj = this.travelTables
      console.log("00000000"+this.userObj);
      // console.log("00000000"+this.userTables.id)
    }
  },
  methods: {
    getParam() {
      if (this.travelTables && this.travelTables.id) { // 修改
        this.userObj.id = this.travelTables.id
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
