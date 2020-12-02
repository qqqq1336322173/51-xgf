<template>
  <div class="my-personal-info">
    <div class="user-edit">
      <el-button type="text"
                 @click="toggleEditUserModal">
        <svg class="icon-user-info"
             aria-hidden="true">
          <use xlink:href="#icon-bianji"></use>
        </svg>
        编辑
      </el-button>
    </div>
    <el-tabs v-model.trim="userActiveName"
             @tab-click="userHandleClick">
      <el-tab-pane name="f">
        <span slot="label"> 个人信息</span>
        <!-- userInfo: {
        nickname: '安博',
        username: "安博",
        sex: 0,
        address: "福建 福州",
        telphone: "130 8888 8888",
        qq: "88868 8888 8888",
        email: "anbo@163.com"
      } -->
        <el-form ref="form"
                 :model="userInfo"
                 label-width="80px"
                 size="mini">
          <el-form-item label="昵称">
            <span>{{ userInfo.nickname || '' }}</span>
          </el-form-item>
          <el-form-item label="真实姓名">
            <span>{{ userInfo.username || '' }}</span>
          </el-form-item>
          <el-form-item label="性别">
            <span>{{
              userInfo.sex == '0' ? "男" : userInfo.sex == "1" ? "女" : ""
            }}</span>
          </el-form-item>
          <el-form-item label="所在地">
            <span>{{ userInfo.address || '' }}</span>
          </el-form-item>
          <el-form-item label="手机号">
            <span>{{ userInfo.telphone || '' }}</span>
          </el-form-item>
          <el-form-item label="QQ号">
            <span>{{ userInfo.qq || ''}}</span>
          </el-form-item>
          <el-form-item label="邮箱">
            <span>{{ userInfo.email || '' }}</span>
          </el-form-item>
        </el-form>
      </el-tab-pane>
    </el-tabs>
    <Modal v-show="showModal"
           v-on:closeme="closeme"
           :userInfo="userInfo"
           :showModal="showModal"></Modal>
  </div>
  <!-- <div class="el-row">
    <div class="el-col el-col-12">
      <div class="grid-content bg-purple"></div>
    </div>
    <div class="el-col el-col-12">
      <div class="grid-content bg-purple-light"></div>
    </div>
  </div> -->
</template>

<script>
import Modal from './modal'
export default {
  props: ["userInfo"],
  data () {
    var checkAge = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("年龄不能为空"));
      }
      setTimeout(() => {
        if (!Number.isInteger(value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (value < 18) {
            callback(new Error("必须年满18岁"));
          } else {
            callback();
          }
        }
      }, 1000);
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm2.checkPass !== "") {
          this.$refs.ruleForm2.validateField("checkPass");
        }
        callback();
      }
    };
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm2.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      userActiveName: "f",
      sizeForm: {
        name: "",
        region: "",
        date1: "",
        date2: "",
        delivery: false,
        type: [],
        resource: "",
        desc: ""
      },
      ruleForm2: {
        pass: "",
        checkPass: "",
        age: ""
      },
      rules2: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }]
      },
      input: 111,
      showModal: false,//模态框,
      // userInfo: {
      //   nickname: '',
      //   username: '',
      //   sex: '',
      //   address: '',
      //   telphone: ''
      // }
    };
  },
  components: {
    Modal
  },
  mounted () {
    // console.log(this.userInfo);
  },
  methods: {
    userHandleClick (tab, event) {
      console.log(tab, event);
    },
    onSubmit () {
      console.log("submit!");
    },
    //修改个人信息
    editUser () {
      /*userInfo: {
        nickname: '安博',
        username: "安博",
        sex: 0,
        address: "福建 福州",
        telphone: "130 8888 8888",
        qq: "88868 8888 8888",
        email: "anbo@163.com"
      }*/
      // console.log(userInfo.nickname);
      let { nickname, username, sex, address, telphone, qq, email } = this.userInfo;
      //过滤没值的
      nickname = nickname || '';
      username = username || '';
      sex = sex || '';
      address = address || ''
      telphone = telphone || '';
      qq = qq || '';
      email = email || '';
      sex = sex == 0 ? "男" : sex == "1" ? "女" : "";
      let editPersonalDiv = `
      <div class="el-row el-form-item">
        <div class="el-col el-col-6">
          <div>
          <label class="el-form-item__label" style="width: 80px;">昵称</label>
          </div>
        </div>
        <div class="el-col el-col-18">
          <div>
            <input value="${nickname}" autocomplete="off" placeholder="请输入内容" type="text" rows="2" validateevent="true" class="el-input__inner"> 
          </div>
        </div>
      </div>
       <div class="el-row el-form-item">
        <div class="el-col el-col-6">
          <div>
          <label class="el-form-item__label" style="width: 80px;">真实姓名</label>
          </div>
        </div>
        <div class="el-col el-col-18">
          <div>
            <input value="${username}" autocomplete="off" placeholder="请输入内容" type="text" rows="2" validateevent="true" class="el-input__inner"> 
          </div>
        </div>
      </div>
       <div class="el-row el-form-item">
        <div class="el-col el-col-6">
          <div>
          <label class="el-form-item__label" style="width: 80px;">所在地</label>
          </div>
        </div>
        <div class="el-col el-col-18">
          <div role="radiogroup" class="el-radio-group">
          <label role="radio" tabindex="-1" class="el-radio">
            <span class="el-radio__input"><span class="el-radio__inner"></span>
            <input type="radio" tabindex="-1" class="el-radio__original" value="男"></span>
            <span class="el-radio__label">男</span>
          </label>
          <label role="radio" tabindex="0" class="el-radio is-checked" aria-checked="true">
            <span class="el-radio__input is-checked">
            <span class="el-radio__inner"></span>
            <input type="radio" tabindex="-1" class="el-radio__original" value="女"></span>
            <span class="el-radio__label">女</span>
          </label>
          </div>
        </div>
      </div>
       <div class="el-row el-form-item">
        <div class="el-col el-col-6">
          <div>
          <label class="el-form-item__label" style="width: 80px;">性别</label>
          </div>
        </div>
        <div class="el-col el-col-18">
          <div>
            <input id="address" value="${address}" autocomplete="off" placeholder="请输入内容" type="text" rows="2" validateevent="true" class="el-input__inner"> 
          </div>
        </div>
      </div>
       <div class="el-row el-form-item">
        <div class="el-col el-col-6">
          <div>
          <label class="el-form-item__label" style="width: 80px;">手机号</label>
          </div>
        </div>
        <div class="el-col el-col-18">
          <div>
            <input value="${telphone}" autocomplete="off" placeholder="请输入内容" type="text" rows="2" validateevent="true" class="el-input__inner"> 
          </div>
        </div>
      </div>
       <div class="el-row el-form-item">
        <div class="el-col el-col-6">
          <div>
          <label class="el-form-item__label" style="width: 80px;">QQ  号</label>
          </div>
        </div>
        <div class="el-col el-col-18">
          <div>
            <input value="${qq}" autocomplete="off" placeholder="请输入内容" type="text" rows="2" validateevent="true" class="el-input__inner"> 
          </div>
        </div>
      </div>
       <div class="el-row el-form-item">
        <div class="el-col el-col-6">
          <div>
          <label class="el-form-item__label" style="width: 80px;">邮箱</label>
          </div>
        </div>
        <div class="el-col el-col-18">
          <div>
            <input value="${email}" autocomplete="off" placeholder="请输入内容" type="text" rows="2" validateevent="true" class="el-input__inner"> 
          </div>
        </div>
      </div>
      `;
      this.$confirm(editPersonalDiv, "编辑个人信息", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        dangerouslyUseHTMLString: true
      })
        .then(() => {
          console.log(document.querySelector("#address").value);
          this.$message({
            type: "success",
            message: "删除成功!"
          });
        })
        .catch(() => {
          // this.$message({
          //   type: "info",
          //   message: "已取消删除"
          // });
        });
    },
    submitForm (formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    resetForm (formName) {
      this.$refs[formName].resetFields();
    },
    //打开模态框个人信息
    toggleEditUserModal () {
      console.log(1)
      this.showModal = !this.showModal;
    },
    closeme: function () {
      this.showModal = !this.showModal;
    }

  }
};
</script>

<style>
.my-personal-info {
  position: relative;
  width: 100%;
}
.my-personal-info > .user-edit {
  position: absolute;
  top: 5px;
  right: 7px;
  z-index: 3;
}
.user-edit > button {
  color: #999999;
}
.my-personal-info .el-form-item__label {
  text-align: left;
  background-color: #f5f7f9;
}
.my-personal-info .el-form-item__content {
  border-bottom: 1px solid #eee;
}
.my-personal-info .el-form-item__label {
  margin-right: 20px;
}
.my-personal-info .el-tabs__nav {
  width: 100%;
  position: relative;
}
.el-tabs__nav > #tab-s {
  position: absolute;
  left: 92%;
}
</style>
