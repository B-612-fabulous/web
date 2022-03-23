<template>
  <div class="main-index">
    <!-- 主体 -->
    <div class="main-body-child">
      <el-carousel :interval="5000" arrow="always">
        <el-carousel-item v-for="item in carouselImg" :key="item.src">
          <img :src="item">
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      carouselImg: [

        require('../../assets/index/lbt1.jpeg'),
        require('../../assets/index/lbt2.jpeg'),
        require('../../assets/index/lbt3.jpeg')

      ]
    }
  },

  methods: {

  }
}
</script>

<style lang="less" scoped>
.el-carousel__item h3 {
    color: #475669;
    font-size: 18px;
    opacity: 0.75;
    line-height: 300px;
    margin: 0;
  }

  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }

  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }

</style>
