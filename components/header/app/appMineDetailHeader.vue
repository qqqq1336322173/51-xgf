<template>
  <div class="appMineDetailHeader">
    <mt-header title="我的信息">
      <router-link to="/test?myHome"
                   slot="left"
                   @click="goBack">
        <mt-button icon="back"
                   @click="goBack"></mt-button>
      </router-link>
    </mt-header>
  </div>
</template>
<script>
export default {
  methods: {
    goBack () {
      history.go(-1);
    }
  }
};
</script>
<style lang="scss">
.appMineDetailHeader {
  width: 100vw;
  * {
    margin: 0;
    padding: 0;
  }
  .mint-header {
    background-color: #fff;
    color: #333;
    font-size: 0.514286rem;
    padding: 1.146667rem 10px 0.533333rem;
  }
  .mintui {
    font-family: "mintui" !important;
    font-size: 0.5rem;
    padding: 12px;
  }
}
</style>
