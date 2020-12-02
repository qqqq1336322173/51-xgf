const state = () => ({
  active_id: "index",
})
const mutations = {
  EDIT_TAB_BAR: (state, text) => {
    state.active_id = text;
  }
}
const actions = {
  EDIT_TAB_BAR: ({
    commit
  }, text) => {
    commit('EDIT_TAB_BAR', text)
  }
}
export default {
  // namespaced: true,
  state,
  mutations,
  actions
}
