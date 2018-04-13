// Dependencies
import Vue from 'vue'
import Vuex from 'vuex'

// Hook it
Vue.use(Vuex)

// Vuex modules
import lists from './modules/lists'
import users from './modules/users'

// Export new instance of Vuex Store
export default new Vuex.Store({
  // Vuex Modules
  modules: {
    lists,
    users
  }
})
