<template>
  <div class="my-dy-info">
    <div>
      <div class="container">
        <div class="news-content">
          <el-row v-for="(item, key) in newslist"
                  :gutter="15"
                  class="el-form-item"
                  :key="key">
            <el-col :span="7">
              <div class="new-picture"
                   :style="{ backgroundImage: 'url(' + newPic + ')' }"></div>
            </el-col>
            <el-col :span="16">
              <div class="new-article-content">
                <div class="title"
                     style="font-size:16px;color:#000">
                  {{ item.title }}
                </div>
                <div class="news-content"
                     style="font-size:16px;color:#777777;"
                     v-html="unescape(item.content || '' )">
                </div>
                <div class="news-content-footer">
                  <div class="news-content-footer-time">
                    {{ item.createtime }}
                  </div>
                  <div class="news-content-footer-link"
                       style="color:#3184e0">
                    <nuxt-link :to="{ name: 'newsDetail', query: { id: item.newsid } }">阅读全文</nuxt-link>
                  </div>
                </div>
              </div>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="24">
              <div class="news-page">
                <el-pagination background
                               layout="prev, pager, next"
                               :total="total"
                               @size-change="changeNewsList"
                               @current-change="getNewsList">
                </el-pagination>
              </div>
            </el-col>
          </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import httpServer from "@/assets/js/httpServer";
export default {
  data () {
    return {
      bg: require("@/assets/img/dyInfo/bannerHanye.png"),
      newPic: require("@/assets/img/dyInfo/newPic.png"),
      url: this.$store.state.serverUrl.serverUrl, //服务器地址
      page: 1, //第几页
      rows: 10, //一页四条
      total: 10, //一共有几页
      newslist: [], //新闻列表
      cData: [],
      keyword: this.$store.getters.getKeyword
    };
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        console.log(555)
        //有变化就重新赋值,没变化就用原来的值,刷新后state会丢失
        if (val.fullPath != oldVal.fullPath) {
          this.$store.state.search.keyword = val.query.keyword;
          sessionStorage.setItem('keyword', val.query.keyword)
        } else {
          this.$store.state.search.keyword = sessionStorage.getItem('keyword');
        }
        // this.keyword = val.query.keyword || '';
        this.init(this.$store.state.search.keyword)
      },
      // 深度观察监听
      deep: true
    }
  },
  filters: {
    unescape: function (html) {
      return html
        .replace(html ? /&(?!#?\w+;)/g : /&/g, "&")
        .replace(/</g, "<")
        .replace(/>/g, ">")
        .replace(/"/g, '"')
        .replace(/'/g, "'");
    }
  },
  created () {
    // this.init();
  },
  mounted () {
    console.log(this.$store.state.search.keyword)
    this.init(this.$store.state.search.keyword);
  },
  methods: {
    //初始化
    init (keyword) {
      let url = this.url + "news/newsByKeyWordForPage.action";
      httpServer(
        {
          url,
          method: "get"
        },
        {
          keyword: keyword,
          page: this.page,
          rows: this.rows
        }
      )
        .then(res => {
          res = res.data;
          this.newslist = res.newslist || [];
          console.log(this.newslist);
          this.total = res.total;
        })
        .catch(err => {
          this.$message.error(err);
        });
    },
    changeNewsList (a) {
      console.log("a:" + a);
    },
    getNewsList (b) {
      this.page = b;
      this.init();
    }
  }
};
</script>

<style scoped lang="scss">
@import "@/assets/css/public.css";
@import "@/assets/css/dyInfo.css";
</style>