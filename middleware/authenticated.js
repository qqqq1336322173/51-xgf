import storage from '@/assets/js/storage'
export default function ({
  store,
  redirect
}) {
  // If the user is not authenticated
  if (!store.state.authenticated) {
    // this.$message('注销成功');
    storage.remove('userid');
    storage.remove('username');
    storage.remove('user');
    redirect('/')
    location.reload();
    return false;
  }
}
