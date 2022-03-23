<template>
  <div id="ht">
    <div class="main">
      <div class="logoT">
        <div class="spacer4" />
        <a id="logod" />
      </div>
      <div class="htHotLine hotline_400">
        咨询热线：<span>4001234567</span>
      </div>
    </div>
    <!-- //中间 -->
    <div class="w1920 loginCont">
      <div class="w1190 clearfix loginInner">
        <div class="clearfix loginWrapCommon">
          <!-- 输入登录 开始 --><div id="loginWrapInput" class="loginWrap">
            <div class="loginTop">
              <div class="loginTypes">
                账号密码登入
              </div>
            </div>
            <div class="loginModule">
              <!-- 表格 -->
              <div class="loginBody">
                <div class="loginInput">
                  <div class="item loginUser">
                    <input id="loginName" v-model="loginForm.userName" type="text" placeholder="请输入帐号" autocomplete="off" value="">
                  </div>
                  <div class="item loginPwd">
                    <input id="loginPwd" v-model="loginForm.passWord" type="password" placeholder="请输入密码" autocomplete="off" value="">
                  </div>
                  <div class="forgetPwd">
                    <a id="forget" @click="jumpForget">忘记密码</a>
                  </div>
                  <button class="loginBtn" @click="login">
                    登录
                  </button>
                </div>
              </div>
              <div class="loginFoot">
                <div class="item2">
                  <a id="registerUrl1" @click="jumpRegister">注册账号</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data() {
    return {
      loginForm: {
        userName: '',
        passWord: ''
      },
      responseResult: []
    }
  },
  methods: {
    login() {
      this.$server.userLogin(this.loginForm).then(res => {
        if (res.state === 'success') { // 请求成功
          if (res.code === 10000) { // 请求成功
            localStorage.setItem('userInfo', JSON.stringify(res.data))
            if (res.data.id === 1) { // 管理员登录
              this.$router.push('/Indextable')
              this.$message.success('登录成功')
            } else { // 非管理员登录
              this.$router.push('/index')
              this.$message.success('登录成功')
            }
          } else {
            // this.$message.error(res.data.msg)
            this.$message.error('账号密码错误')
          }
        } else {
          alert("账号密码错误")

          this.$message.error('系统异常')
        }
      })
    },
    jumpRegister() {
      this.$router.push('/register')
    },
    jumpForget() {
      this.$router.push('/ForgetPassword')
    }

  }
}
</script>

<style lang="less" scoped>
#ht .main {
    width: 1190px;
    height: 110px;
    margin: auto;
}
#logod {
    background: url("../../assets/login/logo1.png") no-repeat left center;
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
    font-size: 24px;
    color: #11BB99;
}
.loginCont {
    padding-top: 38px;
    padding-bottom: 12px;
    background: url("../../assets/login/loginbg210115.jpg") no-repeat top center;
    background-size: cover;
}
.w1920 {
  height: 500px;
    width: 100%;
    max-width: 1920px;
    min-width: 1190px;
    margin: 0 auto;
}
.loginCont .loginInner {
    min-height: 480px;
}
.w1190 {
    width: 1190px;
    margin: auto;
}
.loginWrap {
    position: relative;
    float: right;
    width: 380px;
    /* min-height: 460px; */
    background-color: #fff;
    overflow: hidden;
}
.loginWrap, .loginWrap * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.loginWrap .loginTop {
    position: relative;
    height: 74px;
    line-height: 74px;
    border-bottom: 2px solid #e6e6e6;
}
.loginWrap, .loginWrap * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.loginTypes{
  font-size: 24px;
  text-align: center;
}
.loginWrap .loginBody {
    position: relative;
    min-height: 302px;
}
.loginWrap .loginInput  {
    padding: 40px 30px 20px;
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
#loginAccountPwd .loginBody .loginInput .item {
    position: relative;
}
.loginInput .loginPwd {
    margin-top: 20px;
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
.forgetPwd a {
    color: #0088ee;
    text-decoration: none;
    font-size: 14px;
    line-height: 14px;
    margin-top: 24px;
}
.loginWrap .loginBtn {
    display: block;
    margin-top: 60px;
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
    outline: none;
    border: none;
    cursor: pointer;
}
.loginWrap .loginFoot {
    padding: 19px 20px 0 30px;
    height: 84px;
    background-color: #fcfcfc;
    border-top: 1px solid #F4F4F4;
    overflow: hidden;
}
.loginFoot .item2 a {
    color: #0088ee;
    text-decoration: none;
    float: right;
    cursor: pointer;
}
#forget{
  float: right;
}
#loginWrapInput{
  border-radius: 15px;
}
#loginWrapInput{
  border-radius: 15px;
}
</style>
