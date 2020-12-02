<template>
  <div>
    <floating-window></floating-window>
    <countSearch />
    <searchNewsList />
  </div>
</template>

<script>

import floatingWindow from "@/components/floatingWindow";
import countSearch from "@/components/body/countSearch";
import searchNewsList from "@/components/body/searchNewsList";
export default {
  components: {
    countSearch,
    searchNewsList,
    floatingWindow
  },
  data () {
    return {
      keyword: ''
    };
  },
  created () {
    // console.log(sessionStorage.getItem('keyword'))
    //判断是否是手机端
    if (this.isMobile) {
      this.$router.push("/appSearchPage");
    } else {
      // this.$router.push("/searchNews?keyword=" + this.$store.state.search.keyword);
      this.$router.push({ path: '/searchNews', query: { keyword: sessionStorage.getItem('keyword') } });
    }
  },
  mounted () {
    // this.keyword = this.$store.state.search.keyword
    // console.log(this)
  },
  methods: {

  }

};
</script>

<style scoped lang="scss">
@import "@/assets/css/public.css";
</style>