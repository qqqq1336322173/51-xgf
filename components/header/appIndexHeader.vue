<template>
  <div class="appIndexHeader">
    <img class="header-img01"
         src="@/assets/img/app/login/img02.png"
         alt="">
    <div class="search-input-box">
      <img class="icon-img"
           src="@/assets/img/app/order/search02.png"
           alt="">
      <input placeholder="JAVA"
             class="search-input"
             type="text">
    </div>
    <img class="icon-img"
         src="@/assets/img/app/order/more.png"
         alt="">
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
.appIndexHeader {
  width: 100vw;
  height: 1.333333rem;
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  justify-content: space-between;
  align-items: center;
  background-color: #ff2a29;
  padding-left: 0.466667rem !important;
  padding-right: 0.466667rem !important;
  box-sizing: border-box;
  * {
    margin: 0;
    padding: 0;
  }
  .header-img01 {
    width: 2.4rem;
  }
  .search-input-box {
    border-radius: 1rem;
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    align-items: center;
    background-color: #fff;
    overflow: hidden;
    padding-left: 0.306667rem;
    padding-right: 0.306667rem;
    width: 5.6rem;
    box-sizing: border-box;
    .search-input {
      height: 0.8rem;
      outline: none;
      border: none;
      margin-left: 0.4rem;
    }
    .search-input::placeholder {
      color: #dfdfdf;
    }
  }
  .icon-img {
    width: 0.586667rem;
  }
}
</style>