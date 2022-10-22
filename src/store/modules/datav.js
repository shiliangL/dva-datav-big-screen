import store from 'store'

const state = {
  jsonEditorValue: {}
}

const mutations = {
  // 清空所有缓存信息
  SET_STORE_CLEAR_ALL (state) {
    store.clearAll()
  },
  // 设置state
  SET_STORE_STATE (state, { key, value, isLocal }) {
    // eslint-disable-next-line no-prototype-builtins
    if (state.hasOwnProperty(key)) {
      state[key] = value
      // eslint-disable-next-line no-debugger
      if (isLocal) store.set(key, value)
    }
  }
}

const actions = {
  SET_STORE_STATE ({ commit }) {
    commit('SET_STORE_STATE')
  }
}

export default {
  namespaced: true,
  state,
  actions,
  mutations
}
