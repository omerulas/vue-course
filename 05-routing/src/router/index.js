import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import StudentsView from '@/views/StudentsView.vue'
import StudentDetailView from '@/views/StudentDetailView.vue'
import NotFound from '@/views/NotFound.vue'

const routes = [
  { path: '/', name: 'home', component: HomeView },
  { path: '/about', name: 'about', component: () => import('../views/AboutView.vue') },
  { path: '/students', name: 'students', component: StudentsView },
  { path: '/studentList', redirect: '/students', component: StudentsView },
  { path: '/:catchAll(.*)', name: 'notFound', component: NotFound },
  { path: '/students/:id', name: 'studentDetail', component: StudentDetailView, props: true },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
