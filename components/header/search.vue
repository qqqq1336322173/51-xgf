<template>
  <div class="my-search">
    <div class="search-box">
      <el-input placeholder="请输入您要搜索的内容"
                v-model.trim="keyword"></el-input>
      <!-- <span>搜索</span> -->
      <img class="search-img"
           src="~assets/img/index/search.png"
           alt="搜索"
           @click="searchBtn">
    </div>
  </div>
</template>


<script>
export default {
  data () {
    return {
      keyword: "",
      url: this.$store.state.serverUrl.serverUrl, //服务器地址
    };
  },
  mounted () {
    this.keyword = this.$route.query.keyword || ''
  },
  methods: {
    searchBtn () {
      console.log(this.keyword)
      this.$store.state.search.keyword = this.keyword || '';
      // console.log(this.$store.state.search.keyword)
      //只要这个路由不是 /searchNews都得跳转
      /*if (this.$route.path != "/searchNews") {
        this.$router.push({ path: '/searchNews', query: { keyword: this.keyword } });
      } else {
        console.log(this.$store.state.search.keyword)
        this.$store.dispatch('EDIT_KEYWORD', this.keyword)
        this.$store.commit('EDIT_KEYWORD', this.keyword)
        this.$router.push({ path: '/searchNews', query: { keyword: this.keyword } });
      }*/
      this.$store.dispatch('EDIT_KEYWORD', this.keyword)
      this.$store.commit('EDIT_KEYWORD', this.keyword)
      sessionStorage.setItem('keyword', this.keyword)
      this.$router.push({ path: '/searchNews', query: { keyword: this.keyword } });

      //跳转到其他页面并且带上搜索的值
      // this.$router.push({ path: '/searchNews', query: { keyword: this.keyword } });
    },
    init () {

    }
  }
};
</script>
<style lang="scss">
.my-search {
  height: 60px;
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  justify-content: center;
  align-items: center;

  .search-box {
    width: 320px;
    height: 40px;
    border-radius: 10px;
    background-color: #fff;
    padding-right: 20px;
    padding-left: 20px;
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    justify-content: space-between;
    align-items: center;
    box-sizing: border-box;

    .el-input {
      width: 250px;

      .el-input__inner {
        padding: 0;
        border: 0;
      }
    }

    .search-img {
      width: 23px;
      height: 23px;
    }
  }
}

/* .el-input > input {
  height: 26px;
}
.my-search > span {
  margin-left: 10px;
  color: #fff;
} */
</style>