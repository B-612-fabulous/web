<template>
  <div id="ht">
    <div class="main">
      <div class="logoT">
        <div class="spacer4" />
        <a id="logod" href="" />
        <p>欢迎注册</p>
      </div>
      <div class="htHotLine hotline_400">
        已有账号  <span><a href="">登入</a></span>
      </div>
    </div>
    <div class="container">
      <div class="foin">
        <!-- 输入登录 开始 --><div id="loginWrapInput" class="loginWrap">
          <div class="loginTop">
            <div class="loginTypes">
              账号密码注册
            </div>
          </div>
          <div id="loginAccountPwd" class="loginModule">
            <!-- 表格 -->
            <form id="loginFrm" name="loginFrm" method="post" autocomplete="off">
              <div class="loginBody">
                <div class="loginInput">
                  <div class="item loginUser">
                    <input id="loginName" name="username" type="text" placeholder="请输入注册号" data-text="请输入注册号" autocomplete="off" value="">
                  </div>
                  <div class="item loginPwd">
                    <input id="loginPwd" name="password" type="password" placeholder="请输入密码" data-text="请输入密码" autocomplete="off" value="">
                  </div>

                  <a href="javascript:void(0);" class="loginBtn">注&nbsp;册</a>
                </div>
              </div>
            </form>  <!-- 表格结束 -->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Register',
  data() {
    // return {
    //   loginForm: {
    //     username: 'admin',
    //     password: '123'
    //   },
    //   responseResult: []
    // }
  },
  methods: {
    // login() {
    //   var _this = this
    //   this.$axios
    //     .post('/login', {
    //       username: this.loginForm.username,
    //       password: this.loginForm.password
    //     })
    //     .then(successResponse => {
    //       if (successResponse.data.code === 200) {
    //         // var data = this.loginForm
    //         _this.$store.commit('login', _this.loginForm)
    //         var path = this.$route.query.redirect
    //         this.$router.replace({
    //           path: path === '/' || path === undefined ? '/index' : path
    //         })
    //       }
    //     }).catch(failResponse => {})
    // }
  }
}
</script>

<style lang="less" scoped>
#ht {
      width: 100%;
    height: 100%;
    background: url("../../assets/register/regbgc.png") no-repeat;
    background-size: cover;
    background-position: center center;
    position: relative;
    overflow: auto;
    }
     #ht .main {
    width: 1190px;
    height: 110px;
    margin: auto;
}
    #logod {
     background: url("../../assets/register/logo.png") no-repeat left center;
    background-size: contain;
    float: left;
    width: 120px;
    height: 87px;
    cursor: pointer;
}
.logoT p {
    margin-left: 20px;
    font-size: 16px;
    font-family: "Microsoft Yahei","Helvetica Neue", Helvetica, Arial,Tahoma,sans-serif;
    line-height: 55px;
    font-weight: 500;
}

.logoT {
  margin-left: 20px;
    margin-top: 10px;
    display: flex;
    float: left;
    color: #6c6e71;
}
#ht .htHotLine {
  margin-right: 20px;
    float: right;
    padding-top: 40px;
    font-size: 14px;
    color: #11BB99;
}
.container {
    width: 1200px;
    height: auto;
    margin: 0 auto;
    margin-top: 85px;
    margin-bottom: 288px;
}
.foin {
    flex: 1;
    padding: 0 255px;
    position: relative;
    /* background-color: pink; */
    width: 500px;
    height: 500px;
}
.loginWrap, .loginWrap * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.loginWrap, .loginWrap * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.loginWrap {
    position: relative;
    float: right;
    width: 380px;
    /* min-height: 460px; */
    background-color: #fff;
    overflow: hidden;
}
.loginWrap .loginTop {
    position: relative;
    padding: 6px;
    height: 74px;
    border-bottom: 2px solid #e6e6e6;
}
.loginTypes {
    font-size: 24px;
    text-align: center;
}
.loginWrap .loginBody {
    position: relative;
    min-height: 302px;
}
.loginWrap .loginInput {
    padding: 40px 30px 20px;
}
#loginAccountPwd .loginBody .loginInput .item {
    position: relative;
}
#loginAccountPwd .loginBody .loginInput .item {
    position: relative;
}
.loginInput .item {
    height: 44px;
    border: 1px solid #e6e6e6;
    overflow: hidden;
}
#loginAccountPwd .loginBody .loginInput .item input {
    position: absolute;
    left: 44px;
    right: 0;
}
#loginAccountPwd .loginBody .loginInput .item input {
    position: absolute;
    left: 44px;
    right: 0;
}
.loginInput input {
    padding: 10px 6px 10px 10px;
    width: 275px;
    height: 100%;
    border: none;
    outline: none;
    font-size: 14px;
    line-height: 14px;
    color: #555;
}

.loginWrap .loginBtn {
    display: block;
    margin-top: 20px;
    width: 100%;
    height: 44px;
    line-height: 44px;
    font-size: 20px;
    color: #fff;
    text-align: center;
    text-decoration: none;
    background-color: #ff6600;
    -webkit-border-radius: 22px;
    -moz-border-radius: 22px;
    border-radius: 22px;
}
.loginWrap, .loginWrap * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.loginWrap, .loginWrap * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
a:-webkit-any-link {
    color: -webkit-link;
    cursor: pointer;
    text-decoration: underline;
}
#loginWrapInput{
  border-radius: 15px;
}
</style>
