import { createRouter, createWebHistory } from 'vue-router'

const routes = [

  {
    path: '/',
    name: 'landingPage',
    component: () => import(/* webpackChunkName: "about" */ '../views/landingPage.vue')
  },
  {
    path:'/products/:category',
    name: 'Category',
    component: () => import('../views/singleCategory.vue')
  },



  {
    path:'/loginRegister',
    name: 'loginRegister',
    component: () => import('../views/loginRegister.vue')
  },

  
  {
    path:'/admin',
    name: 'admin',
    component: () => import('../views/admin.vue')
  },

  {
    path:'/singleProduct/:id',
    name:'singleProduct',
    component: () => import ('../views/singleProduct.vue'),
    props: true
  }


]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router