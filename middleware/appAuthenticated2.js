export default function ({
  store,
  redirect
}) {
  // If the user is not authenticated
  if (!store.state.appAuthenticated2) {
    console.log(1)
    redirect('/');
    location.reload();
    return false;
  }
}
