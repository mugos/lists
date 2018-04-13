// Dependencies
import Vue from 'vue'

// App entrypoint
import App from './App'

// Resources
import store from './store'
import router from './router'

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App),
  store,
  router
})
