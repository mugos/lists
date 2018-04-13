// Small factory
const factory = async () => {
  //
  let res = []

  //
  for (let i = 1; i <= 100; i++) {
    // Send it
    res.push({
      id: i,
      name: `List ${i}`,
      beginDate: '01/04/2017',
      endDate: '25/01/2017',
      oficial: true,
      user: 'Admin',
      products: [{name: 'Product X', qty: 5}]
    })
  }

  // Return both
  return {
    then (cb) {
      window.setTimeout(() => { cb(res) }, 1000)
      // window.setTimeout(() => { cb([]) }, 1000)
    }
  }
}

// Module state
const state = {
  currentList: 0,
  emptyList: {},
  lists: {},
  listsArr: []
}

// Module Mutations
const mutations = {
  // Clear the state
  CLEAR_LISTS (state) {
    state.currentList = 0
    state.lists = {}
    state.listsArr = []
  },
  // Set the current list
  SET_CURRENT_LIST (state, id) { state.currentList = id },
  // Set empty list structure
  SET_EMPTY_LIST_STRUCTURE (state, o) { state.emptyList = o },
  // Set the lists
  SET_LISTS (state, lists) {
    state.listsArr = lists
    state.listsArr.forEach((item) => { state.lists[item.id] = item })
  }
}

// Module Actions
const actions = {
  // Clear the list
  clearLists ({ commit }) { commit('CLEAR_LISTS') },
  // Set the current list
  setCurrentList ({ commit }, id) { commit('SET_CURRENT_LIST', id) },
  // Get lists structure
  async getListsStructure ({ commit }) { commit('SET_EMPTY_LIST_STRUCTURE', {id: 0, name: '', beginDate: '', endDate: '', oficial: false, user: '', products: []}) },
  // Remove list
  // async removeList ({ commit }) { },
  // Get the lists
  async getLists ({ commit }) {
    // Get the results
    let res = await factory()

    // Commit the results
    commit('SET_LISTS', res)
  }
}

// Module Getters
const getters = {
  // Get the lists
  lists (state) { return state.listsArr },
  // Get the current list
  currentList (state) { return state.lists[state.currentList] },
  // List structure
  listsStructure (state) { return state.emptyList }
}

// Exports the Vuex Module
export default {
  state,
  mutations,
  actions,
  getters
}
