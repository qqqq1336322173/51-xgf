<template>
  <div class="container">
    <!-- 退出登录 -->
  </div>
</template>

<script>
/*
清除缓存
弹个退出成功

*/
import storage from '@/assets/js/storage'
export default {
  middleware: 'authenticated',
  created () {
    // this.$message('注销成功');
    storage.remove('userid');
    storage.remove('username');
    storage.remove('user');

  }
};
</script>

<style lang="scss" scoped></style>
