import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import PortfolioView from '../views/PortfolioView.vue'
import TrendingListingsView from '../views/TrendingListingsView.vue'
import ExchangesView from '../views/ExchangesView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: PortfolioView
    },
    {
      path: '/trendinglistings',
      name: 'trendinglistings',
      component: TrendingListingsView
    },
    {
      path: '/exchanges',
      name: 'exchanges',
      component: ExchangesView
    },
  ]
})

export default router
