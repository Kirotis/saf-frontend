import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/host/:roomName',
    name: 'Room',
    props: true,
    component: () => import('../views/RoomHost.vue')
  },
  {
    path: '/join/:roomName',
    name: 'Room',
    props: true,
    component: () => import('../views/RoomJoin.vue')
  },
]

const router = new VueRouter({
  routes
})

export default router
