<template>
  <div class="appOrder">
    <appOrderHeader></appOrderHeader>
    <div class="order-header">
      <div class="search">
        <img src="@/assets/img/app/order/search.png"
             alt />
        <input type="text"
               placeholder="商品名称/商品编号/订单号" />
      </div>
      <div class="nav">
        <p @click="selectNav(1)"
           :class="[selected==1?'p-click':'']">全部</p>
      </div>
    </div>
    <div class="order-content">
      <div v-for="(item,key) in orderList"
           :key=key
           class="order-item">
        <div class="item-header">
          <p class="p-1">订单号: {{item.orderno}}</p>
          <p class="p-2">
            {{item.orderstatus == '0' ? '未支付' : item.orderstatus == '1' ? "已支付" : item.orderstatus == '2' ? '已取消' : item.orderstatus == '3' ? '已失效' : ''}}
            <span class="line">|</span>
            <img class="item-img"
                 src="@/assets/img/app/order/delete.png"
                 alt />
          </p>
        </div>
        <div class="item-content">
          <div class="con">
            <img class="con-img"
                 src="@/assets/img/app/order/toux.png"
                 alt />
            <p class="title">课程名称: {{item.productname}} {{item.authlevel}} </p>
          </div>
          <div class="price">
            实付金额:
            <span class="color-red">￥{{ item.orderprice }}</span>
          </div>
        </div>
        <div class="item-footer">

          <mt-button v-show="item.orderstatus == 0"
                     type="danger"
                     @click="againPay(item.productid)">再次支付</mt-button>
          <mt-button v-show="item.orderstatus == 1"
                     type="default"
                     @click="goOrderDetail(item)">订单详情</mt-button>
        </div>
      </div>
      <!-- <div class="order-item"
           @click="goOrderDetail">
        <div class="item-header">
          <p class="p-1">订单号: ABC-XXX-XXX</p>
          <p class="p-2">
            已支付
            <span class="line">|</span>
            <img class="item-img"
                 src="@/assets/img/app/order/delete.png"
                 alt />
          </p>
        </div>
        <div class="item-content">
          <div class="con">
            <img class="con-img"
                 src="@/assets/img/app/order/toux.png"
                 alt />
            <p class="title">课程名称: Oracle-JAVA认证培 训</p>
          </div>
          <div class="price">
            实付金额:
            <span class="color-red">￥999.99</span>
          </div>
        </div>
        <div class="item-footer">
          <mt-button type="danger">再次支付</mt-button>
          <mt-button type="default">订单详情</mt-button>
        </div>
      </div> -->
    </div>
  </div>
</template>
<script>
import appOrderHeader from "@/components/header/app/appOrderHeader";
import httpServer from '@/assets/js/httpServer'
export default {
  name: "appOrder",
  layout: 'appBlank',
  components: { appOrderHeader },
  data: function () {
    return {
      selected: 1,
      orderList: [],
      url: this.$store.state.serverUrl.serverUrl, //服务器地址
    };
  },
  created () {
    this.init()
  },
  methods: {
    selectNav (selected) {
      this.selected = selected;
    },
    goOrderDetail (item) {
      var item = JSON.stringify(item)
      this.$router.push("/appOrderDetail?orderInfo=" + encodeURIComponent(item))
    },
    //初始化
    init () {
      let url = this.url + "user/userOrderList.action";
      //初始化数据
      httpServer(
        {
          url,
          method: "get"
        },
        {
          userid: sessionStorage.userid
        }
      )
        .then(res => {
          res = res.data;
          let allorder = res.allorder || []; //全部订单，
          this.orderList = allorder;
          // this.orderWaitPayList = unpayorder;
          console.log(allorder);
        })
        .catch(err => {
          this.$message.error(err);
        });
    },
    againPay (productid) {
      this.$router.push('appOrder?productid=' + productid)
    }
  },
};
</script>
<style lang="scss">
.appOrder {
  width: 100vw;
  // height: 100vh;
  background-color: #f4f5f7;
  * {
    margin: 0;
    padding: 0;
  }
  .order-header {
    border-top: 1px solid #eee;
    background-color: #fff;
    padding: 0.226667rem 0.293333rem 0;
    .search {
      border-radius: 1rem;
      padding: 0.133333rem 0.2rem;
      background-color: #ededed;
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      align-items: center;
      img {
        width: 0.426667rem;
        height: 0.426667rem;
      }
      input {
        outline: none;
        border: none;
        flex: 1;
        font-size: 0.32rem;
        padding-top: 0.2rem;
        padding-bottom: 0.2rem;
        background-color: #ededed;
        padding-left: 0.133333rem;
      }
    }
    .nav {
      margin-top: 0.4rem;
      padding-left: 0.306667rem;
      padding-right: 0.306667rem;
      display: -webkit-flex;
      display: flex;
      display: -webkit-box;
      display: -ms-flexbox;
      justify-content: flex-start;
      p {
        font-size: 0.32rem;
        padding: 0.4rem 0.133333rem;
      }
      .p-click {
        border-bottom: 3px solid #ff0101;
      }
    }
  }
  .order-content {
    padding-left: 0.333333rem;
    padding-right: 0.333333rem;
    box-sizing: border-box;
    .order-item {
      width: 100%;
      background-color: #fff;
      margin-top: 0.266667rem;
      border-radius: 0.333333rem;
      padding: 0.133333rem 0.266667rem;
      box-sizing: border-box;

      .item-header {
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        justify-content: space-between;
        align-items: center;
        border-bottom: 1px solid #eee;
        line-height: 2;
        .p-1 {
          font-size: 0.4rem;
        }
        .p-2 {
          font-size: 0.32rem;
          color: #999999;
          display: -webkit-flex;
          display: flex;
          display: -webkit-box;
          display: -ms-flexbox;
          align-items: center;
          .item-img {
            width: 0.333333rem;
          }
          .line {
            margin-left: 0.133333rem;
            margin-right: 0.133333rem;
          }
        }
      }
      .item-content {
        padding-top: 0.133333rem;
        padding-bottom: 0.133333rem;
        border-bottom: 1px solid #eee;
        .con {
          display: -webkit-flex;
          display: flex;
          display: -webkit-box;
          display: -ms-flexbox;
          justify-content: flex-start;

          .con-img {
            width: 2rem;
            height: 2rem;
          }
          .title {
            flex: 1;
            font-size: 0.4rem;
            padding-top: 0.466667rem;
            padding-left: 0.32rem;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .price {
          font-size: 0.32rem;
          display: -webkit-flex;
          display: flex;
          display: -webkit-box;
          display: -ms-flexbox;
          justify-content: flex-end;
          color: #999;
        }
        .color-red {
          color: #ff0000;
        }
      }
      .item-footer {
        display: -webkit-flex;
        display: flex;
        display: -webkit-box;
        display: -ms-flexbox;
        justify-content: flex-end;
        padding-top: 0.2rem;
        .mint-button--danger {
          color: #ff0000;
          background-color: #fff;
          border: 1px solid #ff0000;
          border-radius: 1rem;
          font-size: 0.346667rem;
          margin-left: 0.2rem;
        }
        .mint-button--default {
          color: #999999;
          background-color: #fff;
          border: 1px solid #999999;
          border-radius: 1rem;
          font-size: 0.346667rem;
          margin-left: 0.2rem;
        }
        .mint-button {
          height: 0.8rem;
        }
      }
    }
  }
}
</style>