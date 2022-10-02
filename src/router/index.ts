import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: ()=>import ("@/views/Home/index.vue")
  },
  {
    path: '/branch',
    name: 'branch',
    component: ()=>import ("@/views/Branch/index.vue")
  },
  {
    path: '/remote',
    name: 'remote',
    component: ()=>import ("@/views/Remote/index.vue")
  },


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
