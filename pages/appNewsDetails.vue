<template>
  <div class="appNewsDetails">
    <appNewsDetailsHeader></appNewsDetailsHeader>
    <div class="app-news-content">
      <p class="news-title">{{newsinfo.newstitle}}</p>
      <p class="news-date">{{newsinfo.createtime}}</p>
      <div class="news-content"
           v-html="newsinfo.newscontent"></div>
    </div>
  </div>
</template>
<script>
import appNewsDetailsHeader from "@/components/header/app/appNewsDetailsHeader";
import httpServer from "@/assets/js/httpServer";
export default {
  name: "appNewsDetails",
  layout: 'appBlank',
  components: { appNewsDetailsHeader },
  data () {
    return {
      newsinfo: {},
      newList: [],
      url: this.$store.state.serverUrl.serverUrl, //服务器地址
    }
  },
  created () {
    this.id = this.$route.query.id;
    this.getNewDetail();
    // this.getnewLis();
  },

  methods: {
    // 页面跳转
    goSon (path) {
      this.$router.push({
        name: path,
      });
    },
    // 获取新闻详情
    getNewDetail () {
      console.log(this.id)
      let url = this.url + "news/newsInfo.action"
      httpServer(
        {
          url,
          method: "get",
        },
        {
          id: this.id,
        }
      )
        .then((res) => {
          console.log(res);
          this.newsinfo = res.data.newsinfo;
        })
        .catch((err) => err);
    },
  },
};
</script>
<style lang="scss" scoped>
.appNewsDetails {
  width: 100vw;
  height: 100vh;
  background-color: #fff;
  font-family: "Microsoft YaHei";
  * {
    margin: 0;
    padding: 0;
  }
  .app-news-content {
    padding: 0.853333rem 0.32rem;
    .news-title {
      font-size: 0.426667rem;
      color: #333;
      font-weight: bold;
    }
    .news-date {
      font-size: 0.293333rem;
      color: #888;
      margin-top: 0.373333rem;
      margin-bottom: 0.533333rem;
    }
    .news-content {
      font-size: 0.346667rem;
      color: #333;
      line-height: 1.5;
    }
  }
}
</style>