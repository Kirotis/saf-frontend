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
    path: '/room/:roomName',
    name: ':room',
    props: {
      isHost: true
    },
    component: () => import('../views/HrefRoom.vue')
  },
  {
    path: '/watch/:roomName',
    name: 'watch',
    props: {
      isHost: false
    },
    component: () => import('../views/HrefRoom.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router