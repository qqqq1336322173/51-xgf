<template>
  <div class="box">
    <div class="item">
      <img src="~assets/img/home/float01.png"
           alt="" />
      <p>在线咨询</p>
    </div>
    <div class="item">
      <img src="~assets/img/home/float02.png"
           alt="" />
      <p>考试报名</p>
    </div>
    <div class="item">
      <img src="~assets/img/home/float03.png"
           alt="" />
      <p>课程价目</p>
    </div>
    <div class="item">
      <img src="~assets/img/home/float04.png"
           alt="" />
      <p>考试费用</p>
    </div>
    <div class="item">
      <img src="~assets/img/home/float05.png"
           alt="" />
      <p>学习资料</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss">
* {
  margin: 0;
  padding: 0;
}
.box {
  width: 93px;
  height: 450px;
  background-color: #fff;
  position: fixed;
  right: 0;
  bottom: 5px;
  z-index: 1000;
  display: -webkit-flex;
  display: flex;
  display: -webkit-box;
  display: -ms-flexbox;
  flex-wrap: wrap;
  flex-direction: column;
  font-size: 16px;
  color: #fff;
  .item {
    flex: 1;
    width: 100%;
    background-color: #ff2929;
    display: -webkit-flex;
    display: flex;
    display: -webkit-box;
    display: -ms-flexbox;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 3px;
    img {
      margin-bottom: 4px;
    }
  }
  .item:last-child {
    margin-bottom: 0;
  }
}
</style>
