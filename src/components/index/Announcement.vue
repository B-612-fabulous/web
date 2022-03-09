<template>
  <div class="main-index">
    <!-- 主体 -->
    <div class="main-body-child">
      <div  v-for="(item,index) in dataList" :key="index" class="main-body-child-item">
           <div class="tit">
            {{ item.title }}
           </div>
           <div>
             <span class="tim">{{ item.createDate }}</span>
           </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'Announcement',
  data() {
    return {
          dataList:[{
            title: '公告一',
            createDate: '2022-03-08 17:21:33',
          }],
    }
  },
  created() {
    this.getCommunityAnnounceList()
  },
  methods: {
    getCommunityAnnounceList(){
        let param = {}
      this.$server.getCommunityAnnounceList(param).then(res => {
        if (res.state === 'success') { // 请求成功
          this.dataList = res.data
        } else {
          this.$message.error('系统异常')
        }
      })

    }
  }
}
</script>

<style lang="less" scoped>
 .main-index{
   width: 100%;
   height: 100%;
   position: absolute;
  text-align: center;
  .main-body-box{
    .main-body-child{
      display: flex;
      width: 80%;
      margin-left: 10%;
      .main-body-child-item{
        border: 1px solid #f2f2f2;
        background: #fff;
        width: 200px;
        // line-height: 60px;
        height: 80px;
        margin-top: 10px;
        border-radius: 8px;
        border: 1px solid rgba(233, 233, 233, 1);
        box-shadow: 0px 0px 4px rgb(0 0 0 / 15%);
        text-align: left;
         .tit{
              margin-top: 10px;
              margin-bottom: 15px;
              margin-left: 10px;
 }
          .tim{
              margin-top: 10px;
              margin-bottom: 15px;
              margin-left: 10px;
          }
         }

      .main-body-child-item:hover{
        border: 1px solid #1abc9c;
      }
    }
  }
 }

</style>
