<template>
  <div class="my-user-info">
    <div class="">
      <el-radio-group type="border-card"
                      v-model.trim="tabPosition"
                      style="margin-bottom: 30px;">
      </el-radio-group>
      <el-tabs :tab-position="tabPosition"
               style="height: 200px;"
               @tab-click="userInfoEvent">
        <!-- <el-tab-pane>
          <span slot="label">
            <svg class="icon-user-info"
                 aria-hidden="true">
              <use xlink:href="#icon-wodekecheng"></use>
            </svg>
            我的课程
          </span>
          <span>11</span>
        </el-tab-pane> -->
        <el-tab-pane>
          <span slot="label">
            <svg class="icon-user-info"
                 aria-hidden="true">
              <use xlink:href="#icon-74wodedingdan1"></use>
            </svg>
            我的订单
          </span>
          <el-tabs v-model.trim="orderActiveName"
                   @tab-click="orderHandleClick">
            <el-tab-pane label="全部"
                         name="first">
              <el-table :data="orderList"
                        style="width: 100%">
                <el-table-column label="订单号"
                                 width="180">
                  <template slot-scope="scope">
                    <span>
                      {{ scope.row.orderno }}
                    </span>
                  </template>
                </el-table-column>
                <el-table-column label="下单时间"
                                 width="120">
                  <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span>{{ scope.row.createtime }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="产品名称"
                                 width="100">
                  <template slot-scope="scope">
                    <span>{{ scope.row.productname }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="证书名称"
                                 width="100">
                  <template slot-scope="scope">
                    <span>{{ scope.row.authlevel }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="价格"
                                 width="130">
                  <template slot-scope="scope">
                    <span>￥{{ scope.row.orderprice }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="状态"
                                 width="100">
                  <template slot-scope="scope">
                    <span>{{
                      scope.row.orderstatus == 0
                        ? "待支付"
                        : scope.row.orderstatus == 1
                        ? "购买成功"
                        : scope.row.orderstatus == 2
                        ? "已取消"
                        : ""
                    }}</span>
                  </template>
                </el-table-column>
                <!-- <el-table-column label="姓名" width="180">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                      <p>姓名: {{ scope.row.name }}</p>
                      <p>住址: {{ scope.row.address }}</p>
                      <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.name }}</el-tag>
                      </div>
                    </el-popover>
                  </template>
                </el-table-column> -->
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <p v-if="scope.row.orderstatus == 0">
                      <el-button size="mini"
                                 @click="handlePayEdit(scope.row.productid)">付款</el-button>
                      <el-button size="mini"
                                 type="danger"
                                 @click="handleDelete(scope.row.id)">取消</el-button>
                    </p>
                    <p v-else-if="scope.row.orderstatus == 1">
                      <el-button size="mini"
                                 @click="handleSchoolEdit(scope.$index, scope.row)">去上课</el-button>
                    </p>
                    <p v-else-if="scope.row.orderstatus == 2">
                      <el-button size="mini"
                                 type="danger"
                                 @click="handleDelete(scope.row.id)">删除</el-button>
                    </p>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="等待付款"
                         name="second">
              <el-table :data="orderWaitPayList"
                        style="width: 100%">
                <el-table-column label="订单号"
                                 width="180">
                  <template slot-scope="scope">
                    <span>
                      {{ scope.row.orderno }}
                    </span>
                  </template>
                </el-table-column>
                <el-table-column label="下单时间"
                                 width="120">
                  <template slot-scope="scope">
                    <i class="el-icon-time"></i>
                    <span>{{ scope.row.createtime }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="产品名称"
                                 width="100">
                  <template slot-scope="scope">
                    <span>{{ scope.row.productname }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="证书名称"
                                 width="100">
                  <template slot-scope="scope">
                    <span>{{ scope.row.authlevel }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="价格"
                                 width="130">
                  <template slot-scope="scope">
                    <span>￥{{ scope.row.orderprice }}</span>
                  </template>
                </el-table-column>
                <el-table-column label="状态"
                                 width="100">
                  <template slot-scope="scope">
                    <span>{{
                      scope.row.orderstatus == 0
                        ? "待支付"
                        : scope.row.orderstatus == 1
                        ? "购买成功"
                        : scope.row.orderstatus == 2
                        ? "已取消"
                        : ""
                    }}</span>
                  </template>
                </el-table-column>
                <!-- <el-table-column label="姓名" width="180">
                  <template slot-scope="scope">
                    <el-popover trigger="hover" placement="top">
                      <p>姓名: {{ scope.row.name }}</p>
                      <p>住址: {{ scope.row.address }}</p>
                      <div slot="reference" class="name-wrapper">
                        <el-tag size="medium">{{ scope.row.name }}</el-tag>
                      </div>
                    </el-popover>
                  </template>
                </el-table-column> -->
                <el-table-column label="操作">
                  <template slot-scope="scope">
                    <p v-if="scope.row.orderstatus == 0">
                      <el-button size="mini"
                                 @click="handlePayEdit(scope.row.productid)">付款</el-button>
                    </p>
                    <p v-else-if="scope.row.orderstatus == 1">
                      <el-button size="mini"
                                 @click="handleSchoolEdit(scope.$index, scope.row)">去上课</el-button>
                    </p>
                    <p v-else-if="scope.row.orderstatus == 2">
                      <el-button size="mini"
                                 type="danger"
                                 @click="handleDelete(scope.row.id)">删除</el-button>
                    </p>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </el-tab-pane>
        <el-tab-pane>
          <span slot="label">
            <svg class="icon-user-info"
                 aria-hidden="true">
              <use :xlink:href="icon_personal"></use>
            </svg>
            个人信息
          </span>
          <!-- 个人信息组件 -->
          <personal-info :userInfo="userInfo" />
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>
<script>
import { Message, MessageBox } from "element-ui";
import httpServer from "@/assets/js/httpServer";
import PersonalInfo from "@/components/body/personalInfo.vue";
export default {
  layout: "user",
  data () {
    return {
      tabPosition: "left",
      icon_personal: "#icon-wo",
      orderActiveName: "first",
      /*
       0-未支付  1-已支付  2-已取消
       操作的按钮
       如果是1 操作的是去上课
       如果是0 操作的是付款 取消
       如果是2 操作的是删除
      */
      orderList: [
        // {
        //   orderno: "20219083012021908",
        //   date: "2016-05-02 16:36:00",
        //   authlevel: "OCP",
        //   address: "上海市普陀区金沙江路 1518 弄",
        //   orderstatus: 0,
        //   orderprice: 100
        // },
        // {
        //   orderno: "20219083022021908",
        //   date: "2016-05-04 16:36:00",
        //   authlevel: "OCA",
        //   address: "上海市普陀区金沙江路 1517 弄",
        //   orderstatus: 1,
        //   orderprice: 100
        // },
        // {
        //   orderno: "20219083032021908",
        //   date: "2016-05-01 16:36:00",
        //   authlevel: "OCM",
        //   address: "上海市普陀区金沙江路 1519 弄",
        //   orderstatus: 2,
        //   orderprice: 100
        // },
        // {
        //   orderno: "20219083042021908",
        //   date: "2016-05-03 16:36:00",
        //   authlevel: "OCM",
        //   address: "上海市普陀区金沙江路 1516 弄",
        //   orderstatus: 0,
        //   orderprice: 100
        // },
        // {
        //   orderno: "20219083012021908",
        //   date: "2016-05-02 16:36:00",
        //   authlevel: "OCP",
        //   address: "上海市普陀区金沙江路 1518 弄",
        //   orderstatus: 0,
        //   orderprice: 100
        // },
        // {
        //   orderno: "20219083022021908",
        //   date: "2016-05-04 16:36:00",
        //   authlevel: "OCA",
        //   address: "上海市普陀区金沙江路 1517 弄",
        //   orderstatus: 1,
        //   orderprice: 100
        // }
      ],
      orderWaitPayList: [
        // {
        //   orderno: "20219083012021908",
        //   date: "2016-05-02 16:36:00",
        //   authlevel: "OCP",
        //   address: "上海市普陀区金沙江路 1518 弄",
        //   orderstatus: 0,
        //   orderprice: 100
        // },
        // {
        //   orderno: "20219083022021908",
        //   date: "2016-05-04 16:36:00",
        //   authlevel: "OCA",
        //   address: "上海市普陀区金沙江路 1517 弄",
        //   orderstatus: 0,
        //   orderprice: 100
        // },
        // {
        //   orderno: "20219083032021908",
        //   date: "2016-05-01 16:36:00",
        //   authlevel: "OCM",
        //   address: "上海市普陀区金沙江路 1519 弄",
        //   orderstatus: 0,
        //   orderprice: 100
        // },
        // {
        //   orderno: "20219083042021908",
        //   date: "2016-05-03 16:36:00",
        //   authlevel: "OCM",
        //   address: "上海市普陀区金沙江路 1516 弄",
        //   orderstatus: 0,
        //   orderprice: 100
        // },
        // {
        //   orderno: "20219083012021908",
        //   date: "2016-05-02 16:36:00",
        //   authlevel: "OCP",
        //   address: "上海市普陀区金沙江路 1518 弄",
        //   orderstatus: 0,
        //   orderprice: 100
        // },
        // {
        //   orderno: "20219083022021908",
        //   date: "2016-05-04 16:36:00",
        //   authlevel: "OCA",
        //   address: "上海市普陀区金沙江路 1517 弄",
        //   orderstatus: 0,
        //   orderprice: 100
        // }
      ],
      userInfo: {
        id: 1,
        nickname: "安博",
        username: "安博",
        sex: 0,
        address: "福建 福州",
        telphone: "130 8888 8888",
        qq: "88868 8888 8888",
        email: "anbo@163.com"
      },
      url: this.$store.state.serverUrl.serverUrl //服务器地址
    };
  },
  components: {
    PersonalInfo
  },
  created () {
    //用户名
    let userInfo = JSON.parse(this.$store.getters.getUser);
    this.userInfo = userInfo;
    // console.log(userInfo)
    //初始化数据
    this.init();

    // let { userInfo } = this.$store.state.serverUrl
  },
  mounted () {
    import("@/assets/js/iconUserInfofont.js").then(icon => { });
  },
  methods: {
    //初始化数据
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
          let allorder = res.allorder || [], //全部订单，
            unpayorder = res.unpayorder || []; //未付款订单
          this.orderList = allorder;
          this.orderWaitPayList = unpayorder;
          console.log(allorder, unpayorder);
        })
        .catch(err => {
          this.$message.error(err);
        });
    },
    userInfoEvent (tab, event) {
      // console.log(tab, event)
      this.icon_personal = tab.index === "1" ? "#icon-wo1" : "#icon-wo";
    },
    orderHandleClick (tab, event) {
      console.log(tab, event);
    },
    //付款
    handlePayEdit (productid) {
      console.log(productid)
      this.$router.push({ name: 'order', query: { productid: productid } })
    },
    //取消订单
    handleDelete (orderid) {
      let url = this.url + "user/cancelOrder.action";
      //确认要取消吗？
      this.$confirm("确定要删除订单?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          console.log(1);
          this.ajaxCancel(orderid, url);
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });

      console.log(orderid);
    },
    ajaxCancel (orderid, url) {
      httpServer(
        {
          url,
          method: "post"
        },
        {
          orderid
        }
      )
        .then(res => {
          res = res.data;
          let { returnmessage, returnstatus } = res;
          console.log(returnstatus);
          if (returnstatus == "0") {
            this.$message({
              type: "success",
              message: "取消成功!"
            });
            //取消完再去重新获取商品
            this.init();
            // // 3s后刷新
            // setTimeout(() => {
            //   location.reload();
            // }, 2000);
            // location.reload();
          } else {
            this.$message({
              type: "info",
              message: "已取消删除"
            });
          }
          console.log(res);
        })
        .catch(err => {
          this.$message.error(err);
        });
    },
    //去上课
    handleSchoolEdit (index, row) {
      console.log(index, row);
    }
  }
};
</script>

<style>
.el-table__body-wrapper {
  overflow: hidden;
  position: relative;
  overflow: auto;
  height: 278px;
}
.icon-user-info {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.my-user-info > div > .el-tabs {
  min-height: 400px;
  height: auto;
}
/*选中红色*/
.el-tabs__item.is-active {
  color: #f00;
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #99a9bf;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
/*选项卡样式*/
.my-user-info > div > .el-tabs {
  margin-left: 16%;
}
.el-tabs__active-bar,
.el-tabs__active-bar.is-top {
  background-color: #f00;
}
.my-user-info > div > div > .el-tabs__content {
  width: 86%;
  padding-left: 15px;
}
</style>
