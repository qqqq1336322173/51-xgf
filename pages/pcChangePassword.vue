<template>
  <div class="pcRegister">
    <div class="login-box">
      <el-tabs v-model.trim="activeName"
               @tab-click="handleClick">
        <!-- 验证码登录 -->
        <el-tab-pane label="重设密码"
                     name="resetPassword">
          <el-form :model="resetPasswordForm"
                   class="resetPassword"
                   ref="resetPassword"
                   :rules="reset_newPwd_rules">
            <el-form-item class="phone"
                          prop="phone">
              <el-input placeholder="手机号"
                        v-model.trim.trim="resetPasswordForm.phone"></el-input>
            </el-form-item>
            <el-form-item prop="code">
              <div class="code-box m-top-30 focus-within">
                <el-input class="code-input"
                          placeholder="短信验证码"
                          v-model.trim.trim="resetPasswordForm.code"></el-input>
                <el-button type="default"
                           @click="getVerificationCode(3)">{{reset_msg}}</el-button>
              </div>
            </el-form-item>
            <el-form-item class="newPwd"
                          prop="newPwd">
              <el-input class="m-top-30"
                        placeholder="密码（不少于六位）"
                        v-model.trim.trim="resetPasswordForm.newPwd"></el-input>
            </el-form-item>
            <el-form-item class="login-btn-box m-top-40">
              <el-button type="danger"
                         @click.native.prevent="resetPasswordSubmit('resetPassword')">重设密码</el-button>
            </el-form-item>
            <el-form-item>
              <p class="text-box">
                <span>联系客服</span>
              </p>
            </el-form-item>
          </el-form>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
// 引入模块
import { Message, MessageBox } from "element-ui";
import httpServer from "@/assets/js/httpServer";
// import storage from "@/assets/js/storage";
export default {
  name: "pcRegister",
  data () {
    const validateUsername = (rule, value, callback) => {
      if (!/^1[3456789]\d{9}$/.test(value)) {
        callback(new Error("手机格式不正确"));
      } else {
        callback();
      }
    };
    return {
      activeName: "resetPassword",
      resetPasswordForm: {
        phone: "",
        newPwd: "",
        code: ""
      },
      reset_newPwd_rules: {
        phone: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        newPwd: [
          { required: true, message: "请输入正确的密码", trigger: "blur" },
          { min: 6, message: "长度不少于6位", trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 3, max: 6, message: "长度在 3 到 6 个字符", trigger: "blur" }
        ]
      },
      sendFlag: true, //发送验证码的开关
      reset_msg: "获取验证码",
      reset_flag: false,
      log_flg: false,
      url: this.$store.state.serverUrl.serverUrl, //服务器地址
      productid: this.$route.query.productid || ""
    };
  },
  methods: {
    handleClick (tab, event) {
      console.log(tab, event);
    },
    //重置密码
    resetPasswordSubmit (formName) {
      //必须先发送验证码
      if (!this.reset_flag) {
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
          let { phone, newPwd, code } = this._data.resetPasswordForm;
          let url =
            this.$store.state.serverUrl.serverUrl + "user/forgetPwd.action";
          // console.log(this.$store.state.serverUrl.serverUrl)
          // console.log(phone, newPwd, code);
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
                Message.success({
                  showClose: true,
                  message: "重置成功",
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
      type 3 是 重置密码
      1.注册的手机号不能为空
      2.登录的手机号不能为空
      */
      if (type == 3) {
        let { phone } = this.resetPasswordForm;
        // 1.注册的手机号不能为空
        if (!phone) {
          MessageBox("手机号不能为空", "提示", {
            confirmButtonText: "确定",
            type: "error"
          });
          return false;
        }
        if (this.sendFlag) {
          this.reset_msg = "已发送";
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
      this.reset_flag = false;
      this.sendFlag = false;
      setTimeout(() => {
        //初始化
        this.reset_msg = "获取验证码";
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
          if (type == 3) {
            this.reset_flag = true;
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
  .resetPassword {
    .phone .el-input,
    .newPwd .el-input {
      width: 100%;
    }
    .el-input__inner {
      padding: 28px 23px;
      background-color: #f6f6f6;
      border-radius: 12px;
      font-size: 15px;
    }
    .phone .el-input__inner:focus,
    .newPwd .el-input__inner:focus {
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