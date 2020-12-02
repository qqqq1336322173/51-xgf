const state = () => ({
  serverUrl: "http://120.78.61.58:81/eduonline/",
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
