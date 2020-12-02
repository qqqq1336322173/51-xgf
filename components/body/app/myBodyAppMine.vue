<template>
  <div class="appMine">
    <div class="header">
      <div class="bgc"></div>
      <div class="header-con">
        <div class="h-img">
          <img class="header-img"
               src="@/assets/img/app/mine/headimg.png"
               alt />
        </div>
        <div class="con-text">
          <p class="p-1">{{username}}</p>
          <p class="p-2">个性签名/备注信息</p>
        </div>
      </div>
    </div>
    <div class="content">
      <div class="con-item"
           @click="goSon('appUserOrder')">
        <div class="left-box">
          <img class="icon"
               src="@/assets/img/app/mine/icon01.png"
               alt />
          <span>我的订单</span>
        </div>
        <img class="go"
             src="@/assets/img/app/mine/go.png"
             alt />
      </div>
      <div class="con-item">
        <div class="left-box">
          <img class="icon"
               src="@/assets/img/app/mine/icon02.png"
               alt />
          <span>我的课程</span>
        </div>
        <img class="go"
             src="@/assets/img/app/mine/go.png"
             alt />
      </div>
      <div class="con-item"
           @click="goSon('appMineDetail')">
        <div class="left-box">
          <img class="icon"
               src="@/assets/img/app/mine/icon03.png"
               alt />
          <span>我的信息</span>
        </div>
        <img class="go"
             src="@/assets/img/app/mine/go.png"
             alt />
      </div>
      <div class="con-item"
           @click="goSon('appAbout')">
        <div class="left-box">
          <img class="icon"
               src="@/assets/img/app/mine/icon04.png"
               alt />
          <span>
            关于我们
          </span>
        </div>
        <img class="go"
             src="@/assets/img/app/mine/go.png"
             alt />
      </div>
    </div>
  </div>
</template>
<script>
import storage from "@/assets/js/storage"; //引入本地
export default {
  name: "appMine",
  data () {
    return {
      username: ""
    }
  },
  created () {
    // console.log(storage)
    this.username = sessionStorage.username || '';
    if (!this.username) {
      // this.$router.push('/appLogin')
    }
  },
  methods: {
    // 页面跳转
    goSon (path) {
      this.$router.push({
        name: path,
      });
    },
  },
};
</script>
<style lang="scss">
.appMine {
  width: 100vw;
  height: 100vh;
  background-color: #f4f5f7;
  font-family: "Microsoft YaHei";
  * {
    margin: 0;
    padding: 0;
  }
  .header {
    height: 6.266667rem;
    width: 100%;
    overflow: hidden;
    position: relative;

    .bgc {
      position: absolute;
      right: -22rem;
      bottom: 0;
      width: 53.333333rem;
      height: 53.333333rem;
      border-radius: 50%;
      background-color: #595958;
      z-index: 1;
    }

    .header-con {
      position: absolute;
      top: 1.733333rem;
      left: 0;
      z-index: 500;
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      align-items: center;
      justify-content: flex-start;
      padding-left: 0.333333rem;
      .h-img {
        width: 2.133333rem;
        height: 2.133333rem;
        border-radius: 50%;
        overflow: hidden;
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        justify-content: center;
        align-items: center;
        box-shadow: rgb(51, 49, 49) 0 0 0.142857rem;
        .header-img {
          width: 2.4rem;
        }
      }
      .con-text {
        color: #fff;
        padding-left: 0.285714rem;
        text-align: left;
        .p-1 {
          font-size: 0.48rem;
          line-height: 1.5;
        }
        .p-2 {
          font-size: 0.32rem;
          line-height: 1.5;
        }
      }
    }
  }
  .content {
    .con-item {
      height: 1.2rem;
      font-size: 0.4rem;
      background-color: #fff;
      color: #595958;
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      align-items: center;
      justify-content: space-between;
      padding-left: 0.533333rem;
      padding-right: 0.533333rem;
      border-bottom: 1px solid #eeeeee;
      .left-box {
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        align-items: center;
        font-weight: 500;

        .icon {
          width: 0.866667rem;
          margin-right: 0.4rem;
        }
      }
      .go {
        width: 0.266667rem;
      }
    }
    .con-item:first-child {
      margin-top: 0.266667rem;
    }
    .con-item:nth-child(3) {
      border: none;
    }
    .con-item:last-child {
      margin-top: 0.266667rem;
    }
  }
}
</style>