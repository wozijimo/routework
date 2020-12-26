import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/byname',
    name: 'byName',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "byname" */ '../views/byName.vue')
  },{
    path: '/emjio',
    name: 'emjio',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "emjio" */ '../views/emjio.vue')
  },{
    path: '/friendsNew',
    name: 'friendsnew',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "friendsnew" */ '../views/friendsNew.vue'),
  },{
    path: '/zhuxingtu',
    name: 'zhuxingtu',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "zhuxingtu" */ '../views/zhuxingtu.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router
