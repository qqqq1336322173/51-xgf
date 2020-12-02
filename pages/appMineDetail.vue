<template>
  <div class="appMineDetail">
    <appMineDetailHeader></appMineDetailHeader>
    <div class="container">
      <div class="portrait">
        <span>头像</span>
        <div class="right-box">
          <div class="m-img">
            <img src="@/assets/img/app/mine/headimg.png"
                 alt />
          </div>
          <img class="go-img"
               src="@/assets/img/app/mine/go.png"
               alt />
        </div>
      </div>
      <div class="box-sty"
           @click="goAppAmendUserName">
        <div class="content-box">
          <span>用户名</span>
          <div class="right-box">
            <span>{{ userInfo.username || "" }}</span>
            <img class="go-img"
                 src="@/assets/img/app/mine/go.png"
                 alt />
          </div>
        </div>
      </div>
      <div class="box-sty m-top-20"
           @click="openSexSelect">
        <div class="content-box">
          <span>性别</span>
          <div class="right-box">
            <span>{{
              userInfo.sex == "0" ? "男" : userInfo.sex == "1" ? "女" : ""
            }}</span>
            <img class="go-img"
                 src="@/assets/img/app/mine/go.png"
                 alt />
          </div>
        </div>
      </div>
      <div class="box-sty">
        <div class="content-box">
          <span>手机号</span>
          <div class="right-box">
            <span>{{ userInfo.telphone || "" }}</span>
            <img class="go-img"
                 src="@/assets/img/app/mine/go.png"
                 alt />
          </div>
        </div>
      </div>
      <div class="box-sty">
        <div class="content-box">
          <span>QQ号</span>
          <div class="right-box">
            <span>{{ userInfo.qq || "" }}</span>
            <img class="go-img"
                 src="@/assets/img/app/mine/go.png"
                 alt />
          </div>
        </div>
      </div>
      <div class="box-sty">
        <div class="content-box">
          <span>邮箱</span>
          <div class="right-box">
            <span>{{ userInfo.email || "" }}</span>
            <img class="go-img"
                 src="@/assets/img/app/mine/go.png"
                 alt />
          </div>
        </div>
      </div>
      <div class="box-sty"
           style="margin-top:0.2rem">
        <div class="layout-btn">
          <mt-button @click="layout"
                     class="btn">注销</mt-button>
        </div>
      </div>
    </div>
    <!-- 性别选择 -->
    <mt-actionsheet :actions="sexActions"
                    v-model.trim="sexSheetVisible"></mt-actionsheet>
    <mt-popup v-model.trim="popupVisible"
              position="bottom">
      {{ msg }}
    </mt-popup>
  </div>
</template>
<script>
import httpServer from "@/assets/js/httpServer";
import { MessageBox } from "mint-ui";
import appMineDetailHeader from "@/components/header/app/appMineDetailHeader";
import storage from "@/assets/js/storage"; //引入本地
export default {
  name: "appMineDetail",
  layout: "appBlank",
  components: { appMineDetailHeader },
  data: function () {
    return {
      sex: "保密",
      sexActions: [
        {
          name: "女",
          method: this.updateGirlSex
        },
        {
          name: "男",
          method: this.updateManSex
        },
        {
          name: "保密",
          method: this.updateNullSex
        }
      ],
      sexSheetVisible: false,
      userInfo: {},
      url: this.$store.state.serverUrl.serverUrl, //服务器地址
      msg: "",
      popupVisible: false
    };
  },
  created () {
    //获取用户对象信息
    let userInfo = storage.get("user") || "";
    if (userInfo) {
      this.userInfo = JSON.parse(userInfo);
      console.log(this.userInfo);
    }
  },
  methods: {
    // 去修改用户名界面
    goAppAmendUserName () {
      this.$router.push({
        name: "appAmendUserName"
      });
    },
    // 打开性别选择框
    openSexSelect () {
      console.log(1);
      this.sexSheetVisible = true;
    },
    //修改性别
    updateGirlSex: function () {
      this.updateAjax(1);
    },
    //修改成男的
    updateManSex () {
      this.updateAjax(0);
    },
    //修改成未知
    updateNullSex () {
      this.updateAjax("");
    },
    updateAjax (sex) {
      let url = this.url + "user/updateUser.action";
      let { id } = this.userInfo;
      httpServer(
        {
          url,
          method: "get"
        },
        {
          id,
          sex
        }
      )
        .then(res => {
          res = res.data;
          let { returnmessage, returnstatus } = res;
          if (returnstatus == "0") {
            this.popupVisible = true;
            this.msg = "修改成功";
            // this.$message({
            //   message: '修改成功',
            //   type: 'success'
            // });
            //要把数据更新
            this.userInfo.sex = sex;
            storage.set("user", JSON.stringify(this.userInfo));
            setTimeout(() => {
              this.popupVisible = false;
            }, 2000);
            // this.$store.commit('RECORD_USER_INFO', storage.get('user'));
            // console.log(this.showModal)
            // this.showModal = true;
            // return false;
            // setTimeout(() => {
            //   //刷新页面
            //   location.reload();
            // }, 2000);
          } else {
            this.popupVisible = true;
            this.msg = returnmessage;
            // this.$message.error(returnmessage);
          }
          console.log(res);
        })
        .catch(err => {
          this.popupVisible = true;
          this.msg = err;
          // this.$message.error(err);
        });
    },
    layout () {
      // console.log('1')
      MessageBox.confirm("你确定注销吗?")
        .then(action => {
          // //把账号置空，并且跳转到首页
          storage.remove("username");
          storage.remove("userid");
          storage.remove("user");
          this.$store.state.tabbar.active_id = "index";
          // this.$router.push('/test?index');
          this.$router.push("/test?index&login=1");
          // location.reload();
          // console.log(1)
          // location.reload();
          // console.log(1)
        })
        .catch(err => err);
    }
  },
  watch: {
    sexActions (sex) {
      console.log(1);
    }
    // $route (to, from) {
    //   location.reload();
    // }
  }
};
</script>
<style lang="scss">
.appMineDetail {
  width: 100vw;
  height: 100vh;
  background-color: #f4f5f7;
  * {
    margin: 0;
    padding: 0;
  }
  $m-padding: 0.426667rem 0.453333rem;
  .container {
    padding-top: 0.426667rem;
    font-size: 0.373333rem;
    .go-img {
      width: 0.253333rem;
      height: 0.386667rem;
      margin-left: 0.2rem;
    }
    .portrait {
      padding: $m-padding;
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      .right-box {
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        align-items: center;
        justify-content: flex-end;
        .m-img {
          width: 1.24rem;
          height: 1.24rem;
          border-radius: 50%;
          overflow: hidden;
          display: -webkit-flex;
          display: flex;
          display: -webkit-box;
          display: -ms-flexbox;
          justify-content: center;
          align-items: center;
          // box-shadow: #666 0 0 0.066667rem;
          img {
            width: 1.26rem;
            height: 1.26rem;
          }
        }
      }
    }
    .box-sty {
      padding-left: 0.453333rem;
      padding-right: 0.453333rem;
      background-color: #fff;
      .content-box {
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        padding-top: 0.426667rem;
        padding-bottom: 0.426667rem;
        border-top: 1px solid #eee;
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        justify-content: space-between;
        align-items: center;
        .right-box {
          display: -webkit-flex;
          display: flex;
          display: -webkit-box;
          display: -ms-flexbox;
          justify-content: flex-end;
          align-items: center;
        }
      }
      .layout-btn {
        padding-top: 0.426667rem;
        padding-bottom: 0.426667rem;
        border-top: 1px solid #eee;
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        justify-content: center;
        align-items: center;
        width: 100%;
        text-align: center;
      }
      .layout-btn > button {
        color: #000;
        background: #fff;
        border: 0;
        box-shadow: none;
      }
    }

    .m-top-20 {
      margin-top: 0.266667rem;
      .content-box {
        border-top: none;
      }
    }
  }
}
</style>
