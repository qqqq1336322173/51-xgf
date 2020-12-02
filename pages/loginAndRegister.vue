<template>
  <div class="loginAndRegister">
    <div class="block">
      <el-tabs type="border-card"
               class="tabs"
               v-model.trim="activeName"
               @tab-click="handleClick">
        <el-tab-pane label="注册"
                     class="register"
                     name="first">
          <div class="register">
            <el-form :label-position="'left'"
                     ref="register"
                     :model="registerForm"
                     label-width="100px"
                     :rules="register_rules">
              <el-form-item prop="phone">
                <el-input v-model.trim.trim="registerForm.phone"
                          placeholder="手机号"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model.trim.trim="registerForm.password"
                          placeholder="(密码)不少于6位"></el-input>
              </el-form-item>
              <el-form-item prop="code">
                <div class="code-block">
                  <el-input class="code"
                            placeholder="短信验证码"
                            v-model.trim.trim="registerForm.code"></el-input>
                  <el-button class="getCode"
                             type="danger"
                             @click="getVerificationCode(1)">{{ reg_msg }}</el-button>
                </div>
              </el-form-item>
              <el-form-item>
                <el-button type="danger"
                           @click.native.prevent="registerSubmit('register')"
                           class="register-btn">注册</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
        <el-tab-pane label="登录"
                     name="second">
          <div class="login">
            <el-form :label-position="'left'"
                     ref="login"
                     :model="loginForm"
                     label-width="100px"
                     :rules="login_rules">
              <el-form-item prop="phone">
                <el-input v-model.trim.trim="loginForm.phone"
                          placeholder="手机号"></el-input>
              </el-form-item>
              <el-form-item prop="password">
                <el-input v-model.trim.trim="loginForm.password"
                          placeholder="(密码)不少于6位"></el-input>
              </el-form-item>
              <el-form-item prop="code">
                <div class="code-block">
                  <el-input class="code"
                            placeholder="短信验证码"
                            v-model.trim.trim="loginForm.code"></el-input>
                  <el-button class="getCode"
                             type="danger"
                             @click="getVerificationCode(2)">{{ login_msg }}</el-button>
                </div>
              </el-form-item>
              <el-form-item>
                <el-button type="danger"
                           @click.native.prevent="loginSubmit('login')"
                           class="register-btn">登录</el-button>
              </el-form-item>
            </el-form>
          </div>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import { Message, MessageBox } from "element-ui";
import httpServer from "@/assets/js/httpServer";
import storage from "@/assets/js/storage";
export default {
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
      activeName: "second", //切换
      registerForm: {
        phone: "",
        password: "",
        code: ""
      },
      loginForm: {
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
      login_rules: {
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
      login_msg: "获取验证码",
      reg_flag: false,
      log_flg: false,
      url: this.$store.state.serverUrl.serverUrl, //服务器地址
      productid: this.$route.query.productid || ""
    };
  },
  mounted () {
    let data = this.$route.query;
    this.activeName = data.hasOwnProperty("login") ? "second" : "first";
    // this.$router.push({ path: "/loginAndRegister" });
  },
  methods: {
    onSubmit () {
      console.log("submit!");
    },
    //注册
    /*
    1.bug 提示注册过的
    2.bug 用户没点发送验证码不能注册
    */
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
    //登录
    loginSubmit (formName) {
      //必须先发送验证码
      if (!this.login_flag) {
        const h = this.$createElement;
        this.$message({
          message: h("p", null, [
            h("span", null, "请先发送验证码"),
            h("i", { style: "color: teal" }, "")
          ])
        });
        return false;
      }
      this.$refs[formName].validate(valid => {
        if (valid) {
          let { phone, password, code } = this._data.loginForm;
          let url = this.url + "user/userLogin.action";
          // console.log(url);
          // return false;
          // console.log(phone, password);
          httpServer(
            {
              url,
              method: "get"
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
        } else {
          console.log("error submit!!");
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
    //tab切换
    handleClick (tab) {
      if (tab.index == "0") {
        //假如上面有带productid的路由的时候要加载后面
        let productid = this.productid;
        let pathUrl = productid
          ? `/pcRegister&productid=${productid}`
          : "/pcRegister";
        this.$router.push({ path: pathUrl });
      }
      if (tab.index == "1") {
        let productid = this.productid;
        let pathUrl = productid
          ? `/pcLogin&productid=${productid}`
          : "/pcLogin";
        this.$router.push({ path: pathUrl });
      }
    }
  },
  watch: {
    $route (to, from) { }
  }
};
</script>
<style></style>
<style scoped>
.loginAndRegister {
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  justify-content: center;
  align-items: center;
}
.register,
.login {
  margin-top: 40px;
}
.code {
  flex: 1;
}
.code-block {
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  justify-content: space-between;
  width: 100%;
}
.register-btn {
  width: 100%;
}
.getCode {
  margin-left: 10px;
  background-color: #ff2929;
}
.block {
  width: 475px;
  padding-top: 10px;
  /* padding-top: 140px; */
  border-radius: 25px;
}
</style>

<style lang="scss">
.loginAndRegister {
  .el-tabs--border-card {
    background: #fff;
    border: none;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: #666565 0px 0px 10px;
    padding: 40px 30px;
  }
  .el-tabs__nav-scroll {
    border-bottom: 1px solid #e5e5e5;
    background: #fff;
  }
  .el-tabs__item {
    border: none !important;
    font-size: 20px;
    font-weight: bold;
  }
  .is-active {
    color: #ff2929 !important;
    border-bottom: 1px solid #ff2929 !important;
    line-height: 1.5;
  }
  .el-form-item__content {
    margin-left: 0 !important;
  }
  .el-input__inner {
    border-radius: 6px;
  }
  .el-button--danger {
    background-color: #ff2929;
    border-color: none;
    color: #fff;
  }
  .el-button--danger:active {
    background-color: #854242;
    border-color: none;
    color: #fff;
  }
}
</style>
