<template>
  <div id="ht">
    <div class="main">
      <div class="logoT">
        <div class="spacer4" />
        <a id="logod" href="" />
        <p>忘记密码</p>
      </div>
      <div class="htHotLine hotline_400">
        已有账号  <span><a href="" @click="jumpLogin">登入</a></span>
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
            <div class="loginBody">
              <div class="loginInput">
                <div class="item loginUser">
                  <input id="loginphone" v-model="loginForm.trueName" type="text" placeholder="请输入真实姓名" autocomplete="off">
                </div>
                <div class="item loginUser">
                  <input id="loginphone" v-model="loginForm.phone" type="text" placeholder="请输入手机号" autocomplete="off">
                </div>
                <div class="item loginUser">
                  <input id="loginName" v-model="loginForm.userName" type="text" placeholder="请输入帐号" autocomplete="off">
                </div>
                <div class="item loginPwd">
                  <input id="loginPwd" v-model="loginForm.passWord" type="password" placeholder="请输入新密码" autocomplete="off">
                </div>
                <button class="loginBtn" @click="register">
                  确&nbsp;定
                </button>
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
  name: 'Register',
  data() {
    return {
      loginForm: {
        phone: '',
        username: '',
        password: ''
      },
    }
  },
  methods: {
    register() {
      this.$server.addUser(this.loginForm).then(res => {
        if (res.state === 'success') { // 请求成功
          this.$message.success('注册成功,请登录!')
          this.$router.push('/login')
        } else {
          this.$message.error(res.data.msg)
        }
      })
    },

    jumpLogin() {
      this.$router.push('/login')
    }
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
     background: url("../../assets/register/logo1.png") no-repeat left center;
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
    margin-top: 8px;
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
    border: none;
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
