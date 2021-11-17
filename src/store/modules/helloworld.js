// state
const state = () => ({
  fullName: 'Fullname from Vuex',
})

// getters
const getters = {
  fullName: (state) => {
        return state.fullName
    },
}

// actions
const actions = {
  actSetFullName ({ commit } , payload) {
    commit('setFullName', payload)
  },
}

// mutations
const mutations = {
  setFullName (state, payload) {
    console.log(payload)
    state.fullName = payload
  },
}

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
}