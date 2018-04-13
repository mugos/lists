// Dependencies
import Vue from 'vue'
import VueRouter from 'vue-router'

// Hook it
Vue.use(VueRouter)

// Views
import IndexView from './../views/Index'
import EditView from './../views/Edit'
import NewView from './../views/New'

// Define the routes
const routes = [
  { path: '/', redirect: '/lists' },
  { path: '/lists', name: 'list-index-view', component: IndexView },
  { path: '/lists/new', name: 'new-list-view', component: NewView },
  { path: '/lists/:id', name: 'edit-list-view', component: EditView }
]

// Export the instance of VueRouter
export default new VueRouter({
  mode: 'history',
  routes
})
