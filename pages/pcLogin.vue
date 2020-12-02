<template>
  <div class="pcLogin">
    <div class="login-box">
      <el-tabs v-model.trim="activeName"
               @tab-click="handleClick">
        <!-- 普通登录 -->
        <el-tab-pane label="普通登录"
                     name="normalLogin">
          <el-form ref="password"
                   :model="passwordForm"
                   class="normalLogin"
                   :rules="password_rules">
            <el-form-item prop="phone">
              <el-input placeholder="手机号"
                        v-model.trim="passwordForm.phone"></el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input class="m-top-30"
                        placeholder="密    码"
                        v-model.trim="passwordForm.password"></el-input>
            </el-form-item>
            <el-form-item>
              <p class="text-box">
                <span @click="mRouter('pcRegister')">立即注册</span>
                <span @click="mRouter('pcChangePassword')">忘记密码?</span>
              </p>
            </el-form-item>
            <el-form-item>
              <el-button type="danger"
                         @click="loginSubmit('password')">登 录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
        <!-- 验证码登录 -->
        <el-tab-pane label=" 验证码登录 "
                     name="codeLogin">
          <el-form ref="code"
                   :model="codeForm"
                   class="codeLogin"
                   :rules="code_rules">
            <el-form-item class="phone"
                          prop="phone">
              <el-input placeholder="手机号"
                        v-model.trim="codeForm.phone"></el-input>
            </el-form-item>

            <el-form-item prop="code">
              <div class="code-box m-top-30 focus-within">
                <el-input class="code-input"
                          placeholder="短信验证码"
                          v-model.trim="codeForm.code"></el-input>
                <el-button type="default"
                           @click="getVerificationCode(2)">{{ login_msg }}</el-button>
              </div>
            </el-form-item>

            <el-form-item>
              <p class="text-box">
                <span @click="mRouter('pcRegister')">立即注册</span>
                <span @click="mRouter('pcChangePassword')">忘记密码?</span>
              </p>
            </el-form-item>
            <el-form-item class="login-btn-box">
              <el-button type="danger"
                         @click.native.prevent="loginSubmit('code')">登 录</el-button>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
// 引入需要的模块
import { Message, MessageBox } from "element-ui";
import httpServer from "@/assets/js/httpServer";
import storage from "@/assets/js/storage";
export default {
  layout: "blank",
  name: "normalLogin",
  data () {
    const validateLoginUsername = (rule, value, callback) => {
      if (!/^1[3456789]\d{9}$/.test(value)) {
        callback(new Error("手机格式不正确"));
      } else {
        callback();
      }
    };
    return {
      activeName: "normalLogin", //切换
      passwordForm: {
        phone: "",
        password: "",
      },
      codeForm: {
        phone: "",
        code: ""
      },
      password_rules: {
        phone: [
          { required: true, trigger: "blur", validator: validateLoginUsername }
        ],
        password: [
          { required: true, message: "请输入正确的密码", trigger: "blur" },
          { min: 6, message: "长度不少于6位", trigger: "blur" }
        ]
      },
      code_rules: {
        phone: [
          { required: true, trigger: "blur", validator: validateLoginUsername }
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ]
      },
      sendFlag: true, //发送验证码的开关
      reg_msg: "获取验证码",
      login_msg: "获取验证码",
      reg_flag: false,
      log_flg: false,
      url: this.$store.state.serverUrl.serverUrl, //服务器地址
      productid: this.$route.query.productid || ""
    };
  },
  created () {
    //判断是否是手机端
    if (this.isMobile) {
      this.$router.push('/appLogin')
    } else {
      this.$router.push('/pcLogin')
    }
  },
  mounted () {

    // this.$router.push({ path: "/loginAndRegister" });
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    },
    mRouter (path) {
      this.$router.push({
        name: path
      })
    },
    //登录
    loginSubmit (formName) {
      // console.log(1)
      /*
      1.进行分流，如果是用户密码的
      */
      //必须先发送验证码
      // console.log(formName);
      // return false;
      if ('code' === formName && !this.login_flag) {
        const h = this.$createElement;
        this.$message({
          message: h("p", null, [
            h("span", null, "请先发送验证码"),
            h("i", { style: "color: teal" }, "")
          ])
        });
        return false;
      }
      // console.log(this.passwordForm);
      this.$refs[formName].validate(valid => {
        // console.log(valid);
        if (valid) {
          let url = this.url + "user/userLogin.action", data = {}
          if ('code' === formName) {
            let { phone, code } = this._data.codeForm;
            data = { phone, code }
          }
          if ('password' === formName) {
            let { phone, password } = this._data.passwordForm;
            data = { phone, password }
          }
          // let { phone, password} = 'code' === formName ? this._data.codeForm
          // let { phone, password, code } = this._data.codeForm;

          // console.log(url);
          // return false;
          // console.log(phone, password);
          this.sendAjax(data, url);
          // console.log(2)
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //发起ajax
    sendAjax (data, url) {
      console.log(data)
      httpServer(
        {
          url,
          method: "get"
        },
        data
      )
        .then(res => {
          res = res.data;
          let { returnstatus, returnmessage } = res;
          if (returnstatus == "0") {
            MessageBox("登录成功", "提示", {
              confirmButtonText: "确定",
              type: "success"
            });
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
            setTimeout(() => {
              if (this.productid) {
                // location.href = "/order?productid=" + this.productid;
                this.$router.push({ path: '/order', query: { productid: this.productid } })
              } else {
                // location.href = "/";
                this.$router.push('/')
              }
            }, 3000);
            return false;
          } else {
            MessageBox(returnmessage, "提示", {
              confirmButtonText: "确定",
              type: "error"
            });
            return false;
          }
        })
        .catch(err => err);
    },
    //获取验证码
    getVerificationCode (type) {
      /*
      type 1 是 注册
      type 2 是 登录
      1.注册的手机号不能为空
      2.登录的手机号不能为空
      */
      if (type == 1) {
        let { phone } = this.registerForm;
        // 1.注册的手机号不能为空
        if (!phone) {
          MessageBox("手机号不能为空", "提示", {
            confirmButtonText: "确定",
            type: "error"
          });
          return false;
        }
        if (this.sendFlag) {
          this.reg_msg = "已发送";
          this.getCode(phone, type);
        } else {
          MessageBox("每隔60秒后才能再次发送", "提示", {
            confirmButtonText: "确定",
            type: "error"
          });
          return false;
        }
      }
      if (type == 2) {
        let { phone } = this.codeForm;
        // 2.登录的手机号不能为空
        if (!phone) {
          MessageBox("手机号不能为空", "提示", {
            confirmButtonText: "确定",
            type: "error"
          });
          return false;
        }
        if (this.sendFlag) {
          this.login_msg = "已发送";
          this.getCode(phone, type);
        } else {
          MessageBox("每隔60秒后才能再次发送", "提示", {
            confirmButtonText: "确定",
            type: "error"
          });
          return false;
        }
      }
    },
    //获取验证码的接口
    //发送一次后要60s后才能再发送
    getCode (phone, type) {
      //初始化按钮
      this.reg_flag = this.login_flag = false;
      this.sendFlag = false;
      setTimeout(() => {
        //初始化
        this.reg_msg = this.login_msg = "获取验证码";
        this.sendFlag = true;
      }, 60000);
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
            MessageBox(returnmessage, "提示", {
              confirmButtonText: "确定",
              type: "error"
            });
            return false;
          }
          //成功后才把按钮打开
          if (type == 1) {
            this.reg_flag = true;
          }
          if (type == 2) {
            this.login_flag = true;
          }
        })
        .catch(err => {
          MessageBox(err, "提示", {
            confirmButtonText: "确定",
            type: "error"
          });
        });
    },
  },
};
</script>
<style lang="scss">
.pcLogin {
  padding-top: 85px;
  padding-bottom: 95px;
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  justify-content: center;
  * {
    margin: 0;
    padding: 0;
  }
  .login-box {
    width: 473px;
    height: 500px;
    padding: 35px 33px 74px;
    box-shadow: 0 0 15px #bebcbc;
    box-sizing: border-box;
    border-radius: 15px;
  }
  .el-tabs__item {
    padding: 0 20px;
    height: 50px;
    box-sizing: border-box;
    line-height: 40px;
    display: inline-block;
    list-style: none;
    font-size: 20px;
    font-weight: 500;
    color: #bcbcbc;
    position: relative;
  }
  .el-tabs__item.is-active {
    color: #ff2929;
  }
  .el-tabs__active-bar {
    height: 3px;
    background-color: red;
  }
  .el-tabs__content {
    width: 100%;
    padding: 40px 20px;
  }
  .normalLogin {
    .el-input {
      width: 100%;
    }
    .el-input__inner {
      width: 100%;
      padding: 28px 23px;
      background-color: #f6f6f6;
      border-radius: 12px;
      font-size: 15px;
    }
    .m-top-30 {
      margin-top: 30px;
    }
    .text-box {
      padding: 18px 12px 16px;
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      justify-content: space-between;
      align-items: center;
      span:first-child {
        color: #ff2929;
      }
      span:last-child {
        color: #a7a7a7;
      }
    }
    .el-button {
      width: 100%;
      padding-top: 16px;
      padding-bottom: 16px;
      border-radius: 10px;
      overflow: hidden;
      font-size: 18px;
      font-weight: bold;
    }
    .el-button--danger {
      color: #fff;
      background-color: #ff2929;
      border-color: #ff2929;
    }
    .el-input__inner:focus {
      border: 1px solid #dcdfe6;
    }
  }
  .codeLogin {
    .phone .el-input {
      width: 100%;
    }
    .el-input__inner {
      padding: 28px 23px;
      background-color: #f6f6f6;
      border-radius: 12px;
      font-size: 15px;
    }
    .phone .el-input__inner:focus {
      border: 1px solid #dcdfe6;
    }
    .code-box .el-input__inner:focus {
      border: 0;
    }
    .m-top-30 {
      margin-top: 30px;
    }
    .text-box {
      padding: 18px 12px 16px;
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      justify-content: space-between;
      align-items: center;
      span:first-child {
        color: #ff2929;
      }
      span:last-child {
        color: #a7a7a7;
      }
    }
    .code-box {
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      align-items: center;
      border: 1px solid #dcdfe6;
      background-color: #f6f6f6;
      border-radius: 12px;
      overflow: hidden;
      .el-input__inner {
        border: none;
        position: relative;
      }
      // .el-input__inner:focus-within {
      //   border: 1px solid #ff2929;
      // }

      .el-button {
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        height: 45px;
        background-color: #f6f6f6;
        border: none;
        padding-right: 23px;
        padding-left: 10px;
        border-left: 1px solid #c0bdbd;
        border-radius: 0;
        color: #a7a7a7;
        justify-content: center;
        align-items: center;
      }
      .el-button:hover {
        color: rgb(89, 106, 204);
      }
      .code-input {
        flex: 1;
      }
    }

    .login-btn-box {
      .el-button {
        width: 100%;
        padding-top: 16px;
        padding-bottom: 16px;
        border-radius: 10px;
        overflow: hidden;
        font-size: 18px;
        font-weight: bold;
      }
      .el-button--danger {
        color: #fff;
        background-color: #ff2929;
        border-color: #ff2929;
      }
    }
  }
}
</style>