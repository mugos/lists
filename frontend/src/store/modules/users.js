// Module state
const state = {
  users: []
}

// Module Mutations
const mutations = {
  // Clear the users
  CLEAR_USERS (state) { state.users = [] },
  // Set the users
  SET_USERS (state, users) { state.users = users }
}

// Module Actions
const actions = {
  // Clear the users
  clearUsers ({ commit }) { commit('CLEAR_USERS') },
  // Search for users
  searchUsers ({ commit }, q) {
    commit('SET_USERS', [{id: 1, email: 'test1@example.com'}, {id: 2, email: 'test@example.com'}])
  }
}

// Module Getters
const getters = {
  // Return the current users
  currentUsers (state) { return state.users }
}

// Exports the Vuex Module
export default {
  state,
  mutations,
  actions,
  getters
}
