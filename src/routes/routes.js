import { createRouter, createWebHistory } from 'vue-router'

import Login from "../pages/Login"
import Film from "../pages/Home"

new vue ({
  render: h =>(App),
}).$mount('#app')

const routes = [
  {
    path: '/',
    name: 'Login',
    component: Login,
    meta:{
      requiresAuth:false
    }
  },
  {
    path: '/Home',
    name: 'Home',
    component: Film,
    meta:{
      requiresAuth:false
    }
  },
]


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})


router.beforeEach((to,from,next)=>{
  const currentUser = localStorage.getItem("token")
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

  if(requiresAuth && !currentUser) next("/")
  else if(!requiresAuth && currentUser) next("/Home")
  else next()
})  

export default router
