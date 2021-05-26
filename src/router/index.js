import Vue from 'vue'
import VueRouter from 'vue-router'
import BuyerPage from '../views/BuyerPage.vue'
import SellerPage from '../views/SellerPage.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'BuyerPage',
    component: BuyerPage
  },
  {
    path: '/for-sellers',
    name: 'SellerPage',
    component: SellerPage
    // component: () => import(/* webpackChunkName: "about" */ '../views/SellerPage.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
