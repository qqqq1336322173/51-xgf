<template>
  <div class="appLogin">
    <!-- 头部 -->
    <appLoginHeader></appLoginHeader>
    <div class="appLogin-content">
      <img class="img51"
           src="@/assets/img/app/login/img01.png"
           alt />
      <div class="login-form">
        <div class="nav">
          <p @click="selectLogin(1)"
             :class="[loginType == 1 ? 'p-click' : '']">
            普通登录
          </p>
          <p @click="selectLogin(2)"
             :class="[loginType == 2 ? 'p-click' : '']">
            验证码登录
          </p>
        </div>
        <mt-field class="input-1 m-top-70"
                  :state="phoneNumState"
                  type="number"
                  v-model.trim="phoneNum"
                  placeholder="请输入您的手机号"></mt-field>
        <!-- <input class="input-1 m-top-70"
               type="text"
               placeholder="请输入登入邮箱、手机号" /> -->
        <!-- <input v-show="loginType == 1"
               class="input-1 m-top-60"
               type="text"
               placeholder="密码不能少于六位" /> -->
        <mt-field v-show="loginType == 1"
                  class="input-1 m-top-60"
                  :state="passwordState"
                  type="password"
                  v-model.trim="password"
                  placeholder="密码:不能少于6位"></mt-field>
        <div class="input-box"
             v-show="loginType != 1">
          <mt-field class="input-2"
                    placeholder="验证码"
                    type="number"
                    v-model.trim="code"
                    :state="codeState">
          </mt-field>
          <!-- <input class="input-2"
                 type="number"
                 placeholder="手机验证码" /> -->
          <span class="btn"
                @click.stop="sendCode">{{ codeStr }}</span>
          <!-- <button class="btn">获取验证码</button> -->
        </div>
        <div class="login">
          <mt-button type="danger"
                     size="large"
                     @click.native.prevent="loginSubmit">登 录</mt-button>
        </div>
        <div class="forgetPassword">
          <router-link :to="{ name: 'appChangePassword' }">
            <span>忘记密码?</span>
          </router-link>
        </div>
      </div>
    </div>
    <mt-popup v-model.trim="popupVisible"
              position="center">
      {{ msg }}
    </mt-popup>
  </div>
</template>
<script>
import appLoginHeader from "@/components/header/app/appLoginHeader";
import httpServer from "@/assets/js/httpServer";
import Vue from "vue";
import { Popup, Field } from "mint-ui";
import storage from "@/assets/js/storage";
// import { Field } from 'mint-ui';
Vue.component(Popup.name, Popup);
Vue.component(Field.name, Field);
export default {
  layout: "appBlank",
  name: "appLogin",
  components: { appLoginHeader },
  data: function () {
    return {
      flag: true,
      title: "登 录",
      loginType: 1,
      codeStr: "获取验证码",
      phoneNumState: "",
      passwordState: "",
      codeState: "",
      phoneNum: "", //手机号
      code: "", //验证码
      password: "", //密码
      msg_code: false, //返回的验证码
      code_flag: false, //发送验证码的开关
      url: this.$store.state.serverUrl.serverUrl, //服务器地址
      msg: "",
      popupVisible: false,
    };
  },
  created () {
    this.$store.state.nav.flag = false;
    console.log(this.$store.state.indexChild.lastIndex);
    //判断是否是手机端
    if (this.isMobile) {
      this.$router.push("/appLogin");
    } else {
      this.$router.push("/pcLogin");
    }
  },
  methods: {
    // 切换
    toggle () {
      this.title = this.flag ? "注 册" : "登 录";
      this.flag = !this.flag;
    },
    //切换登录方式
    selectLogin (type) {
      this.loginType = type;
    },
    //获取验证码
    sendCode () {
      //如果开关是开着的
      if (this.code_flag) {
        // this.codeStr = "获取验证码"
        return false;
      }
      //10s后可以继续发送
      if (!/^1[3456789]\d{9}$/.test(this.phoneNum)) {
        this.phoneNumState = "error";
        return false;
      }
      this.phoneNumState = "success";
      this.codeStr = "发送成功";
      this.code_flag = true; //开关打开
      setTimeout(() => {
        this.code_flag = false; //10s后开关关掉
        this.codeStr = "获取验证码";
      }, 10000);
      //2是发送登录的验证码 3是发送忘记密码的验证码
      this.getCode(this.phoneNum, 2);
    },
    //发送一次后要60s后才能再发送
    getCode (phone, type) {
      let url = this.url + "user/getCode.action";
      httpServer(
        {
          url,
          method: "get",
        },
        {
          phone,
          type,
        }
      )
        .then((res) => {
          res = res.data;
          let { returnstatus, returnmessage } = res;
          if (returnstatus == "1") {
            this.popupVisible = true;
            this.msg = returnmessage;
            // MessageBox(returnmessage, "提示", {
            //   confirmButtonText: "确定",
            //   type: "error"
            // });
            return false;
          }
          //成功后才把按钮打开
          this.msg_code = true;
        })
        .catch((err) => {
          this.popupVisible = true;
          this.msg = err;
          // MessageBox(err, "提示", {
          //   confirmButtonText: "确定",
          //   type: "error"
          // });
        });
    },
    //登录账号
    loginSubmit () {
      /*
      1.假如是用户名和密码的登录
      */
      if (1 == this.loginType) {
        // console.log(this.phoneNumState)
        if (
          this.phoneNumState != "success" ||
          this.passwordState != "success"
        ) {
          this.popupVisible = true;
          this.msg = "信息不完整";
          // console.log(1)
          return false;
        }
        let url = this.url + "user/userLogin.action",
          data = {};
        data = { phone: this.phoneNum, password: this.password };
        this.loginAjax(data, url);
      }
      if (2 == this.loginType) {
        //先发送验证码
        if (!this.msg_code) {
          this.popupVisible = true;
          this.msg = "请先发送验证码";
          return false;
        }
        if (this.phoneNumState != "success" || this.codeState != "success") {
          this.popupVisible = true;
          this.msg = "信息不完整";
          // console.log(1)
          return false;
        }
        let url = this.url + "user/userLogin.action",
          data = {};
        data = { phone: this.phoneNum, code: this.code };
        this.loginAjax(data, url);
      }
    },
    //发起ajax
    loginAjax (data, url) {
      console.log(data);
      httpServer(
        {
          url,
          method: "get",
        },
        data
      )
        .then((res) => {
          res = res.data;
          let { returnstatus, returnmessage } = res;
          if (returnstatus == "0") {
            this.popupVisible = true;
            this.msg = "登录成功";
            //登录成功
            let { user } = res;
            sessionStorage.userid = user.id;
            sessionStorage.username = user.telphone;
            storage.set("user", JSON.stringify(user));
            //  this.$store.state.tabbar.active_id = "oracle"
            // // this.$store.commit("userInfo/RECORD_USER_INFO", storage.get("user"));
            // console.log(this)
            // return false;
            // console.log(this.$store.serverUrl.userInfo)
            // return false;
            /*
            不是购买商品的要跳转到首页，
            如果是购买商品的登录要跳转到订单页面
            */
            // return false;
            setTimeout(() => {
              if (this.productid) {
                // location.href = "/order?productid=" + this.productid;
                this.$router.push({
                  path: "/appOrder",
                  query: { productid: this.productid },
                });
              } else {
                this.$store.state.tabbar.active_id = "index";
                this.$router.push("/test?index&login=1");
                // location.reload();
                // console.log(1)
                // this.$router.replace({ path: "/supplierAllBack", name: 'supplierAllBack' });
              }
            }, 3000);
            return false;
          } else {
            this.popupVisible = true;
            this.msg = returnmessage;
            // MessageBox(returnmessage, "提示", {
            //   confirmButtonText: "确定",
            //   type: "error"
            // });
            return false;
          }
        })
        .catch((err) => err);
    },
  },
  //监听
  watch: {
    phoneNum () {
      // console.log(1)
      if (!/^1[3456789]\d{9}$/.test(this.phoneNum)) {
        this.phoneNumState = "error";
      } else {
        this.phoneNumState = "success";
      }
    },
    code () {
      // console.log(1)
      if (!this.code) {
        this.codeState = "error";
      } else {
        this.codeState = "success";
      }
    },
    password () {
      // console.log(1)
      if (!this.password) {
        this.passwordState = "error";
      } else {
        this.passwordState = "success";
      }
    },
    // $route (to, from) {
    //   location.reload();
    // }
  },
};
</script>
<style lang="scss" scoped>
// @import url(@/assets/css/pop.css);
body {
  background-color: #fff;
}
.appLogin {
  * {
    margin: 0;
    padding: 0;
  }

  .mint-header {
    background-color: #fff;
    color: #333;
    font-size: 0.514286rem;
  }
  .register {
    color: #ea4e2b !important;
    font-size: 0.373333rem !important;
  }
  .mintui {
    font-family: "mintui" !important;
    font-size: 0.5rem;
    padding: 12px;
  }
  .appLogin-content {
    padding-top: 1.428571rem;
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    justify-content: center;
    flex-wrap: wrap;
    box-sizing: border-box;
    .img51 {
      width: 5.428571rem;
      height: 1.333333rem;
    }
    input::-webkit-input-placeholder {
      color: #bebebe;
    }
    .login-form {
      width: 7.4rem;

      .nav {
        font-size: 0.4rem;
        border-bottom: 1px solid #e3e3e3;
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        padding-top: 0.933333rem;
        color: #666666;

        p {
          padding: 0.266667rem 0.133333rem;
          margin-right: 0.266667rem;
        }
        .p-click {
          border-bottom: 2px solid #ff2929;
          color: #ff2929;
        }
      }
      .m-top-70 {
        margin-top: 1rem;
      }
      .m-top-60 {
        margin-top: 0.857143rem;
      }
      .input-1 {
        width: 100%;
        border: none;
        height: 1.066667rem;
        padding-left: 0.533333rem;
        padding-right: 0.533333rem;
        box-sizing: border-box;
        font-size: 0.4rem;
        border: 1px solid #e3e3e3;
        border-radius: 1rem;
        overflow: hidden;
        outline: medium;
      }
      .input-box {
        border: 1px solid #e3e3e3;
        border-radius: 1rem;
        overflow: hidden;
        padding-left: 0.533333rem;
        padding-right: 0.533333rem;
        box-sizing: border-box;
        margin-top: 0.857143rem;
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        justify-content: space-between;
        align-items: center;
        height: 1.28rem;

        .input-2 {
          border: none;
          height: 1.066667rem;
          font-size: 0.4rem;
          outline: medium;
          position: relative;
          width: 4rem;
        }

        .btn {
          border: none;
          outline: none;
          background-color: #fff;
          color: #5299e4;
          margin-top: 0.133333rem;
          margin-bottom: 0.133333rem;
          padding-left: 0.333333rem;
          border-left: 1px solid #e7e7e7;
          white-space: nowrap;
        }
        .btn:active {
          color: #3f5266;
        }

        .mint-button--default {
          color: #5397e4;
          font-size: 0.342857rem;
          background-color: #fff;
          box-shadow: none;
        }
      }
      .login {
        margin-top: 0.857143rem;
        .mint-button--danger {
          color: #fff;
          background-color: #ff2929;
        }
        .mint-button {
          border-radius: 0.4rem;
        }
      }
      .forgetPassword {
        text-decoration: none;
        font-size: 0.371429rem;
        color: #bebebe;
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        justify-content: flex-end;
        align-items: center;
        line-height: 3;
      }
    }
  }
}
</style>
<style lang="scss">
.appLogin {
  .mint-popup,
  .mint-popup-center {
    padding: 0.266667rem;
    font-size: 0.333333rem;
    font-weight: 700;
    border-radius: 0.133333rem;
  }
}
</style>