<template>
  <div class="pcRegister">
    <div class="login-box">
      <el-tabs v-model.trim="activeName"
               @tab-click="handleClick">
        <!-- 验证码登录 -->
        <el-tab-pane label=" 注册账号 "
                     name="register">
          <el-form ref="register"
                   :model="registerForm"
                   class="register"
                   :rules="register_rules">
            <el-form-item class="phone"
                          prop="phone">
              <el-input placeholder="手机号"
                        v-model.trim.trim="registerForm.phone"></el-input>
            </el-form-item>
            <el-form-item class="password"
                          prop="password">
              <el-input class="m-top-30"
                        placeholder="密码（不少于六位）"
                        v-model.trim.trim="registerForm.password"></el-input>
            </el-form-item>
            <el-form-item prop="code">
              <div class="code-box m-top-30 focus-within">
                <el-input class="code-input"
                          placeholder="短信验证码"
                          v-model.trim.trim="registerForm.code"></el-input>
                <el-button type="default"
                           @click="getVerificationCode(1)">{{reg_msg}}
                </el-button>
              </div>
            </el-form-item>

            <el-form-item class="login-btn-box m-top-40">
              <el-button type="danger"
                         @click.native.prevent="registerSubmit('register')">注 册</el-button>
            </el-form-item>
            <el-form-item>
              <p class="text-box">
                <span>已有账号，去</span>
                <span @click="mRouter('pcLogin')">登录</span>
              </p>
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
  name: "pcRegister",
  layout: "blank",
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!/^1[3456789]\d{9}$/.test(value)) {
        callback(new Error("手机格式不正确"));
      } else {
        callback();
      }
    };
    return {
      activeName: "register", //切换
      registerForm: {
        phone: "",
        password: "",
        code: ""
      },
      register_rules: {
        phone: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, message: "请输入正确的密码", trigger: "blur" },
          { min: 6, message: "长度不少于6位", trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ]
      },
      sendFlag: true, //发送验证码的开关
      reg_msg: "获取验证码",
      reg_flag: false,
      url: this.$store.state.serverUrl.serverUrl, //服务器地址
      productid: this.$route.query.productid || ""
    };
  },
  created () {
    //判断是否是手机端
    if (this.isMobile) {
      this.$router.push('/appRegister')
    } else {
      this.$router.push('/pcRegister')
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
        name: path,
      });
    },
    registerSubmit (formName) {
      //必须先发送验证码
      if (!this.reg_flag) {
        const h = this.$createElement;
        this.$message({
          message: h("p", null, [
            h("span", null, "请先发送验证码"),
            h("i", { style: "color: teal" }, "")
          ])
        });
        return false;
      }
      // console.log(1);
      this.$refs[formName].validate(valid => {
        if (valid) {
          // console.log(this);
          let { phone, password, code } = this._data.registerForm;
          let url =
            this.$store.state.serverUrl.serverUrl + "user/regUser.action";
          // console.log(this.$store.state.serverUrl.serverUrl)
          // console.log(phone, password, code);
          httpServer(
            {
              url,
              method: "post"
            },
            {
              phone,
              password,
              code
            }
          )
            .then(res => {
              res = res.data;
              let { returnstatus, returnmessage } = res;
              //注册成功跳转到登录
              if (returnstatus == "0") {
                Message.success({
                  showClose: true,
                  message: "注册成功",
                  type: "success"
                });
                setTimeout(() => {
                  //如果从订单页过来的注册
                  let productid = this.productid;
                  let pathUrl = productid
                    ? `/pcLogin&productid=${productid}`
                    : "/pcLogin";
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
                //注册失败刷新页面
                Message.success({
                  showClose: true,
                  message: returnmessage,
                  type: "success"
                });
              }
            })
            .catch(err => err);
        } else {
          console.log("error submit!!");
          this.$message("error submit!!");
          return false;
        }
      });
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
        let { phone } = this.loginForm;
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
.pcRegister {
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
    height: 550px;
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
  .register {
    .phone .el-input,
    .password .el-input {
      width: 100%;
    }
    .el-input__inner {
      padding: 28px 23px;
      background-color: #f6f6f6;
      border-radius: 12px;
      font-size: 15px;
    }
    .phone .el-input__inner:focus,
    .password .el-input__inner:focus {
      border: 1px solid #dcdfe6;
    }
    .code-box .el-input__inner:focus {
      border: 0;
    }
    .m-top-30 {
      margin-top: 30px;
    }
    .m-top-40 {
      margin-top: 40px;
    }
    .text-box {
      padding: 18px 12px 16px;
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      justify-content: center;
      align-items: center;
      span:first-child {
        color: #a7a7a7;
      }
      span:last-child {
        color: #ff2929;
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