const state = () => ({
  keyword: '',
})
const mutations = {
  EDIT_KEYWORD: (state, text) => {
    state.keyword = text;
  }
}
const actions = {
  EDIT_KEYWORD: ({
    commit
  }, text) => {
    commit('EDIT_KEYWORD', text)
  }
}
export default {
  // namespaced: true,
  state,
  mutations,
  actions
}
