<template>
  <div class="my-body-app-dy-info">
    <!-- <mt-loadmore :top-method="loadTop"
                 @bottom-status-change="handleBottomChange"> -->
    <ul v-infinite-scroll="loadMore"
        infinite-scroll-disabled="loading"
        infinite-scroll-distance="10">
      <li v-for="(item, key) in total_news_list"
          :key="key"
          @click="gotoNewsDetails(item.newsid)">
        <el-row :gutter="20">
          <el-col :span="16">
            <div class="dyinfo-item">
              <div class="content">
                {{ item.title }}
              </div>
              <div class="date">{{item.createtime}}</div>
            </div>
          </el-col>
          <el-col :span="8">
            <div class="">
              <img src="~assets/img/app/dyInfo/detail_info.png"
                   alt="详情图" />
            </div>
          </el-col>
        </el-row>
        <hr />
        <!-- <el-row :gutter="20">
            <el-col :span="16">
              <div class="">
                <div class="content">
                  学习UI设计，做好这三点，你就成功了一半！
                </div>
                <div class="date">2020-09-02</div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="">
                <img src="~assets/img/app/dyInfo/detail_info.png"
                     alt="详情图">
              </div>
            </el-col>
          </el-row>
          <hr>
          <el-row :gutter="20">
            <el-col :span="16">
              <div class="">
                <div class="content">
                  学习UI设计，做好这三点，你就成功了一半！
                </div>
                <div class="date">2020-09-02</div>
              </div>
            </el-col>
            <el-col :span="8">
              <div class="grid-content bg-purple">
                <img src="~assets/img/app/dyInfo/detail_info.png"
                     alt="详情图">
              </div>
            </el-col>
          </el-row>
          <hr> -->
      </li>
    </ul>
    <div slot="top"
         class="mint-loadmore-top">
      <span v-show="topStatus !== 'loading'"
            :class="{ rotate: topStatus === 'drop' }">↓</span>
      <span v-show="topStatus === 'loading'">Loading...</span>
    </div>
    <!-- </mt-loadmore> -->
  </div>
</template>

<script>
import Vue from "vue";
import { InfiniteScroll } from "mint-ui";
Vue.use(InfiniteScroll);
import { Loadmore } from "mint-ui";
Vue.component(Loadmore.name, Loadmore);
import httpServer from "@/assets/js/httpServer";
export default {
  data () {
    return {
      topStatus: "",
      news_list: [],
      url: this.$store.state.serverUrl.serverUrl, //服务器地址
      page: 1, //第几页
      rows: 10, //一页四条
      total: "", //总页码
      total_news_list: [],
    };
  },
  created () {
    this.init();
  },
  methods: {
    init () {
      console.log(this.page);
      let url = this.url + "news/newsForPage.action";
      httpServer(
        {
          url,
          method: "get",
        },
        {
          page: this.page,
          rows: this.rows,
        }
      )
        .then((res) => {
          res = res.data;
          this.news_list = res.newslist || [];
          console.log(this.page);
          this.total = res.total;
          if (this.page == 1) {
            //第一条数据
            this.total_news_list = res.newslist || [];
            console.log(this.total_news_list);
          }
        })
        .catch((err) => {
          this.$message.error(err);
        });
    },
    loadTop () {
      // ...// 加载更多数据
      this.$refs.loadmore.onTopLoaded();
    },
    loadBottom () {
      console.log(1);
      this.update();
      // ...// 加载更多数据
      this.allLoaded = true; // 若数据已全部获取完毕
      this.$refs.loadmore.onBottomLoaded();
    },
    handleBottomChange (status) {
      this.topStatus = status;
    },
    update () {
      this.page++;
      // console.log(this.page)
      let url = this.url + "news/newsForPage.action";
      httpServer(
        {
          url,
          method: "get",
        },
        {
          page: this.page,
          rows: this.rows,
        }
      )
        .then((res) => {
          res = res.data;
          this.news_list = res.newslist || [];
          console.log(res);
          this.total = res.total;
          if (this.page == 1) {
            //第一条数据
            this.total_news_list = res.newslist || [];
          } else {
            // this.total_news_list.concat(this.news_list);
            // a.push.apply(a,[4,5,6]);
            this.total_news_list.push.apply(
              this.total_news_list,
              this.news_list
            );
            // this.total_news_list.push(this.news_list);
          }
          console.log(this.news_list, this.total_news_list);
          // return true;
        })
        .catch((err) => {
          this.$message.error(err);
        });
    },
    gotoNewsDetails (id) {
      this.$router.push("/appNewsDetails?id=" + id);
    },
    loadMore () {
      //总共是100, total = 100 数组的长度是99 100
      if (this.total <= this.total_news_list.length) {
        this.topStatus = "";
        // this.allLoaded = true; // 若数据已全部获取完毕
        // this.$refs.loadmore.onBottomLoaded();
        return false;
      }
      this.topStatus = "loading";
      this.update();
    },
    // handleTopChange (status) {
    //   this.topStatus = status;
    // },
    // loadTop () {
    //   // ...// 加载更多数据
    //   this.$refs.loadmore.onTopLoaded();
    // },
    // loadBottom () {
    //   // ...// 加载更多数据
    //   this.allLoaded = true;// 若数据已全部获取完毕
    //   this.$refs.loadmore.onBottomLoaded();
    // }
    // ...
  },
  // ...
};
</script>

<style scoped>
.mint-popup {
  position: absolute;
  background-color: rgba(0, 0, 0, 0.5);
  top: 22%;
  left: 76%;
  transform: translate3d(-50%, -50%, 0);
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  transition: 0.2s ease-out;
}
</style>
<style lang="scss" scoped>
.my-body-app-dy-info {
  padding: 0.666667rem 0.32rem;
  .el-row {
    margin-left: 0;
    margin-right: 0;
  }
  .content {
    font-size: 0.4rem;
    line-height: 0.586667rem;
    color: #333333;
    word-break: break-all;
  }
  .date {
    font-size: 0.293333rem;
    color: #888888;
    text-align: left;
  }

  img {
    width: 2.666667rem;
    border-radius: 0.16rem;
  }
  .dyinfo-item {
    height: 1.92rem;
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    flex-direction: column;
    justify-content: space-between;
    .content {
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
    }
  }
}
</style>
