const state = () => ({
  userInfo: {},
})
const mutations = {
  RECORD_USER_INFO: (state, {
    userInfo
  }) => {
    state.userInfo = userInfo
  },
  RESET_USER_INFO: (state) => {
    state.userInfo = {}
  },
}
const actions = {
  // 同步记录用户信息
  recordUserInfo ({
    commit
  }, userInfo) {
    commit('RECORD_USER_INFO', {
      userInfo
    })
  },
  // 重置用户信息
  resetUserInfo ({
    commit
  }) {
    commit('RESET_USER_INFO')
  }
}
export default {
  // namespaced: true,
  state,
  mutations,
  actions
}
