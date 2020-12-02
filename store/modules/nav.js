const state = () => ({
  flag: false,
})
const mutations = {
  EDIT_FLAG: (state, text) => {
    state.flag = text;
  }
}
const actions = {
  EDIT_FLAG: ({
    commit
  }, text) => {
    commit('EDIT_FLAG', text)
  }
}
export default {
  // namespaced: true,
  state,
  mutations,
  actions
}
