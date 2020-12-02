<template>
  <div class="my-dy-info">
    <floating-window></floating-window>
    <el-main>
      <div class="container-fluid my-dy-info-banner" :style="{ backgroundImage: 'url(' + bg + ')' }">
        <!-- <img src="images/my-dy-info-banner-news.png" alt=""> -->
      </div>

      <div>
        <div class="container">
          <div class="news-content">
            <el-row v-for="(item, key) in newslist" :gutter="15" class="el-form-item" :key="key">
              <el-col :span="7">
                <div class="new-picture" :style="{ backgroundImage: 'url(' + newPic + ')' }"></div>
              </el-col>
              <el-col :span="16">
                <div class="new-article-content">
                  <div class="title" style="font-size:16px;color:#000">
                    {{ item.title }}
                  </div>
                  <div class="news-content" style="font-size:16px;color:#777777;" v-html="unescape(item.content)"></div>
                  <div class="news-content-footer">
                    <div class="news-content-footer-time">
                      {{ item.createtime }}
                    </div>
                    <div class="news-content-footer-link" style="color:#3184e0">
                      <nuxt-link :to="{ name: 'newsDetail', query: { id: item.newsid } }">阅读全文</nuxt-link>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>

            <!-- <el-row :gutter="15"
                    class="el-form-item">
              <el-col :span="7">
                <div class="new-picture"
                     :style="{ backgroundImage: 'url(' + newPic + ')' }"></div>
              </el-col>
              <el-col :span="16">
                <div class="new-article-content">
                  <div class="title"
                       style="font-size:16px;color:#000">
                    学习UI设计，做好这三点，你就成功了一半
                  </div>
                  <div class="news-content"
                       style="font-size:16px;color:#777777;">
                    随着互联浪潮的来袭，移动互联网的盛行，相对应的高技术职业也层出不穷，UI设计师便是其中之一。
                    那么，怎么样才能学好、学精UI设计呢?其实只要以下这三件事做好了，绝对不愁学不好UI设计!
                  </div>
                  <div class="news-content-footer">
                    <div class="news-content-footer-time">2020-09-02</div>
                    <div class="news-content-footer-link"
                         style="color:#3184e0">
                      <nuxt-link to="/newsDetail">阅读全文</nuxt-link>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="15"
                    class="el-form-item">
              <el-col :span="7">
                <div class="new-picture"
                     :style="{ backgroundImage: 'url(' + newPic + ')' }"></div>
              </el-col>
              <el-col :span="16">
                <div class="new-article-content">
                  <div class="title"
                       style="font-size:16px;color:#000">
                    学习UI设计，做好这三点，你就成功了一半
                  </div>
                  <div class="news-content"
                       style="font-size:16px;color:#777777;">
                    随着互联浪潮的来袭，移动互联网的盛行，相对应的高技术职业也层出不穷，UI设计师便是其中之一。
                    那么，怎么样才能学好、学精UI设计呢?其实只要以下这三件事做好了，绝对不愁学不好UI设计!
                  </div>
                  <div class="news-content-footer">
                    <div class="news-content-footer-time">2020-09-02</div>
                    <div class="news-content-footer-link"
                         style="color:#3184e0">
                      <nuxt-link to="/newsDetail">阅读全文</nuxt-link>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row>
            <el-row :gutter="15"
                    class="el-form-item">
              <el-col :span="7">
                <div class="new-picture"
                     :style="{ backgroundImage: 'url(' + newPic + ')' }"></div>
              </el-col>
              <el-col :span="16">
                <div class="new-article-content">
                  <div class="title"
                       style="font-size:16px;color:#000">
                    学习UI设计，做好这三点，你就成功了一半
                  </div>
                  <div class="news-content"
                       style="font-size:16px;color:#777777;">
                    随着互联浪潮的来袭，移动互联网的盛行，相对应的高技术职业也层出不穷，UI设计师便是其中之一。
                    那么，怎么样才能学好、学精UI设计呢?其实只要以下这三件事做好了，绝对不愁学不好UI设计!
                  </div>
                  <div class="news-content-footer">
                    <div class="news-content-footer-time">2020-09-02</div>
                    <div class="news-content-footer-link"
                         style="color:#3184e0">
                      <nuxt-link to="/newsDetail">阅读全文</nuxt-link>
                    </div>
                  </div>
                </div>
              </el-col>
            </el-row> -->
            <el-row>
              <el-col :span="24">
                <div class="news-page">
                  <el-pagination background layout="prev, pager, next" :total="total" @size-change="changeNewsList"
                    @current-change="getNewsList">
                  </el-pagination>
                </div>
              </el-col>
            </el-row>
          </div>
        </div>
      </div>
    </el-main>
  </div>
</template>

<script>
  import floatingWindow from "@/components/floatingWindow";
  import httpServer from "@/assets/js/httpServer";
  export default {
    components: {
      floatingWindow
    },
    data() {
      return {
        bg: require("@/assets/img/dyInfo/bannerHanye.png"),
        newPic: require("@/assets/img/dyInfo/newPic.png"),
        url: this.$store.state.serverUrl.serverUrl, //服务器地址
        page: 1, //第几页
        rows: 10, //一页四条
        total: 10, //一共有几页
        newslist: [] //新闻列表
      };
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
    created() {
      this.init();
    },
    mounted() {
      console.log(this);
      if (this.isMobile) {
        //移动端
        this.$router.replace("/appDyInfo");
      } else {
        //PC端
        this.$router.replace("/dyInfo");
      }
    },
    methods: {
      //初始化
      init() {
        let url = this.url + "news/newsForPage.action";
        httpServer(
          {
            url,
            method: "get"
          },
          {
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
      changeNewsList(a) {
        console.log("a:" + a);
      },
      getNewsList(b) {
        this.page = b;
        this.init();
      }
    }
  };
</script>

<style scoped>
  @import "@/assets/css/public.css";
  @import "@/assets/css/dyInfo.css";
  /*分页的样式*/
</style>