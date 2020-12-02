<template>
  <div class="loginAndRegister">
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
            <el-form-item label="手机号"
                          prop="telephone">
              <el-input v-model.trim="registerForm.telephone"></el-input>
            </el-form-item>
            <el-form-item label="密码"
                          prop="password">
              <el-input v-model.trim="registerForm.password"
                        placeholder="密码不少于6位"></el-input>
            </el-form-item>
            <el-form-item label="短信验证码"
                          prop="code">
              <div class="code-block">
                <el-input class="code"
                          v-model.trim="registerForm.code"></el-input>
                <el-button class="getCode"
                           type="danger"
                           @click="getVerificationCode">获取验证码</el-button>
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
            <el-form-item label="手机号"
                          prop="telephone">
              <el-input v-model.trim="loginForm.telephone"></el-input>
            </el-form-item>
            <el-form-item label="密码"
                          prop="password">
              <el-input v-model.trim="loginForm.password"
                        placeholder="密码不少于6位"></el-input>
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
</template>
<script>
import httpServer from "@/assets/js/httpServer";
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
        telephone: "",
        password: "",
        code: ""
      },
      loginForm: {
        telephone: "",
        password: ""
      },
      register_rules: {
        telephone: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, message: "请输入正确的密码", trigger: "blur" },
          { min: 6, message: "长度不少于6位", trigger: "blur" }
        ],
        code: [
          { required: true, message: "请输入验证码", trigger: "blur" },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ]
      },
      login_rules: {
        telephone: [
          { required: true, trigger: "blur", validator: validateUsername }
        ],
        password: [
          { required: true, message: "请输入正确的密码", trigger: "blur" },
          { min: 6, message: "长度不少于6位", trigger: "blur" }
        ]
      }
    };
  },
  mounted () {
    // console.log(1)
    let data = this.$route.query;
    this.activeName = data.hasOwnProperty("login") ? "second" : "first";
    // this.$router.push({ path: '/loginAndRegister' });
  },
  methods: {
    onSubmit () {
      console.log("submit!");
    },
    //注册
    registerSubmit (formName) {
      // console.log(1);
      this.$refs[formName].validate(valid => {
        if (valid) {
          // console.log(this);
          let { telephone, password, code } = this._data.registerForm;
          // console.log(telephone, password, code);
          httpServer(
            {
              url: "http://127.0.0.1/exam-student/app/control/test.php",
              method: "post"
            },
            {
              telephone,
              password,
              code,
              type: 1
            }
          )
            .then(res => {
              console.log(res);
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
      this.$refs[formName].validate(valid => {
        if (valid) {
          let { telephone, password } = this._data.loginForm;
          // console.log(telephone, password);
          httpServer(
            {
              url: "http://127.0.0.1/exam-student/app/control/test.php",
              method: "get"
            },
            {
              telephone,
              password,
              type: 2
            }
          )
            .then(res => {
              console.log(res);
            })
            .catch(err => err);
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //获取验证码
    getVerificationCode () {
      httpServer(
        {
          url: "http://127.0.0.1/exam-student/app/control/test.php",
          method: "get"
        },
        {}
      )
        .then(res => {
          console.log(res);
        })
        .catch(err => err);
      // this.$axios('http://localhost/onlineexam-teacher/app/control/teacher/teacherLogin.php')
    },
    //tab切换
    handleClick (tab, event) {
      if (tab.index == "0") {
        this.$router.push({ path: "/pcRegister" });
      }
      if (tab.index == "1") {
        this.$router.push({ path: "/pcLogin" });
      }
    }
  }
};
</script>

<style scoped>
.register,
.login {
  width: 340px;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  margin-top: 120px;
}
.code {
  width: 150px;
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
  width: 240px;
}
.getCode {
  margin-left: 10px;
}
</style>
