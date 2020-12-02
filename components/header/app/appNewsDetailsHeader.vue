<template>
  <div class="appNewsDetailsHeader">
    <mt-header title="动态信息">
      <router-link to="/test" slot="left" @click="goBack">
        <mt-button icon="back" @click="goBack"></mt-button>
      </router-link>
      <router-link to="" slot="right">
        <mt-button class="news-btn">
          <img class="icon-img" src="@/assets/img/app/order/more.png" alt="" />
        </mt-button>
      </router-link>
    </mt-header>
  </div>
</template>
<script>
export default {
  methods: {
    goBack() {
      history.go(-1);
    }
  }
};
</script>
<style lang="scss">
.appNewsDetailsHeader {
  .mint-header {
    background-color: #ff2929;
    font-size: 0.514286rem;
    height: 1.333333rem;
  }
  .mint-header-title {
    color: #fff !important;
  }
  .mintui {
    font-family: "mintui" !important;
    font-size: 0.5rem;
  }
  .icon-img {
    width: 0.6rem;
    height: 0.533333rem;
    margin-top: 0.133333rem;
  }
}
</style>
