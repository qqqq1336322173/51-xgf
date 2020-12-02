<template>
  <div class="appSearchPage">
    <div class="header-box">
      <img class="img-back"
           src="@/assets/img/app/search/img01.png"
           alt
           @click="goback" />
      <div class="serch-box">
        <img class="img-search"
             src="@/assets/img/app/search/img02.png"
             alt />
        <input class="sea-input"
               placeholder="JAVA"
               type="text"
               v-model.trim="keyword" />
      </div>
      <p class="btn-sty"
         @click="search">搜索</p>
    </div>
    <div class="container-box">
      <p class="title-1">
        <span class="span-sty">搜索历史</span>
        <img class="img-del"
             src="@/assets/img/app/search/img03.png"
             alt
             @click="clear" />
      </p>
      <div class="con-box">

        <p class="con-item"
           v-for="(data,i) in search_list"
           :key="i">
          <router-link :to="`/appDyInfoSearch?keyword=${data}`">
            {{data}}
          </router-link>
        </p>

      </div>
    </div>
    <div class="container-box">
      <p class="title-1">
        <span class="span-sty">搜索发现</span>
      </p>
      <div class="con-box">
        <p class="con-item"
           v-for="(hot,i) in hot_search"
           :key="i">
          <router-link :to="`/appDyInfoSearch?keyword=${hot.content}&page=1&rows=10`">
            {{hot.content}}
          </router-link>
        </p>

      </div>
    </div>
  </div>
</template>
<script>
import httpServer from "@/assets/js/httpServer";
import storage from "@/assets/js/storage";

export default {
  layout: "appBlank",
  name: "appSearchPage",
  data: function () {
    return {
      url: this.$store.state.serverUrl.serverUrl, //服务器地址
      keyword: '', //搜索关键字,,
      search_list: [1, 2],
      hot_search: []
    };
  },
  created () {
    //判断是否是手机端
    // console.log(sessionStorage.getItem('keyword'))
    //判断是否是手机端
    if (this.isMobile) {
      this.$router.push("/appSearchPage");
    } else {
      // this.$router.push("/searchNews?keyword=" + this.$store.state.search.keyword);
      this.$router.push({ path: '/searchNews', query: { keyword: sessionStorage.getItem('keyword') } });
    }
    // console.log(this);



  },
  mounted () {
    // console.log(this.search_list)
    // console.log(this.search_history.push(localStorage.getItem('search_history')))
    // this.search_list.push(localStorage.getItem('search_history')) 
    this.search_list = JSON.parse(localStorage.getItem('search_list')) || [];

    let url = this.url + "/index/hotSearch.action"
    httpServer(
      {
        url,
        method: "get",
      },

    )
      .then((res) => {
        this.hot_search = res.data.list
        console.log(this.hot_search)
      })
  },
  methods: {
    search () {
      var tmp_list = [];
      if (this.keyword.length == 0) {
        return false
      }
      console.log('sd', this.search_list);
      console.log(this.keyword)

      this.search_list.unshift(this.keyword)
      if (this.search_list.length > 10) {
        this.search_list.pop()
      }
      localStorage.setItem('search_list', JSON.stringify(this.search_list));
      localStorage.setItem('search_history', JSON.stringify(this.keyword))
      this.$router.push(`/appDyInfoSearch?keyword=${this.keyword}`)

    },
    clear () {
      let clear_list = [];
      this.search_list = []
      localStorage.setItem('search_list', JSON.stringify(clear_list));
    },
    goback () {
      history.go(-1);
    }
  }
};
</script>
<style lang="scss" scoped>
.appSearchPage {
  .header-box {
    background-color: #ff2a29;
    padding: 0.266667rem 0.533333rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .img-back {
      height: 0.666667rem;
      box-sizing: border-box;
    }
    .serch-box {
      width: 7.066667rem;
      background-color: #fff;
      height: 0.8rem;
      // border-radius: 0.4rem;
      border-radius: 0.533333rem;
      padding: 0.333333rem 0.2rem;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      .img-search {
        width: 0.533333rem;
        margin-right: 0.4rem;
      }
      .sea-input {
        outline: none;
        border: none;
      }
    }
    .btn-sty {
      font-size: 0.453333rem;
      color: #fff;
    }
  }
  .container-box {
    .title-1 {
      padding: 0.533333rem 0.4rem 0.48rem;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .span-sty {
        color: #000;
        font-size: 0.426667rem;
        font-weight: 600;
      }
      .img-del {
        width: 0.493333rem;
      }
    }
    .con-box {
      padding-left: 0.4rem;
      padding-right: 0.4rem;
      display: flex;
      justify-content: flex-start;
      flex-wrap: wrap;
      .con-item {
        background-color: #f8f8f8;
        padding-left: 0.2rem;
        padding-right: 0.2rem;
        line-height: 2;
        border-radius: 0.373333rem;
        font-size: 0.346667rem;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-right: 0.533333rem;
        margin-bottom: 0.533333rem;
      }
    }
  }
}
</style>