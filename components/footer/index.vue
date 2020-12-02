<template>
  <!-- :style="{backgroundImage:'url('+ bg + ')'}" -->
  <div class="my-footer"
       :style="{ backgroundImage: 'url(' + bg + ')' }">
    <el-row :gutter="10">
      <!-- <el-col :span="10">
       <div>
          <ul>
            <li><span>我要留言</span></li>
            <li>
              <el-input v-model.trim="username"
                        placeholder="姓名"></el-input>
            </li>
            <li>
              <el-input v-model.trim="tel"
                        placeholder="电话"></el-input>
            </li>
            <li>
              <el-input v-model.trim="msg"
                        placeholder="留言内容"></el-input>
            </li>
            <li class="commit-btn">
              <el-button size="mini">提交</el-button>
            </li>
          </ul>

        </div> 
      </el-col>-->
      <el-col :offset="8"
              :span="3">
        <div>
          <img width="100px"
               :src="qq"
               alt="qq联系方式" />
        </div>
        <!-- <div class="gz-content">
          扫码咨询官方QQ
        </div> -->
      </el-col>
      <el-col :span="3">
        <div>
          <img width="100px"
               :src="wx"
               alt="微信公众号二维码" />
        </div>
        <!-- <div class="gz-content">
          关注官方微信
        </div> -->
      </el-col>
      <el-col :span="9">
        <div class="friend-link">
          <p>
            <span>友情链接：</span>&nbsp;
            <a href="http://www.91above.com/">安博科技</a>
            &nbsp; &nbsp;
            <a href="http://www.51xgf.cn/">51学工坊</a>
            &nbsp; &nbsp;
            <a href="http://mzy.yketang.com/">湄职院软件学院云平台</a>
          </p>
          <!-- <a href="web/gywm.jsp">关于我们</a> &nbsp; <span>合作伙伴</span>-->
          <p><span>24小时在线热线 :</span> <span>18805000100</span></p>
          <!--    <p><span>更多信息关注： </span> <img  src="web/images/change/index_ft_wb.png"> &nbsp; <img  src="web/images/change/index_ft_wx.png"></p> -->
          <p>Copyright © 51学工坊 版权所有 闽ICP备17001998号</p>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      username: "",
      tel: "",
      msg: "",
      qq: require("@/assets/img/index/qq.png"),
      wx: require("@/assets/img/index/51xgf.png"),
      bg: require("@/assets/img/index_ft_bg.png")
    };
  }
};
</script>

<style lange="scss" >
.el-footer {
  padding: 0;
}
.el-input {
  margin: 8px 0;
}
.my-footer {
  /* background: url(/_nuxt/assets/img/index_ft_bg.png); */
  padding: 70px;
  background-size: cover;
  color: #fff;
}
.friend-link > p > a {
  color: #fff;
}
.friend-link {
  height: 100px;
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
  font-weight: 700;
}
.commit-btn > button {
  background: #f00;
  border: 0;
  color: #fff;
}
.my-footer {
}
.el-col-3 {
  width: auto;
}
</style>
