<template>
  <div class="newsDetail">
    <img class="new-banner"
         src="~assets/img/newsDetail/banner01.png"
         alt />
    <div class="block">
      <div class="m-content">
        <div class="new-left">
          <div class="title">
            <p>行业动态 > 详情</p>
          </div>
          <div class="content">
            <p class="p-1">{{newsinfo.newstitle}}</p>
            <p class="p-2">{{newsinfo.createtime}}</p>
            <div class="p-3"
                 v-html="newsinfo.newscontent"></div>
          </div>
        </div>
        <div class="new-right">
          <div class="right-title">
            <p>推存动态</p>
          </div>
          <div class="right-content">
            <div class="right-item"
                 @click="goNewsDetail(item.newsid)"
                 v-for="item in newList"
                 :key="item.newsid">
              <p class="r-title">{{item.title}}</p>
              <p class="intro"
                 v-html="unescape(item.content)"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import httpServer from "@/assets/js/httpServer";
export default {
  name: "newsDetail",
  data: function () {
    return {
      id: -1,
      newsinfo: {},
      newList: [],
      url: this.$store.state.serverUrl.serverUrl, //服务器地址
    };
  },
  methods: {
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
    // 获取新闻列表
    getnewLis () {
      httpServer(
        {
          url: "http://120.78.61.58:81/eduonline/news/newsForPage.action",
          method: "get",
        },
        {
          page: 1,
          rows: 5,
        }
      )
        .then((res) => {
          this.newList = res.data.newslist;
          for (let i = 0; i < this.newList.length; i++) {
            const str = this.newList[i].content;
          }
        })
        .catch((err) => err);
    },
    // 去新闻详情页面
    goNewsDetail (id) {
      this.id = id;
      this.getNewDetail();
      this.getnewLis();
    },
  },
  created () {
    this.id = this.$route.query.id;
    this.getNewDetail();
    this.getnewLis();
  },
};
</script>
<style lang="scss" scoped>
* {
  font-family: "Microsoft YaHei";
}
.block {
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  justify-content: center;
}
.m-content {
  width: 1200px;
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  justify-content: space-between;
  padding-top: 35px;
  margin-bottom: 60px;
}
.new-left {
  width: 880px;
  //   height: 500px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
  border-radius: 12px;
  padding: 20px 40px;
  box-sizing: border-box;
  .title {
    font-size: 14px;
    color: #757575;
    line-height: 3;
    border-bottom: 1px solid #bfbfbf;
  }
  .content {
    padding: 20px;
    .p-1 {
      font-size: 24px;
      font-weight: blod;
      text-align: center;
    }
    .p-2 {
      font-size: 14px;
      color: #bdbdbd;
      text-align: center;
      line-height: 4;
    }
    .p-3 {
      font-size: 16px;
      color: #333;
      line-height: 1.8;
      text-indent: 2em;
      // text-align: center;

      img {
        width: 600px;
        height: 300px;
        margin-top: 30px;
        margin-bottom: 30px;
      }
    }
  }
}
.new-right {
  width: 300px;
  min-height: 500px;
  padding: 26px 30px 20px;
  box-shadow: rgba(0, 0, 0, 0.3) 0px 0px 10px;
  border-radius: 12px;
  box-sizing: border-box;
  .right-title {
    font-size: 18px;
    color: #000;
    line-height: 2;
    border-bottom: 1px solid #bfbfbf;
  }

  .right-content {
    .right-item {
      font-size: 16px;
      padding-right: 5px;
      .r-title {
        font-weight: 700;
        color: #333;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        line-height: 3;
      }
      .intro {
        color: #666;
        text-indent: 25px;
        line-height: 1.5;
      }
    }
  }
}
.new-banner {
  width: 100%;
  height: 400px;
}
</style>
