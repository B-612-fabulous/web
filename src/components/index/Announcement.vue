<template>
  <div class="main-index">
    <!-- 主体 -->
     <input type="text" class="input-box" placeholder="请输入求助关键词" v-model="keyword">
     <!-- <el-button class="searchbtn" @click="search">搜索</el-button> -->
     <button class="search-input-btn" @click="search" >
              搜寻求助
              <span class="hot">HOT</span>
            </button>
    <div class="main-body-child">
      <div v-for="(item,index) in agentlisttwo" :key="index" class="main-body-child-item" @click="jumpAnnouncementDetail(item)">
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
      keyword:'',
      agentlisttwo:'',
      dataList: [{
        title: '',
        createDate: ''
      }]
    }
  },
  created() {
    this.getCommunityAnnounceList()
  },

  methods: {
    getCommunityAnnounceList() {
      let param = {}
      this.$server.getCommunityAnnounceList(param).then(res => {
        if (res.state === 'success') { // 请求成功
          this.dataList = res.data
          this.agentlisttwo=this.dataList
          console.log(this.dataList);

          console.log(res.data);
        } else {
          this.$message.error('系统异常')
        }
      })

    },
    jumpAnnouncementDetail(obj) {
      let routerJump = this.$router.resolve({ path: '/showAnnouncement',
        query: { param: JSON.stringify(obj)
        }})
      window.open(routerJump.href, '_blank')
    },
    search(){
                //搜索
                alert("faff")
                var keyword = this.keyword;
                if (keyword) {
                        this.agentlisttwo =  this.dataList.filter(function(dataList) {
                            return Object.keys(dataList).some(function(key) {
                                return String(dataList[key]).toLowerCase().indexOf(keyword) > -1
                            })
                        })
                }else{
                    this.agentlisttwo =  this.dataList;
                }
            },
  }
}
</script>

<style lang="less" scoped>

       
.search-input-btn{
                    float: left;
                    margin-top: -117px;
                    margin-left: 1010px;
                    background-color: #1abc9c;
                    background-size: 100% 100%;
                    display: inline-block;
                    vertical-align: middle;
                    line-height: 48px;
                    width: 160px;
                    font-size: 18px;
                    color: #fff;
                    padding-left: 49px;
                    text-align: left;
                    position: relative;
                    cursor: pointer;
                    overflow: visible;
                    border-top-right-radius: 24px;
                    border-bottom-right-radius: 24px;
                    border: none;
                    height: 52px;
}
.hot{
                        width: 36px;
                        height: 20px;
                        background: #ff4d4f;
                        border-radius: 2px;
                        font-size: 14px;
                        font-family: DINPro;
                        font-weight: 400;
                        color: #fff;
                        line-height: 20px;
                        text-align: center;
                        position: absolute;
                        right: -10px;
                        top: -10px;
                    }
                    .hot:after{
                          content: "";
                          width: 0;
                          height: 0;
                          border: 2px solid #ff4d4f;
                          border-right-color: rgba(0,0,0,0);
                          border-bottom-color: rgba(0,0,0,0);
                          position: absolute;
                          left: 6px;
                          bottom: 0;
                          -webkit-transform: translateY(100%);
                          -ms-transform: translateY(100%);
                          transform: translateY(100%);
                    }
.input-box{

  float: left;
    margin-top: -117px;
    margin-left: 327px;
                      width: 43%;
                      height: 48px;
                      background: #fff;
                      border: 2px solid #1abc9c;
                      padding: 0 15px;
                      font-size: 14px;
                      border-top-left-radius: 24px;
                      border-bottom-left-radius: 24px;             

}

 .main-index{
   width: 100%;
   height: 100%;
   position: absolute;
  text-align: center;
  .main-body-box{
    .main-body-child{
      flex-wrap: wrap;
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
        cursor: pointer;
        margin-right: 10px;
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
