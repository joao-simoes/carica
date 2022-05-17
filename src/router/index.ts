import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';
import Homepage from '../views/Homepage.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Homepage
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
