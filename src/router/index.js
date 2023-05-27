import { createRouter, createWebHistory } from 'vue-router'
import TodosView from '../views/TodosView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: TodosView
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
