import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import CharacterPage from '../views/Character.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About
 
  },
  {
    path: '/character',
    name: 'CharacterPage',
    component: CharacterPage
  },

]

const router = new VueRouter({
  routes
})

export default router
