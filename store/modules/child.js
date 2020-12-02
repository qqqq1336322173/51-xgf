const state = () => ({
  lastIndex: 0,
})
const mutations = {
  EDIT_INDEX: (state, text) => {
    state.lastIndex = text;
  }
}
const actions = {
  EDIT_INDEX: ({
    commit
  }, text) => {
    commit('EDIT_INDEX', text)
  }
}
export default {
  // namespaced: true,
  state,
  mutations,
  actions
}
