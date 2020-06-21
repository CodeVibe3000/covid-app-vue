import Vue from 'vue'
import { IonicVueRouter } from "@ionic/vue";

Vue.use(IonicVueRouter)

  const routes = [
  {
    path: '/',
    name: 'World',
    component: () => import('../views/WorldPage.vue')
  },
  {
    path: '/country',
    name: 'Country',
    component: () => import('../views/CountryPageContainer.vue')
  }
]

const router = new IonicVueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
