<template>
  <div class="countSearch">
    <div class="container">
      <div class="searchInfo"><span>{{keyword}}</span>的搜索结果 共计<span>{{total}}</span>条</div>
    </div>
  </div>
</template>

<script>
import httpServer from "@/assets/js/httpServer";
export default {
  // props: ['keyword'],
  data () {
    return {
      url: this.$store.state.serverUrl.serverUrl,//服务器地址
      total: 0,
      cData: [],
      keyword: this.$store.state.search.keyword
    };
  },
  created () {

  },
  mounted () {
    // console.log(this.keyword)
    // console.log(this.$route.query.keyword)

    //如果本地有值就
    if (sessionStorage.getItem('keyword')) {
      this.keyword = this.$store.state.search.keyword = sessionStorage.getItem('keyword');
    }
    console.log(this.keyword)
    console.log(this.$store.state.search.keyword)
    this.init(this.$store.state.search.keyword);
  },
  watch: {
    $route: {
      handler: function (val, oldVal) {
        console.log(val, oldVal)
        // console.log(val)
        //假如这个有值
        //有变化就重新赋值,没变化就用原来的值,刷新后state会丢失
        if (val.fullPath != oldVal.fullPath) {
          console.log(1)
          this.$store.state.search.keyword = val.query.keyword;
          sessionStorage.setItem('keyword', val.query.keyword);
          this.keyword = val.query.keyword;
        } else {
          console.log(2)
          this.$store.state.search.keyword = sessionStorage.getItem('keyword');
        }
        // this.keyword = val.query.keyword || '';
        this.init(this.$store.state.search.keyword)
      },
      // 深度观察监听
      deep: true
    }
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
          page: 1,
          rows: 1
        }
      )
        .then(res => {
          res = res.data;
          // console.log(res);
          this.total = res.total;
        })
        .catch(err => {
          this.$message.error(err);
        });
    },
  },

};
</script>

<style scoped lang="scss">
@import "@/assets/css/public.css";
@import "@/assets/css/dyInfo.css";

.countSearch {
  margin-top: 9px;
  height: 46px;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    min-height: 0;
    /* text-align: center; */
    justify-content: center;
    margin: auto;
    padding-left: 10%;
    padding-right: 10%;

    .searchInfo {
      background-color: #dedddd;
      padding: 11px 17px;

      span {
        color: #f00;
      }
    }
  }
}
</style>