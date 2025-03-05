import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import Articles from '@/articles/Articles.vue'
import Article from '@/articles/Article.vue'
import Contact from '@/components/contact/Contact.vue'
import Login from '@/auth/Login.vue'

const checkAuth = (to, from, next) => {
  const isAnonymous = true // Burada gerçek auth kontrolü olmalı
  if (isAnonymous) {
    next('/login') // next() ile yönlendirme yapmalısın
  } else {
    next()
  }
}

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView,
    },
    {
      path: '/yazilarim',
      name: 'articles',
      component: Articles,
      beforeEnter: checkAuth,
      children: [
        /**
         * Nested Router:
         * parent componentte
         * <router-view></router-view>
         * kullanılmalıdır
         */
        { path: ':id', component: Article }
      ]
    },
    {
      path: '/yazilarim/:id',
      name: 'article',
      component: Article,
    },
    {
      path: '/iletisim',
      name: 'contact',
      component: Contact,
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
    }
  ],
  linkActiveClass: 'text-white bg-sky-600'
})

// router.beforeEach((to, from) => {
//   // Herhangi bir sayfaya geçildiğinde çalışan bir fonksiyondur
//   const isAuthenticated = false
//   if (to.path !== '/login' && !isAuthenticated) {
//     return '/login'
//   }
//   return true
// })

export default router
