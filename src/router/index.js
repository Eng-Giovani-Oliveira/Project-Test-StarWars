import { createRouter, createWebHashHistory } from 'vue-router'
import firebase from 'firebase/compat/app'
import 'firebaseui/dist/firebaseui.css'


const routes = [
  {
    path: '/',
    name: 'login',
    component: () => import(/* webpackChunkName: "login" */ '../views/LoginView.vue')  },
  {
    path: '/home',
    name: 'home',
    // route level code-splitting
    // this generates a separate chunk (home.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "home" */ '../views/HomeView.vue'),
    meta: {
      requireAuth: true,
    }
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})
router.beforeEach((to, from, next) => {

  if (to.matched.some(record => record.meta.auth)) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next()
      } else {
        next({
          path: "/",
        })
      }
    })
  } else if (to.matched.some(record => record.meta.guest)) {
    firebase.auth().onAuthStateChanged(user => {
      if (user) {
        next({
          path: "/home",
        })
      } else {
        next()
      }
    })

  } else {
    next()
  }

})
export default router
