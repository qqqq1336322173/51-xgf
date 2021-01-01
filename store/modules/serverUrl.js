const state = () => ({
  serverUrl: "http://81.69.237.90:81/eduonline/",
})
const mutations = {
  edit: (state, text) => {
    // state.serverUrl = text;
  }
}
const actions = {
  edit: ({
    commit
  }, text) => {
    commit('edit', text)
  }
}
export default {
  // namespaced: true,
  state,
  mutations,
  actions
}
