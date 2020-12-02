<template>
  <div class="appAmendUserNameHeader">
    <mt-header title="修改用户名">
      <router-link @click="goBack"
                   to="/appMineDetail"
                   slot="left">
        <mt-button icon="back"
                   @click="goBack"></mt-button>
      </router-link>
      <mt-button slot="right"
                 class="save-btn"
                 @click="saveUser">保存</mt-button>
    </mt-header>
    <mt-popup v-model.trim="popupVisible"
              position="bottom">
      {{ msg }}
    </mt-popup>
  </div>
</template>
<script>
import httpServer from "@/assets/js/httpServer";
import storage from "@/assets/js/storage"; //引入本地
export default {
  name: "appAmendUserNameHeader",
  props: ["username"],
  data () {
    return {
      popupVisible: false,
      msg: "",
      userInfo: {},
      url: this.$store.state.serverUrl.serverUrl //服务器地址
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
    goBack () {
      history.go(-1);
    },
    saveUser () {
      if (!this.username) {
        this.popupVisible = true;
        this.msg = "请输入用户名";
        return false;
      }
      //修改用户名
      this.updateAjax(this.username);
    },
    updateAjax (nickname) {
      // console.log(nickname);
      // return false;
      let url = this.url + "user/updateUser.action";

      let { id } = this.userInfo;
      console.log(id, nickname);
      httpServer(
        {
          url,
          method: "post"
        },
        {
          id,
          nickname
        }
      )
        .then(res => {
          console.log(res);
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
            this.userInfo.username = this.username;
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
    }
  }
};
</script>
<style lang="scss">
.appAmendUserNameHeader {
  width: 100vw;
  * {
    margin: 0;
    padding: 0;
  }
  .mint-header {
    background-color: #fff;
    color: #333;
    font-size: 0.514286rem;
    padding: 1.146667rem 10px 0.533333rem;
  }
  .mintui {
    font-family: "mintui" !important;
    font-size: 0.5rem;
    padding: 12px;
  }
  .save-btn {
    color: #a0a0a0;
  }
}
</style>
