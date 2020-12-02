<template>
  <div class="appChangePassword">
    <!-- 头部 -->
    <appChangePasswordHeader></appChangePasswordHeader>
    <div class="appChangePassword-content">
      <img class="img51"
           src="@/assets/img/app/login/img01.png"
           alt />
      <div class="login-form">
        <mt-field class="input-1 m-top-70"
                  :state="phoneNumState"
                  type="number"
                  v-model.trim="phoneNum"
                  placeholder="请输入您的手机号"></mt-field>
        <!-- <input class="input-1 m-top-70"
               type="text"
               placeholder="请输入登入邮箱、手机号" /> -->
        <div class="input-box">
          <mt-field class="input-2"
                    placeholder="验证码"
                    type="number"
                    v-model.trim="code"
                    :state="codeState">
          </mt-field>
          <span class="btn"
                @click.stop="sendCode">{{ codeStr }}</span>
          <!-- <input class="input-2"
                 type="number"
                 placeholder="手机验证码" /> -->
          <!-- <button class="btn">获取验证码</button> -->
        </div>
        <!-- <input class="input-1 m-top-60"
               type="text"
               placeholder="密码不能少于六位" /> -->
        <mt-field class="input-1 m-top-60"
                  :state="passwordState"
                  type="password"
                  v-model.trim="password"
                  placeholder="密码:不能少于6位"></mt-field>
        <div class="login">
          <mt-button type="danger"
                     size="large"
                     @click.native.prevent="resetPasswordSubmit">重设密码</mt-button>
        </div>
        <div class="forgetPassword">
          <span>遇到问题？</span>
          <a class="c-ff2929"
             href="tel:13764567708">联系客服</a>
        </div>
      </div>
    </div>
    <mt-popup v-model.trim="popupVisible"
              position="bottom">
      {{msg}}
    </mt-popup>
  </div>
</template>
<script>
import httpServer from "@/assets/js/httpServer";
import appChangePasswordHeader from "@/components/header/app/appChangePasswordHeader";

import Vue from 'vue';
import { Popup, Field } from 'mint-ui';
Vue.component(Popup.name, Popup);
Vue.component(Field.name, Field);
export default {
  name: "appChangePassword",
  layout: 'appBlank',
  components: { appChangePasswordHeader },
  data: function () {
    return {
      phoneNumState: '',
      passwordState: '',
      codeState: '',
      phoneNum: '',//手机号
      code: '',//验证码
      password: '',//密码
      codeStr: '获取验证码',
      msg_code: false,//返回的验证码
      code_flag: false,//发送验证码的开关
      url: this.$store.state.serverUrl.serverUrl, //服务器地址
      msg: '',
      popupVisible: false
    };
  },
  methods: {
    //获取验证码
    sendCode () {
      //如果开关是开着的
      if (this.code_flag) {
        // this.codeStr = "获取验证码"
        return false;
      }
      //10s后可以继续发送
      if (!/^1[3456789]\d{9}$/.test(this.phoneNum)) {
        this.phoneNumState = 'error';
        return false;
      }
      this.phoneNumState = 'success';
      this.codeStr = "发送成功"
      this.code_flag = true;//开关打开
      setTimeout(() => {
        this.code_flag = false;//10s后开关关掉
        this.codeStr = "获取验证码"
      }, 10000);
      //2是发送登录的验证码 3是发送忘记密码的验证码
      this.getCode(this.phoneNum, 3);
    },
    //发送一次后要60s后才能再发送
    getCode (phone, type) {
      let url = this.url + "user/getCode.action";
      httpServer(
        {
          url,
          method: "get"
        },
        {
          phone,
          type
        }
      )
        .then(res => {
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
        .catch(err => {
          this.popupVisible = true;
          this.msg = err;
          // MessageBox(err, "提示", {
          //   confirmButtonText: "确定",
          //   type: "error"
          // });
        });
    },
    //发送验证码
    resetPasswordSubmit () {
      //先发送验证码
      if (!this.msg_code) {
        this.popupVisible = true;
        this.msg = '请先发送验证码';
        return false;
      }
      //信息填写完整
      if (this.phoneNumState != 'success' || this.codeState != 'success' || this.passwordState != 'success') {
        this.popupVisible = true;
        this.msg = '信息不完整';
        // console.log(1)
        return false;
      }
      this.reset(this.phoneNum, this.password, this.code);
    },
    reset (phone, newPwd, code) {
      let url =
        this.$store.state.serverUrl.serverUrl + "user/forgetPwd.action";
      httpServer(
        {
          url,
          method: "post"
        },
        {
          phone,
          newPwd,
          code
        }
      )
        .then(res => {
          res = res.data;
          let { returnstatus, returnmessage } = res;
          //重置成功跳转到登录
          if (returnstatus == "0") {
            this.popupVisible = true;
            this.msg = '重置成功';
            setTimeout(() => {
              //如果从订单页过来的注册
              let productid = this.productid;
              let pathUrl = productid
                ? `/appLogin&productid=${productid}`
                : "/appLogin";
              // if (productid) {
              //   this.$router.push({ path: '/loginAndRegister', query: { login: '', productid } })
              // } else {
              //   this.$router.push({ path: '/loginAndRegister', query: { login: '' } });
              // }
              this.$router.push(pathUrl)
              // setTimeout(() => {
              //   this.$router.go(0);
              // }, 1000);
              // this.$router.go(0);
              //跳转到登录
              // location.href = pathUrl;
              // this.$router.push({name:'/loginAndRegister',query:{login:'',}})
            }, 2000);
          } else {
            this.popupVisible = true;
            this.msg = '重置失败';
            //注册失败刷新页面
            // Message.success({
            //   showClose: true,
            //   message: returnmessage,
            //   type: "success"
            // });
          }
        })
        .catch(err => err);
    }
  },
  watch: {
    phoneNum () {
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
    }
  }
};
</script>
<style lang="scss" scoped>
body {
  background-color: #fff;
}
.appChangePassword {
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
  .appChangePassword-content {
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
    }
    input::-webkit-input-placeholder {
      color: #bebebe;
    }
    .register-form,
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
        font-size: 0.371429rem;
        color: #bebebe;
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        justify-content: center;
        align-items: center;
        line-height: 3;
      }
      .c-ff2929 {
        color: #ff2929;
      }
    }
  }
}
</style>