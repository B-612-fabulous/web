<template>
  <el-table
      :data="tableData"
      border
      style="width: 100%">
      <el-table-column
        prop="createDate"
        label="日期"
        width="180">
      </el-table-column>
      <el-table-column
        prop="title"
        label="标题"
        width="180">
      </el-table-column>
      <el-table-column
        prop="price"
        label="价格"
        width="180">
      </el-table-column>

      <el-table-column
        prop="fmImg"
        label="图片"
        width="180">
      </el-table-column>
      <el-table-column
        prop="preferentialRules"
        label="秒杀规则"
        width="180">
      </el-table-column>

      <el-table-column
        prop="commodityDesc"
        label="商品描述"
        width="180">
      </el-table-column>

      <el-table-column
        prop="address"
        label="地址">
        <template slot-scope="scope">
        <el-button @click="handleClick(scope.row)" type="text" size="small">移除</el-button>
        <el-button type="text" size="small">编辑</el-button>
      </template>
      </el-table-column>
    </el-table>
</template>

<script>
export default {
  name:"Indextable0",
     
      data() {
        return {
          tableData: [ {
            createDate: '2016-05-04',
            title: '王小虎',
            price:'18',
            fmImg:' ',
            preferentialRules:'限时秒杀',
            commodityDesc:'好吃不贵，不吃浪费',
            address: '上海市普陀区金沙江路 1517 弄'
          },
          ]
        }
      },

  methods: {

    // register() {
    //   this.$server.userLogin(this.loginForm).then(res => {
    //     if (res.state === 'success') { // 请求成功
    //       if (res.code === 10000) { // 请求成功
    //         localStorage.setItem('userInfo', JSON.stringify(res.data))
    //         this.$router.push('/login')
    //       } else {
    //         this.$message.error(res.data.msg)
    //       }
    //     } else {
    //       this.$message.error('系统异常')
    //     }
    //   })
    // },

    // jumpLogin() {
    //   this.$router.push('/login')
    // }
  }
}
</script>

