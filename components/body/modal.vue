<template>
  <div class="modal-backdrop">
    <div class="modal">
      <div class="modal-header">
        <h3>编辑个人信息</h3>
      </div>
      <div class="modal-body">
        <el-row :gutter="20">
          <el-col :span="6">
            <div>
              <label class="el-form-item__label"
                     style="text-align:right;">昵称</label>
            </div>
          </el-col>
          <el-col :span="18">
            <div>
              <el-input v-model.trim="userInfo.nickname"
                        placeholder="请输入内容"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div>
              <label class="el-form-item__label"
                     style="text-align:right;">真实姓名</label>
            </div>
          </el-col>
          <el-col :span="18">
            <div>
              <el-input v-model.trim="userInfo.username"
                        placeholder="请输入内容"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div>
              <label class="el-form-item__label"
                     style="text-align:right;">所在地</label>
            </div>
          </el-col>
          <el-col :span="18">
            <div>
              <el-input v-model.trim="userInfo.address"
                        placeholder="请输入内容"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div>
              <label class="el-form-item__label"
                     style="text-align:right;">性别</label>
            </div>
          </el-col>
          <el-col :span="18"
                  style="margin-top: 12px;">
            <div>
              <el-radio-group v-model.trim="sex"
                              @change="changeSex">
                <el-radio :label="0">男</el-radio>
                <el-radio :label="1">女</el-radio>
              </el-radio-group>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div>
              <label class="el-form-item__label"
                     style="text-align:right;">手机号</label>
            </div>
          </el-col>
          <el-col :span="18">
            <div>
              <el-input v-model.trim="userInfo.telphone"
                        placeholder="请输入内容"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div>
              <label class="el-form-item__label"
                     style="text-align:right;">QQ 号</label>
            </div>
          </el-col>
          <el-col :span="18">
            <div>
              <el-input v-model.trim="userInfo.qq"
                        placeholder="请输入内容"></el-input>
            </div>
          </el-col>
        </el-row>
        <el-row :gutter="20">
          <el-col :span="6">
            <div>
              <label class="el-form-item__label"
                     style="text-align:right;">邮箱</label>
            </div>
          </el-col>
          <el-col :span="18">
            <div>
              <el-input v-model.trim="userInfo.email"
                        placeholder="请输入内容"></el-input>
            </div>
          </el-col>
        </el-row>
      </div>
      <div class="modal-footer">
        <button type="button"
                class="btn-close"
                @click="closeSelf">关闭</button>
        <button type="button"
                class="btn-confirm"
                @click="confirm">确认</button>
      </div>
    </div>

  </div>
</template>
 <script>
import { Message, MessageBox } from 'element-ui';
import httpServer from "@/assets/js/httpServer";
import storage from '@/assets/js/storage'//引入本地
export default {
  name: 'Modal',
  props: ["userInfo", 'showModal'],
  data () {
    return {
      input: 111,
      sex: this.userInfo.sex || '',
      url: this.$store.state.serverUrl.serverUrl,//服务器地址
      oldUserInfo: {}
    }
  },
  created () {
    //深拷贝
    this.oldUserInfo = JSON.parse(JSON.stringify(this.userInfo));
  },
  mounted () {
    this.sex = this.userInfo.sex == '0' ? 0 : this.userInfo.sex == '1' ? 1 : ''

  },
  methods: {
    closeSelf () {
      this.$emit("closeme");
    },
    confirm () {
      // let userInfo = JSON.parse(this.$store.getters.getUser)
      //检测有变动才修改
      let flag = true;//设置个开关
      //循环遍历对象
      for (let key in this.userInfo) {
        if (this.oldUserInfo[key] != this.userInfo[key]) {
          flag = false;
          break;
        }
      }
      //信息有更改才向后台发起请求
      if (flag) {
        this.$message({
          message: '请修改后再进行提交',
          type: 'warning'
        });
        return false;
      }
      let url = this.url + 'user/updateUser.action';
      let { nickname, id, sex, telphone, address, username, qq, email } = this.userInfo
      // console.log(url, this.userInfo)
      // return false;
      // console.log(this.userInfo, id)
      // return false;
      httpServer({
        url,
        method: 'get'
      }, {
        nickname, id, sex, telphone, address, username, qq, email
      })
        .then(res => {
          res = res.data;
          let { returnmessage, returnstatus } = res
          if (returnstatus == '0') {
            this.$message({
              message: '修改成功',
              type: 'success'
            });
            //要把数据更新
            storage.set('user', JSON.stringify(this.userInfo));
            // this.$store.commit('RECORD_USER_INFO', storage.get('user'));
            // console.log(this.showModal)
            this.$emit("closeme");
            //修改完之后要重新覆盖
            this.oldUserInfo = JSON.parse(JSON.stringify(this.userInfo));
            // this.showModal = true;
            // return false;
            // setTimeout(() => {
            //   //刷新页面
            //   location.reload();
            // }, 2000);
          } else {
            this.$message.error(returnmessage);
          }
          console.log(res)
        })
        .catch(err => {
          this.$message.error(err);
        })
      // console.log(this.userInfo, this.oldUserInfo)
      // console.log(this.userInfo);
    },
    //更改性别
    changeSex (tab) {
      this.userInfo.sex = tab === 0 ? '0' : tab === 1 ? 1 : ''
      // console.log(this.userInfo.sex)
    }
  }
}
</script>
<style>
.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.3);
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  justify-content: center;
  align-items: center;
  z-index: 999;
}
.modal {
  background-color: #fff;
  box-shadow: 2px 2px 20px 1px;
  overflow-x: auto;
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  flex-direction: column;
  border-radius: 16px;
  width: 420px;
}
.modal-header {
  border-bottom: 1px solid #eee;
  color: #313131;
  justify-content: space-between;
  padding: 15px;
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
}
.modal-footer {
  border-top: 1px solid #eee;
  justify-content: flex-end;
  padding: 15px;
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
}
.modal-body {
  position: relative;
  padding: 20px 10px;
}
.btn-close,
.btn-confirm {
  border-radius: 8px;
  margin-left: 16px;
  width: 56px;
  height: 36px;
  border: none;
  cursor: pointer;
}
.btn-close {
  color: #313131;
  background-color: transparent;
}
.btn-confirm {
  color: #fff;
  background-color: #2d8cf0;
}
/* 字体大小 */
.modal label,
.modal input {
  font-size: 16px;
}
.modal .el-form-item__label {
}
.modal-backdrop > .modal > .modal-body > .el-row .el-form-item__label {
  background-color: #fff;
  width: 100%;
  height: 50px;
}
.el-input {
  width: 80%;
}
</style>
 
